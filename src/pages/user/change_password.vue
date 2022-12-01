<template>
	<view>

		<Head title="修改密码" />
		<view class="content">
			<view class="bg"></view>
			<view class="form">
				<view class="input-wrap">
					<text class="label">手机号</text>
					<u--input placeholder="请输入绑定的手机号" border="none" v-model="phone" />
				</view>
				<view class="input-wrap">
					<text class="label">验证码</text>
					<u-input placeholder="请输入验证码" border="none" v-model="code">
						<template slot="suffix">
							<u-code ref="uCode" @change="codeChange" changeText="X秒重新获取" />
							<u-button @tap="getCode" :text="tips" type="primary" shape="circle" plain color="#1F73F1" size="mini"
								style="width:148rpx;"/>
						</template>
					</u-input>
				</view>
				<view class="input-wrap">
					<text class="label">新密码</text>
					<u--input placeholder="请输入新密码" border="none" v-model="password" type="password" />
				</view>
				<view class="input-wrap">
					<text class="label">确认密码</text>
					<u--input placeholder="请再次输入新密码" border="none" v-model="passagain" type="password" />
				</view>
				<view class="btn" @click="submit">保存</view>
			</view>
		</view>
		<u-modal :show="show" title="系统提示" content='密码修改成功' @confirm="_pageBack"></u-modal>
	</view>
</template>

<script>
import Head from '../../components/Head.vue'
import {
	sms,
	forgetPass
} from '../../utils/api'
export default {
	components: {
		Head
	},
	data() {
		return {
			tips: "获取验证码",
			phone: '',
			password: '',
			passagain: '',
			code: "",
			smsParams: {},
			tips: "获取验证码",
			show: false,
		}
	},
	methods: {
		codeChange(text) {
			this.tips = text;
		},
		getCode() {
			if (!/^1[0-9]{10}$/.test(this.phone)) {
				return uni.$u.toast('手机号格式有误');
			}
			if (this.$refs.uCode.canGetCode) {
				uni.showLoading({
					title: '正在获取验证码'
				})
				this.smsParams.phone = this.phone;
				this.smsParams.type = 'forget_pass'
				sms(this.smsParams).then(res => {
					if (res.code == -1) return this.$u.toast(res.msg)
					uni.hideLoading();
					uni.$u.toast('验证码已发送');
					this.$refs.uCode.start();
				})
			} else {
				uni.$u.toast('倒计时结束后再发送');
			}
		},
		submit() {
			if (!/^1[0-9]{10}$/.test(this.phone)) {
				return uni.$u.toast('手机号格式有误');
			}
			if (!this.code) {
				return uni.$u.toast('请输入验证码');
			}
			if (!this.password) {
				return uni.$u.toast('请输入新密码');
			}
			if (this.password !== this.passagain) {
				return uni.$u.toast('两次密码输入不一致');
			}
			uni.showLoading({
				title: '正在提交'
			})
			forgetPass({
				phone: this.phone,
				password: this.password,
				passagain: this.passagain,
				code: this.code
			}).then(res => {
				if (res.code == -1) return this.$u.toast(res.msg)
				uni.hideLoading();
				this.show = true
			})
		},
	}
}
</script>

<style lang="scss" scoped>
@import './change_password.scss';
</style>
