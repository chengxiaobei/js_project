(function(){

})() ;

require(['jquery', 'global','dialog','validator'],function($,global,_,validator){

	// 提示信息
	var remote_tips_codeMaps = validator['validator']['remote_tips_codeMaps'] ;

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;

	// 是否显示验证码发送成功
	var isDisplaySuccess = false ;
	var timer ;

	// 页面渲染
	(function(){

	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;

		$('#wrap2').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap1').show() ;
			isDisplaySuccess = false ;
			clearInterval(timer) ;
		}) ;

		// 发送验证码
		var count = 60 ;
		$('#wrap2').on('click','#sendCheckCode',function(){
			var phonenum = $('#phone_update').val() ;
			if(!validator['check_phone'](phonenum)){
				return false ;
			}

			if(count > 0 && count < 60){
				return false ;
			}

			var params = {
				telephone : phonenum ,
				scene : 'changephone'
			} ;
			var url = global_path + "index.php/personalcenter/getPhoneVerify" ;
			// 获取手机验证码
			commonAjax(url,params).then(function(data){
				// console.info(data) ;
				if(data && data.status && data.status=="2000"){

					timer = setInterval(function(){
						if(count <= 1){
							count = 60 ;
							clearInterval(timer) ;
							$('#sendCheckCode').html('发送验证码') ;
							return ;
						}
						count-- ;
						$('#sendCheckCode').html('重新发送'+count+'S') ;
					},1000) ;
					// 第一次发送不显示 发送成功
					if(isDisplaySuccess){
						$('#wrap2').find('.tip-info').show() ;
						setTimeout(function(){
							$('#wrap2').find('.tip-info').hide() ;
						},2000) ;
					}
					else{
						isDisplaySuccess = true ;
					}
					
				}
			}) ;
		}) ;

		// 确认更换
		$('#wrap2').on('click','#submit_update',function(){
			var old_phone = $('#phone_register').val() ;
			var new_phone = $('#phone_update').val() ;
			var sendCheckCode = $('#checkcode').val() ;
			if(old_phone == new_phone){
				d_alert.setTitle('两个手机号相同，请重新输入') ;
				d_alert.show() ;
				return false ;
			}
			if(!validator['check_phone'](old_phone,'请输入11位正确的手机号')){
				return false ;
			}
			if(!validator['check_phone'](new_phone,'请输入11位正确的手机号')){
				return false ;
			}
			if(!validator['check_checkcode'](sendCheckCode,'请输入6位正确的验证码')){
				return false ;
			}
			var params = {
				old_msg : old_phone ,
				new_msg : new_phone ,
				verification_code : sendCheckCode
			} ;
			var url = global_path + "index.php/personalcenter/update_tel" ;
			commonAjax(url , params).then(function(data){
				if(data && data.status && data.status=='2000'){
					getLatestUserInfo().then(function(data_user){
						if(data_user && data_user.status && data_user.status =="2000"){
		 					RP.store.setItem('curr_user_info',data_user['data']) ;
		 					// window.location.href = "index.php" ;
		 					window.history.go(-1) ;
						}
					}) ;
					// d_alert.setTitle('更换手机号成功') ;
					// d_alert.show() ;
				}
				else{
					d_alert.setTitle(remote_tips_codeMaps[data.status] || '更换手机号失败，请稍候再试') ;
					d_alert.show() ;
				}
			}) ;
		}) ;

		// 下一步
		$('#wrap1').on('click','#step_one',function(){
			var phone_register = $('#phone_register').val() ;
			var phone_update = $('#phone_update').val() ;

			if(!validator['check_phone'](phone_register,'请输入11位正确的手机号')){
				return false ;
			}
			if(!validator['check_phone'](phone_update,'请输入11位正确的手机号')){
				return false ;
			}

			if(!check_curr_user_phone(phone_register)){
				d_alert.setTitle('原手机号与当前账户不匹配') ;
				d_alert.show() ;
				return ;
			}

			if(phone_register == phone_update){
				d_alert.setTitle('两个手机号相同,请更换新的手机号') ;
				d_alert.show() ;
				return ;
			}
			$('#sendCheckCode').html('发送验证码') ;
			count = 60 ;
			$('#sendCheckCode').trigger('click') ;
			$('#checkcode').val('') ;
			$('.wrap').hide() ;
			$('#wrap2').show() ;

		}) ;

		// 表单验证
		// 表单验证
		$('#wrap1').on('input','input[id=phone_register]',function(){
			var phone_register = $('#phone_register').val() ;
			phone_register = phone_register.match(/\d/g) ;
			if(phone_register && phone_register.length > 0){
				this.value = phone_register.join('') ;
			}
			else{
				this.value =  '' ;
			}
			isCanSubmit() ;
		}) ;

		$('#wrap1').on('input','input[id=phone_update]',function(){
			var phone_update = $('#phone_update').val() ;
			phone_update = phone_update.match(/\d/g) ;
			if(phone_update && phone_update.length > 0){
				this.value = phone_update.join('') ;
			}
			else{
				this.value =  '' ;
			}
			isCanSubmit() ;
		}) ;

		$('#wrap2').on('input','input[id=checkcode]',function(){
			var check_code = this.value ;
			check_code = check_code.match(/\d/g) ;
			if(check_code && check_code.length > 0){
				this.value = check_code.join('') ;
				$('#submit_update').removeClass('grey-bluebtn') ;
			}
			else{
				this.value =  '' ;
				$('#submit_update').addClass('grey-bluebtn') ;
			}
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
		// 注册手机号
		var phone_register = $('#phone_register').val().replace(/\s+/,'') ;
		// 新绑定手机号
		var phone_update = $('#phone_update').val().replace(/\s+/,'') ;

		if(phone_register && phone_update){
			$('#step_one').removeClass('grey-bluebtn') ;
			return true ;
		}
		else{
			$('#step_one').addClass('grey-bluebtn') ;
		}
		return false ;
	}


}) ;