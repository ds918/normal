# myapp

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
   - 出现 query 参数改变而且页面没有发生跳转的解决办法有连两个
     - 使用 watch 监听\$route 来实现数据的更新
     - 使用 beforeRouteUpdate 来监听路由参数的变化
