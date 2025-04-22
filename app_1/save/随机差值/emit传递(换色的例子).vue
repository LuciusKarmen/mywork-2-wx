<template>
<view>
	<child @ran="onran" :style="{background:color}">换色</child>


</view>
</template>

<script setup lang="ts">
import {ref} from "vue"
const color=ref("");
function onran(e)
{
	color.value='#'+String(e).substring(3,6)
}
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

<!-- <template>
	<view>
		<button @click="$emit('add',123)">
				+<slot name="a"></slot>
		</button>
		<button @click="$emit('ran',Math.random())">
				+<slot name="b"></slot>
		</button>
	</view>
</template>

<script setup lang="ts" name="child">

</script>

<style>

</style> -->