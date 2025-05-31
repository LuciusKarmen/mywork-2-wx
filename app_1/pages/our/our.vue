<template>
  <div class="studio-introduction pageB">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div v-for="(member, index) in members" :key="index" class="member-card">
      <h2>{{ member.name }}</h2>
      <p>{{ member.role }}</p>
      <p class="pp">{{ member.bio }}</p>

	  <p class="pp">QQ:3352113389</p>
	  <p class="pp">公众号：搜索"星辰网络运营部"</p>
    </div>
	<div class='f'>你我皆是星辰</div>
	<div class='f'>历经长夜</div>
	<div class='f'>心向光明</div>
  </div>
</template>

<script>
export default {
  name: 'StudioIntroduction',
  data() {
    return {
      title: '星辰网络科技工作室',
      description: '我是一个热爱技术与设计的专业人士，致力于为客户打造独一无二的数字体验。',
      members: [
        {
          name: '许光明（Lucius.John.Karmen)',
          role: '前端开发工程师',
          bio: '擅长使用最新的前端技术栈，如Vue.js,uniapp和React，为用户提供流畅的交互体验。'
        }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
.studio-introduction {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: auto;
  margin-bottom: 100px;
  padding: 20px;
  text-align: center;
  .f{
	  margin-top:30px;
  	  font-size: 50px;
  }
}

.member-card {
  margin-top: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  .pp{
	  margin-bottom: 10px;
  }

}
</style>