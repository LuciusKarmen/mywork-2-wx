<template>
	<view class="a">
		<button class="l" @click="a()">返回</button>
		<button class="l" @click="k()">菜单</button>
	</view>
</template>

<script lang="ts" setup>
// 1.uni.showToast({
// 	title:"成功",
// 	image:'../../static/success.png'
// })

// 2.uni.showToast({
// 	title:"加载中---",
// 	icon:'loading'
// })

// 3.uni.hideToast()

// 4.uni.showLoading({
// 	title:"指令执行...",
// })
// setTimeout(
// 	function(){
// 		uni.hideLoading()
// 	},5000
// )
function k(){
	uni.showActionSheet({
		itemList:['前端','后端','全栈','其他']
	})
}
function a(){
uni.showModal({
	title:'主人',
	content:'您真的要回家吗，呜呜',
	cancelText:"留下",
	comfirmText:"回家",
	editable:true,
	success:res=>{
		if(res.confirm) {uni.showToast({
			title:"成功！！！！！"
		})}
		else{
			uni.showToast({
				title:"失败",
				icon:'error'
			})
		}
	}
	
})
}
</script>

<style>
.l{
	width: 100px;
	height: 80px;
}
</style>
