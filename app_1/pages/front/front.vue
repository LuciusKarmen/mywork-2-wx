<template>
	<view>
	<button class="k" @click="add">+</button>
	
	<view>{{n}}</view>
	</view>
</template>

<script lang="ts" setup>
const n=ref(0)
function add(){
	n.value=n.value+1
}
</script>

<style scoped>
	.k{
        height:100px;
		width:20%;
		color:rad;
	}
</style>
