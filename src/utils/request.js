const request = (config) => {
  // console.log('*******************************************************************')
  console.log(config)
  // console.log('*******************************************************************')
  config.url = 'https://nad.bdhuoke.com/vip_app' + config.url;
  config.header = { 'Content-Type': 'application/x-www-form-urlencoded' }
  if (uni.getStorageSync('app_token')) {
    config.header.token = uni.getStorageSync('app_token')
  }
  // config.url = 'https://appv41.bdhuoke.com/api' + config.url;
  if (!config.data) config.data = {};
  let promise = new Promise((resolve, reject) => {
    uni.request(config).then(responses => {
      if (responses[0]) {
        uni.showToast({
          title: '网络超时,请刷新重试',
          duration: 3000,
          icon: 'none'
        });
        reject({ message: "网络超时" });
      } else {
        if (responses[1].statusCode == 401) {
          uni.removeStorageSync('userId');
          uni.removeStorageSync('token');
        }
        let response = responses[1].data;
        if (response.code == -2) {
          uni.removeStorageSync('userId');
          uni.removeStorageSync('token');
          uni.reLaunch({
            url: '/pages/login/index'
          });
        }
        // console.log('-------------------------------------------------------------------')
        // console.log(response)
        // console.log('-------------------------------------------------------------------')
        resolve(response);
      }
    }).catch(error => reject(error))
  })
  return promise;
};
export default request;