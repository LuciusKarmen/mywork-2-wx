<template>
	<view class="classout pageB">
		
		<title></title>
		<view class='classify'>
			<theme-item v-for='item in 15'></theme-item>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style>
	.classify{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		padding:30rpx;
		
	}
	       
</style>
