<template>
	<!-- 事件监听 -->
<view>
	<child @add="onadd" @ran="onran">
		<!-- 可以绑定多个点击事件 -->
		<template #a>
			<view>add</view>
			{{a}}
		</template>
		<template #b>
			<view>ran</view>
			{{b}}
		</template>
	</child>

</view>
</template>

<script setup lang="ts">
import {ref} from "vue"
const a=ref("")
const b=ref("")
	function onadd(e){
		a.value=e
	}
	function onran(e){
		b.value=e
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