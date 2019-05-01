
@[TOC](Java并发常见问题)

## 上下文切换
当前任务执行一个时间片后会切换到下一个任务。但是，在切换前会保存上一个任务的状态，以便下次切换回这个任务时，可以再加载这个任务的状态。所以任务从保存到再加载的过程就是一次上下文切换。
### 如何减少上下文切换
减少上下文切换的方法有无锁并发编程、CAS算法、使用最少线程和使用协程

## 死锁
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/死锁产生条件.PNG" width=""/></br>
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/避免死锁.PNG" width=""/></br>
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/避免死锁2.PNG" width=""/></br>

## 线程的基本状态
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/线程基本状态.PNG" width=""/></br>

## sleep和wait的区别
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/sleep和wait的区别.PNG" width=""/></br>

## 线程通信
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/共享内存.PNG" width=""/></br>
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/消息传递.PNG" width=""/></br>