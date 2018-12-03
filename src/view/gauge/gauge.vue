<template>
    <chart htitle="仪表盘">
        <ve-gauge
            :data="chartData"></ve-gauge>
    </chart>
</template>

<script type="text/ecmascript-6">
    import Chart from 'base/chart/chart'

    export default {
        data() {
            return {
                chartData: {
                    columns: ['type', 'a'],
                    rows: [
                        { type: '速度', a: 20 }
                    ]
                }
            }
        },
        methods: {},
        components: {
            Chart
        },
        created() {
            console.log(_.chunk(['a', 'b', 'c', 'd']))
        },
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    
</style>