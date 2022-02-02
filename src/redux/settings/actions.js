// for changing the password
import axios from "axios";

export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";

export const changePasswordThunk = (secret, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/api/update`, {
            type: "business_users", secret: secret, password: password
        });
        dispatch({ type: CHANGE_PASSWORD_SUCCESS, data: { secret, password } })
        console.log(response)
        console.log(`response from line 62 in auth actions`, response)
    } catch (err) {
        console.log(err)
        dispatch({ type: CHANGE_PASSWORD_FAILURE })
    }
}