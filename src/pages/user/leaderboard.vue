<template>
  <view>
    <view class="head">
      <view class="head_1">
        <image class="head_1_1" src="../../static/fanhui_w.webp" @click="goBack" />
      </view>
      <view class="head_2">周收益总榜</view>
      <view class="head_3" />
    </view>
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <image class="content_1_1_1" src="../../static/2.png" />
          <view class="content_1_1_2">
            <image class="content_1_1_2_1" :src="rankingData1[1].head" v-if="rankingData1[1].head" />
          </view>
          <view class="content_1_1_3">{{ rankingData1[1].member }}</view>
          <view class="content_1_1_4">￥{{ rankingData1[1].account }}</view>
        </view>
        <view class="content_1_2">
          <image class="content_1_2_1" src="../../static/1.png" />
          <view class="content_1_2_2">
            <image class="content_1_2_2_1" :src="rankingData1[0].head" v-if="rankingData1[0].head" />
          </view>
          <view class="content_1_2_3">{{ rankingData1[0].member }}</view>
          <view class="content_1_2_4">￥{{ rankingData1[0].account }}</view>
        </view>
        <view class="content_1_1">
          <image class="content_1_1_1" src="../../static/3.png" />
          <view class="content_1_1_2">
            <image class="content_1_1_2_1" :src="rankingData1[2].head" v-if="rankingData1[2].head" />
          </view>
          <view class="content_1_1_3">{{ rankingData1[2].member }}</view>
          <view class="content_1_1_4">￥{{ rankingData1[2].account }}</view>
        </view>
      </view>
      <view class="content_2">
        <view class="content_2_1">你还没有上榜，做去做任务赚收益吧~</view>
        <view class="content_2_2" v-for="(item, index) in rankingData" :key="index">
          <view class="content_2_2_1">
            <view class="content_2_2_1_1">{{ index + 4 }}</view>
            <view class="content_2_2_1_2">{{ item.member }}</view>
          </view>
          <view class="content_2_2_2">￥{{ item.account }}</view>
        </view>
        <view class="content_2_3">仅展示总收益前10名的用户</view>
      </view>
    </view>
  </view>
</template>

<script>
import { ranking } from '../../utils/api'
export default {
  data() {
    return {
      rankingData: [],
      rankingData1: [{ head: "" }, { head: "" }, { head: "" }],
    }
  },
  methods: {
    ranking() {
      ranking().then(res => {
        this.rankingData1 = JSON.parse(JSON.stringify(res.data))
        console.log(this.rankingData1)
        res.data.splice(0, 3)
        this.rankingData = res.data
      })
    },
    goBack() {
      uni.navigateBack();
    }
  },
  onLoad() {
    this.ranking()
  },
}
</script>

<style lang="scss" scoped>
@import './leaderboard.scss';
</style>