function getNavigation() {
    $.ajax({
        url: GLOBAL.basePath + "/getNavigation",
        type: "post",
        dataType: "json",
        success: function (result) {
            var navigations = result.data;
            var html = '';
            $(navigations).each(function (index, navigation) {
                html += '<a href="' + navigation.value + '">' + navigation.key + '</a>';
            });
            $("#topnav").html(html);
            configSilder();
        },
        error: function () {
            console.log("获取导航栏信息失败！")
        }
    });
}