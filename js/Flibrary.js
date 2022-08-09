/*
* 函数说明：
*     计算总价格的函数
*     第一个参数为单价
*     第二个参数为数量
* 最好使用数字提交，不用数字也可以，这里已经给你强行转换了。
* 返回值类型是浮点型，需要保留小数的话得自己设置
*/
function get_price(unit,number) {
    return parseFloat(unit) * parseFloat(number);
}
/*
* 函数说明：
*     可以输入任意字符
*     只需要传一个 value 值 可以是输入框的 value 也可以是自定义的数字也可以是字母、汉字、符号等等
*     如果你传入的不是一个数字 或者数字等于 1 则强行将数值改为 1 也就是最小值
*     如果数值大于等于 9999 则强行将数值改为 9999 也就是最大值
*     否则就照常输出，该是多少就是多少
* 返回值是整数类型
*/
function select_num(value) {
    let number = parseInt(value);
    if (isNaN(number) || number < "1") {
        number = 1;
        return number;
    } else if (number >= "9999") {
        number = 9999;
        return number;
    } else {
        return number;
    }
}
/*
* 函数说明：
* 第一个参数是传内容 自定义内容
* 第二个参数是传文字颜色 十六进制 rgb rgba 都可以
* 第三个参数是传是否显示
*/
function pop(content,color,flag) {
    const box = document.querySelector("#box");   // 获取弹窗元素
    var con = document.querySelector("#con");   // 获取内容元素
    if (flag) {
        con.innerHTML = content;
        box.style.display = "block";
        con.style.color = color;
    } else {
        box.style.display = "none";
        con.style.color = color;
        con.innerHTML = content;
    }
    const success = document.querySelector(".success");
    success.addEventListener("click",function() {
        box.style.display = "none";
    });
}
/*
* 函数说明：
* 第一个参数传内容字符串
* 第二个参数是否显示
*/
function is_confirm(content_str,flag) {
    const box = document.querySelector("#shade");   // 获取弹窗元素
    const con = document.querySelector("#content");  // 获取元素内容
    const success = document.querySelector("#success");   // 获取成功按钮
    const error = document.querySelector("#error");    // 获取失败按钮
    // 如果第二个参数为 true 则显示确认框，否则隐藏，默认为隐藏
    if (flag) {
        con.innerHTML = content_str;    // 修改内容
        box.style.display = "block";   // 让确认框显示
        // 点击成功或取消按钮后先隐藏确认框再清空内容
        success.onclick = function() {
            box.style.display = "none";
            con.innerHTML = "";
        }
        error.onclick = function() {
            box.style.display = "none";
            con.innerHTML = "";
        }
    } else {
        box.style.display = "none";
        con.innerHTML = content_str;
    }
}
/*
* 函数说明：
*     递增份数
*     只需要传一个 value 值 可以是输入框的 value 也可以是自定义的数字
*     如果你的数字大于等于 9999 则不会递增而强行改变数值为 9999 也就是最大值
* 返回值是整数类型
*/
function pl_us(value) {
    let number = parseInt(value);
    if (number < "9999") {
        number += 1;
        return number;
    } else {
        number = 9999;
        pop("亲，请不要野性消费哦~","#ff0000",true);
        return number;
    }
}
/*
* 函数说明：
*     递减份数
*     只需要传一个 value 值 可以是输入框的 value 也可以是自定义的数字
*     如果你的数字小于 1 则不会递减而强行改变数值为 1 也就是最小值
* 返回值是整数类型
*/
function min_us(value) {
    let number = parseInt(value);
    if (number > "1") {
        number -= 1;
        return number;
    } else {
        number = 1;
        pop("亲，最少购买一份哦~","#ff0000",true);
        return number;
    }
}
/*
*  函数说明：
* 上传单个图片函数
* 第一个参数传图片元素
* 如果不是限制的这些后缀名，则会返回 false 否则返回 true
*/
function uploadImg(user_img) {
    const patt = /jpg|jpeg|png|webp|gif/g;   // 正则表达式 匹配里面的包含的字符
    //  如果找不到正则表达式中的对应字符 则返回 false 否则返回 true
    if (!patt.test(user_img.src)) {
        return false;
    } else {
        return true;
    }
}
/*
* 函数说明：
* 上传多个图片函数
* 第一个参数传图片元素
* 如果不是限制的这些后缀名，则会返回 false 否则返回 true
*/
function uploadImgAll(user_img_all) {
    const patt = /jpg|jpeg|png|webp|gif/g;
    for (let i = 0; i < user_img_all.length; i++) {
        if (!patt.test(user_img_all[i].src)) {
            return false;
        } else {
            return true;
        }
    }
}
// 判断浏览器类型
// 返回浏览器名字
function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1
        && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1
        && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
    if (isOpera) {
        return "Opera";
    }
    if (isEdge) {
        return "Edge";
    }
    if (isFF) {
        return "Firefox";
    }
    if (isSafari) {
        return "Safari";
    }
    if (isChrome) {
        return "Chrome";
    }
}