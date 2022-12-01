<template>
  <view>
    <view class="head">
      <view class="head_1">
        <view class="head_1_1" @click="goBack">
          <image class="head_1_1_1" src="../../static/fanhui_w.webp" />
        </view>
        <view class="head_1_2">超级会员</view>
        <view class="head_1_3" />
      </view>
      <view class="head_2">
        <view class="head_2_2">
          <view class="head_2_2_1">
            <image class="head_2_2_1_1" :src="userInfo.head" />
            <view class="head_2_2_1_2">
              <view class="head_2_2_1_2_1">{{ userInfo.nick_name }}</view>
              <view class="head_2_2_1_2_1">{{ userInfo.vip_endtime }}</view>
            </view>
          </view>
          <view class="head_2_2_2">开通</view>
        </view>
      </view>
    </view>
    <view class="content" id="content">
      <image class="content_1" src="../../static/hyline.png" />
      <view class="content_2">
        <view class="content_2_1">企业专享</view>
        <view class="content_2_2">
          <view class="content_2_2_1">12个月会员</view>
          <view class="content_2_2_2">{{ price }}
            <view style="font-size:26rpx;line-height:40rpx;margin-left:7px;">元</view>
          </view>
        </view>
        <view class="content_2_3">
          <view>送道具卡(置顶卡*10、变色卡*10)</view>
        </view>
      </view>
      <view class="content_3">
        <view class="content_3_1">选择支付方式</view>
        <u-radio-group placement="column" :value="payParams.paytype" @change="changeRadio">
          <view class="content_3_2">
            <view class="content_3_2_1">
              <image class="content_3_2_1_1" src="../../static/weixin.webp" />
              <view class="content_3_2_1_2">微信支付</view>
            </view>
            <u-radio size="36rpx" name="wxpay" />
          </view>
          <!-- <view class="content_3_2">
            <view class="content_3_2_1">
              <image class="content_3_2_1_1" src="../../static/a.webp" />
              <view class="content_3_2_1_2">支付宝支付</view>
            </view>
            <u-radio size="36rpx" name="alipay" />
          </view> -->
        </u-radio-group>
        <view class="content_3_3" @click="createOrder">特惠{{ price }}元升级</view>
      </view>
      <view class="content_4">
        <view class="content_4_1">开通即代表已阅读并同意VIP的</view>
        <view class="content_4_2" @click="goXY">相关协议</view>
      </view>
    </view>
    <u-overlay :show="kfShow" @click="kfShow = false">
      <view class="kf">
        <view class="kf_1">
          <view class="kf_1_1">
            <view class="kf_1_1_1">客服电话：</view>
            <view class="kf_1_1_2">18511169119</view>
          </view>
          <view class="kf_1_1">
            <view class="kf_1_1_1">客服微信：</view>
            <view class="kf_1_1_2">XYLD01</view>
          </view>
          <image class="kf_1_2" src="../../static/kf.png" />
          <view class="kf_1_3">(客服微信)</view>
        </view>
      </view>
    </u-overlay>
  </view>
</template>

<script>
import { formatTime } from '../../utils'
import { alipay, aliPayH5, createOrder, memberIndex, orderDif, pay, payH5 } from '../../utils/api'
export default {
  data() {
    return {
      userInfo: {},
      price: 0,
      payParams: { paytype: 'wxpay' },
      kfShow: false
    }
  },
  methods: {
    memberIndex() {
      memberIndex().then(res => {
        this.userInfo = res.data.member
        this.userInfo.head = `https://admin.bdhuoke.com${this.userInfo.head}`
        this.userInfo.vip_endtime = formatTime(this.userInfo.vip_endtime * 1000)
      })
    },
    orderDif() {
      orderDif().then(res => {
        this.price = res.data
      })
    },
    createOrder() {
      //#ifdef APP-PLUS
      uni.showLoading({ title: '正在创建订单...' });
      createOrder(this.payParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        if (this.payParams.paytype == 'wxpay') this.pay(res.data.sn)
        else this.alipay(res.data.sn)
      })
      //#endif
      //#ifdef H5
      this.kfShow = true
      //#endif
    },
    alipay(order_sn) {
      alipay({ order_sn }).then(res => {
        uni.hideLoading();
        res = this.escape2Html(res);
        uni.requestPayment({
          provider: 'alipay',
          orderInfo: res,
          success: () => {
            this.memberIndex();
            this.$u.toast('支付成功');
          }
        });
      })
    },
    escape2Html(str) {
      var arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' };
      return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
        return arrEntities[t];
      });
    },
    changeRadio(name) {
      this.payParams.paytype = name
    },
    pay(order_sn) {
      pay({ order_sn }).then(res => {
        uni.hideLoading();
        uni.requestPayment({
          provider: 'wxpay',
          orderInfo: res,
          success: () => {
            this.memberIndex();
            this.$u.toast('支付成功');
          }
        });
      });
    },
    goXY() {
      //#ifdef APP-PLUS
      plus.runtime.openURL('http://hyxy.bdhuoke.com/');
      //#endif
      //#ifdef H5
      location.href = 'http://hyxy.bdhuoke.com/';
      // plus.runtime.openURL('http://hyxy.bdhuoke.com/');
      //#endif
    },
    goBack() {
      uni.navigateBack();
    },
    demo(order_sn) {
      payH5({ order_sn }).then(res => {
        console.log(res)
        // 提取href=""中包含的数据
        var reg = /href="(.*)"/;
        var url = reg.exec(res)[1];
        location.href = url;
      })
    },
    aliPayH5(order_sn) {
      aliPayH5({ order_sn }).then(res => {
        const newWindow = window.open('', '_blank');
        newWindow.document.write(res);
        newWindow.focus();
        // document.getElementById('content').innerHTML = res
        // console.log(res)
      })
    },
  },
  onLoad() {
    this.memberIndex()
    this.orderDif()
  },
}
</script>

<style lang="scss" scoped>
@import './pay.scss';
</style>