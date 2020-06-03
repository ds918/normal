<<<<<<< HEAD
# myapp master123
=======
# myapp local123
>>>>>>> local

# publicPath 必须要和当前项目的服务器路径一致，否则会匹配到其他路径代码，或则匹配不到任何文件

## NOTE

```
1. 使用~可以导入node_modules中的静态文件,或则当想要使用webpack alias的时候就可以在最前面添加
```

## keep-alive

### keep-alive 可以实现将页面的选项选择缓存起来，并通过 activated 来更新数据

1. 使用 keep-alive 实现缓存
   - 当使用 keep-alive 的时候需要把所有的 data 变量初始化放在 created 中
   - 数据的更新请求要放在 activated 中，mounted 中最好不执行方法 ( mounted 中不要执行任何请求，因为会被 avtivated 执行两次 )
   - 当需要关闭一个页面的 keep-alive 时，需要把这个页面的数据请求放到 mounted 中，实现页面的全部刷新
   - 关闭 keep-alive 的方法就是添加 exclude 的值为不缓存的页面的 name

## router

1. params 和 query 传参的区别
   - 使用 params 传参必须使用 name 参数 而 query 传参可以使用 path 和 name 参数
   - 使用 params 参数的两种方式
     - 使用动态路由匹配 例如 `{path: "/test/:username/:password"}` 的话显示的 url 地址为`/test/dongsen/123456`
     - 不使用动态路由匹配的话 `{path: "/test"}`,而在跳转的时候使用 `:to="name:"test",params:{username:dongsen,password:123456"}"`的话 url 为`/test`,但是刷新页面 params 参数便会清除
2. 当路由的参数改变而页面不刷新问题
   - 这种情况发生于,在当前页面的 query 参数触发改变的时候,因为页面是同一个所以不会触发任何生命周期方法
   - 路由参数改变不会执行任何一个周期函数
   - 出现 query 参数改变而且页面没有发生跳转的解决办法有两个
     - 使用 watch 监听 \$route 来实现数据的更新
     - 使用 beforeRouteUpdate 来监听路由参数的变化

## 命名路由

1.  使用命名路由的规则

- 在使用 keep-alive 的时候每一个 keep-alive 只能包含一个 router-view
- 在使用命名路由的时候要将 components 的参数设置在 router-view 的子路由,并通过设置 router-view 的 name 参数来显示和隐藏对应的组件
- 所有的路由的 root 路由就是 app.vue,所以当要在顶级路由设置 components 的时候需要把 命名路由设置在 app.vue 中
- 每一个 router-view 只和当前的子路由有关和父级的没有关系
- 命名路由使用在当你想要同级显示多个组件的时候,例如 slideBar 的某一级需要显示的是三个组件组合的页面,就可以使用命名路由

## import 打包组合

- 可以将每个单独路由和其子路由打包成一个文件，使用的语法 `import(/* webpackChunkName: "group-name" */ "@/views/ds")`

## 路由组件传参

- 可以在 route 中设置 props 的值
  - 布尔值: true 为开启,则参数会被设置为组件的属性
  - 静态值: 可以被设置为了属性 ( 其中 props 设置的值的优先级比 params 和 query 传值高 )
  - 方法: 通过方法可以访问 route 的传参,并设置自定义的组件属性名 `props: (route) => ({name:route.query.name})`, props 只能接受返回为对象的方法, 组件 props 参数为对象的键名
  - 其中布尔值的设置目前只适用于 params 传参,也就是把 params 转化为 props

## postcss

- 可以解析 `~`路径
- 主要是用来处理 css 以及 @import

## postcss-px2rem

- 使用 px2rem 的 `remUnit` 参数值取决于设计稿尺寸 `remUnit: 75, // 1rem=75px，这里是设计稿的尺寸是750px, 这里的值的比例取决于设计稿的尺寸`
- 其中如果不是移动端就要去掉 `felxible.js` 以及 `postcss-px2rem`

## router.beforeEach() main.js

- 全局的路由守卫,可以对所有的路由页面进行判断逻辑行为

## meta

- 通过路由的 meta 字段可以更加灵活的控制路由行为 `meta: {title: '页面标题',...}`

## map()

- map 方法返回的是满足条件的数组

## next()

- next(false) 可以阻止页面的跳转

## beforeRouteEnter

- 只能通过 `next(vm => vm)` 来访问 this

## 数据的获取

- 可以先执行页面的跳转,在页面跳转成功后执行 created 和 mounted

- 可以在 beforeRouteEnter 中执行请求, 如果请求是同步的话, 那么页面的跳转会在请求成功后

- 页面进入的执行顺序 created -> mounted -> beforeRouteEnter( next() )

- 当使用了路由守卫函数就必须调用 next() ,否则路由跳转不会实现

## Vuex

- 唯一改变 state 状态的方法就是 commit mutation 方法

- getters 中方法可以对 state 状态进行响应式, 对 state 状态进行过滤和处理但不会修改 state 状态, 其中 getters 中的方法的第二个形参为 getters 方法对象

- state 状态参数也是响应式的, 所以需要提供默认值, 以及当需要更新状态对象为数组和对象时需要使用 Vue.set() 或则 对象展开运算符 `...`

- 当需要实现 mutation 方法的异步改变状态时, 可以使用 actions 实现异步的状态改变, 其中 mutations 只能同步的修改 state 状态, 异步的要放在 actions 中

- 在使用 actions 的时候可以返回一个 promise 来实现 .then 以及 async/await 等同步操作

## 响应式原理

- 对于对象, vue 无法监听对象 property 的添加或移除

- 对于数组, vue 无法监听数组的利用索引直接设置一个数组项时, 以及修改数组的长度

## axios

- axios 执行并发的方法是 axios.all([q,p]).then(axios.spread((q,p) => {})) 也就是执行完两个请求后才 .then

## vue

- 在 watch 和 computed 中定义的方法不能使用箭头函数, 因为获取不到 this 对象

## vue.config.js

- 在使用 postcss.plugins 的时候如果没有显示的 require('autoprefixer') 那么将不起作用

## key is

- key 的作用是确保渲染的数据发生改变时, DOM 节点能够被替换, 使得 DOM 节点重新加载, 而不是仅仅只更新数据

- is 可以把标签转译为指定的组件, 在 vue 单页面没有没有必要使用

## 组件传参

- 在组件上可以自定义事件 `v-on:your-event === @your-event`, 其中自定义事件的名字最好采取 - 命名, 其中通过 $emit() 传过来的参数可以在父组件通过 $event 拿到, 也可以通过定义 methods 方法拿到

- 子组件往父组件传的参数其实就是 $event , $event 参数默认为第一个参数, 否则需要显示的设置形参 \$event

- 在子组件中使用 `inheritAttrs: false` 可以使子组件不会去继承没有被 props 定义的父组件自定义属性, 但是 class 和 style 没有这种限制

## $attrs 和 $listeners

- 分别监听的是未被 props 显示定义的属性, 和父组件所有的绑定事件, 可以在子组件的目标节点使用 `v-bind="$attrs"` 来绑定属性, 可以通过 `v-on="$listeners"` 来给目标节点绑定所有的事件

## 插槽

- 后备内容: 插槽的会使用所有的后备内容, 而且不会受具名插槽的影响

## .native 修饰符

- 在父组件绑定 native 事件可以使子组件的能够触发父组件绑定事件

## vuetify 和 vant

- pc 端以及响应式使用 vuetify , 移动端使用 vant

## css module

- 父组件的样式会影响子组件, 当使用了 module 就不会出现这种情况, 没有关系的页面样式不会相互影响, 但是 css module 不会去解析标签选择器, 所以尽量不要使用标签选择器, 面对父组件样式会影响子组件样式, 在所有的页面的 style 标签中使用最外层的 div 的 id 选择器包裹

## vuetify v-sheet

- 可以作为 div 来使用

## MOCK

## 使用了 async await 捕获异常的方法

- try()catch(err){}

## NOTIFY

- 在 vue 项目中最好只使用 vue-router 来实现路由的跳转
