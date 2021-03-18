const kg = [
  { id: '前端', neighbors: ['语言', '端', '计算机科学', '性能'] },
  { id: '语言', neighbors: ['JS', 'CSS'] },
  { id: '端', neighbors: ['浏览器', '服务器'] },
  { id: 'JS', neighbors: ['语法', '框架'] },
  { id: '语法', neighbors: ['闭包', '声明', '继承', '异步', '类型', '预编译', '精度', '优先级'] },
  { id: '声明', neighbors: ['var', 'let', 'const', 'function', '箭头函数'] },
  { id: '箭头函数', neighbors: ['this', 'new', 'yield', 'arguments'] },
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
  { id: '原型链', neighbors: ['proto', 'prototype', '链表'] },
  { id: '异步', neighbors: ['callback', 'promise', 'async', '宏任务', '微任务'] },
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
  { id: '精度', neighbors: ['0.1+0.2'], data: '解法：变成整数相加再除回去' },
  { id: '优先级', neighbors: [], data: '属性赋值最高，连等操作，从右往左' },

  { id: '框架', neighbors: ['React', 'Antd', 'Koa', 'Express', 'Babel', 'Webpack'] },


  { id: 'CSS', neighbors: [] },
  { id: '计算机科学', neighbors: ['数据结构与算法', '网络'] },
  { id: '数据结构与算法', neighbors: [] },
  { id: '性能', neighbors: [] },
  { id: '浏览器', neighbors: [] },
  { id: '服务器', neighbors: [] },
  { id: '网络', neighbors: ['安全'] },
  { id: '安全', neighbors: [] },
];
window.onload = () => {
  const graph = Viva.Graph.graph();

  const graphics = Viva.Graph.View.svgGraphics();

  for (let n of kg) {
    graph.addNode(n.id, n.data);
    for (let nei of n.neighbors || []) { graph.addLink(n.id, nei); }
  }

  graphics.node(function (node) {
    const ui = Viva.Graph.svg('g').attr('class', 'node-g'),
      circle = Viva.Graph.svg('circle').attr('r', 5).attr('fill', '#00a2e8'),
      svgText = Viva.Graph.svg('text').attr('y', '-6px').text(node.id);

    ui.append(circle);
    ui.append(svgText);
    return ui;
  })
    .placeNode(function (nodeUI, pos) {
      nodeUI.attr('transform', `translate(${pos.x}, ${pos.y})`);
    });

  // Render the graph
  const renderer = Viva.Graph.View.renderer(graph, {
    graphics: graphics
  });
  renderer.run();
}