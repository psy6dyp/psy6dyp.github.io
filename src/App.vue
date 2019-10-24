<template>
  <div id="app">
    <div v-bind:style="ch1">
       <router-view/>
    </div>
    <Menu v-on:ch="ch"></Menu>
  </div>
</template>

<script>
    import Menu from "./components/Menu.vue"

    export default {
      name: 'App',
      data() {
        return {
            ch1: {
              marginBottom: "60px"
            }
        }
      },
      props: {

      },
      components: {
        Menu
      },
      mounted() {

      },
      methods: {
        ch(ch) {
          this.ch1.marginBottom = (ch + 10) + 'px';
        }
      }
    }
</script>

<style lang="scss">

</style>
