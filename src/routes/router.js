import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
	mode: "history",
	routes: [{
			path: "/",
			name: "活动",
			component: () => import('@/view/center'),	
		},
		{
			path: "/center",
			name: "首页",
			component: () => import('@/view/home'),
		},
		{
			path: "/search",
			name: "搜索",
			component: () => import('@/view/search'),
			meta:{
				title:""
			}
		},

	]
})

export default router
