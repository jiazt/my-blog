<template>
    <div class="main wrap clearfix">
        <div class="main-left">
            <div class="card card-answer">
                <div class="answer-content">
                    <div class="article-content">
                        <h3 class="about-title">关于作者</h3>
                        <div class="flex-item">
                            <div class="flex-label">姓名:</div>
                            <div class="flex-content">贾振天</div>
                        </div>
                        <div class="flex-item">
                            <div class="flex-label">年龄:</div>
                            <div class="flex-content">1995.04</div>
                        </div>
                        <div class="flex-item">
                            <div class="flex-label">职业:</div>
                            <div class="flex-content">前端开发</div>
                        </div>
                        <div class="flex-item">
                            <div class="flex-label">Github:</div>
                            <div class="flex-content"><a href="https://github.com/jiazt" target="_blank">@jiazt</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-right">
            <trending :trending="trending"></trending>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import metaMixin from '~mixins'
import trending from '../components/aside-trending.vue'

export default {
    name: 'frontend-charts',
    async asyncData({ store }) {
        await store.dispatch('frontend/article/getTrending')
    },
    components: {
        trending
    },
    mixins: [metaMixin],
    computed: {
        ...mapGetters({
            trending: 'frontend/article/getTrending'
        })
    },
    mounted() {},
    metaInfo() {
        return {
            title: '威震天',
            meta: [{ vmid: 'description', name: 'description', content: '威震天' }]
        }
    }
}
</script>
