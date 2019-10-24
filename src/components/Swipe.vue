<template>
    <div class="swipe">
        <van-loading color="#1989fa" v-if="img_status" style="text-align: center;" />
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem, Lazyload, Loading } from 'vant';
    Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Loading);

    export default {
        name: "Swipe",
        data() {
            return {
                images: [],
                img_status: true,
            }
        },
        mounted() {
            this.axios.post('/v2/img', '').then(res => {
                let img = res.data.data;
                for(let i = 0; i < img.length; i++) {
                    let img_url = "http://www.rgznzx.com" + img[i]['img'];
                    this.images.push(img_url);
                }
                this.img_status = false;
            })
        }
    }
</script>

<style scoped>

</style>