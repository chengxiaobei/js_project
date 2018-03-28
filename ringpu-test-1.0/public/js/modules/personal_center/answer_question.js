(function(){

})() ;



// 产品反馈答题
require(['jquery', 'global','jsmart','dialog'],function($,global,_,_){

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;

	var productcode = getQueryString('productcode') ;
	var producttitle = getQueryString('producttitle') ;
	var feedback_id = getQueryString('feedback_id') ;
	// 是否来自app
	var fromapp = getQueryString('fromapp') ;
	// 1 产品反馈 2 意见反馈
	var type = 1 ; 
	var list_options = [] ;
	var content = "" ;

	var question_list_tpl = new jSmart(document.getElementById('question_list_tpl').innerHTML) ;
	if((window.location.href).indexOf('https')==-1){
		global_path = global_path_old;
	}
	// 页面渲染
	(function(){

		if(fromapp && fromapp =='1'){
			var usercode = getQueryString('usercode') ;
			var user_info = RP.store.getItem('curr_user_info') || {};
			user_info['user_code'] = usercode ;
			RP.store.setItem('curr_user_info',user_info) ;
		}
		var url = global_path + "index.php/personalcenter/getfeedback" ;
		var p = {
			type : type,
			feedback_id : feedback_id ,
			product_code : productcode
		} ;
		commonAjax(url,p).then(function(data){
			// console.info(data) ;
			var render_data = [];
			if(data && data.status && data.status == '2000'){
				render_data = data 
				var res = question_list_tpl.fetch(render_data) ;
				$('#wrap1').html(res) ;
			}
			else{
				var res = question_list_tpl.fetch(render_data) ;
				$('#wrap1').html(res) ;
				errorPageShow($('#wrap1')[0],'nodata');
			}
			
			if(!fromapp){
				// 设置标题
				$('title').html(producttitle) ;
				$('#wrap1 header h2').html(producttitle) ;

				$('#wrap1 header').show() ;
				$('#wrap1 section').css('marginTop','44px') ;
			}
		}).fail(function(){
			var res = question_list_tpl.fetch([]) ;
			$('#wrap1').html(res) ;
			if(!fromapp){
				$('#wrap1 header').show() ;
				$('#wrap1 section').css('marginTop','44px') ;
			}
			errorPageShow($('#wrap1')[0],'system');
		}) ;
	})() ;



	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			// window.location.href = "index.php" ;
			window.history.go(-1) ;
		}) ;

		$('#wrap1').on('click','.question_item>.per-answer-option',function(){
			var multiple = $(this).closest('.question_item').attr('data-multiple') ;
			if(multiple && multiple=="1"){
				$(this).toggleClass('answer-checked') ;
				$(this).toggleClass('answer-check') ;
			}
			else{
				$(this).toggleClass('answer-checked').siblings('.per-answer-option').removeClass('answer-checked') ;
			}
		}) ;

		// 意见提交
		$('#wrap1').on('click','#option_submit',function(){
			if(!answerQuestion_check()){
				return ;
			}
			$('.per-answer-option').each(function(i,v){
				var options_id = $(this).attr('data-options_id') ;
				var tmp = {} ;
				tmp['options_id'] = options_id ;
				if($(this).hasClass('answer-checked')){
					tmp['options_checked'] = "1" ;
				}
				else{
					tmp['options_checked'] = "0" ;
				}
				list_options.push(tmp) ;
			}) ;
			content = $('#other_opinion').val() ;
			// console.info(list_options) ;
			var url = global_path + "index.php/personalcenter/creatFeedback" ;
			var p = {
				product_code : productcode ,
				feedback_id : feedback_id ,
				type : type ,
				content : content ,
				list_options : list_options
			} ;
			commonAjax(url,p).then(function(data){
				// console.info(data) ;
				if(data && data.status && data.status == "2000"){
					// d_alert.setTitle('谢谢您的反馈') ;
 					// d_alert.show() ;
 					$('.tip-info').find('div').html('感谢您的反馈！') ;
 					$('.tip-info').show() ;
 					setTimeout(function(){
 						$('.tip-info').hide() ;
 						window.history.go(-1) ;
 					},1000) ;
				}
			}) ;
		}) ;

		// 表单验证
		$('#wrap1').on('input','#other_opinion',function(){
			var str = getStrByLength(this.value,100) ; 
            $('#other_opinion').val(str) ;
            $(this).closest('div').find('div').html(str.length+'/100'); 
		}) ;

		$('#wrap1').on('focus','#other_opinion',function(){
			setTimeout(function(){
				document.body.scrollTop = Math.max(document.body.scrollHeight,document.body.clientHeight) + 10000;
				document.documentElement.scrollTop = Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight) + 10000;
			},200) ;
		}) ;
	})() ;


	// 信息验证
	function answerQuestion_check(){
		var flag = true ;
		$('.question_item').each(function(i,v){
			var is_required = $(this).attr('data-required') ;
			if(is_required && is_required == '1'){
				// 是否是文本域
				if($(this).find('textarea').size() > 0){
					var other_opinion = $('#other_opinion').val() ;
					if(!other_opinion){
						flag = false ;
					}
				}
				else{
					if($(this).find('.answer-checked').size()<=0){
						flag = false ;
					}
				}
			}
		}) ;
		if(!flag){
			d_alert.setTitle('请完善问卷信息') ;
			d_alert.show() ;
		}
		return flag ;
	}




}) ;
