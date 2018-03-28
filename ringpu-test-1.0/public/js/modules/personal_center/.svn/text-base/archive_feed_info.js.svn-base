(function(){

})() ;


// 个人中心--检测--填写送料信息
require(['jquery', 'global','jsmart','dialog','validator'],function($,global,_,_,validator){

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;

	var send_company_tpl = new jSmart(document.getElementById('send_company_tpl').innerHTML) ;

	// 当前快递公司
	var curr_delivery = {} ;

	var id = getQueryString('id') ;
	var fromModelpage = getQueryString('fromModelpage') ;


	// 页面渲染
	(function(){
		var curr_archive_sendcompanys = RP.store.getItem('curr_archive_sendcompanys') ;
		if(curr_archive_sendcompanys){
			var data = {
				data : curr_archive_sendcompanys
			} ;
			var res = send_company_tpl.fetch(data) ;
			$('#send_company').html(res) ;
		}
		console.info(curr_archive_sendcompanys) ;

	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;

		$('#wrap1').on('click','.choose_feed_type',function(){
			//$('#feed_type_list').show() ;
			$('#feed_personal_type_list').show() ;
			
		}) ;
		/*$('#wrap1').on('click','#feed_type_list li',function(){
			var type = $(this).attr('data-type') ;
			var text = $(this).html() ;
			$('#feed_type').attr('data-type',type) ;
			$('.choose_feed_type').addClass('slxx-decheckedcolor') ;
			$('.choose_feed_type').html(text) ;
			$('#feed_type_list').hide() ;
			$('.feed_personal').hide() ;
			if(type=='person'){
				$('#feed_personal_type .choose_personal_feed_type').html('请选择') ;
				$('#feed_personal_type').show() ;
			}
		}) ;
		$('#wrap1').on('click','.choose_personal_feed_type',function(){
			$('#feed_personal_type_list').show() ;
		}) ;*/
		$('#wrap1').on('click','#feed_personal_type_list li',function(){
			$('#feed_type').attr('data-type','person') ;
			var type = $(this).attr('data-type') ;
			var text = $(this).html() ;
			// $('.choose_personal_feed_type').attr('data-type',type) ;
			$('#feed_personal_type').show() ;
			$('#feed_type').hide();
			$('#feed_personal_type').attr('data-type',type) ;
			$('.choose_personal_feed_type').addClass('slxx-decheckedcolor');
			$('.choose_personal_feed_type').html(text) ;
			$('#feed_personal_type_list').hide() ;
			if(type=="1"){
				$('.feed_personal_kd').show() ;
				$('.feed_personal_cs').hide() ;
			}
			else{
				$('.feed_personal_cs').show() ;
				$('.feed_personal_kd').hide() ;
			}
		}) ;

		// 选择快递公司
		$('#wrap1').on('click','.feed_personal_kd_company',function(){
			// console.info(111111) ;
			$('.wrap').hide() ;
			$('#send_company').show() ;
		}) ;

		$('#send_company').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap1').show() ;
		}) ;

		$('#send_company').on('click','li',function(){
			var delivery_id = $(this).attr('data-delivery_id') ;
			var delivery_name = $(this).attr('data-delivery_name') ;
			// curr_delivery = {
			// 	delivery_id : delivery_id ,
			// 	delivery_name : delivery_name
			// } ;
			$('.feed_personal_kd_company').addClass('slxx-decheckedcolor');
			$('.feed_personal_kd_company').html(delivery_name) ;
			$('.feed_personal_kd_gs').attr('data-delivery_id',delivery_id) ;
			$('.feed_personal_kd_gs').attr('data-delivery_name',delivery_name) ;
			$('.wrap').hide() ;
			$('#wrap1').show() ;
		}) ;


		// 发货
		$('#wrap1').on('click','#send_feed',function(){
			var feed_type = $('#feed_type').attr('data-type') ;
			if(feed_type=="2"){
				var feed_personal_type = $('#feed_personal_type').attr('data-type') ;
			}

			// 送料方式
			var send_type = $('#feed_type').attr('data-type') ;
			// 寄料类型（个人送料时有以下数据）
			var delivery_type = $('#feed_personal_type').attr('data-type') || '';
			// 快递公司
			var delivery_id = $('.feed_personal_kd_gs').attr('data-delivery_id') || '' ;
			// 快递公司名称
			var delivery_name = $('.feed_personal_kd_gs').attr('data-delivery_name') || '' ;
			// 快递单号
			var track_code = $('#feed_personal_kd_dh').val() || '' ;
			// 车牌号
			var feed_personal_cs_cp = $('#feed_personal_cs_cp').val() || '' ;
			// 司机电话
			var feed_personal_cs_dh = $('#feed_personal_cs_dh').val() || '';

			// 送料方式检查
			if(!send_type){
				d_alert.setTitle('请选择送料方式') ;
				d_alert.show() ;
				return ;
			}
			if(send_type == 'person'){
				if(!delivery_type){
					d_alert.setTitle('请选择寄料方式') ;
					d_alert.show() ;
					return ;
				}
				// 快递
				if(delivery_type=='1'){
					if(!delivery_id){
						d_alert.setTitle('请选择快递公司') ;
						d_alert.show() ;
						return ;
					}
					if(!track_code){
						d_alert.setTitle('请填写快递单号') ;
						d_alert.show() ;
						return ;
					}
				}
				else{
					if(!feed_personal_cs_cp){
						d_alert.setTitle('请填写车牌号') ;
						d_alert.show() ;
						return ;
					}
					if(!feed_personal_cs_dh){
						d_alert.setTitle('请填写司机电话') ;
						d_alert.show() ;
						return ;
					}
					if(!validator['check_phone'](feed_personal_cs_dh,"司机电话填写不正确！")){
						return ;
					}
				}
			}

			var url = global_path + 'index.php/personalcenter/analysis_send' ;
			var p = {
				'test_id':id ,
				'send_type':send_type ,  //送检类型（person/company）
				'delivery_type':delivery_type ,       //1快递，2车送
				'delivery_id':delivery_id ,
				'delivery_name':delivery_name ,
				'track_code':track_code ,
				'vehicle_tel':feed_personal_cs_dh,
				'vehicle_code':feed_personal_cs_cp
			} ;

			commonAjax(url,p).then(function(data){
				// console.info(data) ;
				if(data && data.status && data.status == '2000'){
					//window.history.go(-1) ;
					if(fromModelpage && fromModelpage=='animal_cure_result'){
						RP.store.setItem('complete_achive_feed','true');//送料信息已完成的标志位
						window.location.href = "../animal_cure/animal_cure_result.php?test_id="+id;
					}else{
						window.history.go(-1) ;
					}
				}
				
			}) ;
			// d_alert.setTitle('发送成功') ;
			// d_alert.show() ;
		}) ;


		// 输入控制
		$('body').on('input','.inputValidation',function(){
			// console.info(1111) ;
			var minLength = $(this).attr('minLength') ;
			var maxLength = $(this).attr('maxLength') ;
			var pattern = $(this).attr('pattern') ;
			var value = $(this).val() ;
			if(value){
				var tmp = getInStrByLength(value,maxLength) ;
				$(this).val(tmp.ret) ;
				if(pattern){
					if(pattern == 'phonenum'){
						value = tmp.ret.match(/\d/g) ;
						if(value && value.length > 0){
							this.value = value.join('') ;
						}
						else{
							this.value =  '' ;
						}
					}
				}
			}
		}) ;



	})() ;





}) ;