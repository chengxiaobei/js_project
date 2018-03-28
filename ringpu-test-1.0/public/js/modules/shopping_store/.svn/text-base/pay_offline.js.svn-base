
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,dialog){

	//#变量
	var orderNum= getQueryString('code');
	var shopalert = new Dialog({type:'alert'}) ;
	var validator = {
		tip1:"请输入4-30字正确的银行名称",
		tip2:"请输入8-50位正确的银行账号",
		tip3:"请输入8-50位正确的银行账支付流水号"
	};
	//#模板
	//#请求url
	var url = global_path + "index.php/shoppingcenter/payOffline" ;
	
	//#初始化
	
	//#页面渲染
	(function(){	
		
	})() ;

	// 业务逻辑
	(function(){
		$('.wrap').on('click','.back-btn',function(){
			window.history.go(-1) ;
		}) ;
		
		
		$('.wrap').on('keydown keyup blur','#backname',function(){
			this.value=this.value.replace(/[^a-zA-Z\u4E00-\u9FA5]/g,'');		
			if(this.value.length>30){
		 		this.value=this.value.substr(0,30);
	 		}
		}) ;
		$('.wrap').on('input','#backcount',function(){
			this.value=this.value.replace(/[^0-9]/g,'');
			if(this.value.length>50){
		 		this.value=this.value.substr(0,50);
	 		}
		}) ;
		$('.wrap').on('input','#paynum',function(){
			 this.value=this.value.replace(/[^0-9a-zA-Z]/g,'');
			 if(this.value.length>50){
		 		this.value=this.value.substr(0,50);
	 		 }
		}) ;
		$('.wrap').on('click','.unline-close',function(){
			$(this).parent('li').find('input').val('');
		}) ;
		$('.wrap').on('click','#submit',function(){
			if($('#backname').val().length<4){
				shopalert.setTitle(validator.tip1);
		    	shopalert.show();
			}else if($('#backcount').val().length<8){
				shopalert.setTitle(validator.tip2);
		    	shopalert.show();
			}else if($('#paynum').val().length<8){
				shopalert.setTitle(validator.tip3);
		    	shopalert.show();
			}else{
	            var param = {
			    	order_code : orderNum,
					bank_name : $('#backname').val(),
					bank_account : $('#backcount').val(),
					remit_number : $('#paynum').val()
					
				} ;
	            loadingShow($('.wrap')[0]);
				commonAjax(url,param).then(function(data){
					console.info(data) ;					
					if(data && data.status && data.status == "2000"){
						RP.store.removeItem('shop_goodslist');
						RP.store.removeItem('shop_receive');
						RP.store.removeItem('shop_coupon');
						window.location.href="pay_offline_success.php"
					}else{
						 loadingHide($('.wrap')[0]);
						 var error_html = getErrorPage('system',2) ;
	   				     $('.wrap').append(error_html) ;
					}
					
				}).fail(function(data){
					 loadingHide($('.wrap')[0]);
					 var error_html = getErrorPage('system',2) ;
 				     $('.wrap').append(error_html) ;
				}) ;	
			}

		}) ;
		
	})() ;

});