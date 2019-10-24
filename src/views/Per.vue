<template>
    <div class="per">
        <Top v-bind:title="title"></Top>
       <div class="login">
           <p class="input">
               <input type="text" class="user" @focus="inp_user" placeholder="用户名/手机号" v-model="username">
               <i class="cancel_inp"></i>
           </p>
           <p class="input">
               <input class="pw" v-bind:type="pwd_type" placeholder="密码" v-model="pwd">
               <span class="pw_c">
                   <span @click="change_type">
                        <img v-if="!eye" src="../../public/static/home/eye.png" alt="">
                        <img v-if="eye" src="../../public/static/home/eye_1.png" alt="">
                   </span>
                   <span>
                        忘记密码
                   </span>
               </span>
           </p>
           <button class="go_log">登 录</button>
       </div>
        <van-divider v-bind:style="{ borderColor: '#ccc', width: '94%', margin: '.5em 3% .5em 3%' }">还未注册，先注册</van-divider>
        <a class="reg" href="javascript:;">点击马上注册</a>
    </div>
</template>

<script>
    import Top from "@/components/Top.vue"
    import Vue from "vue"
    import { Divider } from "vant"
    Vue.use(Divider);

    export default {
        name: "Per",
        data() {
          return {
              title: "个人中心",
              username: "",
              pwd: "",
              eye: false,
              pwd_type: "password"
          }
        },
        methods: {
            change_type() {
                this.eye = !this.eye;
                if(this.eye == true) {
                    this.pwd_type = "text";
                }else {
                    this.pwd_type = "password";
                }
            },
            inp_user() {
                console.log("正在输入用户名");
            }
        },
        components: {
            Top
        }
    }
</script>

<style scoped lang="scss">
    .login {
        width: 90%;
        margin: 2em auto;
        .input {
            width: 98%;
            margin: 0 auto;
            height: 2.3em;
            border-bottom: .06em solid #efefef;
            margin-bottom: 1.4em;
            .user {
                width: 90%;
                height: 2em;
                border: none;
                outline: none;
                margin-bottom: .2em;
            }
            .cancel_inp {
                width: 10%;

            }
            .pw {
                width: 50%;
                height: 2em;
                border: none;
                outline: none;
                margin-bottom: .2em;
                float: left;
            }
            .pw_c {
                display: inline-block;
                width: 40%;
                margin-bottom: .2em;
                height: 2em;
                float: left;
                span:nth-child(1) {
                    display: flex;
                    width: 20%;
                    height: 2em;
                    line-height: 2em;
                    float: left;
                    align-items: center;
                    img {
                        width: 100%;
                        align-items: center;
                    }
                }
                span:nth-child(2) {
                    display: inline-block;
                    margin-left: 8%;
                    width: 72%;
                    font-size: .85em;
                    height: 2em;
                    float: left;
                    box-sizing: border-box;
                    border-left: .06em solid #ccc;
                    line-height: 2em;
                    text-align: center;
                }
            }
        }
        .go_log {
            width: 70%;
            height: 2.8em;
            margin-left: 15%;
            color: #fff;
            margin-right: 15%;
            border: none;
            border-radius: 1.4em;
            background-color: rgba(116, 185, 255, 1);
        }
    }
    .reg {
        color: rgba(0, 0, 0, .4);
        display: inline-block;
        width: 100%;
        height: 3em;
        line-height: 3em;
        text-align: center;
        letter-spacing: .1em;
    }
</style>