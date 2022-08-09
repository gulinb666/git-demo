$(function() {
    const pays = $(".pays");   // 获取支付方式的所有元素
    // 简单的 tab 栏切换
    pays.click(function() {
        $(this).attr({class: "pays pay_pink"}).siblings(".pays").attr({class: "pays"});
    });
    const add_address_btn = $("#add_address");   // 获取添加地址按钮
    const add_address_box = $("#add_address_box");  // 获取添加地址信息的父盒子元素
    const close_btn = $("#close_btn");   // 获取关闭按钮元素
    // 点击按钮显示或隐藏添加地址信息的父盒子
    add_address_btn.click(function() {
        add_address_box.stop().fadeIn();
    });
    close_btn.click(function() {
        add_address_box.stop().fadeOut();
    });
    const userName = $("#userName");     // 收货人名称
    const userPhone = $("#userPhone");    // 收货人电话
    const region = $("#region");    // 地区
    const address = $("#address");   // 详细地址
    const remark = $("#remark");    // 备注
    const save = $("#save");   // 保存按钮
    // 点击按钮后检测有没有填写完整 没填写完整不予提交！
    save.click(function() {
        if (userName.val() === null || userPhone.val() === null || region.val() === null || address.val() === null || userName.val() === "" || userPhone.val() === "" || region.val() === "" || address.val() === "") {
            pop("请把带红色“*”号的字段填写完整！","#ff0000",true);
        }
    });
    const show_price = $("#show_price");   // 最下面的应付价格元素
    getPrice();   // 调用函数
    // 计算总价钱函数 亲测没问题
    function getPrice() {
        let price = 0.00;   // 先定义一个存价钱的变量
        // 循环遍历所有的价钱元素
        $(".subtotal").each(function(i,ele) {
            // 找到当前商品的元素，因为有 ￥ 所以要去掉第一个字符，找到当前的价钱的兄弟也就是份数，后面同理
            // 让单价和份数相乘得到当前商品的总价
            // 让之前定义好的价钱变量加上前面两个商品的总价，并重新赋值
            price += parseFloat($(this).html().substr(1)) * parseFloat($(this).siblings(".copies").html().substr(1))
        });
        // 修改应付价格 保留两位小数
        show_price.html("￥" + price.toFixed(2));
    }
});