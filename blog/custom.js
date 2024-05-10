var flag = true;
var firstFlag = true;

document.addEventListener('dblclick', function(event) {
    // 首次双击显示弹框
    if(firstFlag){
        showPopup();
    }

    if(flag){
        //  隐藏
        loadCSS('/blog/hide-for-read.css');
        flag = false;
    }else {
        //  显示
        loadCSS('/blog/recover-for-read.css');
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

// 显示弹框
function showPopup() {
    var popup = document.createElement('div');
    popup.classList.add('popup'); // 添加一个类名

    popup.innerHTML = `
    <div style="border-radius: 5px;color: white;display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #666565; padding: 20px; border: 1px solid white; box-shadow: 0 0 20px rgba(0,0,0,0.3); z-index: 9999;">
      <h3>已开启纯净阅读模式,再次双击可取消！</h3>
      <button style=" display: block; margin: 0 auto; color: white; width: 80px;height: 40px ; background: #84e2b7; border:none ;border-radius: 5px" onclick="closePopup()">确定</button>
    </div>
  `;
    document.body.appendChild(popup);

    var popupContent = popup.querySelector('div');
    popupContent.style.display = 'block';
}

// 关闭弹框
function closePopup() {
    var popup = document.querySelector('.popup');
    popup.parentNode.removeChild(popup);
    firstFlag=false;
}
