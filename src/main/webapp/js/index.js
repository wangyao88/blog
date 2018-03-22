function getRecommend(){
	$.ajax({
		url : "http://127.0.0.1:8888/cloudnote/blog/getRecommend",
		type : "get",
		dataType : "json",
		success : function(result) {
			var blogs = result.data;
			$("#recommend").after(blogs);
//			$(blogs).each(function(index, blog) {
//				console.log(blog);
//			});
		},
		error : function() {
			
		}
	});
}

$(document).ready(function(){
	getRecommend();
});