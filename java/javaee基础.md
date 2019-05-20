@[TOC](JavaEE基础)
## Servlet接口中有哪些方法及Servlet生命周期探秘
Servlet接口定义了5个方法，其中前三个方法与Servlet生命周期相关：

 - void init(ServletConfig config) throws ServletException
 - void service(ServletRequest req, ServletResponse resp) throws
   ServletException, java.io.IOException
 - void destory()
 - java.lang.String getServletInfo()
 - ServletConfig getServletConfig()
 
**生命周期：** Web容器加载Servlet并将其实例化后，Servlet生命周期开始，容器运行其init()方法进行Servlet的初始化；请求到达时调用Servlet的service()方法，service()方法会根据需要调用与请求对应的doGet或doPost等方法；当服务器关闭或项目被卸载时服务器会将Servlet实例销毁，此时会调用Servlet的destroy()方法。init方法和destroy方法只会执行一次，service方法客户端每次请求Servlet都会执行。Servlet中有时会用到一些需要初始化与销毁的资源，因此可以把初始化资源的代码放入init方法中，销毁资源的代码放入destroy方法中，这样就不需要每次处理客户端的请求都要初始化与销毁资源。
## get和post请求的区别
①get请求用来从服务器上获得资源，而post是用来向服务器提交数据；
GET方式提交表单的典型应用是搜索引擎。GET方式就是被设计为查询用的。

②get将表单中数据按照name=value的形式，添加到action 所指向的URL 后面，并且两者使用"?"连接，而各个变量之间使用"&"连接；post是将表单中的数据放在HTTP协议的请求头或消息体中，传递到action所指向URL；

③get传输的数据要受到URL长度限制（最大长度是 2048 个字符）；而post可以传输大量的数据，上传文件通常要使用post方式；

④使用get时参数会显示在地址栏上，如果这些数据不是敏感数据，那么可以使用get；对于敏感数据还是应用使用post；
## 转发(Forward)和重定向(Redirect)的区别
转发是服务器行为，重定向是客户端行为。
**转发（Forward）** 通过RequestDispatcher对象的forward（HttpServletRequest request,HttpServletResponse response）方法实现的。RequestDispatcher可以通过HttpServletRequest 的getRequestDispatcher()方法获得。

```java
 request.getRequestDispatcher("index.jsp").forward(request, response);
```
**重定向（Redirect）** 是利用服务器返回的状态码来实现的。客户端浏览器请求服务器的时候，服务器会返回一个状态码。服务器通过 HttpServletResponse 的 setStatus(int status) 方法设置状态码。如果服务器返回301或者302，则浏览器会到新的网址重新请求该资源。

```java
        response.setStatus(302);
        response.setHeader("location", "https://localhost:8080/login");
```

 - 从地址栏显示来说
   forward是服务器请求资源,服务器直接访问目标地址的URL,把那个URL的响应内容读取过来,然后把这些内容再发给浏览器.浏览器根本不知道服务器发送的内容从哪里来的,所以它的地址栏还是原来的地址.
   redirect是服务端根据逻辑,发送一个状态码,告诉浏览器重新去请求那个地址.所以地址栏显示的是新的URL.
 - 从数据共享来说 forward:转发页面和转发到的页面可以共享request里面的数据. redirect:不能共享数据.
 - 从运用地方来说 forward:一般用于用户登陆的时候,根据角色转发到相应的模块.
   redirect:一般用于用户注销登陆时返回主页面和跳转到其它的网站等
 - 从效率来说 forward:高. redirect:低.

## JSP和Servlet是什么关系
Servlet是一个特殊的Java程序，它运行于服务器的JVM中，能够依靠服务器的支持向浏览器提供显示内容。
JSP本质上是Servlet的一种简易形式，JSP会被服务器处理成一个类似于Servlet的Java程序，可以简化页面内容的生成。
Servlet和JSP最主要的不同点在于，Servlet的应用逻辑是在Java文件中，并且完全从表示层中的HTML分离开来。而JSP的情况是Java和HTML可以组合成一个扩展名为.jsp的文件.
JSP侧重于视图，Servlet更侧重于控制逻辑.
## JSP有哪些内置对象、作用分别是什么
JSP有9个内置对象：

request：封装客户端的请求，其中包含来自GET或POST请求的参数；
response：封装服务器对客户端的响应；
pageContext：通过该对象可以获取其他对象；
session：封装用户会话的对象；
application：封装服务器运行环境的对象；
out：输出服务器响应的输出流对象；
config：Web应用的配置对象；
page：JSP页面本身（相当于Java程序中的this）；
exception：封装页面抛出异常的对象。


**Request对象的主要方法有哪些:**

setAttribute(String name,Object)：设置名字为name的request 的参数值
getAttribute(String name)：返回由name指定的属性值
getAttributeNames()：返回request 对象所有属性的名字集合，结果是一个枚举的实例
getCookies()：返回客户端的所有 Cookie 对象，结果是一个Cookie 数组
getCharacterEncoding() ：返回请求中的字符编码方式 = getContentLength() ：返回请求的 Body的长度
getHeader(String name) ：获得HTTP协议定义的文件头信息
getHeaders(String name) ：返回指定名字的request Header 的所有值，结果是一个枚举的实例
getHeaderNames() ：返回所以request Header 的名字，结果是一个枚举的实例
getInputStream() ：返回请求的输入流，用于获得请求中的数据
getMethod() ：获得客户端向服务器端传送数据的方法
getParameter(String name) ：获得客户端传送给服务器端的有 name指定的参数值
getParameterNames() ：获得客户端传送给服务器端的所有参数的名字，结果是一个枚举的实例
getParameterValues(String name)：获得有name指定的参数的所有值
getProtocol()：获取客户端向服务器端传送数据所依据的协议名称
getQueryString() ：获得查询字符串
getRequestURI() ：获取发出请求字符串的客户端地址
getRemoteAddr()：获取客户端的 IP 地址
getRemoteHost() ：获取客户端的名字
getSession([Boolean create]) ：返回和请求相关 Session
getServerName() ：获取服务器的名字
getServletPath()：获取客户端所请求的脚本文件的路径
getServerPort()：获取服务器的端口号
removeAttribute(String name)：删除请求中的一个属性
## request.getAttribute()和 request.getParameter()有何区别


getParameter()是获取 POST/GET 传递的参数值；

getAttribute()是获取对象容器中的数据值；

getParameter 返回的是String,用于读取提交的表单中的值;（获取之后会根据实际需要转换为自己需要的相应类型，比如整型，日期类型啊等等）

getAttribute 返回的是Object，需进行转换,可用setAttribute 设置成任意对象，使用很灵活，可随时用
## Cookie和Session的的区别
由于HTTP协议是无状态的协议，所以服务端需要记录用户的状态时，就需要用某种机制来识具体的用户，这个机制就是Session。
Cookie是服务器给客户端的，每次HTTP请求的时候，客户端都会发送相应的Cookie信息到服务端。服务端根据 Cookie 里面记录的Session ID就知道你是谁了。Cookie也用来记录用户的一些信息，比如登陆的账号信息。
Session是保存在服务端的，有一个唯一标识。跟踪用户，用来保存用户会话。

## Filter
Servlet中的过滤器Filter是实现了javax.servlet.Filter接口的服务器端程序，主要的用途是设置字符集、控制权限、控制转向、做一些业务逻辑判断等。其工作原理是，只要你在web.xml文件配置好要拦截的客户端请求，它都会帮你拦截到请求.
它是随你的web应用启动而启动的，只初始化一次，以后就可以拦截相关请求，只有当你的web应用停止或重新部署的时候才销毁。
Filter可以认为是Servlet的一种“加强版”，它主要用于对用户请求进行预处理，也可以对HttpServletResponse进行后处理，是个典型的处理链。


流程是：Filter对用户请求进行预处理，接着将请求交给Servlet进行处理并生成响应，最后Filter再对服务器响应进行后处理。

三个方法:
void init(FilterConfig config):用于完成Filter的初始化。
void destory():用于Filter销毁前，完成某些资源的回收。
void doFilter(ServletRequest request,ServletResponse response,FilterChain chain):实现过滤功能，该方法就是对每个请求及响应增加的额外处理。该方法可以实现对用户请求进行预处理(ServletRequest request)，也可实现对服务器响应进行后处理(ServletResponse response)—它们的分界线为是否调用了chain.doFilter(),执行该方法之前，即对用户请求进行预处理；执行该方法之后，即对服务器响应进行后处理。