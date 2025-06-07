<template>
	<view>
		<unicloud-db v-slot:default="{data, loading, error, options}" collection="kk1">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				{{data}}
			</view>
		</unicloud-db>
	</view>
</template>

<script setup lang='ts'>
	
</script>

<style scoped lang='scss'>
	       
</style>
