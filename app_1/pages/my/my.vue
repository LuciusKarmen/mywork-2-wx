<template>
	<view class="uesrLayout pageB">
		<view class='user'>
			<view class='box'>
				<view class="pic">
					<img src="../../static/星辰网logo.png" class="pppp" alt="">
				</view>
				<view class='word'>Lucius-Karmen</view>
				<view class='address'>来自：江苏</view>
			</view>
		</view>
		<view class='session'>
			<view class='list'>
				
				<view class="row" @click="go">
					<view class='left'>
						<uni-icons type="download" size='30' color="green"></uni-icons>
						<view class='text'>我的下载</view>
					</view>
					<view class='right'>
						<view class='text'>{{userList.downloadSize}}</view>
						<uni-icons type="forward" size='30' color="green"></uni-icons>
					</view>
				</view>
			

				<view class="row">
					<view class='left'>
						<uni-icons type="download" size='30' color="green"></uni-icons>
						<view class='text'>联系客服</view>
						<!-- #ifdef MP -->
						<button open-type="contact"></button>
						<!-- #endif -->
						<!-- #ifndef MP -->
						<button @click="clicki">电话</button>
						<!-- #endif -->
						
					</view>
					<view class='right'>
						<uni-icons type="forward" size='30' color="green"></uni-icons>
					</view>
					
				</view>
			</view>
			
		</view>
		<view class='session'>
				<view class='list'>
					<view class="row">
						<view class='left'>
							<uni-icons type="download" size='30' color="green"></uni-icons>
							<view class='text' @click="goq">常见问题</view>
						</view>
						<view class='right'>
							
							<uni-icons type="forward" size='30' color="green"></uni-icons>
						</view>
					</view>
					<view class="row">
						<view class='left'>
							<uni-icons type="download" size='30' color="green"></uni-icons>
							<view class='text' @click="goto">关于我们</view>
						</view>
						<view class='right'>
							
							<uni-icons type="forward" size='30' color="green"></uni-icons>
						</view>
					</view>
				</view>
			
		</view>
		
	</view>
</template>

<script setup>
	import {apisetUser} from '../../api/apis'
	const userList=ref([])
	const getuser=async()=>{
		const res=await apisetUser()
		userList.value=res.data;
		console.log(userList.value)
	}
const clicki=()=>{
	uni.makePhoneCall({
		phoneNumber:'16670870515'
	})
}
const go=()=>{
	uni.switchTab({
		url:'/pages/classlist/classlist'
	})
}
const goto=()=>{
	uni.navigateTo({
		url:'/pages/our/our'
	})
}
const goq=()=>{
	uni.navigateTo({
		url:'/pages/problem/problem'
	})
}
getuser()
</script>

<style lang="scss" sc1>
.uesrLayout{

	.user{
		display:flex;
		justify-content: center;

		.box{
			margin-top: 50px;
			display:flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			.pic{
				display:flex;
				justify-content: center;
				.pppp{

					height:100px;
					width: 100px;
					border-radius: 50%;
				}
			}

			.word{
				margin-top: 10px;
				font-size:30px;
			}
			.address{
				
				margin-top: 10px;
				font-size:20px;
				color: gainsboro;
			}
		}
	}
	.session{
		width:690rpx;
		margin:50px auto;
		background-color: gainsboro;
		border:1px solid #eee;
		box-shadow: 0 0 30rpx rgba(0,0,0,0.6);
		border-radius: 10px;
		.row{
			display:flex;
			justify-content: space-between;
			padding:0 30rpx;
			height:100rpx;
			border-bottom: 1px solid #eee;
			.left{
				display: flex;
				align-items: center;
			}
			.right{
				display: flex;
				align-items: center;
			}
			button{

				position: absolute;
				top:390px;
				left:17px;
				width:93%;
				height: 55px;
				opacity: 0;
			}
		}
	}
}
</style>
