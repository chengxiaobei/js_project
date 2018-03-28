(function(){
	// 自执行函数
})() ;


require(['jquery', 'global','dialog','validator'],function($,global,_,validator){


	// 提示信息
	var tips = validator['validator']['remote_tips_codeMaps'] ;
	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	var d_confrim_guide = new Dialog({type:'confirm_guide'}) ;

	// var appId = RP.baseInfo['appId'] ;
	// var redirect_uri = encodeURI(RP.baseInfo['redirect_uri']) ;
	// var scope = RP.baseInfo['scope'] ;

	// var getopenid_uri = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appId+"&redirect_uri="+redirect_uri+"&response_type=code&scope="+scope+"&state=STATE#wechat_redirect" ;

	// var code = getQueryString('code') ;
	// if(!code){
	// 	window.location.href = getopenid_uri ;
	// 	return ;
	// }

	// alert(code) ;
	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;
		// 注册
		$('#wrap1').on('click','#register',function(){
			window.location.href = "register.php" ;
		}) ;
		// 自动登录
		$('#wrap1').on('click','#auto_login',function(){
			$(this).toggleClass('login-checked') ;
			$(this).toggleClass('login-check') ;
		}) ;
		// 找回密码
		$('#wrap1').on('click','#findPassword',function(){
			window.location.href = "findPassword.php" ;
		}) ;


		$('#wrap1').on('click','#login',function(){
			if($('#login').hasClass('grey-bluebtn')){
				return ;
			}
			var phonenum = $('#phonenum').val().replace(/[\s+|\r\n]/g,'') ;
			var password = $('#password').val().replace(/[\s+|\r\n]/g,'') ;

			if(!validator['check_phone'](phonenum)){
				return false ;
			}
			if(!validator['check_password'](password)){
				return false ;
			}
			var url = global_path + "index.php/personalcenter/login" ;
			var p = {
				telephone : phonenum ,
				password : password
			} ;
			commonAjax(url,p).then(function(data){
				
 				if(data && data.status && data.status =="2000"){
 					RP.store.setItem('curr_user_info',data['data']) ;
 					// d_alert.setTitle('登录成功') ;
 					// d_alert.show() ;
					// window.location.href = "index.php" ;
					window.history.go(-1) ;

				}else if(data && data.status && data.status =="4002"){
	                d_confrim_guide.setTitle("您好，由于违规操作，此账号已被系统自动禁用，请遵守使用规则；如需申请解禁，请拨打客服电话400-800-5696。") ;
	                d_confrim_guide.setButton("呼叫客服", "确认") ;
	                d_confrim_guide.cancel_fn = function(){
	                  window.location.href = "tel:4008005696";
	                }
                	d_confrim_guide.show() ;
					

				}
				else{
					d_alert.setTitle(tips[data.status]||'登录失败！') ;
 					d_alert.show() ;
				}
			}).fail(function(){
				errorPageShow($('#wrap1')[0],'system','2');
			}) ;
		}) ;

		// 表单验证
		$('#wrap1').on('input','input[id=phonenum]',function(){
			var phonenum = $('#phonenum').val() ;
			phonenum = phonenum.match(/\d/g) ;
			if(phonenum && phonenum.length > 0){
				this.value = phonenum.join('') ;
			}
			else{
				this.value =  '' ;
			}
			isCanSubmit() ;
		}) ;

		$('#wrap1').on('input','input[id=password]',function(){
			isCanSubmit() ;
		}) ;

	})() ;


	// 判断是否可以提交
	function isCanSubmit(){
		return true;
		// // 手机号
		// var phonenum = $('#phonenum').val().replace(/\s+/,'') ;
		// // 密码
		// var password = $('#password').val().replace(/\s+/,'') ;

		// if(phonenum && password){
		// 	$('#login').removeClass('grey-bluebtn') ;
		// 	return true ;
		// }
		// else{
		// 	$('#login').addClass('grey-bluebtn') ;
		// }
		// return false ;
	}

}) ;

