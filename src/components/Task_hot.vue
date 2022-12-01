<template>
  <div class="taskDay" @click="goInfo(item)">
    <div class="taskHot_1">
      <div class="taskHot_1_1">
        <image class="taskHot_1_1_1" :src="item.cooperate" v-if="item.cooperate != null" />
        <div class="taskHot_1_1_2">
          <div class="taskHot_1_1_2_1">{{ item.name }}</div>
          <div class="taskHot_1_1_2_2">
            <div class="taskHot_1_1_2_2_1">{{ item.category }}</div>
          </div>
        </div>
      </div>
      <image class="taskHot_1_2" src="../static/hot.webp" />
    </div>
    <div class="taskHot_2">￥{{ item.award_number }}</div>
    <div class="taskHot_3">
      <div class="taskHot_3_1">
        <image class="taskHot_3_1_1" src="../static/ren.webp" />
        <div class="taskHot_3_1_2">{{ item.number - item.stock_number }}人已赚</div>
      </div>
      <div class="taskHot_3_1">
        <image class="taskHot_3_1_1" src="../static/qiandai.png" />
        <div class="taskHot_3_1_2">剩余{{ item.stock_number }}个</div>
      </div>
    </div>
  </div>
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
  width: 350rpx;
  background: #FFFFFF !important;
  border-radius: 15rpx;
  padding: 0 20rpx;
  padding-top: 25rpx;
  padding-bottom: 22rpx;
  box-sizing: border-box;
  margin-top: 14rpx;

  .taskHot_1 {
    display: flex;
    justify-content: space-between;

    .taskHot_1_1 {
      display: flex;

      .taskHot_1_1_1 {
        width: 78rpx;
        height: 78rpx;
        margin-right: 19rpx;
        border-radius: 15rpx;
      }

      .taskHot_1_1_2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .taskHot_1_1_2_1 {
          font-size: 28rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #1A1A1A;
        }

        .taskHot_1_1_2_2 {
          display: flex;

          .taskHot_1_1_2_2_1 {
            height: 32rpx;
            line-height: 32rpx;
            padding: 0 13rpx;
            background: #F2F2F2;
            border-radius: 5rpx;
            font-size: 20rpx;
            font-family: PingFang SC;
            font-weight: 400;
            color: #727270;
          }
        }
      }
    }

    .taskHot_1_2 {
      width: 23rpx;
      height: 27rpx;
    }
  }

  .taskHot_2 {
    text-align: end;
    font-size: 28rpx;
    font-family: PingFang SC;
    font-weight: bold;
    color: #FF3F22;
    margin-top: 22rpx;
  }

  .taskHot_3 {
    margin-top: 19rpx;
    display: flex;
    justify-content: space-between;

    .taskHot_3_1 {
      display: flex;
      align-items: flex-end;

      .taskHot_3_1_1 {
        width: 21rpx;
        height: 21rpx;
        margin-right: 10rpx;
      }

      .taskHot_3_1_2 {
        font-size: 20rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #727270;
        line-height: 1;
      }
    }
  }
}
</style>