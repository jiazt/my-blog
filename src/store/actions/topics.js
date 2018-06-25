import wepy from 'wepy'
import { createAction } from 'redux-actions'
import api from '@/api'
import config from '@/config'

export const getTopics = createAction('getTopics', async ({ page }) => {
    const { code, data } = await api.get(`frontend/article/list?page=${page}&limit=10`)
    if (code === 200) {
        return {
            ...data,
            page
        }
    }
})

export const modifyLikeStatus = createAction('modifyLikeStatus', payload => payload)
