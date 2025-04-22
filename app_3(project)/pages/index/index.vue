<template>
	<button @click="resquest()">启动</button>
	<view class='container'>
		<view class='layout'>
			<view class='box' v-for='item in pets'  :key='item.id'>
			<view class='pic'>
				<img :src="item.url" alt="hhh" mode='widthFix'>
			</view>
				<view class='text'>{{item.width}}</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const pets=ref([]);

function resquest(){
	uni.request({
		url:'https://api.thecatapi.com/v1/images/search?limit=30'
	}).then(res=>{
		pets.value=res.data
	})
}
</script>

<style lang='scss' scoped>
.container{
	.layout{
		padding: 50rpx; 
		.box{
			margin-botton:60rpx;
			box-shadow:0 10rpx 30rpx rgba(0,0,0,0.08);
			border-radius: 15px;
			border: 2px solid black;
			.pic{
				img{
					width:100%;
				}
			}
			.text{
				padding:40rpx;
			}
		}
	}
}	
</style>
