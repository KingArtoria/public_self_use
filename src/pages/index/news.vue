<template>
  <view>

    <Head title="消息中心" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1" v-for="(item, index) in noticeData" :key="index">
          <view class="content_1_1_1">{{ item.title }}</view>
          <view class="content_1_1_2">{{ item.create_time }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { notice } from '../../utils/api'
export default {
  data() {
    return {
      noticeData: [],
    }
  },
  methods: {
    notice() {
      notice().then(res => {
        this.noticeData = res.data
      })
    },
  },
  onLoad() {
    this.notice()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './news.scss';
</style>