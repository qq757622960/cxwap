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

> 工作进展
* 2018.12.22 
* 已经进展到与app进行桥接, 桥接过后->获取用户信息->进行接口调用

> 桥接
[DSBridge](https://blog.csdn.net/duwen90/article/details/78413069)
```
// JS 调用 native
var bridge = getJsBridge()
var str = bridge.call(‘testSyn’, {msg: ‘hello world’})
console.log(str)

// native 调用 javascript
// DSBridge 中, 只需要将一个函数声明为全局函数即可
window.jsfun = function(data) {
    console.log(‘I am js function, arg is: ’, data)
}

// 同步调用
var str=dsBridge.call("testSyn", {msg: "testSyn"});

// 异步调用
dsBridge.call("testAsyn", {msg: "testAsyn"}, function (v) {
    alert(v);
})
```
* “dsBridge” 是一个全局对象, 在h5页面中初始化DSBridge后便会可用，它有两个方法 “call” 和 “register”;
* bridge.call(method,[args,callback])
* dsBridge.register(methodName,function)

> 插件

[vuex](https://vuex.vuejs.org/zh/installation.html) 

> Vuex 是什么？为什么使用它?

* 暂时理解为 全局对象 
* 集中管理 Vue 中组件的 通用数据
* 多个组件依赖同一个数据 (比如登录的用户信息)
* 不同的视图的操作(如点击) 需要变更同一个数据

> 单项数据流概念

修改(Actions) -> 数据(state) -> 显示(View)

> Vue Router

将组件映射到路由, 然后告诉 Vue Router 在哪里渲染它们。

```
使用路由:
1. 定义(路由)组件
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

2. 定义路由
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

3. 创建 router 实例
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

4. 挂在到根实例中
const app = new Vue({
  router
}).$mount('#app')

this.$router 访问路由器
this.$route 访问当前路由(和 this.$router.currentRoute 相同)

动态路径参数

我们经常需要把某种模式匹配到的所有路由, 全部映射到同一个组件。
例如, 我们有一个 User 组件, 对于所有 ID 各不相同的用户, 都要使用这个组件来渲染。

如下
routes: [
    // 动态路径参数, 以冒号开头
    { path: '/user/:id', component: User }
]

/user/foo
/user/bar

都映射到同一个组件

一个 "路径参数" 使用冒号 : 标记。当匹配到一个路由时, 参数值会被设置到 this.$route.params, 可以在每个组件内使用。

```

> 日志

获取接口步骤:
先去获取用户信息
获取签名
在去请求接口

2018.12.25
调整详情页数据问题

1. 试着去处理边界问题
2. 加载进度条添加
3. 没有数据显示
4. 解决没有数据显示问题: 问题原因, 明明有数据, 确还是先显示暂无数据虽然我也没有搞明白到底是什么原因, 最后的解决方法, 也是模模糊糊...
5. 解决富文本加载图片, scroll 无法获取高度问题, 渲染原理->dom加载->dq('img')->onload->refresh
6. 问题: 请求接口获取报表数据, ios 可以, android 不可以, 报错是 Promise, 一开始以为是 android 不支持 promise, 然后添加了 promise 包, 继续排查, 然后发现还不可以, 最后定位在发现算出来的 ===签名不一致===, 最后定位在签名问题, 最后发现 ios 返回的参数为 { code: "0", sign: "xxxx", user_id: "xxx" }, android: { "sign": "xxx", "user_id": "xxxx" }, 最后以为是 JSON 格式的问题, 因为 ios typeof obj 返回 object, 而 android 返回 string, 所以我添加了 

```
if (typeof data !== 'obj') {
    data = JSON.parse(obj)
}
```

后来发现问题还是不可以, 最后想到, ios 与 android 的签名不一致, 是不是少传了参数, 最后发现, 居然真是 android 少传了一个参数...

这个问题的由来是由 签名 引起的, 下次发现问题, 应该从 签名 方法开始查找, 应该快速定位问题。。。

总结: 今天解决了三个问题
1. 有数据的情况下, 还会显示暂无数据主要代码如下, 问题是由于 异步加载 数据问题
```
<div v-show="content"></div>
<div v-show="!content"></div>

由于数据是异步加载的, 开始加载 content 确实没有数据, 所以就显示了 没有数据
既然他是异步加载的, 我就先判断 data(content)的父级, 这样就不会有问题了

// 这个时候 data 的数据已经来了, 所以下面就不会有问题
<div v-if="data">
    <div v-show="content"></div>
    <div v-show="!content"></div>
</div>
```

2. scroll 解决富文本里面图片问题, 这个问题是由于加载顺序的问题, DOM 加载问题, 当图片还没有加载出来的时候, 去 dqall('img'), 由于图片还没有加载完成.



```
// 外层用一个 data 进行控制
<div class="m-cdetail" v-show="data">
    // 有数据
    <div v-show="content">
        <div v-html="content"></div>
    </div>
    // 没有数据
    <div v-show="!content" class="no-data">暂无数据</div>
</div>
```

2018.12.24

1. 所有桥接回退按钮功能编写:  里面用了一个 mixin 完成

2. 获取用户登录信息, 进行接口请求   已经测试了报表页面已经完成

3. 内容详情页面, 进行路由id获取

===桥接页面===
详情页面
报表页面
售后页面

===插件===
调试 vconsole

===数据处理===
报表暂无数据处理

===申请退换货===
scroll 失效
最后解决问题点: 居然出现在 div { height: 100% }
我解决问题的思路:  先写了一个对的 bs 页面-> 然后放在当前页面(当然是对的啦，我好蠢~) -> 这个问题居然出现在 css 中, 下次注意！！！

=== 详情页面路由传递 ===
http://172.17.100.31:8082/#/cdetail/detail_id/10
问题: 我要配置一个 参数为 属性名为: detail_id 值为 : 10 的路由

解决 android 里面不能调用 forEach 因为 不支持类数组
Array.prototype.slice.call(ArrayLike)


* 使用
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```

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