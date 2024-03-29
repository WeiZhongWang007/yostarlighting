
$(function(){
	// 初始化插件
	$("#demo").zyUpload({
		width            :   "650px",                 // 宽度
		height           :   "400px",                 // 宽度
		itemWidth        :   "140px",                 // 文件项的宽度
		itemHeight       :   "120px",                 // 文件项的高度
		url              :  "uploadFile.do",  // 上传文件的路径
		multiple         :   true,                    // 是否可以多个文件上传
		dragDrop         :   false,                    // 是否可以拖动上传文件
		del              :   true,                    // 是否可以删除文件
		finishDel        :   false,  				  // 是否在上传文件完成后删除预览
		/* 外部获得的回调接口 */
		onSelect: function(files, allFiles){                    // 选择文件的回调方法
		},
		onDelete: function(file, surplusFiles){                     // 删除一个文件的回调方法
			
		},
		onSuccess: function(file){                    // 文件上传成功的回调方法
			console.log(file);
		},
		onFailure: function(file){                    // 文件上传失败的回调方法
			
		},
		onComplete: function(responseInfo){           // 上传完成的回调方法
			
		}
	});
});

