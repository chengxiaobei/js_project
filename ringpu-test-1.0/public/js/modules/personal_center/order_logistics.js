// 物流信息
(function(){

})();

require(['jquery', 'global', 'jsmart'],function($,global,_){

	var order_code = getQueryString('order_code') ;
	var express_company = getQueryString('express_company') || 'tiandihuayu' ;

	var order_logistics_tpl = new jSmart(document.getElementById('order_logistics_tpl').innerHTML) ;

	// 页面渲染
	(function(){
		var url = global_path +  'index.php/personalcenter/kuaidiLogistics' ;
		var p = {
			order_code : order_code ,
			express_company : express_company 
		} ;
		// console.info(p) ;
		commonAjax(url,p).then(function(data){
			console.info(data) ;
			if(data && data.status && data.status == '2000'){
				var res = order_logistics_tpl.fetch(data['data']) ;
				$('#wrap1').html(res) ;
			}
			else{
				var res = order_logistics_tpl.fetch([]) ;
				$('#wrap1').html(res) ;
				var error_html = getErrorPage('nodata') ;
				$('#wrap1 section').hide() ;
				$('#wrap1').append(error_html) ;
			}
		}).fail(function(){
			var res = order_logistics_tpl.fetch([]) ;
			$('#wrap1').html(res) ;
			var error_html = getErrorPage('nodata') ;
			$('#wrap1 section').hide() ;
			$('#wrap1').append(error_html) ;
		}) ;
	})() ;


	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;
		
	})() ;
}) ;