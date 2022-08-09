$(function() {
    // 获取元素
    const plus = $(".plus");
    const minus = $(".minus");
    const num = $(".num");
    let timer = undefined;
    const count_price = $("#count_price");
    const goods_none = $("#goods_none");
    const operation = $("#operation");
    const select = $(".select");
    // 先计算一遍价格
    get_price_all();
    // 加 减 改 份数并计算价钱
    plus.click(function() {
        // 获取输入框的值
        let number = pl_us($(this).siblings(".num").val());
        $(this).siblings(".num").val(number);
        // 获取当前的价格
        let price = $(this).siblings(".price").html();
        price = price.substr(1);
        // 计算当前商品的总价
        $(this).siblings(".total_price").html("￥" + get_price(price,number).toFixed(2));
        // 计算勾选的所有商品的总价
        get_price_all();
    });
    minus.click(function() {
        let number = min_us($(this).siblings(".num").val());
        $(this).siblings(".num").val(number);
        let price = $(this).siblings(".price").html();
        price = price.substr(1);
        $(this).siblings(".total_price").html("￥" + get_price(price,number).toFixed(2));
        get_price_all();
    });
    num.focus(function() {
        timer = setInterval(() => {
            let number = select_num($(this).val());
            $(this).val(number);
            let price = $(this).siblings(".price").html();
            price = price.substr(1);
            $(this).siblings(".total_price").html("￥" + get_price(price,number).toFixed(2));
            get_price_all();
        },50);
    });
    num.blur(function() {
        clearInterval(timer);
        get_price_all();
    });
    // 获取元素
    const goods = $("#ul li");
    let flag_num = 0;
    const select_all = $("#select_all");
    const delete_goods = $("#delete_goods");
    // 如果为 flag_num为0则显示删除选中商品的按钮，否则隐藏
    operation.click(function() {
        if (flag_num === 0) {
            operation.html("完成");
            delete_goods.show();
            flag_num = 1;
        } else if (flag_num === 1) {
            operation.html("管理");
            delete_goods.hide();
            flag_num = 0;
        }
    });
    // 删除选中商品的参数
    delete_goods.click(function() {
        const num = $(".select:checked").length;
        // 如果选中的商品等于你购物车所有的商品则提示是否要删除所有商品，如果没有选中提示没有选中商品，否则不提示正常删除
        if ($(".select:checked").length >= 10) {
            is_confirm("你确定要从购物车删除多个商品吗？删除后无法找回哦！","#ff0000",true);
            const success = $("#success");   // 获取成功按钮
            success.click(function() {
                $(".select").parents(".goods").remove();
                get_price_all();
                pop("已为您成功删除 " + num + " 个商品！","#00FA9A",true);
            });
        } else if ($(".select:checked").length === 0) {
            pop("你还没有选择商品，无法操作！","#ff0000",true);
        } else {
            $(".select:checked").parents(".goods").remove();
            get_price_all();
        }
    });
    // 全选操作
    select.click(function() {
        if ($(".select:checked").length === goods.length - 1) {
            select_all.prop("checked",true);
        } else {
            select_all.prop("checked",false);
        }
        get_price_all();
    });
    select_all.click(function() {
        if ($(this).prop("checked")) {
            select.prop("checked",true);
        } else {
            select.prop("checked",false);
        }
        get_price_all();
    });
    // 计算总价的函数
    function get_price_all() {
        const count = $("#count");
        count.html($("#ul li").length - 1);
        // 如果没有商品就显示空 否则不显示
        if ($("#ul li").length - 1 === 0) {
            goods_none.show();
        } else {
            goods_none.hide();
        }
        let money = 0;
        // 选择的商品的价格加起来
        $(".select:checked").siblings(".goods-info").children(".title").siblings(".total_price").each(function(i,ele) {
            money += parseFloat($(ele).html().substr(1));
        });
        count_price.html("￥" + money.toFixed(2) + "元");
    }
});