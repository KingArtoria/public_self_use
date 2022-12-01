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
      <!-- <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1" />
          <view class="content_3_1_2">任务步骤</view>
          <view class="content_3_1_3">(请参考以下做单流程做单)</view>
        </view>
        <view class="content_3_2" v-html="item.content" v-if="type == 'old'" />
        <view class="content_3_3" v-else>
          <view class="content_3_3_1" v-for="(item2, index) in item.content" :key="index">
            <view class="content_3_3" v-if="item2.text != ''">
              <view class="content_3_3_1">
                <view class="content_3_3_1_1">{{ index + 1 }}</view>
                <view class="content_3_3_1_2">{{ item2.text }}</view>
              </view>
              <view class="content_3_3_2">
                <image class="content_3_3_2_1" :src="item2.pic" mode="widthFix" v-if="item2.pic != ''"
                  @click="showImage(item2.pic)" />
                <view
                  style="text-align:center;line-height:748rpx;width: 348rpx;text-align:center;font-size:30rpx;background:#000;color:#fff;"
                  v-if="item2.video != ''" @click="showVideo(item2.video)">点击播放视频
                </view>
                <u-upload :fileList="fileList[`fileList${index + 1}`]" @afterRead="afterRead" @delete="deletePic"
                  :name="'' + (index + 1)" :maxCount="1" width="348rpx" height="747rpx">
                  <view class="content_3_3_2_2">
                    <view class="content_3_3_2_2_1">
                      <image class="content_3_3_2_2_2" src="../../static/xiangji.png" />
                    </view>
                    <view class="content_3_3_2_2_2">选择图片</view>
                  </view>
                </u-upload>
              </view>
            </view>
          </view>
          <view class="content_3_3_3">
            <view class="content_3_3_3_1" style="margin-bottom:20rpx">做单手机号</view>
            <u-input placeholder="请输入手机号" maxlength="11" type="number" v-model="commitJobParams.voucher" />
          </view>
        </view>
      </view> -->
      <!-- <view v-if="type != 'old'" class="content_3 common">
        <view class="content_3_1">
          <view class="content_3_1_1" />
          <view class="content_3_1_2">做单公码</view>
        </view>
        <image :src="item.share_url" class="common-img"></image>
      </view> -->
      <view class="content_4">
        <view class="content_4_1" style="font-size:20rpx">提交做单手机号</view>
        <u--input placeholder="请输入手机号" border="surround" v-model="commitJobParams.voucher" fontSize="20rpx" />
        <view class="content_4_1" style="font-size:20rpx">提交做单截图</view>
        <u-upload :fileList="fileList.fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
          :maxCount="9" style="margin-top:20rpx" width="120rpx" height="120rpx" />
      </view>
    </view>
    <view class="btn">
      <view class="btn_1" @click="commitJob">提交任务</view>
    </view>
    <u-modal :show="isShow" title="系统提示" content='提交成功,请等待审核' @confirm="_pageBack" />
    <u-overlay :show="isShowImage" @click="isShowImage = false">
      <view class="image">
        <view class="image_1">
          <image class="image_1_1" :src="showPic" mode="widthFix" style="width:100%" />
        </view>
      </view>
    </u-overlay>
    <u-overlay :show="isShowVideo" @click="isShowVideo = false">
      <video :src="videoPic" style="width:375rpx;height:50%" class="showVideo" />
    </u-overlay>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { commitJob } from '../../utils/api'
export default {
  data() {
    return {
      item: {},
      fileList: {
        fileList1: [],
        fileList2: [],
        fileList3: [],
        fileList4: [],
        fileList5: [],
        fileList6: [],
        fileList7: [],
        fileList8: [],
        fileList9: [],
        fileList10: [],
        fileList11: [],
        fileList12: [],
        fileList13: [],
        fileList14: [],
        fileList15: [],
        fileList16: [],
        fileList17: [],
        fileList18: [],
        fileList19: [],
        fileList20: [],
      },
      commitJobParams: { images: [] },
      type: "",
      newContent: 0,
      isShow: false,
      isShowImage: false,
      showPic: '',
      isShowVideo: false,
      videoPic: ""
    }
  },
  methods: {
    async afterRead(event) {
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      let lists = [].concat(event.file)
      let fileListLen = this.fileList[`fileList${event.name}`].length
      lists.map((item) => {
        this.fileList[`fileList${event.name}`].push({
          ...item,
          status: 'uploading',
          message: '上传中'
        })
      })
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i].url)
        let item = this.fileList[`fileList${event.name}`][fileListLen]
        this.fileList[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
          status: 'success',
          message: '',
          url: result
        }))
        fileListLen++
      }
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
    deletePic(event) {
      this.fileList[`fileList${event.name}`].splice(event.index, 1)
    },
    commitJob() {
      Object.keys(this.fileList).forEach(key => {
        this.fileList[key].forEach(item => {
          this.commitJobParams.images.push(`/${item.url}`)
        });
      })
      this.commitJobParams.images = this.commitJobParams.images.join(',')
      commitJob(this.commitJobParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.isShow = true
        this.commitJobParams.images = []
      })
    },
    showImage(pic) {
      this.isShowImage = true
      this.showPic = pic
    },
    showVideo(pic) {
      this.isShowVideo = true
      this.videoPic = pic
    }
  },
  onLoad() {
    this.item = uni.getStorageSync('item')
    console.log(this.newContent)
    // 判断item.content数据类型是否为数组或者字符串
    if (typeof (this.item.content) == 'string') {
      this.type = 'old'
      this.item.content = String(this.item.content).replace(/src=\"/g, 'src=\"http://nad.bdhuoke.com')
      this.item.content = String(this.item.content).replace(/img/g, 'img style="width:90%""')
    } else {
      // newContent复制item.content中text不为""的数量"
      this.newContent = this.item.content.filter(item => item.text != "").length
    }
    this.commitJobParams.id = this.item.user_job_id
  },
  components: { Head }
}
</script>
<style lang="scss" scoped>
@import './submit.scss';
</style>