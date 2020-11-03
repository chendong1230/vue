import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import one from '@/components/one'
import two from '@/components/two'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/', // 默认页面重定向到主页
        redirect: '/two'
    },
    {
        path: '/HelloWorld', // 主页路由
        name: 'HelloWorld',
        component: HelloWorld,

    },
    {
      path: '/one', // 主页路由
      name: 'one',
      component: one,
    },
    {
      path: '/two', // 主页路由
      name: 'two',
      component: two,
    }

    ]
})
