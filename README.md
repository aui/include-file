#	HTML 静态文件局部模板批量更新工具

![banner](./doc/banner.jpg)

##	工具介绍

iTag 是一个简单易用的 HTML 静态文件局部模板批量更新工具，它通过注释的方式给 HTML 添加类似类似 css 的``import``语句语句的功能。

由于采用注释+工具自动替换的方式实现，有如下好处：

1. 无需服务器与 js 支持
2. 静态页面可反复被替换
3. 注释直观易于理解

工具适用于 web 设计师或者 web 重构工程师。

##	include 语句

编写页面的时候，在需要动态更新的地方使用特殊注释包裹即可，例如：

```
 <!--[include './public/header.html']-->
    <div id="header">
        <ul class="nav">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./news.html">News</a></li>
            <li><a href="./about.html">about</a></li>
        </ul>
    </div>
 <!--[/include]-->
```
	
##	安装工具

###	安装 NodeJS

iTag 采用 [NodeJS](http://nodejs.org) 开发，所以首先需要下载安装 [NodeJS](http://nodejs.org)

###	安装 iTag

在控制台运行：

	npm install itag -g
	
##	运行工具
	
iTag 安装完毕后，系统会增加一个``itag``的命令，使用方式为：

	itag [模板目录]
	
其中模板目录是可选的。

##	运行演示例子

下载程序包后，test 目录有一些演示的页面，例如切换到 test 目录并运行工具：

	cd /Users/tangbin/Documents/github/iTag/test
	itag