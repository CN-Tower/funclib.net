# funclib.js (凡客杰斯)
[![npm](https://img.shields.io/npm/v/funclib.svg)
![LICENSE MIT](https://img.shields.io/npm/l/funclib.svg)](https://www.npmjs.com/package/funclib) 
[![Build Status](https://travis-ci.org/CN-Tower/funclib.js.svg?branch=master)](https://travis-ci.org/CN-Tower/funclib.js)
[![Coverage Status](https://coveralls.io/repos/github/CN-Tower/funclib.js/badge.svg)](https://coveralls.io/github/CN-Tower/funclib.js)

## Brief Intro
JavaScript通用型UMD函数库!
> 目的：高效率完成业务代码！

### Documents:&nbsp;&nbsp;https://www.funclib.net

## Quick start
```bash
# Install funclib.js
$ npm install funclib

# Use funclib
$ node
> var fn = require('funclib');
> var ps = [{name: 'Tom', age: 18}, {name: 'Bob', age: 22}];
> fn.log(ps, 'Persons');
// =>
==================================================================
                       [10:33:55] Persons 
------------------------------------------------------------------
[
  {
    "name": "Tom",
    "age": 18
  },
  {
    "name": "Bob",
    "age": 22
  }
]
==================================================================
```

## Clone Repo
```bash
# Download funclib repo
$ git clone https://github.com/CN-Tower/funclib.js.git
# $ git clone http://gitlab.zte.com.cn/CN-Tower/funclib.js.git

# Install dependency
$ npm install

# Start
$ npm start

# Do Try
$ npm run usage

# Build
$ npm run build

# Test
$ npm run test
```

## Methods
```
==================================================================
* [c]: Client side method 客户端方法
* [s]: Server side method 服务端方法
* [-]: Common method      服务端和客户端通用的方法
------------------------------------------------------------------
## Type
* fn.typeOf                [-] 检查值的类型，返回布尔值
* fn.typeVal               [-] 检查值的类型，是则返回该值，否则返回false
## Array
* fn.array                 [-] 返回指定长度和默认值的数组
* fn.range                 [-] 返回一个范围数组
* fn.toArr                 [-] 值数组化
* fn.indexOf               [-] 寻找值在数组中的索引
* fn.find                  [-] 根据条件寻找值
* fn.filter                [-] 根据条件取过滤值
* fn.reject                [-] 根据条件过滤值
* fn.contains              [-] 判断数组是否包含符合条件的值
* fn.drop                  [-] 去掉Boolean()后为false和空数组或对象的值
* fn.flatten               [-] 把有结构的数组打散，减少层数
* fn.pluck                 [-] 把结构中的字段取出合并到一个数组中
* fn.uniq                  [-] 去重或根据字段去重
* fn.each                  [-] 遍历数组或类数组
* fn.forEach               [-] 遍历数组或类数组, 同: fn.forEach
* fn.sortBy                [-] 返回对象数组根据字段排序后的副本
## Object
* fn.len                   [-] 获取对象自有属性的个数
* fn.has                   [-] 判断对象是否存在某自有属性
* fn.get                   [-] 返回对象或子孙对象的属性，可判断类型
* fn.keys                  [-] 返回对象的键值数组
* fn.pick                  [-] 获取对象的部分属性
* fn.extend                [-] 给对象赋值，可指定字段
* fn.forIn                 [-] 遍历对象的可数自有属性
* fn.deepCopy              [-] 深拷贝数组或对象
* fn.isEmpty               [-] 判断对象是否为空对象或数组
* fn.isDeepEqual           [-] 判断数组或对象是否相等
## Math
* fn.random                [-] 返回指定范围的随机数
* fn.gid                   [-] 返回指定长度的随机ID
* fn.gcolor                [-] 返回一个随机色值
## Time
* fn.interval              [-] 循环定时器
* fn.timeout               [-] 延时定时器
* fn.defer                 [-] 延迟执行函数
* fn.timestamp             [-] 返回一个当前时间戳
* fn.fmtDate               [-] 获取格式化的时间字符串
## String
* fn.match                 [-] 字符串匹配
* fn.pretty                [-] 转换成格式化字符串
* fn.escape                [-] 编码HTML字符串
* fn.unescape              [-] 解码HTML字符串
* fn.capitalize            [-] 字符串首字母大写
* fn.fmtCurrency           [-] 格式化显示货币
* fn.cutString             [-] 裁切字符串到指定长度
* fn.parseQueryStr         [-] 解析Url参数成对象
* fn.stringifyQueryStr     [-] 把对象编译成Url参数
## RegExp
* fn.getPattern            [-] 获取一个通用的正则表达式
* fn.matchPattern          [-] 与一个或几个通用正则匹配
## Function
* fn.throttle              [-] 节流函数
* fn.debounce              [-] 防抖函数
## Loger
* fn.chalk                 [s] 返回带颜色的字符串
* fn.log                [c][s] 控制打印格式化值
## Element
* fn.fullScreen            [c] 全屏显示一个HTML元素
* fn.exitFullScreen        [c] 退出全屏显示
* fn.checkIsFullScreen     [c] 检测是否处理全屏状态
* fn.fullScreenChange      [c] 检测是否全屏状态
* fn.noAutoComplete        [c] 防止input密码自动填充
## Cookie
* fn.setCookie             [c] 设置cookie
* fn.getCookie             [c] 根据name读取cookie
* fn.removeCookie          [c] 根据name删除cookie
## Tools
* fn.rd                    [s] 读文件
* fn.wt                    [s] 写文件
* fn.cp                    [s] 复制文件夹和文件
* fn.mv                    [s] 移动文件夹和文件
* fn.rm                    [s] 删除文件夹和文件
* fn.mk                    [s] 创建文件夹
* fn.size                  [s] 获取文件的大小
* fn.copyText              [c] 复制文本到粘贴板
## Progress
* fn.progress              [s] 进度显示工具
* fn.progress.stop         [s] 停止进度，结束后触发回调
## Tricks
* fn.noConflict            [-] 释放fn变量占用权
* fn.version               [-] 返回当前函数库版本
* fn().method              [-] 使用OOP风格的调用
==================================================================
```

## Structure
```
funclib.js
├── node_modules/           ### You know the drill...
├── script                  ### 脚本
│   ├── build.js            # 构建脚本
│   ├── karma.conf.js       # Karma测试框架配置
│   ├── pre-build.js        # 构建配置脚本
│   └── test.js             # 测试配置脚本
├── src                     ### Source code
│   ├── funclib.core.js     # 通用版
│   ├── funclib.js          # 未压缩版客户端版
│   ├── funclib.min.js      # 压缩版客户端版
│   ├── index.d.ts          # 定义文件
│   ├── index.js            # 服务端版
│   ├── package.json        # 库模块定义
│   └── README.md           # Read this FIRST :)
├── test                    ### 测试
│   ├── client-methods/     # 客户端版测试用例
│   ├── core-methods/       # 通用版测试用例
│   ├── server-methods/     # 服务端版测试用例
│   ├── fn-core.js          # 通用版测试文件
│   └── fn-index.js         # 服务端版测试文件
├── .coveralls.yml          # 测试覆盖率
├── .editorconfig           # Set coding style (indents, charset, etc.)
├── .gitignore              # You know the drill...
├── .travis.yml             # CI配置
├── LICENSE                 # 授权说明
├── package-lock.json       # NPM Lock
├── package.json            # 库配置
├── README.md               # Read this FIRST :)
├── tsconfig.json           # Typescript配置
├── usage.html              # 客户端试验
└── usage.js                # 服务端试验
```