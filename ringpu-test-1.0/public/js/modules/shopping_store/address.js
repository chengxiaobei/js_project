
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,dialog){

    //#变量
	var receive_code = getQueryString('code');
	var shopalert = new Dialog({type:'alert'}) ;
	var validator = {
		tip1:"成功加入购物车"
	};
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	//#请求url
	var urladdress = global_path + "index.php/personalcenter/getReceiver" ;
	
	//#初始化
	
	//#页面渲染
	(function(){	

		// 是否登录检测
		 check_login_module() ;

		 var params = {
		 } ;
		 loadingShow($('.main-section')[0]);
		 commonAjax(urladdress , params).then(function(data){
			 if(data&&data.status=="2000"){
				 data.receive_code=receive_code;
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
			window.location.href="order.php";
		}) ;
		
		//点击选择收货地址
		$('.wrap').on('click','.sc-shdz-list-ul li',function(){
			var receive ={};
			$(this).find('.sel-btn-con a').addClass('sel-btn');
			$(this).siblings().find('.sel-btn-con a').removeClass('sel-btn');
			receive.code = $(this).attr('data-code');
			receive.area = $(this).attr('data-area');
			receive.areaCode = $(this).attr('data-areaCode');
			receive.city = $(this).attr('data-city');
			receive.cityCode = $(this).attr('data-cityCode');
			receive.province = $(this).attr('data-province');
			receive.provinceCode = $(this).attr('data-provinceCode');
			receive.receiver = $(this).attr('data-receiver');
			receive.telphone = $(this).attr('data-telphone');
			receive.detail = $(this).attr('data-detail');
			console.log(receive);
			RP.store.setItem('shop_receive',receive);
			window.location.href="order.php";
		}) ;
		//点击编辑收货地址
		$('.wrap').on('click','.handle-btn-edit',function(e){
			e.stopPropagation();
			var code = $(this).attr('data-code');
			window.location.href = "../personal_center/receiver_areas_list.php?receiver_method=edit&receiver_code="+code;
		}) ;
		//点击添加收货地址
		$('.wrap').on('click','.add-btn',function(){
			window.location.href = "../personal_center/receiver_areas_list.php?receiver_method=add"
		}) ;
		

		
	})() ;

});