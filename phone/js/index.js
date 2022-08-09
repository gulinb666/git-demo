// 轮播图 start
window.addEventListener("load",function() {
    $(function() {
        const focus = document.querySelector("#focus");     // 获取 focus 元素
        const ul = focus.children[0];    // 获取 ul 元素
        const focusWidth = focus.offsetWidth;   // 获取图片宽度
        let index = 0;    // 计数器
        const ol = focus.children[1];    // 获取 ol 元素
        const ul_lis = document.querySelector("ul").querySelectorAll("li");    // 获取 ul里面的所有 li
        // 遍历有多少个图片就创建多少个小圆点
        for (let i = 0; i < ul_lis.length; i++) {
            const ol_lis = document.createElement("li");   // 原生创建 li 元素
            ol.appendChild(ol_lis);    // 把 li 元素放到 ol 里面
        }
        const olLis = document.querySelector("ol").querySelectorAll("li");    // 获取所有的小圆点
        olLis[0].className = "current";   // 默认给第一个小圆点添加类名
        // 开启定时器 每 3s 自动切换下一张，如果是最后一张则返回第一张
        let timer = setInterval(() => {
            index++;    // 计数器自增
            // 如果计数器的值大于或者等于了所有的小圆点则让图片返回第一张继续轮播 并将计数器清零
            if (index >= ul_lis.length) {
                ul.style.marginLeft = "0px";
                index = 0;
            } else {
                const margin_left = -index * focusWidth;     // 用计数器 * 宽度就是需要轮播的宽度，因为是往左轮播所以是负数
                ul.style.transition = "none";
                ul.style.transition = "all 0.5s";     //  添加过渡效果
                ul.style.marginLeft = margin_left + "px";
            }
        },3000);
        let startX = 0;    // 定义初始坐标
        let moveX = 0;    // 定义结束坐标
        let flag = false;
        // 触摸元素 获取手指初始坐标
        ul.addEventListener("touchstart",function(e) {
            // 如果是第一张图片或者最后一张图片就禁止触摸 否则正常执行
            startX = e.targetTouches[0].pageX;
            // 手指触摸的时候要停止定时器
            clearInterval(timer);
        });
        // 移动手指 计算手指的滑动距离 并移动盒子
        ul.addEventListener("touchmove",function(e) {
            // 如果是第一张图片或者最后一张图片就禁止移动 否则正常执行
            // 计算移动距离
            moveX = e.targetTouches[0].pageX - startX;
            // 移动盒子 盒子原来的位置 - 手指移动的距离
            let margin_left = -index * focusWidth + moveX;
            ul.style.transition = "none";
            ul.style.marginLeft = margin_left + "px";
            flag = true;
            e.preventDefault();    // 清除默认行为
        });
        // 手指离开 根据距离去判断是回弹还是播放上一张或者下一张
        ul.addEventListener("touchend",function() {
            if (flag) {
                // 如果移动距离大于 50 像素就播放上一张或者下一张
                if (Math.abs(moveX) > 50) {
                    // 如果是右滑就是播放上一张 moveX 是正值
                    // 如果是左滑就是播放上一张 moveX 是负值
                    if (moveX > 0) {
                        index--;
                    } else {
                        index++;
                    }
                    if (index <= 0) {
                        index = 0;
                        ul.style.transition = "none";
                        ul.style.transition = "all 0.5s";
                        ul.style.marginLeft = "0px";
                    } else if (index >= ul_lis.length) {
                        index = ul_lis.length;
                        ul.style.transition = "none";
                        ul.style.transition = "all 0.5s";
                        ul.style.marginLeft = "-1014px";
                    } else {
                        let margin_left = -index * focusWidth;
                        ul.style.transition = "none";
                        ul.style.transition = "all 0.5s";
                        ul.style.marginLeft = margin_left + "px";
                    }
                } else {
                    if (index <= 0) {
                        index = 0;
                        ul.style.transition = "none";
                        ul.style.transition = "all 0.5s";
                        ul.style.marginLeft = "0px";
                    } else if (index >= ul_lis.length) {
                        index = ul_lis.length;
                        ul.style.transition = "none";
                        ul.style.transition = "all 0.5s";
                        ul.style.marginLeft = "-1014px";
                    } else {
                        // 如果移动距离小于 50 像素就回弹
                        // 如果是最后一张或者第一张图片则回弹 否则正常执行
                        let margin_left = -index * focusWidth;
                        ul.style.transition = "none";
                        ul.style.transition = "all 0.5s";
                        ul.style.marginLeft = margin_left + "px";
                    }
                }
            }
            clearInterval(timer);
            // 手指离开就重新开启定时器
            timer = setInterval(() => {
                index++;    // 计数器自增
                // 如果计数器的值大于或者等于了所有的小圆点则让图片返回第一张继续轮播 并将计数器清零
                if (index >= ul_lis.length) {
                    ul.style.marginLeft = "0px";
                    index = 0;
                } else {
                    const margin_left = -index * focusWidth;     // 用计数器 * 宽度就是需要轮播的宽度，因为是往左轮播所以是负数
                    ul.style.transition = "none";
                    ul.style.transition = "all 0.5s";     //  添加过渡效果
                    ul.style.marginLeft = margin_left + "px";
                }
            },3000);
        });
        // 等待过渡效果完成后给对应的小圆点添加类名
        ul.addEventListener("transitionend",function() {
            $("ol li").eq(index).attr({class: "current"}).siblings(".current").attr({class: ""});
        });
    })
});
// 轮播图 end