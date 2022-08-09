$(function() {
    // 轮播图 start
    const slide_show = $("#slide_show");    // 获取轮播图的ul元素
    const left_btn = $("#left_btn");   // 获取轮播图左侧按钮
    const right_btn = $("#right_btn");   // 获取轮播图右侧按钮
    const slide_show_box = $("#slide_show_box");  // 获取轮播图的大盒子
    let slide_show_box_width = slide_show_box.width();  // 获取图片的宽度
    var timer = undefined;   // 定时器默认为空
    var num = 0;   // 计数器默认为0
    // 开启定时器 每 3s 换一张图片
    clearInterval(timer);
    timer = setInterval(() => {
        // 调用右侧点击方法
        right_btn.click();
        // 下面小圆点的排他思想
        slide_show_btn_lis.siblings(slide_show_btn_lis).attr({class: ""});
        slide_show_btn_lis.eq(num).attr({class: "count_btn_color"});
    },3000);
    // 鼠标经过显示左右按钮 并清除定时器
    slide_show_box.mouseover(function() {
        left_btn.show();
        right_btn.show();
        clearInterval(timer);
        timer = null;
    });
    // 鼠标离开隐藏左右按钮 并重新开启定时器
    slide_show_box.mouseout(function() {
        clearInterval(timer);
        left_btn.hide();
        right_btn.hide();
        timer = setInterval(() => {
            right_btn.click();
        },3000);
        slide_show_btn_lis.siblings(slide_show_btn_lis).attr({class: ""});
        slide_show_btn_lis.eq(num).attr({class: "count_btn_color"});
    });
    const slide_show_btn = $("#slide_show_btn");  // 获取小圆点的父元素
    const slide_show_lis = $("#slide_show li");   // 获取图片的元素
    // 遍历小圆点的个数
    for (let i = 0; i < slide_show_lis.length; i++) {
        let lis = $("<li></li>");
        // 把小圆点添加到小圆点的父元素里
        slide_show_btn.append(lis);
    }
    const slide_show_btn_lis = $("#slide_show_btn li");  // 获取小圆点的个数
    slide_show_btn_lis.eq(0).attr({class: "count_btn_color"});   // 先默认将第一个小圆点添加上类名
    // 遍历小圆点
    slide_show_btn_lis.each(function(index) {
        // 点击了当前的小圆点，就给当前的小圆点加上类名，其他的都不加类名
        $(this).click(function() {
            num = index;
            slide_show_btn_lis.siblings(slide_show_btn_lis).attr({class: ""});
            slide_show_btn_lis.eq(num).attr({class: "count_btn_color"});
            // 再切换到当前的图片
            slide_show.stop().animate({
                "left": -slide_show_box_width * num + "px"
            });
        });
    });
    // 点击右侧按钮切换下一张图片
    right_btn.click(function() {
        num++;
        // 如果是最后一张图片则切换到第一张图片
        if (num >= slide_show_lis.length) {
            num = 0;
            slide_show.stop().animate({
                "left": 0 + "px"
            });
        }
        slide_show.stop().animate({
            "left": -slide_show_box_width * num + "px"
        });
        slide_show_btn_lis.siblings(slide_show_btn_lis).attr({class: ""});
        slide_show_btn_lis.eq(num).attr({class: "count_btn_color"});
    });
    // 点击左侧按钮切换上一张图片
    left_btn.click(function() {
        num--;
        // 如果是第一张图片则切换到最后一张图片
        if (num < 0) {
            num = 7;
            slide_show.stop().animate({
                "left": -3850 + "px"
            });
        }
        slide_show.stop().animate({
            "left": -slide_show_box_width * num + "px"
        });
        slide_show_btn_lis.siblings(slide_show_btn_lis).attr({class: ""});
        slide_show_btn_lis.eq(num).attr({class: "count_btn_color"});
    });
    // 轮播图 end
    // 左侧分类 start
    // 获取元素
    const main_classify = $("#main_classify");
    const main_classify_li = $("#main_classify li");
    const classify_left = $("#classify_left");
    const classify_left_title = $("#main_classify #classify_left .classify_left_title");
    // 鼠标经过左侧分类的小li显示当前的分类页面
    main_classify_li.mouseover(function() {
        const index = $(this).index();
        $(this).css("background-color","rgba(0,0,0,0.05)").siblings().css("background-color","#fff");
        classify_left_title.eq(index).show().siblings().hide();
        main_classify.mouseover(function() {
            classify_left.css("background-color","rgba(255,255,255,0.5)").show();
        });
    });
    // 鼠标经过左侧分类的小li隐藏当前的分类页面
    main_classify.mouseout(function() {
        classify_left.hide();
    });
    // 左侧分类 end
});