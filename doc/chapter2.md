# 组件定义

组件化是React的根本，React程序正是由一个一个组件搭建而成的，定义组件由两个方式：

- class组件
- 函数组件

## class组件

- 继承于React.Component
- 包含render方法，render方法返回UI的描述

## class组件state

组件state是组件内部的状态, state的变化最终将反映到组件的变化上。

$$UI = f(state, props)$$

通过组件的构造方法`constructor`中设置`this.state`初始化组件state,  并通过`this.setState`改变组件状态，这也是改变组件状态的唯一方式，进而使得组件UI重新渲染。
