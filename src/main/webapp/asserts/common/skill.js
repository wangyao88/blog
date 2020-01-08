function getSkill() {
    $.ajax({
        url: GLOBAL.basePath + "/getSkill",
        type: "post",
        dataType: "json",
        success: function (result) {
            var skills = result.data;
            var html = '';
            $(skills).each(function (index, skill) {
                html += '<h2>' + skill.key + '</h2>' + skill.value;
            });
            $("#skill").html(html);
        },
        error: function () {
            console.log("获取职业技能失败！")
        }
    });
}

$(document).ready(function () {
    getSkill();
});