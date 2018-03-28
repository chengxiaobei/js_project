(function(){

})() ;

require(['jquery', 'global', 'jsmart'],function($,global,_){

	var orderNum = getQueryString('orderNum') ;

	var orders_status_list_tpl = new jSmart(document.getElementById('orders_status_list_tpl').innerHTML) ;

	// 页面渲染
	(function(){
		var url = global_path + 'index.php/personalcenter/getOrderStatus_list' ;
		var p = {
			order_code : orderNum
		} ;
		commonAjax(url,p).then(function(data){
			console.info(data) ;
			if(data && data.status && data.status == '2000'){
				ret = data ;
				var res = orders_status_list_tpl.fetch(ret) ;
				$('#wrap1').html(res) ;
			}
			else{
				var res = orders_status_list_tpl.fetch({data:[]}) ;
				$('#wrap1').html(res) ;
				var nd_html = getErrorPage('nodata') ;
				$('#wrap1 section').hide() ;
				$('#wrap1').append(nd_html) ;
			}
		}).fail(function(){
			var nd_html = getErrorPage('system') ;
			$('#wrap1').html(nd_html) ;
		}) ;
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;

	})() ;
}) ;