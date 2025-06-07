<template>
	<view class="content">
		<button @click='cloud1'>呼叫总部</button>
	</view>
</template>

<script setup lang="ts">
async function cloud1(){
	const col=uniCloud.importObject('clou')
	let res= await col.say()
	uni.showModal({
		content:JSON.stringify(res),
		showCancel:false
	})
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
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
