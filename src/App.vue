<template>
	<div id="app">
		<img src="./assets/logo.png">
		<router-view></router-view>
		<Test say="你是猪" v-on:myChild="toFatherSay"></Test>
		<p>我儿子对我说: {{noSay}}</p>
		<Dagger></Dagger>
	</div>
</template>

<script>
	import Test from './components/Test' // 这里引入Test组件
	import Dagger from './components/Dagger' // 引入Dagger组件        2.引入Dagger
	
	export default {
		name: 'app',
		components: {
			Test, // 在components中添加Test
			Dagger
		},
		data() {
			return {
				noSay: '' // 用来接收子组件穿过来的数据
			}
		},
		methods: {
			toFatherSay: function(massage) { // mychlid事件触发调用的方法
				this.noSay = massage // massage就是子组件穿过来的内容
			},
			changeDagger: function() {  //4. 增加按钮点击触发的事件
				this.$store.commit('daggerCtrl') // 使用commit(提交)方法唤醒名为daggerCtrl的mutation
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>