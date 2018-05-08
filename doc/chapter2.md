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

## 有状态组件和无状态组件

对于UI的描述，肯定会存在无需内部状态的组件出现，而且，这在React应用中更是大多数，我们称这种组件为无状态组件。若组件需要维护自己的状态，这就是有状态组件。

React的最大特点之一就是组件化，所以我们在React组件设计之初就应该认真考虑哪些组件应该设计成有状态组件，而哪些组件应该是无状态组件，并且整个应用中，纯粹用来描述UI的无状态组件应该占多数，这利于组件的复用。

而我们BBS项目的设计中，当前的组件设计并不合适，主要体现在：

- 帖子列表通过常量保存在组件之外，但帖子列表数据是会变化的。
- 每个PostItem组件都维护一个vote状态，但除了vote以外，帖子的其他信息都保存在PostList组件中，这显然是不合理的。

我们尝试重新设计这两个组件，使PostItem称为无状态组件，而PostList为有状态组件。

主要的修改：

- 帖子的列表数据定义为PostLit的一个内部状态。
- `componentDidMount`生命周期函数中利用`setTimeout`模拟后台请求数据，继而使用`this.setState`的唯一方法更新UI。
- 将帖子所有属性合并，并通过状态组件PostList传递到PostItem组件，使得PostItem组件称为纯粹的渲染组件。
- 在PostList组件中定义`handleVote`，处理点赞逻辑，并将该方法通过props传递给PostItem。
- PostItem定义为函数组件，根据PostList传递的post属性渲染UI，当发生点赞行为时，通过`porps.onVote`方法将点赞逻辑交给PostList中的`handleVote`处理。

这样的修改后，我们组件分工明确，PostItem只管如何UI，不需要维护自身的状态，至于数据来源和点赞的逻辑该如何处理，它并不需要关心，解决耦合更加彻底，复用更容易。

## 属性校验和默认属性

利用`props-types`库提供`props`类型的规定，其中对象和数组可以使用更细节的`shape`和`arrayOf`:

```javascript
style: PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number
}).isrequired,
sequence: PropTypes.arrayOf(PropTypes.number)
```
React中通过组件的defaultProps提供默认的属性值：

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.defaultProps = {
  name: 'tab'
};
```

## 组件和元素

React元素很简单，就是一个JavaScript对象，通过JSX语言描述，最后经过`React.createElement`生成为原生对象。

```javascript
//组件Hello,world
const Hello = <div className='hello'><span>Hello</span>, world</div>;

//React元素
Hello === {
  type: 'div',
  props: {
    className: 'hello'
  },
  children: [{
    type: 'span',
    props: null,
    children: null
  },
  ', world'
  ]
};
```

组件是一个class或函数，返回React元素。

## 组件的生命周期

整体而言，React组件的生命周期分为三个时期: Mounting, Updating, Umounting。

### Mounting

- `constructor`: 组件创建时首先调用构造方法，接受props参数，为父组件中传入的属性对象，~~必须在调用了`super(props)`后才能保证`props`被传入组件中~~，必须调用了`super(props)`后才能保证在构造函数中访问`props`(**对原书存疑$$)。

- `componentWillMount`: 组件挂载到DOM前调用，且只会被执行一次，很少使用。

- `render`: 即JSX描述UI，它不负责实际的渲染工作，只是返回UI描述，`render`是一个纯函数，不能存在任何具有副作用的函数调用，所有`setState`函数不能再`render`中调用。

- `componentDidMount`: 组件挂载到DOM后调用，且只会调用一次，因组件已完成挂载，对DOM的操作可以放在这个方法中，也多用于向服务器拉取数据。

### Upating









