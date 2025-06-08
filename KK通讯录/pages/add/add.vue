<template>
	<view class='pageB'>
	<br>
	<br>
	<view class='form'>
		<input type="text" v-model='item.name' placeholder="name/姓名" class='a'>
		<input type="text" v-model='item.phone' placeholder="phone/电话" class='a'>
		<button type='warn' @click='sub'>提交</button>
	</view>
	<view class='active'>Tip:长按通讯界面的信息可以删除联系人哟!!!</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{
					"name":"",
					"phone":""
				}
				
			}
		},
		methods: {
			sub(){
				const db=uniCloud.database();
				db.collection('kk1').add(this.item).then(e=>{
					console.log(e)
				})
			}
			
		}
	}
</script>

<style scoped lang='scss'>
	.form{
		height: 200px;
		width:80%;
		background-color: rgba(#55ffff, 0.6);
		border-radius: 15px;
		backdrop-filter: blur(20px);
		box-sizing:border-box;
		padding:30px;
		margin-left:40px;
		
		.a{
			border: white solid 1px;
			margin-bottom: 15px;
			height:40px;
		}
		
	}
.active{
	margin-top:200px;
	margin-left:30px;
	color: #ffac25;
}

</style>
