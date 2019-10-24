<template>
    <div class="search">
        <van-search
                ref="search"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <div v-bind:style="wall"></div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Search } from 'vant';
    Vue.use(Search);

    export default {
        name: "Search",
        data() {
            return {
                image: [],
                wall: {
                    width: "100%",
                    height: "50px"
                }
            }
        },
        mounted() {
            let sh = this.$refs.search.clientHeight;
            this.wall.height = sh + "px";
        },
        methods: {
            onSearch() {
                console.log('search');
            }
        }
    }
</script>

<style scoped>
    .van-search {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 998;
    }
</style>