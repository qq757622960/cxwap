import Vue from 'vue'
import Router from 'vue-router'

// import Index from 'view/index/index'
// import Report from 'view/report/report'
// import DLoad from 'view/dload/dload'
// import Bridge from 'view/bridge/bridge'
// import Cdetail from 'view/cdetail/cdetail'                     // 详情页面
// import Aftsale from 'view/aftsale/aftsale'                     // 客服
// import WarmRemind from 'view/warmRemind/warmRemind'
// import AftsaleExplain from 'view/aftsaleExplain/aftsaleExplain'
// import ApplyRefund from 'view/applyRefund/applyRefund'
// import WeightShare from 'view/weightShare/weightShare'         // 体重分享
// import InviteFriends from 'view/inviteFriends/inviteFriends'   // 邀请好友

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/bridge',
			component: resolve => require(['view/bridge/bridge'], resolve)
		},
		{
			path: '/index',
			component: resolve => require(['view/index/index'], resolve)
		},
		{
			path: '/report',
			component: resolve => require(['view/report/report'], resolve),
			query: {
				back: true
			}
		},
		{
			path: '/dload',
			component: resolve => require(['view/dload/dload'], resolve)
		},
		{
			path: '/cdetail/detail_id/:id',
			// component: resolve => require(['view/index/index'], resolve)
			component: resolve => require(['view/cdetail/cdetail'], resolve)
		},
		{
			path: '/weightShare',
			component: resolve => require(['view/weightShare/weightShare'], resolve)
		},
		{
			path: '/inviteFriends',
			component: resolve => require(['view/inviteFriends/inviteFriends'], resolve)
		},
		{
			path: '/life',
			component: resolve => require(['view/life/life'], resolve)
		},
		{
			path: '/aftsale',
			component: resolve => require(['view/aftsale/aftsale'], resolve),
			children: [{
				path: '/warmRemind',  // 静态路由
				// path: ':id',       // 动态路由
				component: resolve => require(['view/warmRemind/warmRemind'], resolve)
			}, {
				path: '/aftsaleExplain',
				component: resolve => require(['view/aftsaleExplain/aftsaleExplain'], resolve)
			}, {
				path: '/applyRefund',
				component: resolve => require(['view/applyRefund/applyRefund'], resolve)
			}]
		}
	]
})
