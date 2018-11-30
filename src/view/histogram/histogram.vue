<template>
    <div>
        <ve-histogram
            :data="chartData">
        </ve-histogram>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                chartData: {
                    columns: ['日期', '访问用户'],
                    rows: [
                        { '日期': '5/12', '访问用户': 2000 },
                        { '日期': '5/13', '访问用户': 3000 },
                        { '日期': '5/14', '访问用户': 2500 },
                        { '日期': '5/15', '访问用户': 4000 },
                        { '日期': '5/16', '访问用户': 3500 },
                        { '日期': '5/17', '访问用户': 5000 },
                    ]
                }
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>