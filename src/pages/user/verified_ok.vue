<template>
  <view>
    <view class="head">
      <view class="head_1">
        <image class="head_1_1" src="../../static/fanhui2.webp" @click="goBack" />
      </view>
      <view class="head_2">实名认证</view>
      <view class="head_3" />
    </view>
    <view class="content">
      <image class="content_1" src="../../static/wanchen.webp" />
      <view class="content_2">您已通过实名认证</view>
      <view class="content_3">
        <view class="content_3_1">真实姓名</view>
        <view class="content_3_1">{{ name }}</view>
      </view>
      <view class="content_3">
        <view class="content_3_1">身份证号</view>
        <view class="content_3_1">{{ card }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      card: "",
    }
  },
  methods: {
    goBack() {
      uni.navigateBack({
        delta: 2
      });
    },
  },
  onLoad(option) {
    // option.name保留第一个汉字,之后的全部改为*
    this.name = option.name.substring(0, 1) + option.name.substring(1).replace(/[^x00-xff]/g, "*");
    // option.card保留后四位,之前的全部改为*
    this.card = option.card.substring(0, option.card.length - 4).replace(/[x00-xff]/g, "*") + option.card.substring(option.card.length - 4);
  },
}
</script>

<style lang="scss" scoped>
@import './verified_ok.scss';
</style>