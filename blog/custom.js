var flag = true;
var firstFlag = true;

document.addEventListener('dblclick', function(event) {
    // 首次双击显示弹框
    if(firstFlag){
        showPopup();
    }

    if(flag){
        //  隐藏
        document.body.classList.add('custom-read-mode');
        flag = false;
    }else {
        //  显示
        document.body.classList.remove('custom-read-mode');
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

(function initScrollHeaderAutoHide() {
    var headerHideStart = 160;
    var headerShowDistance = 80;
    var lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    var upDistance = 0;
    var ticking = false;

    function getScrollY() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    function updateHeaderByScroll() {
        var currentY = getScrollY();
        var delta = currentY - lastScrollY;

        if (delta > 8 && currentY > headerHideStart) {
            document.body.classList.add('custom-header-hidden');
            upDistance = 0;
        } else if (delta < -4) {
            upDistance += Math.abs(delta);
            if (upDistance >= headerShowDistance || currentY < 80) {
                document.body.classList.remove('custom-header-hidden');
                upDistance = 0;
            }
        } else if (delta >= 0) {
            upDistance = 0;
        }

        lastScrollY = currentY <= 0 ? 0 : currentY;
    }

    function onScroll() {
        if (ticking) {
            return;
        }

        window.requestAnimationFrame(function() {
            updateHeaderByScroll();
            ticking = false;
        });
        ticking = true;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
})();

(function initDesktopSidebarToggles() {
    var sidebarCollapsedClass = 'custom-sidebar-collapsed';
    var subSidebarCollapsedClass = 'custom-sub-sidebar-collapsed';
    var sidebarStorageKey = 'custom-sidebar-collapsed-v2';
    var subSidebarStorageKey = 'custom-sub-sidebar-collapsed-v2';
    var desktopQuery = window.matchMedia('(min-width: 720px)');
    var sidebarToggle;
    var subSidebarToggle;
    var ticking = false;
    var mounted = false;

    function hasSidebar() {
        return !!document.querySelector('.sidebar') &&
            !document.querySelector('.theme-container.no-sidebar');
    }

    function hasSubSidebar() {
        var subSidebar = document.querySelector('.sub-sidebar-wrapper');
        return !!subSidebar && subSidebar.children.length > 0;
    }

    function isDesktop() {
        return desktopQuery.matches;
    }

    function toNumber(value) {
        var number = parseFloat(value);
        return Number.isFinite(number) ? number : 0;
    }

    function updateToggleMetrics() {
        var sidebar = document.querySelector('.sidebar');
        var subSidebar = document.querySelector('.sub-sidebar-wrapper');

        if (sidebar) {
            document.body.style.setProperty('--custom-sidebar-toggle-left-open', sidebar.offsetWidth + 'px');
        }

        if (subSidebar) {
            var style = window.getComputedStyle(subSidebar);
            var right = toNumber(style.right);
            var width = subSidebar.offsetWidth || toNumber(style.width);
            document.body.style.setProperty('--custom-sub-sidebar-toggle-right-open', (right + width) + 'px');
            document.body.style.setProperty('--custom-sub-sidebar-hide-distance', (right + width) + 'px');
        }
    }

    function ensureToggle(className, label, onClick) {
        var button = document.querySelector('.' + className);
        if (button) {
            return button;
        }

        button = document.createElement('button');
        button.type = 'button';
        button.className = className;
        button.setAttribute('aria-label', label);
        button.setAttribute('title', label);
        button.addEventListener('click', onClick);
        document.body.appendChild(button);
        return button;
    }

    function setSidebarCollapsed(collapsed, shouldStore) {
        document.body.classList.toggle(sidebarCollapsedClass, collapsed);
        if (shouldStore) {
            localStorage.setItem(sidebarStorageKey, collapsed ? '1' : '0');
        }
        updateToggleState();
    }

    function setSubSidebarCollapsed(collapsed, shouldStore) {
        document.body.classList.toggle(subSidebarCollapsedClass, collapsed);
        if (shouldStore) {
            localStorage.setItem(subSidebarStorageKey, collapsed ? '1' : '0');
        }
        updateToggleState();
    }

    function updateToggleState() {
        var sidebarCollapsed = document.body.classList.contains(sidebarCollapsedClass);
        var subSidebarCollapsed = document.body.classList.contains(subSidebarCollapsedClass);

        if (sidebarToggle) {
            sidebarToggle.setAttribute('aria-label', sidebarCollapsed ? '展开侧边栏' : '隐藏侧边栏');
            sidebarToggle.setAttribute('title', sidebarCollapsed ? '展开侧边栏' : '隐藏侧边栏');
            sidebarToggle.setAttribute('aria-pressed', sidebarCollapsed ? 'true' : 'false');
        }

        if (subSidebarToggle) {
            subSidebarToggle.setAttribute('aria-label', subSidebarCollapsed ? '展开文章目录' : '隐藏文章目录');
            subSidebarToggle.setAttribute('title', subSidebarCollapsed ? '展开文章目录' : '隐藏文章目录');
            subSidebarToggle.setAttribute('aria-pressed', subSidebarCollapsed ? 'true' : 'false');
        }
    }

    function restoreCollapsedState() {
        if (!isDesktop()) {
            document.body.classList.remove(sidebarCollapsedClass);
            document.body.classList.remove(subSidebarCollapsedClass);
            document.body.classList.remove('custom-has-sidebar-toggle');
            document.body.classList.remove('custom-has-sub-sidebar-toggle');
            return;
        }

        document.body.classList.toggle('custom-has-sidebar-toggle', hasSidebar());
        document.body.classList.toggle('custom-has-sub-sidebar-toggle', hasSubSidebar());
        updateToggleMetrics();

        if (hasSidebar()) {
            setSidebarCollapsed(localStorage.getItem(sidebarStorageKey) === '1', false);
        } else {
            document.body.classList.remove(sidebarCollapsedClass);
        }

        if (hasSubSidebar()) {
            setSubSidebarCollapsed(localStorage.getItem(subSidebarStorageKey) === '1', false);
        } else {
            document.body.classList.remove(subSidebarCollapsedClass);
        }

        updateToggleState();
    }

    function scheduleRestore() {
        if (ticking) {
            return;
        }

        window.requestAnimationFrame(function() {
            restoreCollapsedState();
            ticking = false;
        });
        ticking = true;
    }

    function mountToggles() {
        if (!document.body) {
            return;
        }
        if (mounted) {
            restoreCollapsedState();
            return;
        }
        mounted = true;

        sidebarToggle = ensureToggle('custom-sidebar-toggle', '隐藏侧边栏', function() {
            if (isDesktop() && hasSidebar()) {
                setSidebarCollapsed(!document.body.classList.contains(sidebarCollapsedClass), true);
            }
        });

        subSidebarToggle = ensureToggle('custom-sub-sidebar-toggle', '隐藏文章目录', function() {
            if (isDesktop() && hasSubSidebar()) {
                setSubSidebarCollapsed(!document.body.classList.contains(subSidebarCollapsedClass), true);
            }
        });

        restoreCollapsedState();

        if (window.MutationObserver) {
            new MutationObserver(scheduleRestore).observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }

    window.addEventListener('resize', restoreCollapsedState);
    window.addEventListener('popstate', scheduleRestore);

    if (desktopQuery.addEventListener) {
        desktopQuery.addEventListener('change', restoreCollapsedState);
    } else if (desktopQuery.addListener) {
        desktopQuery.addListener(restoreCollapsedState);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountToggles);
    } else {
        mountToggles();
    }

    setTimeout(mountToggles, 300);
})();
