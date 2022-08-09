$(function() {
    const menu_btn = $(".menu-btn");
    let flag = true;
    const one = $("#one");
    const two = $("#two");
    const three = $("#three");
    const select_menu = $(".select-menu");
    menu_btn.click(function() {
        if (flag) {
            // 设置css 只能在这设置了
            one.css("transition","all .3s");
            one.css("position","absolute");
            one.css("top",".2667rem");
            one.css("right",".1333rem");
            one.css("transform","rotate(45deg)");
            two.hide();
            three.css("transition","all .3s");
            three.css("position","absolute");
            three.css("top",".2667rem");
            three.css("right",".5333rem");
            three.css("transform","rotate(-45deg)");
            select_menu.stop().slideDown();
            flag = false;
        } else {
            one.css("transition","all .3s");
            one.css("position","absolute");
            one.css("top","0");
            one.css("right","0");
            one.css("transform","rotate(0deg)");
            two.show();
            two.css("position","absolute");
            two.css("top",".8rem");
            three.css("transition","all .3s");
            three.css("position","absolute");
            three.css("top","1.6rem");
            three.css("right","0");
            three.css("transform","rotate(0deg)");
            select_menu.stop().slideUp();
            flag = true;
        }
    });
    const li_box = $(".li-box");
    li_box.click(function() {
        const index = $(this).index();
        li_box.eq(index).attr({class: "li-box highlight"}).siblings().attr({class: "li-box"});
        li_box.eq(index).children(".select").stop().slideDown().parent(".li-box").siblings().children(".select").stop().slideUp();
    });
    const hide = $("#hide");
    const ui_paging = $(".ui-paging");
    const trs = $("tbody tr");
    if (trs.length - 1 === 0) {
        hide.show();
        ui_paging.hide();
    } else {
        hide.hide();
        ui_paging.show();
    }
});