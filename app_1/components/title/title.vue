<template>
	<view class="title">
		<view class='text'>搜索</view>
		<navigator url="/pages/search/search" class="li">
			<uni-icons type="search" color="grey"></uni-icons>
			<text class='t'>天上天下尽在掌中</text>
		</navigator>
	</view>
</template>

<script setup lang="ts">
	
</script>

<style lang="scss">
    .title{
		display:flex;
		height:51px;
		padding:0 16px;
		align-items: center;
		.text{
			font-size: 30px;
			font-weight: bold;
			font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		}
		.li{
			margin-left: 20px;
			background-color: rgba(#f3f2f9,0.3);
			
			
			border: 1px solid #25ffff;
			border-radius: 20px;
			width: 160px;
			height: 85%;
			display: flex;
			align-items: center;
				
			.t{
				color:grey;
				
			}
		}
	}
</style>