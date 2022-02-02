import { CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE } from "./actions"


let initialState = {
    data: []
}

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_PASSWORD_SUCCESS:
            console.log("success in reducers")
            return Object.assign({}, state, action.data)
        case CHANGE_PASSWORD_FAILURE:
            console.log("Fail Dail")
            return state
        default:
            break;
    }
}
