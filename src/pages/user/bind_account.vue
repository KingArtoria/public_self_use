<template>
  <view>

    <Head title="绑定账号" />
    <view class="content">
      <view class="content_1" />
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1">姓名</view>
          <u--input placeholder="请输入您的姓名" border="none" fontSize="26rpx" inputAlign="right" v-model="name" />
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">账号</view>
          <u--input placeholder="请输入您的账号" border="none" fontSize="26rpx" inputAlign="right" v-model="number" />
        </view>
        <view class="content_2_2">
          <view class="content_2_2_1">收款码</view>
          <view class="content_2_2_2" @click="setHead" v-if="!imageShow">点击上传</view>
          <image class="content_2_2_2" v-else :src="imageShow" @click="setHead" />
        </view>
      </view>
      <view class="content_3" @click="bindAccount">保存</view>
    </view>
    <u-modal :show="isShow" title="系统提示" content='绑定成功' @confirm="_pageBack" />
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { aliCommit, memberIndex, wxCommit } from '../../utils/api';
export default {
  data() {
    return {
      wxCommitParams: {},
      aliCommitParams: {},
      op_: {},
      name: "",
      number: "",
      image: "",
      imageShow: "",
      userInfo: {},
      isShow: false,
    }
  },
  methods: {
    setHead() {
      uni.chooseImage({
        count: 1,
        sourceType: ['album'],
        success: chooseImageRes => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          uni.uploadFile({
            url: 'http://nad.bdhuoke.com/vip_app/Upload/upload',
            filePath: tempFilePaths[0],
            name: 'file',
            success: (uploadFileRes) => {
              let res = JSON.parse(uploadFileRes.data)
              if (res.code == -1) return this.$u.toast('上传失败')
              this.imageShow = res.data
              this.image = this.imageShow
              // this.image = res.data
            }
          });
        }
      });
    },
    bindAccount() {
      if (this.image == "") return this.$u.toast('请上传收款码')
      if (this.op_.type == 'zfb') this.aliCommit()
      else if (this.op_.type) this.wxCommit()
    },
    wxCommit() {
      this.wxCommitParams.wx_name = this.name;
      this.wxCommitParams.wx_number = this.number
      this.wxCommitParams.wx_image = this.image
      wxCommit(this.wxCommitParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.isShow = true
      })
    },
    aliCommit() {
      this.aliCommitParams.ali_name = this.name;
      this.aliCommitParams.ali_number = this.number
      this.aliCommitParams.ali_image = this.image
      aliCommit(this.aliCommitParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.isShow = true
      })
    },
    memberIndex() {
      memberIndex().then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.userInfo = res.data
        if (this.op_.type == 'wx') {
          this.wxCommitParams.wx_name = this.userInfo.member.wx_name;
          this.wxCommitParams.wx_number = this.userInfo.member.wx_number
          this.image = this.userInfo.member.wx_image
          this.name = this.userInfo.member.wx_name
          this.number = this.userInfo.member.wx_number
          this.imageShow = this.image
        } else if (this.op_.type == 'zfb') {
          this.aliCommitParams.ali_name = this.userInfo.member.ali_name;
          this.aliCommitParams.ali_number = this.userInfo.member.ali_number
          this.image = this.userInfo.member.ali_image
          this.name = this.userInfo.member.ali_name
          this.number = this.userInfo.member.ali_number
          this.imageShow = this.image

        }
      })
    },
  },
  onLoad(option) {
    this.op_ = option
    this.memberIndex()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './bind_account.scss';
</style>