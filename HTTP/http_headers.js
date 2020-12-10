/**
 * HTTP Headers
 * 
 * Request Headers（请求头）
 *    Accept 浏览器可接收的数据格式
 *    Accept-Encoding 浏览器可接收的压缩算法，如 gzip
 *    Accept-Language 浏览器可接收的语言，如 zh-CN
 *    Connection: keep-alive 一次 TCP 连接重复使用
 *    cookie（浏览器自带）
 *    Host
 *    User-Agent（简称 UA）浏览器信息
 *    Content-Type 发送数据格式，如 application/json
 * 
 * Response Headers（返回头）
 *    Content-Type 返回数据的格式，如 application/json
 *    Content-Length 返回数据大小，多少字节
 *    Content-Encoding 返回数据的压缩算法类型，如 gzip
 *    Set-Cookie
 * 
 * 自定义 headers
 * 
 * 缓存相关的 headers
 *    Cache-Control：Expires
 *    Last-Modifie：If-Modified-Since
 *    Etag：If-None-Match
 */
