
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart'],function($,global,_){

	//#变量
	var  specicalescape=['!','@','#','$','&','*','(',')','=',';','+','\'']
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	//#请求url
	var url = global_path + "index.php/shoppingcenter/getCategorylist" ;
	
	//#初始化
	
	//#页面渲染
	(function(){	

		 var params = {

		 } ;
		 loadingShow($('.wrap')[0]);
		 commonAjax(url , params).then(function(data){
			 if(data&&data.status=="2000"){   			 		
				 var tpl = new jSmart(tpl_html);
				 var res = tpl.fetch(data);
				 $('.wrap').html(res);
				 dealresult();
		 	 }else{
		 		loadingHide($('.wrap')[0]); 
		 		var error_html = getErrorPage('system',1) ;
				$('.wrap').append(error_html) ;
		 	 } 			                
  	     }).fail(function(data){
  	    	   loadingHide($('.wrap')[0]); 
				var error_html = getErrorPage('system',1) ;
				$('.wrap').append(error_html) ;
		    })

	})() ;
	
	function dealresult(){
		var store=RP.store.getItem('shop_type_select');
		var gooditem ="";
		if(store){
			 $(".sel_"+store).addClass('curr-li');
			 $(".sel_"+store).siblings().removeClass('curr-li');
			 $(".con_"+store).show();
			 $(".con_"+store).siblings().hide();
			 dealline($(".con_"+store+' .class-pro-ul li'));
		}else{
			 dealline($(".con_0 .class-pro-ul li"));
		}
		 $('.class-pro-ul img').each(function(){
	  		 var $self = $(this) ;
	  		 var original = $self.attr('data-original') ;
	  		 $('<img/>').bind('load', function () {
	  			 for(var i=0;i<specicalescape.length;i++){
	  				 if(original.indexOf(specicalescape[i])!=-1){
	 	  				original=original.replace(specicalescape[i],escape(specicalescape[i]));
	 	  			 }
	  			 }
	  			$self.attr('src',original);
	         }).attr('src', original);
	  	  });
		
	}
	function  dealline(item){
		var gooditem = item.length;
		   if(gooditem%3 == 0){
			   item.each(function(i){
				   if(i+1==gooditem||i+1==gooditem-1||i+1==gooditem-2){
					   $(this).attr('style','border-bottom:0px;')
				   }
			   })
		   }else if(gooditem%3 == 1){
			      item.each(function(i){
				   if(i+1==gooditem){
					   $(this).attr('style','border-bottom:0px;')
				   }
			   })
		   }else if(gooditem%3 == 2){
			      item.each(function(i){
				   if(i+1==gooditem||i+1==gooditem-1){
					   $(this).attr('style','border-bottom:0px;')
				   }
			   })
		   }
	}

	// 业务逻辑
	(function(){
		$('.wrap').on('click','.back-btn',function(){
			window.history.go(-1) ;
		}) ;
		$('.wrap').on('click','.sc-class-name-ul li',function(){
		   $(this).addClass('curr-li');
		   $(this).siblings().removeClass('curr-li');
		   var id = $(this).attr('data-id');
		   $(".con_"+id).show();
		   $(".con_"+id).siblings().hide();
		   //dealline($(".con_"+id+" .class-pro-ul li"));
		}) ;
		//点击跳转到详情或分类
		$('.wrap').on('click','.class-pro-ul li,.shangpin-three-height',function(){
			  var type=$(this).attr('data-type');
			  var code=$(this).attr('data-code');
			  var history_select=$(".curr-li").attr("data-id");
			  RP.store.setItem("shop_type_select",history_select);
			  if(type == "result"){
				  window.location.href="result.php?fromModelpage=type&&code="+code; 
			  }else if(type == "detail"){
				  window.location.href="detail.php?code="+code;				  
			  }
		 }) ;


		
	})() ;

});