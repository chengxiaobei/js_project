(function(){

})() ;

require(['jquery', 'global','dialog','validator'],function($,global,_,validator){

	// 接口提示信息
	var remote_tips_codeMaps = validator['validator']['remote_tips_codeMaps'] ;
	// 表单验证提示信息
	var validation_tip = validator['validator']['tips'] ;

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;

	//养殖品种
	var animal_type_list = {
		birds:'禽类（鸡、鸭）',
		beasts:'畜类（猪）'
	} ;
	var animal_type_text;
	// 页面初始化
	(function(){

	})() ;

	// 业务逻辑
	(function(){
		// 返回
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;
		$('#wrap1').on('click','.per-reg-agreement',function(){
			$(this).toggleClass('login-checked') ;
			$(this).toggleClass('login-check') ;
		}) ;
		// 发送验证码
		var count = 60 ;
		$('#wrap1').on('click','#sendCheckCode',function(){
			var phonenum = $('#phonenum').val() ;
			if(!validator['check_phone'](phonenum)){
				return false ;
			}
			if(count > 0 && count < 60){
				return false ;
			}

			var params = {
				telephone : phonenum ,
				scene : 'register'
			} ;
			var url = global_path + "index.php/personalcenter/getPhoneVerify" ;
			// 获取手机验证码
			commonAjax(url,params).then(function(data){
				// console.info(data) ;
				if(data && data.status && data.status=="2000"){

					// 发送成功后 开始倒计时
					count-- ;
					$('#sendCheckCode').html(count + '秒后可重发') ;
					var timer = setInterval(function(){
						if(count <= 1){
							count = 60 ;
							clearInterval(timer) ;
							$('#sendCheckCode').html('发送验证码') ;
							return ;
						}
						count-- ;
						$('#sendCheckCode').html(count + '秒后可重发') ;
					},1000) ;

					$('#hasSend').show() ;
					setTimeout(function(){
						$('#hasSend').hide() ;
					},2000) ;
				}
				else{
					d_alert.setTitle(remote_tips_codeMaps[data.status]||'发送失败') ;
					d_alert.show() ;
				}
			}) ;
		}) ;

		//选择养殖品种弹窗
		$('#wrap1').on('click','#breed',function(e){
			e.stopPropagation() ;
    		e.preventDefault() ;
			$('#animal_type').show();
		});
		// 选择养殖品种
    	$('#wrap1').on('click','#animal_type .animal_type_item',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		animal_type_text = $(this).attr('data-animal_type') ;
    		$('.animal_type_choose').html(animal_type_list[animal_type_text]) ;
    		$('#animal_type').hide() ;
    	}) ;
		 //点击遮罩，养殖品种选择消失
    	$('#wrap1').on('click','.mask',function(e){
    		e.stopPropagation() ;
    		e.preventDefault() ;
    		$('#animal_type').hide() ;
    	}) ;
		// 注册用户
		$('#wrap1').on('click','#register',function(){
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
			//判断推荐人号码格式
			var p = new RegExp(/^1\d{10}$/) ;
			var recommend_phone = $('#recommend_phone').val();
			if(recommend_phone && !p.test(recommend_phone)){
				// console.info(recommend_phone);
				d_alert.setTitle('请输入11位正确的推荐人手机号');
				d_alert.show();
				return false ;
			}
			//养殖品种不能为空
			if(!animal_type_text){
				d_alert.setTitle('请选择养殖品种');
				d_alert.show();
				return false ;	
			}
			if(!$('.per-reg-agreement').hasClass('login-checked')){
				d_alert.setTitle('请阅读并同意《养殖宝用户协议》') ;
				d_alert.show() ;
				return false ;
			}

			var url = global_path + "index.php/personalcenter/register" ;
			var params = {
				phonenum : phonenum ,
				password : password ,
				verification_code : checkcode ,
				friend_telephone : recommend_phone ,
				breed : animal_type_text
			} ;
			commonAjax(url, params).then(function(data){
				if(data && data.status && data.status =="2000"){
					RP.store.setItem('curr_user_info',data['data']) ;
					d_alert.setTitle('注册成功') ;
					d_alert.show() ;
					window.location.href = "perfect_info.php?animal_type=" + animal_type_text ;
				}
				else{
					d_alert.setTitle(remote_tips_codeMaps[data.status]||'注册失败') ;
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
			var checkcode = $('#checkcode').val();
			var ret = checkcode.replace(/[^\d]/g,'') ;
			if(checkcode.length>6){
				ret = ret.substring(0,6);
			}
			$(this).val(ret);
			isCanSubmit() ;
		}) ;

		$('#wrap1').on('input','input[id=password]',function(){
			isCanSubmit() ;
		}) ;

		$('#wrap1').on('input','input[id=conpassword]',function(){
			isCanSubmit() ;
		}) ;

		$('#wrap1').on('input','input[id=recommend_phone]',function(){
			var num = $('#recommend_phone').val();
			num = num.replace(/[^\d]/g,'') ;
			if(num.length>11){
				num = num.substring(0,11);
			}
			this.value = num;
			isCanSubmit() ;
		}) ;

	})() ;


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
		// 	$('#register').removeClass('grey-bluebtn') ;
		// 	return true ;
		// }
		// else{
		// 	$('#register').addClass('grey-bluebtn') ;
		// }
		// return false ;
	}

}) ;