<template>
    <div class="see">
        <Top v-bind:title="title"></Top>
        <p>see</p>
    </div>
</template>

<script>
    import Top from "@/components/Top.vue"
    export default {
        name: "See",
        data() {
          return {
            title: "看看"
          }
        },
        components: {
            Top
        }
    }
</script>

<style scoped>

</style>