$(function() {
    // 获取元素
    const plus = $(".plus");
    const minus = $(".minus");
    const number = $(".number");
    const lis_null = $("#null");
    var timer = null;
    const cut = $("#count");
    is_show();
    get_price_all();
    // 增、减、选择 商品数量
    plus.click(function() {
        let num = pl_us($(this).siblings(".number").val());
        $(this).siblings(".number").val(num);
        let price = $(this).siblings(".unit_price").html();
        price = price.substr(1);
        $(this).siblings(".subtotal").html("￥" + get_price(price,num).toFixed(2));
        get_price_all()
    });
    minus.click(function() {
        let num = min_us($(this).siblings(".number").val());
        $(this).siblings(".number").val(num);
        let price = $(this).siblings(".unit_price").html();
        price = price.substr(1);
        $(this).siblings(".subtotal").html("￥" + get_price(price,num).toFixed(2));
        get_price_all()
    });
    number.focus(function() {
        timer = setInterval(() => {
            let num = select_num($(this).val());
            $(this).val(num);
            let price = $(this).siblings(".unit_price").html();
            price = price.substr(1);
            $(this).siblings(".subtotal").html("￥" + get_price(price,num).toFixed(2));
            get_price_all()
        },200);
    });
    number.blur(function() {
        clearInterval(timer);
    });
    // 全选按钮
    const top_all = $("#top_all");
    const bottom_all = $("#bottom_all");
    const commodity_select = $(".commodity_select");
    top_all.click(function() {
        if ($(this).prop("checked")) {
            commodity_select.prop("checked",true);
            bottom_all.prop("checked",true);
        } else {
            commodity_select.prop("checked",false);
            bottom_all.prop("checked",false);
        }
        get_price_all();
    });
    bottom_all.click(function() {
        if ($(this).prop("checked")) {
            commodity_select.prop("checked",true);
            top_all.prop("checked",true);
        } else {
            commodity_select.prop("checked",false);
            top_all.prop("checked",false);
        }
        get_price_all();
    });
    commodity_select.click(function() {
        if ($(".commodity_select:checked").length === $(".commodity .li").length) {
            top_all.prop("checked",true);
            bottom_all.prop("checked",true);
        } else {
            top_all.prop("checked",false);
            bottom_all.prop("checked",false);
        }
        get_price_all();
    });
    // 删除单个商品
    const remove_all = $(".remove");
    const success = $("#success");
    const error = $("#error");
    remove_all.click(function() {
        $(this).parents(".li").remove();
        is_show();
        get_price_all();
    });
    // 删除选中商品
    const remove_batch = $("#remove_batch");
    remove_batch.click(function() {
        is_show();
        const num = $(".commodity_select:checked").length;
        if ($(".commodity_select:checked").length === 0) {
            pop("删除失败，你还有没有选中商品！","#ff0000",true);
        } else if ($(".commodity_select:checked").length >= 10) {
            is_confirm("你确定要从购物车删除多个商品吗？删除后无法找回哦！",true);
            success.click(function() {
                $(".commodity_select:checked").parents(".li").remove();
                is_show();
                get_price_all();
                pop("已为您成功删除 " + num + " 个商品！","#00FA9A",true);
            });
        } else {
            $(".commodity_select:checked").parents(".li").remove();
            is_show();
            get_price_all();
        }
    });
    // 清理购物车
    const clear_all = $("#clear_all");
    clear_all.click(function() {
        if ($(".li").length !== 0) {
            is_confirm("你确定要清理购物车吗？",true);
            success.click(function() {
                $(".li").remove();
                get_price_all();
                is_show();
                pop("清理购物车成功！","#00FA9A",true);
            });
        } else {
            pop("购物车已经很干净了，无需清理！","#ff0000",true);
        }
    });
    // 购物车没商品的时候显示对应的文字的函数
    function is_show() {
        if ($(".li").length === 0) {
            lis_null.show();
        } else {
            lis_null.hide();
        }
    }
    // 计算总额的函数 只能用在购物车中
    function get_price_all() {
        let price = 0;
        let count = 0;
        if ($(".commodity_select:checked").length === 0) {
            // 如果为0就强行改为0
            $("#num").html("0");
            $("#total_price").html("￥0.00");
        } else {
            // 勾选了几个商品就显示几个
            count = $(".commodity_select:checked").length;
            $("#num").html(count);
            // 选择的商品的价格加起来
            $(".commodity_select:checked").siblings(".subtotal").each(function(i,ele) {
                price += parseFloat($(ele).html().substr(1));
            });
            $("#total_price").html("￥" + price.toFixed(2));
        }
        cut.html($(".li").length);
    }
});