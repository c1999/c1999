import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('@/components/index')
        },
        {
            path: '/树形结构-递归组件思想',
            component: () => import('../components/树形结构-递归组件思想')
        }
    ]
})