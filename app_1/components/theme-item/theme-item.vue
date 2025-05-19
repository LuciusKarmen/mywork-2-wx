<template>
	<view class="theme">
		<navigator url="/pages/my/my" class='box' v-if='!isMore'>
			<img src="../../static/preview_small.webp" alt="" mode="aspectFill" class='pic'>
			<view class="mask"> hhh</view>
			<view class='token'>666</view>
		</navigator>
		<navigator url="/pages/class/class" class='box a' v-if='isMore'>
			<img src="../../static/preview_small.webp" alt="" mode="aspectFill" class='pic'>
			<view class="mask">更多</view>
			
		</navigator>
	</view>
</template>

<script lang="ts" setup>
defineProps({
	isMore:{
		type:Boolean,
		default:false
	}
})
	
</script>

<style lang="scss" scoped>
.theme{
	padding:1px;
	.box{
		height:210px;
		position: relative;
		overflow: hidden;

		
		.pic{
			width:100%;
			height:100%;
			border-radius: 10px;

		}
		.mask{
			width:100%;
			height: 70rpx;
			position: absolute;
			left: 0;
			bottom: 0;
			background: rgba(0,0,0,0.2);
			color: white;
			display:flex;
			justify-content: center;
			align-items: center;
			border-radius: 10px;
			// 模糊滤镜
			backdrop-filter: blur(40rpx);
			font-weight: 600;
			font-size: 30rpx;

			
		}
		.token{
			width:60%;
			font-size: 22rpx;
			position: absolute;
			left: 0;
			top: 0;
			background-color:rgba(250,129,70,0.7);
			backdrop-filter: blur(20rpx);
			padding:6rpx 10rpx;
			//单边圆角
			border-radius: 0 0 20rpx 0;
		}
		
	}
	.box.a{
		height:210px;
		position: relative;
		.mask{
			width:100%;
			height: 100%;
			backdrop-filter: blur(20rpx);
			font-size: 25px;

		}
	}
	
}
</style>