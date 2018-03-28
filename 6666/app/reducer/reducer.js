//reducer
import {combineReducers} from "redux" //整合多个reducer需要combineReducers方法
import page1_reducer from "./page1_reducer/page1_reducer" //引入子reducer
import page2_reducer from "./page2_reducer/page2_reducer" //引入子reducer

const reducer = combineReducers({
    page1_reducer,
    page2_reducer,
});

export default reducer