<template>
  <view>
    <view class="content">
      <view class="content_1">{{ loginType === 1 ? '账号登录' : '手机验证码登录' }}</view>
      <view class="content_2">
        <u--input placeholder="请输入登录账号" border="none" v-model="phone" />
      </view>
      <view class="content_2" v-show="loginType == 1">
        <u--input placeholder="请输入密码" border="none" v-model="password" type="password" />
      </view>
      <view class="content_2" v-show="loginType == 2">
        <u-input placeholder="请输入验证码" border="none" v-model="code">
          <template slot="suffix">
            <u-code ref="uCode" @change="codeChange" changeText="X秒重新获取" />
            <u-button @tap="getCode" :text="tips" type="primary" shape="circle" plain color="#1F73F1" size="mini"
              style="width: 148rpx;" />
          </template>
        </u-input>
      </view>
      <view class="content_3">
        <!-- <view class="content_3_1" @click="goSign">新用户注册</view> -->
        <view class="content_3_2" @click="goForgetPassword">忘记密码?</view>
      </view>
      <view class="content_4" @click="login">登录</view>
      <view class="content_5" v-show="loginType == 1" @click="loginType = 2">手机验证码登录</view>
      <view class="content_5" v-show="loginType == 2" @click="loginType = 1">账号登录</view>
    </view>
    <view class="bottom">
      <view class="bottom_1">登录即代表您已阅读并同意</view>
      <view class="bottom_2" @click="goProtocol">《火客会员用户用户协议》</view>
    </view>
  </view>
</template>

<script>
import { login, sms, SmsLogin } from '../../utils/api'
export default {
  data() {
    return {
      loginType: 1,
      tips: "获取验证码",
      phone: '',
      password: '',
      code: "",
      smsParams: {}
    }
  },
  methods: {
    goSign() {
      uni.navigateTo({
        url: '/pages/login/sign'
      })
    },
    login() {
      if (this.loginType == 1) this.passwordLogin()
      else this.smsLogin()
    },
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        uni.showLoading({ title: '正在获取验证码' })
        this.smsParams.phone = this.phone;
        this.smsParams.type = 'login'
        sms(this.smsParams).then(res => {
          if (res.code == -1) return this.$u.toast(res.msg)
          uni.hideLoading();
          uni.$u.toast('验证码已发送');
          this.$refs.uCode.start();
        })
      } else {
        uni.$u.toast('倒计时结束后再发送');
      }
    },
    passwordLogin() {
      let params = { phone: this.phone, password: this.password }
      login(params).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        uni.$u.toast('登录成功');
        uni.setStorageSync('app_token', res.data.app_token)
        uni.switchTab({ url: '/pages/index/index' })
      })
    },
    smsLogin() {
      let params = { phone: this.phone, code: this.code }
      SmsLogin(params).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        uni.$u.toast('登录成功');
        uni.setStorageSync('app_token', res.data.app_token)
        uni.switchTab({ url: '/pages/index/index' })
      })
    },
    goForgetPassword() {
      uni.navigateTo({
        url: '/pages/login/forget_password'
      })
    },
    goProtocol() {
      uni.navigateTo({
        url: '/pages/index/protocol'
      });
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>