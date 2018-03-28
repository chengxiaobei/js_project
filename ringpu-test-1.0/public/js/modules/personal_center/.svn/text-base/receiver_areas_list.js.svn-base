(function(){

})() ;

require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,_){

	var reciver_list_tpl = new jSmart(document.getElementById('reciver_list_tpl').innerHTML) ;
	var reciver_tpl = new jSmart(document.getElementById('reciver_tpl').innerHTML) ;
	var curr_area_info = RP.store.getItem('curr_area_info') ;
	RP.store.removeItem('curr_area_info') ;
	var curr_receiver_list = null; 

	var receiver_code = getQueryString('receiver_code') ;
	var receiver_method = getQueryString('receiver_method') ;
	// 是否来自下单页面
	var from_order_type = null ;
	if(receiver_method && receiver_method == "add" && !receiver_code){
		from_order_type =  "add" ;
	}
	// 来自下单页面--编辑
	else if(receiver_method && receiver_method =='edit' && receiver_code){
		from_order_type = "edit" ;
	}

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	var d_confrim_guide = new Dialog({type:'confirm_guide'}) ;


	// 页面渲染
	(function(){
		var url = global_path + "index.php/personalcenter/getReceiver" ;
		var p ={
		} ;
		commonAjax(url,p).then(function(data){
			console.info(data) ;
			var res = "" ;
			if(data && data.status && data.status == "2000"){
				curr_receiver_list = data['data'] ;
				res = reciver_list_tpl.fetch(data) ; 
				$('#wrap1').html(res) ;
			}
			else{
				res = reciver_list_tpl.fetch({}) ; 
				$('#wrap1').html(res) ;
				errorPageShow($('#wrap1')[0],'nodata');
			}
			// 来自下单页面--添加
			if(from_order_type && from_order_type == "add"){
				$('.wrap').hide() ;
				$('#wrap2').show() ;
			}
			// 来自下单页面--编辑
			else if(from_order_type && from_order_type == "edit"){
				renderHtml_update(receiver_code) ;
			}
			else{
				$('.wrap').hide() ;
				$('#wrap1').show() ;
			}
		}).fail(function(){
			var res = reciver_list_tpl.fetch([]) ; 
			$('#wrap1').html(res) ;
			$('#wrap1').show() ;
			errorPageShow($('#wrap1')[0],'system');
		}) ;
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			// window.history.go(-1) ;
			window.location.href = "index.php" ;
		}) ;
		$('#wrap2,#wrap3').on('click','.backButton',function(){
			if($(this).closest('#wrap2').size()>0){
				$('#receiver').val('') ;
				$('#telphone').val('') ;
				$('#wrap2 .choose_area').html('') ;
				$('#detail').val('') ;
			}
			if(from_order_type && receiver_method){
				window.history.go(-1) ;
			}
			else{
				$('.wrap').hide() ;
				$('#wrap1').show() ;
			}
		}) ;
		$('#wrap1_area').on('click','.backButton',function(){
			$('.wrap').hide() ;
			if(from_order_type == 'add'){
				$('#wrap2').show() ;
				return ;
			}
			else if(from_order_type == 'edit'){
				$('#wrap3').show() ;
				return ;
			}
			$('#wrap1').show() ;
		}) ;
		// 添加收货地址
		$('#wrap1').on('click','.receiver_add',function(){
			$('.wrap').hide() ;
			$('#wrap2').show() ;
			from_order_type = 'add' ;
		}) ;
		$('#wrap2').on('click','#choose_area',function(){
			RP.store.setItem('curr_receiver_type','add') ;
			$('.wrap').hide() ;
    		$('#wrap1_area').show() ;
		}) ;

		$('#wrap3').on('click','#choose_area_update',function(){
			var code = $(this).find('.choose_area').attr('data-code') ;
			RP.store.setItem('curr_receiver_type','edit') ;
			RP.store.setItem('curr_receiver_code',code) ;
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
		});


		// 编辑
		$('#wrap1').on('click','.receiver_edit',function(){
			var code = $(this).closest('.receiver_item').attr('data-code') ;
			// console.info(code) ;
			from_order_type = 'edit' ;
			renderHtml_update(code) ;
		}) ;
		// 删除
		$('#wrap1').on('click','.receiver_delete',function(){
			var code = $(this).closest('.receiver_item').attr('data-code') ;
			if(!code){
				return ;
			}
			
			var confirm_call = function(){
				var url = global_path + "index.php/personalcenter/deleteReceiver" ;
				var p = {
					code : code
				} ;
				commonAjax(url,p).then(function(data){
					// console.info(data) ;
					if(data && data.status && data.status == "2000"){
						window.location.href = window.location.href ;
					}
					else{
						d_alert.setTitle('删除失败') ;
						d_alert.show() ;
					}
				}) ;
			}
			d_confrim_guide.setTitle('确认删除地址?') ;
			d_confrim_guide.confirm_fn = confirm_call ;
			d_confrim_guide.show() ;
		}) ;
		$('#wrap2').on('click','#save',function(){
			add_update_receiver('add') ;
		}) ;

		// 编辑地址
		$('#wrap3').on('click','#update',function(){
			add_update_receiver('edit') ;
		}) ;

		// 表单验证
		$('#wrap2').on('input','textarea[id=detail]',function(){
            // var str = getInStrByLength(this.value,80) ; 
            var str = getStrByLength(this.value,60) ; 
            $('#detail').val(str) ;
            $('#wrap2').find('.detail_content_length').find('span:eq(0)').html(str.length+'/'); 
		}) ;

		$('#wrap3').on('input','textarea[id=detail_update]',function(){
            // var str = getInStrByLength(this.value,80) ;
            var str = getStrByLength(this.value,60) ;  
            $('#detail_update').val(str) ;
            $('#wrap3').find('.detail_content_length').find('span:eq(0)').html(str.length+'/'); 
		}) ;
		$('#wrap2').on('','#receiver',function(){
			var minLength = $(this).attr('minLength') ;
			var maxLength = $(this).attr('maxLength') ;
			var value = $(this).val() ;
			if(value){
				var tmp = getInStrByLength(value,maxLength) ;
				$(this).val(tmp.ret) ;
			}
		});
		$('body').on('input','.inputValidation',function(){
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




	// 添加、编辑
	function add_update_receiver(type){
		var receiver = '' ;
		var telphone = '';
		var detail = '' ;
		if(type && type == "add"){
			receiver = $('#receiver').val() ;
			telphone = $('#telphone').val() ;
			detail = $('#detail').val() ;
			if(!checkForm($('#wrap2'))){
				return ;
			}
		}else{
			receiver = $('#receiver_update').val() ;
			telphone = $('#telphone_update').val() ;
			detail = $('#detail_update').val() ;
			if(!checkForm($('#wrap3'))){
				return ;
			}
		}

		if(!(/\d{8,15}$/.test(telphone))){
			d_alert.setTitle('请输入11位正确的手机号') ;
			d_alert.show() ;
			return ;
		}

		var p = {
			receiver : receiver ,
			telphone : telphone ,
			detail : detail
		} ;

		if(curr_area_info){
			var province = curr_area_info['province'] ;
			var city = curr_area_info['city'] ;
			var area = curr_area_info['area'] ;
			var province_code = province['province_code'] ;
			var city_code = city['city_code'] ;
			var area_code = area['area_code'] ;

			p['provinceCode'] = province_code ;
			p['cityCode'] = city_code ;
			p['areaCode'] = area_code ;
		}
		else{
			if(type && type == "edit"){
				p['provinceCode'] = $('#choose_area_update').attr('data-province') ;
				p['cityCode'] = $('#choose_area_update').attr('data-city') ;
				p['areaCode'] = $('#choose_area_update').attr('data-area') ;
			}
			else{
				$('.tip-info>div').html('请选择所在地区') ;
				$('.tip-info').show() ;
				setTimeout(function(){
					$('.tip-info').hide() ;
				},1000) ;
				return ;
			}
		}

		if(!detail || (detail.length < 5 || detail.length > 60)){
			d_alert.setTitle('请输入正确的收货详细地址') ;
			d_alert.show() ;
			return ;
			// $('.tip-info>div').html('请输入正确的收货详细地址') ;
			// $('.tip-info').show() ;
			// setTimeout(function(){
			// 	$('.tip-info').hide() ;
			// },1000) ;
			// return ;
		}

		if(type && type == "edit"){
			p['code'] = $('#choose_area_update').find('.choose_area').attr('data-code');
		}
		var url = global_path +  "index.php/personalcenter/createReceiver" ;
		commonAjax(url,p).then(function(data){
			// console.info(data) ;
			if(data && data.status && data.status =="2000"){
				if(from_order_type && receiver_method){
					window.history.go(-1) ;
				}
				else{
					window.location.href = window.location.href ;
				}
			}
			else{
				d_alert.setTitle('添加失败') ;
				d_alert.show() ;
			}
		}) ;
	}


	// 表单验证
	function checkForm($from){

		var ret = true ;
		$from.find('.inputValidation').each(function(i,v){
			var minLength = $(this).attr('minLength') * 1 ;
			var maxLength = $(this).attr('maxLength') * 1 ;
			var value = $(this).val() ;
			var value_length = getInStrLength(value) ;
			var defaultTip = $(this).attr('defaultTip') ;
			var pattern = $(this).attr('pattern') ;
			
			if(!value || (value_length < minLength || value_length > maxLength)){
				d_alert.setTitle(defaultTip) ;
				d_alert.show() ;
				ret = false ;
				return ;
			}
			if(pattern){
				// 邮箱正则验证
				if(pattern == 'email'){
					if(!validator['check_email'](value)){
						ret = false ;
						return ;
					}
				}
			}

		}) ;
		return ret ;
	}


	// 根据code渲染地址编辑界面
	function renderHtml_update(code){
		var receiver = getReceiverBycode(code) ;
		var res = reciver_tpl.fetch({'data':receiver}) ;
		$('#wrap3').html(res) ;
		$('.wrap').hide() ;
		$('#wrap3').show() ;
		//$('#detail_update').trigger('input') ;
	}

	function getReceiverBycode(code){
		if(!curr_receiver_list){
			return false ;
		}
		var ret = null ;
		for(var i = 0 ; i<curr_receiver_list.length ;i++){
			var receiver = curr_receiver_list[i] ;
			if(receiver['code'] == code){
				ret = receiver ;
				break ;
			}
		}
		return ret ;
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

			var curr_receiver_type = RP.store.getItem('curr_receiver_type') ;
			RP.store.removeItem('curr_receiver_type') ;
			$('.wrap').hide() ;

			if(curr_receiver_type && curr_receiver_type =="add"){
				$('#wrap2').find('.choose_area').html(province_name+city_name+area_name) ;
				$('#wrap2').show() ;
			}
			else{
				var code = RP.store.getItem('curr_receiver_code') ;
				renderHtml_update(code) ;
				$('#wrap3').find('.choose_area').html(province_name+city_name+area_name) ;
				$('#wrap3').show() ;
			}
		}
    }


}) ;