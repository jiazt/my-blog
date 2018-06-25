import wepy from 'wepy'
import { createAction } from 'redux-actions'
import api from '@/api'
import config from '@/config'

export const getTopicsByVisit = createAction('getTopicsByVisit', async ({ page }) => {
    const { code, data } = await api.get(`frontend/article/list?page=${page}&limit=10&by=visit`)
    if (code === 200) {
        return {
            ...data,
            page
        }
    }
})
