(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{411:function(a,s,t){"use strict";t.r(s);var n=t(27),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_1-windows-上-rabbitmq安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-windows-上-rabbitmq安装"}},[a._v("#")]),a._v(" 1，Windows 上 RabbitMQ安装")]),a._v(" "),t("p",[a._v("RabbitMQ基于AMQP协议，遵循Mozilla Public License开源协议。\n采用 Erlang 实现的工业级的消息队列(MQ)服务器，Rabbit MQ 是建立在Erlang OTP平台上。\n所以装RabbitMQ服务器必须首先安装 Erlang 运行环境。")]),a._v(" "),t("p",[t("strong",[a._v("安装Erlang需要先确认当前RabbitMQ所依赖的Erlang版本号")])]),a._v(" "),t("p",[a._v("下载地址")]),a._v(" "),t("ul",[t("li",[a._v("Erlang：https://www.erlang.org/downloads")]),a._v(" "),t("li",[a._v("RabbitMQ：https://www.rabbitmq.com/download.html")])]),a._v(" "),t("h2",{attrs:{id:"安装erlang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装erlang"}},[a._v("#")]),a._v(" 安装Erlang")]),a._v(" "),t("p",[a._v("当前需要安装的RabbitMQ 3.8.5 ，Erlang兼容版本21.3~23.X\n下载安装包后配置一下Erlang环境变量即可")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20200729110435006.png",alt:"image-20200729110435006"}})]),a._v(" "),t("h2",{attrs:{id:"安装rabbitmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装rabbitmq"}},[a._v("#")]),a._v(" 安装RabbitMQ")]),a._v(" "),t("p",[a._v("RabbitMQ安装后是作为Windows Service服务在后台运行，安装完毕后查看对应服务列表")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20200729110817584.png",alt:"image-20200729110817584"}})]),a._v(" "),t("p",[a._v("配置环境变量，追加至Path变量内")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20200729111106920.png",alt:"image-20200729110817584"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20200729111336153.png",alt:"image-20200729111336153"}})]),a._v(" "),t("h2",{attrs:{id:"配置rabbitmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置rabbitmq"}},[a._v("#")]),a._v(" 配置RabbitMQ")]),a._v(" "),t("p",[a._v("配置好环境变量后查看MQ插件列表然后进行启用操作")]),a._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("C:\\Users\\Administrator>rabbitmq"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("plugins list\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("启用 rabbitmq_management 插件(在线管理UI)")]),a._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("C:\\Users\\Administrator>rabbitmq"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("plugins enable rabbitmq_management\n\nEnabling plugins on node rabbit@WIN"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("R8A10FS93QJ:\nrabbitmq_management\nThe following plugins have been configured:\n  rabbitmq_management\n  rabbitmq_management_agent\n  rabbitmq_web_dispatch\nApplying plugin configuration to rabbit@WIN"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("R8A10FS93QJ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\nThe following plugins have been enabled:\n  rabbitmq_management\n  rabbitmq_management_agent\n  rabbitmq_web_dispatch\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),a._v(" 3 plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\nOffline change"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" changes will take effect at broker restart"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("p",[a._v("根据提示重启一下RabbitMQ服务，打开浏览器 http://localhost:15672/ ，使用 guest/guest 默认账户进行登录")]),a._v(" "),t("h3",{attrs:{id:"rabbitmq端口配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq端口配置"}},[a._v("#")]),a._v(" RabbitMQ端口配置")]),a._v(" "),t("p",[a._v("在服务器上需要关闭防火墙或配置端口入站规则")]),a._v(" "),t("p",[a._v("4369, 5672, 5671, 25672, 35672-35682, 15672, 61613, 61614, 1883, 8883, 15674, 15675")]),a._v(" "),t("p",[a._v("端口描述查看官网地址进了解: https://www.rabbitmq.com/install-windows.html")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20200730111923111.png",alt:"image-20200730111923111"}})]),a._v(" "),t("h3",{attrs:{id:"rabbitmq数据存储目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq数据存储目录"}},[a._v("#")]),a._v(" RabbitMQ数据存储目录")]),a._v(" "),t("p",[a._v("在环境变量中已经配置了RabbitMQ批处理脚本，这边可以直接执行")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("// "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(", 移除当前服务\nrabbitmq-service remove\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(", 设置数据目录\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RABBITMQ_BASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("RABBITMQ_SERVER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("DATA\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(", 重新服务安装\nrabbitmq-service "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(", 启动服务\nrabbitmq-service start\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(", 关闭RABBIT节点并重置\nrabbitmqctl stop_app\nrabbitmqctl reset\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(", 安装在线管理插件\nrabbitmq-plugins "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq_management\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(", 启动节点\nrabbitmqctl start_app\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(", 重启服务\nrabbitmq-service stop\nrabbitmq-service start\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br")])]),t("h3",{attrs:{id:"rabbitmq-management添加用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-management添加用户"}},[a._v("#")]),a._v(" RabbitMQ-Management添加用户")]),a._v(" "),t("p",[a._v("登录控制台地址 http://localhost:15672/ ，选择admin模块")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20200730114755059.png",alt:"image-20200730114755059"}})]),a._v(" "),t("p",[a._v("在 [ Add a user ] 选项卡中填写用户基本信息，填写完毕后在列表中点击刚才添加的用户 test")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20200730114918260.png",alt:"image-20200730114918260"}})]),a._v(" "),t("p",[a._v("赋予 test 相关的权限内容")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20200730115013417.png",alt:"image-20200730115013417"}})]),a._v(" "),t("p",[a._v("然后重新使用 test 即可进行重新登录")]),a._v(" "),t("h2",{attrs:{id:"过程中遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过程中遇到的问题"}},[a._v("#")]),a._v(" 过程中遇到的问题")]),a._v(" "),t("p",[a._v("在使用 rabbitmqctl 命令时可能会出现 erlang.cookie 的问题，根据官网中的提示因为账户不一致的情况出现的这个问题。尝试使用一下解决方法，然后重新执行命令")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("// 拷贝文件\nC:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Windows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("system32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("systemprofile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("erlang.cookie\n\n// 移动文件 , administrator为当前系统登录\nC:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("administrator\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);