import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import Greeter from './content/Greeter';
import logger from 'redux-logger'
import reducer from './reducer/reducer';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
//定义个store，整个项目都是围绕着它来的，很重要
let configureStore = (initialState) => {
    let store = createStore(reducer, initialState, applyMiddleware(thunk,logger));
    if (module.hot) {
        // 应用任何的改变将造成热加载，重新渲染。
        module.hot.accept(() => {
            const nextRootReducer = reducer;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}

const store = configureStore();
class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <Greeter/>
                </Provider>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
