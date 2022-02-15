window.addEventListener("load",function() {
    const focus = this.document.querySelector("#focus");
    const ul = focus.children[0];
    const ul_lis = document.querySelector("#ul").querySelectorAll("li");
    const focusWidth = focus.offsetWidth;
    let index = 0;
    let startX = 0;
    let moveX = 0;
    let left = 0;
    let flag = false;
    const all_page = document.querySelector("#all_page");
    all_page.innerHTML = ul_lis.length;
    ul.addEventListener("touchstart",function(e) {
        startX = e.targetTouches[0].pageX;
        if (index >= ul_lis.length - 1) {
            left = ul.style.left;
        }
    });
    ul.addEventListener("touchmove",function(e) {
        moveX = e.targetTouches[0].pageX - startX;
        let left = -index * focusWidth + moveX;
        ul.style.left = left + "px";
        flag = true;
        e.preventDefault();
    });
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
                    ul.style.left = "0px";
                } else if (index >= ul_lis.length) {
                    index = ul_lis.length;
                    ul.style.transition = "none";
                    ul.style.transition = "all 0.5s";
                    ul.style.left = left;
                } else {
                    let margin_left = -index * focusWidth;
                    ul.style.transition = "none";
                    ul.style.transition = "all 0.5s";
                    ul.style.left = margin_left + "px";
                }
            } else {
                if (index <= 0) {
                    index = 0;
                    ul.style.transition = "none";
                    ul.style.transition = "all 0.5s";
                    ul.style.left = "0px";
                } else if (index >= ul_lis.length) {
                    index = ul_lis.length;
                    ul.style.transition = "none";
                    ul.style.transition = "all 0.5s";
                    ul.style.left = left;
                } else {
                    // 如果移动距离小于 50 像素就回弹
                    // 如果是最后一张或者第一张图片则回弹 否则正常执行
                    let margin_left = -index * focusWidth;
                    ul.style.transition = "none";
                    ul.style.transition = "all 0.5s";
                    ul.style.left = margin_left + "px";
                }
            }
            flag = false;
        }
    });
});
$(function() {
    const ps = $("#introduction p");
    ps.click(function() {
        const index = $(this).index();
        ps.eq(index).attr({class: "selected"}).siblings().attr({class: ""});
        if (index === 0) {
            $(".evaluate").hide();
            $(".arguments").hide();
            if ($(".introduction-content div").html() != "") {
                $(".content-none").hide();
                $(".introduction-content").show();
            } else {
                $(".introduction-content").hide();
                $(".content-none").show();
            }
        } else if (index === 1) {
            $(".introduction-content").hide();
            $(".arguments").hide();
            $(".evaluate").show();
        } else if (index === 2) {
            $(".introduction-content").hide();
            $(".evaluate").hide();
            $(".arguments").show();
        }
    });
    const go_shop_car = $("#go_shop_car");
    const go_buy = $("#go_buy");
    const add = $("#add");
    const close = $("#close");
    const btn = $("#btn");
    go_shop_car.click(function() {
        add.show();
        close.show();
        btn.html("加入购物车");
        btn.click(function() {
            window.location.href = "../phone/shopcar.html";
        });
    });
    go_buy.click(function() {
        add.show();
        close.show();
        btn.html("立即购买");
        btn.click(function() {
            window.location.href = "../phone/indent.html";
        });
    });
    close.click(function() {
        add.hide();
        close.hide();
    });
    const goods_title_ps = document.querySelectorAll(".p");
    for (let i = 0; i < goods_title_ps.length; i++) {
        goods_title_ps[i].addEventListener("click",function() {
            for (let i = 0; i < goods_title_ps.length; i++) {
                goods_title_ps[i].className = "p";
            }
            this.className = "p white_border";
        });
    }
    const plus = $("#plus");
    const minus = $("#minus");
    const number = $("#number");
    const count = $("#count");
    const price = $("#price");
    const unit_price = $("#unit_price");
    const money = unit_price.html().substr(1);
    let timer = undefined;
    plus.click(function() {
        number.val(pl_us(number.val()));
        count.html("X " + number.val());
        price.html("￥" + get_price(number.val(),money).toFixed(2));
    });
    minus.click(function() {
        number.val(min_us(number.val()));
        count.html("X " + number.val());
        price.html("￥" + get_price(number.val(),money).toFixed(2));
    });
    number.focus(function() {
        timer = setInterval(() => {
            number.val(select_num(number.val()));
            count.html("X " + number.val());
            price.html("￥" + get_price(number.val(),money).toFixed(2));
        },20);
    });
    number.blur(function() {
        clearInterval(timer);
    });
});