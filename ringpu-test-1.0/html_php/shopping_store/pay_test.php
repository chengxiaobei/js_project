<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="format-detection" content="telephone=no" />
	<title>微信支付测试</title>
	<script type="text/javascript" src="../../public/js/common/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="../../public/js/common/globalvar.js"></script>
	<script type="text/javascript" src="../../public/js/common/md5_a.js"></script>
	<script type="text/javascript" src="../../public/js/common/sha1.js"></script>
	<script type="text/javascript" charset="UTF-8" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<body>
	<button id="pay" style="width:100px;height:50px;margin:40%;45%;">发起微信支付</button>
</body>
<script type="text/javascript">
	

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
			alert(openId) ;
			// 发起微信支付参数
			var appId = RP.baseInfo['appId'] ,
				timeStamp ,
				nonceStr ,
				package_str ,
				signType ,
				paySign ;

			// 发起一个微信支付
			function onBridgeReady(){
				var url = global_path + "index.php/test/weixin_pay" ;
				var p = {
					order_code: 'MA528615122113421',
				   	pay_type:'20001',
				   	pay_channel:'30002',
				   	pay_name:'微信支付',
				   	openid:openId
				} ;
				alert(JSON.stringify(p)) ;
				commonAjax(url,p).then(function(data){
					// alert(JSON.stringify(data)) ;
					if(data){
				  		var weixin_opt = data ;
				       	alert(JSON.stringify(weixin_opt)) ;

						WeixinJSBridge.invoke(
					       'getBrandWCPayRequest', weixin_opt,
					       	function(res){     
					       		// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
					        	alert(JSON.stringify(res)) ;
					        	if(res.err_msg == "get_brand_wcpay_request:ok" ) {
					        		alert('支付成功') ;
					        	}
					        	else{
					        		alert('支付失败') ;
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


</script>
</html>