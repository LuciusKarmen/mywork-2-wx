<template>
		<view class='home pageB'>
			<title></title>
			<view class="banner">
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
					<swiper-item v-for='item in bannerList' :key="item._id">
						<view class="swiper-item"><img :src="item.picurl" alt="图片" class="img" mode='aspectFill'></view>
					</swiper-item>
				</swiper>
			</view>
			<view class="message">
				<view>
					<uni-icons type='sound-filled' size='20' color="green"></uni-icons>
					<text class='notice'>公告</text>
				</view>
				<swiper  autoplay="true" interval="3000" duration="1000" vertical="true">
					<view>
					     <swiper-item>欢迎来到星辰网络！</swiper-item>
					     <swiper-item>无论你是谁，先祝你天天开心！</swiper-item>
					     <swiper-item>作者：Lucius.Karmen(许光明)</swiper-item>
					</view>
				</swiper>
				<view>
					<uni-icons type='right' size='16'></uni-icons>
				</view>
			</view>
			<view class="select">
				<common-title>
					<template #top>
						<view>每日推荐</view>
					</template>
					<template #context>
						<view class='date'>
							<uni-icons type="calendar" size="20" color="green"></uni-icons>
							<uni-dateformat :date="Date.now()" format="MM月dd日" color="green" class='sss'></uni-dateformat>
						</view>
					</template>
				</common-title>
				<view class="aaa">
					<scroll-view scroll-x='true'>
						<view class='box' v-for='item in randomList'>
							<img :src="item.smallPicurl" alt="111" mode="aspectFill" class='pic'>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class='main'>
				<common-title>
					<template #top>
						<view>专题壁纸精选</view>
					</template>
					<template #context>
						<navigator url="" style="font-size: 17px;">More+</navigator>
					</template>
				</common-title>
				<view class="bbb">
					<theme-item class='box' v-for='item in classifyList' :key='item._id' :item="item"></theme-item>
					<theme-item :isMore='true'></theme-item>
				</view>
			</view>
		
		</view>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {apiset,apisetRandom, apisetClassify} from  "@/api/apis.js"
	const bannerList=ref([])
	const randomList=ref([])
	const classifyList=ref([])
	const getBanner=async()=>{
        let res=await apiset();
		bannerList.value=res.data;
		console.log("@开头轮播："+bannerList.value)
	}
	const getRandom=async()=>{
        let res=await apisetRandom();
		randomList.value=res.data;
		console.log("@随机："+res.data)
	}	
	const getClassify=async()=>{
		let res=await apisetClassify();
		classifyList.value=res.data.slice(0,8);
	}
	getBanner();
	getRandom();
	getClassify();
</script >

<style lang="scss" scoped>
	.home{
		.banner{
			width:750rpx;
			padding: 10rpx 0;
			swiper{
				width:750rpx;
				height: 350rpx;
				padding: 30rpx;
				.swiper-item{
					height: 100%;
					width:100%;
					.img{
						height: 100%;
						width:100%;
						border-radius: 20px;
						box-shadow: royalblue;
					}
					
				}
			}
			
			}
		.message{
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top:20px;
			margin-left: 36px;
			width:90%;
			height:40rpx;
			border-radius: 20px;
			background-color: #ececec;
			padding:10px;
			
			swiper{
				height:40rpx;
				width:70%;
				

			}
			view{
				margin-right: 10px;
			}
			.notice{
				color:green
			}
		}		
		
		.select{
			.sss{
				font-size: 17px;
				color:green;
			}
			margin-top:10rpx;
			margin-bottom:50rpx;
			.aaa{
				margin-top: 30px;
				width:720rpx;
				margin-left: 30rpx;
				scroll-view{
					white-space: nowrap;
						
					.box{
						width:200rpx;
						height:430rpx;
						display: inline-block;
						margin-right: 15rpx;
						.pic{
							width:100%;
							height:100%;
							border-radius: 20px;
						}
					}
				}
			}

			}
	

		.main{
			
			.bbb{
				padding: 30rpx;
				display:grid;
				grid-template-columns: repeat(3,1fr);
				.box{

				}
			}
			
		}
	}
	
	
</style>