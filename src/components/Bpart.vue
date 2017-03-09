<template>
	<div>
		<p>我是Bpart</p>
		<a v-on:click="goPage">点我切换</a>
	</div>
</template>

<script>
	import Bus from '../Bus' // 同样要引入Bus
	export default {
		name: 'test',
		methods: {
			goPage: function() {
				this.$router.push('/')
			}
		},
		components: { // 同样要注入Bus
			Bus
		},
		created: function() { // 在组件被创建时候将会执行此函数  相当于进入页面的自执行
			var _self = this; // 将当前作用域保存在变量中，和$on()的作用域区分开来
			Bus.$on('whiteSay', function(data) { // 使用$on方法监听white属性并执行一个回调函数
				_self.whiteSay = data
				console.log(_self.whiteSay)
			});
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
		background-color: yellow;
	}
</style>