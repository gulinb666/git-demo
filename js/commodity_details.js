$(function() {
    // 获取按钮元素
    const left_btn = $("#left_btn");
    const right_btn = $("#right_btn");
    // 获取图片父亲和图片本身元素
    const small_img_main = $("#small_img_main");
    const small_img_main_lis = $("#small_img_main li");
    // 判断图片是否大于 5 张且小于 10 张，如果大于5张且小于10张则可以进行左右滑动，否则禁止左右滑动
    if (small_img_main_lis.length > 5 && small_img_main_lis.length <= 10) {
        // 点击右按钮往右滑动
        left_btn.attr({class: "small_img_left forbid"});
        right_btn.click(function() {
            let offset_left = -298;
            small_img_main.stop().animate({
                "left": offset_left + "px"
            });
            $(this).attr({class: "small_img_right forbid"});
            left_btn.attr({class: "small_img_left"});
        });
        // 点击左按钮往左滑动
        left_btn.click(function() {
            small_img_main.stop().animate({
                "left": "0px"
            });
            $(this).attr({class: "small_img_left forbid"});
            right_btn.attr({class: "small_img_right"});
        });
    } else {
        right_btn.attr({class: "small_img_right forbid"});
        left_btn.attr({class: "small_img_left forbid"});
    }
    // 鼠标经过给当前选中的图片加上边框，且显示你选中的图片
    const img = $("#img");
    small_img_main_lis.mouseover(function() {
        let index = $(this).index();
        const imgs = $("#small_img_main li img");
        const this_src = imgs.eq(index).attr("src");
        $(this).attr({class: "small_img_border"}).siblings().attr({class: ""});
        img.attr({src: this_src});
    });
    // 选择规格   点击规格里的随机一项就会给当前规格加上边框
    const specification_spans = document.querySelectorAll(".option");
    for (let i = 0; i < specification_spans.length; i++) {
        specification_spans[i].addEventListener("click",function() {
            for (let i = 0; i < specification_spans.length; i++) {
                specification_spans[i].style.border = "none";
            }
            this.style.border = "1px solid #ffc0cb";
        });
    }
    // tab栏切换 就是下面的商品介绍和评论区切换
    const particulars_tab_lis = $("#particulars_tab li");
    const introduce_one = $(".introduce_one");
    particulars_tab_lis.click(function() {
        let index = $(this).index();
        $(this).attr({class: "particulars_tab_pink"}).siblings().attr({class: ""});
        introduce_one.eq(index).show().siblings("div.introduce_one").hide();
    });
    const plus = $("#plus");   // 获取加号按钮
    const minus = $("#minus");   // 获取减号按钮
    const price_html = $("#price");   // 获取价格元素
    price_html.html("413.00");  // 将价格初始化为413.00元
    const price = $("#price").html();   // 获取价格元素
    $("#number").val("1");  // 将输入框里的 value 值初始化为1
    // 点击加号按钮递增份数
    plus.click(function() {
        const number_value = $("#number").val();
        const num = $("#number");
        num.val(pl_us(number_value));
        price_html.html(get_price(price,num.val()).toFixed(2));
    });
    // 点击减号按钮递减份数
    minus.click(function() {
        const number_value = $("#number").val();
        const num = $("#number");
        num.val(min_us(number_value));
        price_html.html(get_price(price,num.val()).toFixed(2));
    });
    const number = $("#number");   // 获取输入框元素
    var timer = null;
    // 获取输入框焦点
    number.focus(function() {
        // 开启定时器，每 200 毫秒执行一次下面的操作
        timer = setInterval(() => {
            $(this).val(select_num($(this).val()));
            price_html.html(get_price(price,$(this).val()).toFixed(2));
        }, 200);
    });
    number.blur(function() {
        clearInterval(timer);
    });
});