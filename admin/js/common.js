$(function() {
    const lis = $(".li");
    const divs = $("#div .select_menu");
    const div = $("#div");
    const ul = $("#ul");
    lis.mouseover(function() {
        const index = $(this).index();
        $(this).attr({class: "Code-Highlighted li"}).siblings(".li").attr({class: "li"});
        divs.eq(index).show().siblings().hide();
        div.show();
        ul.mouseover(function() {
            div.show();
        });
    });
    ul.mouseout(function() {
        div.hide();
    });
});