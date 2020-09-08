import loadable from '@loadable/component';


//import Home from './home/home';
import Greeting from './home/greeting';
import Login from './login/login';
import Props from './home/props';
// import Lists from './home/list';
import Forms from './home/from';
import Parent from './home/Parent';
import Context from './home/context';
import Subscribe from './home/subscribe';
import State from './home/state';
import WrappedHoc from './home/hoc';
import Life from './home/life';
import WillUnmount from './home/willUnmount';
import Hook from './home/hook';
import HookDetails from './home/hookdetails';

const Home=loadable(()=>import('./home/home'));
const Lists=loadable(()=>import('./home/list'));
const Mobx=loadable(()=>import('./home/mobx'));
export default [
    {
        id: 1,
        path: '/home',
        component: Home,
        text: '初识React'
    },
    {
        id: 2,
        path: '/greeting',
        component: Greeting,
        text: '创建组件'
    },
    {
        id: 3,
        path: '/props',
        component: Props,
        text: '组件Props'
    },
    {
        id: 4,
        path: '/lists',
        component: Lists,
        text: '列表渲染'
    },
    {
        id: 5,
        path: '/forms',
        component: Forms,
        text: '表单'
    },
    {
        id: 6,
        path: '/parent',
        component: Parent,
        text: '组件传递'
    },
    {
        id: 7,
        path: '/context',
        component: Context,
        text: '上下文'
    },
    {
        id: 8,
        path: '/subscribe',
        component: Subscribe,
        text: '发布订阅模式'
    },
    {
        id: 9,
        path: '/state',
        component: State,
        text: '状态管理'
    },
    {
        id: 10,
        path: '/hoc',
        component: WrappedHoc,
        text: '高阶组件'
    },
    {
        id: 11,
        path: '/lifes',
        component: Life,
        text: '生命周期'
    },
    {
        id: 12,
        path: '/hook',
        component: Hook,
        text: 'Hooks',
        children: [{
            id: 1201,
            path: '/hook/detail/:id/:name',
            component:HookDetails,
            text:'hook详情'
        }]

    },
    {
        id: 13,
        path: '/mobx',
        component: Mobx,
        text: '状态管理Mobx'
    }];