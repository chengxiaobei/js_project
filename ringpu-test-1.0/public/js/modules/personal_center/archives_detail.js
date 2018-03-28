(function(){

})() ;


// 个人中心--检测--详情
require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,_){

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	var d_confirm = new Dialog({type:"confirm_guide"}) ;
	var animal_type;
	//优惠券列表返回的优惠券
	var coupon = RP.store.getItem('shop_coupon');
	// var archives_type = [
	// 	{"key":"1","name":"已取消"} ,
	// 	{"key":"2","name":"待发货"} ,
	// 	{"key":"3","name":"待收货"} ,
	// 	{"key":"4","name":"待支付"} ,
	// 	{"key":"5","name":"检测中"} ,
	// 	// {"key":"6","name":"待写方案"} ,  
	// 	{"key":"7","name":"待评价"} ,
	// 	{"key":"8","name":"已完成"}
	// ] ;

	 var archives_type = [
    	{key:'50001',name:'待发货'} ,
    	{key:'50002',name:'已取消'} ,
    	{key:'50003',name:'待收货'} ,
    	{key:'50004',name:'待支付'} ,
    	{key:'50005',name:'检测中'} ,
    	{key:'50006',name:'待写方案'} ,
    	{key:'50007',name:'待评价'} ,
    	{key:'50008',name:'已完成'} ,
    ] ;

    // 检测档案详情
	var archives_detail_tpl = new jSmart(document.getElementById('archives_detail_tpl').innerHTML) ;
	// 采样单详情
	var archives_sample_tpl = new jSmart(document.getElementById('archives_sample_tpl').innerHTML) ;
	// 诊断结果
	var archives_conclusion_tpl = new jSmart(document.getElementById('archives_conclusion_tpl').innerHTML) ;
	// 状态信息
	var archives_status_tpl = new jSmart(document.getElementById('archives_status_tpl').innerHTML) ;

	var type = getQueryString('type') ;
	var fromModelpage = getQueryString('fromModelpage') ;
	var id = getQueryString('id') ; 
	var pay_amount = 0 ;
	var logistics_newest_context = '' ;
	var case_info_array ;
	var curr_case_info ;
 	var sample_name_array = [] ;
	// 页面渲染
	(function(){
		// var data = {} ;
		// data['type'] = type ;
		var url = global_path + 'index.php/personalcenter/analysis_kuaidi' ;
		var p = {
			test_id : id
		} ;
		commonAjax(url,p).then(function(data){
			console.info(data) ;
			if(data && data.status && data.status == '2000'){
				var logisticsArray = data['data']['data'] ;
				console.info(logisticsArray) ;
				if(logisticsArray && logisticsArray.length != 0){
					logistics_newest_context = logisticsArray[0].context ;				
				}
				else{
					logistics_newest_context = '暂无物流信息' ;
				}
			}
			else{
				logistics_newest_context = '暂无物流信息' ;
			}
			archives_details() ;
		}).fail(function(){
			logistics_newest_context = '请点击详细查看' ;
			archives_details() ;
		}) ;			

	})() ;
	//优惠券
	if(coupon){
		coupon_code=coupon.code;
	}else{
		coupon_code="";
	}
	// 页面渲染,采样单详情
	function archives_details(){
		var url = global_path + "index.php/personalcenter/getanalysisdetail" ;
		var p = {
			'testing_id' : id ,
			'coupon_code' : coupon_code
		} ;

		commonAjax(url,p).then(function(data){
			console.info(data) ;
			case_info_array = data['data']['simple'];
			console.info(case_info_array);
			animal_type = data['data']['simple']['animal_type']
			console.info(id);
			console.info(animal_type);
			// console.info(sample_name_array);
			data['data']['baseInfo_phonenum'] = RP.baseInfo['archive_phonenum'] ;
			//添加物流信息到data中
			data['data']['logistics_newest_context'] = logistics_newest_context ;
			if(data['data'] && data['data']['send'] && data['data']['send']['pay_amount']){
				//data['data']['send']['pay_amount'] = (data['data']['send']['pay_amount'] * 1).toFixed(2) ;
				pay_amount = data['data']['send']['pay_amount'] ;
				
			}
			if(data['data'] && data['data']['send'] && data['data']['send']['total_price']){
				RP.store.setItem('animalcurl_price',data['data']['send']['total_price']);
			}
			//优惠券列表返回的优惠券信息
			if(coupon){
				console.log(coupon);
				data['data']['coupon']=coupon; 
			}
			// data['data']['send']['testing_status'] = type ;
			//对送检目的进行排序
			if(data['data'] && data['data']['basic'] && data['data']['basic']['options']){
				var basicArray = data['data']['basic']['options'];
				var basicList = [] ;
				for(var i in basicArray){
					if(basicArray[i].option_name=='健康检测'){
						basicList[0] = basicArray[i];
					}
					else if(basicArray[i].option_name=='免疫效果评估'){
						basicList[1] = basicArray[i];
					}
					else if(basicArray[i].option_name=='临床诊断'){
						basicList[2] = basicArray[i];
					}
					else if(basicArray[i].option_name=='垂直评估'){
						basicList[3] = basicArray[i];
					}
					else if(basicArray[i].option_name=='对比试验'){
						basicList[4] = basicArray[i];
					}
					else{
						basicList[5] = basicArray[i];
					}
					
				}
				data['data']['basic']['options'] = basicList ;
				//console.info(basicList);
			}
			//对样品类型和数量进行排序
			if(data['data'] && data['data']['simple_num']){
				var basicArray = data['data']['simple_num'];
				var basicList = [] ;
				for(var i in basicArray){
					if(basicArray[i].name=='血清'){
						basicList[0] = basicArray[i];
					}
					else if(basicArray[i].name=='组织'){
						basicList[1] = basicArray[i];
					}
					else if(basicArray[i].name=='脐带血'){
						basicList[2] = basicArray[i];
					}
					else if(basicArray[i].name=='精液'){
						basicList[3] = basicArray[i];
					}
					else if(basicArray[i].name=='乳汁'){
						basicList[4] = basicArray[i];
					}
					else if(basicArray[i].name=='鸡蛋'){
						basicList[5] = basicArray[i];
					}
					else if(basicArray[i].name=='拭子'){
						basicList[6] = basicArray[i];
					}
					else{
						basicList[7] = basicArray[i];
					}
					
				}
				data['data']['simple_num'] = basicList ;
				//console.info(basicList);
			}

			//对拟捡疾病进行排序
			if(data['data'] && data['data']['simple'] && data['data']['simple']['sample_loimias']){
				var basicArray = data['data']['simple']['sample_loimias'];
				console.info(basicArray);
				curr_case_info = basicArray;
				console.info(curr_case_info);
				// console.info(id);
				var basicList = [] ;
				for(var i in basicArray){
					if(basicArray[i].sample_name=='抗体'){
						basicList[0] = basicArray[i];
					}
					else if(basicArray[i].sample_name=='细菌'){
						basicList[1] = basicArray[i];
					}
					else if(basicArray[i].sample_name=='病毒'){
						basicList[2] = basicArray[i];
					}
					else if(basicArray[i].sample_name=='病原'){
						basicList[3] = basicArray[i];
					}
					else{
						basicList[4] = basicArray[i];
					}
					
				}
				data['data']['simple']['sample_loimias'] = basicList ;
				console.info(basicList);

			}

			//对状态详情判断~
			if(data['data']&& data['data']['time_list']){
				var basicArray = data['data']['time_list'] ;
				var basicList = [] ;
				var hasapplicationtime = false ;
				var hassendtime = false ;
				var hasreceivetime = false ;
				var haspaytime = false ;
				var hasdetectiontime = false ;
				var hasplantime = false ;
				var hasevaluationtime = false ;
				for(var i in basicArray){
					if(basicArray[i].title == '申请时间' && hasapplicationtime == false){
						basicList.push(basicArray[i]);
						hasapplicationtime = true ;
					}
					else if(basicArray[i].title == '发货时间' && hassendtime == false){
						basicList.push(basicArray[i]);
						hassendtime = true ;
					}
					else if(basicArray[i].title == '收货时间' && hasreceivetime == false){
						basicList.push(basicArray[i]);
						hasreceivetime = true ;
					}
					else if(basicArray[i].title == '支付时间' && haspaytime == false){
						basicList.push(basicArray[i]);
						haspaytime = true ;
					}
					else if(basicArray[i].title == '检测完成时间' && hasdetectiontime == false){
						basicList.push(basicArray[i]);
						hasdetectiontime = true ;
					}
					else if(basicArray[i].title == '评价时间' && hasevaluationtime == false){
						basicList.push(basicArray[i]);
						hasevaluationtime = true ;
					}
					else if(basicArray[i].title == '方案完成时间' && hasplantime == false){
						basicList.push(basicArray[i]);
						hasplantime = true ;
					}
				}
				data['data']['time_list'] = basicList ;
			}


			var res = archives_detail_tpl.fetch(data['data']) ;
			$('#wrap1').html(res) ;
			RP.store.setItem('curr_archive_detail',data['data'],'session') ;

			// 采样单
			var res_sample = archives_sample_tpl.fetch(data['data']) ;
			$('#wrap2').html(res_sample) ;

			// 诊断结果
			var res_conclusion = archives_conclusion_tpl.fetch(data['data']) ;
			$('#wrap3').html(res_conclusion) ;

			// 状态信息
			var res_status = archives_status_tpl.fetch(data['data']) ;
			$('#wrap4').html(res_status) ;
			
			

			var send_type = data['data']['send']['send_type'] ;
			//console.log(send_type);
			var delivery_type = data['data']['send']['delivery_type'] ;
			//console.info(delivery_type);
			if(send_type==1 || delivery_type == 2){
				$('#logistics_info').hide();
			}
			var complete_animal_list = 'complete_animal_list' + id;
			var is_show = RP.store.getItem(complete_animal_list);
			if(is_show){
				$('.animal_list_edit').hide();
				RP.store.removeItem(complete_animal_list);
			}

		
		}).fail(function(){
			//renderHtml([]) ;
			errorPageShow($('#wrap1')[0],'system') ;
		}) ;
	}

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			RP.store.removeItem('shop_coupon');
			if(fromModelpage == "pay_success"||fromModelpage == "pay_fail"||fromModelpage == "pay_offline_success"){
				window.location.href="archives_list.php?fromModelpage=pay_result";
			}else{
				window.location.href="archives_list.php?fromModelpage=archives_detail";
				// window.history.go(-1) ;
			}
			
		});

		// 查看状态信息
		$('#wrap1').on('click','.archive_status_list',function(){
			// var code = $(this).attr('data-code') ;
			// window.location.href = "archives_status.php?id=" + id ;
			$('.wrap').hide() ;
			$('#wrap4').show() ;
		}) ;

		// 诊断结果
		$('#wrap1').on('click','.archive_diagnosis_result',function(){
			// var code = $(this).attr('data-code') ;
			// window.location.href = "archive_diagnosis_result.php?id="+id ;
			$('.wrap').hide() ;
			$('#wrap3').show() ;
		}) ;

		// 采样单
		$('#wrap1').on('click','.archive_sample_list',function(){
			// var code = $(this).attr('data-code') ;
			// window.location.href = "archives_sample_info.php?code="+code ;
			$('.wrap').hide() ;
			$('#wrap2').show() ;
		}) ;

		$('#wrap1').on('click','.inspection_place_info',function(e){
			e.stopPropagation() ;
   			e.preventDefault() ;
			$('#animal_check').show() ;
		}) ;
		$('#wrap1').on('click','.mask',function(){
			$('#animal_check').hide() ; 
		}) ;

		// 填写送料信息
		$('#wrap1').on('click','.archive_feed_go',function(){
			var code = $(this).attr('data-code') ;
			window.location.href = "archive_feed_info.php?id="+id ;
		}) ;

		// 完善采样单
		$('#wrap1').on('click','.animal_list_edit',function(e){
			e.stopPropagation() ;
   			e.preventDefault() ;
			var params = {} ;
			params['test_id'] = id;
			var url = global_path + 'index.php/animalcurl/analysis_isImprove' ;
			commonAjax(url,params).then(function(data){
				// console.log(data);
				if(data && data.status && data.status == '2000'){//没有被完善
					// console.log(data);
			// var test_id=data['data']['test_id'] ;
			// var case_info=data['data']['case_info'];sample_name_array
			// var curr_case_info_id = 'curr_case_info'+id
			// console.info(curr_case_info_id);
			// console.info(case_info_array);
			// RP.store.setItem(curr_case_info_id,case_info_array);
			// console.info(RP.store.getItem(curr_case_info_id));
			
			// console.info(data);
			var curr_case_info_id = 'curr_case_info'+id
			RP.store.setItem(curr_case_info_id,curr_case_info);
			console.info(RP.store.getItem(curr_case_info_id));

			if(animal_type==1){
				animal_type = 'birds';
			}else{
				animal_type = 'beasts';
			}
			console.info(animal_type);
			// alert(2);
			window.location.href="../animal_cure/animal_list_edit.php?test_id="+ id +"&type=" + type+"&animal_type="+animal_type;
				}else if(data && data.status && data.status == '6001'){//已被后台完善
//					console.log(data);
					d_alert.setTitle(data.message) ;
					d_alert.ok_fn = function(){
					$('.animal_list_edit').hide();
					}
					d_alert.show() ;
				}else{
					errorPageShow($("#wrap3")[0],'system',2);
				}	
			}).fail(function(){
				errorPageShow($("#wrap3")[0],'system',2);
			}) ;
		}) ;
		$('#wrap1').on('click','.archive_cancel',function(){
			d_confirm.setTitle('确认取消本次检测申请?') ;
			d_confirm.setButton('否','是') ;
			d_confirm.show() ;
			d_confirm.confirm_fn = function(){
				var url = global_path + "index.php/personalcenter/analysis_cancel" ;
				var p = {
					'test_id':id
				} ;
				commonAjax(url,p).then(function(data){
					if(data && data.status && data.status == '2000'){
						window.location.href = window.location.href ;
					}
				}).fail(function(){
					
				}) ;
			}
			
		}) ;

		// 评价
		$('#wrap1').on('click','#archive_evaluation',function(){
			var code = $(this).attr('data-code') ;
			window.location.href = "archive_evaluation.php?id=" + id ;
		}) ;

		// 查看物流信息
		$('#wrap1').on('click','.archive_logistics',function(){
			var code = $(this).attr('data-code') ;
			window.location.href = "archive_logistics.php?id="+id ;
		}) ;

		// 检测反馈
		$('#wrap1').on('click','.archive_feedback',function(){
			// var code = $(this).attr('data-code') ;
			window.location.href = "archive_feedback.php?id="+id ;
		}) ;

		//选择优惠券
		$('#wrap1').on('click','#goto_coupon_list',function(){
			window.location.href = "../shopping_store/coupon_list.php?campaign_kind=T&type=" + type + "&id=" + id ;
		}) ;
		// 去支付
		$('#wrap1').on('click','#go_pay',function(){
			// console.info(11111) ;
			var order_code = $(this).attr('data-order_code') || '' ;
			window.location.href = "../shopping_store/pay_options.php?code=" + order_code + '&fromModelpage=archive_detail&type=' + type + "&id=" + id + "&price=" + pay_amount;
		}) ;


		// 采样单详情区域
		$('#wrap2').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap1').show() ;
		});

		// 诊断详情
		$('#wrap3').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap1').show() ;
		}) ;
		$('#wrap3').on('click','.result_item',function(){
			$(this).toggleClass('zdjg-shang') ;
			$(this).toggleClass('zdjg-xia') ;
			if($(this).hasClass('zdjg-shang')){
				$(this).next('div').slideDown() ;
			}else{
				$(this).next('div').slideUp() ;
			}
		}) ;

		// 状态信息
		$('#wrap4').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap1').show() ;
		}) ;
	})() ;



}) ;