
(function(){

})() ;


require(['jquery', 'global','dialog','validator'],function($,global,_,validator){

	// 表单验证提示信息
	var validation_tip = validator['validator']['tips'] ;
	var remote_tips_codeMaps = validator['validator']['remote_tips_codeMaps'] ;

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;

	// 页面初始化
	(function(){

	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;
		// 发送验证码
		var count = 60 ;
		$('#wrap1').on('click','#sendCheckCode',function(){
			console.log($(this));
			if(count!=60){
				return ;
			}
			var phonenum = $('#phonenum').val() ;
			if(!validator['check_phone'](phonenum)){
				return false ;
			}

			var timer = setInterval(function(){
				if(count <= 0){
					count = 60 ;
					clearInterval(timer) ;
					$('#sendCheckCode').html('发送验证码') ;
					return ;
				}
				count-- ;
				$('#sendCheckCode').html('重新发送'+count+'S') ;
			},1000) ;

			var params = {
				telephone : phonenum ,
				scene : 'reset'
			} ;
			var url = global_path + "index.php/personalcenter/getPhoneVerify" ;
			// 获取手机验证码
			commonAjax(url,params).then(function(data){
				console.info(data) ;
				if(data && data.status && data.status=="2000"){
					$('#hasSend').show() ;
					setTimeout(function(){
						$('#hasSend').hide() ;
					},2000) ;
				}else if(data && data.status && data.status=="4027"){
					d_alert.setTitle(data.message) ;
					d_alert.show() ;
				}
			}) ;
		}) ;
		// 找回密码
		$('#wrap1').on('click','#findPassword_sub',function(){
			var phonenum = $('#phonenum').val() ;
			var checkcode = $('#checkcode').val() ;
			var password = $('#password').val() ;
			var conpassword = $('#conpassword').val() ;

			if(!validator['check_phone'](phonenum)){
				return false ;
			}
			if(!validator['check_checkcode'](checkcode)){
				return false ;
			}
			if(!validator['check_password'](password)){
				return false ;
			}
			if(!validator['check_password'](conpassword)){
				return false ;
			}
			if(password != conpassword){
				d_alert.setTitle(validation_tip['pass_conpass_nosame']) ;
				d_alert.show() ;
				return false ;
			}

			var url = global_path + "index.php/personalcenter/reset_pwd" ;
			var params = {
				telephone : phonenum ,
				password : conpassword,
				verification_code : checkcode
			} ;
			commonAjax(url,params).then(function(data){
				console.info(data) ;
				if(data && data.status && data.status == "2000"){
					// 获取最新用户信息
					getLatestUserInfo().then(function(data_user){
						if(data_user && data_user.status && data_user.status =="2000"){
		 					RP.store.setItem('curr_user_info',data_user['data']) ;
						}
					}) ;
					// $('#update_ok').show() ;
					// setTimeout(function(){
					// 	$('#update_ok').hide() ;
					// 	window.location.href = "index.php" ;
					// },2000) ;
					d_alert.setTitle('修改密码成功') ;
					d_alert.ok_fn = function(){
						window.location.href = 'index.php' ;
					}
					d_alert.show() ;
				}
				else{
					d_alert.setTitle(remote_tips_codeMaps[data.status] || '提交失败，请稍候再试') ;
					d_alert.show() ;
				}
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

		$('#wrap1').on('input','input[id=checkcode]',function(){
			isCanSubmit() ;
		}) ;

		$('#wrap1').on('input','input[id=password]',function(){
			isCanSubmit() ;
		}) ;

		$('#wrap1').on('input','input[id=conpassword]',function(){
			isCanSubmit() ;
		}) ;
	})() ;

	// 获取用户最新信息
	function getLatestUserInfo(){
		var url = global_path + 'index.php/personalcenter/get_newinfo' ;
		var p = {} ;
		return commonAjax(url,p);
	}

	// 判断是否可以提交
	function isCanSubmit(){
		return true ;
		// // 手机号
		// var phonenum = $('#phonenum').val().replace(/\s+/,'') ;
		// // 验证码
		// var checkcode = $('#checkcode').val().replace(/\s+/,'') ;
		// // 密码
		// var password = $('#password').val().replace(/\s+/,'') ;
		// // 确认密码
		// var conpassword = $('#conpassword').val().replace(/\s+/,'') ;

		// if(phonenum && checkcode && password && conpassword){
		// 	$('#findPassword_sub').removeClass('grey-bluebtn') ;
		// 	return true ;
		// }
		// else{
		// 	$('#findPassword_sub').addClass('grey-bluebtn') ;
		// }
		// return false ;
	}

}) ;