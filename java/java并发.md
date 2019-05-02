
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
synchronized关键字解决的是多个线程之间访问资源的同步性，保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。synchronized是重量级锁，可重入锁，可以保证可见性，原子性。JDK1.6对锁的实现引入了大量的优化，如自旋锁、适应性自旋锁、锁消除、锁粗化、偏向锁、轻量级锁等技术来减少锁操作的开销。
### 锁升级
（java并发编程艺术）在Java SE 1.6中，锁一共有4种状态，级别从低到高依次是：无锁状态、偏向锁状态、轻量级锁状态和重量级锁状态，这几个状态会随着竞争情况逐渐升级。锁可以升级但不能降级，意味着偏向锁升级成轻量级锁后不能降级成偏向锁。（详细在java并发编程艺术第二章第二节）

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
原值为A。修改成B之后，再次修改成A，那么CAS就会误以为值没有被修改过。</br>
**办法（版本号机制）**
增加一个版本字段version,数据修改之后,version加一，读数据的时候，也会读取version的值，提交更新时，version值相等时才能更新。
</br>
**循环等待时间太长问题**
</br>
**只能保证一个共享变量的原子操作**
</br>
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
队列同步器AbstractQueuedSynchronizer，是用来构建锁或者其他同步组
件的基础框架，它使用了一个int成员变量表示同步状态，通过内置的FIFO队列来完成资源获取线程的排队工作，并发包的作者（Doug Lea）期望它能够成为实现大部分同步需求的基础。
同步器的设计是基于模板方法模式的，也就是说，使用者需要继承同步器并重写指定的方法，随后将同步器组合在自定义同步组件的实现中，并调用同步器提供的模板方法，而这些模板方法将会调用使用者重写的方法。
</br>
重写同步器指定的方法时，需要使用同步器提供的如下3个方法来访问或修改同步状态。

```
getState()：获取当前同步状态。
setState(int newState)：设置当前同步状态。
compareAndSetState(int expect,int update)：使用CAS设置当前状态，该方法能够保证状态设置的原子性。
```
**自定义同步器时需要重写下面几个AQS提供的模板方法：**

```
isHeldExclusively()//该线程是否正在独占资源。只有用到condition才需要去实现它。
tryAcquire(int)//独占方式。尝试获取资源，成功则返回true，失败则返回false。
tryRelease(int)//独占方式。尝试释放资源，成功则返回true，失败则返回false。
tryAcquireShared(int)//共享方式。尝试获取资源。负数表示失败；0表示成功，但没有剩余可用资源；正数表示成功，且有剩余资源。
tryReleaseShared(int)//共享方式。尝试释放资源，成功则返回true，失败则返回false。
```
同步器提供的模板方法基本上分为3类：独占式获取与释放同步状态、共享式获取与释放
同步状态和查询同步队列中的等待线程情况。

**实例**

```

class Mutex implements Lock {
	// 静态内部类，自定义同步器
	private static class Sync extends AbstractQueuedSynchronizer {
		// 是否处于占用状态
		protected boolean isHeldExclusively() {
			return getState() == 1;
		}
		// 当状态为0的时候获取锁
		public boolean tryAcquire(int acquires) {
			if (compareAndSetState(0, 1)) {
            	setExclusiveOwnerThread(Thread.currentThread());
			return true;}return false;
		}
		// 释放锁，将状态设置为0
		protected boolean tryRelease(int releases) {
			if (getState() == 0) throw newIllegalMonitorStateException();
			setExclusiveOwnerThread(null);
			setState(0);return true;
		}
		// 返回一个Condition，每个condition都包含了一个condition队列
		Condition newCondition() { return new ConditionObject(); }
	}
	// 仅需要将操作代理到Sync上即可
	private final Sync sync = new Sync();
	public void lock() { sync.acquire(1); }
	public boolean tryLock() { return sync.tryAcquire(1); }
	public void unlock() { sync.release(1); }
	public Condition newCondition() { return sync.newCondition(); }
	public boolean isLocked() { return sync.isHeldExclusively(); }
	public boolean hasQueuedThreads() { return sync.hasQueuedThreads(); }
	public void lockInterruptibly() throws InterruptedException {sync.acquireInterruptibly(1);}
	public boolean tryLock(long timeout, TimeUnit unit) throws InterruptedException {return sync.tryAcquireNanos(1, unit.toNanos(timeout));}
}

```
上述示例中，独占锁Mutex是一个自定义同步组件，它在同一时刻只允许一个线程占有锁。Mutex中定义了一个静态内部类，该内部类继承了同步器并实现了独占式获取和释放同步状态。在tryAcquire(int acquires)方法中，如果经过CAS设置成功（同步状态设置为1），则代表获取了同步状态，而在tryRelease(int releases)方法中只是将同步状态重置为0。用户使用Mutex时并不会直接和内部同步器的实现打交道，而是调用Mutex提供的方法，在Mutex的实现中，以获取锁的lock()方法为例，只需要在方法实现中调用同步器的模板方法acquire(int args)即可，当前线程调用该方法获取同步状态失败后会被加入到同步队列中等待，这样就大大降低了实现一个可靠自定义同步组件的门槛。
## TreadLocal
ThreadLocal类主要解决的就是让每个线程绑定自己的值。
如果你创建了一个ThreadLocal变量，那么访问这个变量的每个线程都会有这个变量的本地副本，这也是ThreadLocal变量名的由来。他们可以使用 get（） 和 set（） 方法来获取默认值或将其值更改为当前线程所存的副本的值，从而避免了线程安全问题。
### ThreadLocal示例

```java
import java.text.SimpleDateFormat;
import java.util.Random;

public class ThreadLocalExample implements Runnable{

     // SimpleDateFormat 不是线程安全的，所以每个线程都要有自己独立的副本
    private static final ThreadLocal<SimpleDateFormat> formatter = ThreadLocal.withInitial(() -> new SimpleDateFormat("yyyyMMdd HHmm"));

    public static void main(String[] args) throws InterruptedException {
        ThreadLocalExample obj = new ThreadLocalExample();
        for(int i=0 ; i<10; i++){
            Thread t = new Thread(obj, ""+i);
            Thread.sleep(new Random().nextInt(1000));
            t.start();
        }
    }

    @Override
    public void run() {
        System.out.println("Thread Name= "+Thread.currentThread().getName()+" default Formatter = "+formatter.get().toPattern());
        try {
            Thread.sleep(new Random().nextInt(1000));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        //formatter pattern is changed here by thread, but it won't reflect to other threads
        formatter.set(new SimpleDateFormat());

        System.out.println("Thread Name= "+Thread.currentThread().getName()+" formatter = "+formatter.get().toPattern());
    }

}

```

Output:

```
Thread Name= 0 default Formatter = yyyyMMdd HHmm
Thread Name= 0 formatter = yy-M-d ah:mm
Thread Name= 1 default Formatter = yyyyMMdd HHmm
Thread Name= 2 default Formatter = yyyyMMdd HHmm
Thread Name= 1 formatter = yy-M-d ah:mm
Thread Name= 3 default Formatter = yyyyMMdd HHmm
Thread Name= 2 formatter = yy-M-d ah:mm
Thread Name= 4 default Formatter = yyyyMMdd HHmm
Thread Name= 3 formatter = yy-M-d ah:mm
Thread Name= 4 formatter = yy-M-d ah:mm
Thread Name= 5 default Formatter = yyyyMMdd HHmm
Thread Name= 5 formatter = yy-M-d ah:mm
Thread Name= 6 default Formatter = yyyyMMdd HHmm
Thread Name= 6 formatter = yy-M-d ah:mm
Thread Name= 7 default Formatter = yyyyMMdd HHmm
Thread Name= 7 formatter = yy-M-d ah:mm
Thread Name= 8 default Formatter = yyyyMMdd HHmm
Thread Name= 9 default Formatter = yyyyMMdd HHmm
Thread Name= 8 formatter = yy-M-d ah:mm
Thread Name= 9 formatter = yy-M-d ah:mm
```

从输出中可以看出，Thread-0已经改变了formatter的值，但仍然是thread-2默认格式化程序与初始化值相同，其他线程也一样。

上面有一段代码用到了创建 `ThreadLocal` 变量的那段代码用到了 Java8 的知识，它等于下面这段代码，如果你写了下面这段代码的话，IDEA会提示你转换为Java8的格式(IDEA真的不错！)。因为ThreadLocal类在Java 8中扩展，使用一个新的方法`withInitial()`，将Supplier功能接口作为参数。

```java
 private static final ThreadLocal<SimpleDateFormat> formatter = new ThreadLocal<SimpleDateFormat>(){
        @Override
        protected SimpleDateFormat initialValue()
        {
            return new SimpleDateFormat("yyyyMMdd HHmm");
        }
    };
```

### ThreadLocal原理

从 `Thread`类源代码入手。

```java
public class Thread implements Runnable {
 ......
//与此线程有关的ThreadLocal值。由ThreadLocal类维护
ThreadLocal.ThreadLocalMap threadLocals = null;

//与此线程有关的InheritableThreadLocal值。由InheritableThreadLocal类维护
ThreadLocal.ThreadLocalMap inheritableThreadLocals = null;
 ......
}
```

从上面`Thread`类 源代码可以看出`Thread` 类中有一个 `threadLocals` 和 一个  `inheritableThreadLocals` 变量，它们都是 `ThreadLocalMap`  类型的变量,我们可以把 `ThreadLocalMap`  理解为`ThreadLocal` 类实现的定制化的 `HashMap`。默认情况下这两个变量都是null，只有当前线程调用 `ThreadLocal` 类的 `set`或`get`方法时才创建它们，实际上调用这两个方法的时候，我们调用的是`ThreadLocalMap`类对应的 `get()`、`set() `方法。

`ThreadLocal`类的`set()`方法

```java
    public void set(T value) {
        Thread t = Thread.currentThread();
        ThreadLocalMap map = getMap(t);
        if (map != null)
            map.set(this, value);
        else
            createMap(t, value);
    }
    ThreadLocalMap getMap(Thread t) {
        return t.threadLocals;
    }
```

通过上面这些内容，我们足以通过猜测得出结论：**最终的变量是放在了当前线程的 `ThreadLocalMap` 中，并不是存在 `ThreadLocal` 上，ThreadLocal 可以理解为只是ThreadLocalMap的封装，传递了变量值。**

**每个`Thread`中都具备一个`ThreadLocalMap`，而`ThreadLocalMap`可以存储以`ThreadLocal`为key的键值对。这里解释了为什么每个线程访问同一个`ThreadLocal`，得到的确是不同的数值。另外，`ThreadLocal` 是 map结构是为了让每个线程可以关联多个 `ThreadLocal`变量。**

`ThreadLocalMap`是`ThreadLocal`的静态内部类。

<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/ThreadLocal.jpg" width=""/></br>
### ThreadLocal 内存泄露问题

`ThreadLocalMap` 中使用的 key 为 `ThreadLocal` 的弱引用,而 value 是强引用。所以，如果 `ThreadLocal` 没有被外部强引用的情况下，在垃圾回收的时候会 key 会被清理掉，而 value 不会被清理掉。这样一来，`ThreadLocalMap` 中就会出现key为null的Entry。假如我们不做任何措施的话，value 永远无法被GC 回收，这个时候就可能会产生内存泄露。ThreadLocalMap实现中已经考虑了这种情况，在调用 `set()`、`get()`、`remove()` 方法的时候，会清理掉 key 为 null 的记录。使用完 `ThreadLocal`方法后 最好手动调用`remove()`方法

```java
      static class Entry extends WeakReference<ThreadLocal<?>> {
            /** The value associated with this ThreadLocal. */
            Object value;

            Entry(ThreadLocal<?> k, Object v) {
                super(k);
                value = v;
            }
        }
```

