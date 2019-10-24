<template>
    <div class="menu" ref="m1">
        <router-link to="/">
            <img v-if="web_url == '/'" src="../../public/static/menu/main1.png" @load="loaded" alt="">
            <img v-else-if="web_url != '/'" src="../../public/static/menu/main.png" alt="">
            首页
        </router-link>
        <router-link to="/see">
            <img v-if="web_url == '/see'" src="../../public/static/menu/see1.png" @load="loaded" alt="">
            <img v-else-if="web_url != '/see'" src="../../public/static/menu/see.png" alt="">
            看看
        </router-link>
        <router-link to="/per">
            <img v-if="web_url == '/per'" src="../../public/static/menu/per1.png" @load="loaded" alt="">
            <img v-else-if="web_url != '/per'" src="../../public/static/menu/per.png" alt="">
            个人中心
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
          return {
              web_url: '',
              ch: 62
          }
        },
        props: {
          x1:String
        },
        mounted() {
            this.web_url = this.$route.path;
        },
        methods: {
          loaded() {
              let c = this.$refs.m1.clientHeight;
              this.ch = c;
              this.$emit('ch', this.ch)
          }
        },
        watch: {
            '$route' (val, old) {
                // 当前路由
                let path = val.path;
                this.web_url = path;
            }
        },
    }
</script>

<style scoped lang="scss">
    .menu {
        border-top: 1px solid rgba(223, 230, 233,0.9);
        width: 100%;
        display: flex;
        position: fixed;
        background-color: #fff;
        z-index: 998;
        bottom: 0;
        .router-link-exact-active {
            color: #50e3ce;
        }
        a {
            color: #1296db;
            display: inline-block;
            width: 33%;
            text-align: center;
            img {
                padding-top: 2%;
                width: 31%;
                margin: 0 auto;
                display: block;
            }
        }
    }
</style>