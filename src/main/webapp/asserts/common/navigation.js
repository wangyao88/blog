function getNavigation() {
    $.ajax({
        url: GLOBAL.basePath + "/getNavigation",
        type: "post",
        dataType: "json",
        success: function (result) {
            var navigations = result.data;
            var html = '';
            $(navigations).each(function (index, navigation) {
                html += '<a href="' + navigation.key + '">' + navigation.value + '</a>';
            });
            $("#topnav").html(html);
        },
        error: function () {
            console.log("获取导航栏信息失败！")
        }
    });
}

$(document).ready(function () {
    getNavigation();
});