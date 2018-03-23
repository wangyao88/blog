function getRecommend(){
	$.ajax({
		url : GLOBAL.basePath + "/getRecommend",
		type : "get",
		dataType : "json",
		success : function(result) {
			var blogs = result.data;
			var html = 	'<h2 id="recommend">'+
				        	'<p><span>推荐</span>文章</p>'+
				        '</h2>';
			var text = "";
			$(blogs).each(function(index, blog) {
				var imgUrl = "";
				var blogUrl = "detail.html?id=" + blog.id;
				html += '<div class="blogs">' +
					        '<h3><a href="'+blogUrl+'">'+blog.title+'</a></h3>';
							if(blog.imgUrl){
								imgUrl = '<figure><img src="'+blog.imgUrl+'" ></figure>';
							}else{
								var num = getRandom(0,27);
								console.log(num);
								imgUrl = '<figure><img src="asserts/main/images/'+num+'.jpg" ></figure>';
							}
				    html += imgUrl +
					        '<ul>' +
					          '<p>'+blog.generalization+'</p>' +
					          '<a href="'+blogUrl+'" target="_blank" class="readmore">阅读全文&gt;&gt;</a>' +
					        '</ul>' +
					        '<p class="autor"><span>作者：'+blog.author+'</span><span>分类：【'+blog.flags+'】</span><span>浏览（'+blog.hitNum+'）</span></p>' +
					        '<div class="dateview">'+blog.createDate+'</div>' +
					      '</div>';
				var title = blog.title;
				if(title.length >= 30){
					title = title.substring(0,30);
				}
				text += '<li><a href="'+blogUrl+'">'+title+'</a></li>';
			});
			$("#bloglist").html(html);
			$("#recommendList").html(text);
		},
		error : function() {
			
		}
	});
}

function getRandom(min, max){
    var r = Math.random() * (max - min);
    var re = Math.round(r + min);
    re = Math.max(Math.min(re, max), min)
    return re;
}

$(document).ready(function(){
	getRecommend();
});