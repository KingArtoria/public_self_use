<template>
  <view>

    <Head title="任务详情" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <image class="content_1_1_1" :src="item.cooperate" />
          <view class="content_1_1_2">
            <view class="content_1_1_2_1">{{ item.name }}</view>
            <view class="content_1_1_2_2">
              <view class="content_1_1_2_2_1">{{ item.category }}</view>
            </view>
          </view>
        </view>
        <view class="content_1_2">编号：{{ item.order_num }}</view>
      </view>
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1">{{ item.stock_number }}</view>
          <view class="content_2_1_2">剩余数量</view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">{{ item.number - item.stock_number }}</view>
          <view class="content_2_1_2">完成数量</view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">{{ item.examine == null ? '未知' : item.examine }}</view>
          <view class="content_2_1_2">审核时间</view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_3">￥{{ item.award_number }}</view>
          <view class="content_2_1_2">做单价格</view>
        </view>
      </view>
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1" />
          <view class="content_3_1_2">任务步骤</view>
          <view class="content_3_1_3">(请参考以下做单流程做单)</view>
        </view>
        <view class="content_3_2" v-html="item.content" v-if="type == 'old'" />
        <view class="content_3_3" v-else>
          <view class="content_3_3" v-for="(item2, index) in item.content" :key="index">
            <view class="content_3_3_1" v-if="item2.text != ''">
              <view class="content_3_3_1_1">{{ index + 1 }}</view>
              <view class="content_3_3_1_2" :style="`color:${item2.isColor ? 'red' : '#1a1a1a'}`">{{ item2.text }}
              </view>
            </view>
            <view class="content_3_3_2">
              <image class="content_3_3_2_1" :src="item2.pic" mode="widthFix" v-if="item2.pic != ''"
                @click="showImage(item2.pic)" />
              <view class="content_3_3_2_2" v-if="item2.video != ''" @click="showVideo(item2.video)">点击播放视频</view>
              <u-upload :fileList="fileList[`item${index}`]" @afterRead="afterRead" @delete="deletePic"
                v-if="item2.isColor" :name="`item${index}`" :maxCount="1" width="348rpx" height="765rpx"
                style="position: relative;">
                <view
                  style="width:128rpx;height:128rpx;background:rgba(138,138,138,0.15);border-radius:10rpx;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;display:flex;align-items:center;justify-content:center;">
                  <image src="../../static/xiangji.png" style="width:55rpx;height:41rpx" />
                </view>
              </u-upload>
            </view>
          </view>
          <view class="content_3_4">
            <view class="content_5_1" style="font-size: 34rpx;">提交姓名/昵称(选填)</view>
            <u--input v-model="commitJobParams.name" />
            <view class="content_5_1" style="font-size: 34rpx;">提交手机号(必填)</view>
            <u--input v-model="commitJobParams.voucher" />
          </view>
        </view>
      </view>
      <view class="content_5">
      </view>
      <view class="content_4" v-if="item.share_url">
        <view class="content_4_1">
          <view class="content_4_1_1" />
          <view class="content_4_1_2">做单公码</view>
        </view>
        <image class="content_4_2" :src="item.share_url" />
        <!-- <view class="content_4_2" /> -->
      </view>
    </view>
    <view class="btn">
      <view class="btn_1" @click="commitJob">提交任务</view>
    </view>
    <u-modal :show="isApplyJob" title="系统提示" content='领取成功' @confirm="_pageBack" />
    <u-overlay :show="isShowImage" @click="isShowImage = false">
      <image class="image_1_1" :src="showPic" mode="widthFix" style="width:100%" />
    </u-overlay>
    <u-overlay :show="isShowVideo" @click="isShowVideo = false">
      <video :src="videoPic" style="width:375rpx;height:50%" class="showVideo" />
    </u-overlay>
    <u-modal :show="isShow" title="系统提示" content='提交成功,请等待审核' @confirm="_pageBack" />
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { applyJob, commitJob } from '../../utils/api'
export default {
  data() {
    return {
      item: {},
      type: "",
      isApplyJob: false,
      isShowImage: false,
      showPic: '',
      isShowVideo: false,
      videoPic: "",
      fileList: {
        item0: [],
        item1: [],
        item2: [],
        item3: [],
        item4: [],
        item5: [],
        item6: [],
        item7: [],
        item8: [],
        item9: [],
        item10: [],
        item11: [],
        item12: [],
        item13: [],
        item14: [],
        item15: [],
        item16: [],
        item17: [],
        item18: [],
        item19: [],
      },
      commitJobParams: { images: [] },
      isShow: false,
    }
  },
  methods: {
    applyJob() {
      applyJob({ id: this.item.id }).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.isApplyJob = true
      })
    },
    showImage(pic) {
      this.isShowImage = true
      this.showPic = pic
    },
    showVideo(pic) {
      this.isShowVideo = true
      this.videoPic = pic
    },
    async afterRead(event) {
      let lists = [].concat(event.file)
      let fileListLen = this.fileList[event.name].length
      lists.map((item) => {
        this.fileList[event.name].push({
          ...item,
          status: 'uploading',
          message: '上传中'
        })
      })
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i].url)
        let item = this.fileList[event.name][fileListLen]
        this.fileList[event.name].splice(fileListLen, 1, Object.assign(item, {
          status: 'success',
          message: '',
          url: result
        }))
        fileListLen++
      }
      this.$forceUpdate()
    },
    deletePic(event) {
      this.fileList[event.name].splice(event.index, 1)
    },
    uploadFilePromise(url) {
      return new Promise((resolve, reject) => {
        let a = uni.uploadFile({
          url: 'http://nad.bdhuoke.com/vip_app/Upload/upload',
          filePath: url,
          name: 'file',
          success: (res) => {
            resolve(JSON.parse(res.data).data)
          }
        });
      })
    },
    commitJob() {
      Object.keys(this.fileList).forEach(key => {
        this.fileList[key].forEach(item => {
          this.commitJobParams.images.push(`${item.url}`)
        });
      })
      this.commitJobParams.images = this.commitJobParams.images.join(',')
      commitJob(this.commitJobParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.isShow = true
      })
    },
  },
  onLoad() {
    this.item = uni.getStorageSync('item')
    this.commitJobParams.id = this.item.id
    console.log(this.item)
    if (this.item.check != null)
      this.item.check.forEach((element, index) => {
        this.item.content[element - 1].isColor = true
      });
    if (typeof (this.item.content) == 'string') {
      this.type = 'old'
      this.item.content = String(this.item.content).replace(/src=\"/g, 'src=\"http://nad.bdhuoke.com')
      this.item.content = String(this.item.content).replace(/img/g, 'img style="width:90%""')
    }
  },
  components: { Head }
}
</script>
<style lang="scss" scoped>
@import './info.scss';
</style>