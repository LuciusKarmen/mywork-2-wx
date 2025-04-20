<template>
<view class='main'>
	<view class="all">
		<view class="n" v-for="(item,index) in list" :key="item.id">
			{{item.id}}:{{item.word}}
		</view>
		
	</view>
	<view class="container">
	<view class="www">
		<label for="ppp">输入：</label>
		<input type="text"
		id="ppp"
		v-model="mod"
		>
	</view>
	</view>
	<view class="container1">
		<button class="s" @click="add">提交</button>
		<button class="s" @click="clean">取消</button>
	</view>
</view>	
</template>

<script lang="ts" setup name="other">
import { reactive,ref } from 'vue';

const mod=ref('');
const list=reactive([
	{id:1,word:"我爱你"},
	{id:2,word:"我也爱你"},
	{id:3,word:"好好学习，天天向上"}
])
const n=ref(3);
function add(){
	
	list.push({id:n.value+1,word:mod.value})
	mod.value=''
	n.value=n.value+1;
}

function clean()
{
	mod.value=''
}
</script>

<style>
.all{
	
    border: 2px solid black;
	color:black;
	width: 70vw;
	font-size: 20px;
	height: 300px;
	background-color: aqua;
	border-radius: 15px;
	margin: auto;
	box-shadow: 10px;
}
.n{
	
}
.container1 {
  margin-top: 30px;
  display: flex; 
  justify-content:space-around; 
  

}
.container {
  display: flex; 
  justify-content: center; 

}

.www {
  display: flex;
  border: 2px solid pink;
  background-color: pink;
  margin-top: 100px;
  border-radius: 15px;
  width: 60vw;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2); 
  
}
	
.s{
	font-size: 10px;
	padding: 5px;
	width: 60px;
	height: 40px;
	background-color: aqua;
	border-radius: 15px;
	box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2); 
}
.main{
	background-color: azure;
	height: 100vh;
	}
</style>
