(function(){

})() ;

require(['jquery', 'global', 'jsmart'],function($,global,_){

    //#变量
	var orderNum= getQueryString('code');
	var fromModelpage = getQueryString('fromModelpage');
	var archives_detail_type= getQueryString('type');
	var archives_detail_id = getQueryString('id');
	var archives_detail_price = getQueryString('price');
	if(!orderNum){
		orderNum = RP.store.getItem('curr_orderNum') ;
	}
	else{
		RP.store.setItem('curr_orderNum',orderNum) ;
	}
	if(!fromModelpage){
		fromModelpage = RP.store.getItem('curr_fromModelpage') ;
	}
	else{
		RP.store.setItem('curr_fromModelpage',fromModelpage) ;
	}
	if(!archives_detail_type){
		archives_detail_type = RP.store.getItem('curr_archives_detail_type') ;
	}
	else{
		RP.store.setItem('curr_archives_detail_type',archives_detail_type) ;
	}
	if(!archives_detail_id){
		archives_detail_id = RP.store.getItem('curr_archives_detail_id') ;
	}
	else{
		RP.store.setItem('curr_archives_detail_id',archives_detail_id) ;
	}
	if(!archives_detail_price){
		archives_detail_price = RP.store.getItem('curr_archives_detail_price') ;
	}
	else{
		RP.store.setItem('curr_archives_detail_price',archives_detail_price) ;
	}
	/*var payurllist=['https://m.ringpu.com/api/alipay/wap/sign',
	                'https://m.ringpu.com/api/unionpay/wap/sign',
	                ''];*/
	/*var payurllist=['https://m.ringpu.com/dev/api/alipay/wap/sign',
    'https://m.ringpu.com/dev/api/unionpay/wap/sign',
    ''];*/
	var payurllist=['http://101.200.146.225:8880/yun-bbc-dev-1.0/api/alipay/wap/sign',
	                'http://101.200.146.225:8880/yun-bbc-dev-1.0/api/unionpay/wap/sign',
	                ''];
	var shop_code = '';
	var role_code = '';
	var version_name = '';
	var user_channel = '';
	var language = '';
	var curr_user_info = RP.store.getItem('curr_user_info') ; 
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	//#请求url
	var url = global_path + "index.php/personalcenter/getOrderDetail" ;
	var payurl = global_path + "index.php/shoppingcenter/payAlipay" ;
	var payurlinit = global_path + "index.php/shoppingcenter/payAlipayinit" ;
	//#初始化
	
	//#页面渲染
	(function(){

		
		   if(fromModelpage == "archive_detail"){
			   $('.main-section').html(tpl_html); 
               $('#pay_price').html(archives_detail_price);
               $('#ordernum').html(orderNum);
		   }else{
			   //存储来源信息
		 	    RP.store.setItem("shop_fromModelpage",fromModelpage);
		 	    RP.store.setItem("shop_orderNum",orderNum);
			    var param = {
					order_code : orderNum 
				} ;
			    loadingShow($('.main-section')[0]);
				commonAjax(url,param).then(function(data){
					console.info(data) ;
					if(data && data.status && data.status == "2000"){
						 var tpl = new jSmart(tpl_html);
						 var res = tpl.fetch(data.data);
						 $('.main-section').html(res); 
	                     $('#pay_price').html(data.data.pay_amount);
	                     $('#ordernum').html(orderNum);
	                     
	                     if(!getQueryString('code')&&orderNum){
	                    	 $('.chpay-logo-wx').find('div').removeClass('chpay-check').addClass('chpay-checked');	
	         				 $('.chpay-logo-wx').siblings().find('div').removeClass('chpay-checked').addClass('chpay-check');
	                     }
	             		
					}else{
						 loadingHide($('.main-section')[0]);
						 var error_html = getErrorPage('system',1) ;
	 				      $('.wrap').append(error_html) ;
					}
					
				}).fail(function(data){
					 loadingHide($('.main-section')[0]);
					 var error_html = getErrorPage('system',2) ;
					 $('.wrap').append(error_html) ;
				}) ;
				paraminit();
			
		   }
		    if(!getQueryString('code')&&orderNum){
          	 $('.chpay-logo-wx').find('div').removeClass('chpay-check').addClass('chpay-checked');	
				 $('.chpay-logo-wx').siblings().find('div').removeClass('chpay-checked').addClass('chpay-check');
            }
			// 判断是否来自微信支付
			if(!getQueryString('code')&&orderNum){
				wxPay() ;
			} 
		  
	})() ;
	function paraminit(){
		commonAjax(payurlinit,{}).then(function(data){
			shop_code=data.shop_code;
			role_code = data.role_code;
			version_name = data.version_name;
			user_channel = data.user_channel;
			language = data.language;
			
		}).fail(function(data){
			paraminit();
		}) ;
	}


    function payurlstring(order_code,pay_url,pay_type,pay_channel,pay_name){
	     var urlstring;
	     var content={};
	     content.order_code=order_code;
	     content.pay_type=pay_type;
	     content.pay_channel=pay_channel;
	     content.pay_name=pay_name;
	     content.shop_code='ringpu';
	     content.role_code='_USER';
	     content.version_name='1.0';
	     content.user_channel='1003';
	     content.language='zh_CN';
	     content.user_code=curr_user_info.user_code;
	     content=JSON.stringify(content);
	     urlstring = pay_url + "?content="+encodeURIComponent(content);
		 console.log(urlstring)
		 return urlstring;
    }
	// 业务逻辑
	(function(){
		$('.wrap').on('click','.back-btn',function(){
			if(fromModelpage == "order"){
				window.location.href="cart.php?fromModelpage=pay_options";
			}else{
				window.history.go(-1) ;	
			}
			
		}) ;
		$('.wrap').on('click','.pay-option li',function(){
			$(this).find('div').removeClass('chpay-check').addClass('chpay-checked');
			$(this).siblings().find('div').removeClass('chpay-checked').addClass('chpay-check');
		}) ;

		// 支付
		$('.wrap').on('click','#order_submit',function(){
			var pay_type = $('.pay-option .chpay-checked').attr('pay-type') ;
			if(!pay_type){
				return false ;
			}
			if(pay_type == "1"){
	         window.location.href=payurlstring(orderNum,payurllist[0],'20001','30001','支付宝');
			}else if(pay_type == "2"){	
				// window.location.href = "payfail.php";
				wxPay();
			}else if(pay_type == "3"){
			 window.location.href=payurlstring(orderNum,payurllist[1],'20001','30003','银联');
			}else{				
				window.location.href = "pay_offline.php?code="+orderNum;
			}
		}) ;

	})() ;


	// 微信支付
	function wxPay(){
		var openId = getQueryString('openId') ;
		if(!openId){
			var redirect_uri = encodeURI(RP.baseInfo['redirect_uri']) ;
			var appId = RP.baseInfo['appId'] ;
			var scope = RP.baseInfo['scope'] ;
			var getopenIdURL = RP.baseInfo['getopenIdURL'] ;
			getopenIdURL = getopenIdURL + "?appid=" + appId + "&redirect_uri=" + redirect_uri + "&response_type=code&scope=" + scope + "&state=STATE#wechat_redirect"
			window.location.href = getopenIdURL ;
		}
		else{
			// 发起微信支付参数
			var appId = RP.baseInfo['appId'] ,
				timeStamp ,
				nonceStr ,
				package_str ,
				signType ,
				paySign ;

			// 发起一个微信支付
			function onBridgeReady(){
				var url = global_path + "index.php/shoppingcenter/weixin_pay" ;
				var p = {
					order_code: orderNum,
				   	pay_type:'20001',
				   	pay_channel:'30002',
				   	pay_name:'微信支付',
				   	openid:openId
				} ;
				// alert(JSON.stringify(p)) ;
				commonAjax(url,p).then(function(data){
					//alert(JSON.stringify(data)) ;
					if(data){
				  		var weixin_opt = data ;

						WeixinJSBridge.invoke(
					       'getBrandWCPayRequest', weixin_opt,
					       	function(res){ 
					       		// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
					        	if(res.err_msg == "get_brand_wcpay_request:ok" ) {
					    	         window.location.href="paysuccess.php"
					        	}
					        	else{
				    	             window.location.href="payfail.php"
					        	}     
					       	}
					   	); 
					}
					else{
						alert('微信统一下单接口调用失败') ;
					}
				}).fail(function(){
					alert('系统出错') ;
				}) ;
			}
			if (typeof WeixinJSBridge == "undefined"){
			   	if( document.addEventListener ){
			       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
			   	}else if (document.attachEvent){
			       document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
			       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
			  	}
			}else{
			   	onBridgeReady();
			} 
		}
	}



}) ;