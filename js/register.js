$(function() {
    const if_hidden = $("#if_hidden");  // 获取显示隐藏密码按钮
    var flag = true;   // 设置临时变量为真
    const user_name = $("#user_name");     // 获取用户名元素
    const pwd = $("#pwd");    // 获取密码元素
    const pwd2 = $("#pwd2");  // 获取确认密码元素
    const confirm = $("#confirm");   // 获取验证码元素
    const btn = $("#submit");   // 获取提交框
    // 点击按钮切换密码状态为显示还是隐藏
    if_hidden.click(function() {
        if (flag) {
            if_hidden.html("");
            pwd.attr({type: "text"});
            flag = false;
        } else {
            if_hidden.html("");
            pwd.attr({type: "password"});
            flag = true;
        }
    });
    // 判断用户的输入
    const loading = $("#outer");
    btn.click(function() {
        const agree = $("#agree:checked");
        if (agree.length === 0) {
            pop("请先阅读并同意“《顾里商城用户协议》”及“《顾里商城用户隐私政策》”后重试！","#ff0000",true);
        } else if (user_name.val() === null || user_name.val() === "" || pwd.val() === null || pwd.val() === "" || pwd2.val() === null || pwd2.val() === "" || confirm.val() === null || confirm.val() === "") {
            pop("请把字段填写完整！","#ff0000",true);
        } else if (pwd.val().length < 6 || pwd.val().length > 16) {
            pop("密码字段最少填写6个字符，最多填写16个字符！","#ff0000",true);
        } else if (pwd.val() !== pwd2.val()) {
            pop("两次密码不同，请重新输入！","#ff0000",true);
        } else {
            pop("恭喜，注册成功！","#00FA9A",true);
        }
    });
});