<template>
    <div class="top">
        <img @click="back()" src="../../public/static/home/back.png" alt="">
        <span>{{ get_title }}</span>
    </div>
</template>

<script>
    export default {
        name: "Top",
        data() {
            return {
                get_title: this.title
            }
        },
        props: {
            title: String
        },
        methods: {
            back() {
                window.history.go(-1);
            }
        }
    }
</script>

<style scoped lang="scss">
    .top {
        background-color: #1296db;
        width: 100%;
        height: 2.3em;
        img {
            height: 2.3em;
            position: absolute;
            left: 0;
            top: 0;
        }
        span {
            display: inline-block;
            height: 2.3em;
            width: 70%;
            line-height: 2.3em;
            color: #fff;
            text-align: center;
            margin: 0 15% 0 15%;
        }
    }
</style>