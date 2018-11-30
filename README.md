# cxwap

> cxwap

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> 插件

[v-charts](https://v-charts.js.org/#/) 

``` bash
# 使用姿势

# 解决痛点: 使用 echarts 生成图表时，经常需要做烦琐的数据类型转换、修改复杂的配置项。v-echarts 主要是简化配置项

# 使用心得
# 由使用折线图, 而窥一斑而见全豹。

# 使用过程中用的最多的其实就是配置项，烦琐的配置项, 差点没把我搞死, 主要是烦琐, 一点逻辑其实也没有。吐槽一下, 哈哈哈!

# 1. 数据

# 标准的数据结构
{
  columns: ['日期', '访问用户'],
  rows: [
    { '日期': '2018-05-22', '访问用户': 32371},
    { '日期': '2018-05-23', '访问用户': 12328},
    { '日期': '2018-05-24', '访问用户': 92381}
  ]
}

# columns 中是维度和指标的集合, v-charts 中的大部分图表都是单维度多指标, 所以默认第一个值为 维度(日期), 剩余的值为指标。

# rows 中是数据的集合


# 2. 配置项

1. setting
setting: {
    dimension: [],      // 用于指定维度
    metrics: [],        // 用于指定指标
    area: true,         // 直线图里面是否显示区域
    yAxisType: ['0.0'], // y轴设置数据类型
    labelMap: {         // 指定指标的别名
        PV: '访问用户'   // 原始数据里面是 PV, 修改别名后为 访问用户
    }
}

2. 标签进行属性配置
<ve-line
    :data="xxx"
    :loading="xxx"
    :data-empty="xxx"
    :settings="xxx"
    :extend="xxx"
    :tooltip-visible="false"
    :legend-visible="false"
    :events="xxx"
    width="100px"
    @ready="xxx"
    @ready-once="xxx">
</ve-line>

# 注意: settings 可以合并在 extend 中

#具体参考 (基本属性)[https://v-charts.js.org/#/props]

# 3. 增加标识元素的属性(没懂...)

# 4. 状态属性 (loading, data-empty) 已撸, 需要在 main.js 中引用 css

# 5. 钩子函数 (没用)

# 6. extend (似懂非懂, 设置属性配置项)

# ====================== 折线图 ==========================

# https://v-charts.js.org/#/line 配置项


# ====================== 总结 ==========================

# 三大配置项 
<v-line
    :data="xxx"
    :setting="xxx"
    :extend="xxx">
</v-line>
```