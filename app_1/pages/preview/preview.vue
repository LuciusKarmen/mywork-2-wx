<template>
	<view class='show'>
		<swiper circular :current="classindex" @change='hhh'>
			<swiper-item v-for="item in classList">
				<image :src="item.picurl" mode="aspectFill"  @click="change"></image>
			</swiper-item>
		</swiper>
		<view class='mask' v-if="kkk">
			<view class='back'></view>
			<view class='count'>{{classindex+1}}/{{classList.length}}</view>
			<view class='time'>
				<uni-dateformat :date='new Date()' format="hh:mm">
				</uni-dateformat>
			</view>
			<view class='day'>
			<uni-dateformat :date='new Date()' format="MM月dd日">
			</uni-dateformat> 
			</view>
			<view class='table'>
				<view class='box' @click='clickInfo'>
					<uni-icons type="info" size="35"></uni-icons>
					<view class='text'>信息</view>
				</view>
				<view class='box' @click='clickp'>
					<uni-icons type="heart" size="35"></uni-icons>
					<view class='text'>评分</view>
				</view>
				<view class='box' @click="clickdown">
					<uni-icons type="download" size="35"></uni-icons>
					<view class='text'>下载</view>
				</view>
			</view>
		</view>
		<uni-popup ref='info' type="bottom" >
			<view class='info'>
				<view class='top'>
					<view></view>
					<view class='text'>壁纸信息</view>
					<view @click="closea">
						<uni-icons type='close' size="30" ></uni-icons>
					</view>
				</view>
				<hr>
				<view class="bottom">
				<view class='ID'>
					<view class='text'>壁纸ID：</view>
					<text class='in'>{{classInfo.classid}}</text>
				</view>
				<view class='ID'>
					<view class='text'>发布者：</view>
					<text class='in'>{{classInfo.nickname}}</text>
				</view>
				<view class='ID'>
					<view class='text'>评分：</view>
					<text class='in'>{{classInfo.score}}分</text>
				</view>
				<view class='ID'>
					<view class='text'>摘要：</view>
					<text class='in'>{{classInfo.description}}</text>
				</view>
				<view class='ID'>
					<view class='text'>Token：</view>
					<view class='in'>
						<view v-for='tab in classInfo.tabs' class='tok'>
							{{tab}}
						</view>
					</view>
				</view>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="p">
		  <view class='rate-popup'>
		    <view class='top'>
		      <view></view>
		      <view class='text'>评分</view>
		      <view @click="closePopup">
		        <uni-icons type='close' size="30"></uni-icons>
		      </view>
		    </view>
		    <hr>
		    <view class='mid'>
				<text>评分：</text>
				<uni-rate v-model='userscore' @change=""/>
				<text>{{userscore}}分</text>
			</view>
		  </view>
		  <view class='foot'>
			  <button type='primary' @click="sub">确认评分</button>
		  </view>
		</uni-popup>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {onLoad} from '@dcloudio/uni-app'
import { toRef } from 'vue';

const storgclassList=uni.getStorageSync("storgclassList")
console.log(storgclassList)
const classList=ref([])
const readImgs=ref([])
classList.value=storgclassList.map(item=>{
	return {
		...item,
		picurl:item.smallPicurl.replace("_small.webp",".jpg")
	}
})
console.log(classList.value)
const kkk=ref(true)
const info=ref(null)
const p=ref(null)
const userscore=ref(5)

const change=()=>{
	kkk.value=!kkk.value
}
const clickInfo=()=>{
	info.value.open();
}

const clickp = () => {
  if (p.value?.open) {
    p.value.open()
  }
}

const closePopup = () => {
  if (p.value?.close) {
    p.value.close()
  }
}
const closea=()=>{
	info.value.close()
}

const sub = (userscore = 0) => {
  console.log('评分:', userscore)
  closePopup()
}
const clickdown=()=>{
	//#ifdef H5
		uni.showModal({
			content:"请长按保存壁纸"
		})
	//#endif
	
	//#ifndef  H5
	uni.getImageInfo({
		src:classInfo.value.picurl,
		success:(res)=>{
			uni.saveImageToPhotosAlbum({
				filePath:res.path,
				success:()=>{
					console.log("下载成功")
				}
			})
			
		}
	})

	//#endif
	
	
}
const classid=ref([])
const classindex=ref()
const classInfo=ref()
onLoad((e)=>{
	console.log(e)
	classid.value=e.id
	let index=classList.value.findIndex(item=>item._id==classid.value)
	console.log(index)
	classindex.value=index
	classInfo.value=classList.value[classindex.value]
	console.log(classInfo.value)
	readImgsFun()
})
const hhh=(e)=>{
	classindex.value=e.detail.current
	classInfo.value=classList.value[classindex.value]
	console.log(e)
}
	function readImgsFun() {
		readImgs.value.push(
			classInfo.value <= 0 ? classList.value.length - 1 : classInfo.value - 1,
			classInfo.value,
			classInfo.value >= classList.value.length - 1 ? 0 : classInfo.value + 1
		)
		readImgs.value = [...new Set(readImgs.value)];
	}
</script>

<style lang='scss' scoped>
	.show{
		position: relative;
		width:100%;
		height: 100vh;
		.rate-popup{
			background-color: white;
			width:251px;
			height:130px;
			.p{
				color:beige;
			}
		}

		.info{
			height: 35vh;
			background-color: white;
			overflow: hidden;
			border-radius: 20px 20px 0 0;
			.top{
				display: flex;
				justify-content: space-between;
				.text{
					font-size: 23px;
					font-family: "宋体";
					font-weight: 700;
					color: #11b1b4;
				}
			}
			.bottom{
				padding: 5px;
				.ID{
					
					display: flex;
					font-size: 20px;
					padding:6px 0;
					.text{
						color: #b4b4b4;
						white-space: nowrap;
					}
					.in{
						display:flex;
						flex-direction:row;
						justify-content: space-between; 
						.tok{
							color:green;
							border:3px solid green;
							margin:0 20px;
							padding:1px 5px;
							border-radius: 20px;
							
						}
					}

				}
			}
		}
		swiper{
			width:100%;
			height:100%;
			swiper-item{
				width:100%;
				height:100%;
				image{
					width:100%;
					height:100%;
				}
			}
		}
		.mask{
			.count{
				position: absolute;
				top: 10vh;
				left:0;
				right: 0;
				margin:auto;
				width:fit-content;
				color: white;
				font-size: 20px;
				background-color: rgba(black,0.6);
				border-radius: 15px;
				padding:5px;
				
			}
			.time{
				position:absolute;
				top:calc(10vh + 80rpx);
				left:0;
				right: 0;
				margin:auto;
				width:fit-content;
				
				font-size:60px;
				color: white;

			}
			.day{
				position:absolute;
				top:calc(10vh + 80rpx + 80px);
				left:0;
				right: 0;
				margin:auto;
				width:fit-content;
				
				font-size:20px;
				color: white;
			}
			.table{
				width:70%;
				height:80px;
				background-color: rgba(white,0.8);
				position:absolute;
				top:calc(77vh);
				left:0;
				right: 0;
				margin:auto;
				border-radius: 50px;
				display: flex;
				padding:30px;
				padding-top:10px;
				justify-content: space-between;
			}
		}
	}
	.rate-popup{
		.top{
			display:flex;
			justify-content: space-between;
			color: #000000;
			font-size: 20px;
		}
		.mid{
			display:flex;
			justify-content: space-center;
			font-size:20px;
			margin-top: 30px;
			margin-left:20px;
		}
	}

</style>
