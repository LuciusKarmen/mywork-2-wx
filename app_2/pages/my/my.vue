<template>
	<view>
		<button @click="request()">获取</button>
		<button @click="req()">异步同步化</button>
		{{arr}}
		{{brr}}
	</view>
</template>

<script setup>
import {ref} from 'vue'
let arr=ref('')
/////1.同步
function request(){
	uni.request({
		url:'https://jsonplaceholder.typicode.com/posts',
		success:res=>{
			arr.value=res.data
		},
		data:{
			id:5
		}
	})
	
}

/////2.异步
let brr=ref('')
async function req(){
		let res=await uni.request({
		url:'https://jsonplaceholder.typicode.com/posts',
		})
        brr.value=res.data
	
}
// 3.uni.request({  }).then(res=>{
// console
	
// }).error({ })
</script>

<style>
	       
</style>
