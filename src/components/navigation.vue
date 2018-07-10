<template>
    <nav class="global-nav">
        <div class="wrap">
            <div class="left-part">
                <router-link to="/" active-class="current" exact class="logo-link"><i class="icon icon-nav-logo"></i><span class="hidden">威震天</span></router-link>
                <div class="main-nav">
                    <router-link to="/" active-class="current" exact class="nav-link"><i class="icon icon-nav-home"></i><span class="text">首页</span></router-link>
                    <router-link to="/trending/visit" active-class="current" class="nav-link"><i class="icon icon-nav-explore"></i><span class="text">热门</span></router-link>
                    <router-link to="" active-class="current" class="nav-link nav-more" >
                    <div @click="showList()">
                        <i class="icon icon-nav-more"></i>
                        <span class="text">更多</span>
                    </div>
                    </router-link>
                    <div class="ver-list" v-show="listState">
                        <div @click="hideList()" class="close">
                            <i class="icon icon-nav-close"></i>
                        </div>
                        <router-link to="/about" >
                            <div class="list-item-first">
                                <i class="icon icon-nav-features"></i>
                                <span class="">关于</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-if="!backend" class="right-part">
                <span class="nav-search"><i class="icon icon-search-white"></i><input @keyup.enter="search($event)" placeholder="记得按回车哦" class="nav-search-input"></span>
                <span v-if="isLogin" class="nav-me"><router-link to="/user/account" class="nav-me-link"><img src="/dist/static/images/head.gif" class="nav-avatar-img"></router-link></span>
                <span v-else class="nav-me"><a @click="login" href="javascript:;" class="nav-me-link"><img src="/dist/static/images/head.gif" class="nav-avatar-img"></a></span>
            </div>
        </div>
    </nav>
</template>

<script>
import cookies from 'js-cookie'
export default {
    name: 'navigation',
    props: ['backend'],
    data() {
        // listState = false
        return {
            listState: false,
            isLogin: cookies.get('user')
        }
    },
    methods: {
        login() {
            this.$store.commit('global/showLoginModal', true)
        },
        search(e) {
            var qs = e.target.value
            if (qs === '') {
                return false
            }
            this.$router.replace('/search/' + qs)
        },
        showList() {
            console.log('展开详细目录')
            this.listState = !this.listState
        },
        hideList() {
            console.log('关闭目录')
            this.listState = false
        }
    }
}
</script>
