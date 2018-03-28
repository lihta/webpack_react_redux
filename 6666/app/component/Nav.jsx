//简单的组件例子(导航)
import React from 'react'
import  style from "../style/style.less"
class Nav extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    //简单的导航例子，没有用到各生命周期
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps(nextProps) { }

    //点击导航的跳转事件
    page1Click() {
        let url= location.protocol +'//'+ location.host + "/page1";
        location.href = url
    }
    page2Click() {
        let url= location.protocol +'//'+ location.host + "/page2";
        location.href = url
    }

    render() {
        return (
            <div>
                <ul className={style.nav}>
                    <li onClick={this.page1Click} >page1</li>
                    <li onClick={this.page2Click}>page2</li>
                </ul>
                <div style={{"clear": "both"}}></div>
            </div>
        )
    }
}

export default Nav