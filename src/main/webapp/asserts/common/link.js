function getLink() {
    $.ajax({
        url: GLOBAL.basePath + "/getLink",
        type: "post",
        dataType: "json",
        success: function (result) {
            var links = result.data;
            var html = '';
            $(links).each(function (index, link) {
                html += '<li><a href="' + link.value + '" target="_blank">' + link.key + '</a></li>';
            });
            $("#link").html(html);
        },
        error: function () {
            console.log("获取友情链接失败！")
        }
    });
}