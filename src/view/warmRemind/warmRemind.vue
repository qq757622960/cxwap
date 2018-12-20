<template>
    <sale htitle="温馨提示">
        温馨提示
    </sale>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'
    import Sale from 'base/sale/sale'

    export default {
        data () {
            return {}
        },
        methods: {
            
        },
        created() {
        },
        components: {
            VHeader,
            Scroll,
            Sale
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .m-wrapper
        position: fixed
        width 100%
        top: 50px
        bottom: 0
        max-width 540px
        min-width 320px
        background-color #fff
        .wrapper
            height 100%
            overflow hidden
</style>