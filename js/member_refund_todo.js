// 获取元素
const refund_first = document.querySelector("#refund_first");
const refund_last = document.querySelector("#refund_last");
const goods_first = document.querySelector("#goods_first");
const goods_lasts = document.querySelector(".goods_last");
const radio = document.querySelector("#radio");
const max_number_words = 200;
// 选择按钮
radio.addEventListener("click",function() {
    if (refund_first.checked) {
        goods_lasts.style.display = "none";
        goods_first.checked = true;
    } else if (refund_last.checked) {
        goods_lasts.style.display = "block";
    }
});
const textarea = document.querySelector("#textarea");    // 获取输入框元素
const now_number_words = document.querySelector("#now_number_words");     // 获取现在字数元素
const total_number_words = document.querySelector("#total_number_words");   // 获取总限制字数元素
var timer = undefined;
textarea.addEventListener("focus",function() {
    timer = setInterval(() => {
        now_number_words.innerHTML = textarea.value.length;
        if (now_number_words.innerHTML > max_number_words) {
            now_number_words.style.color = "#ff0000";
        } else {
            now_number_words.style.color = "#999";
        }
    },20);
});
textarea.addEventListener("blur",function() {
    clearInterval(timer);
});
const btn = document.querySelector("#btn");
btn.addEventListener("click",function() {
    if (now_number_words.innerHTML > max_number_words) {
        pop("你输入的字数已超过系统最大限制字数，请删除一下再试！","#ff0000",true);
    }
});