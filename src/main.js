// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({ //创建一个仓库
	state: {
		showDagger: true, // 定义一个状态
	},
	mutations: { // 定义 mutation ，更改 Vuex 的 store 中的状态的唯一方法是提交mutation
		daggerCtrl(state) { // 一定要传入state，并且是第一个参数
			state.showDagger = !state.showDagger // 将showDagger值取反
		}
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})