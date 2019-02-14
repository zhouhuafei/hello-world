# 常用生命周期
* componentWillMount
* componentDidMount
* componentWillMount和componentDidMount的区别
    - 1、componentWillMount  将要装载，在render之前调用；componentDidMount，（装载完成），在render之后调用
    - 2、componentWillMount  每一个组件render之前立即调用；componentDidMount  render之后并不会立即调用，而是所有的子组件都render完之后才可以调用
    - 3、componentWillMount  可以在服务端被调用，也可以在浏览器端被调用；componentDidMount  只能在浏览器端被调用，在服务器端使用react的时候不会被调用

# 事件
* 原生事件```onclick```，react事件```onClick```。

# onChange事件
* react给input标签使用onInput事件会报错，react建议使用onChange事件。
* 原生的onchange是失去焦点触发。
* react的onChange事件和原生的oninput事件一样。输入就触发。
