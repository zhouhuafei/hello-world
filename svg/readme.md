# svg标签在html页面中的默然属性
* width="300"
* height="150"
* fill="#000"
* stroke="none"

# 踩坑
* 1px变2px。
    - 解决方案：偏移0.5px。
    - 引申：canvas也存在这个问题。解决方案也是偏移0.5px。
* 文字模糊。
    - 解决方案：不使用stroke，使用fill。

# <path> 标签
<path> 标签用来定义路径。下面的命令可用于路径数据：
* M = moveto
* L = lineto
* H = horizontal lineto
* V = vertical lineto
* C = curveto
* S = smooth curveto
* Q = quadratic Belzier curve
* T = smooth quadratic Belzier curveto
* A = elliptical Arc
* Z = closepath
注释：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。

# 建议
由于绘制路径的复杂性，因此强烈建议您使用 SVG 编辑器来创建复杂的图形。
