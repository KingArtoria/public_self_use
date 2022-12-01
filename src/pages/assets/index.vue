<template>
  <view>
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">资产</view>
        <view class="content_1_4">
          <view class="content_1_4_1">
            <view class="content_1_4_1_1">任务总收益</view>
            <view class="content_1_4_1_2">{{ assetsIndexData.all_profit }}</view>
          </view>
          <view class="content_1_4_1">
            <view class="content_1_4_1_1">今日收益(元)</view>
            <view class="content_1_4_1_2">{{ assetsIndexData.today_profit }}</view>
          </view>
        </view>
      </view>
      <view class="content_2">
        <view class="content_2_1">
          <image class="content_2_1_1" src="../../static/qiandai.webp" />
          <view class="content_2_1_2">可提现余额(元)：</view>
          <view class="content_2_1_3">{{ assetsIndexData.balance }}</view>
        </view>
        <view class="content_2_2" @click="goWithdraw">提现</view>
      </view>
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1">任务奖励明细</view>
        </view>
        <view class="content_3_2">
          <view class="content_3_2_1" v-for="(item, index) in detailData" :key="index">
            <view class="content_3_2_1_1">
              <view class="content_3_2_1_1_1">{{ item.bill_type }}</view>
              <view class="content_3_2_1_1_2" v-if="item.type == 1">+{{ item.account }}</view>
              <view class="content_3_2_1_1_2" v-else>-{{ item.account }}</view>
            </view>
            <view class="content_3_2_1_2">{{ item.create_time }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { assetsIndex, convert } from '../../utils/api'
export default {
  data() {
    return {
      typeLeft: "",
      assetsIndexData: [],
      detailData: [],
    }
  },
  methods: {
    assetsIndex() {
      assetsIndex().then(res => {
        this.assetsIndexData = res.data
        this.detailData = res.data.list.bill_list
        this.$forceUpdate()
      })
    },
    goWithdraw() {
      uni.navigateTo({
        url: `/pages/assets/withdraw?price=${this.assetsIndexData.balance}`
      });
    },
  },
  onShow() {
    this.typeLeft = '100.5rpx'
    this.assetsIndex()
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>