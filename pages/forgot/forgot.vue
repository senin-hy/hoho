<template>
	<view class="login-warp">
		<view class="login-con">
			<view class="login-input">
				<m-input class="m-input" type="text" focus v-model="phone" placeholder="请输入手机号"></m-input>
			</view>
			<view class="login-input">
				<m-input class="m-input" type="password" v-model="password" placeholder="请输入密码"></m-input>
			</view>
			<view class="login-input code-input">
				<m-input class="m-input" type="password" v-model="codes" placeholder="请输入验证码"></m-input>
				<view class="codeBtn" :class="{ isActive : codeBtn.status }" @tap="getsmscode">{{codeBtn.text}}</view>
			</view>
			<view class="login-btn">
				<button class="s-button" :loading="loading" @tap="bindSubmitReg" data-type="submit">{{ loading ? "注册中...":"注 册"}}</button>
			</view>
			<view class="login-help">
				<navigator class="s-link" url="../register/register">立即登录</navigator>|<navigator class="s-link" url="../forgot/forgot">忘记密码</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import mInput from '@/components/m-input.vue';
	export default {
		components: {
		    mInput
		},
		data() {
			return {
				loading: false,
				password: '',
				phone: '',
				codes: '',
				isAgreement: '',
				codeBtn:{
					text: '获取验证码',
					status: false,
					codeTime: 60
				},
				timerId: null
			};
		}
	}
</script>

<style>

</style>
