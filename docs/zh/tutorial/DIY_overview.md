# 

突然有一天，在你补要投给Nature的文章的数据的时候，发现LAMMPS已经满足不了你了，不管是计算一个新的参数，还是增加一直新的限制还是引入一种新定义的原子，你需要自己添加一些功能。这时候，LAMMPS作为开源软件的优势就体现出来了，你可以尽情地在源代码的海洋中徜徉，新建几个文件，向里面敲入神奇的C++，一步步拉近你与诺奖的距离。

不过在你一腔热血开始干之前，请冷静一下考虑这么几个问题，难道非得上手术台不可嘛：

* 这些计算的参数能不能在后处理阶段计算，很多参数通过dump文件反而会更加简单；
* simple is better than complex. 你所设想的新力场是不是太复杂了；
* 你的计算能不能并行计算，要不会拖累整体的速度；

你想了想，嗯，不行，就得大动干戈。

为LAMMPS增添新特性的最好办法就是找一个类似的功能，在它基础上进行改动。虽然LAMMPS是一个复杂的工程，但是实现一个函数只需要一些简单的C++知识来操作C风格的数据结构（向量和数组）。

在接下来的教程中，我会一步步教你如何继承LAMMPS的一个类来实现新的功能。根据新功能与现有功能的不同程度，可以从基类本身派生，也可以从已存在的派生类派生。LAMMPS能够调用新类非常简单，创建一个派生类所需要两个文件，`.cpp`和`.h`，放入src目录并重新编译LAMMPS即可。C++是面向对象的语言，定义新功能的所有代码和变量都在您创建的两个文件中，像是即插即用的模块一样，因此不会使LAMMPS变得更复杂和使得整个系统崩溃。

由于从LAMMPS的基类处继承，派生类必须有某些方法才能使用。接下来的教程我们选择了一些从常见的式样，来讲解他们的头文件和代码部分。公共变量（public variable）会被派生类和基类使用，有时候也会被LAMMPS的其他部分调用。纯函数（pure function）即那些在头文件中声明为虚函数的虚函数，是在派生类中必须被实现的函数，被设置成0。未设置成0的函数可以重写也可以不重写。它们通常定义为空函数体。

此外，新的输出选项可以直接被添加到`thermo.cpp`，`dump_custom.cpp`和`variable.cpp`中。

那就来吧！