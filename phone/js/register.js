$(function() {
    const userName = $("#userName");
    const password = $("#password");
    const confirmPassword = $("#confirmPassword");
    const confirms = $("#confirm");
    const agree = $("#agree");
    const btn = $("#btn");
    btn.click(function() {
        if (!agree.prop("checked")) {
            pop("请先阅读并同意“《顾里商城用户协议》”及“《顾里商城用户隐私政策》”后重试！","#ff0000",true);
        } else if (userName.val() === null || password.val() === null || confirmPassword.val() === null || confirms.val() === null || userName.val() === "" || password.val() === "" || confirmPassword.val() === "" || confirms.val() === "") {
            pop("请把字段填写完整！","#ff0000",true);
        } else if (password.val().length < 6 || password.val().length > 16) {
            pop("密码字段最少填写6个字符，最多填写16个字符！","#ff0000",true);
        } else if (password.val() !== confirmPassword.val()) {
            pop("两次密码不同，请重新输入！","#ff0000",true);
        } else {
            pop("恭喜，注册成功！","#00FA9A",true);
        }
    });
});