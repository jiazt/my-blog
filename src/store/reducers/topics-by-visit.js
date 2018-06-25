import { handleActions } from 'redux-actions'

export default handleActions({
    getTopicsByVisit(state, action) {
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
    }
}, {
    page: 1,
    hasNext: false,
    total: 0,
    lists: [],
    isLoad: false
})
