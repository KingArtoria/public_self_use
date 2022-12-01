<template>
  <view>

    <Head title="提现记录" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1" v-for="(item, index) in drawRecordData" :key="index">
          <view class="content_1_1_1">
            <view class="content_1_1_1_1">{{ item.bank_name }}</view>
            <view class="content_1_1_1_2">{{ `提现金额:${item.account}/实际到账金额:${item.reality_account}`
            }}</view>
          </view>
          <view class="content_1_1_2">
            <view>{{ item.create_time }}</view>
            <view>{{ item.statusName }}</view>
          </view>
          <view class="content_1_1_3" v-if="item.status == 2">{{ `未通过原因:${item.refuse}` }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { drawRecord } from '../../utils/api'
export default {
  data() {
    return {
      drawRecordData: [],
    }
  },
  methods: {
    drawRecord() {
      drawRecord().then(res => {
        res.data.forEach(item => {
          switch (item.status) {
            case 0:
              item.statusName = '待审核'
              break;
            case 1:
              item.statusName = '已通过'
              break;
            case 2:
              item.statusName = '未通过'
              break;
            case 3:
              item.statusName = '打款中'
              break;
          }
        });
        this.drawRecordData = res.data
        this.$forceUpdate()
      })
    },
  },
  onLoad() {
    this.drawRecord()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './record.scss';
</style>