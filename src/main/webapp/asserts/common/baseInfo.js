function getBaseInfo() {
    $.ajax({
        url: GLOBAL.basePath + "/getBaseInfo",
        type: "post",
        dataType: "json",
        success: function (result) {
            var baseInfos = result.data;
            var html = '';
            $(baseInfos).each(function (index, baseInfo) {
                html += '<p>' + baseInfo.key + ':' + baseInfo.value + '</p>';
            });
            $("#baseInfo").html(html);
        },
        error: function () {
            console.log("获取基本信息失败！")
        }
    });
}

$(document).ready(function () {
    getBaseInfo();
});