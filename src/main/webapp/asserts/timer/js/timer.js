function getRecommend(){
	$.ajax({
		url : GLOBAL.basePath + "/getRecommend",
		type : "post",
		dataType : "json",
		success : function(result) {
			var blogs = result.data;
			var html = 	'<h2 id="recommend">'+
				        	'<p><span>推荐</span>文章</p>'+
				        '</h2>';
			var text = "";
			$(blogs).each(function(index, blog) {
				var blogUrl = "detail.html?id=" + blog.id;
				var title = blog.title;
				if(title.length >= 30){
					title = title.substring(0,30);
				}
				text += '<li><a href="'+blogUrl+'" target="_blank">'+title+'</a></li>';
			});
			$("#recommendList").html(text);
		},
		error : function() {
			
		}
	});
}

function getRecent(){
	$.ajax({
		url : GLOBAL.basePath + "/getRecent",
		type : "post",
		dataType : "json",
		success : function(result) {
			var blogs = result.data;
			var text = "";
			$(blogs).each(function(index, blog) {
				var blogUrl = "detail.html?id=" + blog.id;
				var title = blog.title;
				if(title.length >= 30){
					title = title.substring(0,30);
				}
				text += '<li><a href="'+blogUrl+'" target="_blank">'+title+'</a></li>';
			});
			$("#recentList").html(text);
		},
		error : function() {
			
		}
	});
}

$(document).ready(function(){
	getRecommend();
	getRecent();
});