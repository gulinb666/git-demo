$(function() {
    const hide = $("#hide");
    const goods = $(".goods-list");
    if (goods.length === 0) {
        hide.show();
    } else {
        hide.hide();
    }
});