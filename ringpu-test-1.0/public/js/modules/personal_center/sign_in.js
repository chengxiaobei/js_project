
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,dialog){

    //#变量
	
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	//#请求url
	var urlgetSign = global_path + "index.php/personalcenter/getSign" ;
	var urlSignin = global_path + "index.php/personalcenter/Signin" ;
	//#初始化
	
	//#页面渲染
	(function(){	

		// 是否登录检测
		 check_login_module() ;

		var params = {
			 typeCode:"RP_SCORE_BY_SIGN"	
		 } ;
		 loadingShow($('.main-section')[0]);
		 commonAjax(urlgetSign , params).then(function(data){
			 if(data&&data.status=="2000"){
				 var tpl = new jSmart(tpl_html);
				 var res = tpl.fetch(data);
				 $('.main-section').html(res);
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
  	     })

	})() ;


	// 业务逻辑
	(function(){
		
		//点击返回
		$('.wrap').on('click','.back-btn',function(){
			window.history.go(-1) ;
		}) ;
		
		//点击签到
		$('.wrap').on('click','.signclick',function(){
			var params = {
					 typeCode:"RP_SCORE_BY_SIGN"	
		    } ;
			commonAjax(urlSignin , params).then(function(data){
				if(data&&data.status=="2000"){   			 		
					var params = {
							 typeCode:"RP_SCORE_BY_SIGN"	
					} ;
					commonAjax(urlgetSign , params).then(function(data){
						 if(data&&data.status=="2000"){
							 var tpl = new jSmart(tpl_html);
							 var res = tpl.fetch(data);
							 $('.main-section').html(res);
					 	 }else if(data&&data.status=="4002"){
					 		 //loadingHide($('.main-section')[0]);
					 		 $('.main-section').append('<div class="public-none">暂时没有需要的信息~</div>')	
					 	 }else{
					 		//loadingHide($('.main-section')[0]); 
					 		var error_html = getErrorPage('system',1) ;
							$('.wrap').append(error_html) ;
					 	 } 
			  	     }).fail(function(data){
			  	    	//loadingHide($('.main-section')[0]);  
			  	    	var error_html = getErrorPage('system',1) ;
						$('.wrap').append(error_html) ;
			  	     })
				}else{
					 var error_html = getErrorPage('system',2) ;
					 $('.wrap').append(error_html) ;
					 } 			                
			  	}).fail(function(){
				  	  var error_html = getErrorPage('system',2) ;
					  $('.wrap').append(error_html) ;
				}) ;
		}) ;
		

		
	})() ;

});