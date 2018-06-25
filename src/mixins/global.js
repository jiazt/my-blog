import wepy from 'wepy'

export default class globalMixin extends wepy.mixin {
    data = {
        globalData: wepy.$instance.globalData
    }
    methods = {

    }
    onShow () {
    }
    onLoad () {
    }
}
