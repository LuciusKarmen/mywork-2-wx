<template>
	
		<view class='content'>
			<navigator :url="'/pages/preview/preview?id='+item._id" class="item" 
			v-for="item in wallList"
			:key="item._id"
			>			
				<image :src="item.smallPicurl" class='pic' mode="aspectFill"></image>
			</navigator>
		</view>
	
</template>

<script setup lang='ts'>
import {onMounted, ref} from 'vue'
import {apisetWall} from '@/api/apis.js'
import {onLoad,onReachBottom} from "@dcloudio/uni-app"
const queryParams={
	pageNum:1,
	pageSize:12,
	classid:null
}
// 如果结束了，设置一个结束token
const No=ref(false)
const wallList=ref([])
const getWall=async()=>{
	let res=await apisetWall(queryParams)
	wallList.value=[...wallList.value,...res.data]
	if(queryParams.pageSize>res.data.length)
	{
		No.value=true
	}
	uni.setStorageSync("storgclassList",wallList.value)
	console.log(wallList.value)
}

onLoad((e)=>{
	console.log(e)
	let {id=null,name=null}=e;
	queryParams.classid=id;
	console.log(id,name)
	uni.setNavigationBarTitle({
		title:name
	})
	getWall()
})
onReachBottom(()=>{
	if(No.value) return;
	queryParams.pageNum++
	console.log(1)
	getWall()
})
</script>

<style scoped lang="scss">
.content{
	    width: 100vw;
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap:5rpx;
		padding:5rpx;
		.item{
			height: 440rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
</style>