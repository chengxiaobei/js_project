(function(){

})() ;

require(['jquery', 'global', 'validator','dialog'],function($,global,validator,_){

	var curr_area_info = RP.store.getItem('curr_area_info') ;
	RP.store.removeItem('curr_area_info') ;

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	var breed = getQueryString('animal_type') ;

	// 页面渲染
	(function(){
		// getLatestUserInfo().then(function(data_user){
		// 	if(data_user && data_user.status && data_user.status =="2000"){
		// 		var breed = data_user.data.breed ;
				if(breed == 'birds'){
					$('#wanyu').show();
				}else if(breed == 'beasts'){
					$('#tou').show();
				}else{

				}
		// 	}
		// }) ;
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-3) ;
		}) ;

		//选择地区回退按钮
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

			// isCanSubmit();
		});

		$('#wrap1').on('click','#avatar',function(){
			$('#avatar_input').trigger('click') ;
		}) ;

		$('#wrap1').on('change','#avatar_input',function(){
			var file = $('#avatar_input')[0].files[0] ;
			readFile(file,readFile_callback) ;
		}) ;


		// 选择动物类型
    	// $('#wrap1').on('click','.animal_type_choose',function(e){
    	// 	e.stopPropagation() ;
   		// 	e.preventDefault() ;
    	// 	$('#animal_type').show() ;
    	// }) ;
    	// // 选择动物类型
    	// $('#wrap1').on('click','#animal_type .animal_type_item',function(e){
    	// 	e.stopPropagation() ;
   		// 	e.preventDefault() ;
    	// 	curr_animal_type = $(this).attr('data-animal_type') ;
    	// 	var animal_type_text = $(this).html() ;
    	// 	$('.animal_type_choose').html(animal_type_text) ;
    	// 	$('#animal_type').hide() ;
    	// }) ;
    	//点击遮罩，动物类型选择消失
    	// $('#wrap1').on('click','.mask',function(e){
    	// 	e.stopPropagation() ;
    	// 	e.preventDefault() ;
    	// 	$('#animal_type').hide() ;
    	// }) ;
		$('#wrap1').on('click','#person_edit',function(){
			// if($('#person_edit').hasClass('grey-bluebtn')){
			// 	return ;
			// }
			var nickname = $('#nickname').val() ;
			var username = $('#username').val() ;
			var client_unit = $('#client_unit').val() ;
			var all_nums = $('#all_nums').val() ;
			var breed = '';
			//console.log("sssss" + breed);
			//var breed = $('#breed').val() ;
			var generation = $('#generation').val() ;

			var email = $('#email').val() ;
			var province_code = '' ;
			var city_code = '' ;
			var area_code = '' ;
			var file = $('#avatar_input')[0].files[0] ;

			if(!checkForm()){
				return ;
			}

			if(curr_area_info){
				var province = curr_area_info['province'] ;
				var city = curr_area_info['city'] ;
				var area = curr_area_info['area'] ;
				province_code = province['province_code'] ;
				city_code = city['city_code'] ;
				area_code = area['area_code'] ;
			}

			var url = global_path + "index.php/personalcenter/edit" ;
			var params = {
				nickname : nickname ,
				username : username ,
				client_unit : client_unit ,
				all_nums : all_nums ,
				breed : breed ,
				generation : generation ,
				email : email ,
				province_code : province_code ,
				city_code : city_code ,
				area_code : area_code ,
				file : file
			} ;
			// console.info(params) ;
			commonAjax_file(url,params).then(function(data){
				 //alert(data.status) ;
				if(data && data.status && data.status=="2000"){
					if(data.data.is_show == 2){
	                  getPointHtml('完善信息',data.data.score,$('.main-section')[0]);
	                }
					window.location.href = "index.php" ;
				}
				else{
					alert('信息完善失败') ;
				}
			}) ;
		}) ;

		// 表单验证
		// $('#wrap1').on('input','input[id=nickname]',function(){
		// 	isCanSubmit() ;
		// }) ;

		// 输入控制 
		$('#wrap1').on('input','.inputValidation',function(){
			// console.info(1111) ;
			var minLength = $(this).attr('minLength') ;
			var maxLength = $(this).attr('maxLength') ;
			var value = $(this).val() ;
			if(value){
				var tmp = getInStrByLength(value,maxLength) ;
				$(this).val(tmp.ret) ;
			}
		}) ;

		//验证姓名的输入
		$('#wrap1').on('input','#username',function(){
			var username = $(this).val().replace(/[^a-zA-Z\u4E00-\u9FA5]/g,'') ;
			$(this).val(username);
		}) ;
		//验证昵称
		$('#wrap1').on('input','#nickname',function(){
			var nickname = $(this).val().replace(/[^0-9a-zA-Z\u4E00-\u9FA5]/g,'') ;
			console.log(nickname) ;
			$(this).val(nickname);
		}) ;

		//养殖量位数控制
		$('#wrap1').on('input','#all_nums',function(){
			var temp = $(this).val();
			var ret = setNumbersRule(temp,breed);
			$(this).val(ret);
		});

	})() ;


	// 表单验证
	function checkForm(){
		// var nickname = getInStrByLength($('#nickname').val() || '');
		// var user_name = getInStrByLength($('#user_name').val() || '') ;
		// var unit_name = getInStrByLength($('#unit_name').val() || '') ;
		// var unit_scale = getInStrByLength($('#unit_scale').val() || '') ;
		// var variety = getInStrByLength($('#variety').val() || '');
		// var generation = getInStrByLength($('#generation').val() || '') ;
		// var email = getInStrByLength($('#email').val() || '') ;	

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
						if(temp.substr(d+1) == ''){
							d_alert.setTitle(defaultTip) ;
							d_alert.show() ;
							ret = false ;
							return ;	
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
		$('#avatar').attr('src',url) ;
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
			$('#choose_area>span').attr('style','display:none;');
			$('#choose_area>a').html(province_name + "&nbsp;&nbsp;" + city_name + "&nbsp;&nbsp;" + area_name) ;
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
		// if(nickname && curr_area_info){
		// 	$('#person_edit').removeClass('grey-bluebtn') ;
		// 	return true ;
		// }
		// else{
		// 	$('#person_edit').addClass('grey-bluebtn') ;
		// }
		// return false ;
	}

		//获取用户最新信息
		// function getLatestUserInfo(){
		// var url = global_path + 'index.php/personalcenter/get_newinfo' ;
		// var p = {} ;
		// return commonAjax(url,p);
		// }

}) ;