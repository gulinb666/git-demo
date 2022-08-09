const views_field_qs_stars = document.querySelectorAll("#views-field-qs-stars span");    // 获取星星元素
const evaluation_scoring = document.querySelector("#evaluation_scoring");  // 获取字段元素
// 遍历所有的星星 判断点了哪个星星，如果点的最后一个星星则五个星星全部点亮，以此类推
for (let i = 0; i < views_field_qs_stars.length; i++) {
    views_field_qs_stars[i].setAttribute("data-index",i);
    let data_index = views_field_qs_stars[i].getAttribute("data-index");
    views_field_qs_stars[i].onclick = function() {
        if (data_index === "4") {
            font();
            evaluation_scoring.style.display = "inline-block";
            evaluation_scoring.style.color = "#0000ff";
            evaluation_scoring.innerHTML = "非常好";
        } else if (data_index === "3") {
            icon();
            font(1);
            evaluation_scoring.style.display = "inline-block";
            evaluation_scoring.style.color = "#0000ff";
            evaluation_scoring.innerHTML = "比较好";
        } else if (data_index === "2") {
            icon();
            font(2)
            evaluation_scoring.style.display = "inline-block";
            evaluation_scoring.style.color = "#000";
            evaluation_scoring.innerHTML = "一般般";
        } else if (data_index === "1") {
            icon();
            font(3);
            evaluation_scoring.style.display = "inline-block";
            evaluation_scoring.style.color = "#ff0000";
            evaluation_scoring.innerHTML = "比较差";
        } else if (data_index === "0") {
            icon();
            font(4)
            evaluation_scoring.style.display = "inline-block";
            evaluation_scoring.style.color = "#ff0000";
            evaluation_scoring.innerHTML = "非常差";
        }
    };
}
// 改图标
function icon() {
    for (let i = 0; i < views_field_qs_stars.length; i++) {
        views_field_qs_stars[i].style.color = "#000";
        views_field_qs_stars[i].innerHTML = "&#xe62d;";
    }
}
// 改图标 参数可传可不传
function font(num) {
    if (num === undefined || num === null) {
        for (let i = 0; i < views_field_qs_stars.length; i++) {
            views_field_qs_stars[i].style.color = "#FFD700";
            views_field_qs_stars[i].innerHTML = "&#xe634";
        }
    } else {
        for (let i = 0; i < views_field_qs_stars.length - num; i++) {
            views_field_qs_stars[i].style.color = "#FFD700";
            views_field_qs_stars[i].innerHTML = "&#xe634";
        }
    }
}