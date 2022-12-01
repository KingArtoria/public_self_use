<template>
  <view>
    <view class="head">大厅</view>
    <!-- <Head title="任务大厅" /> -->
    <view class="content">
      <view class="content_1">
        <view class="content_1_1" @click="switchType(0)" :style="`color:${typeColor[0]}`">综合</view>
        <view class="content_1_1" @click="switchType(1)" :style="`color:${typeColor[1]}`">新手</view>
        <view class="content_1_1" @click="switchType(2)" :style="`color:${typeColor[2]}`">最新</view>
        <view class="content_1_1" @click="switchType(3)" :style="`color:${typeColor[3]}`">高价</view>
        <view class="content_1_1" @click="switchType(4)" :style="`color:${typeColor[4]}`">信用卡</view>
        <view class="content_1_1" @click="switchType(5)" :style="`color:${typeColor[5]}`">热门</view>
        <view class="content_1_2" :style="`left:${typeLeft}`" />
      </view>
      <view class="content_2">
        <Task_dayVue v-for="(item, index) in cooperateListData" :key="index" :item="item" />
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import Task_dayVue from '../../components/Task_day.vue'
import { cooperateList } from '../../utils/api'
export default {
  data() {
    return {
      typeLeft: '',
      typeColor: ['#1F73F1', '#424242', '#424242', '#424242', '#424242', '#424242'],
      cooperateListParams: { page: 1, num: 10, type: 'all' },
      cooperateListData: [],
      typeListData: ['all', 'newuser', 'new', 'price', 'easy', 'hot'],
    }
  },
  methods: {
    switchType(index) {
      this.typeLeft = `calc(125rpx - 62.5rpx - 19.5rpx + 125rpx*${index})`
      this.typeColor = ['#424242', '#424242', '#424242', '#424242', '#424242', '#424242']
      this.typeColor[index] = '#1F73F1'
      this.cooperateListParams.type = this.typeListData[index]
      this.cooperateListParams.page = 1
      this.cooperateListData = []
      this.cooperateList()
    },
    cooperateList() {
      cooperateList(this.cooperateListParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        else if (res.code == -3) {
          return this.$u.toast(res.msg)
        }
        res.data.forEach(item => {
          if (item.cooperate.substring(0, 4) != "http") {
            item.cooperate = `http://nad.bdhuoke.com${item.cooperate}`
          }
          this.cooperateListData.push(item)
        });
      })
    },
  },
  onLoad() {
    this.typeLeft = `calc(125rpx - 62.5rpx - 19.5rpx + 125rpx*0)`
    this.cooperateList()
  },

  onReachBottom() {
    this.cooperateListParams.page += 1
    this.cooperateList()
  },
  components: { Task_dayVue, Head }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>