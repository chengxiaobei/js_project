
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart'],function($,global,_){

	var orderNum =RP.store.getItem('curr_orderNum')||getQueryString('orderNum');
	var fromModelpage =RP.store.getItem('curr_fromModelpage');
	var archives_detail_type =RP.store.getItem('curr_archives_detail_type');
	var archives_detail_id =RP.store.getItem('curr_archives_detail_id');
	var statue=getQueryString('statue');
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
			 $('#failtext').html('诊疗订单支付失败，请重新支付！');
		 }else{
			 $('#failtext').html('订单支付失败，请重新支付！');
		 }
		if(statue == "haspay"){
			$('#statue').html('该订单已支付');
			$('#failtext').hide();
			$('#payagain').hide();
		}else if(statue == "offline"){
			$('#statue').html('商品下线');
			$('#failtext').hide();
			$('#payagain').hide();
		}else if(statue == "notenough"){
			$('#statue').html('库存不足');
			$('#failtext').hide();
			$('#payagain').hide();
		}else if(statue == "other"){
			$('#failtext').show();
			$('#payagain').show();
		}

	})() ;



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
		         window.location.href="../personal_center/archives_detail.php?fromModelpage=pay_fail&&type="+archives_detail_type+"&id="+archives_detail_id;
			 }else if(fromModelpage == "order"){
				 if(orderNum){
		        	 RP.store.removeItem('curr_orderNum') ; 
		         }
		         if(fromModelpage){
		        	 RP.store.removeItem('curr_fromModelpage') ;
		         }		  
		         window.location.href="cart.php?fromModelpage=pay_fail";
			 }else if(fromModelpage =="order_list"){
				 if(orderNum){
		        	 RP.store.removeItem('curr_orderNum') ; 
		         }
		         if(fromModelpage){
		        	 RP.store.removeItem('curr_fromModelpage') ;
		         }
				window.location.href="../personal_center/orders_list.php?fromModelpage=pay_fail";	
			 }else if(fromModelpage == "order_detail"){
				 if(orderNum){
		        	 RP.store.removeItem('curr_orderNum') ; 
		         }
		         if(fromModelpage){
		        	 RP.store.removeItem('curr_fromModelpage') ;
		         }		  
		         window.location.href="../personal_center/order_detail.php?fromModelpage=pay_fail&&order_code="+orderNum;
			 }else{
				 if(orderNum){
		        	 RP.store.removeItem('curr_orderNum') ; 
		         }
		         if(fromModelpage){
		        	 RP.store.removeItem('curr_fromModelpage') ;
		         }		  
		         window.location.href="cart.php?fromModelpage=pay_fail";
			 }
		}) ;
		$('.wrap').on('click','#payagain',function(){
			window.location.href="pay_options.php?fromModelpage="+fromModelpage+"&&code="+orderNum;
		}) ;

		
	})() ;

});