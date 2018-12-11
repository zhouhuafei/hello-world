# svg标签在html页面中的默然属性
* width="300"
* height="150"

# 踩坑
* 1px变2px。
    - 解决方案：偏移0.5px。
    - 引申：canvas也存在这个问题。解决方案也是偏移0.5px。
* 文字模糊。
    - 解决方案：不使用stroke，使用fill。
