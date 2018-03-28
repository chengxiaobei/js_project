
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,dialog){

    //#变量
	
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	//#请求url
	var urlgetpoint = global_path + "index.php/personalcenter/getpoint" ;
	
	//#初始化
	
	//#页面渲染
	(function(){	

		// 是否登录检测
		 check_login_module() ;
		 jsmartrule();
		var params = {
			 	
		 } ;
		 loadingShow($('.main-section')[0]);
		 commonAjax(urlgetpoint , params).then(function(data){
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
		
		$('.wrap').on('click','.tuijianbutton',function(e){
			e.stopPropagation();
           $('.tuijian').show();
		}) ;
		$('.wrap').on('click','.mask',function(e){
			   e.stopPropagation();
	           $('.tuijian').hide();
		}) ;
        $('.wrap').on('click','.yzbrenwu li',function(){
        	var code=$(this).attr("data-code");
        	var finish=$(this).attr("data-finish");
        	if(code == "RP_SCORE_BY_SIGNUP"&&finish != 1){
        		window.location.href="register.php";     			
        	}else if(code == "RP_SCORE_BY_USER_PERFECT"&&finish != 1){
        		window.location.href="person_edit.php";  
        	}else if(code == "RP_SCORE_BY_ASK"&&finish != 1){
        		window.location.href="../culture_community/sendStatus.php"; 
        	}else if(code == "RP_SCORE_BY_UPVOTE"&&finish != 1){
        		window.location.href="../culture_community/cultureCommunity.php"; 
        	}else if(code == "RP_SCORE_BY_UPVOTE"&&finish != 1){
        		window.location.href="../culture_community/cultureCommunity.php"; 
        	}else if(code == "RP_SCORE_BY_RECOMMEND"){
        		window.location.href="../download/downloadApp.php?point=getpoint"; 
        	}
        })
		
	})() ;
	function jsmartrule(){
		jSmart.prototype.registerPlugin("modifier","getcontent",function(content){
		     if(content){
		    	 content = content.replace(/\\n/g,"<br>"); 
	          }
			return content ;
		});
	}
});