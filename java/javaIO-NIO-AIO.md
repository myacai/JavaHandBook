

@[TOC](JavaIO)
书籍推荐：
Java核心技术卷一

## IO流
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/io.jpg" width=""/></br>

IO流的分类：
按照流的流向分，可以分为输入流和输出流；
按照操作单元划分，可以划分为字节流和字符流；
按照流的角色划分为节点流和处理流。

节点流：可以从或向一个特定的地方（节点）读写数据。如FileReader
处理流：是对一个已存在的流的连接和封装，通过所封装的流的功能调用实现数据读写。如BufferedReader。处理流的构造方法总是要带一个其他的流对象做参数。一个流对象经过其他流的多次包装，称为流的链接。

## BIO编程
 网络编程的基本模型是C/S模型，即两个进程间的通信。

    服务端提供IP和监听端口，客户端通过连接操作想服务端监听的地址发起连接请求，通过三次握手连接，如果连接成功建立，双方就可以通过套接字进行通信。

    传统的同步阻塞模型开发中，ServerSocket负责绑定IP地址，启动监听端口；Socket负责发起连接操作。连接成功后，双方通过输入和输出流进行同步阻塞式通信。 

简单的描述一下BIO的服务端通信模型：采用BIO通信模型的服务端，通常由一个独立的Acceptor线程负责监听客户端的连接，它接收到客户端连接请求之后为每个客户端创建一个新的线程进行链路处理没处理完成后，通过输出流返回应答给客户端，线程销毁。即典型的一请求一应答通宵模型。

<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/
bio.png" width=""/></br>
同步阻塞式I/O创建的Server源码：
```java
package com.anxpp.io.calculator.bio;  
import java.io.IOException;  
import java.net.ServerSocket;  
import java.net.Socket;  
/** 
 * BIO服务端源码 
 * @author yangtao__anxpp.com 
 * @version 1.0 
 */  
public final class ServerNormal {  
    //默认的端口号  
    private static int DEFAULT_PORT = 12345;  
    //单例的ServerSocket  
    private static ServerSocket server;  
    //根据传入参数设置监听端口，如果没有参数调用以下方法并使用默认值  
    public static void start() throws IOException{  
        //使用默认值  
        start(DEFAULT_PORT);  
    }  
    //这个方法不会被大量并发访问，不太需要考虑效率，直接进行方法同步就行了  
    public synchronized static void start(int port) throws IOException{  
        if(server != null) return;  
        try{  
            //通过构造函数创建ServerSocket  
            //如果端口合法且空闲，服务端就监听成功  
            server = new ServerSocket(port);  
            System.out.println("服务器已启动，端口号：" + port);  
            //通过无线循环监听客户端连接  
            //如果没有客户端接入，将阻塞在accept操作上。  
            while(true){  
                Socket socket = server.accept();  
                //当有新的客户端接入时，会执行下面的代码  
                //然后创建一个新的线程处理这条Socket链路  
                new Thread(new ServerHandler(socket)).start();  
            }  
        }finally{  
            //一些必要的清理工作  
            if(server != null){  
                System.out.println("服务器已关闭。");  
                server.close();  
                server = null;  
            }  
        }  
    }  
}  
```
 客户端消息处理线程ServerHandler源码：

```java
package com.anxpp.io.calculator.bio;  
import java.io.BufferedReader;  
import java.io.IOException;  
import java.io.InputStreamReader;  
import java.io.PrintWriter;  
import java.net.Socket;  
  
import com.anxpp.io.utils.Calculator;  
/** 
 * 客户端线程 
 * @author yangtao__anxpp.com 
 * 用于处理一个客户端的Socket链路 
 */  
public class ServerHandler implements Runnable{  
    private Socket socket;  
    public ServerHandler(Socket socket) {  
        this.socket = socket;  
    }  
    @Override  
    public void run() {  
        BufferedReader in = null;  
        PrintWriter out = null;  
        try{  
            in = new BufferedReader(new InputStreamReader(socket.getInputStream()));  
            out = new PrintWriter(socket.getOutputStream(),true);  
            String expression;  
            String result;  
            while(true){  
                //通过BufferedReader读取一行  
                //如果已经读到输入流尾部，返回null,退出循环  
                //如果得到非空值，就尝试计算结果并返回  
                if((expression = in.readLine())==null) break;  
                System.out.println("服务器收到消息：" + expression);  
                try{  
                    result = Calculator.cal(expression).toString();  
                }catch(Exception e){  
                    result = "计算错误：" + e.getMessage();  
                }  
                out.println(result);  
            }  
        }catch(Exception e){  
            e.printStackTrace();  
        }finally{  
            //一些必要的清理工作  
            if(in != null){  
                try {  
                    in.close();  
                } catch (IOException e) {  
                    e.printStackTrace();  
                }  
                in = null;  
            }  
            if(out != null){  
                out.close();  
                out = null;  
            }  
            if(socket != null){  
                try {  
                    socket.close();  
                } catch (IOException e) {  
                    e.printStackTrace();  
                }  
                socket = null;  
            }  
        }  
    }  
}  
```
同步阻塞式I/O创建的Client源码：

```java
package com.anxpp.io.calculator.bio;  
import java.io.BufferedReader;  
import java.io.IOException;  
import java.io.InputStreamReader;  
import java.io.PrintWriter;  
import java.net.Socket;  
/** 
 * 阻塞式I/O创建的客户端 
 * @author yangtao__anxpp.com 
 * @version 1.0 
 */  
public class Client {  
    //默认的端口号  
    private static int DEFAULT_SERVER_PORT = 12345;  
    private static String DEFAULT_SERVER_IP = "127.0.0.1";  
    public static void send(String expression){  
        send(DEFAULT_SERVER_PORT,expression);  
    }  
    public static void send(int port,String expression){  
        System.out.println("算术表达式为：" + expression);  
        Socket socket = null;  
        BufferedReader in = null;  
        PrintWriter out = null;  
        try{  
            socket = new Socket(DEFAULT_SERVER_IP,port);  
            in = new BufferedReader(new InputStreamReader(socket.getInputStream()));  
            out = new PrintWriter(socket.getOutputStream(),true);  
            out.println(expression);  
            System.out.println("___结果为：" + in.readLine());  
        }catch(Exception e){  
            e.printStackTrace();  
        }finally{  
            //一下必要的清理工作  
            if(in != null){  
                try {  
                    in.close();  
                } catch (IOException e) {  
                    e.printStackTrace();  
                }  
                in = null;  
            }  
            if(out != null){  
                out.close();  
                out = null;  
            }  
            if(socket != null){  
                try {  
                    socket.close();  
                } catch (IOException e) {  
                    e.printStackTrace();  
                }  
                socket = null;  
            }  
        }  
    }  
}  
```
 测试代码，为了方便在控制台看输出结果，放到同一个程序（jvm）中运行：

```java
package com.anxpp.io.calculator.bio;  
import java.io.IOException;  
import java.util.Random;  
/** 
 * 测试方法 
 * @author yangtao__anxpp.com 
 * @version 1.0 
 */  
public class Test {  
    //测试主方法  
    public static void main(String[] args) throws InterruptedException {  
        //运行服务器  
        new Thread(new Runnable() {  
            @Override  
            public void run() {  
                try {  
                    ServerBetter.start();  
                } catch (IOException e) {  
                    e.printStackTrace();  
                }  
            }  
        }).start();  
        //避免客户端先于服务器启动前执行代码  
        Thread.sleep(100);  
        //运行客户端   
        char operators[] = {'+','-','*','/'};  
        Random random = new Random(System.currentTimeMillis());  
        new Thread(new Runnable() {  
            @SuppressWarnings("static-access")  
            @Override  
            public void run() {  
                while(true){  
                    //随机产生算术表达式  
                    String expression = random.nextInt(10)+""+operators[random.nextInt(4)]+(random.nextInt(10)+1);  
                    Client.send(expression);  
                    try {  
                        Thread.currentThread().sleep(random.nextInt(1000));  
                    } catch (InterruptedException e) {  
                        e.printStackTrace();  
                    }  
                }  
            }  
        }).start();  
    }  
}  
```
运行结果：

```
服务器已启动，端口号：12345
算术表达式为：4-2
服务器收到消息：4-2
___结果为：2
算术表达式为：5-10
服务器收到消息：5-10
___结果为：-5
算术表达式为：0-9
服务器收到消息：0-9
___结果为：-9
算术表达式为：0+6
服务器收到消息：0+6
___结果为：6
算术表达式为：1/6
服务器收到消息：1/6
___结果为：0.16666666666666666
...
```

## NIO
NIO的特性/NIO与IO区别:
1.1)IO是面向流的，NIO是面向缓冲区的；
2.2)IO流是阻塞的，NIO流是不阻塞的;
3.3)NIO有选择器，而IO没有。
读数据和写数据方式:
1.从通道进行数据读取 ：创建一个缓冲区，然后请求通道读取数据。
2.从通道进行数据写入 ：创建一个缓冲区，填充数据，并要求通道写入数据。

NIO核心组件简单介绍
1.Channels
2.Buffers
3.Selectors

**Buffer(缓冲区)介绍:**
1.Java NIO Buffers用于和NIO Channel交互。 我们从Channel中读取数据到buffers里，从Buffer把数据写入到Channels；
2.Buffer本质上就是一块内存区；
3.一个Buffer有三个属性是必须掌握的，分别是：capacity容量、position位置、limit限制。
  具体的缓存区有这些：ByteBuffe、CharBuffer、 ShortBuffer、IntBuffer、LongBuffer、FloatBuffer、DoubleBuffer。他们实现了相同的接口：Buffer。
  
  
**通道 Channel**
<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/
channel.png" width=""/></br>
我们对数据的读取和写入要通过Channel，它就像水管一样，是一个通道。通道不同于流的地方就是通道是双向的，可以用于读、写和同时读写操作。

   底层的操作系统的通道一般都是全双工的，所以全双工的Channel比流能更好的映射底层操作系统的API。
    Channel主要分两大类：
    SelectableChannel：用户网络读写
    FileChannel：用于文件操作
后面代码会涉及的ServerSocketChannel和SocketChannel都是SelectableChannel的子类。子类。

**多路复用器 Selector**

Selector是Java  NIO 编程的基础。

    Selector提供选择已经就绪的任务的能力：Selector会不断轮询注册在其上的Channel，如果某个Channel上面发生读或者写事件，这个Channel就处于就绪状态，会被Selector轮询出来，然后通过SelectionKey可以获取就绪Channel的集合，进行后续的I/O操作。

    一个Selector可以同时轮询多个Channel，因为JDK使用了epoll()代替传统的select实现，所以没有最大连接句柄1024/2048的限制。所以，只需要一个线程负责Selector的轮询，就可以接入成千上万的客户端。

<img src="https://github.com/myacai/JavaHandBook/blob/master/images/java/
nio.png" width=""/></br>