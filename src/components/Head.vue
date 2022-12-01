<template>
  <view class="head">
    <view class="head_1">
      <image class="head_1_1" src="../static/fanhui2.webp" @click="goBack" />
    </view>
    <view class="head_2">{{ title }}</view>
    <view class="head_3" />
  </view>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
  },
}
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 195rpx;
  box-sizing: border-box;
  padding: 0 26rpx;
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 5;
  padding-top: 80rpx;

  .head_1,
  .head_2,
  .head_3 {
    flex: 1;
  }

  .head_1 {

    .head_1_1 {
      width: 16rpx;
      height: 28rpx;
    }
  }

  .head_2 {
    text-align: center;
    font-size: 34rpx;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    line-height: 1;
  }
}
</style>