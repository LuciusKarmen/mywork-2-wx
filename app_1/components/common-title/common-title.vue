<template>
	<view class='all'>
		<view class='title'>
			<slot name='top'></slot>
			<slot name='context'></slot>
		</view>
	</view>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
	.all{

		padding:0 30rpx;
		.title{
			font-size:40rpx;
			display:flex;
			justify-content: space-between;
			align-items: center;
			
		}
	}
</style>