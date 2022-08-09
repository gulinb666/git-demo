$(function() {
    const spans = $("#header span");
    spans.click(function() {
        const index = $(this).index();
        spans.eq(index).attr({class: "pink_header"}).siblings().attr({class: ""});
    });
    const indentReceipt_none = $("#indentReceipt_none");
    const lis = $("#ul li");
    if (lis.length === 0) {
        indentReceipt_none.show();
    } else {
        indentReceipt_none.hide();
    }
});