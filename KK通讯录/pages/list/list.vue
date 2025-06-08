<template>
	<view class="pageB">
		<unicloud-db ref='udb' v-slot:default="{data, loading, error, options}" collection="kk1">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<uni-list>
					<uni-list-item v-for="item in data" @longpress.native="rmItem(item._id)" :key="item._id" :title="item.name" :note="item.phone"></uni-list-item>
				</uni-list>
			</view>
		</unicloud-db>
		
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const udb=ref(null)
	function rmItem(id){
		udb.value.remove(id)
	}
	
</script>

<style>
	       
</style>
