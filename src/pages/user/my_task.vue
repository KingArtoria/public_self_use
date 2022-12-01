<template>
  <view>

    <Head title="我的任务" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1" :style="`color:${item.color}`" v-for="(item, index) in typeData" :key="index"
          @click="switchType(item)">{{ item.text }}</view>
      </view>
      <view class="content_2">
        <view class="content_2_1" v-for="(item, index) in list" :key="index" @click="goInfo(item)">
          <view class="content_2_1_inner">
            <view class="content_2_1_1">
              <image class="content_2_1_1_1" :src="item.cooperate" />
              <view class="content_2_1_1_2">
                <view class="content_2_1_1_2_1">{{ item.name }}</view>
                <view class="content_2_1_1_2_2">
                  <view class="content_2_1_1_2_2_1">{{ item.category }}</view>
                </view>
                <view class="content_2_1_1_2_3">开始时间：{{ item.create_time }}</view>
              </view>
            </view>
            <view class="content_2_1_2">
              <view class="content_2_1_2_1">￥{{ item.award_number }}</view>
              <view class="content_2_1_2_2">
                <view class="content_2_1_2_2_1">
                  <image class="content_2_1_2_2_1_1" src="../../static/ren.webp" />
                  <view class="content_2_1_2_2_1_2">{{ item.number - item.stock_number }}人已赚 </view>
                </view>
                <view class="content_2_1_2_2_1">
                  <image class="content_2_1_2_2_1_1" src="../../static/qiandai.webp" />
                  <view class="content_2_1_2_2_1_2">剩余{{ item.stock_number }}个 </view>
                </view>
              </view>
              <view class="content_2_1_2_3">
                <view class="content_2_1_2_3_2" v-if="item.status == 1" @click.stop="goSubmit(item)">提交</view>
                <view class="content_2_1_2_3_3" v-if="item.status == 2">审核中</view>
                <view class="content_2_1_2_3_2" v-if="item.status == 3">已通过</view>
                <view class="content_2_1_2_3_4" v-if="item.status == 4">未通过</view>
              </view>
            </view>
          </view>
          <view v-if="item.status == 4" class="content_2_1_1_2_4">
            <view>未通过原因：</view>
            <view>{{ item.remark }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head'
import { userJob } from '../../utils/api'
export default {
  data() {
    return {
      list: [],
      userJobParams: { page: 1, num: 99999, status: 2 },
      typeData: [
        { color: "#1F73F1", text: "审核中" },
        { color: "#424242", text: "已通过" },
        { color: "#424242", text: "未通过" },
        // 424242
      ],
      typeLeft: "52rpx",
    }
  },
  methods: {
    userJob() {
      userJob(this.userJobParams).then(res => {
        res.data.list.forEach(item => {
          if (item.cooperate.substring(0, 4) != "http") {
            item.cooperate = `http://nad.bdhuoke.com${item.cooperate}`
          }
          item.create_time = String(item.create_time).split(" ")[0]
        });
        this.list = res.data.list
      })
    },


    // 424242  FF644D
    // 我的任务tab栏切换
    switchType(item) {
      this.typeData.forEach(item => item.color = "#424242");
      if (item.text == '审核中') {
        item.color = "#1F73F1"
        this.userJobParams.status = 2
      }

      if (item.text == '已通过') {
        item.color = "#1F73F1"
        this.userJobParams.status = 3
      }

      if (item.text == '未通过') {
        item.color = "#1F73F1"
        this.userJobParams.status = 4
      }
      this.userJob()
    },
    goInfo(item) {
      uni.setStorageSync('item', item)
      uni.navigateTo({
        url: '/pages/index/info'
      });
    },
    goSubmit(item) {
      uni.setStorageSync('item', item)
      uni.navigateTo({
        url: '/pages/user/submit'
      });
    },
  },
  onShow() {
    this.userJob()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './my_task.scss';
</style>