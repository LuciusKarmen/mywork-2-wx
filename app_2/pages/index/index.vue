<template>
	<view @click="to">跳转到我的</view>
	
</template>

<script lang="ts" setup>
	uni.setStorageSync('1',2)
	uni.setStorageSync('name',['张三','李四'])
	function to(){
		uni.navigateTo({
			url:'/pages/my/my'
		})
	}
	const b=uni.getStorageSync('1');
	const a=uni.getStorageSync('name');
	console.log(a[1])
	
</script>

<style scoped>
	
	
</style>