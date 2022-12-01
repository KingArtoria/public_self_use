
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/hall/index","pages/assets/index","pages/task/index","pages/user/index","pages/user/verified","pages/user/verified_ok","pages/user/my_task","pages/index/info","pages/login/index","pages/login/sign","pages/assets/withdraw","pages/user/points_mall","pages/user/feedback","pages/user/settings","pages/user/change_password","pages/user/my_team","pages/user/vip","pages/user/promote","pages/login/forget_password","pages/user/edit_info","pages/user/bind_account","pages/user/submit","pages/user/about_us","pages/index/news","pages/index/search","pages/index/protocol","pages/hall/mall","pages/user/leaderboard","pages/user/record","pages/user/open_lower","pages/user/pay","pages/user/make_list"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"火客云创","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#B0ADAD","selectedColor":"#1F73F1","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"/static/shouye-a.webp","selectedIconPath":"/static/shouye-ll.webp"},{"pagePath":"pages/hall/index","text":"大厅","iconPath":"/static/dating_a.webp","selectedIconPath":"/static/dating_l.webp"},{"pagePath":"pages/assets/index","text":"资产","iconPath":"/static/zichan-a.webp","selectedIconPath":"/static/zichan-l.webp"},{"pagePath":"pages/user/index","text":"我的","iconPath":"/static/wode_a.webp","selectedIconPath":"/static/wode-l.webp"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"火客云创","compilerVersion":"3.6.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","onReachBottomDistance":300}},{"path":"/pages/hall/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/assets/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/task/index","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/verified","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/verified_ok","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/my_task","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/info","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/index","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/sign","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/assets/withdraw","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/points_mall","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/feedback","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/settings","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/change_password","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/my_team","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/vip","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/promote","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/forget_password","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/edit_info","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/bind_account","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/submit","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/about_us","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/news","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/search","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/protocol","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/hall/mall","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/leaderboard","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/record","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/open_lower","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/pay","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/make_list","meta":{},"window":{"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});