$(function() {
    const lis = $("#ul li");
    const classify_none = $(".classify-none");
    lis.click(function() {
        const index = $(this).index();
        lis.eq(index).attr({class: "white"}).siblings().attr({class: ""});
    });
    if (lis.length === 0) {
        classify_none.show();
    } else {
        classify_none.hide();
    }
});