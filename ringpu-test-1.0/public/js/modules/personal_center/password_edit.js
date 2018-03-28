(function(){

})() ;


require(['jquery', 'global','dialog','validator'],function($,global,_,validator){

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;


	// 页面渲染
	(function(){

	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;

		$('#wrap1').on('click','#pass_submit',function(){
			var password = $('#password').val() ;
			var newpassword = $('#newpassword').val() ;
			var conpassword = $('#conpassword').val() ;

			if(!password){
				d_alert.setTitle('原密码错误') ;
				d_alert.show() ;
				return false ;
			}

			if(!validator['check_password'](password,'原密码错误')){
				return false ;
			}
			if(!validator['check_password'](newpassword)){
				return false ;
			}
			if(!validator['check_password'](conpassword)){
				return false ;
			}
			if(newpassword != conpassword){
				d_alert.setTitle('两次密码不一致，请重新输入') ;
				d_alert.show() ;
				return false ;
			}
			var url = global_path + "index.php/personalcenter/update_pwd" ;
			var params = {
				old_msg : password ,
				new_msg : newpassword 
			} ;
			commonAjax(url, params).then(function(data){
				if(data && data.status && data.status =="2000"){
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
					d_alert.setTitle('密码修改成功') ;
					d_alert.ok_fn = function(){
						window.location.href = 'index.php' ;
					}
					d_alert.show() ;
				}
				else{
					d_alert.setTitle('密码修改失败，请稍候再试') ;
					d_alert.show() ;
				}
			}).fail(function(){
				errorPageShow($('#wrap1')[0],'system','2') ;
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
			var password = this.value ;
			password = password.match(/[0-9a-zA-Z]/g) ;
			if(password && password.length > 0){
				this.value = password.join('') ;
			}
			else{
				this.value =  '' ;
			}
			isCanSubmit() ;
		}) ;

		$('#wrap1').on('input','input[id=newpassword]',function(){
			var newpassword = this.value ;
			newpassword = newpassword.match(/[0-9a-zA-Z]/g) ;
			if(newpassword && newpassword.length > 0){
				this.value = newpassword.join('') ;
			}
			else{
				this.value =  '' ;
			}
			isCanSubmit() ;
		}) ;

		$('#wrap1').on('input','input[id=conpassword]',function(){
			var conpassword = this.value ;
			conpassword = conpassword.match(/[0-9a-zA-Z]/g) ;
			if(conpassword && conpassword.length > 0){
				this.value = conpassword.join('') ;
			}
			else{
				this.value =  '' ;
			}
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
		// var password = $('#password').val().replace(/\s+/,'') ;
		// // 密码
		// var newpassword = $('#newpassword').val().replace(/\s+/,'') ;
		// // 确认密码
		// var conpassword = $('#conpassword').val().replace(/\s+/,'') ;

		// if(newpassword && password && conpassword){
		// 	$('#pass_submit').removeClass('grey-bluebtn') ;
		// 	return true ;
		// }
		// else{
		// 	$('#pass_submit').addClass('grey-bluebtn') ;
		// }
		// return false ;
	}
}) ;