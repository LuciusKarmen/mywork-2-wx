<template>
	<view class="content pageB">
		<image class="logo" src="/static/KK.png"></image>
		<view class="text-area">
			<div class="title">{{title}}</div>
			<br>
			<div class="title">我会给你带来最特殊愉悦的体验</div>
			<br>
			<br>
			<div class="title">请尽情享受吧！</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎来到KK通讯录'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
