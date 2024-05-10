// 监听双击事件
var flag = true;
document.addEventListener('dblclick', function(event) {
    alert(flag)
    if(flag){
        // b.css 隐藏  /blog/是部署的根路径
        loadCSS('/blog/b.css');
        flag = false;
    }else {
        //  a.css 显示   /blog/是部署的根路径
        loadCSS('a.css');
        flag = true;
    }
});

// 加载 CSS 文件的函数
function loadCSS(cssFile) {
    // 创建新的 link 元素
    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = cssFile;

    // 将 link 元素添加到 head 中
    document.head.appendChild(linkElement);
}

