<template>
	<!-- <button>启动</button> -->
	<view class='container'>
		<view class='layout'>
			<view class='box' v-for='(item,index) in pets'  :key='item.id'>
			<view class='pic'>
				<img :src="item.url" alt="hhh" mode='widthFix' @click="showa(index)" lazy-load>
			</view>
				<view class='text'>{{item.content}}</view>
				<view class='text'>---光明同学</view>
			</view>
		</view>
		<view class="xxx">
			<view class="aaa" @click="fresh()">刷新</view>
			<view class="aaa" @click="top()">顶部</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {onReachBottom,onPullDownRefresh} from "@dcloudio/uni-app"
const pets=ref([]);

function resquest(){
	uni.request({
		url:'https://api.thecatapi.com/v1/images/search?limit=10'
	}).then(res=>{
		pets.value=res.data
	}).catch(err=>{
		uni.showToast({
			icon:'none',
			title:'失败'
		})
	}).finally(()=>{
		uni.hideLoading()
	})
}

function showa(index){
	let urls=pets.value.map(item=>item.url)
	uni.previewImage(
		{
		current:index,
		urls
		}
	)
}

function fresh()
{
	uni.startPullDownRefresh()
}

function top(){
	uni.pageScrollTo({
		scrollTop:0
		
	})
}
onReachBottom(()=>{
	resquest();
})
onPullDownRefresh(()=>{
	resquest();
})


resquest();


</script>

<style lang='scss' scoped>
.container{
	margin-botton:60rpx;
	.layout{
		padding: 30rpx; 
		.box{
			margin-bottom:60rpx;
			box-shadow:0 10rpx 30rpx rgba(0,0,0,0.08);
			border-radius: 15px;
			border: 2px solid black;
			.pic{
				image{
					width:100%;
				}
			}
			.text{
				padding:40rpx;
			}
		}
	}
	.xxx{
		position: fixed;
		bottom: 10px;
		right: 20px;
		.aaa{
			display: flex;
			align-items: center;
			justify-content:center ;
			height:50px;
			width: 50px;
			background-color: gainsboro;
			margin-bottom: 40px;
			border-radius: 20px;
			border: 2px soild black;
		}
	}
}	
</style>
