<template>
    <div class="m-explain">
        <v-header :htitle="title" @back="back"></v-header>
        <scroll class="wrapper" ref="scroll">
            <div>
                <div v-show="content" class="img-wrapper">
                    <img :src="content" alt="" />
                </div>
            </div>
            <div class="loading-container" v-show="loading">
                <loading></loading>
            </div>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'
    import Loading from 'base/loading/loading'
    import { mixin } from 'mixin/index'
    import { getScaleExplain } from 'api/scaleExplain'

    export default {
        
        data() {
            return {
                name: '体脂称说明',
                title: '',
                content: '',
                loading: false
            }
        },
        mixins: [mixin],
        methods: {
            _getScaleExplain() {
                this.loading = true
                getScaleExplain().then((res) => {
                    let data = res.data
                    if (data.ret === 200) {
                        this.title = data.data.title
                        this.content = data.data.image
                        this.loading = false
                    } 
                })
            }
        },
        components: {
            VHeader,
            Scroll,
            Loading
        },
        created() {
            this._getScaleExplain()
        },
        mounted() {
            
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .m-explain
        position: fixed
        width 100%
        top: 60px
        bottom: 0
        max-width 540px
        min-width 320px
        margin 0 auto
        .wrapper
            height 100%
            overflow hidden
        .img-wrapper
            width 100%
            height 100%
            img 
                width 100%
                height 100%
                object-fit cover
    .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
        
</style>