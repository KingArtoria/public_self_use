<template>
  <view>
    <Head />
    <view class="content">
      <view class="content_1">找回密码</view>
      <view class="content_2">  
        <u--input placeholder="请输入手机号" border="none" v-model="forgetPassParams.phone" />
      </view>
      <view class="content_2">
        <u-input placeholder="请输入验证码" border="none" v-model="forgetPassParams.code">
          <template slot="suffix">
            <u-code ref="uCode" @change="codeChange" changeText="X秒重新获取" />
            <u-button @tap="getCode" :text="tips" type="primary" shape="circle" plain color="#1F73F1" size="mini"
              style="width: 148rpx;"/>
          </template>
        </u-input>
      </view>
      <view class="content_2">
        <u--input placeholder="请输入密码" border="none" type="password" v-model="forgetPassParams.password" />
      </view>
      <view class="content_2">
        <u--input placeholder="请再次输入密码" border="none" type="password" v-model="forgetPassParams.passagain" />
      </view>
      <view class="content_3" @click="forgetPass">确定</view>
    </view>
    <u-modal :show="isForgetPassShow" title="系统提示" content='修改成功' @confirm="_pageBack" />
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { sms, forgetPass } from '../../utils/api'
export default {
  data() {
    return {
      tips: "获取验证码",
      forgetPassParams: {},
      smsParams: {},
      isForgetPassShow: false
    }
  },
  methods: {
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        uni.showLoading({ title: '正在获取验证码' })
        this.smsParams.phone = this.forgetPassParams.phone;
        this.smsParams.type = 'forget_pass'
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
    forgetPass() {
      forgetPass(this.forgetPassParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.isForgetPassShow = true;
      })
    },
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './sign.scss';
</style>