(function(){
	
})() ;

require(['jquery', 'global','jsmart','dialog','validator'],function($,global,_,_,validator){

	var user_info_tpl = new jSmart(document.getElementById('user_info_tpl').innerHTML) ;
	var curr_area_info = RP.store.getItem('curr_area_info') ;
	RP.store.removeItem('curr_area_info') ;

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	
	// 动物类型（禽类:birds、畜类:beasts）
	var curr_animal_type = "" ;

	// 初始化页面
	(function(){
		check_login_module() ;

		 jsmartRegister() ;

		var curr_user_info = RP.store.getItem('curr_user_info') ;  
		var data = {
			user:curr_user_info
		} ;
		if(!curr_area_info && curr_user_info['province_code'] 
			&& curr_user_info['city_code'] && curr_user_info['area_code']){

			curr_area_info = {
				province : {
					province_code : curr_user_info['province_code']
				} ,
				city : {
					city_code : curr_user_info['city_code']
				} ,
				area : {
					area_code : curr_user_info['area_code']
				} ,
			} ;
		}
		//判断是否是默认昵称xxx*****xxx
		var sNickname = data['user']['nickname'];
		if(sNickname.indexOf('*****') == 3){
			data['user']['nickname']='';
		}

		var res = user_info_tpl.fetch(data) ;
		console.info(data);
		$('#wrap1').html(res) ;
		$('#choose_area').show() ;
		curr_animal_type = data['user']['breed'];
		setUnit(curr_animal_type);
		console.info(data['user']['breed']);
		isCanSubmit() ;
	})() ;

	// 页面逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;

		////选择地区回退按钮
		$('#wrap1_area').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap1').show() ;
		}) ;

		// 选择地区
		$('#wrap1').on('click','#choose_area',function(){
			// window.location.href = "../common/choose_area.php" ;
			$('.wrap').hide() ;
    		$('#wrap1_area').show() ;
		}) ;

		// 点击地区
		$('#wrap3_area').on('click','.area',function(){
			var area_name = $(this).attr('data-name') ;
			var area_code = $(this).attr('data-code') ;
			var curr_area = {
				area_name : area_name ,
				area_code : area_code 
			} 
			// 保存城市信息
			curr_area_info = RP.store.getItem('curr_area_info') ;
			curr_area_info['area'] = curr_area ;
			RP.store.setItem('curr_area_info',curr_area_info) ;
			refresh_area() ;
			$('.wrap').hide() ;
			$('#wrap1').show() ; 

			isCanSubmit() ;
		});

		$('#wrap1').on('click','#avatar',function(){
			$('#avatar_input').trigger('click') ;
		}) ;

		$('#wrap1').on('change','#avatar_input',function(){
			console.log($('#avatar_input')[0].files)
			var file = $('#avatar_input')[0].files[0] ;
			readFile(file,readFile_callback) ;
		}) ;

		//养殖量位数控制
		$('#wrap1').on('input','#unit_scale',function(){
			var temp = $(this).val();
			var ret = setNumbersRule(temp,curr_animal_type);
			$(this).val(ret);
		});

    	// 选择动物类型
    	$('#wrap1').on('click','.animal_type_choose',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		$('#animal_type').show() ;
    	}) ;
    	// 选择动物类型
    	$('#wrap1').on('click','#animal_type .animal_type_item',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		var animal_type = $(this).attr('data-animal_type') ;
    		if(animal_type != curr_animal_type){
 		   		setUnit(animal_type);
 		   		$('#unit_scale').val('');
    		}
    		curr_animal_type = animal_type;
    		$('#unit_scale')
    		var animal_type_text = $(this).html() ;
    		$('.animal_type_choose').html(animal_type_text) ;
    		$('#animal_type').hide() ;
    	}) ;
    	//点击遮罩，动物类型选择消失
    	$('#wrap1').on('click','.mask',function(e){
    		e.stopPropagation() ;
    		e.preventDefault() ;
    		$('#animal_type').hide() ;
    	}) ;

		// 完成
		$('#wrap1').on('click','#save',function(){
			if($(this).hasClass('grey-bluebtn')){
				return ;
			}
			var nickname = $('#nickname').val() || '';
			var user_name = $('#user_name').val() || '' ;
			if(!user_name){
				var curr_user_info = RP.store.getItem('curr_user_info') ;
				user_name = curr_user_info['username'];
				// console.log(user_name);
				// return false;
			}
			var unit_name = $('#unit_name').val() || '' ;
			var unit_scale = $('#unit_scale').val() || '' ;
			//var variety = $('#variety').val() || '';
			var variety = curr_animal_type || '';
			var generation = $('#generation').val() || '' ;
			var email = $('#email').val() || '' ;	
			var file = $('#avatar_input')[0].files[0] ;

			if(!checkForm()){
				return ;
			}
			// 显示加载条
			loadingShow($('#wrap1>section')[0]) ;

			var url = global_path + "index.php/personalcenter/update_user" ;
			var params = {
				nickname : nickname ,
				user_name : user_name ,
				unit_name : unit_name ,
				unit_scale : unit_scale ,
				variety : variety ,
				generation : generation ,
				email : email 
			} ;
			if(curr_area_info){
				var province = curr_area_info['province'] ;
				var city = curr_area_info['city'] ;
				var area = curr_area_info['area'] ;
				var province_code = province['province_code'] ;
				var city_code = city['city_code'] ;
				var area_code = area['area_code'] ;
				params['province_id'] = province_code ;
				params['city_id'] = city_code ;
				params['area_id'] = area_code ;
			}
			
			if(file){
				params['file'] = file ;
				commonAjax_file(url,params).then(function(data){
					callback(data) ;
				}).fail(function(){
					errorPageShow($('#wrap1')[0],'system') 
				}) ;
			}
			else{
				commonAjax(url,params).then(function(data){
					callback(data) ;
				}).fail(function(){
					errorPageShow($('#wrap1')[0],'system','2') 
				}) ;
			}
			function callback(data){
				// 隐藏加载条
				loadingHide($('#wrap1>section')[0]) ;

				if(data && data.status && data.status =="2000"){
					console.log(data);
					if(data.data.is_show == 2){
	                  getPointHtml('完善信息',data.data.score,$('.main-section')[0]);
	                }
					// alert(2);
					getLatestUserInfo().then(function(data_user){
						if(data_user && data_user.status && data_user.status =="2000"){
		 					RP.store.setItem('curr_user_info',data_user['data']) ;
		 					window.history.go(-1) ;
		 					//window.location.reload() ;
		 					// errorPageShow($('#wrap1>section')[0],'load','2') ;
						}
					}) ;
				}
				else{
					d_alert.setTitle('编辑失败') ;
					d_alert.show() ;
				}
			}
		}) ;

		// 表单验证
		// $('#wrap1').on('input','input[id=nickname]',function(){
		// 	isCanSubmit() ;
		// }) ;

		// 输入控制 //input
		$('#wrap1').on('keydown keyup blur','.inputValidation',function(){
			// console.info(1111) ;
			var minLength = $(this).attr('minLength') ;
			var maxLength = $(this).attr('maxLength') ;
			var value = $(this).val() ;
			if(value){
				var tmp = getInStrByLength(value,maxLength) ;
				$(this).val(tmp.ret) ;
			}
		}) ;

	})() ;


	// 表单验证
	function checkForm(){
		var ret = true ;
		$('.inputValidation').each(function(i,v){
			var minLength = $(this).attr('minLength') * 1 ;
			var maxLength = $(this).attr('maxLength') * 1 ;
			var value = getInStrByLength($(this).val(),maxLength) ;
			var defaultTip = $(this).attr('defaultTip') ;
			var pattern = $(this).attr('pattern') ;
			if(ret && value.ret){
				if(value.length < minLength || value.length > maxLength){
					d_alert.setTitle(defaultTip) ;
					d_alert.show() ;
					ret = false ;
					return ;
				}
				if(pattern){
					//验证全场养殖量不为“7.”这种格式
					if(pattern == 'float'){
						var temp = value.ret;
						var d = temp.indexOf('.');
						if(curr_animal_type == 'birds'){
							if(temp.substr(d+1) == ''){
								d_alert.setTitle(defaultTip) ;
								d_alert.show() ;
								ret = false ;
								return ;	
							}						
						}else{
							if(d>=0){
								d_alert.setTitle(defaultTip) ;
								d_alert.show() ;
								ret = false ;
								return ;	
							}	
						}
						
					}
					// 邮箱正则验证
					if(pattern == 'email'){
						if(!validator['check_email'](value.ret)){
							ret = false ;
							return ;
						}
					}
				}
			}
		}) ;
		return ret ;
	}


	// 图片预览回调
	function readFile_callback(url){
		// console.info(url) ;
		if(!url){
			return false ;
		}
		// window.location.href = url ;
		console.info(url) ;
		$('#avatar').attr('src',url) ;
	}


	// 获取用户最新信息
	function getLatestUserInfo(){
		var url = global_path + 'index.php/personalcenter/get_newinfo' ;
		var p = {} ;
		return commonAjax(url,p);
	}

	// 刷新页面信息
    function refresh_area(){
    	// 刷新地区
		if(curr_area_info){
			var province = curr_area_info['province'] ;
			var city = curr_area_info['city'] ;
			var area = curr_area_info['area'] ;

			var province_name = province['province_name'] ;
			var city_name = city['city_name'] ;
			var area_name = area['area_name'] ;

			$('#choose_area').html(province_name + city_name + area_name) ;
		}
    }


     // 判断是否可以提交
	function isCanSubmit(){
		return true ;
		// // 昵称
		// var nickname = $('#nickname').val().replace(/\s+/,'') ;
		// // 邮箱
		// var email = $('#email').val().replace(/\s+/,'') ;

		// // 昵称、地区为必填
		// if(nickname && nickname.length >=4 && nickname.length <=10  && curr_area_info){
		// 	$('#save').removeClass('grey-bluebtn') ;
		// 	return true ;
		// }
		// else{
		// 	$('#save').addClass('grey-bluebtn') ;
		// }
		// return false ;
	}
	//判断养殖量单位
	function setUnit(animal_type){
		if(animal_type == 'birds'){
			$('#tou').hide();
			$('#wanyu').show();
		}else{
			$('#wanyu').hide();
			$('#tou').show();
		}

	}
	function jsmartRegister(){
		jSmart.prototype.registerPlugin("modifier","getRealName",function(name){
			name = '' + name ;
			if(name.indexOf('*****')==3){
				return '' ;
			}
			return name ;
		});
	}


}) ;