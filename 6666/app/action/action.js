//action
//当项目比较大的时候，定义多个action文件，方法与以下一样
import collection from "../constant/type_collection"
import page2GetJSON from "../service/server"

let action = {
    buttonClickAction: () => {
        return (dispatch) => {
            dispatch(collection.buttonClickAction)
        }
    },
    page2GetJSON: () => {
        return (dispatch) => {
            dispatch({...collection.page2GetJSON, data: page2GetJSON()})
        }
    }
};
export default action



