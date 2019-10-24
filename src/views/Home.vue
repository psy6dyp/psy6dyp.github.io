<template>
    <div class="home">
        <Search></Search>
        <Swipe></Swipe>
        <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=ta&skin=pitaya" frameborder="0" width="100%" height="24" allowtransparency="true"></iframe>
        <div class="not_par">
            <div class="notice">
                <div>
                    <img class="i1" src="../../public/static/home/sx.png" alt="">
                    <span>
                        公告
                    </span>
                </div>
                <marquee align="left" behavior="scroll" direction="down"
                loop="-1" scrollamount="2"  scrolldelay="50">
                    <p v-for="not in not">
                        {{ not.title }}
                    </p>
                </marquee>
            </div>
        </div>
        <van-skeleton title :row="3" v-if="article_status"/>
        <ul class="article" v-if="!article_status">
           <li v-for="cat in cat" v-if="news[cat.ID] != ''">
               <p class="cat_name">
                   <span class="cat_name_1">
                       <img src="../../public/static/home/sx.png" alt="">
                       <span>
                       {{ cat.cname }}
                       </span>
                    </span>
                    <router-link to="/news">
                        <img src="../../public/static/home/multi.png" alt="">
                    </router-link>
               </p>
               <ul class="art_list">
                   <li v-for="(news, index) in news[cat.ID]">
                       <a class="has_img" v-if="news.img != ''">
                           <div>
                               {{ news.title }}
                           </div>
                           <img v-bind:src=news.img alt="" v-lazy="news.img">
                       </a>
                       <a class="no_img" v-else>
                           <p>{{ news.title }}</p>
                       </a>
                   </li>
               </ul>
           </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Search from "@/components/Search.vue";
    import Swipe from "@/components/Swipe.vue";
    import { Skeleton } from 'vant';
    Vue.use(Skeleton);

    export default {
        name: "Home",
        data() {
          return {
              article_status: true,
              news: [],
              cat: [],
              not: []
          }
        },
        mounted() {
            this.axios.post('/v2/news_home','').then(res=>{
                this.news = res.data.data;
            });
            this.axios.post('/v2/cat','').then(res=>{
                this.cat = res.data.data;
                this.article_status = false;
            });
            this.axios.post('/v2/notice','').then(res=>{
                this.not = res.data.data;
            });
        },
        components: {
            Search,
            Swipe,
        }
    }
</script>

<style scoped lang="scss">
    iframe {
        border-bottom: .4em solid #efefef;
    }
    .not_par {
        height: 2.6em;
        width: 100%;
        border-bottom: .4em solid #efefef;
        .notice {
            width: 96%;
            margin: 0 2% 0 2%;
            height: 2.6em;
            div {
                width: 20%;
                height: 2.6em;
                float: left;
                .i1 {
                    height: 2em;
                    width: 30%;
                    margin: .3em 0 .3em 0;
                    float: left;
                }
                span {
                    float: left;
                    display: inline-block;
                    width: 70%;
                    height: 2.6em;
                    line-height: 2.6em;
                }
            }
            marquee {
                height: 2.5em;
                width: 80%;
                margin: 0 0 .1em 0;
                float: left;
            }
        }
    }
    .article {
        width: 96%;
        margin: 0 auto;
        .cat_name {
            border-bottom: .06em solid #efefef;
            width: 100%;
            height: 2em;
            .cat_name_1 {
                display: inline-block;
                float: left;
                width: 84%;
                height: 2em;
                img {
                    float: left;
                    height: 1.6em;
                    width: 6%;
                    margin: .2em 0;
                }
                span {
                    display: inline-block;
                    height: 2em;
                    width: 94%;
                    line-height: 2em;
                    float: left;
                }
            }
            a {
                display: inline-block;
                float: right;
                width: 16%;
                height: 2em;
                text-align: center;
                img {
                    height: 2em;
                    
                }
            }
        }
        .art_list {
            width: 100%;
            li {
                width: 100%;
                border-bottom: .06em solid #efefef;
                .has_img {
                    display: block;
                    min-height: 5em;
                    div {
                        width: 67%;
                        float: left;
                        height: 4em;
                        margin: .5em 1% .5em 0;
                    }
                    img {
                        width: 31%;
                        float: right;
                        height: 4em;
                        margin: .5em 1% .5em 0;
                    }
                }
            }
        }
    }
</style>