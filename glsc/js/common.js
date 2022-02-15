$(function() {
    // 顶部导航 start
    const serVice = $("#serVice");
    const Phone = $("#Phone");
    const navigAtion = $("#navigAtion");
    const service = $("#service");
    const phone = $("#phone");
    const navigation = $("#navigation");
    serVice.mouseover(function() {
        service.stop().slideDown();
    });
    serVice.mouseout(function() {
        service.stop().slideUp();
    });
    Phone.mouseover(function() {
        phone.stop().slideDown();
    });
    Phone.mouseout(function() {
        phone.stop().slideUp();
    });
    navigAtion.mouseover(function() {
        navigation.stop().slideDown();
    });
    navigAtion.mouseout(function() {
        navigation.stop().slideUp();
    });
    // 顶部导航 end
    // 更多分类 start
    const more = $("#more");
    const classify_more = $("#classify_more");
    more.mouseover(function() {
        classify_more.stop().slideDown();
    });
    more.mouseout(function() {
        classify_more.stop().slideUp();
    });
    // 更多分类 end
    const shop_car = $("#shop_car");
    shop_car.click(function() {
        window.location.href = "shopcar.html";
    });
});