<template>
    <nav class="global-nav">
        <div class="wrap">
            <div class="left-part">
                <router-link to="/" active-class="current" exact class="logo-link"><i class="icon icon-nav-logo"></i><span class="hidden">威震天</span></router-link>
                <div class="main-nav" >
                    <router-link to="/" active-class="current" exact class="nav-link"><i class="icon icon-nav-home"></i><span class="text">首页</span></router-link>
                    <router-link to="/trending/visit" active-class="current" class="nav-link"><i class="icon icon-nav-explore"></i><span class="text">热门</span></router-link>
                    <router-link to="/about" active-class="current" class="nav-link" >
                    <div @mouseenter="showList()" @mouseleave="hideList()">
                        <i class="icon icon-nav-features"></i>
                        <span class="text">关于</span>
                    </div>
                    </router-link>
                    <div class="ver-list" @mouseenter="showList()" @mouseleave="hideList()" v-show="listState">
                        <span>更多...</span>
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
            listState: true,
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
            console.log('鼠标进入')
            this.listState = true
        },
        hideList() {
            //this.listState = false;
        }
    }
}
</script>
