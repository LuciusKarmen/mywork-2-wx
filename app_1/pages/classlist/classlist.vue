<template>
	<view class="content">
		<view class="main">
			<navigator url="" v-for='item in 15' class='pic'>
				<image src='/static/preview1.jpg' mode='aspectFill'></image>
			</navigator>
		</view>
	</view>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.content{
	padding:2px;
	
	.main{
		width: 100%;
		display:grid;
		grid-template-columns: repeat(3,1fr);
		gap:4rpx;
		.pic{
			height:440rpx;
			image{
				width: 100%;
				height: 100%;
				
			}
		}
		
	}
	
}
</style>
