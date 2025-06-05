<template>
	<view class="theme">
		<navigator :url="'/pages/classlist/classlist?id='+item._id+'&name='+item.name" class='box' v-if='!isMore'>
			<img :src="item.picurl" alt="" mode="aspectFill" class='pic'>
			<view class="mask">{{item.name}}</view>
			<view class='token'>{{compareTimestamp(item.updateTime)}}</view>
			
		</navigator>
		<navigator url="/pages/class/class" open-type="reLaunch" class='box a' v-if='isMore'>
			<img src="../../static/preview_small.webp" alt="" mode="aspectFill" class='pic'>
			<view class="mask">更多</view>
		</navigator>
	</view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

defineProps({
  isMore: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    default() {
      return {
        name: "名字",
        picurl: "",
        updateTime: "" 
      }
    }
  }
})
function compareTimestamp(timestamp) {
  const currentTime = new Date().getTime();
  const timeDiff = currentTime - timestamp;

  if (timeDiff < 60000) {  
    return '1分钟内';
  } else if (timeDiff < 3600000) {
    return Math.floor(timeDiff / 60000) + '分钟前更新';
  } else if (timeDiff < 86400000) {
    return Math.floor(timeDiff / 3600000) + '小时前更新';
  } else if (timeDiff < 2592000000) {
    return Math.floor(timeDiff / 86400000) + '天前更新';
  } else if (timeDiff < 7776000000) {
    return Math.floor(timeDiff / 2592000000) + '月前更新';
  } else {
    return '很久前更新';
  }
}
</script>

<style lang="scss" scoped>
.theme{
	padding:1px;
	.box{
		height:210px;
		position: relative;
		overflow: hidden;

		
		.pic{
			width:100%;
			height:100%;
			border-radius: 10px;

		}
		.mask{
			width:100%;
			height: 70rpx;
			position: absolute;
			left: 0;
			bottom: 0;
			background: rgba(0,0,0,0.2);
			color: white;
			display:flex;
			justify-content: center;
			align-items: center;
			border-radius: 10px;
			// 模糊滤镜
			backdrop-filter: blur(40rpx);
			font-weight: 600;
			font-size: 30rpx;

			
		}
		.token{
			width:57%;
			font-size: 22rpx;
			position: absolute;
			left: 0;
			top: 0;
			background-color:rgba(250,129,70,0.7);
			backdrop-filter: blur(20rpx);
			padding:6rpx 10rpx;
			//单边圆角
			border-radius: 0 0 20rpx 0;
		}
		
	}
	.box.a{
		height:210px;
		position: relative;
		.mask{
			width:100%;
			height: 100%;
			backdrop-filter: blur(20rpx);
			font-size: 25px;

		}
	}
	
}
</style>