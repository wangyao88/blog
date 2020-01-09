function getRecommend() {
    $.ajax({
        url: GLOBAL.basePath + "/getRecommend",
        type: "post",
        dataType: "json",
        success: function (result) {
            var blogs = result.data;
            var html = '<h2 id="recommend">' +
                '<p><span>推荐</span>文章</p>' +
                '</h2>';
            var text = "";
            $(blogs).each(function (index, blog) {
                var imgUrl = "";
                var blogUrl = "detail.html?id=" + blog.id;
                html += '<div class="blogs">' +
                    '<h3><a href="' + blogUrl + '">' + blog.title + '</a></h3>';
                if (blog.imgUrl) {
                    imgUrl = '<figure><img src="' + blog.imgUrl + '" ></figure>';
                } else {
                    var num = getRandom(0, 27);
                    imgUrl = '<figure><img src="asserts/main/images/' + num + '.jpg" ></figure>';
                }
                html += imgUrl +
                    '<ul>' +
                    '<p>' + blog.generalization + '</p>' +
                    '<a href="' + blogUrl + '" target="_blank" class="readmore">阅读全文&gt;&gt;</a>' +
                    '</ul>' +
                    '<p class="autor"><span>作者：' + blog.author + '</span><span>分类：【' + blog.flags + '】</span><span>浏览（' + blog.hitNum + '）</span></p>' +
                    '<div class="dateview">' + blog.createDate + '</div>' +
                    '</div>';
                var title = blog.title;
                if (title.length >= 30) {
                    title = title.substring(0, 30);
                }
                text += '<li><a href="' + blogUrl + '" target="_blank">' + title + '</a></li>';
            });
            $("#bloglist").html(html);
            $("#recommendList").html(text);
        },
        error: function () {

        }
    });
}

function getRandom(min, max) {
    var r = Math.random() * (max - min);
    var re = Math.round(r + min);
    re = Math.max(Math.min(re, max), min)
    return re;
}

function getRecent() {
    $.ajax({
        url: GLOBAL.basePath + "/getRecent",
        type: "post",
        dataType: "json",
        success: function (result) {
            var blogs = result.data;
            var text = "";
            $(blogs).each(function (index, blog) {
                var blogUrl = "detail.html?id=" + blog.id;
                var title = blog.title;
                if (title.length >= 30) {
                    title = title.substring(0, 30);
                }
                text += '<li><a href="' + blogUrl + '" target="_blank">' + title + '</a></li>';
            });
            $("#recentList").html(text);
        },
        error: function () {

        }
    });
}

$(document).ready(function () {
    getNavigation();
    getBaseInfo();
    getLink();
    getRecommend();
    getRecent();
});