<template>
<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
	<swiper-item>
		jjj
	</swiper-item>
	<swiper-item>
		fff
	</swiper-item>
	<swiper-item>
		kkk
	</swiper-item>
</swiper>
<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
	<swiper-item>
		<view class="swiper-item"></view>
	</swiper-item>
	<swiper-item>
		<view class="swiper-item"></view>
	</swiper-item>
</swiper>
</template>

<script setup lang="ts" >
	
</script>

<style>
.a{
	height:220px;
	width: 80%;
	background: #52ff02;
	border: 2px black;
}
.b{
	width: 80%;
	height: 100px;
	background: #ffb235;
}
</style>