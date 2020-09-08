import React from 'react';
import '@/assets/scss.css';

import routers from '@/views';
import store from '@/store/index';
import { Provider } from 'mobx-react';


//导入路由相关
import {
    HashRouter,
    BrowserRouter,
    NavLink,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from './views/home/home';
import Lists from './views/home/list';
import HookDetails from './views/home/hookdetails';
export default class App extends React.Component {

    //生成侧边栏导航
    createNavLink() {
        return routers.map(ele => (
            <div key={ele.id} className='link'>
                <NavLink exact activeClassName='active' to={ele.path}>{ele.text}</NavLink>
            </div>
        ));
    }

    // 生成视图容器
    // exact完全匹配
    // Route和Switch是直接父子关系，中间不能其它的元素包裹
    createRoute() {
        var res = [];
        routers.map(ele => {
            res.push(
                <Route
                    key={ele.id}
                    exact
                    path={ele.path}
                    component={ele.component}
                ></Route>
            );
            if (ele.children) {
                ele.children.map(ele => {
                    res.push(
                        <Route
                            key={ele.id}
                            exact
                            path={ele.path}
                            component={ele.component}
                        ></Route>
                    );
                });
            }
        });

        return res;
    }




    render() {
        return (
            <HashRouter>
                {/* 状态管理的生产者 */}
                <Provider store={store}>
                    <div className="main">
                        <div className='left'>
                            {this.createNavLink()}
                        </div>
                        <div className='right'>
                            <Switch>
                                {/* 重定向 */}
                                {this.createRoute()}
                                <Redirect from='/*' to='/'></Redirect>

                            </Switch>
                        </div>

                    </div>
                </Provider>
            </HashRouter>
        );
    }
}
