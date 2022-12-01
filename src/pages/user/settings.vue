<template>
	<view>

		<Head title="设置" />
		<view class="content">
			<view class="content_1">
				<view class="content_1_1" @click="goAboutUs">
					<view class="content_1_1_1">关于我们</view>
					<image class="content_1_1_2" src="../../static/jiantou_tz.webp" />
				</view>
				<view class="content_1_1" @click="show = true">
					<view class="content_1_1_1">退出登录</view>
					<image class="content_1_1_2" src="../../static/jiantou_tz.webp" />
				</view>
			</view>
		</view>
		<u-modal :show="show" :showCancelButton="true" content='确定退出登录吗？' @confirm="logout" @cancel="show = false">
		</u-modal>
	</view>
</template>
<script>
import Head from '../../components/Head'
export default {
	components: {
		Head
	},
	data() {
		return {
			show: false,
		}
	},
	methods: {
		goPassword() {
			uni.navigateTo({
				url: '/pages/user/change_password'
			})
		},
		logout() {
			uni.removeStorageSync('app_token')
			uni.redirectTo({
				url: '/pages/login/index'
			})
		},
		goAboutUs() {
			uni.navigateTo({
				url: '/pages/user/about_us'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
@import './settings.scss';

/deep/ .u-modal__content__text {
	text-align: center;
}
</style>
