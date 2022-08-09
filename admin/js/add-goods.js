$(function() {
    const upload_img = document.querySelector("#upload_img");    // 获取表单元素
    const upload_file = document.querySelector("#upload_file");   // 获取图片元素
    // 等待用户选择图片然后依次显示出来
    upload_img.onchange = function() {
        const upload = document.querySelector("#upload");
        for (let item of this.files) {
            // 创建 FileReader 对象
            const reader = new FileReader();
            // 等待加载完毕后输出图片
            reader.onload = function() {
                let lis = document.createElement("li");  // 动态创建 li 元素
                // 修改 li 的内容
                lis.innerHTML = "<div class='close_btn'>X</div><img src='" + this.result + "' class='upload_user_img'>";
                upload_file.prepend(lis);    // 把 li 添加到 ul 里面
                const img_type = ["jpg","jpeg","png","webp","gif"];     // 图片的后缀名格式
                const imgs = document.querySelectorAll(".upload_user_img");    // 获取所有的动态创建的图片元素
                const close_btn = document.querySelectorAll(".close_btn");     // 获取所有动态创建的删除按钮元素
                // 如果后缀名不对则提示用户上传图片！并删除之前的图片
                if (uploadImgAll(imgs) !== true) {
                    pop("上传失败，请重新上传正确的图片格式！如：[" + img_type + "]！","#ff0000",true);
                    for (let i = 0; i < close_btn.length; i++) {
                        close_btn[i].click();
                    }
                }
                var files = document.querySelector("#upload_img").files;     // 获取图片大小
                // 循环遍历所有图片的大小
                for (let i = 0; i < files.length; i++) {
                    let size = files[i].size / 1024;   // 用当前的图片大小除 1024 就能得到它的 kb 大小
                    let maxSize = 1024 * 2;    // 最大上传 2M
                    // 如果大于 2M 则弹出上传失败的弹窗，并告知用户图片太大，并删除所有图片！
                    if (size > maxSize) {
                        pop("上传失败，请保证单个图片大小在2M以内！","#ff0000",true);
                        for (let i = 0; i < close_btn.length; i++) {
                            close_btn[i].click();
                        }
                    }
                }
            };
            reader.readAsDataURL(item);
        }
    };
    // 删除按钮的操作
    // 因为删除按钮是动态创建的，所以需要用到事件委托
    upload_file.addEventListener("click",function (e) {
        // 如果点击的是删除按钮(div)元素则肯定是离 li 最近的 div，也就是当前的 li
        if (e.target.nodeName === "DIV") {
            // 删除
            upload_file.removeChild(e.target.parentNode);
        }
    });
    const submit = $("#submit");   // 获取提交按钮
    // 点击提交按钮后的操作
    submit.click(function() {
        let lis = $("#upload_file li");     // 获取 ul 下的 li元素
        // 如果 li 的长度 - 1 大于 10 则弹出弹窗，告知用户最大只能上传10张图片
        // 因为 上面获取的 li 元素原来就有一个，所以需要 - 1
        if (lis.length - 1 > 10) {
            pop("最多只能上传10张图片哦！","#ff0000",true);
        }
    });
})