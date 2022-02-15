$(function() {
    const lis = $("#ul li");
    const hide = $("#hide");
    const count = $("#count");
    count.html(lis.length - 1);
    if (lis.length - 1 === 0) {
        hide.show();
    } else {
        hide.hide();
    }
});