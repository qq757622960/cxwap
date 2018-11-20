<template>
    <scroll 
        class="wrapper" 
        ref="wrapper"
        :pulldown="pulldown"
        :pullup="pullup"
        :listenScroll="listenScroll"
        :beforeScroll="beforeScroll"
        @pulldown="_getComments"
        @scrollToEnd="_getComments"
        @scroll="_scroll"
        @beforeScroll="_beforeScroll"
        :data="data">
        <ul class="content">
            <li v-for="item in data">{{ item.title }}</li>
        </ul>
        <div class="loading-container">
            <loading v-show="!data.length"></loading>
        </div>
    </scroll>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import Loading from 'base/loading/loading'
    import {getComments, getPosts} from 'api/test'

    export default {
        data() {
            return {
                data: [],
                pulldown: false,
                pullup: false,
                listenScroll: false,
                beforeScroll: false
            }
        },
        methods: {
            _beforeScroll() {
                console.log('beforeScroll');
            },
            _scroll(pos) {
                console.log(pos);
            },
            _getComments() {
                getComments().then((res) => {
                    this.data = res.data.concat(this.data)
                })
            }
        },
        created() {
            this._getComments()
        },
        components: {
            Scroll,
            Loading
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .wrapper
        height 100%
        overflow hidden
    .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>