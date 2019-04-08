(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{345:function(t,_,v){"use strict";v.r(_);var e=v(9),l=Object(e.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"输入url背后的技术步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#输入url背后的技术步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 输入URL背后的技术步骤")]),t._v(" "),v("p",[t._v("一道经典的面试题，涵盖的知识点非常多，这里解答下该问题，以对自己的知识体系进行梳理。")]),t._v(" "),v("ol",[v("li",[t._v("系统层\n"),v("ol",[v("li",[t._v("发起http请求，解析域名")]),t._v(" "),v("li",[t._v("DNS\n"),v("ol",[v("li",[t._v("Chrome搜索自身DNS缓存。chrome输入"),v("code",[t._v("chrome://net-internals/#dns")]),t._v("可查看到")]),t._v(" "),v("li",[t._v("搜索操作系统自身DNS缓存")]),t._v(" "),v("li",[t._v("读取本地HOST文件")]),t._v(" "),v("li",[t._v("以上都查询不到时，浏览器发送一个DNS的系统调用，DNS请求到达宽带运营商服务器。")]),t._v(" "),v("li",[t._v("宽带运营商服务器查询自身缓存")]),t._v(" "),v("li",[t._v("没查询时，发起一个迭代（顶级域--次级域名--...）的DNS解析请求,直到获取到域名对应的IP地址。")])])]),t._v(" "),v("li",[t._v("拿到域名对应的IP并缓存\n"),v("ol",[v("li",[t._v("宽带运营商服务器缓存DNS")]),t._v(" "),v("li",[t._v("结果返回操作系统并缓存DNS")]),t._v(" "),v("li",[t._v("结果返回浏览器并缓存DNS")])])]),t._v(" "),v("li",[t._v("得到目标IP，发起Http“三次握手”，建立起TCP/IP连接\n"),v("ol",[v("li",[t._v("客户端发送一个带有SYN标志的数据包给服务端")]),t._v(" "),v("li",[t._v("服务端回传一个带有SYN/ACK标志的数据包")]),t._v(" "),v("li",[t._v("客户端再回传一个带ACK标志的数据包给服务端")])])]),t._v(" "),v("li",[t._v("连接成功后，浏览器向服务器发起标准Http请求\n"),v("ol",[v("li",[t._v("构建Http请求报文\n"),v("ul",[v("li",[t._v("请求行。\n"),v("ul",[v("li",[t._v("格式：Method Request-URL HTTP-Version CRLF，如：GET index.html HTTP/1.1")]),t._v(" "),v("li",[t._v("Method可选项：GET, POST, PUT, DELETE, OPTIONS, HEAD")])])]),t._v(" "),v("li",[t._v("请求报头\n"),v("ul",[v("li",[t._v("允许客户端向服务器传递请求的附加信息")]),t._v(" "),v("li",[t._v("常见请求报头：Content-Type, Cache-Control,CookieAccept-Encoding,Accept-Language,等")])])]),t._v(" "),v("li",[t._v("请求正文\n"),v("ul",[v("li",[t._v("当使用POST, PUT等方法时，通常需要客户端向服务器传递数据。")])])])])]),t._v(" "),v("li",[t._v("通过TCP协议，发送到服务器指定端口（Http协议默认80端口、Https协议默认443）")])])]),t._v(" "),v("li",[t._v("服务器收到请求后，经过后端处理返回结果。（前后端分离）\n"),v("ul",[v("li",[t._v("响应报文\n"),v("ul",[v("li",[t._v("状态码\n"),v("ul",[v("li",[t._v("1xx：指示信息–表示请求已接收，继续处理。")]),t._v(" "),v("li",[t._v("2xx：成功–表示请求已被成功接收、理解、接受。")]),t._v(" "),v("li",[t._v("3xx：重定向–要完成请求必须进行更进一步的操作。")]),t._v(" "),v("li",[t._v("4xx：客户端错误–请求有语法错误或请求无法实现。")]),t._v(" "),v("li",[t._v("5xx：服务器端错误–服务器未能实现合法的请求。")])])]),t._v(" "),v("li",[t._v("响应报头")]),t._v(" "),v("li",[t._v("响应报文")])])])])]),t._v(" "),v("li",[t._v("返回Html页面等资源，html包含css/js等资源，重复以上http请求")])])]),t._v(" "),v("li",[t._v("渲染层\n"),v("ol",[v("li",[t._v("Chrome浏览器的渲染引擎 Blink边接收边解析 HTML 内容，浏览器自上而下逐行解析 HTML 内容，经过词法分析、语法分析，"),v("code",[t._v("构建 DOM 树")]),t._v("。\n"),v("ul",[v("li",[t._v("当遇到外部 CSS 链接时，不阻塞而继续构建 DOM 树。")]),t._v(" "),v("li",[t._v("当遇到外部 JS 链接时，异步获取资源。JS下载后，V8引擎会解析、编译JS内容。由于 JS 可能会修改 DOM 树和 CSSOM 树而造成回流和重绘，故JS会阻塞DOM树的构建。")])])]),t._v(" "),v("li",[t._v("下载CSS后，主线程会在合适时机解析CSS内容，"),v("code",[t._v("构建 CSSOM 树")]),t._v("。")]),t._v(" "),v("li",[t._v("浏览器结合 DOM 树和 CSSOM 树"),v("code",[t._v("构建 Render 树")]),t._v("。Render树与DOM树不同，渲染树中并没有head、display为none等不必显示的节点。")]),t._v(" "),v("li",[t._v("浏览器渲染\n"),v("ol",[v("li",[t._v("回流：DOM节点中的各个元素都是以盒模型的形式存在，这些都需要浏览器去计算其位置和大小等")]),t._v(" "),v("li",[t._v("重绘：当盒模型的位置,大小以及其他属性，如颜色,字体,等确定下来之后，浏览器便开始绘制内容")])])])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/55704761-927a2b00-5a0f-11e9-83c5-28bd475bdcc1.png",alt:"image"}})]),t._v(" "),v("blockquote",[v("p",[t._v("html内容从上到下解析，浏览器遇到body标签开始显示内容。CSS 不会阻塞 DOM 的解析，JS 会阻止DOM的解析。")])]),t._v(" "),v("blockquote",[v("p",[t._v("当文档加载过程中遇到JS文件，HTML文档会挂起渲染过程，不仅要等到文档中JS文件加载完毕还要等待解析执行完毕，才会继续HTML的渲染过程。")])]),t._v(" "),v("blockquote",[v("p",[t._v("现代浏览器都使用了预加载器，在js挂起DOM解析时，会继续解析后面的html，寻找需要下载的资源。预加载器下载这些资源，以减少JS阻塞带来的影响。")])]),t._v(" "),v("h2",{attrs:{id:"优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),v("ul",[v("li",[t._v("http请求数减少，如：雪碧图、合并CSS/JS文件、缓存资源等（针对http1.1）")]),t._v(" "),v("li",[t._v("http请求资源体积减少，如：启用gzip压缩、图片压缩、减少cookie、按需加载等")]),t._v(" "),v("li",[t._v("css放在head中。由于同时具有 DOM 和 CSSOM 才能构建渲染树，所以HTML 和 CSS 都是阻塞渲染的资源，所以尽量精简CSS也是优化方式之一。")]),t._v(" "),v("li",[t._v("js放在body底部，减少白屏时间。因为js会阻止浏览器解析。")]),t._v(" "),v("li",[t._v("减少回流和重绘制，比如不要一条一条修改DOM样式、使用documentFragment操作DOM等。")])]),t._v(" "),v("h2",{attrs:{id:"衍生问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#衍生问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 衍生问题")]),t._v(" "),v("ol",[v("li",[t._v("响应报文302作用以及缓存相关")]),t._v(" "),v("li",[t._v("js事件循环")])]),t._v(" "),v("h2",{attrs:{id:"参考文章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000006879700",target:"_blank",rel:"noopener noreferrer"}},[t._v("从输入URL到页面加载发生了什么？"),v("OutboundLink")],1)])]),t._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/43369093",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎 - 浏览器输入 URL 后发生了什么"),v("OutboundLink")],1)])]),t._v(" "),v("li",[v("p",[v("a",{attrs:{href:"http://taligarsiel.com/Projects/howbrowserswork1.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("How browsers work"),v("OutboundLink")],1)])]),t._v(" "),v("li",[v("p",[v("a",{attrs:{href:"http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rendering: repaint, reflow/relayout, restyle"),v("OutboundLink")],1)])])])])},[],!1,null,null,null);l.options.__file="http-url.md";_.default=l.exports}}]);