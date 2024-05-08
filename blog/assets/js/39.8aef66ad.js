(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{448:function(a,t,s){"use strict";s.r(t);var n=s(2),v=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"一、面向对象概念和java基础知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、面向对象概念和java基础知识点"}},[a._v("#")]),a._v(" 一、面向对象概念和Java基础知识点")]),a._v(" "),t("h2",{attrs:{id:"_1、什么是面向对象-以及面向对象和面向过程的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是面向对象-以及面向对象和面向过程的区别"}},[a._v("#")]),a._v(" 1、什么是面向对象？以及面向对象和面向过程的区别")]),a._v(" "),t("p",[a._v("面向对象是一种思想，能让复杂问题简单化，面向对象思想程序员不需要了解具体的实现过程，只需要使用特定对象去实现功能即可。\n面向对象的底层其实还是面向过程，把面向过程抽象成类，然后进行封装，方便我们使用。")]),a._v(" "),t("p",[a._v("面向对象是相对面向过程而言，面向对象和面向过程都是一种思想。\n面向对象是基于面向过程的。\n面向过程强调的是功能、行为。\n面向对象：将功能封装进对象，强调具备了功能的对象本身。")]),a._v(" "),t("h2",{attrs:{id:"_2、面向对象都有哪些特性以及你对这些特性的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、面向对象都有哪些特性以及你对这些特性的理解"}},[a._v("#")]),a._v(" 2、面向对象都有哪些特性以及你对这些特性的理解？")]),a._v(" "),t("p",[a._v("1） 封装：将类的某些信息隐藏在类内部，不允许外部程序直接访问，而是通过该类提供的方法来实现对隐藏信息的操作和访问。\n好处：\n只能通过规定的方法访问数据。\n隐藏类的实例细节，方便修改和实现。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319000309534.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODgzODY2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),a._v("\n2）继承：A extends B  A子类继承B父类，子类将拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问的，只是拥有。\n子类可以拥有自己属性和方法，即子类可以对父类进行扩展。\n子类可以用自己的方式实现父类的方法,即方法的覆写。")]),a._v(" "),t("p",[a._v("3） 多态性：多态就是对象的多种形态。\n"),t("strong",[a._v("记住：")]),a._v(" "),t("strong",[a._v("编译时期父类引用指向子类对象，在运行时期会动态加载子类实现")])]),a._v(" "),t("p",[a._v("java里的多态主要表现在两个方面：\n1.引用多态\n父类的引用可以指向本类的对象；\n父类的引用可以指向子类的对象；\n2.方法多态\n根据上述创建的两个对象：本类对象和子类对象，同样都是父类的引用，当我们指向不同的对象时，它们调用的方法也是多态的。\n创建本类对象时，调用的方法为本类方法；\n创建子类对象时，调用的方法为子类重写的方法或者继承的方法；")]),a._v(" "),t("p",[a._v("注意：在 Java 中有两种形式可以实现多态：继承（多个子类对同一方法的重写）和接口（实现接口并覆盖接口中同一方法）。")]),a._v(" "),t("p",[a._v("4）抽象：抽象是将一类对象的共同特征总结出来构造类的过程，包括数据抽象和行为抽象两方面。抽象只关注对\n象有哪些属性和行为，并不关注这些行为的细节是什么。")]),a._v(" "),t("h2",{attrs:{id:"_3、在面向对象设计中-solid-是指五个重要的设计原则-它们是"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、在面向对象设计中-solid-是指五个重要的设计原则-它们是"}},[a._v("#")]),a._v(" 3、在面向对象设计中，SOLID 是指五个重要的设计原则，它们是？")]),a._v(" "),t("p",[a._v("单一职责原则（Single Responsibility Principle，SRP）：\n这个原则表明一个类应该只有一个引起它变化的原因。换句话说，一个类应该只有一个职责或功能。这样做有助于使类更加模块化、可维护和易于理解。如果一个类负责过多的事情，那么当需求发生变化时，需要修改这个类的风险就会增加。")]),a._v(" "),t("p",[a._v("开放-封闭原则（Open-Closed Principle，OCP）：\n这个原则表明软件实体（类、模块、函数等）应该对扩展开放，对修改关闭。也就是说，当需要改变系统的行为时，应该通过扩展现有代码来实现，而不是通过修改已有的代码。通过遵循这个原则，可以减少因修改现有代码而引入的风险，并使得系统更加稳定和可维护。")]),a._v(" "),t("p",[a._v("里氏替换原则（Liskov Substitution Principle，LSP）：\n这个原则由芭芭拉·利斯科夫提出，它表明子类型（派生类或实现类）应该能够替换其基类型（基类或接口），而不会影响程序的正确性。换句话说，子类型应该能够在不破坏原有代码的情况下替换其父类型。遵循这个原则有助于保持代码的一致性和可靠性。")]),a._v(" "),t("p",[a._v("接口隔离原则（Interface Segregation Principle，ISP）：\n这个原则表明一个类不应该强迫其客户端依赖于它们不需要的方法。换句话说，一个类应该将其接口分离成多个专门的接口，而不是一个臃肿的整体。这样做可以降低类与类之间的耦合度，提高代码的灵活性和可维护性。")]),a._v(" "),t("p",[a._v("依赖倒置原则（Dependency Inversion Principle，DIP）：\n这个原则表明高层模块不应该依赖于低层模块，而是应该依赖于抽象。同时，抽象不应该依赖于细节，而是细节应该依赖于抽象。通过使用接口和抽象类，可以实现这个原则，从而使得系统更加灵活、可扩展和可维护。")]),a._v(" "),t("h2",{attrs:{id:"_4、java语言特性以及java是如何实现跨平台的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、java语言特性以及java是如何实现跨平台的"}},[a._v("#")]),a._v(" 4、java语言特性以及java是如何实现跨平台的？")]),a._v(" "),t("p",[a._v("跨平台性\n支持多线程\n支持网络编程等\n分布式\n(Java包括一个支持HTTP和FTP等基于TCP/IP协议的子库。因此，Java应用程序可凭借URL打开并访问网络上的对象，其访问方式与访问本地文件系统几乎完全相同。)\nUnicode\nJava使用Unicode作为它的标准字符，这项特性使得Java的程序能在不同语言的平台上都能撰写和执行。简单的说，你可以把程序中的变量、类别名称使用中文来表示<注>，当你的程序移植到其它语言平台时，还是可以正常的执行。")]),a._v(" "),t("p",[a._v("Java程序并非是直接运行的，Java编译器将Java源程序(.java文件)编译成与平台无关的字节码文件(.class文件)，然后由Java虚拟机（JVM Java Virtual Machine）对字节码文件解释执行。所以在不同的操作系统下，只需安装不同的Java虚拟机即可实现java程序的跨平台。\n(这里需要注意虚拟机并不是跨平台的 Java语言跨平台特性其实质是同一份Java字节码文件可以运行在不同操作系统上的Java虚拟机上)\n下图一目了然：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319225526838.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODgzODY2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),a._v(" "),t("h2",{attrs:{id:"_5、什么是jdk、jre、jvm-以及三者的关系是什么样的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、什么是jdk、jre、jvm-以及三者的关系是什么样的"}},[a._v("#")]),a._v(" 5、什么是JDK、JRE、JVM 以及三者的关系是什么样的？")]),a._v(" "),t("p",[a._v("JDK（Java Development Kit）是Java程序开发工具包，包含JRE和开发人员使用的工具。\n其中的开发工具：编译工具（javac.exe）和运行工具（java.exe）。")]),a._v(" "),t("p",[a._v("JRE（Java Runtime Environment）是Java程序的运行时环境，包含JVM和运行时所需要的核心类库。\nJVM（JVM Java Virtual Machine）是 java虚拟机\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319225930859.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODgzODY2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),a._v(" "),t("h2",{attrs:{id:"_6、java都有哪些普通数据类型-分别占几个字节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、java都有哪些普通数据类型-分别占几个字节"}},[a._v("#")]),a._v(" 6、java都有哪些普通数据类型？分别占几个字节")]),a._v(" "),t("p",[a._v("一共有8个普通数据类型\n整型: byte(一个字节)  short(两个字节)  int(四个字节)  long(8个字节)\n浮点型:float(4个字节)  double(8个字节)\n字符型: char(2个字节 可以存一个汉字)\n布尔型: boolean ( true   false)  它的“大小”并不是精确定义的《Java虚拟机规范》给出了单独的boolean是4个字节，和boolean数组1个字节的定义，具体还要看虚拟机实现是否按照规范来，所以1个字节、4个字节都是有可能的。这其实是运算效率和存储空间相互取舍的博弈。\n注意：下图中boolean占一个字节说法不够严谨\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319231240411.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODgzODY2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),a._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319232023690.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODgzODY2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),a._v(" "),t("h2",{attrs:{id:"_7、float-i-1-0-对吗-short-a-1-a-a-1-对吗-short-b-1-b-1-对吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、float-i-1-0-对吗-short-a-1-a-a-1-对吗-short-b-1-b-1-对吗"}},[a._v("#")]),a._v(" 7、float i=1.0 对吗？  short  a=1;  a=a+1; 对吗？    short  b=1;  b+=1;对吗？")]),a._v(" "),t("p",[a._v("前两个不对，后一个对。\n第一个应该写成 float i=1.0F   或者 float i=1.0f")]),a._v(" "),t("p",[a._v("第二个 由于 a是short类型   （注意：当byte  short 参与运算时会自动转换成int 类型）\n所以第二个相当于   a = (int) (a+1);   结果是int型  赋值给a  而a是short类型  所以编译无法通过")]),a._v(" "),t("p",[a._v("第三种相当于   b=(short)(b+1);  结果为2")]),a._v(" "),t("h2",{attrs:{id:"_8、如何高效计算2-4-和-8-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、如何高效计算2-4-和-8-4"}},[a._v("#")]),a._v(" 8、如何高效计算2*4  和  8/4 ？")]),a._v(" "),t("p",[a._v("2<< 2\n8>>2\n左移位    a<<n    相当于  a* 2ⁿ     所以  2<<2    相当于 2* 2²=2* 4\n右移位    a>>n    相当于  a* 2﹣ⁿ    所以  8>>2  相当于 8* 2﹣²=8/4")]),a._v(" "),t("h2",{attrs:{id:"_9、java程序的入口函数是什么-java程序类的公共父类是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、java程序的入口函数是什么-java程序类的公共父类是什么"}},[a._v("#")]),a._v(" 9、Java程序的入口函数是什么？ Java程序类的公共父类是什么？")]),a._v(" "),t("p",[a._v("main函数\nObject类")]),a._v(" "),t("h2",{attrs:{id:"_10、什么是类-什么是对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、什么是类-什么是对象"}},[a._v("#")]),a._v(" 10、什么是类？什么是对象？")]),a._v(" "),t("p",[a._v("类是一组具有共同属性和行为的事物的抽象，简单理解，类就是对【事物】的一种【描述】\n描述事物，则需要【属性】和【行为】\n属性：事物具备的各个特征，例如->手机这个事物的特征（品牌，价格.）行为：事物能执行的操作，例如->手机能（打电话，发短信）")]),a._v(" "),t("p",[a._v("对象代表客观存在的事物\n类是对象的抽象（描述），对象是类的实体\n在程序中需要先有类，才能创建出对象！")])])}),[],!1,null,null,null);t.default=v.exports}}]);