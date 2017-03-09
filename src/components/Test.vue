<template>
 <!--最外层只能有一个标签 -->
  <div class="test">
   <p>我是全英雄联盟最骚的骚猪</p>
   <p>说：{{say}}</p>
   <button v-on:click="toFather">点我传给父组件</button>
  </div>
  <!-- <div>加了我会报错</div> -->
</template>

<script>
export default {
  name: 'test',
  props: ['say'] ,//这里接收父组件穿过来的say值
  data() {
      return {
          massage: '我才不说呢' // 定义一个向父组件传递的值
      }
  },
  methods: {
      toFather: function() { // 按钮点击触发的方法
          this.$emit('myChild',this.massage)// 使用$emit来向父组件传播
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: red;
}
</style>
