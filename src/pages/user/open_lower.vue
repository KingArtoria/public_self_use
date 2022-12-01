<template>
  <view>

    <Head title="开下级账户" />
    <view class="content">
      <view class="content_2" />
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">账户</view>
          <view class="content_1_1_2">
            <u--input placeholder="请输入下级绑定的手机号" border="none" inputAlign="right" v-model="sonSingParams.phone" />
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">密码</view>
          <view class="content_1_1_2">
            <u--input placeholder="请输入登录密码" border="none" inputAlign="right" type="password"
              v-model="sonSingParams.pass" />
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">请设置下级展示价格</view>
          <view class="content_1_1_2">
            <u--input placeholder="请输入0~100之间数字" border="none" type="number" inputAlign="right"
              v-model="sonSingParams.commission_per" />
            <view class="content_1_1_2_1">%</view>
          </view>
        </view>
      </view>
      <view class="content_3">
        <view class="content_3_1">提示：</view>
        <view class="content_3_1">下级账号开通成功会以短信的方式通知下级用户;</view>
        <view class="content_3_1">设置展示价格后，下级账户显示价格将根据您设置的比例展示，列如：您给下级账户设置展示价格<span style="color:red">80%</span>
          ，则下级账户显示价格为您的价格X<span style="color:red">0.8</span>;
        </view>
        <view class="content_3_2" @click="isSonSign">确认开通</view>
      </view>
    </view>
    <u-modal :show="isSonSignShow" title="系统提示" content='创建下级成功' @confirm="_pageBack" />
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { son_sign } from '../../utils/api'
export default {
  data() {
    return {
      sonSingParams: {},
      isSonSignShow: false,
    }
  },
  methods: {
    isSonSign() {
      if (this.sonSingParams.phone == '' || this.sonSingParams.phone == null)
        return this.$u.toast('请输入手机号')
      else if (this.sonSingParams.pass == '' || this.sonSingParams.pass == null)
        return this.$u.toast('请输入登录密码')
      else if (this.sonSingParams.commission_per == '' || this.sonSingParams.commission_per == null)
        return this.$u.toast('请输入分佣比例')
      else if (!(/^1[3456789]\d{9}$/.test(this.sonSingParams.phone)))
        return this.$u.toast('手机号格式不正确')
      else if (this.sonSingParams.commission_per > 100 || this.sonSingParams.commission_per < 0)
        return this.$u.toast('分佣比例必须在0~100之间')
      this.son_sign()
    },
    son_sign() {
      son_sign(this.sonSingParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.isSonSignShow = true
      })
    },
  },
  components: { Head },
}
</script>

<style lang="scss" scoped>
@import './open_lower.scss';
</style>