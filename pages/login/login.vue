<template>
	<view class="login-warp">
		<view class="login-logo">
			<image src="../../static/logo.png" mode=""></image>
		</view>
		<view class="login-con">
			<template v-if="isPhone == false">
				<view class="login-input">
					<m-input class="m-input" type="text" focus v-model="account" placeholder="请输入用户名/手机号"></m-input>
				</view>
				<view class="login-input">
					<m-input class="m-input" type="password" v-model="password" placeholder="请输入密码"></m-input>
				</view>
				<view class="login-switch">
					<view class="s-phoneLogin" @tap="switchLogin" data-type="1">短信快捷登录</view>
				</view>
			</template>
			<template v-if="isPhone == true">
				<view class="login-input">
					<m-input class="m-input" type="text" focus v-model="phone" placeholder="请输入手机号"></m-input>
				</view>
				<view class="login-input code-input">
					<m-input class="m-input" type="password" v-model="codes" placeholder="请输入验证码"></m-input>
					<view class="codeBtn" :class="{ isActive : codeBtn.status }" @tap="getsmscode">{{codeBtn.text}}</view>
				</view>
				<view class="login-switch">
					<view class="s-phoneLogin" @tap="switchLogin" data-type="0">账号登录</view>
				</view>
			</template>
			
			<view class="login-btn">
				<button class="s-button" :loading="loading" @tap="bindSubmitLogin" data-type="submit">{{ loading ? "登录中...":"登 录"}}</button>
			</view>
			<view class="login-help">
				<navigator class="s-link" url="../register/register">立即注册</navigator>|<navigator class="s-link" url="../forgot/forgot">忘记密码</navigator>
			</view>
		</view>
		<view class="login-help">
			
		</view>
	</view>
</template>

<script>
	import mInput from '@/components/m-input.vue'
	export default {
		components: {
		    mInput
		},
		data() {
			return {
				loading: false,
				account: '',
				password: '',
				phone: '',
				codes: '',
				isPhone: false,
				codeBtn:{
					text: '获取验证码',
					status: false,
					codeTime: 60
				},
				timerId: null
			};
		},
		methods:{
			bindSubmitLogin(e){
				var user = "senbin";
				let paw = "123123";
				if (this.isPhone) {
					if (this.phone.length == 11 ) {
					    uni.showToast({
					        icon: 'none',
					        title: '手机号格式不对'
					    });
					    return;
					}
					if (this.codes == '') {
					    uni.showToast({
					        icon: 'none',
					        title: '请输入验证码'
					    });
					    return;
					}
				} else {
					if (this.account.length < 5) {
					    uni.showToast({
					        icon: 'none',
					        title: '账号最短为 5 个字符'
					    });
					    return;
					}
					if (this.password.length < 6) {
					    uni.showToast({
					        icon: 'none',
					        title: '密码最短为 6 个字符'
					    });
					    return;
					}
				}
				
				if(this.account == user && this.password == paw){
					this.loading = true;
					setTimeout(() => {
					    uni.switchTab({
					    	url: '../index/index'
					    });
					}, 300);
				} else {
					uni.showToast({
					    icon: 'none',
					    title: '账号或者密码不对'
					});
					return;
				}
			},
			bindInputModel: function(e){
				console.log(e)
			},
			switchLogin: function (e){
				var isL = e.currentTarget.dataset.type;
				if (isL == 1) {
					this.isPhone = true
				} else{
					this.isPhone = false
				}
			},
			getsmscode: function() {
				this.codeBtn.status = true;
				this.timerId = setInterval(() => {
						var codeTime = this.codeBtn.codeTime;
						codeTime--;
						this.codeBtn.codeTime = codeTime;
						this.codeBtn.text = codeTime + "S";
						if (codeTime < 1) {
							//取消计时器
							clearInterval(this.timerId);
							this.codeBtn.text = "重新获取";
							this.codeBtn.codeTime = 60;
							this.codeBtn.status = false;
						}
					},
					1000);
				return false;
			}
		}
		
	}
</script>

<style>
	@import "../common/css/login.css";
</style>
