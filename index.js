const kg = [
  { id: '前端', neighbors: ['语言', '端', '计算机科学', '性能'] },
  { id: '语言', neighbors: ['JS', 'CSS', 'HTML', 'TS'] },
  { id: '端', neighbors: ['浏览器', '服务器', '移动端'] },
  { id: 'JS', neighbors: ['JS 基础', 'JS 框架', 'JS 性能优化'] },

  { id: 'TS', neighbors: ['泛型', 'TS 类型', 'namespace', '静态类型', 'declare', 'interface', 'getter/setter'] },
  { id: 'declare', neighbors: ['三方库'], data: '当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。如果某个 NPM 包没有声明文件，可以 declare module xxx。如果某个全局变量没有声明，可以 declare var xxx' },
  { id: '静态类型', neighbors: ['强类型'], data: '静态类型是指声明变量时候，必须指定类型。强类型是指不支持像 JS 那样的类型隐式转换' },
  { id: '强类型', neighbors: ['隐式转换'] },
  { id: '泛型', neighbors: ['约束类型', '索引类型'], data: '泛型通常可以和约束类型（extends）和索引类型（keyof）搭配使用' },
  { id: 'TS 类型', neighbors: ['void', 'unknown', 'tuple', 'object', 'never'] },
  { id: 'unknown', neighbors: [], data: '对 unknown 操作（例如 console.log 或者赋值操作）前会检查，any 不会' },
  { id: 'never', neighbors: [], data: '拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常。' },
  { id: 'namespace', neighbors: [], data: 'TS 中没有 import 或者 export 的文件是全局可见的，无法重复命名，namespace 用来解决重复命名问题，引用时候就像对象一样' },
  { id: 'interface', neighbors: ['type'], data: 'interface 和 type 都可以声明对象和函数，都支持 extends，但是 type 可以声明基本类型，interface 不行。interface 可以重复声明并合并，type 不行。' },
  { id: 'getter/setter', neighbors: ['proxy'] },

  { id: 'HTML', neighbors: ['doctype', '块级元素', '行内元素', '空元素', 'HTML5'] },
  { id: '行内元素', neighbors: ['a'] },
  { id: 'HTML5', neighbors: ['canvas', 'audio', 'video', '语义化', '表单控件', 'web worker', '拖拽', 'history'] },
  { id: 'a', neighbors: ['_blank', '_self', '_parent', '_top'] },

  { id: 'JS 基础', neighbors: ['声明', '继承', '异步', '类型', '作用域', '精度', '优先级'] },
  { id: '声明', neighbors: ['var', 'let', 'const', 'function'] },
  { id: '箭头函数', neighbors: ['this', 'new', 'yield', 'arguments', 'function'] },
  { id: '常量', neighbors: ['const'] },
  { id: '变量', neighbors: ['var', 'let', 'function'] },
  { id: '块级作用域', neighbors: ['const', 'let'] },
  { id: 'const', neighbors: ['defineProperty'], data: '可以用 es5 的 Object.defineProperty 模拟 const' },
  { id: 'defineProperty', neighbors: ['proxy'] },
  { id: 'let', neighbors: ['闭包'], data: '可以用 es5 的闭包或者立即执行函数模拟 let' },
  { id: '块级作用域', neighbors: ['const', 'let'] },
  { id: '变量提升', neighbors: ['var', 'function'] },
  { id: '重复声明', neighbors: ['var', 'function'] },
  { id: '继承', neighbors: ['ES5 继承', 'ES6 继承', '原型链'] },
  { id: 'ES5 继承', neighbors: ['prototype', 'this'] },
  { id: 'ES6 继承', neighbors: ['class', 'super', 'extends'] },
  { id: 'class', neighbors: ['严格模式', '常量', 'new', '变量提升'] },
  { id: 'private', neighbors: ['Symbol', '闭包'] },
  { id: '严格模式', neighbors: [], data: '引用一个未声明的变量会报错' },
  { id: 'new', neighbors: ['prototype', 'this', '实例'] },
  { id: '原型链', neighbors: ['proto', 'prototype', '链表', 'Object.create()'] },
  { id: '异步', neighbors: ['callback', 'promise', '宏任务', '微任务', '事件循环', '线程', '非阻塞', 'web worker'] },
  { id: 'web worker', neighbors: ['内存', '计算密集型'] },
  { id: '微任务', neighbors: ['promise', 'async', 'MutationObserver', 'Object.observe'] },
  { id: '宏任务', neighbors: ['setTimeout', 'I/O', '进程', '浏览器渲染'], data: '整个函数体也是宏任务' },
  { id: 'setTimeout', neighbors: ['防抖', '节流'] },
  { id: 'async', neighbors: ['generator', 'promise'] },
  { id: 'generator', neighbors: ['yield', 'next'] },
  { id: 'this', neighbors: ['bind', 'apply', 'call', '实例'] },
  { id: '类型', neighbors: ['基本类型', '引用类型', '类数组', '隐式转换'] },
  { id: '隐式转换', neighbors: ['valueOf', 'toString'], data: '== 时候会进行隐式转换，加减乘除时候也会隐式转换，加变字符串，减乘除变数字' },
  { id: '类数组', neighbors: ['arguments', 'NodeList', 'length', 'Array.from'] },
  { id: '作用域', neighbors: ['全局作用域', '函数作用域', '块级作用域'] },
  { id: '函数作用域', neighbors: ['闭包',] },
  { id: '精度', neighbors: ['进制转换', 'BigInt'], data: '表现：0.1+0.2!==0.3 \n原因：小数在进制转换时候出现循环，丢失了精度。\n解法：变成整数相加再除回去' },
  { id: '优先级', neighbors: [], data: '属性赋值最高，连等操作，从右往左' },

  { id: 'JS 框架', neighbors: ['React', 'Redux', 'babel', 'webpack', 'react-router'] },
  { id: 'webpack', neighbors: ['loader', 'plugin', '构建优化'] },
  { id: 'React', neighbors: ['DIFF', '虚拟 DOM', 'React 新特性', 'React 优化', '合成事件', '生命周期', 'setState'] },
  { id: 'setState', neighbors: ['队列'] },
  { id: '生命周期', neighbors: [], data: 'React 生命周期主要是 render（构建虚拟 DOM）和 commit（虚拟 DOM变成真 DOM）。render 是先父再子，因为子依赖父传来的 props。commit（挂载和卸载） 是先子再父，因为要一把梭，减少重排。' },
  { id: '合成事件', neighbors: ['兼容性', '事件代理'], data: 'React 合成事件将所有事件都挂到顶层，利用冒泡来触发，触发后自己又模拟实现了冒泡，把上层元素的事件都触发一遍。' },
  { id: 'react-router', neighbors: ['browserHistory', 'hashHistory'], data: '推荐用browserHistory，原因：1、有现成的 HTML5 History API 修改浏览器历史，而非修改 hash。2、后端无法感知 hash。3、部分应用会丢弃 hash。' },
  { id: 'browserHistory', neighbors: ['history', 'popstate'] },
  { id: 'hashHistory', neighbors: ['hashChange'] },
  { id: 'React 优化', neighbors: ['SSR', '缓存', '懒加载'] },
  { id: '组件通信', neighbors: ['props', 'context', '发布订阅'] },
  { id: 'DIFF', neighbors: ['树', 'key', 'class'], data: '算法策略：1、树：同层比较。2、层：通过 key 减少增删。3、节点：同类比较。\n算法复杂度：n^3 降到 n。' },
  { id: '虚拟 DOM', neighbors: ['重排', '跨平台', 'DOM 操作'], data: '优点：1、减少重排。2、避免 DOM 操作。3、跨平台。\n缺点：无法极致优化。' },
  { id: '跨平台', neighbors: ['React Native', 'Node.js'] },
  { id: 'React 新特性', neighbors: ['hooks', 'fiber', 'portal', 'fragment', 'React.Profiler', 'Suspense', 'useTransition'] },
  { id: 'Suspense', neighbors: ['React.lazy'] },
  { id: 'React.lazy', neighbors: ['懒加载'] },
  { id: 'hooks', neighbors: ['链表', '闭包', 'useRef', 'useEffect'], data: '1、顺序存到链表中，所以 hooks 不能放到循环和条件块中。2、hooks 靠闭包实现状态读写。所以也会遇到闭包的一些缺点，如 useEffect 里的 state 不是最新，必须将 state 放到依赖中，或者用 useRef。' },
  { id: 'useRef', neighbors: ['debounce', '非受控组件'] },
  { id: 'useEffect', neighbors: ['useLayoutEffect', '异步'], data: 'useEffect 是异步的，useLayoutEffect 是同步的' },
  { id: 'fiber', neighbors: ['卡顿', '异步', 'DIFF'], data: 'what：核心算法的重新实现。why：同步 diff带来的卡顿问题。how：render 改为异步、设置优先级' },
  { id: '表单', neighbors: ['受控组件', '非受控组件'], },
  { id: '受控组件', neighbors: ['defaultValue'], },
  { id: 'babel', neighbors: ['AST'], },
  { id: 'AST', neighbors: ['树', 'PostCSS'], },
  { id: 'Redux', neighbors: ['store', 'action', 'reducer', 'middleware', '发布订阅', 'react-redux'], },
  { id: 'middleware', neighbors: ['compose', 'redux-thunk', 'redux-logger'], data: 'middleware 是通过 compose 串联的，compose 就像是管道，action 作为参数在 compose 的管道里不断被加工' },
  { id: 'react-redux', neighbors: ['context', 'connect'], data: '用 context 传递 store 和 subscription，store 变化时候 subscription 被调用，更新 state，并将 state 传递给子组件。' },
  { id: 'connect', neighbors: ['hoc'], },
  { id: 'redux-thunk', neighbors: ['副作用'], data: '原始 redux 的 dispatch 只支持传递 plain object，该中间件使 dispatch 支持传递带 dispatch 等参数的函数，来方便延迟执行 dispatch，进而支持副作用（异步）。' },

  { id: 'CSS', neighbors: ['CSS 基础', 'CSS 应用', 'CSS 性能优化'] },
  { id: 'CSS 基础', neighbors: ['BFC', '盒模型', 'CSS3', 'CSS 预处理器', 'CSS 引入', '兼容性', '响应式',] },
  { id: 'CSS 预处理器', neighbors: ['less', 'sass'] },
  { id: 'CSS 引入', neighbors: ['link', '@import'] },
  { id: '盒模型', neighbors: ['box-sizing'] },
  { id: 'CSS3 动画', neighbors: ['animation', 'transition', 'GPU'], data: '即便在2d上，也能用 translate3d 或 scaleZ 进行 GPU 加速。' },
  { id: '动画', neighbors: ['CSS3 动画', 'JS 动画', '图片动画'] },
  { id: 'JS 动画', neighbors: ['requestAnimationFrame', 'setTimeout'], data: '推荐使用 raf 替代 setTimeout，因为 setTimeout 每帧可能执行n次，不节能，还容易跳帧。如果事件队列里有很多任务，setTimeout 也有可能会掉帧。' },
  { id: '图片动画', neighbors: ['GIF', '精灵图', 'APNG', 'WebP', 'SVG Animation', 'Lottie'] },
  { id: '精灵图', neighbors: ['animation'], data: '类似雪碧图，配合 animation-timing-function: step(n) 来播放图片' },
  { id: 'APNG', neighbors: [], data: '相比 GIF，支持透明度，没有白边，体积更小，更多颜色。' },
  { id: 'Lottie', neighbors: [], data: '国外用的非常多，AirBnb 出品。图片资源和动作数据分离。可以在 AE 上添加插件 BodyMovin，直接导出 json 传给 lottie，使用简单。' },
  { id: 'CSS 应用', neighbors: ['布局', '清除浮动', 'CSS 画图', '空格', '省略号'] },
  { id: '空格', neighbors: ['white-space', 'word-spacing', 'letter-spacing'], data: 'letter-spacing 和 word-spacing 用于控制字符和单词（空格）之间的间距，white-space 用于控制空白字符（空格、换行、Tab、Enter等），常用于控制是否换行' },
  { id: 'less', neighbors: ['嵌套', '变量', '混入', '运算', '函数'] },
  { id: '兼容性', neighbors: ['CSS 初始化', 'CSS 私有属性', 'CSS Hack'] },
  { id: 'CSS 初始化', neighbors: [], data: '例如：normalize.css' },
  { id: 'CSS 私有属性', neighbors: ['Autoprefixer'], data: '例如：-webkit-、-moz-' },
  { id: 'CSS Hack', neighbors: [], data: '例如：if endif' },
  { id: '响应式', neighbors: ['媒体查询', '百分比', 'flex', 'rem', '视口单位', 'viewport', 'dpr'] },
  { id: 'dpr', neighbors: ['设备像素', '设备独立像素'], data: 'dpr=设备像素/设备独立像素' },
  { id: '1px 问题', neighbors: ['dpr'], data: 'dpr 大于1的设备，用 rem 算的不是很准，浏览器也有兼容问题，解法：1、viewport 动态调整 initial-scale，避免出现0.5px。2、伪元素+transform。3、图片。' },
  { id: 'BFC', neighbors: ['display', 'postion', 'float', 'overflow', '外边距塌陷', '清除浮动', '多栏布局'], data: '1、BFC 不和 float 重叠。2、BFC 内部的 block box 的margin会重叠。3、BFC 之间的距离是由margin 决定的。4、BFC 内的 float 会参与高度计算。' },
  { id: 'float', neighbors: [], data: 'float 元素会脱离文档流，向左右浮动，后面的非 BFC 元素会占据 float 元素的位置' },
  { id: '清除浮动', neighbors: ['clear'] },
  { id: 'clear', neighbors: ['::after'] },
  { id: '@import', neighbors: [], data: '1.link是HTML标签，@import是css提供的。\n2.link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载。\n3.link没有兼容性问题，@import不兼容ie5以下。\n4.link可以通过js操作DOM动态引入样式表改变样式，而@import不可以。' },
  { id: 'box-sizing', neighbors: ['content-box', 'border-box'], data: 'content-box 的实际宽度是 width+padding+border，而border-box的实际宽度就是 width。' },
  { id: 'content-box', neighbors: ['padding', 'border'] },
  { id: 'CSS 画图', neighbors: ['正方形', '三角形', '扇形'] },
  { id: '扇形', neighbors: ['border-radius'], },
  { id: '正方形', neighbors: ['vw', 'padding', '百分比'], data: 'padding的百分比是相对于父元素宽度，因此可以用百分比配合padding实现自适应正方形' },
  { id: '三角形', neighbors: ['border'], data: 'border-color: green transparent transparent transparent' },
  { id: '省略号', neighbors: [], data: '单行用 text-overflow: ellipsis。多行用 display: -webkit-box、-webkit-box-orient: vertical、-webkit-line-clamp: 3' },
  { id: '布局', neighbors: ['多栏布局', '栅格布局', '等高布局', '垂直居中', '重排'] },
  { id: '多栏布局', neighbors: ['float', 'absolute', 'margin', 'BFC', 'flex'] },
  { id: '栅格布局', neighbors: ['float', '百分比', 'flex'] },
  { id: '等高布局', neighbors: ['table', 'flex'] },
  { id: '垂直居中', neighbors: ['absolute', 'flex', 'line-height'] },
  { id: 'CSS3', neighbors: ['CSS3 动画', 'border-radius', 'box-shadow', 'text-shadow', 'text-overflow', 'transform', '媒体查询'] },
  { id: 'transform', neighbors: ['translate', 'scale', 'rotate', 'skew'] },
  { id: 'animation', neighbors: ['keyframes'] },
  { id: 'transition', neighbors: [':hover', ':focus'] },
  { id: '伪类', neighbors: [':hover', ':focus', ':nth-child()', ':first-child', ':last-child', ':nth-of-type()', ':first-of-type', ':last-of-type', ':not'] },
  { id: '伪元素', neighbors: ['::before', '::after'] },
  { id: '冒号', neighbors: ['伪类', '伪元素'] },

  { id: '计算机科学', neighbors: ['数据结构与算法', '网络'] },
  { id: '数据结构与算法', neighbors: ['数据结构', '算法'] },
  { id: '数据结构', neighbors: ['栈', '队列', '集合', '字典', '链表', '树', '二叉树', '图'] },
  { id: '栈', neighbors: ['括号', '文件路径', '进制转换'] },
  { id: '算法', neighbors: ['排序', '搜索', '分治', '动态规划', '回溯', '贪心'] },
  { id: '贪心', neighbors: ['发饼干'] },
  { id: '排序', neighbors: ['冒泡排序', '选择排序', '归并排序', '快速排序'] },
  { id: '搜索', neighbors: ['顺序', '二分'] },
  { id: '分治', neighbors: ['二叉树', '归并排序', '快速排序'] },
  { id: '动态规划', neighbors: ['爬楼梯', 'N-Sum', '斐波那契数列'] },
  { id: '回溯', neighbors: ['全排列'] },

  { id: '性能', neighbors: ['性能优化', '性能检测'] },
  { id: '性能优化', neighbors: ['CSS 性能优化', 'JS 性能优化', 'React 优化', '构建优化', '网络优化'] },
  { id: '性能检测', neighbors: ['线上监控', '开发调试'] },
  { id: '线上监控', neighbors: ['easy-monitor', 'window.performace', 'FPS'] },
  { id: 'easy-monitor', neighbors: ['alinode'] },
  { id: 'requestAnimationFrame', neighbors: ['JS 动画', 'FPS', '节流'], data: 'requestAnimationFrame的优势，由系统来决定回调函数的执行时机，不同刷新率会有不同的间隔。更节能（用 raf 一帧一次，用 setTimeout 一帧可能 n 次）、更流畅（setTimeout 执行太快导致抖动）。应用于：1、JS 动画。2、计算 FPS。3、Scroll 节流（和 throttle 二选一）等。' },
  { id: 'FPS', neighbors: ['卡顿'] },
  { id: '开发调试', neighbors: ['performace 选项卡', 'memory 选项卡', 'lighthouse'] },
  { id: 'lighthouse', neighbors: ['性能报告'] },
  { id: 'CSS 性能优化', neighbors: ['选择器', 'CSS 重排'] },
  { id: 'JS 性能优化', neighbors: ['重排', '防抖', '节流'] },
  { id: '防抖', neighbors: ['联想搜索'] },
  { id: '节流', neighbors: ['onScroll'] },
  { id: '构建优化', neighbors: ['tree shaking', '缓存', 'splitChunks'] },
  { id: '网络优化', neighbors: ['打包', '压缩', '非阻塞', '缓存', '懒加载', 'SSR', '骨架屏', '预加载'] },
  { id: '预加载', neighbors: ['preload', 'prefetch'] },
  { id: '懒加载', neighbors: ['IntersectionObserver', '代码分割'] },
  { id: '打包', neighbors: ['多路复用'] },
  { id: '非阻塞', neighbors: ['defer', 'async', '服务器推送'] },
  { id: '缓存', neighbors: ['HTTP 缓存', 'service worker', '字典'] },
  { id: 'HTTP 缓存', neighbors: ['强缓存', '协商缓存'] },
  { id: 'defer', neighbors: [], data: 'DOM 加载完后才执行' },
  { id: 'tree shaking', neighbors: ['ESM'], data: '只有 ESM 可以 tree shaking，因为 CJS 的 require 是动态的，无法在实际运行前判断需要或者不需要某些模块' },
  { id: '选择器', data: '包括：通配符选择器、标签选择器、class 选择器、id 选择器、属性选择器、后代选择器、子选择器、一般兄弟选择器、紧邻兄弟选择器。\n优化：1、避免嵌套3层以上。2、避免通配符和属性选择器。3、用了id就没必要再嵌套了，因为是从右向左匹配的。' },
  { id: '重排', neighbors: ['CSS 重排', 'JS 重排'] },
  { id: 'CSS 重排', neighbors: ['transform', 'visibility', '动画'], data: 'transform 替代 top，visibility 替代 display，动画放到 absolute 或者 fixed 的元素上，可以减少重排' },
  { id: 'JS 重排', neighbors: ['fragment', 'className', '缓存'] },

  { id: '浏览器', neighbors: ['浏览器存储','浏览器渲染', 'BOM', '跨域'] },
  { id: '浏览器渲染', neighbors: ['DOM', 'CSSOM', 'Render Tree', '布局', '绘制', '合成'] },
  { id: 'Render Tree', neighbors: [], data: 'Render Tree 由 DOM 和 CSSOM 合并而成。' },
  { id: '绘制', neighbors: ['重绘'] },
  { id: '布局', neighbors: ['重排'] },
  { id: '合成', neighbors: ['GPU'], data: '布局和绘制后，会产生多个图层，需要合成后才显示出来。某些层可以用 GPU 加速，只需要使用一些 CSS 属性就能触发，比如 translate3d、scaleZ、opacity、filter 等' },
  { id: '浏览器存储', neighbors: ['cookie', 'localStorage', 'sessionStorage'] },
  { id: 'JSBridge', neighbors: ['scheme', 'iframe', 'window', 'webview'], data: 'Web 调 Native：1、iframe + scheme。2、向 window 上注入变量。Native 调 Web：用 webview 的 API 执行 JS 代码' },
  { id: 'PWA', neighbors: ['service worker', 'manifest'] },
  { id: 'service worker', neighbors: ['代理', '离线存储', 'web push'] },
  { id: 'manifest', neighbors: [], data: '一个存储信息的 JSON 文件，可以用于生成图标' },
  { id: 'BOM', neighbors: ['navigator', 'location', 'history', 'window'] },
  { id: 'DOM', neighbors: ['事件', 'DOM 操作'] },
  { id: 'DOM 操作', neighbors: ['线程'], data: '为了防止两个线程同时操作 DOM，因此 JS 被设计为单线程'},
  { id: '事件', neighbors: ['冒泡', '捕获', '点击穿透'] },
  { id: '冒泡', neighbors: ['事件代理'] },
  { id: '捕获', neighbors: ['addEventListener'] },
  { id: '点击穿透', neighbors: ['touchstart', 'touchend'] },
  { id: '跨域', neighbors: ['CORS', 'JSONP', 'iframe'] },
  { id: 'CORS', neighbors: ['access-control-allow-origin', 'options'] },
  { id: 'options', neighbors: [], data: '作用：1、获取支持的方法。2、CORS 中预检请求。' },
  { id: '移动端', neighbors: ['Native App', 'WebApp', 'React Native', 'Hybrid App'] },
  { id: 'React Native', neighbors: ['Weex', 'Rax', 'Lynx', 'JSBridge'], data: '使用 React 语言写原生界面，js 通过 JSBridge 调用底层 API' },
  { id: 'WebApp', neighbors: ['PWA', 'JSBridge'] },
  { id: 'Hybrid App', neighbors: ['JSBridge'] },
  { id: 'JS 引擎', neighbors: ['v8', 'JavaScriptCore'] },
  { id: 'JavaScriptCore', neighbors: ['React Native', 'Weex'] },

  { id: '服务器', neighbors: ['静态服务器', '数据库', '进程', '线程', '内存', 'Node.js', 'Docker'] },
  { id: 'Node.js', neighbors: ['流', 'Buffer'] },
  { id: 'Buffer', neighbors: ['二进制'], data: 'Node.js 操作二进制数据时候，会开辟一个缓冲区，用来存放二进制数据。' },
  { id: '流', neighbors: ['读写', 'SSR', '内存'] },
  { id: '内存', neighbors: ['内存泄漏'] },
  { id: '内存泄漏', neighbors: ['全局变量', '事件监听', '闭包', 'memory 选项卡'] },
  { id: '进程', neighbors: [], data: '进程和线程的区别：1、进程是资源分配的最小单元，线程是任务调度的最小单元。2、进程包含线程。3、进程挂了不会影响其他进程，但是线程挂了，整个进程都会挂。4、线程可以共享内存，进程无法共享。' },
  { id: '静态服务器', neighbors: ['content-type', '压缩', '缓存', 'http-server'] },
  { id: 'http-server', neighbors: ['CORS', '代理', 'cert.pem', 'key.pem'] },

  { id: '网络', neighbors: ['安全', '应用层', '传输层'] },
  { id: '应用层', neighbors: ['HTTP', 'DNS'] },
  { id: '传输层', neighbors: ['TCP', 'UDP'], data: 'TCP 和 UDP 区别：1、连接；2、可靠；3、通信对象个数；4、传输方式（tcp是字节流，udp是报文）；5、头部开销（tcp大）；6、应用（udp快，适合实时应用；tcp可靠，适合文件传输）' },
  { id: 'DNS', neighbors: ['UDP', 'TCP'], data: '浏览器DNS缓存-操作系统DNS缓存-本地域名服务器-本地域名服务器问根域名服务器-本地域名服务器问顶级域名服务器-本地域名服务器问权限域名服务器' },
  { id: 'TCP', neighbors: ['三次握手', '四次挥手'], data: 'TCP 通过校验和、确认应答序列号、超时重传保证可靠性。三次握手是：开始-ok/开始-ok。四次挥手是：结束-ok-结束-ok。之所以挥手需要多一次是因为服务端给客户端传输的数据可能还没结束，因此不能像握手一样同时说“ok/结束”'},
  { id: 'HTTP', neighbors: ['状态码', '头', '方法', 'HTTPS', 'HTTP2'] },
  { id: '状态码', neighbors: ['重定向', '成功', '客户端失败', '服务端失败'] },
  { id: '重定向', neighbors: ['301', '302'], data: '301 永久、302 临时' },
  { id: '成功', neighbors: ['200', '201', '304'], data: '200 成功，201 成功创建，304 没有修改' },
  { id: '304', neighbors: ['协商缓存'] },
  { id: '客户端失败', neighbors: ['400', '401', '403', '404'], data: '400语法错误，401认证失败，403授权失败，404没找到。' },
  { id: '服务端失败', neighbors: ['500', '503'], data: '500 内部错误，503 暂不可用' },
  { id: '头', neighbors: ['缓存', 'content-type', 'cookie', 'connection'] },
  { id: 'connection', neighbors: ['keep-alive', '长链接'], data: '数据传输完成了保持TCP连接不断开，方便：1、使用这个长连接处理其他请求。2、利用这个连接 主动推送 消息到客户端' },
  { id: '缓存', neighbors: ['强缓存', '协商缓存'] },
  { id: '强缓存', neighbors: ['expires', 'cache-control'], data: 'cache-control 更精确' },
  { id: '协商缓存', neighbors: ['etag', 'last-modified'], data: 'etag 准确但是要计算，last-modified 不准确但不需要计算' },
  { id: 'etag', neighbors: ['签名', 'if-none-match'] },
  { id: 'last-modified', neighbors: ['if-modified-since'] },
  { id: 'cookie', neighbors: ['cookie 应用', 'set-cookie'] },
  { id: 'cookie 应用', neighbors: ['sessionid'] },
  { id: 'set-cookie', neighbors: ['expires', 'domain', 'path', 'httpOnly', 'secure'] },
  { id: '方法', neighbors: ['get', 'post', 'delete', 'put', 'options'], data: 'get、post 本质是一样的，区别包括：场景、缓存、方法名、数据传输位置' },
  { id: 'get', neighbors: ['缓存'] },
  { id: 'HTTPS', neighbors: ['证书'], data: 'https 中的非对称加密只是为了让服务端知道密码，对称加密才是真正用来加密传输内容的' },
  { id: '证书', neighbors: ['CA', 'openssl', 'cert.pem'], data: 'SSL证书可以向CA机构通过付费的方式申请，也可以自己制作。' },
  { id: 'HTTP2', neighbors: ['二进制', '头部压缩', '多路复用', '服务器推送'], data: 'HTTP1 是文本协议，HTTP2是二进制协议，HTTP2 的出现导致很多之前的优化方法都不需要了：合并文件、雪碧图被多路复用干掉了，内联资源被服务器推送干掉了' },

  { id: '安全', neighbors: ['攻击', '加密', '编码', '签名', '认证'] },
  { id: '攻击', neighbors: ['CSRF', 'XSS'] },
  { id: 'CSRF', neighbors: ['Token', 'SameSite'] },
  { id: 'XSS', neighbors: ['dangerouslySetInnerHTML', 'httpOnly'] },
  { id: '加密', neighbors: ['对称加密', '非对称加密'] },
  { id: '对称加密', neighbors: ['Token', 'HTTPS', 'DES', 'RC4'] },
  { id: '非对称加密', neighbors: ['公钥', '私钥', 'HTTPS', 'SSH', 'RSA'] },
  { id: '公钥', neighbors: ['cert.pem'] },
  { id: '私钥', neighbors: ['key.pem'] },
  { id: '签名', neighbors: ['MD5', 'SHA1', '加盐', '不可逆', '密码', 'JWT'] },
  { id: '编码', neighbors: ['base64', 'JWT'] },
  { id: '认证', neighbors: ['cookie', 'JWT', '单点登录'] },
  { id: 'session', neighbors: ['状态', '数据库', '内存', '分布式', 'sessionid'] },
  { id: 'JWT', neighbors: ['状态', 'expires'] },
  { id: '函数计算', neighbors: ['状态'] },
  { id: '单点登录', neighbors: ['cookie', 'domain', '一级域名', '认证中心'] },
  { id: '认证中心', neighbors: ['Token', '对称加密'] },
];
window.onload = () => {
  const descContainerEl = document.querySelector('#desc-container');

  const graph = Viva.Graph.graph();

  const graphics = Viva.Graph.View.svgGraphics();

  for (let n of kg) {
    graph.addNode(n.id, n.data);
    for (let nei of n.neighbors || []) { graph.addLink(n.id, nei); }
  }

  graphics.node(function (node) {
    const ui = Viva.Graph.svg('g').attr('class', 'node-g'),
      circle = Viva.Graph.svg('circle').attr('r', 5).attr('fill', '#00a2e8'),
      svgText = Viva.Graph.svg('text').attr('y', '-8px').attr('x', '-6px').text(node.id);
    
    const highlightNode = function(nodeId, isOn){
      var nodeUI = graphics.getNodeUI(nodeId);
        if (nodeUI) {
          // nodeUI is a UI object created by graphics below
          nodeUI.firstChild.attr('fill', isOn ? 'red' : '#00a2e8');
          nodeUI.lastChild.attr('fill', isOn ? 'red' : 'black');
        }
    }

    const highlightRelatedNodes = function (nodeId, isOn) {
      highlightNode(nodeId, isOn);
      // just enumerate all realted nodes and update link color:
      graph.forEachLinkedNode(nodeId, function (node, link) {
        var linkUI = graphics.getLinkUI(link.id);
        if (linkUI) {
          // linkUI is a UI object created by graphics below
          linkUI.attr('stroke', isOn ? 'red' : 'gray');
        }
        highlightNode(node.id, isOn)
      });
    };
    ui.addEventListener('mouseover', function () { // mouse over
      highlightRelatedNodes(node.id, true);
    });
    ui.addEventListener('mouseout', function () { // mouse out
      highlightRelatedNodes(node.id, false);
    });
    ui.addEventListener('click', () => {
      descContainerEl.innerHTML = node.data ? `
      <div id="desc">
<b>${node.id}</b>

${node.data}
      </div>
        `: '';
    });
    ui.append(circle);
    ui.append(svgText);
    return ui;
  })
    .placeNode(function (nodeUI, pos) {
      nodeUI.attr('transform', `translate(${pos.x}, ${pos.y})`);
    });


  // const layout = Viva.Graph.Layout.forceDirected(graph, {
  //   springLength: 200,
  //   springCoeff: 0.0005,
  //   dragCoeff: 0.02,
  //   gravity: -1.2
  // });

  const renderer = Viva.Graph.View.renderer(graph, {
    // layout: layout,
    graphics
  });
  renderer.run();

  document.querySelector('#statistic-container').innerHTML = `节点数量：${graph.getNodesCount()}
边数量：${graph.getLinksCount()}`;
}