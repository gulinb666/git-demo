$(function() {
    const textarea = $("#textarea");
    const now_number_words = $("#now_number_words");
    let timer = undefined;
    const btn = $("#btn");
    const max_number_words = 200;
    textarea.focus(function() {
        timer = setInterval(() => {
            now_number_words.html(textarea.val().length);
            if (now_number_words.html() > max_number_words) {
                now_number_words.css("color","#ff0000");
            } else {
                now_number_words.css("color","#999");
            }
        },20);
    });
    textarea.blur(function() {
        clearInterval(timer);
    });
    btn.click(function() {
        if (textarea.val().length > max_number_words) {
            pop("你输入的字数已超过系统最大限制字数，请删除一下再试！","#ff0000",true);
        }
    });
    const goods_first = $("#goods_first");
    const receive = $("#receive");
    const radio = $("#radio");
    const refund_first = $("#refund_first");
    radio.click(function() {
        if (goods_first.prop("checked")) {
            receive.hide();
            refund_first.prop("checked",true);
        } else {
            receive.show();
        }
    });
});