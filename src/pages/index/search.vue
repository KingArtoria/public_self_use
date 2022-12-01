<template>
  <view>

    <Head :title="listParams.search" />
    <view class="content">
      <Task_dayVue v-for="(item, index) in listData" :key="index" :item="item" />
    </view>
  </view>
</template>

<script>
import Task_dayVue from '../../components/Task_day.vue'
import Head from '../../components/Head.vue'
import { list } from '../../utils/api'
export default {
  data() {
    return {
      listParams: { page: 1, num: 20 },
      listData: [],
    }
  },
  methods: {
    list() {
      list(this.listParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        res.data.forEach(item => {
          if (item.cooperate.substring(0, 4) != "http") {
            item.cooperate = `http://nad.bdhuoke.com${item.cooperate}`
          }
          this.listData.push(item)
        });
      })
    },
  },
  onLoad(option) {
    this.listParams.search = option.title
    this.list()
  },
  components: { Task_dayVue, Head }
}
</script>

<style lang="scss" scoped>
@import './search.scss';
</style>