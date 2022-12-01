<template>
  <view>

    <Head />
    <view class="content">
      <view class="content_1">注册</view>
      <view class="content_2">
        <u--input placeholder="请输入手机号" border="none" v-model="registerParams.phone" />
      </view>
      <view class="content_2">
        <u-input placeholder="请输入验证码" border="none" v-model="registerParams.code">
          <template slot="suffix">
            <u-code ref="uCode" @change="codeChange" changeText="X秒重新获取" />
            <u-button @tap="getCode" :text="tips" type="primary" shape="circle" plain color="#1F73F1" size="mini"
              style="width: 148rpx;" />
          </template>
        </u-input>
      </view>
      <view class="content_2">
        <u--input placeholder="请输入密码" border="none" type="password" v-model="registerParams.password" />
      </view>
      <view class="content_2">
        <u--input placeholder="请再次输入密码" border="none" type="password" v-model="registerParams.verifyPassword" />
      </view>
      <view class="content_2">
        <u--input placeholder="请输入邀请码(必填)" border="none" v-model="registerParams.uuid" />
      </view>
      <view class="content_3" @click="register">注册</view>
    </view>
    <u-modal :show="isShow" title="系统提示" content='注册成功' @confirm="_pageBack" />
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { register, sms } from '../../utils/api'
export default {
  data() {
    return {
      tips: "获取验证码",
      registerParams: {},
      smsParams: {},
      isShow: false,
    }
  },
  methods: {
    register() {
      if (this.registerParams.password != this.registerParams.verifyPassword)
        return this.$u.toast('两次密码不一致')
      register(this.registerParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        // this.$u.toast('注册成功')
        this.isShow = true
      })
    },
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        uni.showLoading({ title: '正在获取验证码' })
        this.smsParams.phone = this.registerParams.phone;
        this.smsParams.type = 'register'
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
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './sign.scss';
</style>