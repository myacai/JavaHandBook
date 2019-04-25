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
当前的 Java 内存模型下，线程可以把变量保存本地内存（比如机器的寄存器）中，而不是直接在主存中进行读写。</br>
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/内存模型1.jpg" width=""/></br>
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
synchronized是重量级锁，可重入锁，可以保证可见性，原子性。JDK1.6对锁的实现引入了大量的优化，如自旋锁、适应性自旋锁、锁消除、锁粗化、偏向锁、轻量级锁等技术来减少锁操作的开销。
### 锁升级
（java并发编程艺术）在Java SE 1.6中，锁一共有4种状态，级别从低到高依次是：无锁状态、偏向锁状态、轻量级锁状态和重量级锁状态，这几个状态会随着竞争情况逐渐升级。锁可以升级但不能降级，意味着偏向锁升级成轻量级锁后不能降级成偏向锁。

对于普通同步方法，锁是当前实例对象。
对于静态同步方法，锁是当前类的Class对象。
对于同步方法块，锁是Synchonized括号里配置的对象

## 悲观锁乐观锁（CAS）
对于乐观派而言，他们认为事情总会往好的方向发展，总是认为坏的情况发生的概率特别小，可以无所顾忌地做事，但对于悲观派而已，他们总会认为发展事态如果不及时控制，以后就无法挽回了。

**乐观锁适用于多读的应用类型，这样可以提高吞吐量，所以一般多写的场景下用悲观锁就比较合适。**
无锁则总是假设对共享资源的访问没有冲突，线程可以不停执行，无需加锁，无需等待，一旦发现冲突，无锁策略则采用一种称为CAS的技术来保证线程执行的安全性，这项CAS技术就是无锁策略实现的关键。

**CAS:当线程写数据的时候，先对内存中要操作的数据保留一份旧值，真正写的时候，比较当前的值是否和旧值相同，如果相同，则进行写操作。如果不同，说明在此期间值已经被修改过，则重新尝试。**

### CAS会出现的问题
**ABA问题**
原值为A。修改成B之后，再次修改成A，那么CAS就会误以为值没有被修改过。
**办法（版本号机制）**
增加一个版本字段verdion

**循环等待时间太长问题**

## Lock锁
JDK1.5之后并发包中新增了Lock接口以及相关实现类来实现锁功能。
Lock接口的实现类： 
ReentrantLock
ReentrantReadWriteLock
### ReentrantLock
ReentrantLock是可重入锁，等待可中断，可实现公平锁，可实现选择性通知
1.等待可中断
使用lock.lockInterruptibly()来实现等待的线程放弃等待。
2.可实现公平锁
ReentrantLock(boolean fair)构造函数，创建一个特定锁类型（公平锁/非公平锁）的ReentrantLock的实例
3.可实现选择性通知
synchronized关键字与wait()和notify/notifyAll()方法相结合可以实现等待/通知机制。ReentrantLock借助于Condition接口与newCondition() 方法
## 线程池

## Atomic原子类
即使是在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程干扰。
原子类都存放在java.util.concurrent.atomic

基本类型
使用原子的方式更新基本类型，Atomic包提供了以下3个类
AtomicBoolean：原子更新布尔类型。
AtomicInteger：原子更新整型。
AtomicLong：原子更新长整型。

数组类型
通过原子的方式更新数组里的某个元素，Atomic包提供了以下4个类
·AtomicIntegerArray：原子更新整型数组里的元素。
·AtomicLongArray：原子更新长整型数组里的元素。
·AtomicReferenceArray：原子更新引用类型数组里的元素。
AtomicIntegerArray类主要是提供原子的方式更新数组里的整


引用类型
原子更新基本类型的AtomicInteger，只能更新一个变量，如果要原子更新多个变量，就需要使用这个原子更新引用类型提供的类。Atomic包提供了以下3个类。
·AtomicReference：原子更新引用类型。
·AtomicReferenceFieldUpdater：原子更新引用类型里的字段。
·AtomicMarkableReference：原子更新带有标记位的引用类型。可以原子更新一个布尔类型的标记位和引用类型。

对象的属性修改类型
如果需原子地更新某个类里的某个字段时，就需要使用原子更新字段类，Atomic包提供
了以下3个类进行原子字段更新。
·AtomicIntegerFieldUpdater：原子更新整型的字段的更新器。
·AtomicLongFieldUpdater：原子更新长整型字段的更新器。
AtomicStampedReference：原子更新带有版本号的引用类型。

### 举例AtomicInteger的用法

```
public final int get() //获取当前的值
public final int getAndSet(int newValue)//获取当前的值，并设置新的值
public final int getAndIncrement()//获取当前的值，并自增
public final int getAndDecrement() //获取当前的值，并自减
public final int getAndAdd(int delta) //获取当前的值，并加上预期的值
boolean compareAndSet(int expect, int update) //如果输入的数值等于预期值，则以原子方式将该值设置为输入值（update）
public final void lazySet(int newValue)//最终设置为newValue,使用 lazySet 设置之后可能导致其他线程在之后的一小段时间内还是可以读到旧的值。
```
示例代码

```
import java.util.concurrent.atomic.AtomicInteger;
public class AtomicIntegerTest{
	 static AtomicInteger ai = new AtomicInteger(1);
	 public static void main(String[] args) 	{		  
	 	 System.out.println(ai.getAndIncrement());
		 System.out.println(ai.get());
	}
}
```
输出结果如下

```
1
2
```

### 原子类的原理

```
    // setup to use Unsafe.compareAndSwapInt for updates（更新操作时提供“比较并替换”的作用）
    private static final Unsafe unsafe = Unsafe.getUnsafe();
    private static final long valueOffset;

    static {
        try {
            valueOffset = unsafe.objectFieldOffset
                (AtomicInteger.class.getDeclaredField("value"));
        } catch (Exception ex) { throw new Error(ex); }
    }

    private volatile int value;
```
主要利用了CAS+volatile+native方法来保证原子操作，
unsafe.objectFieldOffset来获取原来值的内存地址。
## AQS

## TreadLoclk