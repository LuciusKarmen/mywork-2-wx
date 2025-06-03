<template>
	<view class="content">
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
	let res=await apisetClassify();
	classifyList.value=res.data;
	console.log("#"+classifyList.value)
}

	getClass()

</script>

<style scoped lang='scss'>
.content{
	padding:2px;
	
}
</style>
