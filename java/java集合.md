

@[TOC](Java集合)
书籍推荐：
Java核心技术卷一
## Arraylist 与 LinkedList 异同
**线程安全**：Arraylist 与 LinkedList都不是线程安全的
**底层数据结构**： Arraylist 底层使用的是Object数组；LinkedList 底层使用的是双向链表数据结构（JDK1.6之前为循环链表，JDK1.7取消了循环。注意双向链表和双向循环链表的区别：）
 **插入和删除是否受元素位置的影响**：ArrayList 采用数组存储,插入和删除元素时间复杂度就为 O(n),LinkedList 采用链表存储，所以插入，删除元素时间复杂度不受元素位置的影响，都是近似 O（1）。
 **是否支持快速随机访问**:LinkedList 不支持高效的随机元素访问，而 ArrayList 支持。ArrayList 实现了RandomAccess接口。
 **内存空间占用**：ArrayList的空 间浪费主要体现在在list列表的结尾会预留一定的容量空间，而LinkedList的空间花费则体现在它的每一个元素都需要消耗比ArrayList更多的空间（因为要存放直接后继和直接前驱以及数据）。
## ArrayList 与 Vector 区别
ArrayList 不是线程安全的，Vector是线程安全的，所有方法都是同步的。但会消耗性能。
## HashMap的底层实现
### JDK1.8之前
HashMap 底层是 数组和链表 结合在一起使用也就是 链表散列。HashMap得到key的hashcode,经过扰动函数（hash 方法）得到hash值，然后通过(n-1) & hash 得到当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。
使用 hash 方法也就是扰动函数是为了防止一些实现比较差的 hashCode() 方法 换句话说使用扰动函数之后可以减少碰撞。
 “拉链法” 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。
 <img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/HashMap7.png" width=""/></br>
### JDK1.8之后
相比于之前的版本， JDK1.8之后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为8）时，将链表转化为红黑树，以减少搜索时间。

但是就我了解，HashMap在数组长度小于64时，链表长度大于8，会选择去扩容，而不是将链表转化为红黑树（待了解）
 <img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/HashMap8.jpg" width=""/></br>
 
## HashMap 和 Hashtable 的区别
**线程是否安全：** HashMap 不是线程安全的，但是Hashtable 是线程安全的（但是线程安全还是推荐ConcurrentHashMap ）

**对Null key 和Null value的支持：** HashMap 中，null 可以作为键，这样的键只有一个，可以有一个或多个键所对应的值为 null。。但是在 HashTable 中 put 进的键值只要有一个 null（键值都不能为null），直接抛出 NullPointerException。
**初始容量大小和每次扩充容量大小的不同 ：** ①创建时如果不指定容量初始值，Hashtable 默认的初始大小为11，之后每次扩充，容量变为原来的2n+1。HashMap 默认的初始化大小为16。之后每次扩充，容量变为原来的2倍。②创建时如果给定了容量初始值，那么 Hashtable 会直接使用你给定的大小，而 HashMap 会将其扩充为2的幂次方大小
**底层数据结构：** JDK1.8之后HashMap 链表长度大于阈值（默认为8）时，将链表转化为红黑树，以减少搜索时间。
## HashSet 和 HashMap 区别
HashSet底层使用HashMap
## ConcurrentHashMap线程安全的具体实现方式/底层具体实现
JDK1.7
 <img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/concurrenthashMap17.jpg" width=""/></br>
  <img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/concurrenthashMap171.jpg" width=""/></br>
JDK1.8
JDK1.8 ConcurrentHashMap取消了Segment分段锁，采用CAS和synchronized来保证并发安全。数据结构跟HashMap1.8的结构类似，数组+链表/红黑二叉树。
synchronized只锁定当前链表或红黑二叉树的首节点，这样只要hash不冲突，就不会产生并发，效率又提升N倍。
 <img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/concurrenthashMap18.jpg" width=""/></br>
## ConcurrentHashMap 和 Hashtable 的区别
**底层数据结构：** JDK1.7的 ConcurrentHashMap 底层采用 分段的数组+链表 实现，JDK1.8 采用的数据结构跟HashMap1.8的结构一样，数组+链表/红黑二叉树。
**实现线程安全的方式:** 在JDK1.7的时候，ConcurrentHashMap（分段锁） 对整个桶数组进行了分割分段(Segment)，每一把锁只锁容器其中一部分数据，多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。 到了 JDK1.8 的时候已经摒弃了Segment的概念，而是直接用 Node 数组+链表+红黑树的数据结构来实现，并发控制使用 synchronized 和 CAS 来操作。
② Hashtable: 对整个桶进行加锁，get，put也会产生冲突，竞争越激烈效率越低。
## HashMap 的长度为什么是2的幂次方
数组下标的计算方法是“ (n - 1) & hash ”。（n代表数组长度）。取余(%)操作中如果除数是2的幂次则等价于与其除数减一的与(&)操作（也就是说hash%length==hash&(length-1)的前提是 length 是2的 n 次方；）。” 并且 采用二进制位操作 &，相对于%能够提高运算效率，这就解释了 HashMap 的长度为什么是2的幂次方。
## HashMap 多线程操作导致死循环问题
在多线程下，进行 put 操作会导致 HashMap 死循环，原因在于 HashMap 的扩容 resize()方法。由于扩容是新建一个数组，复制原数据到数组。由于数组下标挂有链表，所以需要复制链表，但是多线程操作有可能导致环形链表。

jdk1.8已经解决了死循环的问题。
## 集合框架底层数据结构总结
 **List**
 Arraylist
 Vector
 LinkedList
  **Set**
HashSet（无序，唯一）
LinkedHashSet
TreeSet（有序，唯一）
**Map**
HashMap
Hashtable
TreeMap
ConcurrentHashMap 