<template>
	<view class='show'>
		
		<swiper circular>
			<swiper-item v-for="item in 10">
				<image src="/static/preview2.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class='mask'>
			<view class='back'></view>
			<view class='count'></view>
			<view class='time'></view>
			<view class='day'></view>
			<view class='table'></view>
		</view>
	</view>
</template>

<script lang="ts" setup>

</script>

<style lang='scss' scoped>
	.show{
		width:100%;
		height: 100vh;
		swiper{
			width:100%;
			height:100%;
			swiper-item{
				width:100%;
				height:100%;
				image{
					width:100%;
					height:100%;
				}
			}
		}
	}
	
</style>
