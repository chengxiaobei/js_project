(function(){

})() ;


// 个人中心--检测--物流
require(['jquery', 'global', 'jsmart'],function($,global,_){

	var id = getQueryString('id') ;
	var archives_logistics_tpl = new jSmart(document.getElementById('archives_logistics_tpl').innerHTML) ;


	// 页面渲染
	(function(){

		var url = global_path + 'index.php/personalcenter/analysis_kuaidi' ;
		var p = {
			test_id : id
		} ;
		commonAjax(url,p).then(function(data){
			console.info(data) ;
			if(data && data.status && data.status == '2000'){
				var res = archives_logistics_tpl.fetch(data['data']) ;
				$('#wrap1').html(res) ;
			}
			else{
				var res = archives_logistics_tpl.fetch([]) ;
				$('#wrap1').html(res) ;
				errorPageShow($('#wrap1')[0],'nodata') ;
			}
		}).fail(function(){
			var res = archives_logistics_tpl.fetch([]) ;
			$('#wrap1').html(res) ;
			errorPageShow($('#wrap1')[0],'system') ;
		}) ;
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;

		

	})() ;

}) ;