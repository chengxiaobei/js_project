(function(){

})() ;

require(['jquery', 'global', 'jsmart'],function($,global,_){

	var archives_sample_tpl = new jSmart(document.getElementById('archives_sample_tpl').innerHTML) ;

	// 页面渲染
	(function(){
		var data = {} ;
		var res = archives_sample_tpl.fetch(data) ;
		$('#wrap1').html(res) ;
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;


	})() ;
}) ;