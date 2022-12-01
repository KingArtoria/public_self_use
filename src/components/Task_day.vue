<template>
  <view class="taskDay" @click="goInfo(item)">
    <view class="taskDay_1">
      <image class="taskDay_1_1" :src="item.cooperate" v-if="item.cooperate != null" />
      <view class="taskDay_1_2">
        <view class="taskDay_2_1">{{ item.name }}</view>
        <view class="taskDay_2_2">
          <view class="taskDay_2_2_1">{{ item.category }}</view>
        </view>
      </view>
    </view>
    <view class="taskDay_2">
      <view class="taskDay_2_1">￥{{ item.award_number }}</view>
      <view class="taskDay_2_2">
        <view class="taskDay_2_2_1" style="margin-right:29rpx">
          <image class="taskDay_2_2_1_1" src="../static/ren.webp" />
          <view class="taskDay_2_2_1_2">{{ item.number - item.stock_number }}人已赚</view>
        </view>
        <view class="taskDay_2_2_1">
          <image class="taskDay_2_2_1_1" src="../static/qiandai.webp" />
          <view class="taskDay_2_2_1_2">剩余{{ item.stock_number }}个</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: [] }
  },
  methods: {
    goInfo(item) {
      uni.setStorageSync('item', item)
      uni.navigateTo({
        url: `/pages/index/info`
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.taskDay {
  background: #FFFFFF !important;
  padding: 35rpx 25rpx 34rpx 26rpx;
  display: flex;
  justify-content: space-between;
  border-top: 1rpx solid #F2F2F2;

  .taskDay_1 {
    display: flex;
    flex-shrink: 0;
    .taskDay_1_1 {
      width: 78rpx;
      height: 78rpx;
      border-radius: 15rpx;
      margin-right: 27rpx;
    }

    .taskDay_1_2 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .taskDay_2_1 {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #1A1A1A;
        line-height: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 260rpx;
      }

      .taskDay_2_2 {
        display: flex;

        .taskDay_2_2_1 {
          height: 32rpx;
          background: #F2F2F2;
          border-radius: 5rpx;
          line-height: 32rpx;
          padding: 0 13rpx;
          font-size: 20rpx;
          font-family: PingFang SC;
          font-weight: 400;
          color: #727270;
        }
      }
    }
  }

  .taskDay_2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .taskDay_2_1 {
      text-align: end;
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #FF3F22;
      line-height: 1;
    }

    .taskDay_2_2 {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .taskDay_2_2_1 {
        display: flex;
        align-items: center;

        .taskDay_2_2_1_1 {
          width: 21rpx;
          height: 21rpx;
          margin-right: 10rpx;
        }

        .taskDay_2_2_1_2 {
          font-size: 20rpx;
          font-family: PingFang SC;
          font-weight: 400;
          color: #727270;
          left: 1;
        }
      }
    }
  }
}
</style>