<template>
  <view>
    <view class="head">
      <view class="head_1">
        <view class="head_1_1" @click="goBack">
          <image class="head_1_1_1" src="../../static/fanhui_w.webp" />
        </view>
        <view class="head_1_2">我的团队</view>
        <view class="head_1_3" />
      </view>
      <view class="head_2">
        <view class="head_2_1">
          <view class="head_2_1_1">{{ team_member }}</view>
          <view class="head_2_1_1">{{ team_commission }}</view>
        </view>
        <view class="head_2_2">
          <view class="head_2_2_1">团队人数(人)</view>
          <view class="head_2_2_1">佣金总收益(元)</view>
        </view>
      </view>
      <view class="head_3" @click="goOpenLower">开下级账户</view>
    </view>
    <view class="content">
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1" />
          <view class="content_2_1_2">我的直推</view>
        </view>
        <view class="content_2_2">
          <view class="content_2_2_1" v-for="(item, index) in teamList" :key="index"
            @click="goMakeList(item.uid, item.son_id)">
            <view class="content_2_2_1_1">
              <view class="content_2_2_1_1_1">{{ item.nick_name }}(账号：{{ item.phone }})</view>
              <view class="content_2_2_1_1_2">佣金收益：{{ item.commission }}元&nbsp;&nbsp;&nbsp;佣金比例：{{ item.commission_per
              }}%</view>
            </view>
            <image class="content_2_2_1_2" src="../../static/jiantou_xq.webp" />
          </view>
        </view>
      </view>
    </view>
    <u-modal :show="relieveShow" content='此操作不可逆,确定要取消下级吗?' showCancelButton @cancel="relieveShow = false"
      @confirm="relieve" />
    <u-overlay :show="fVipShow" @click="fVipShow = false">
      <view class="fVip">
        <image class="fVip_1" src="../../static/ktqyhy.png" @click.stop="goPay" />
      </view>
    </u-overlay>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { memberIndex, relieve, team } from '../../utils/api'
export default {
  data() {
    return {
      teamList: [],
      team_commission: "",
      team_member: "",
      relieveShow: false,
      relieveParams: {},
      fVipShow: false,
      userInfo: {},
    }
  },
  methods: {
    team() {
      this.teamList = []
      this.team_commission = ""
      this.team_member = ""
      team().then(res => {
        res.data.team.forEach(item => {
          item.commission = item.commission == null ? 0 : item.commission
        });
        this.teamList = res.data.team
        this.team_commission = res.data.team_commission
        this.team_member = res.data.team_member
      })
    },
    relieve() {
      relieve(this.relieveParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.$u.toast('操作成功')
        this.relieveShow = false
        this.team()
      })
    },
    goOpenLower() {
      if (this.userInfo.maxvip != 'fvip') return this.fVipShow = true
      uni.navigateTo({
        url: '/pages/user/open_lower'
      });
    },
    relieveFront(id) {
      this.relieveShow = true
      this.relieveParams.son_id = id
    },
    goBack() {
      uni.navigateBack({
        delta: 1
      });
    },
    memberIndex() {
      memberIndex().then(res => {
        this.userInfo = res.data.member
      })
    },
    goPay() {
      uni.navigateTo({
        url: '/pages/user/pay'
      });
    },
    goMakeList(uid, son_id) {
      uni.navigateTo({
        url: `/pages/user/make_list?uid=${uid}&son_id=${son_id}`
      });
    }
  },
  onShow() {
    this.team()
    this.memberIndex()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './my_team.scss';
</style>