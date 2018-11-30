<template>
    <div class="m-dload">
        <v-header htitle="幻轻APP"></v-header>
        <scroll class="wrapper">
            <div>
                <section class="m-block">
                    <img src="./1.jpg" alt="" />
                    <a @click="dload" class="m-btn m-dload-1"></a>
                </section>
                <section class="m-block">
                    <img src="./2.jpg" alt="" />
                </section>
                <section class="m-block">
                    <img src="./3.jpg" alt="" />
                </section>
                <section class="m-block">
                    <img src="./4.jpg" alt="" />
                </section>
                <section class="m-block">
                    <img src="./5.jpg" alt="" />
                    <a @click="dload" class="m-btn m-dload-2"></a>
                </section>
            </div>
        </scroll>
    </div>
</template>


<script type="text/ecmascript-6">
    import {device} from 'common/js/device'
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'

    const ANDROID_URL = 'https://github.com/'
    const IOS_URL = 'http://www.baidu.com'

    export default {
        data () {
            return {}
        },
        methods: {
            dload(e) {
                let target = e.target

                if (this.result.android) {
                    target.href = ANDROID_URL
                } else if (this.result.ios) {
                    target.href = IOS_URL
                } else if (this.result.weixin) {

                }
            }  
        },
        created() {
            this.result = device()
        },
        components: {
            VHeader,
            Scroll
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .m-dload
        position: fixed
        width 100%
        top: 50px
        bottom: 0
        .wrapper
            height 100%
            overflow hidden
    .m-block
        position relative
        width 100%
        .m-btn
            position absolute
            width 137px
            height 36px
            background-color transparent
        .m-dload-1
            bottom 84px
            left 20px
            @media only screen and (min-width: 360px) 
                bottom 94px
            @media only screen and (min-width: 414px)
                bottom 109px
                left 32px
            @media only screen and (min-width: 641px) 
                bottom 140px
                left 43px
                width 177px
                height 46px
        .m-dload-2
            bottom 24px
            left 50%
            transform translateX(-50%)
            @media only screen and (min-width: 360px) 
                bottom 34px
            @media only screen and (min-width: 414px)
                bottom 40px
            @media only screen and (min-width: 641px) 
                bottom 50px
                width 177px
                height 46px
        img 
            width 100%
            height 100%
            object-fit cover
</style>