<template>
  <view>

    <Head title="编辑资料" />
    <view class="content">
      <view class="content_1" />
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1">头像</view>
          <image class="content_2_1_2" :src="userInfo.head_image" @click="setHead" />
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">用户名</view>
          <u--input border="none" v-model="userInfo.nick_name" fontSize="26rpx" inputAlign="right" />
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">绑定支付宝</view>
          <view class="content_2_1_1" @click="goBindAccount('zfb')">{{ userInfo.ali_image == "" ? "前往绑定" : "更改绑定" }}
          </view>
        </view>
        <!-- <view class="content_2_1">
          <view class="content_2_1_1">绑定微信</view>
          <view class="content_2_1_1" @click="goBindAccount('wx')">{{ userInfo.wx_image == "" ? "前往绑定" : "更改绑定" }}
          </view>
        </view> -->
      </view>
      <view class="content_3" @click="editMember">保存</view>
    </view>
    <u-modal :show="isShow" title="系统提示" content='修改成功' @confirm="_pageBack" />
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { editMember, memberIndex } from '../../utils/api'
export default {
  data() {
    return {
      userInfo: {},
      show: false,
      head_image: "",
      editMemberParams: {},
      isShow: false,
    }
  },
  methods: {
    memberIndex() {
      memberIndex().then(res => {
        this.userInfo = res.data.member
        this.editMemberParams.head_image = this.userInfo.head
        this.editMemberParams.nick_name = this.userInfo.nick_name
        this.userInfo.head_image = `https://admin.bdhuoke.com/${this.userInfo.head}`
      })
    },
    setHead() {
      uni.chooseImage({
        count: 1,
        sourceType: ['album'],
        success: chooseImageRes => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          uni.uploadFile({
            url: 'https://admin.bdhuoke.com/api/member/uploadImg',
            filePath: tempFilePaths[0],
            name: 'file',
            success: (uploadFileRes) => {
              let res = JSON.parse(uploadFileRes.data)
              console.log(res.data.src)
              if (res.code == -1) return this.$u.toast('上传失败')
              this.userInfo.head_image = `https://admin.bdhuoke.com/${res.data.src}`
              this.editMemberParams.head_image = res.data.src
              this.$forceUpdate()
            }
          });
        }
      });
    },
    editMember() {
      this.editMemberParams.nick_name = this.userInfo.nick_name
      editMember(this.editMemberParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.isShow = true
        this.memberIndex()
      })
    },
    goBindAccount(type) {
      uni.navigateTo({
        url: `/pages/user/bind_account?type=${type}`
      });
    },
  },
  onLoad() {
    this.memberIndex()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './edit_info.scss';
</style>