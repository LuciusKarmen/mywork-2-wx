<template>
	<view class="classLayout pageBg">
		<!-- #ifndef MP-TOUTIAO -->
		<custom-nav-bar title="分类"></custom-nav-bar>
		<!-- #endif -->
		
		<view class="classify">
			<theme-item v-for="item in classifyLi" 
			:key="item._id"
			:item="item"
			></theme-item>
		</view>
		
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {onShareAppMessage,onShareTimeline} from "@dcloudio/uni-app"
import {apisetClassify} from "@/api/apis.js"
const classifyLi = ref([]);

const getClassify =async()=>{
	let res =await apisetClassify({
		pageSize:20
	});
	classifyLi.value = res.data
	console.log(res);
}
getClassify()
</script>

<style scoped lang="scss">
	.classify{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		padding:30rpx;
	}
	       
</style>
