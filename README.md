### SlsAdmin介绍

此项目是一个后台管理系统，里面有完整并且实际的增删改查功能，有普通模式操作，也有高级模式操作，用此项目，可以快速帮您完成后台功能。
此项目重点突出在于架构模式，相比那些有很多页面，但架构混乱的项目来说，一个真正的前端应该更在意项目的架构。



### 文档更新
文档暂时还没有更新完，此文档，目录名后面带'-'的代表还没更新，更新的就不带-了。

### 访问账号
#### 账号注册？
**后台其实不需要注册，但最近增加了权限功能，为了完整的体验权限功能，也为了方便大家更加测试体验方便，在登录页面，开放了注册功能.**

**大家注册的账号默认都归属到管理员(我)的下边，所以，除了我，别人无法操作你以及你添加的数据。**

#### 具体文档请查看[sls-admin文档](https://vue2doc.slsadmin.sailengsi.com/)
#### 在线演示查看[sls-admin演示](https://vue2.slsadmin.sailengsi.com/)

使用步骤

``` bash
# get project
git clone https://github.com/sailengsi/sls-admin.git

#进入项目目录
cd sls-admin/vue2

#修改api代理
- 把sls-admin/vue2/config中的index.js打开
- 找到 target: 'http://slsadmin.api.sls.com' 这一行
- 修改target值为：'http://slsadmin.api.sailengsi.com'

# 安装依赖
npm install

# 启动server
npm run dev

# 编译
npm run build
```



#### 架构模式特点：
* 易于协作开发
* 方便拓展与维护
* 结构清晰明了
* 灵活，可自定义配置


> 基于这个模式，可以拓展更为强大的功能，诸如类似其他后台模板里面的那些功能等，都可以用组件化形式开发，注入到此项目。



### 涵盖技术包含

#### 技术点：
* [Vue](http://cn.vuejs.org/) 当下最流行的前端JavaScript框架
* [VueRouter](https://router.vuejs.org/zh-cn/) 基于Vue的路由插件
* [Vuex](https://vuex.vuejs.org/zh-cn/) 管理Vue中多组件共享状态的插件，类似react的redux
* [Axios](https://github.com/mzabriskie/axios) 当前最流行的一个http库
* [ElementUI](https://github.com/ElemeFE/element) 饿了么团队开发的基于Vue的一套UI组件库

#### 富文本：
* [wangEditor](http://www.wangeditor.com/) 一款国人开发的富文本编辑器

#### 七牛云：
* [七牛云开发文档](https://developer.qiniu.com/) 官方开发者文档
* [七牛JavaScript版SDK](https://developer.qiniu.com/kodo/sdk/1283/javascript) Web端JavaScript版SDK文档
* [七牛PHP版SDK](https://developer.qiniu.com/kodo/sdk/1241/php) 服务端PHP版SDK文档



### 沟通交流
 1. 如果您有什么问题，可提issues，也可加QQ群讨论：613102022。
 2. 更新日志：可查看提交记录，有较大的更新都会在提交日志中明确写出。
 3. 广告：个人官方博客：https://www.sailengsi.com 交流技术，交流心得。

