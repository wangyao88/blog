function getId(){
	var search = location.search;
	var index = search.indexOf("=") + 1;
	var id = search.substring(index, search.length);
	return id;
}

function getDetail(id){
	$.ajax({
		url : GLOBAL.basePath + "/getBlog",
		type : "post",
		data : {
			id : id
		},
		dataType : "json",
		success : function(result) {
			var blog = result.data;
			var html = '<div class="about_box">' +
							'<h2 class="nh1">' +
								'<span>您现在的位置是：网站首页>>【'+blog.title+'】</span><b>【'+blog.title+'】</b>' +
							'</h2>' +
							'<div class="f_box">' +
								'<p class="a_title">'+blog.title+'</p>' +
								'<p class="p_title"></p>' +
								'<p class="box_p">' +
									'<span>发布时间：'+blog.createDate+'</span><span>作者：'+blog.author+'</span><span>分类：'+blog.flags+'</span><span>点击：'+blog.hitNum+'</span>' +
								'</p>' +
							'</div>' +
							'<ul class="about_content">' +
							blog.content +
							'</ul>' +
							'<div class="shang_a">' +
								'<div class="one"></div>' +
								'<div class="two">' +
									'<img src="asserts/detail/images/weixin.png" alt="" width="200" height="200">' +
								'</div>' +
							'</div>' +
						'</div>';
			$("#content").html(html);
		},
		error : function() {
			
		}
	});
}

$(document).ready(function(){
	getDetail(getId());
});