import { handleActions } from 'redux-actions'

export default handleActions({
    getArticle(state, action) {
        return {
            ...state,
            item: action.payload.item,
            isLoad: true
        }
    },
    modifyLikeStatusByItem(state, action) {
        const { id, likeStatus } = action.payload
        if (id === state.item._id) {
            return {
                ...state,
                item: {
                    ...state.item,
                    like_status: likeStatus,
                    like: likeStatus ? state.item.like + 1 : state.item.like - 1
                }
            }
        }
        return state
    },
}, {
    item: {},
    isLoad: false
})
