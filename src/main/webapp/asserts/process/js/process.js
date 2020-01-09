function getProcess() {
    $.ajax({
        url: GLOBAL.basePath + "/getProcess",
        type: "post",
        dataType: "json",
        success: function (result) {
            var processes = result.data;
            var event_year = '';
            var event_list = '';
            $(processes).each(function (index, process) {
                if (index === 0) {
                    event_year += '<li class="current"><label for="' + process.key + '">' + process.key + '</label></li>';
                } else {
                    event_year += '<li><label for="' + process.key + '">' + process.key + '</label></li>';
                }
                event_list += '<div><h3 id="' + process.key + '">' + process.key + '</h3>' + process.value + '</div>';
            });
            $("#event_year").html(event_year);
            $("#event_list").html(event_list);
            $('label').click(function () {
                $('.event_year>li').removeClass('current');
                $(this).parent('li').addClass('current');
                var year = $(this).attr('for');
                $('#' + year).parent().prevAll('div').slideUp(800);
                $('#' + year).parent().slideDown(800).nextAll('div').slideDown(800);
            });
        },
        error: function () {
            console.log("获取心路历程失败！")
        }
    });
}

$(document).ready(function () {
    getNavigation();
    getBaseInfo();
    getLink();
    getProcess();
});