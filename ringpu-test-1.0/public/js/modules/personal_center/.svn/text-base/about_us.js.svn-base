(function(){

})() ;

require(['jquery', 'global'],function($,global){

	// 是否来自app
	var fromapp = getQueryString('fromapp') ;

	// 页面初始化
	(function(){
		if(!fromapp){
			$('#wrap1 header').show() ;
			$('#wrap1 section').css('marginTop','44px') ;
		}
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			// window.location.href = "settings_list.php" ;
			window.history.go(-1) ;
		}) ;
	})() ;
}) ;