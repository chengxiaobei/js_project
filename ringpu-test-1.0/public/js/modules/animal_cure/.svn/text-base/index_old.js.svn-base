(function(){

})() ;

// 动物诊疗
require(['global','jsmart','jquery','dialog','validator'],function(global,jsmart,$,_,validator){

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	/*** 第一步参数 ***/
	// 送检人
	var client_name ;
	// 联系电话
	var client_tel ;
	// 送检单位
	var client_unit ;
	/*** 第二步参数 ***/ 
	// 样品信息
	var specimen_info = [] ;
	// 检测内容 
	var case_info = [] ;
	// 动物类型集合
	var animal_type_list = {
		birds:'禽类（鸡、鸭）',
		beasts:'畜类（猪）'
	} ;
	// 动物类型（禽类:birds、畜类:beasts）
	var curr_animal_type;
	// 发病情况
	var symptoms;
	/*** 第三步参数 ***/
	// 省
	var province ;
	var province_name ;
	// 市
	var city ;
	var city_name ;
	// 区
	var area ;
	var area_name ;
	// 送检地点
	var detection_place ;
	// 付费方式（检测体检卡:card、自费:expense）
	//2016-4-25只保留自费:expense
	var pay_type = 'expense' ; 
	// 体检卡号
	var card_nums = '';

	// 缓存信息 第二次登录使用
	var animalcurl_base_info = {} ;


	// 页面渲染
    (function(){
    	$('.inspection_place_info').show() ;
    	// $('#card_nums').attr('disabled','true');
    	// $('#card_nums').addClass('dwzl-bghui');
    	$('.animal_type_choose').addClass('typemain-choosecolor');
    	
    	// 是否登录检测
		check_login_module() ;
		refresh_area() ;
    	refresh_html() ;
    	

    })() ;

    // 业务逻辑
    (function(){
    	//动物诊疗第一步点击帮助信息
    	$('#wrap1').on('click','.animal_help_info',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		$('.wrap').hide() ;
    		$('#wrap4').show() ;
    		$('#wrap4 .backButton').attr('id','back_to_wrap1');
    	}) ;

    	//动物诊疗第二步点击返回、帮助信息
    	$('#wrap2').on('click','.backButton',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		$('.wrap').hide() ;
    		$('#wrap1').show() ;
    	}) ;
    	$('#wrap2').on('click','.animal_help_info',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		$('.wrap').hide() ;
    		$('#wrap4').show() ;
    		$('#wrap4 .backButton').attr('id','back_to_wrap2');
    	}) ;

    	//动物诊疗第三步点击返回、帮助信息
    	$('#wrap3').on('click','.backButton',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		$('.wrap').hide() ;
    		$('#wrap2').show() ;
    	}) ;
    	$('#wrap3').on('click','.animal_help_info',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		$('.wrap').hide() ;
    		$('#wrap4').show() ;
    		$('#wrap4 .backButton').attr('id','back_to_wrap3');
    	}) ;

    	//帮助信息返回按钮
    	$('#wrap4').on('click','#back_to_wrap1',function(e){
    		e.stopPropagation();
    		e.preventDefault();
    		$('.wrap').hide() ;
    		$('#wrap1').show() ;
    	}) ;
        $('#wrap4').on('click','#back_to_wrap2',function(e){
    		e.stopPropagation();
    		e.preventDefault();
    		$('.wrap').hide() ;
    		$('#wrap2').show() ;
    	}) ;
    	$('#wrap4').on('click','#back_to_wrap3',function(e){
    		e.stopPropagation();
    		e.preventDefault();
    		$('.wrap').hide() ;
    		$('#wrap3').show() ;
    	}) ;

    	// 选择动物类型
    	$('#wrap2').on('click','.animal_type_choose',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		$('#animal_type').show() ;
    	}) ;
    	// 选择动物类型
    	$('#wrap2').on('click','#animal_type .animal_type_item',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		curr_animal_type = $(this).attr('data-animal_type') ;
    		$('.specimen_edit_item').each(function(i,v){
    			var specimen_type = $(this).attr('data-type') ;
    			//console.info(specimen_type);
    			if($(this).find('span').hasClass('dwzl-typetwolist-duigou')){
    				$(this).find('span').removeClass('dwzl-typetwolist-duigou');
    				$('#' + specimen_type).val(''); 
    				$(this).closest('.dwzl-typetwolist').next('div').hide() ;
    				if(specimen_type && specimen_type == 'other'){
						$('#other_specimen_name').val('') ;
						$('#other_specimen_num').val('') ;
					}
    			}
    		});
    		if(curr_animal_type == 'birds'){
    			$('.beasts_show').hide();
    			$('.birds_show').show();
    		}
    		if(curr_animal_type == 'beasts'){
    			$('.birds_show').hide();
    			$('.beasts_show').show();
    		}
    		//console.info(curr_animal_type);
    		var animal_type_text = $(this).html() ;
    		$('.animal_type_choose').html(animal_type_text) ;
    		$('.animal_type_choose').removeClass('typemain-choosecolor');
    		$('#animal_type').hide() ;
    		//search_analysis_place() ;
    	}) ;
    	//点击遮罩，动物类型选择消失
    	$('#wrap2').on('click','.mask',function(e){
    		e.stopPropagation() ;
    		e.preventDefault() ;
    		$('#animal_type').hide() ;
    	}) ;

    	//编辑-完成
		$('#wrap2').on('click','.animal-edit-item',function(){
			$(this).toggleClass('animal-complete') ;
			if($(this).hasClass('animal-complete')){
				$(this).html('完成') ;
				$(this).closest('.animal-edit-title').next('div').show() ;
			}
			else{
				$(this).html('编辑') ;
				$(this).closest('.animal-edit-title').next('div').hide() ;
			}
		}) ;

		//对勾-数量
		$('#wrap2').on('click','.specimen_edit_item',function(){
			$(this).find('span').toggleClass('dwzl-typetwolist-duigou') ;
			if($(this).find('span').hasClass('dwzl-typetwolist-duigou')){
				$(this).closest('.dwzl-typetwolist').next('div').show() ;
			}
			else{
				$(this).closest('.dwzl-typetwolist').next('div').hide() ;
			}
		});

		//对勾-检测内容
		$('#wrap2').on('click','.case_edit_item',function(){
			$(this).find('span').toggleClass('dwzl-typetwolist-duigou') ;
			var case_type = $(this).attr('data-type') ;
			if(case_type && case_type == 'other'){
				if($(this).find('span').hasClass('dwzl-typetwolist-duigou')){
					$(this).closest('.dwzl-typetwolist').next('div').show();								
				}else{
				$(this).closest('.dwzl-typetwolist').next('div').hide();
				}
			}
		});

    	// 选择地区
    	$('#wrap3').on('click','.animal_choose_area',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		$('.wrap').hide() ;
    		$('#wrap1_area').show() ;

    	}) ;
		$('#wrap1_area').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap3').show() ;
		}) ;
    	// 点击地区
		$('#wrap3_area').on('click','.area',function(e){
			var area_name = $(this).attr('data-name') ;
			var area_code = $(this).attr('data-code') ;
			var curr_area = {
				area_name : area_name ,
				area_code : area_code 
			} ;
			// 保存城市信息
			var curr_area_info_animalcure = RP.store.getItem('curr_area_info') ;
			curr_area_info_animalcure['area'] = curr_area ;
			var user_code = RP.store.getItem('curr_user_info')['user_code'] ;
			//curr_area_info_animalcure['user_code'] = user_code ;
			var curr_area_info_animalcure_key = 'curr_area_info_animalcure' + user_code ;
			RP.store.setItem(curr_area_info_animalcure_key,curr_area_info_animalcure) ;
			//console.log(RP.store.getItem(curr_area_info_animalcure_key));
			refresh_area() ;
			$('.wrap').hide() ;
			$('#wrap3').show() ; 

			search_analysis_place() ;
		});

		// 送检地点
		$('#wrap3').on('click','.inspection_place_info',function(e){
			e.stopPropagation() ;
   			e.preventDefault() ;
			$('#animal_check').show() ;
		}) ;
		$('#wrap3').on('click','.mask',function(){
			$('#animal_check').hide() ; 
		}) ;

		// 收费标准
		$('#wrap3').on('click','.animal_charge_standard',function(e){
			e.stopPropagation();
			e.preventDefault();
			$('.wrap').hide() ;
			//$('#wrap5 h2').html('收费标准');
			$('#wrap5').show() ;
		}) ;
		$('#wrap5').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap3').show() ;
		}) ;
		$('#wrap5,#wrap4').on('click','.animal-charge-trigger',function(){
			$(this).toggleClass('animal-charge-down') ;
			if($(this).hasClass('animal-charge-down')){
				$(this).closest('.animal-charge-item-title').next('div').slideUp() ;
				$(this).html('展开') ;
			}
			else{
				$(this).closest('.animal-charge-item-title').next('div').slideDown() ;
				$(this).html('收回') ;
			}
		}) ;

		// 帮助信息、收费标准行内点击显示及收起
		$('#wrap4,#wrap5').on('click','.sfbz-lineone-xiala',function(){
			$(this).toggleClass('sfbz-lineone-shouqi');
			if($(this).hasClass('sfbz-lineone-shouqi')){
				$(this).nextAll('p').slideDown() ;
			}else{
				$(this).nextAll('p').slideUp() ;
			}
		}) ;
		// 选择付费方式 2016-04-25去掉，默认自费
		// $('#wrap3').on('click','.jyk-main',function(){
		// 	$('.animal-charge-option').find('span:eq(0)').removeClass('jyk-main-ckecked') ;
		// 	$(this).find('span:eq(0)').addClass('jyk-main-ckecked') ;
		// 	console.info($(this).find('span:eq(0)').attr('data-type'));
		// 	if($(this).find('span:eq(0)').attr('data-type')=='expense'){
		// 		$('#card_nums').attr('disabled','true');
		// 		$('#card_nums').addClass('dwzl-bghui');
		// 	}
		// 	else if($(this).find('span:eq(0)').attr('data-type')=='card'){				
		// 		console.log($('#card_nums').attr("placeholder"));
		// 		$('#card_nums').removeClass('dwzl-bghui') ;
		// 		$('#card_nums').removeAttr('disabled');
				
		// 	}
		// }) ;
		// $('#wrap3').on('input','#card_nums',function(){
		// 	console.log($('#card_nums').val()) ;
		// 	var card_nums_text = $('#card_nums').val() ;
		// 	var ret = card_nums_text.replace(/[^\a-\z\A-\Z0-9\-]/g,'') ;
		// 	$('#card_nums').val(ret);
		// }) ;

		//最大字符验证

		$('#wrap1,#wrap2,#wrap3').on('keydown keyup blur','#client_name,#client_unit,#single_nums,#all_nums,#contacts_name,#breed,#generation,#semen,#other_specimen_name,#morbidity_days,#client_days,#morbidity,#mortality,#other_case_info,#symptoms',function(){
			var max = $(this).attr('max-input') ;
			// console.info(max);

			if(max){
				var str = gainStrlen(this.value,max) ;
				$(this).val(str.ret_str) ;
			}
		}) ;

		//最大字符验证数字
		$('#wrap1,#wrap2,#wrap3').on('keydown keyup blur','#serum,#tissue,#cordBlood,#milk,#other_specimen_num,#egg,#swab',function(){
			var max = $(this).attr('max-input') ;
			$(this).attr('maxlength',max);
			console.info($(this).val());
			var num_text = $(this).val();
			var ret = num_text.replace(/[^\d]/g,'');
			$(this).val(ret);
		}) ;

		// 动物诊疗第一步，点击下一步
		$('#wrap1').on('click','.animal_fill_next_one',function(e){
			if(!moduleOneVal()){
				return ;
			}
			e.stopPropagation();
			e.preventDefault();
			$('.wrap').hide() ;
			$('#wrap2').show() ;
		});

		// 动物诊疗第二步，点击下一步
		$('#wrap2').on('click','.animal_fill_next_two',function(e){
			// symptoms = $('#symptoms').val() || '';
			if(!moduleTwoVal()){
				return ;
			}
			e.stopPropagation();
			e.preventDefault();
			console.info(curr_animal_type);
			$('.wrap').hide() ;
			$('#wrap3').show() ;
		});

		// 动物诊疗第三步，提交申请
		$('#wrap3').on('click','.animal_fill_next',function(){
			// 获取付费类型
			// pay_type = $('.jyk-main-ckecked').attr('data-type') ;
			if(!detection_place){
				detection_place = $('.inspection_place_info').find('span:eq(0)').html();
			}
			// 表单验证
			if(fieldsValidation()){
				animalcurl_base_info['client_name'] = client_name ;
				animalcurl_base_info['client_tel'] = client_tel ;
				animalcurl_base_info['client_unit'] = client_unit ;
				animalcurl_base_info['animal_type'] = curr_animal_type ;
				animalcurl_base_info['province'] = province['province_code'] ;
				animalcurl_base_info['city'] = city['city_code'] ;
				animalcurl_base_info['area'] = area['area_code'] ;
				animalcurl_base_info['province_name'] = province_name ;
				animalcurl_base_info['city_name'] = city_name ;
				animalcurl_base_info['area_name'] = area_name ;
				animalcurl_base_info['detection_place'] = detection_place ;
				//animalcurl_base_info['pay_type'] = pay_type ;
				//animalcurl_base_info['card_nums'] = card_nums || '';
				var user_code = RP.store.getItem('curr_user_info')['user_code'] ;
				//curr_area_info_animalcure['user_code'] = user_code ;
				var animalcurl_base_info_key = 'animalcurl_base_info' + user_code ;
				RP.store.setItem(animalcurl_base_info_key,animalcurl_base_info) ;
//				console.log(RP.store.getItem(animalcurl_base_info_key));
				//RP.store.setItem('animalcurl_base_info',animalcurl_base_info,'session') ;
				//window.location.href = "animal_list_edit.php?animal_type=" + curr_animal_type ;
				var url = global_path + 'index.php/animalcurl/submit_apply';
				var params = {} ;
				params['app_name'] = 'appname';
				params['device_id'] = 'deviceid';
				params['animal_type'] = curr_animal_type;
				console.info(curr_animal_type);
				params['province'] = province['province_code'];
				params['city'] = city['city_code'];
				params['area'] = area['area_code'];
				params['detection_place'] = detection_place;
				params['pay_type'] = pay_type;
				params['card_nums'] = card_nums;
				params['client_name'] = client_name;
				params['client_tel'] = client_tel ;
				params['client_unit'] = client_unit ;
				params['symptoms'] = symptoms ;
				params['specimen_info'] = specimen_info ;
				params['case_info'] = case_info ;

				//提交到接口
				commonAjax(url,params).then(function(data){
					console.info(data) ;
					if(data && data.status && data.status == '2000'){
						//RP.store.removeItem('animalcurl_base_info') ;
						var test_id=data['data']['test_id'] ;
						var case_info=data['data']['case_info'];
						RP.store.setItem('curr_case_info',case_info);
						if(RP.store.getItem('complete_achive_feed')){
							RP.store.removeItem('complete_achive_feed') ;//清除送料信息标志位						
						}
						if(RP.store.getItem('complete_animal_list')){
							RP.store.removeItem('complete_animal_list') ;//清除完善采集单标志位						
						}
						window.location.href = 'animal_cure_result.php?test_id='+test_id;
					}else{
						errorPageShow($("#wrap3")[0],'system',2);
					}

				}).fail(function(){
				errorPageShow($("#wrap3")[0],'system',2);
				}) ;
			}
		}) ;
    })() ;

    function refresh_area(){
    	// 刷新地区
     	var curr_area_info_animalcure = RP.store.getItem('curr_area_info_animalcure') ;
//		RP.store.removeItem('curr_area_info') ;
		var curr_user_info = RP.store.getItem('curr_user_info') ;
		var user_code = curr_user_info['user_code'] ;
		
		var curr_area_info_animalcure_key = 'curr_area_info_animalcure' + user_code ;
		//console.log(curr_area_info_animalcure_key);
		var curr_area_info_animalcure_key = RP.store.getItem(curr_area_info_animalcure_key) ;
		
		//console.log(curr_area_info_animalcure_key);


		if(curr_area_info_animalcure_key){
			province = curr_area_info_animalcure_key['province'] || '';
			city = curr_area_info_animalcure_key['city'] ;
			area = curr_area_info_animalcure_key['area'] || '' ;
			if(province && city && area)
			{
				province_name = province['province_name'] || '' ;
				city_name = city['city_name'] || '' ;
				area_name = area['area_name'] || '' ;
				$('.animal_choose_area .animal_area_info').html(province_name + "&nbsp;&nbsp;" + city_name + "&nbsp;&nbsp;" + area_name).removeAttr('style') ;
			}
		}

    }

    // 刷新页面信息
    function refresh_html(){		
		//刷新其他
		// var animalcurl_index_tpl = new jSmart(document.getElementById('animalcurl_index_tpl').innerHTML);
		var curr_user_info = RP.store.getItem('curr_user_info') ;
		var user_code = curr_user_info['user_code'] ;
		var animalcurl_base_info = 'animalcurl_base_info' + user_code ;
			animalcurl_base_info = RP.store.getItem(animalcurl_base_info) ;
//		RP.store.removeItem('animalcurl_base_info') ;
		if(animalcurl_base_info){
			curr_animal_type = animalcurl_base_info['animal_type'] ;
			// province_name = animalcurl_base_info['province_name'] || '' ;
			// city_name = animalcurl_base_info['city_name'] || '' ;
			// area_name = animalcurl_base_info['area_name'] || '' ;	
			client_name = animalcurl_base_info['client_name'] ;
			client_tel = animalcurl_base_info['client_tel'] ;
			client_unit = animalcurl_base_info['client_unit'] ;
			//detection_place = animalcurl_base_info['detection_place'] ;
			//pay_type = animalcurl_base_info['pay_type'] ;
			//card_nums =	animalcurl_base_info['card_nums'] || '';
			//$('.inspection_place_info').find('span:eq(0)').html(detection_place) ;
			// if(pay_type == 'card'){
			// 	$('.animal-jyk-main').find('span:eq(0)').addClass('jyk-main-ckecked') ;
			// 	$('.animal-jyk-main').next('.animal-jyk-main').find('span:eq(0)').removeClass('jyk-main-ckecked') ;
			// 	$('#card_nums').removeAttr('disabled');
			// 	$('#card_nums').val(card_nums);
			// 	}
			$('.animal_type_choose').html(animal_type_list[curr_animal_type]) ;			
			$('#client_name').val(client_name) ;
			$('#client_tel').val(client_tel) ;
			$('#client_unit').val(client_unit) ;
			RP.store.removeItem('animalcurl_base_info'); 
		}else{
			getLatestUserInfo().then(function(data_user){
				if(data_user && data_user.status && data_user.status =="2000"){
					RP.store.setItem('curr_user_info_latest',data_user['data']) ;
					console.info(data_user);
					// var res = animalcurl_index_tpl.fetch(data_user) ;
					// $('#wrap1').html(res) ;					
				}			
				var curr_user_info_latest = RP.store.getItem('curr_user_info_latest') ;
				if(curr_user_info_latest){
					curr_animal_type = curr_user_info_latest['breed'];
					client_name = curr_user_info_latest['username'] ;
					client_tel = curr_user_info_latest['telephone'] ;
					client_unit = curr_user_info_latest['client_unit'] ;
					console.info(client_name);			
				}else{
					curr_animal_type = curr_user_info['breed'];
					client_name = curr_user_info['username'] ;
					client_tel = curr_user_info['telephone'] ;
					client_unit = curr_user_info['client_unit'] ;				
				}
				if(curr_animal_type == 'birds' || curr_animal_type == 'beasts'){
				$('.animal_type_choose').html(animal_type_list[curr_animal_type]) ;			
				}
				if(curr_animal_type == 'birds'){
	    			$('.beasts_show').hide();
	    			$('.birds_show').show();
	    		}
		    	if(curr_animal_type == 'beasts'){
		    		$('.birds_show').hide();
		    		$('.beasts_show').show();
		    	}
				if(client_name.indexOf('*****')==3){
					client_name = '' ;
				}
				$('#client_name').val(client_name) ;
				$('#client_tel').val(client_tel) ;
				$('#client_unit').val(client_unit) ;
			}) ;
		}

		console.info(curr_animal_type);
    	if(curr_animal_type == 'birds'){
    			$('.beasts_show').hide();
    			$('.birds_show').show();
    	}
    	if(curr_animal_type == 'beasts'){
    			$('.birds_show').hide();
    			$('.beasts_show').show();
    	}
		//$('.animal_choose_area .animal_area_info').html(province_name + "&nbsp;&nbsp;" + city_name + "&nbsp;&nbsp;" + area_name) ;

    }


    // 查询送检地点
    function search_analysis_place(){
    	detection_place = $('.inspection_place_info').find('span:eq(0)').html() ;
	    $('#animal_check').find('p:eq(0)').html(detection_place) ;
		if(curr_animal_type && province && city && area){
			var url = global_path + 'index.php/animalcurl/analysis_place' ;
	    	var p = {
	    		animal_type : curr_animal_type ,
	    		province : province['province_code'] ,
	    		city : city['city_code'] ,
	    		area : area['area_code'] 
	    	} ;

	    	commonAjax(url,p).then(function(data){
	    		// console.info(data) ;
	    		if(data && data.status && data.status == '2000'){
	    			detection_place = data['data']['detection_place'] ;
	    			$('.inspection_place_info').find('span:eq(0)').html(detection_place) ;
	    			$('.inspection_place_info').show() ;
	    			$('#animal_check').find('p:eq(0)').html(detection_place) ;
	    		}
	    	});
		}
    }

    //验证最小字数
	function min_input(str,min){
		var flag = true ;
		var charLen = 0;
		for(var i=0;i<str.length;i++){
		    if(str.charCodeAt(i)>255){  
		        charLen += 2 ;
		 	}else{  
		 	    charLen ++ ;
		 	}
		}
		//console.info(charLen) ;
		if(str && charLen<min ){
			flag = false ;
		}
		return flag ;
	}

	// 文本域字数验证
	$('#wrap2').on('input','#other_case_info,#symptoms',function(){
		var num;
   	// 其他,发病情况
   		if($(this).attr('id') == 'other_case_info'){
   			num = 50 ;
   		}
   		else{
   			num = 100 ;
   		}
   		var str = gainStrlen(this.value,num) ;
   		// console.info(str) ; 
   		$(this).val(str.ret_str) ;
   		// console.info(str.ret_num);
   		// console.log($(this));
   		$(this).closest('div').next('div').html(str.ret_num + '/<span>'+ num +'</span>') ;

   		}) ;

	//动物诊疗第一步验证
    function moduleOneVal(){
    	var flag = true ;
    	if(!flag){
			return false ;
		}
		client_name = $('#client_name').val() || '';
		console.info(client_name);
		client_tel = $('#client_tel').val() || '';
		client_unit = $('#client_unit').val() || '';
		console.info(client_unit);
		if(!client_name){
			d_alert.setTitle('请填写送检人姓名！') ;
			d_alert.show() ;
			return false;

		}
		if(client_name && !min_input(client_name,4)){
			d_alert.setTitle('请填写正确的送检人姓名！') ;
			d_alert.show() ;
			return false;
		}
		if(!client_tel){
			d_alert.setTitle('请填写联系电话！') ;
			d_alert.show() ;
			return false;
		}
		if(!validator['check_phone'](client_tel)){
			return false;
		}
		if(!client_unit){
			d_alert.setTitle('请填写送检单位！') ;
			d_alert.show() ;
			return false;
		}
		if(client_unit && !min_input(client_unit,5)){
			d_alert.setTitle('请填写正确的送检单位！') ;
			d_alert.show() ;
			return false;
		}

		return flag ;
    }
	//动物诊疗第二步验证
    function moduleTwoVal(){
    	var flag = true ;
		if(!curr_animal_type){
			d_alert.setTitle('请选择动物类型！') ;
			d_alert.show() ;
			return false ;
		}
		specimen_info=[];
		case_info=[];
		// 样品类型数量验证
		$('.specimen_edit_item').each(function(i,v){
			var tmp = {} ;
			var specimen_type = $(this).attr('data-type') ;
			var specimen_type_text = $(this).prev('p').text().replace(/[ ]|\ +|[\r\n]/g,"") ;
			var other_specimen = '' ;
			var specimen_nums = 0 ;
			if(specimen_type && specimen_type == 'other'){
				if($(this).find('span').hasClass('dwzl-typetwolist-duigou')){
					other_specimen = $('#other_specimen_name').val() ;
					specimen_nums = $('#other_specimen_num').val() ;
					if(!other_specimen){
						d_alert.setTitle('请输入其他类型样品名称') ;
						d_alert.show() ;
						flag = false ;
					}
					if(other_specimen && !min_input(other_specimen,2)){
						d_alert.setTitle('请输入正确的其他类型样品名称') ;
						d_alert.show() ;
						flag = false;
					}
					if(!specimen_nums){
						d_alert.setTitle('请输入其他类型样品数量') ;
						d_alert.show() ;
						flag = false ;
					}
					tmp['specimen_type'] = specimen_type ;//'other'
					tmp['other_specimen'] = other_specimen;
					tmp['specimen_nums'] = specimen_nums ;
					specimen_info.push(tmp) ;
					console.info(specimen_info) ;
				}
			}
			else{
				if($(this).find('span').hasClass('dwzl-typetwolist-duigou')){
					specimen_nums = $('#' + specimen_type).val() ;
					// console.info(specimen_nums);
					// console.info(!specimen_nums);
					if(!specimen_nums){
						
						if(specimen_type && specimen_type == 'tissue'){
							d_alert.setTitle('请填写组织样品数量！') ;
							d_alert.show() ;
							flag = false;
							return false;
						}else if(specimen_type && specimen_type == 'serum'){
							d_alert.setTitle('请填写血清样品数量！') ;
							d_alert.show() ;
							flag = false;
							return false;
						}else if(specimen_type && specimen_type == 'egg'){
							d_alert.setTitle('请填写鸡蛋样品数量！') ;
							d_alert.show() ;
							flag = false;
							return false;
						}else if(specimen_type && specimen_type == 'swab'){
							d_alert.setTitle('请填写拭子样品数量！') ;
							d_alert.show() ;
							flag = false;
							return false;
						}else if(specimen_type && specimen_type == 'cordBlood'){
							d_alert.setTitle('请填写脐带血样品数量！') ;
							d_alert.show() ;
							flag = false;
							return false;
						}else if(specimen_type && specimen_type == 'milk'){
							d_alert.setTitle('请填写乳汁样品数量！') ;
							d_alert.show() ;
							flag = false;
							return false;
						}
//						console.info(msg);
//						d_alert.setTitle('请填写' + msg + '样品数量！') ;
//						d_alert.show() ;
						//flag = false ;
						// return false;
					}
					//tmp['specimen_type'] = specimen_type ;
					tmp['specimen_type'] = specimen_type_text ;
					tmp['other_specimen'] = other_specimen;
					tmp['specimen_nums'] = specimen_nums ;
					specimen_info.push(tmp) ;
					console.info(specimen_info) ;
				}
			}
		}) ; 
    	if(!flag){
			return false ;
		}
		if(!specimen_info || specimen_info.length == 0){
			// 样品类型数量
			d_alert.setTitle('请选择样品名称！') ;
			d_alert.show() ;
			// flag = false ;
			return false;
		}


		// 检测内容验证
		$('.case_edit_item').each(function(i,v){
			var tmp = {} ;
			var case_type = $(this).attr('data-type') ;
			var case_type_text = $(this).prev('p').text().replace(/[ ]|\ +|[\r\n]/g,"") ;
			var other_case = '' ;

				if(case_type && case_type == 'other'){
					if($(this).find('span').hasClass('dwzl-typetwolist-duigou')){
					other_case = $('#other_case_info').val() ;
					if(!other_case){
						d_alert.setTitle('请填写其他检测内容！') ;
						d_alert.show() ;
						flag = false ;
						// return false;
					}
					if(other_case && !min_input(other_case,2)){
						d_alert.setTitle('其他检测内容字数不够！') ;
						d_alert.show() ;
						flag = false;
						// return false;
					}
					tmp['case_type'] = case_type ;//'other'
					tmp['case_detail'] = '';
					tmp['other_name'] = other_case ;
					case_info.push(tmp) ;
					console.info(case_info) ;
					}
				}else{
					if($(this).find('span').hasClass('dwzl-typetwolist-duigou')){
						tmp['case_type'] = case_type_text ;//'other'
						tmp['case_detail'] = '';
						tmp['other_name'] = other_case ;
						case_info.push(tmp) ;
						console.info(case_info) ;
					}					
				}
		});
    	if(!flag){
			return false ;
		}
		// 检测内容		
		if( !case_info || case_info.length == 0){
			//console.info(22);
			d_alert.setTitle('请选择检测内容！') ;
			d_alert.show() ;
			// flag = false;
			return false;
		}

		symptoms = $('#symptoms').val();
			// console.info(symptoms);
		if(!symptoms){
			d_alert.setTitle('请填写发病情况！') ;
			d_alert.show() ;
			return false;
		}
		if(symptoms && !min_input(symptoms,2)){
			d_alert.setTitle('发病情况内容字数不够！') ;
			d_alert.show() ;
			// flag = false;
			return false;
		}
		
		return flag ; 
    }


    // 提交表单验证
    function fieldsValidation(){
		if(!province|| !city || !area){
			d_alert.setTitle('请选择地区！') ;
			d_alert.show() ;
			return false ;
		}
		// if(!detection_place){
		// 	d_alert.setTitle('请选择动物类型和地区来确定送检地点！') ;
		// 	d_alert.show() ;
		// 	return false ;
		// }

		// if(!pay_type){
		// 	d_alert.setTitle('请选择付费方式！') ;
		// 	d_alert.show() ;
		// 	return false ;
		// }
		// card_nums = $('#card_nums').val();
		// if(pay_type && pay_type == 'card' && !card_nums){
		// 	d_alert.setTitle('请填写检测体验卡号！') ;
		// 	d_alert.show() ;
		// 	return false ;
		// }
		return true ;
    }

	function getLatestUserInfo(){
		var url = global_path + 'index.php/personalcenter/get_newinfo' ;
		var p = {} ;
		return commonAjax(url,p);
	}

}) ;