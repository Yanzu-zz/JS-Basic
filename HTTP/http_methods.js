/**
 * 传统的 methods
 *    get 获取服务器数据
 *    post 向服务器提交数据
 *    简单的网页功能，就这两个操作
 */


/**
 * 现在的 methods
 *     get 获取数据
 *     post 新建数据
 *     patch 局部更新数据
 *     put   更新（一条）完整数据
 *     delete 删除数据
 */


/**
 * RESTful API
 *    是一种新的 API 设计方法（早已推广使用）
 *    传统的 API 设计：  把每个 url 当成一个功能
 *    RESTful API 设计：把每个 url 当做一个唯一的资源
 * 
 * 如何设计成一个资源？
 *    尽量不用 url 参数
 *      传统 API 设计：/api/list?page=2
 *      RESTful API： /api/list/2
 * 
 *    用 method 表示操作类型（传统 API 设计）
 *      post 创建请求：/api/create-blog
 *      post 更新请求：/api/update-blog?id=100
 *      get 请求： /api/get-blog?id=100
 * 
 *    用 method 表示操作类型（RESTful API 设计）
 *      post 创建请求：/api/blog
 *      patch 更新请求：/api/blog/100
 *      get 请求： /api/blog/100
 */