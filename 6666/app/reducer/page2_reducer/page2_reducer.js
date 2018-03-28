// 多个reducer中的一个
import collection from "../../constant/type_collection"

const initialState = {
    result: null
};
const page2_reducer = (state = initialState, action) => {
    switch (action.type) {
        case collection.page2GetJSON.type:
            return {
                ...state,
                result: action.data
            };
        default:
            return state;//一定要默认返回初始值
    }
};
export default page2_reducer