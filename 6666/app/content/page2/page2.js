
//page2.js
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import style from '../../style/style.less'
import action from '../../action/action'
import img1 from '../../style/img/180x110x8k.png'
import img2 from '../../style/img/247x173x9k.png'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'

//定义组件
class Page2 extends Component {
    componentDidMount(){//生命周期，不知道自己普及吧
        this.props.page2GetJSON()
    }
    render() {
        return (
            <div>
                <div className={style.page2}>
                    {this.props.result}
                </div>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <p>css-背景</p>
            </div>
        );
    }
}

//映射Redux state到组件的属性
const mapStateToProps = (state) => {//...来些需要的state
    return {
        result:state.page2_reducer.result
    }
};

//映射Redux actions到组件的属性
const mapDispatchToProps = (dispatch) => {//...来些需要的方法映射到action
    return bindActionCreators({
        page2GetJSON:action.page2GetJSON
    }, dispatch)
};

//连接组件
Page2 = connect(mapStateToProps, mapDispatchToProps)(Page2)
export default withRouter(Page2)