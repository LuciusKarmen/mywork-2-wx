<template>
	<view class="uesrLayout">
		<view class='user'>
			<view class='box'>
				<view class="pic">
					<img src="../../static/Snipaste_2025-04-15_17-31-13.png" class="pppp" alt="">
				</view>
				<view class='word'>karmen-luious</view>
			</view>
		</view>
		<view class='session'>
			
		</view>
		<view class='session'>
			
		</view>
		
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" sc1>
.uesrLayout{
	.user{
		display:flex;
		justify-content: center;
		margin-top: 80px;
		.box{
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
		}
	}
}
</style>
