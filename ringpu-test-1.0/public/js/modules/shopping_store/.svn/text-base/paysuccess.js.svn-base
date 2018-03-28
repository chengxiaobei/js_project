
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart'],function($,global,_){

	var orderNum =RP.store.getItem('curr_orderNum')||getQueryString('orderNum');
	var fromModelpage =RP.store.getItem('curr_fromModelpage');
	var archives_detail_type =RP.store.getItem('curr_archives_detail_type');
	var archives_detail_id =RP.store.getItem('curr_archives_detail_id');
	var urlgetOrderScore = global_path + "index.php/shoppingcenter/getOrderScore";
	// 页面渲染
	(function(){	

		// 是否登录检测
		//check_login_module() ;

		// var url = global_path + "index.php/test/test1" ;
		// var params = {
		// } ;

		// commonAjax(url , params , function(data){
		// 	console.info( data ) ;
		// })
		//根据来源来判断订单类型 来改变文案
		 if(fromModelpage == "archive_detail"||orderNum.indexOf('MH')== -1){
			 $('#result').html('病料已进入诊疗流程，请注意关注状态。');
		 }else{
			 $('#result').html('订单提交成功，我们会尽快安排发货，请注意关注物流信息。');
		 }
		 //paysuccessgetpoint();

	})() ;
   function paysuccessgetpoint(){
	   var params = {
			      type_code:"RP_SCORE_BY_BUY_PRODUCT",
			      order_code:orderNum
	   } ;
	    commonAjax(urlgetOrderScore, params ).then(function(data){
	   	 if(data&&data.status=="2000"){
	   		if(data.data.is_show == 2){
	   			 getPointHtml("消费成功",data.data.score,$('.main-section')[0]);
	   	     }
	   	}else{
		   var error_html = getErrorPage('system',2) ;
		   $('.wrap').append(error_html) ;
	   		}
	   	}).fail(function(data){
		   	var error_html = getErrorPage('system',2) ;
			$('.wrap').append(error_html) ;
	   	})
   }


	// 业务逻辑
	(function(){
		$('.wrap').on('click','.close-btn',function(){
		 if(fromModelpage == "archive_detail"){
			 if(orderNum){
	        	 RP.store.removeItem('curr_orderNum') ; 
	         }
	         if(fromModelpage){
	        	 RP.store.removeItem('curr_fromModelpage') ;
	         }
	         if(archives_detail_type){
	        	 RP.store.removeItem('curr_archives_detail_type') ; 
	         }
	         if(archives_detail_id){
	        	 RP.store.removeItem('curr_archives_detail_id') ;
	         }	
	         window.location.href="../personal_center/archives_detail.php?fromModelpage=pay_success&&type="+archives_detail_type+"&id="+archives_detail_id;
		 }else if(fromModelpage == "order"){
			 if(orderNum){
	        	 RP.store.removeItem('curr_orderNum') ; 
	         }
	         if(fromModelpage){
	        	 RP.store.removeItem('curr_fromModelpage') ;
	         }		  
	         window.location.href="cart.php?fromModelpage=pay_success";
		 }else if(fromModelpage =="order_list"){
			 if(orderNum){
	        	 RP.store.removeItem('curr_orderNum') ; 
	         }
	         if(fromModelpage){
	        	 RP.store.removeItem('curr_fromModelpage') ;
	         }
			window.location.href="../personal_center/orders_list.php?fromModelpage=pay_success";	
		 }else if(fromModelpage == "order_detail"){
			 if(orderNum){
	        	 RP.store.removeItem('curr_orderNum') ; 
	         }
	         if(fromModelpage){
	        	 RP.store.removeItem('curr_fromModelpage') ;
	         }		  
	         window.location.href="../personal_center/order_detail.php?fromModelpage=pay_success&&order_code="+orderNum;
		 }else{
			 if(orderNum){
	        	 RP.store.removeItem('curr_orderNum') ; 
	         }
	         if(fromModelpage){
	        	 RP.store.removeItem('curr_fromModelpage') ;
	         }		  
	         window.location.href="cart.php?fromModelpage=pay_success";
		 }
		 
        
		}) ;
		

		
	})() ;

});