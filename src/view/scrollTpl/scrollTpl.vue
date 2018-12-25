<template>
    <div class="m-bscroll">
        <v-header htitle="BScroll" @back="back"></v-header>
        <scroll class="wrapper" ref="scroll">
            <ul>
                <li v-for="n in 100" :key="n">{{ n }}</li>
            </ul>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'

    export default {
        data() {
            return {}
        },
        methods: {
            back() {
                this.$router.back()
            }
        },
        components: {
            Scroll,
            VHeader
        },
        created() {
            console.log(this.$router)
        },
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .m-bscroll
        position: fixed
        top: 50px
        bottom: 0      
        width 100%  
        background-color #fff
        .wrapper
            height 100%
            overflow hidden
            
</style>