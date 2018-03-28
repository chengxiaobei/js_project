
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,dialog){

    //#变量
	var page_size = 20;	
	var page_no = 0;
	var page_all = 1;
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	var tpl_html_list = $('#jsmart_tpl_list').html();
	//#请求url
	var urlsignrecord = global_path + "index.php/personalcenter/pointrecord" ;
	//#初始化
	
	//#页面渲染
	(function(){	

		// 是否登录检测
		 check_login_module() ;
		 landmore();
		

	})() ;
	function landmore(){
		 if(page_no<page_all){
		     page_no = page_no + 1;
		     var param = {
		    		 "page_no":page_no,
					"page_size":page_size
			 } ;
		     if(page_no == 1){
		    	 loadingShow($('.main-section')[0]);  
		     }	     
			 commonAjax(urlsignrecord,param).then(function(data){
				 if(data&&data.status=="2000"){	
					 if(page_no == 1){
						 var tpl = new jSmart(tpl_html);
						 var res = tpl.fetch(data);
						 page_all = data.data.page.total_page;
						 $('.main-section').html(res); 
					 }else{
						 var tpl = new jSmart(tpl_html_list);
						 var res = tpl.fetch(data);
						 $('#record').append(res);
					 }
			 	 }else if(data&&data.status=="4002"){
			 		 
			 		loadingHide($('.main-section')[0]);  
			 		 $('.main-section').append('<div class="public-none">暂时没有需要的信息~</div>')	
			 	 }else{
			 		
			 		loadingHide($('.main-section')[0]);  
			 		var error_html = getErrorPage('system',1) ;
					$('.wrap').append(error_html) ;
			 	 } 
			 }).fail(function(data){
				   
				    loadingHide($('.main-section')[0]);  
				    var error_html = getErrorPage('system',1) ;
					$('.wrap').append(error_html) ;
			 });
		 }else{
			console.log('分页结束'); 
		 }
	}

	// 业务逻辑
	(function(){
		
		//点击返回
		$('.wrap').on('click','.back-btn',function(){
			window.history.go(-1) ;
		}) ;
		
		//点击获取养殖币获取方式
		$('.wrap').on('click','#getpoint',function(){
			window.location.href="getpoint.php";
	
		}) ;
		//养殖币规则
		$('.wrap').on('click','.rule',function(){
			window.location.href="point_rule.php";
		}) ;
		
		//分页	    
	       $(window).scroll(function(){
	        if($(document).scrollTop()>=$(document).height()-$(window).height()){        
	        	landmore();
	         }
	       })
		
	})() ;

});