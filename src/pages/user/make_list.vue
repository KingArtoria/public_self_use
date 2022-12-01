<template>
  <view>
    <view class="head">
      <view class="head_1" @click="goBack">
        <image class="head_1_1" src="../../static/fanhui2.webp" />
      </view>
      <view class="head_2">做单列表({{ teamJobList.length }})</view>
      <view class="head_3" @click="relieveShow = true">解除关系</view>
    </view>
    <view class="content">
      <view class="content_1" v-for="(item, index) in teamJobList" :key="index">
        <image class="content_1_1" :src="item.cooperate" />
        <view class="content_1_2">
          <view class="content_1_2_1">
            <view class="content_1_2_1_1">{{ item.name }}</view>
            <view class="content_1_2_1_2">￥{{ item.award_number }}</view>
          </view>
          <view class="content_1_2_2">
            <view class="content_1_2_2_1">{{ item.category }}</view>
          </view>
          <view class="content_1_2_3">做单时间：{{ item.confirm_time }}</view>
        </view>
      </view>
    </view>
    <u-modal :show="relieveShow" content='此操作不可逆,确定要取消下级吗?' showCancelButton @cancel="relieveShow = false"
      @confirm="relieve" />
    <u-modal :show="okShow" title="系统提示" content='解除关系成功' @confirm="_pageBack" />
  </view>
</template>

<script>
import { relieve, teamJob } from '../../utils/api';
export default {
  data() {
    return {
      teamJobList: [],
      relieveShow: false,
      op: {},
      okShow: false,
    }
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    teamJob(uid) {
      teamJob({ uid }).then(res => {
        this.teamJobList = res.data.list
      })
    },
    relieve() {
      relieve({ son_id: this.op.id }).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.okShow = true
        // this.$u.toast('操作成功')
        // this.relieveShow = false
        // this.team()
      })
    },
  },
  onLoad(op) {
    this.teamJob(op.uid)
    this.op.id = op.son_id
  },
}
</script>

<style lang="scss" scoped>
@import './make_list.scss';
</style>