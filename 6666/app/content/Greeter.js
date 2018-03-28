
//Greeter.js
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'
import Page1 from "./page1/page1"
import Page2 from "./page2/page2"
import Nav from "../component/Nav" //webpack配置好了，可以不用写 .jsx扩展名

//定义组件
//定义了一个简单的路由 Nav是导航组件
class Greeter extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Switch>
                    <Route path="/page1" exact component={Page1}/>
                    <Route path="/page2" exact component={Page2}/>
                    <Route component={Page1}/>
                </Switch>
            </div>
        )
    }
}
//啥也没用到就直接返回Greeter组件，否则可以参考page中的写法
export default Greeter