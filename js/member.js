$(function() {
    const lis = $("#ul li");
    lis.click(function() {
        const index = $(this).index();
        lis.eq(index).attr({class: "pink_select"}).siblings().attr({class: ""});
    });
    const goods = $("#goods .li");
    const hide = $("#hide");
    const count = $("#count");
    count.html(goods.length);
    if (goods.length === 0) {
        hide.show();
    } else {
        hide.hide();
    }
});