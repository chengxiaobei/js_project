
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart'],function($,global,_){

	//#变量
	var fromModelpage =RP.store.getItem('curr_fromModelpage');
	var orderNum =  RP.store.getItem("shop_orderNum");
	var archives_detail_type =RP.store.getItem('curr_archives_detail_type');
	var archives_detail_id =RP.store.getItem('curr_archives_detail_id');
	//#模板

	//#请求url

	
	//#初始化
	
	//#页面渲染
	(function(){	

		// 是否登录检测
		//check_login_module() ;
	})() ;
	
	// 业务逻辑
	(function(){
		$('.wrap').on('click','.close-btn',function(){
			if(fromModelpage == "order_list"){
				 if(orderNum){
		        	 RP.store.removeItem('curr_orderNum') ; 
		         }
		         if(fromModelpage){
		        	 RP.store.removeItem('curr_fromModelpage') ;
		         }
				window.location.href="../personal_center/orders_list.php?fromModelpage=pay_offline_success";	
			}else if(fromModelpage =="order_detail"){
				 if(orderNum){
		        	 RP.store.removeItem('curr_orderNum') ; 
		         }
		         if(fromModelpage){
		        	 RP.store.removeItem('curr_fromModelpage') ;
		         }
				window.location.href="../personal_center/order_detail.php?fromModelpage=pay_offline_success&&order_code="+orderNum;	
			}else if(fromModelpage == "archive_detail"){
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
		         window.location.href="../personal_center/archives_detail.php?fromModelpage=pay_offline_success&&type="+archives_detail_type+"&id="+archives_detail_id;
			 }else{
				 if(orderNum){
		        	 RP.store.removeItem('curr_orderNum') ; 
		         }
		         if(fromModelpage){
		        	 RP.store.removeItem('curr_fromModelpage') ;
		         }
				window.location.href="cart.php?fromModelpage=pay_offline_success";
			}
		}) ;
		
	})() ;

});