import wepy from 'wepy'
import { createAction } from 'redux-actions'
import api from '@/api'
import config from '@/config'

export const getArticle = createAction('getArticle', async ({ id }) => {
    const { code, data } = await api.get(`frontend/article/item?id=${id}&markdown=1`)
    if (code === 200) {
        return {
            item: data
        }
    }
})

export const modifyLikeStatusByItem = createAction('modifyLikeStatusByItem', payload => payload)
