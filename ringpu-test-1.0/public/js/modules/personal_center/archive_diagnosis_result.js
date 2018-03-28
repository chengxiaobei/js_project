(function(){

})() ;

// 诊断结果
require(['jquery', 'global', 'jsmart'],function($,global,_){

	var code = getQueryString('code') ;

	// 页面渲染
	(function(){
		var url = global_path + "" ;
		var p = {
			code : code 
		} ;

	})() ;

	//  业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;
		$('#wrap1').on('click','.result_item',function(){
			$(this).toggleClass('zdjg-shang') ;
			$(this).toggleClass('zdjg-xia') ;
			if($(this).hasClass('zdjg-shang')){
				$(this).next('div').slideDown() ;
			}else{
				$(this).next('div').slideUp() ;
			}
		}) ;
	})() ;

}) ;