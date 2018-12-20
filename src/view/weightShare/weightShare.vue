<template>
    <scroll class="wrapper" ref="scroll">
        <div>
            <div class="share-img">
                <img src="./img@3x.png" alt="" />
            </div>
            <div class="share-cont">
                <div class="left">
                    <h2>我已减脂10天，成功减掉</h2>
                    <p><span>4.2</span>kg</p>
                    <img src="./logo@3x.png" alt="">
                </div>
                <div class="right">
                    <img src="./erweima.png" alt="" />
                    <p>长按识别途中二维码</p>
                </div>
            </div>
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
        .share-img
            width 100%
            img
                max-width 100%
        .share-cont
            display flex
            align-items: center
            padding 38px 42px 20px 10px
            .left
                flex 1
                text-align center
                color #000
                h2
                    padding-bottom 10px
                    font-size 16px
                    font-weight 700
                    font-family 'SimHei'
                p
                    font-size 22px
                    padding-bottom 5px
                    span
                        font-size 35px
                        font-weight 700
                img
                    width 40px
                    height 30px
            .right
                padding-top 10px
                text-align center
                img
                    width 81px
                    height 81px
                p
                    padding-top 8px
                    font-size 14px
                    color #666
</style>