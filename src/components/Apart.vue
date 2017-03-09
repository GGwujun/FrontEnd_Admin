<template>
    <div>
        <p>我是Apart</p>
        <!-- 类似anguar的ng-click，用于绑定事件监听 -->
        <a v-on:click="goPage">点我切换</a>
    </div>
</template>

<script>
import Bus from '../Bus' // 同样要引入Bus
export default {
  name: 'test',
  methods: { // methods参数用来声明组件下的方法
      goPage: function () {
      	
		/*push方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。*/
          this.$router.push('/bb')
      }
  },
  /*将引入的Bus组件注入我们的组件对象中 import进来是不够的 还要让组件对象知道 */
  components: {
      Bus
  },
  /*Vue 实例销毁后调用 就是所谓的生命周期钩子*/
  destroyed() {
    Bus.$emit('whiteSay', '克里斯，关下门') // 使用$emit方法创建一个键值对
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: red;
}
div {
    width: 100%;
    height: 100px;
    background-color: green;
}
</style>
