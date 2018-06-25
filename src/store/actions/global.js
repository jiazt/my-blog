import wepy from 'wepy'
import { createAction } from 'redux-actions'
import api from '@/api'
import config from '@/config'

export const setGlobal = createAction('setGlobal', payload => payload)
