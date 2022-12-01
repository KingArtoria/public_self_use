<template>
  <view>

    <Head title="余额提现" />
    <view class="content">
      <view class="content_1">
        <image class="content_1_1" src="../../static/qiandai.webp" />
        <view class="content_1_2">可提现余额(元)：</view>
        <view class="content_1_3">{{ price }}</view>
      </view>
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1" />
          <view class="content_2_1_2">提现方式</view>
        </view>
        <view class="content_2_2">
          <view :class="selectPayData[0] ? 'content_2_2_2' : 'content_2_2_1'" v-show="isZFB"
            @click="selectPayData = [true, false]">
            <image class="content_2_2_1_1" src="../../static/zhidfubao.webp" />
            <view class="content_2_2_1_2">支付宝</view>
          </view>
          <!-- <view :class="selectPayData[1] ? 'content_2_2_2' : 'content_2_2_1'" v-show="isWX"
            @click="selectPayData = [false, true]">
            <image class="content_2_2_1_1" src="../../static/weixin.webp" />
            <view class="content_2_2_1_2">微信</view>
          </view> -->
        </view>
        <!-- <view class="content_2_3" v-show="isZFB || isWX">
          <view class="content_2_3_1">{{ text }}：13645225773</view>
          <view class="content_2_3_2">修改</view>
        </view> -->
      </view>
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1" />
          <view class="content_3_1_2">提现金额</view>
        </view>
        <u--input placeholder="请输入提现金额" border="none" fontSize="26rpx" v-model="drawParams.account" type="number" />
      </view>
      <view class="content_4">
        <view class="content_4_1">
          <view class="content_4_1_1" />
          <view class="content_4_1_2">提现说明</view>
        </view>
        <view class="content_4_2">1、提现金额会在1个工作日到账。</view>
        <view class="content_4_2">2、提现最低金额为5元</view>
        <view class="content_4_2">3、提现需要收取1%的手续费</view>
      </view>
    </view>
    <view class="btn">
      <view class="btn_1" @click="draw">立即提现</view>
    </view>
    <u-modal :show="!isZFB && !isWX" title="提示" content='请先去绑定提现支付宝账户或微信账户' showCancelButton @confirm="confirm"
      @close="cancel_close" @cancel="cancel_close" />
    <u-modal :show="isDrawShow" title="系统提示" content='提现成功,金额24小时内到账' @confirm="_pageBack" />
  </view>
</template> 

<script>
import Head from '../../components/Head.vue'
import { draw, memberIndex } from '../../utils/api'
export default {
  data() {
    return {
      price: 0,
      userInfo: {},
      isZFB: true,
      isWX: true,
      text: "",
      selectPayData: [true, false],
      drawParams: {},
      isDrawShow: false
    }
  },
  methods: {
    memberIndex() {
      memberIndex().then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.userInfo = res.data.member
        if (this.userInfo.ali_image != '' && this.userInfo.ali_image != null) this.isZFB = true
        else this.isZFB = false
        if (this.userInfo.wx_image != '' && this.userInfo.ali_image != null) this.isWX = true
        else this.isWX = false
        if (this.isZFB) {
          this.text = "支付宝账号"
        } else if (this.isWX) {
          this.text = "微信账号"
        }
      })
    },
    confirm() {
      uni.navigateTo({
        url: '/pages/user/edit_info'
      });
    },
    cancel_close() {
      uni.navigateBack();
    },
    draw() {
      this.drawParams.type = this.selectPayData[0] ? 2 : 3
      draw(this.drawParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.isDrawShow = true
        this.price -= this.drawParams.account
      })
    },
  },
  onLoad(option) {
    this.price = option.price
  },
  onShow() {
    this.memberIndex()
  },
  components: { Head },
}
</script>
<style lang="scss" scoped>
@import './withdraw.scss';
</style>