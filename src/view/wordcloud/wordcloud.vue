<template>
    <chart htitle="词云图">
        <ve-wordcloud
            :data="chartData">
        </ve-wordcloud>
    </chart>
</template>

<script type="text/ecmascript-6">
    import Chart from 'base/chart/chart'

    export default {
        data() {
            return {
                chartData: {
                    columns: ['word', 'count'],
                    rows: [
                        {
                            'word': '先静之, 再思之',
                            'count': 22199
                        },
                        {
                            'word': '合众私, 成己公',
                            'count': 10288
                        },
                        {
                            'word': '一省',
                            'count': 620
                        },
                        {
                            'word': '二静',
                            'count': 37517
                        },
                        {
                            'word': '三勤',
                            'count': 12311
                        },
                        {
                            'word': '四和',
                            'count': 1206
                        },
                        {
                            'word': '五诚',
                            'count': 4885
                        },
                        {
                            'word': '六学',
                            'count': 32294
                        },
                        {
                            'word': '七明',
                            'count': 18574
                        },
                        {
                            'word': '八挺',
                            'count': 38929
                        },
                        {
                            'word': '九趣',
                            'count': 969
                        },
                        {
                            'word': '十恒',
                            'count': 274470
                        },
                        {
                            'word': '静到极处, 自有天地',
                            'count': 12053
                        },
                        {
                            'word': '败人两字，非傲即惰',
                            'count': 57299
                        },
                        {
                            'word': '家勤万事兴',
                            'count': 15418
                        },
                        {
                            'word': '真纯',
                            'count': 22905
                        },
                        {
                            'word': '一书不尽, 不读新书',
                            'count': 5146
                        },
                        {
                            'word': '取法乎上',
                            'count': 49487
                        },
                        {
                            'word': '大处着眼, 小处下手',
                            'count': 33837
                        },
                        {
                            'word': '逆来顺受',
                            'count': 4500
                        },
                        {
                            'word': '强者自胜, 弱者胜人',
                            'count': 5744
                        },
                        {
                            'word': '五到五勤',
                            'count': 4840
                        },
                        {
                            'word': '从兴趣到情趣',
                            'count': 232
                        },
                        {
                            'word': '莫问收获, 但问耕耘',
                            'count': 3706
                        },
                        {
                            'word': '倚天看海花无数',
                            'count': 4812
                        },
                        {
                            'word': '高山流水心自知',
                            'count': 16578
                        },
                        {
                            'word': '格物',
                            'count': 76970
                        },
                        {
                            'word': '规模远大, 综理密微',
                            'count': 6704
                        },
                        {
                            'word': '养神',
                            'count': 15964
                        },
                        {
                            'word': '儒生',
                            'count': 60679
                        },
                        {
                            'word': '自修处求强',
                            'count': 70679
                        },
                        {
                            'word': '失意看己长, 得意看己短',
                            'count': 80679
                        },
                        {
                            'word': '内持定见',
                            'count': 50679
                        },
                        {
                            'word': '但行好事, 莫问前程',
                            'count': 90679
                        },
                        {
                            'word': '大凡人之自诩智识, 多由阅历太少',
                            'count': 4679
                        },
                        {
                            'word': '自立自强',
                            'count': 34679
                        },
                        {
                            'word': '立志猛进',
                            'count': 24679
                        },
                        {
                            'word': '打脱牙和血吞',
                            'count': 34679
                        },
                        {
                            'word': '克己、克事之刚, 非克人之刚',
                            'count': 24679
                        },
                        {
                            'word': '修齐治平',
                            'count': 84679
                        },
                        {
                            'word': '勤俭持家',
                            'count': 54679
                        },
                        {
                            'word': '超越时代的偏见',
                            'count': 64679
                        },
                        {
                            'word': '盛时当做衰时想, 上场当念下场时',
                            'count': 64679
                        },
                        {
                            'word': 'YS',
                            'count': 44679
                        }
                    ]
                }
            }
        },
        methods: {},
        components: {
            Chart
        },
        created() {},
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    
</style>