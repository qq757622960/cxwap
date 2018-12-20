<template>
    <scroll class="wrapper" ref="scroll">
        <div>
            邀请好友
        </div>
    </scroll>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'

    export default {
        data () {
            return {}
        },
        methods: {
            back() {
                this.$router.back()
            },
            _refreshScroll() {
                let imgElemList = document.querySelectorAll('img')
                imgElemList.forEach(element => {
                    element.onload = () => {
                        this.$refs.scroll.refresh()
                    }
                })
            }
        },
        created() {
            setTimeout(() => {
                this._refreshScroll()    
            }, 20);
        },
        components: {
            Scroll
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .wrapper
        width 100%
        height 100%
        max-width 540px
        min-width 320px
        background-color #fff
        overflow hidden
</style>