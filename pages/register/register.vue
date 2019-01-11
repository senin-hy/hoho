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
			<view class="login-switch">
				<view class="agreement">
					注册表示您同意<navigator class="s-link" url="">"服务条款"</navigator>和<navigator class="s-link" url="">"隐私权相关政策"</navigator>
				</view>
			</view>
			<view class="login-btn">
				<button class="s-button" :loading="loading" @tap="bindSubmitReg" data-type="submit">{{ loading ? "注册中...":"注 册"}}</button>
			</view>
			<view class="login-help">
				<navigator class="s-link" url="../register/register">立即登录</navigator>|<navigator class="s-link" url="../forgot/forgot">忘记密码</navigator>
			</view>
		</view>
		<view class="agreement" style="display: none;">
			<checkbox-group @change="checkboxChange">
				<label class="checkbox" ><checkbox value="1" size="14" /></label>
			</checkbox-group>
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
		},
		methods:{
			bindSubmitReg: function(){
				
			},
			checkboxChange: function (e) {
				//console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
				this.isAgreement = e.detail.value
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
	.agreement{font-size: 24upx;margin-top: 5px;}
	.agreement .s-link{display: inline-block;color: #2185CF;}
</style>
