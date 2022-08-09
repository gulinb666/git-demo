$(function() {
    const uploadFile = $("#uploadFile");    // 获取上传文件表单元素
    const showUploadFile = $("#showUploadFile");    // 获取 img 图片元素
    const img_type = ["jpg","jpeg","png","webp","gif"];    // 存图片格式的数组，用来显示
    // 等待用户选择完毕执行下面的操作
    uploadFile.change(function() {
        const file = this.files[0];    // 获取当前图片
        const reader = new FileReader();    // 创建 FileReader 对象
        reader.readAsDataURL(file);    // 读取 file 对象并生成 url 格式的字符串
        // 等待加载完成后执行
        reader.addEventListener("load",function(res) {
            showUploadFile.attr({src: res.target.result});     // 将图片的路径改为当前的路径
            showUploadFile.show();    // 让图片显示出来
            // 如果不匹配正则表达式 则输出一个提示框并隐藏图片，让用户知道自己传错了图片格式
            if (!uploadImg(document.querySelector("#showUploadFile"))) {
                pop("上传失败，请上传正确的图片格式！如：[" + img_type + "]！","#ff0000",true);
                showUploadFile.hide();
            } else {
                let size = document.querySelector("#uploadFile").files[0].size / 1024;     // 获取图片大小
                let maxSize = 1024 * 2;    // 最大上传 2M
                // 如果大于最大上传限制则不继续操作！
                if (size >= maxSize) {
                    pop("上传失败，图片不能大于2M！","#ff0000",true);
                    showUploadFile.hide();
                }
            }
        });
    });
    const uploadBtn = $("#uploadBtn");     // 获取上传按钮元素
    // 点击上传按钮后执行下面的操作
    uploadBtn.click(function() {
        // 如果不匹配正则表达式 则输出一个提示框 ，让用户知道自己传错了图片格式
        if (!uploadImg(document.querySelector("#showUploadFile"))) {
            pop("上传失败，请上传正确的图片格式，如：[" + img_type + "]！","#ff0000",true);
        } else {
            let size = document.querySelector("#uploadFile").files[0].size / 1024;     // 获取图片大小
            let maxSize = 1024 * 2;    // 最大上传 2M
            // 如果大于最大上传限制则不继续操作！
            if (size >= maxSize) {
                pop("上传失败，图片不能大于2M！","#ff0000",true);
                showUploadFile.hide();
            }
        }
    });
});