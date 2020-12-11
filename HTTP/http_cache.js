/**
 * HTTP 缓存
 * 为什么需要缓存？
 *    因为可以加快页面加载速度
 * 哪些资源可以被缓存？
 *    静态资源（js，css，img）
 * 
 * HTTP缓存策略（强制缓存 + 协商缓存）
 *  强制缓存
 *    浏览器初次请求服务器，服务器返回资源和 Cache-Control
 *    再次请求是先请求本地缓存，本地缓存里没有再去请求服务器（依此往复）
 *    资源过期了也是同样的逻辑
 * 
 *  协商缓存
 *    服务器端缓存策略，服务端判断客户端资源，是否和资源端一样
 *    一致则返回 304，否则返回 200 和最新的资源
 * 
 *    浏览器初次请求服务器，服务器返回资源和 Last-Modified（或 Etag）
 *    再次请求，RH 带着 If-Modified-Since（Etag的话就是 If-None-Match）
 *    服务器返回 304，或返回资源和新的 Last-Modified（Etag）
 * 
 *    会优先使用 Etag，因为 Last-Modified 只能精确到秒级
 *    如果资源被重复生成，而内容不变，则 Etag 更精确
 * 
 * 
 *  资源标识
 *    在 Response Headers 中，有两种
 *    Last-Modified 资源的最后修改时间
 *    Etag 资源的唯一标识（一个字符串，类似人类的指纹）
 * 
 *  Cache-Control
 *    在 Response Headers 中（即服务端控制）
 *    控制强制缓存的逻辑（如：Cache-Control: max-age=102400【秒】）
 *    值的作用：
 *      max-age 缓存（过期）时间
 *      no-cache 不用强制缓存，正常的向服务端请求，服务端怎么处理不管
 *      no-store 不用本地缓存，而且不用服务端的一些缓存措施（转用协商缓存）
 *      private 只允许最终用户做缓存（如手机、电脑端）
 *      public  谁都允许做缓存，如中间件的一些代理
 * 
 * Expires
 *    同在 Response Headers 中，同为控制缓存过期
 *    但是已经被 Cache-Control 代替
 * 
 * 
 * 三种刷新操作
 *    正常操作：地址栏输入 url，跳转连接，前进后退等
 *    手动刷新：F5，点击刷新按钮
 *    强制刷新：Ctrl+F5
 * 
 * 刷新操作方式对缓存的影响
 *    正常操作：强制缓存有效，协商缓存有效
 *    手动刷新：强制缓存失效，协商缓存有效
 *    强制刷新：两种缓存都失效
 */