<template>
	<view class="content">
		<view class="topbar">
			<uni-nav-bar left-icon="back" left-text="返回" @click-left="onClickLeft()" right-text="菜单" title="导航栏组件"></uni-nav-bar>
		</view>
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
        </view>
		<navigator url="../data/data" hover-class="navigator-hover">
			<button type="default">跳转到新页面</button>
		</navigator>
		<navigator url="../productList/productList" hover-class="navigator-hover">
			<button type="default">列表页面</button>
		</navigator>
		<navigator url="../data/data" redirect hover-class="other-navigator-hover">
			<button type="default">在当前页打开</button>
		</navigator>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			onClickLeft(e){
				console.log(this.title)
				this.title = '哈哈'
			}
		},
		components: {
			uniNavBar
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	
</style>
