
//page1.js
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../action/action';
import style from '../../style/style.less'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'

//定义组件
class Greeter extends Component {
    render() {
        const {color, onButtonClick} = this.props;
        let remark = color == 'red' ? "red" : "blue";
        return (
            <div className={style.size}>
                <div className={style[remark]} onClick={onButtonClick}></div>
                <button onClick={onButtonClick}>change color</button>
            </div>
        );
    }
}

//映射Redux state到组件的属性
const mapStateToProps = (state) => {
    return {//由于reducer分为多个子reducer（page1_reducer、page2_reducer），下面是如何拿对应值
        color: state.page1_reducer.color,
        result: state.page2_reducer.result,
    }
};

//映射Redux actions到组件的属性
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onButtonClick: action.buttonClickAction,
    }, dispatch)
};

//连接组件
Greeter = connect(mapStateToProps, mapDispatchToProps)(Greeter)
export default withRouter(Greeter)