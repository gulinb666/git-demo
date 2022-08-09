$(function() {
    const goods_list = $(".goods-list");
    const hide = $("#hide");
    const ui_paging = $(".ui-paging");
    if (goods_list.length === 0) {
        hide.show();
        ui_paging.hide();
    } else {
        hide.hide();
        ui_paging.show();
    }
});