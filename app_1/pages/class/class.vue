<template>
	<view class="classout pageB">
		<title></title>
		<view class="main">
			<theme-item :item='item' v-for="item in classifyList" :key='item._id'>
			</theme-item>
		</view>
	</view>
</template>

<script setup lang='ts'>
	import {onMounted, ref} from 'vue'
	import {apisetClassify} from '@/api/apis.js'
	
const classifyList=ref([])
const getClass=async()=>{
	let res=await apisetClassify({
		pageSize:18;
	});
	classifyList.value=res.data;
	console.log("#"+classifyList.value)
}

	getClass()

</script>

<style>
	.main{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		padding:30rpx;
	}
	       
</style>
