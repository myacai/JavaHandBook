@[TOC](Java并发)
书籍推荐：
Java并发编程实战
Java并发编程的艺术

## 何为进程线程，有什么区别
### 进程状态
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/进程状态.PNG" width=""/></br>

![Alt](https://github.com/myacai/JavaHandBook/blob/master/images/java/进程状态.PNG#pic_center)
### 线程状态
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/线程基本状态.PNG" width=""/></br>

进程：进程是进程实体的运行过程，是系统进行资源分配和调度的一个独立单位（具有动态、并发、独立、异步的特性，以及就绪、执行、阻塞3种状态）；引入进程是为了使多个程序可以并发的执行，以提高系统的资源利用率和吞吐量。

线程：是比进程更小的可独立运行的基本单位，可以看做是轻量级的进程（具有轻型实体，独立调度分派单位，可并发执行，共享进程资源等属性）；引入目的是为了减少程序在并发执行过程中的开销，使OS的并发效率更高。

## 并发并行

并发和并行是两个非常容易被混淆的概念。它们都可以表示两个或者多个任务一起执行，但是偏重点有些不同。并发偏重于多个任务交替执行，而多个任务之间有可能还是串行的。而并行是真正意义上的“同时执行”。

多线程在单核CPU的话是顺序执行，也就是交替运行（并发）。多核CPU的话，因为每个CPU有自己的运算器，所以在多个CPU中可以同时运行（并行）。



## 使用多线程常见的四种方式
继承Thread类
实现Runnable接口
实现Callable接口
使用线程池

推荐使用线程池创建线程
### 使用线程池创建线程的好处
第一：降低资源消耗。通过重复利用已创建的线程降低线程创建和销毁造成的消耗。
第二：提高响应速度。当任务到达时，任务可以不需要等到线程创建就能立即执行。
第三：提高线程的可管理性。线程是稀缺资源，如果无限制地创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一分配、调优和监控。但是，要做到合理利用线程池。
### Callable和Runnable的区别
Runnable 接口不会返回结果但是 Callable 接口可以返回结果。


## java内存模型
在 JDK1.2 之前，Java的内存模型实现总是从主存（即共享内存）读取变量

<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/内存模型2.jpg" width=""/></br>
当前的 Java 内存模型下，线程可以把变量保存本地内存（比如机器的寄存器）中，而不是直接在主存中进行读写。
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/内存模型.jpg" width=""/></br>
## volatile
volatile是轻量级的synchronized，它在多处理器开发中保证了共享变量的“可见性”。但是不保证原子性，因为volatile修饰的变量，在多线程情况下，一个操作可能会被其他线程干扰。

### 底层原理
volatile修饰的变量,
在读操作的时候，会强制从主存中读取。
在写操作的时候，命令转为汇编代码时，会有Lock前缀的指令，例如（lock addl $0×0,(%esp);）
Lock前缀的指令在多核处理器下会引发了两件事情。
1）将当前处理器缓存行的数据写回到系统内存。
2）这个写回内存的操作会使在其他CPU里缓存了该内存地址的数据无效。

（来自java并发编程艺术）

## synchronized

## Lock锁

## 线程池

## Atomic原子类

## AQS
