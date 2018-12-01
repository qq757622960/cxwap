<template>
    <div class="charts">
        <v-header htitle="图表"></v-header>
        <scroll class="charts-cont">
            <ul class="charts-list">
                <li @click="toHistogram" class="charts-item">柱状图</li>
                <li @click="toLine" class="charts-item">折线图</li>
            </ul>
        </scroll>

        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import VHeader from 'base/vheader/vheader'
    import Scroll from 'base/scroll/scroll'

    export default {
        data() {
            return {}
        },
        methods: {
            toHistogram() {
                this._toRouter('/charts/histogram')
            },
            toLine() {
                this._toRouter('/charts/line')
            },
            _toRouter(path) {
                this.$router.push({
                    path: path
                })
            }
        },
        components: {
            VHeader,
            Scroll
        },
        created() {},
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .charts
        position: fixed
        width 100%
        top: 60px
        bottom: 0
        .charts-cont
            height 100%
            overflow hidden
            background-color #fff
</style>