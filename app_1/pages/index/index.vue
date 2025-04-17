<template>
<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" vertical>
	<swiper-item>
		<view class="b">111</view>
	</swiper-item>
	<swiper-item>
		<view class="b">222</view>
	</swiper-item>
	<swiper-item>
		<view class="b">333</view>
	</swiper-item>
</swiper>

</template>

<script setup lang="ts" >
	
</script>

<style>
.a{
    height:100vh;
	width: 100vw;
	background: #52ff02;
	border: 2px black;
}
.b{
	width: 80%;
	height: 100px;
	background: #ffb235;
}
</style>