const kg = [
  { id: '前端', neighbors: ['语言', '端', '计算机科学', '性能'] },
  { id: '语言', neighbors: ['JS', 'CSS', 'HTML'] },
  { id: '端', neighbors: ['浏览器', '服务器', '移动端'] },
  { id: 'JS', neighbors: ['JS 基础', 'JS 框架', 'JS 性能优化'] },

  { id: 'HTML', neighbors: ['doctype', '块级元素', '行内元素', '空元素', 'HTML5'] },
  { id: '行内元素', neighbors: ['a'] },
  { id: 'HTML5', neighbors: ['canvas', 'audio', 'video', '语义化', '表单控件', 'web worker', '拖拽'] },
  { id: 'a', neighbors: ['_blank', '_self', '_parent', '_top'] },

  { id: 'JS 基础', neighbors: ['声明', '继承', '异步', '类型', '作用域', '精度', '优先级'] },
  { id: '声明', neighbors: ['var', 'let', 'const', 'function'] },
  { id: '箭头函数', neighbors: ['this', 'new', 'yield', 'arguments', 'function'] },
  { id: '常量', neighbors: ['const'] },
  { id: '变量', neighbors: ['var', 'let', 'function'] },
  { id: '块级作用域', neighbors: ['const', 'let'] },
  { id: '变量提升', neighbors: ['var', 'function'] },
  { id: '重复声明', neighbors: ['var', 'function'] },
  { id: '继承', neighbors: ['ES5 继承', 'ES6 继承', '原型链'] },
  { id: 'ES5 继承', neighbors: ['prototype', 'this'] },
  { id: 'ES6 继承', neighbors: ['class', 'super', 'extends'] },
  { id: 'super', neighbors: ['构造函数', '静态方法'] },
  { id: 'class', neighbors: ['严格模式', '常量', 'new', '变量提升'] },
  { id: 'private', neighbors: ['Symbol', '闭包'] },
  { id: '严格模式', neighbors: [], data: '引用一个未声明的变量会报错' },
  { id: 'new', neighbors: ['prototype', 'this', '实例'] },
  { id: '原型链', neighbors: ['proto', 'prototype', '链表', 'Object.create()'] },
  { id: '异步', neighbors: ['callback', 'promise', 'async', '宏任务', '微任务', '队列', '事件循环', '线程', '非阻塞', 'web worker'] },
  { id: 'web worker', neighbors: ['内存', '计算密集型'] },
  { id: '微任务', neighbors: ['promise', 'async'] },
  { id: '宏任务', neighbors: ['setTimeout', 'I/O'], data: '整个函数体也是宏任务' },
  { id: 'setTimeout', neighbors: ['防抖', '节流'] },
  { id: 'async', neighbors: ['generator'] },
  { id: 'generator', neighbors: ['yield', 'next'] },
  { id: 'this', neighbors: ['bind', 'apply', 'call', '实例'] },
  { id: '类型', neighbors: ['基本类型', '引用类型', '类数组', '隐式转换'] },
  { id: '隐式转换', neighbors: ['valueOf', 'toString'] },
  { id: '类数组', neighbors: ['arguments', 'NodeList', 'length', 'Array.from'] },
  { id: '作用域', neighbors: ['全局作用域', '函数作用域', '块级作用域'] },
  { id: '函数作用域', neighbors: ['闭包',] },
  { id: '精度', neighbors: ['进制转换', 'BigInt'], data: '表现：0.1+0.2!==0.3 \n原因：小数在进制转换时候出现循环，丢失了精度。\n解法：变成整数相加再除回去' },
  { id: '优先级', neighbors: [], data: '属性赋值最高，连等操作，从右往左' },

  { id: 'JS 框架', neighbors: ['React', 'babel', 'webpack'] },
  { id: 'webpack', neighbors: ['loader', 'plugin'] },
  { id: 'plugin', neighbors: ['tree shaking', '多进程'] },
  { id: 'React', neighbors: ['DIFF', '虚拟 DOM', 'React16', '表单', '组件通信', 'React 优化'] },
  { id: 'React 优化', neighbors: ['SSR', 'useMemo', 'useCallback', 'componentDidCatch'] },
  { id: '组件通信', neighbors: ['props', 'context', '发布订阅'] },
  { id: 'DIFF', neighbors: ['树', 'key', 'class'], data: '算法策略：1、树：同层比较。2、层：通过 key 减少增删。3、节点：同类比较。\n算法复杂度：n^3 降到 n。' },
  { id: '虚拟 DOM', neighbors: ['重排', '跨平台', 'DOM 操作'], data: '优点：1、减少重排。2、避免 DOM 操作。3、跨平台。\n缺点：无法极致优化。' },
  { id: '跨平台', neighbors: ['rax', 'Node.js'] },
  { id: 'rax', neighbors: ['weex'] },
  { id: 'JS 引擎', neighbors: ['v8', 'JavaScriptCore'] },
  { id: 'JavaScriptCore', neighbors: ['React Native', 'weex'] },
  { id: 'React16', neighbors: ['hooks', 'fiber', 'portal', 'fragment', 'React.Profiler', 'Suspense'] },
  { id: 'hooks', neighbors: ['链表'], data: '1、顺序存到链表中，所以 hooks 不能放到循环和条件块中。2、链表相比数组擅长增删。' },
  { id: 'fiber', neighbors: ['卡顿', '异步', 'DIFF'], data: 'what：核心算法的重新实现。why：同步 diff带来的卡顿问题。how：改为异步、设置优先级' },
  { id: '表单', neighbors: ['受控组件', '非受控组件'], },
  { id: '受控组件', neighbors: ['defaultValue'], },
  { id: 'babel', neighbors: ['AST'], },
  { id: 'AST', neighbors: ['树'], },

  { id: 'CSS', neighbors: ['CSS 基础', 'CSS 应用', 'CSS 性能优化'] },
  { id: 'CSS 基础', neighbors: ['BFC', '盒模型', 'CSS3', 'CSS 预处理器', 'CSS 引入', '兼容性', '响应式',] },
  { id: 'CSS 预处理器', neighbors: ['less', 'sass'] },
  { id: 'CSS 引入', neighbors: ['link', '@import'] },
  { id: '盒模型', neighbors: ['box-sizing'] },
  { id: 'CSS3 动画', neighbors: ['animation', 'transition'] },
  { id: 'CSS 应用', neighbors: ['布局', '清除浮动', 'CSS 画图', '空格', '省略号'] },
  { id: '空格', neighbors: ['white-space', 'word-space', 'letter-space'] },
  { id: 'less', neighbors: ['嵌套', '变量', '混入', '运算', '函数'] },
  { id: '兼容性', neighbors: ['CSS 初始化', 'CSS 私有属性', 'CSS Hack'] },
  { id: 'CSS 初始化', neighbors: [], data: '例如：normalize.css' },
  { id: 'CSS 私有属性', neighbors: ['Autoprefixer'], data: '例如：-webkit-、-moz-' },
  { id: 'CSS Hack', neighbors: [], data: '例如：if endif' },
  { id: '响应式', neighbors: ['媒体查询', '百分比', 'flex', 'rem', '视口单位', 'viewport', 'dpr'] },
  { id: 'BFC', neighbors: ['display', 'postion', 'float', 'overflow', '外边距塌陷', '清除浮动', '多栏布局'], data: '1、BFC 不和 float 重叠。2、BFC 内部的 block box 的margin会重叠。3、BFC 之间的距离是由margin 决定的。4、BFC 内的 float 会参与高度计算。' },
  { id: 'float', neighbors: [], data: 'float 元素会脱离文档流，向左右浮动，后面的非 BFC 元素会占据 float 元素的位置' },
  { id: '清除浮动', neighbors: ['clear'] },
  { id: 'clear', neighbors: ['::after'] },
  { id: '@import', neighbors: [], data: '1.link是HTML标签，@import是css提供的。\n2.link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载。\n3.link没有兼容性问题，@import不兼容ie5以下。\n4.link可以通过js操作DOM动态引入样式表改变样式，而@import不可以。' },
  { id: 'box-sizing', neighbors: ['content-box', 'border-box'], data: 'content-box 的实际宽度是 width+padding+border，而border-box的实际宽度就是 width。' },
  { id: 'content-box', neighbors: ['padding', 'border'] },
  { id: 'CSS 画图', neighbors: ['正方形', '箭头', '三角形', '扇形'] },
  { id: '扇形', neighbors: ['border-radius'] },
  { id: '正方形', neighbors: ['vw', 'padding', '百分比'] },
  { id: '箭头', neighbors: ['border'] },
  { id: '三角形', neighbors: ['border'] },
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
  { id: '线上监控', neighbors: ['node-heapdump', 'window.performace', 'FPS'] },
  { id: '请求动画帧', neighbors: ['动画', 'FPS', '节流'], data: 'requestAnimationFrame的优势，在于充分利用显示器的刷新机制，比较节省系统资源。' },
  { id: 'FPS', neighbors: ['卡顿'] },
  { id: '开发调试', neighbors: ['performace 选项卡', 'memory 选项卡', 'lighthouse'] },
  { id: 'lighthouse', neighbors: ['性能报告'] },
  { id: 'CSS 性能优化', neighbors: ['选择器', '重排'] },
  { id: 'JS 性能优化', neighbors: ['重排', '防抖', '节流'] },
  { id: '防抖', neighbors: ['联想搜索'] },
  { id: '节流', neighbors: ['onScroll'] },
  { id: '构建优化', neighbors: ['resolve', '多进程', 'tree shaking', 'webpack'] },
  { id: '网络优化', neighbors: ['打包', '压缩', '非阻塞', '缓存', '懒加载', 'SSR', '骨架屏'] },
  { id: '懒加载', neighbors: ['offsetTop', 'clientHeight', 'scrollTop', 'IntersectionObserver'] },
  { id: '打包', neighbors: ['多路复用'] },
  { id: '非阻塞', neighbors: ['defer', 'async', '服务器推送'] },
  { id: '缓存', neighbors: ['HTTP 缓存', 'service worker', '字典'] },
  { id: 'HTTP 缓存', neighbors: ['强缓存', '协商缓存'] },
  { id: 'defer', neighbors: [], data: 'DOM 加载完后才执行' },
  { id: 'tree shaking', neighbors: ['ES Module'] },
  { id: '选择器', data: '包括：通配符选择器、标签选择器、class 选择器、id 选择器、属性选择器、后代选择器、子选择器、一般兄弟选择器、紧邻兄弟选择器。\n优化：1、避免嵌套。2、避免通配符和属性选择器。3、避免id+class，多此一举' },
  { id: '重排', neighbors: ['CSS 重排', 'JS 重排'] },
  { id: 'CSS 重排', neighbors: ['transform', 'visibility', '动画'], data: 'transform 替代 top，visibility 替代 display，动画放到 absolute 或者 fixed 的元素上，可以减少重排' },
  { id: 'JS 重排', neighbors: ['fragment', 'className', '缓存'] },

  { id: '浏览器', neighbors: ['浏览器存储', 'Hybrid', 'BOM', 'DOM', 'CSSOM', '渲染树', '跨域'] },
  { id: '浏览器渲染', neighbors: ['DOM', 'CSSOM', '渲染树', '布局', '绘制'] },
  { id: '浏览器存储', neighbors: ['cookie', 'localStorage', 'sessionStorage'] },
  { id: 'Hybrid', neighbors: ['JSBridge', 'PWA'] },
  { id: 'JSBridge', neighbors: ['scheme', 'iframe'] },
  { id: 'PWA', neighbors: ['service worker', 'manifest'] },
  { id: 'service worker', neighbors: ['代理', '离线存储', 'web push'] },
  { id: 'manifest', neighbors: [], data: '一个存储信息的 JSON 文件，可以用于生成图标' },
  { id: 'BOM', neighbors: ['navigator', 'location', 'history', 'window'] },
  { id: 'DOM', neighbors: ['事件', 'DOM 操作'] },
  { id: 'DOM 操作', neighbors: ['线程'], data: '为了防止两个线程同时操作 DOM，因此 JS 被设计为单线程'},
  { id: '事件', neighbors: ['冒泡', '捕获', '点击穿透'] },
  { id: '冒泡', neighbors: ['事件代理'] },
  { id: '点击穿透', neighbors: ['touchstart', 'touchend'] },
  { id: '跨域', neighbors: ['CORS', 'JSONP', 'iframe'] },
  { id: 'CORS', neighbors: ['access-control-allow-origin', 'options'] },
  { id: 'options', neighbors: [], data: '作用：1、获取支持的方法。2、CORS 中预检请求。' },
  { id: '移动端', neighbors: ['H5', 'React Native', 'weex', 'Hybrid'] },

  { id: '服务器', neighbors: ['静态服务器', '数据库', '进程', '线程', '内存', 'Node.js', 'Docker'] },
  { id: 'Node.js', neighbors: ['流'] },
  { id: '流', neighbors: ['读写', 'SSR', '内存'] },
  { id: '内存', neighbors: ['内存泄漏'] },
  { id: '内存泄漏', neighbors: ['全局变量', '事件监听', '闭包', 'node-heapdump', 'memory 选项卡'] },
  { id: '进程', neighbors: ['进程通信'], data: '进程和线程的区别：1、进程是资源分配的最小单元，线程是任务调度的最小单元。2、进程包含线程。3、进程挂了不会影响其他进程，但是线程挂了，整个进程都会挂。4、线程可以共享内存，进程无法共享。' },
  { id: '进程通信', neighbors: ['管道', 'socket', '消息队列'] },
  { id: '静态服务器', neighbors: ['content-type', '压缩', '缓存', 'http-server'] },
  { id: 'http-server', neighbors: ['CORS', '代理', 'cert.pem', 'key.pem'] },

  { id: '网络', neighbors: ['安全', '应用层', '传输层'] },
  { id: '应用层', neighbors: ['HTTP', 'DNS'] },
  { id: '传输层', neighbors: ['TCP', 'UDP'], data: 'TCP 和 UDP 区别：1、连接；2、可靠；3、通信对象个数；4、传输方式（tcp是字节流，udp是报文）；5、头部开销（tcp大）；6、应用（udp快，适合实时应用；tcp可靠，适合文件传输）' },
  { id: 'DNS', neighbors: ['UDP'], data: '浏览器DNS缓存-操作系统DNS缓存-本地域名服务器-本地域名服务器问根域名服务器-本地域名服务器问顶级域名服务器-本地域名服务器问权限域名服务器' },
  { id: 'TCP', neighbors: ['三次握手', '四次挥手'], data: 'TCP 通过校验和、确认应答序列号、超时重传保证可靠性。三次握手是：开始-ok/开始-ok。四次挥手是：结束-ok-结束-ok。之所以挥手需要多一次是因为服务端给客户端传输的数据可能还没结束，因此不能像握手一样同时说“ok/结束”'},
  { id: 'HTTP', neighbors: ['状态码', '头', '方法', 'HTTPS', 'HTTP2'] },
  { id: '状态码', neighbors: ['重定向', '成功', '客户端失败', '服务端失败'] },
  { id: '重定向', neighbors: ['301', '302'], data: '301 永久、302 临时' },
  { id: '成功', neighbors: ['200', '201', '304'], data: '200 成功，201 成功创建，304 没有修改' },
  { id: '304', neighbors: ['协商缓存'] },
  { id: '客户端失败', neighbors: ['400', '401', '403', '404'], data: '400语法错误，401认证失败，403授权失败，404没找到。' },
  { id: '服务端失败', neighbors: ['500', '503'], data: '500 内部错误，503 暂不可用' },
  { id: '头', neighbors: ['缓存', 'content-type', 'cookie'] },
  { id: '缓存', neighbors: ['强缓存', '协商缓存'] },
  { id: '强缓存', neighbors: ['expires', 'cache-control'], data: 'cache-control 更精确' },
  { id: '协商缓存', neighbors: ['etag', 'last-modified'], data: 'etag 准确但是要计算，last-modified 不准确但不需要计算' },
  { id: 'etag', neighbors: ['签名', 'if-none-match'] },
  { id: 'last-modified', neighbors: ['if-modified-since'] },
  { id: 'cookie', neighbors: ['sessionid', 'session', 'expires', 'domain', 'path', 'httpOnly', 'secure'] },
  { id: '方法', neighbors: ['get', 'post', 'delete', 'put', 'options'], data: 'get、post 本质是一样的，区别包括：场景、缓存、方法名、数据传输位置' },
  { id: 'get', neighbors: ['缓存'] },
  { id: 'HTTPS', neighbors: ['证书'], data: 'https 中的非对称加密只是为了让服务端知道密码，对称加密才是真正用来加密传输内容的' },
  { id: '证书', neighbors: ['CA', 'openssl', 'cert.pem'], data: 'SSL证书可以向CA机构通过付费的方式申请，也可以自己制作。' },
  { id: 'HTTP2', neighbors: ['二进制', '头部压缩', '多路复用', '服务器推送'], data: 'HTTP1 是文本协议，HTTP2是二进制协议，HTTP2 的出现导致很多之前的优化方法都不需要了：合并文件、雪碧图被多路复用干掉了，内联资源被服务器推送干掉了' },

  { id: '安全', neighbors: ['攻击', '加密', '编码', '签名', '认证'] },
  { id: '攻击', neighbors: ['CSRF', 'XSS'] },
  { id: 'CSRF', neighbors: ['Token'] },
  { id: 'XSS', neighbors: ['dangerouslySetInnerHTML'] },
  { id: '加密', neighbors: ['对称加密', '非对称加密'] },
  { id: '对称加密', neighbors: ['Token', 'HTTPS', 'DES', 'RC4'] },
  { id: '非对称加密', neighbors: ['公钥', '私钥', 'HTTPS', 'SSH', 'RSA'] },
  { id: '公钥', neighbors: ['cert.pem'] },
  { id: '私钥', neighbors: ['key.pem'] },
  { id: '签名', neighbors: ['MD5', 'SHA1', '加盐', '不可逆', '密码', 'JWT'] },
  { id: '编码', neighbors: ['base64', 'JWT'] },
  { id: '认证', neighbors: ['cookie', 'JWT', '单点登录'] },
  { id: 'session', neighbors: ['状态', '数据库', '内存', '分布式'] },
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

    const highlightRelatedNodes = function (nodeId, isOn) {
      // just enumerate all realted nodes and update link color:
      graph.forEachLinkedNode(nodeId, function (node, link) {
        var linkUI = graphics.getLinkUI(link.id);
        if (linkUI) {
          // linkUI is a UI object created by graphics below
          linkUI.attr('stroke', isOn ? 'red' : 'gray');
        }
        var nodeUI = graphics.getNodeUI(node.id);
        if (nodeUI) {
          // nodeUI is a UI object created by graphics below
          nodeUI.firstChild.attr('fill', isOn ? 'red' : '#00a2e8');
          nodeUI.lastChild.attr('fill', isOn ? 'red' : 'black');
        }
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