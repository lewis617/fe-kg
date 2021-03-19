const kg = [
  { id: '前端', neighbors: ['语言', '端', '计算机科学', '性能'] },
  { id: '语言', neighbors: ['JS', 'CSS'] },
  { id: '端', neighbors: ['浏览器', '服务器'] },
  { id: 'JS', neighbors: ['语法', '框架'] },

  { id: '语法', neighbors: ['闭包', '声明', '继承', '异步', '类型', '预编译', '精度', '优先级'] },
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
  { id: 'class', neighbors: ['严格模式', '常量', 'new'] },
  { id: 'new', neighbors: ['prototype', 'this', '实例'] },
  { id: '原型链', neighbors: ['proto', 'prototype', '链表'] },
  { id: '异步', neighbors: ['callback', 'promise', 'async', '宏任务', '微任务', '队列'] },
  { id: '微任务', neighbors: ['promise', 'async'] },
  { id: '宏任务', neighbors: ['setTimeout'] },
  { id: 'async', neighbors: ['generator'] },
  { id: 'generator', neighbors: ['yield', 'next'] },
  { id: 'this', neighbors: ['bind', 'apply', 'call', '实例'] },
  { id: '类型', neighbors: ['类数组', '隐式转换'] },
  { id: '隐式转换', neighbors: ['valueOf', 'toString'] },
  { id: '类数组', neighbors: ['arguments', 'NodeList', 'length', 'Array.from'] },
  { id: '预编译', neighbors: ['作用域', '变量提升'] },
  { id: '作用域', neighbors: ['全局作用域', '局部作用域', '块级作用域'] },
  { id: '精度', neighbors: [], data: '表现：0.1+0.2!==0.3 \n解法：变成整数相加再除回去' },
  { id: '优先级', neighbors: [], data: '属性赋值最高，连等操作，从右往左' },

  { id: '框架', neighbors: ['react', 'babel', 'webpack'] },
  { id: 'react', neighbors: ['DIFF', '虚拟 DOM', 'react16', '表单'] },
  { id: 'DIFF', neighbors: ['树', 'key', 'class'], data: '算法策略：1、树：同层比较。2、层：通过 key 减少增删。3、节点：同类比较。\n算法复杂度：n^3 降到 n。' },
  { id: '虚拟 DOM', neighbors: ['重排', '跨平台', 'DOM 操作'], data: '优点：1、减少重排。2、避免 DOM 操作。3、跨平台。\n缺点：无法极致优化。' },
  { id: 'react16', neighbors: ['Hooks', 'Fiber', 'Portal', 'Fragment'] },
  { id: 'Hooks', neighbors: ['链表'], data: '1、顺序存到链表中，所以 hooks 不能放到循环和条件块中。2、链表相比数组擅长增删。' },
  { id: 'Fiber', neighbors: ['卡顿', '异步', 'DIFF'], data: 'what：核心算法的重新实现。why：同步 diff带来的卡顿问题。how：改为异步、设置优先级' },
  { id: '表单', neighbors: ['受控组件', '非受控组件'], },
  { id: 'babel', neighbors: ['AST'], },

  { id: 'CSS', neighbors: ['兼容性', '响应式', 'CSS 属性', 'CSS 画图', '布局', 'CSS3 动画'] },
  { id: '兼容性', neighbors: ['CSS 初始化', 'CSS 私有属性', 'CSS Hack'] },
  { id: 'CSS 初始化', neighbors: [], data: '例如：normalize.css' },
  { id: 'CSS 私有属性', neighbors: ['Autoprefixer'], data: '例如：-webkit-、-moz-' },
  { id: 'CSS Hack', neighbors: [], data: '例如：if endif' },
  { id: '响应式', neighbors: ['媒体查询', '百分比', 'flex', 'rem', '视口单位', 'viewport', 'dpr'] },
  { id: 'CSS 属性', neighbors: ['display', 'postion', 'visibility', 'transform', 'float', 'box-sizing', 'viewport', 'white-space', 'word-space', 'letter-space'] },
  { id: 'BFC', neighbors: ['display', 'postion', 'float', 'overflow', '外边距塌陷', '清除浮动', '多栏布局'] },
  { id: '清除浮动', neighbors: ['clear'] },
  { id: 'clear', neighbors: ['::after'] },
  { id: 'box-sizing', neighbors: ['content-box', 'border-box'] },
  { id: 'CSS 画图', neighbors: ['正方形', '箭头', '三角形', '省略号'] },
  { id: '正方形', neighbors: ['vw', 'padding', '百分比'] },
  { id: '箭头', neighbors: ['border'] },
  { id: '三角形', neighbors: ['border'] },
  { id: '省略号', neighbors: ['text-overflow', '-webkit-box', '-webkit-box-orient', '-webkit-line-clamp'] },
  { id: '布局', neighbors: ['多栏布局', '栅格布局', '等高布局', '垂直居中'] },
  { id: '多栏布局', neighbors: ['float', 'absolute', 'margin', 'BFC', 'flex'] },
  { id: '栅格布局', neighbors: ['float', '百分比', 'flex'] },
  { id: '等高布局', neighbors: ['table', 'flex'] },
  { id: '垂直居中', neighbors: ['absolute', 'flex', 'line-height'] },
  { id: 'CSS3 动画', neighbors: ['animation', 'transition'] },
  { id: 'animation', neighbors: ['keyframes'] },
  { id: 'transition', neighbors: [':hover', ':focus'] },
  { id: '伪类', neighbors: [':hover', ':focus'] },
  { id: '伪元素', neighbors: ['::before', '::after'] },
  { id: '冒号', neighbors: ['伪类', '伪元素'] },

  { id: '计算机科学', neighbors: ['数据结构与算法', '网络'] },
  { id: '数据结构与算法', neighbors: ['数据结构', '算法'] },
  { id: '数据结构', neighbors: ['栈', '队列', '链表', '树', '二叉树', '图'] },
  { id: '算法', neighbors: ['排序', '搜索', '分治', '动态规划', '回溯'] },
  { id: '排序', neighbors: ['冒泡排序', '选择排序', '归并排序', '快速排序'] },
  { id: '搜索', neighbors: ['顺序', '二分'] },
  { id: '分治', neighbors: ['二叉树', '归并排序', '快速排序'] },
  { id: '动态规划', neighbors: ['爬楼梯', 'N-Sum'] },
  { id: '回溯', neighbors: ['全排列'] },

  { id: '性能', neighbors: ['性能优化', '性能检测'] },
  { id: '性能优化', neighbors: ['CSS 性能优化', 'JS 性能优化', '构建优化', '加载优化'] },
  { id: '性能检测', neighbors: ['线上监控', '开发调试'] },
  { id: '线上监控', neighbors: ['window.performace', 'FPS'] },
  { id: '请求动画帧', neighbors: ['动画', 'FPS', '节流'], data: 'requestAnimationFrame的优势，在于充分利用显示器的刷新机制，比较节省系统资源。' },
  { id: 'FPS', neighbors: ['卡顿'] },
  { id: '开发调试', neighbors: ['performace 选项卡', 'memory 选项卡', 'lighthouse'] },
  { id: 'lighthouse', neighbors: ['性能报告'] },
  { id: 'CSS 性能优化', neighbors: ['选择器优化', 'CSS 重排'] },
  { id: 'JS 性能优化', neighbors: ['JS 重排'] },
  { id: '构建优化', neighbors: ['DLL', 'resolve', '多进程', 'tree shaking', 'webpack'] },
  { id: '加载优化', neighbors: ['打包', '压缩', '非阻塞', '缓存'] },
  { id: '打包', neighbors: ['多路复用'] },
  { id: '非阻塞', neighbors: ['defer', 'async', '服务器推送'] },
  { id: '缓存', neighbors: ['强缓存', '协商缓存'] },
  { id: 'tree shaking', neighbors: ['ES6 Module'] },
  { id: '选择器优化', neighbors: [], data: '1、避免嵌套。2、避免通配符和属性选择器。3、避免id+class，多此一举' },
  { id: '重排', neighbors: ['CSS 重排', 'JS 重排'] },
  { id: 'CSS 重排', neighbors: ['transform', 'visibility', '动画'], data: 'transform 替代 top，visibility 替代 display，动画放到 absolute 或者 fixed 的元素上，可以减少重排' },
  { id: 'JS 重排', neighbors: ['fragment', 'class', '缓存'] },

  { id: '浏览器', neighbors: ['浏览器存储', 'Hybrid', 'BOM', 'DOM', '跨域'] },
  { id: '浏览器存储', neighbors: ['cookie', 'localStorage', 'sessionStorage'] },
  { id: 'Hybrid', neighbors: ['JSBridge', 'PWA'] },
  { id: 'JSBridge', neighbors: ['scheme', 'iframe'] },
  { id: 'PWA', neighbors: ['service worker', 'manifest'] },
  { id: 'service worker', neighbors: ['代理', '缓存', 'web push'] },
  { id: 'manifest', neighbors: [], data: '一个存储信息的 JSON 文件，可以用于生成图标' },
  { id: 'BOM', neighbors: ['navigator', 'location', 'history', 'window'] },
  { id: 'DOM', neighbors: ['事件', 'DOM 操作'] },
  { id: '事件', neighbors: ['冒泡', '捕获', '点击穿透'] },
  { id: '冒泡', neighbors: ['事件代理'] },
  { id: '点击穿透', neighbors: ['touchstart', 'touchend'] },
  { id: '跨域', neighbors: ['CORS', 'JSONP'] },
  { id: 'CORS', neighbors: ['access-control-allow-origin', 'options'] },
  { id: 'options', neighbors: [], data: '作用：1、获取支持的方法。2、CORS 中预检请求。' },

  { id: '服务器', neighbors: [] },

  { id: '网络', neighbors: ['安全', 'HTTP', 'HTTPS', 'HTTP2'] },
  { id: 'HTTP', neighbors: ['状态码', '头', '方法'] },
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
  { id: 'cookie', neighbors: ['sessionid', 'session', 'expires'] },
  { id: '方法', neighbors: ['get', 'post', 'delete', 'put', 'options'], data: 'get、post 本质是一样的，区别包括：场景、缓存、方法名、数据传输位置' },
  { id: 'get', neighbors: ['缓存'] },
  { id: 'HTTPS', neighbors: ['证书'] },
  { id: '证书', neighbors: ['CA', 'openssl'] },
  { id: 'HTTP2', neighbors: ['二进制分帧', '头部压缩', '多路复用', '服务器推送'], data: 'HTTP1 是文本协议，HTTP2是二进制协议，HTTP2 的出现导致很多之前的优化方法都不需要了。' },

  { id: '安全', neighbors: ['攻击', '加密', '编码', '签名', '认证'] },
  { id: '攻击', neighbors: ['CSRF', 'XSS'] },
  { id: 'CSRF', neighbors: ['Token'] },
  { id: 'XSS', neighbors: ['dangerouslySetInnerHTML'] },
  { id: '加密', neighbors: ['对称加密', '非对称加密'] },
  { id: '对称加密', neighbors: ['Token', 'HTTPS', 'DES', 'RC4'] },
  { id: '非对称加密', neighbors: ['公钥', '私钥', 'HTTPS', 'SSH', 'RSA'] },
  { id: '签名', neighbors: ['MD5', 'SHA1', '加盐', '不可逆', '密码', 'JWT'] },
  { id: '编码', neighbors: ['base64', 'JWT'] },
  { id: '认证', neighbors: ['cookie', 'JWT', '单点登录'] },
  { id: 'session', neighbors: ['状态', '服务器', '数据库', '内存', '分布式'] },
  { id: 'JWT', neighbors: ['状态', 'expires'] },
  { id: '单点登录', neighbors: ['cookie', '一级域名', '认证中心'] },
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
}