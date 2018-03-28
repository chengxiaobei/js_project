define(['dialog'],function(_){

	// 表单验证
	var validator = {
		patterns : {
			email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/,
	      	url: /^(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
	      	phonenum : /^1\d{10}$/,
	      	password : /[0-9|a-zA-Z]{6,20}/
		} ,
		tips : {
			'password_no' : '请设置6-20位密码' ,
			'phonenum_no' : '请输入11位正确的手机号' ,
			'phonenum_no_pattern' : '请输入11位正确的手机号',
			'password_no_pattern' : '请设置6-20位密码' ,
			'email_no' : '请输入邮箱' ,
			'email_no_pattern' : '请填写正确的邮箱' ,
			'checkcode_no' : '请输入6位正确的验证码',
			'bill_content' : '请输入发票抬头' ,
			'pass_conpass_nosame' : '两次密码不一致，请重新输入',
			'login_fail' : '帐号或密码错误' 
		} ,
		remote_tips_codeMaps : {
			'4001' : '请求数据不能为空!' ,
			'4002' : '未查询到数据' ,
			'4003' : '无权限进行此操作' ,
			'4004' : '请求数据格式有错' ,
			'4005' : '请求超时' ,
			'4006' : '数据保存失败' ,
			'4007' : '包含非法字符' ,
			'4009' : '参数转化失败' ,
			'4011' : '参数为空' ,
			'4012' : '该用户不存在!' ,
			'4013' : '新密码与旧密码相同' ,
			'4014' : '原密码错误' ,
			'4015' : '修改密码失败' ,
			'4016' : '无效的E-Mail' ,
			'4017' : '该手机号已被注册！' ,
			'4020' : '原手机号与当前账户不匹配' ,
			'4021' : '帐号或密码错误!' ,
			'4022' : '获取验证码失败' ,
			'4023' : '请输入6位正确的验证码' ,
			'4024' : '验证码过期失效' ,
			'4025' : '该手机号已存在' ,
			'4100' : '库存不足' ,
			'4200' : '数据库没有变化' ,
			'4210' : '上传图片失败' 
		} 
	} ;


	// 公用提示框
	var valia_d_alert = new Dialog({type:'alert'}) ;

	// 验证手机号
	function check_phone(phonenum,msg){
		if(!phonenum){
			valia_d_alert.setTitle(validator['tips']['phonenum_no']) ;
			valia_d_alert.show() ;
			return false ;
		}
		var p = validator['patterns']['phonenum'] ;
		if(!p.test(phonenum)){
			valia_d_alert.setTitle(msg || validator['tips']['phonenum_no_pattern']) ;
			valia_d_alert.show() ;
			return false ;
		}
		return true ;
	}

	// 密码验证
	function check_password(password,msg){
		if(!password){
			valia_d_alert.setTitle(validator['tips']['password_no']) ;
			valia_d_alert.show() ;
			return false ;
		}
		var p = validator['patterns']['password'] ;
		if(!p.test(password)){
			valia_d_alert.setTitle(msg || validator['tips']['password_no_pattern']) ;
			valia_d_alert.show() ;
			return false ;
		}
		return true ;
	}

	// 验证邮箱
	function check_email(email){
		if(!email){
			valia_d_alert.setTitle(validator['tips']['email_no']) ;
			valia_d_alert.show() ;
			return false ;
		}
		var p = validator['patterns']['email'] ;
		if(!p.test(email)){
			valia_d_alert.setTitle(validator['tips']['email_no_pattern']) ;
			valia_d_alert.show() ;
			return false ;
		}
		return true ;
	}


	// 验证手机验证码
	function check_checkcode(checkcode){
		if(!checkcode || !(/\d{6}/.test(checkcode))){
			valia_d_alert.setTitle(validator['tips']['checkcode_no']) ;
			valia_d_alert.show() ;
			return false ;
		}
		return true ;
	}

	//验证订单
	function check_bill(content){
		if(!content){
			valia_d_alert.setTitle(validator['tips']['bill_content']) ;
			valia_d_alert.show() ;
			return false ;
		}
		return true ;
	}

	return {
		validator : validator ,
		check_phone : check_phone ,
		check_password : check_password ,
		check_email : check_email ,
		check_checkcode : check_checkcode ,
		check_bill : check_bill
	} ;

}) ;

