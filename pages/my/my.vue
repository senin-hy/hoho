<template>
	<view>
		<view class="user-box">
			<view class="user-toLayer">
				<view class="uni-flex">
					<view class="user-info">
						<view class="name">知也如也</view>
						<view class="tetx uni-ellipsis">不知为不知，知之为知之！</view>
					</view>
					<view class="user-img">
						<template v-if="userImg == '' ">
							<image class="img" :src="defaultImg" mode=""></image>
						</template>
						<template v-else>
							<image class="img" :src="userImg" mode=""></image>
						</template>
					</view>
				</view>
				<view>
					<view class="uni-icon uni-icon-contact"></view>
					<view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userImg: '',
				defaultImg: '../../static/por.jpg'
			};
		}
	}
</script>

<style>
	.user-box{background: linear-gradient(to top, #46B0FA , #2297F7);height: 400upx;padding-top: 50upx;box-sizing: border-box;}
	.user-box .user-toLayer{width: 80%;margin: 0 auto;height: 300upx;background: #fff;box-shadow: 0px 0px 10px rgba(0, 0, 0, .3);border-radius: 5px;border: 1px solid #F6F6F6;}
	.user-info{flex: 1;padding-top: 20upx;padding-left: 30upx;}
	.user-info .name{font-size: 32upx;}
	.user-info .tetx{color: #999999;margin-top: 5px;font-size: 24upx;line-height: 32upx;width: 410upx;}
	.user-img{float: right;}
	.user-img .img{width: 120upx;height: 120upx;margin: 20upx;border-radius: 50%;}
</style>
