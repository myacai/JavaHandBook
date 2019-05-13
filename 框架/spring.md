@[TOC](spring)
自己spring的笔记
链接：https://pan.baidu.com/s/1PPyqYT1dNP82TmzNfW7aEA 
提取码：e2wn 

## IOC深度学习
Spring IOC的初始化过程： 
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/ioc.png" width=""/></br>

IOC源码学习
https://yikun.github.io/2015/05/29/Spring-IOC%E6%A0%B8%E5%BF%83%E6%BA%90%E7%A0%81%E5%AD%A6%E4%B9%A0/


https://javadoop.com/post/spring-ioc

## AOP
JDK动态代理
CGLIB静态代理
整合AspectJ

**切面（Aspect）** 切面是切点和通知的集合，一般单独作为一个类。

**切点（Pointcut）** 切面中的方法，一般和通知一起使用，一起组成了切面。

**通知（Advice） ：** 定义了Pointcut里面定义的程序点具体要做的操作，通过before,after,around来区别是在每个Join Point 之前，之后还是代替执行的代码。

**连接点（Joinpoint）：**
比如：方法调用、方法执行、字段设置/获取、异常处理执行、类初始化、甚至是 for 循环中的某个点
理论上, 程序执行过程中的任何时点都可以作为作为织入点, 而所有这些执行时点都是 Joint point
但 Spring AOP 目前仅支持方法执行 (method execution)也可以这样理解，连接点就是你准备在系统中执行切点和切入通知的地方（一般是一个方法，一个字段）

**引入（Introduction）**
引用允许我们向现有的类添加新的方法或者属性

**织入（Weaving）**
组装方面来创建一个被通知对象。这可以在编译时完成（例如使用AspectJ编译器），也可以在运行时完成。Spring和其他纯Java AOP框架一样，在运行时完成织入。
https://blog.csdn.net/fighterandknight/article/details/51209822
