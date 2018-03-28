//  多个reducer中的一个
import collection from "../../constant/type_collection"

const initialState = {
    color: 'red'
};
const page1_reducer = (state = initialState, action) => {
    switch (action.type) {
        case collection.buttonClickAction.type:
            return {
                ...state,
                color: state.color == 'red' ? "blue" : "red"
            };
        default:
            return state;//一定要默认返回初始值
    }
};
export default page1_reducer