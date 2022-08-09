$(function() {
    const trs = $("tbody tr");
    const class_list = $(".class_list");
    const ui_paging = $(".ui-paging");
    if (trs.length === 0) {
        class_list.show();
        ui_paging.hide();
    } else {
        class_list.hide();
        ui_paging.show();
    }
});