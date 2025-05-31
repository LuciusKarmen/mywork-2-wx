<template>
	<view class='show'>
		<swiper circular>
			<swiper-item v-for="item in 10">
				<image src="/static/preview2.jpg" mode="aspectFill"  @click="change"></image>
			</swiper-item>
		</swiper>
		<view class='mask' v-if="kkk">
			<view class='back'></view>
			<view class='count'>3/10</view>
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
				<view class='box'>
					<uni-icons type="download" size="35"></uni-icons>
					<view class='text'>下载</view>
				</view>
			</view>
		</view>
		<uni-popup ref='info' type="bottom">
			<view class='info'>
				<view class='top'>
					<view></view>
					<view class='text'>壁纸信息</view>
					<view>
						<uni-icons type='close' size="30"></uni-icons>
					</view>
				</view>
				<hr>
				<view class="bottom">
				<view class='ID'>
					<view class='text'>壁纸ID：</view>
					<text class='in'>uhwoehwifhewiu</text>
				</view>
				<view class='ID'>
					<view class='text'>分类：</view>
					<text class='in'>111</text>
				</view>
				<view class='ID'>
					<view class='text'>发布者：</view>
					<text class='in'>暗夜星辰</text>
				</view>
				<view class='ID'>
					<view class='text'>评分：</view>
					<text class='in'>uhwoehwifhewiu</text>
				</view>
				<view class='ID'>
					<view class='text'>摘要：</view>
					<text class='in'>uhwoehwifhewiu</text>
				</view>
				<view class='ID'>
					<view class='text'>Token：</view>
					<text class='in'>uhwoehwifhewiu</text>
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
		    <uni-rate @tap="() => submitRate(5)" />
		    <uni-rate @tap="() => submitRate(4)" />
		    <button @click="submitRate">提交评分</button>
		  </view>
		</uni-popup>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const kkk=ref(true)
const info=ref(null)
const p=ref(null)

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

const submitRate = (score = 0) => {
  console.log('评分:', score)
  closePopup()
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
	
</style>
