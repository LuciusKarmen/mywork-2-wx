<template>
	<view>
		<view @click="$emit('ran',Math.random())"><slot></slot></view >
	</view>
</template>

<script setup lang="ts" name="child">

</script>

<style>

</style>