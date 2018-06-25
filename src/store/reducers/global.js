import { handleActions } from 'redux-actions'

export default handleActions({
    setGlobal(state, action) {
        return {
            ...state,
            ...action.payload
        }
    }
}, {
    user: '',
    userid: '',
    username: '',
    avatar: '',
})
