import { handleActions } from 'redux-actions'

export default handleActions({
    getTopics(state, action) {
        const { hasNext, total, list, page } = action.payload
        const lists = +page === 1 ? [].concat(list) : state.lists.concat(list)
        return {
            ...state,
            page: +page + 1,
            hasNext,
            total,
            lists,
            isLoad: true
        }
    },
    modifyLikeStatus(state, action) {
        const { id, likeStatus } = action.payload
        const tmpState = JSON.parse(JSON.stringify(state.lists))
        const obj = tmpState.find(item => item._id === id)
        if (obj) {
            obj.like_status = likeStatus
            obj.like = likeStatus ? obj.like + 1 : obj.like - 1
        }
        return {
            lists: tmpState,
        }
    }
}, {
    page: 1,
    hasNext: false,
    total: 0,
    lists: [],
    isLoad: false
})
