(function(){

})() ;

// 检测评价
require(['jquery', 'global','dialog'],function($,global,_){

	var id = getQueryString('id') || '137' ;

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
		// 商品包装
		$('#wrap1').on('click','#p_packaging .archive_evaluation_item',function(){
			$(this).closest('ul').find('.archive_evaluation_item').removeClass('eval-star-y').addClass('eval-star-g') ;
			$(this).prevAll().andSelf().addClass('eval-star-y').removeClass('eval-star-g') ;
			var index = $(this).index() * 1 + 1 ;
			$('#p_packaging').attr('data-type',index) ;
		}) ;
		// 诊断方案
		$('#wrap1').on('click','#l_speed .archive_evaluation_item',function(){
			$(this).closest('ul').find('.archive_evaluation_item').removeClass('eval-star-y').addClass('eval-star-g') ;
			$(this).prevAll().andSelf().addClass('eval-star-y').removeClass('eval-star-g') ;
			var index = $(this).index() * 1 + 1 ;
			$('#l_speed').attr('data-type',index) ;
		}) ;
		// 检测速度
		$('#wrap1').on('click','#d_speed .archive_evaluation_item',function(){
			$(this).closest('ul').find('.archive_evaluation_item').removeClass('eval-star-y').addClass('eval-star-g') ;
			$(this).prevAll().andSelf().addClass('eval-star-y').removeClass('eval-star-g') ;
			var index = $(this).index() * 1 + 1 ;
			$('#d_speed').attr('data-type',index) ;
		}) ;
		// 检测结果
		$('#wrap1').on('click','#d_result .archive_evaluation_item',function(){
			$(this).closest('ul').find('.archive_evaluation_item').removeClass('eval-star-y').addClass('eval-star-g') ;
			$(this).prevAll().andSelf().addClass('eval-star-y').removeClass('eval-star-g') ;
			var index = $(this).index() * 1 + 1 ;
			$('#d_result').attr('data-type',index) ;
		}) ;

		// 完成
		$('#wrap1').on('click','#complete',function(){
			// 处理速度
			var p_packaging_index = $('#p_packaging').attr('data-type') ; 
			// 诊断方案
			var l_speed_index = $('#l_speed').attr('data-type') ; 
			// 检测速度
			var d_speed_index = $('#d_speed').attr('data-type') ; 
			// 检测结果
			var d_result_index = $('#d_result').attr('data-type') ; 
			// 意见
			var opinion = $('#opinion').val() || '';
			var opinion_length  = getInStrLength(opinion) ;
			if(opinion_length<5 && opinion_length>0){
				d_alert.setTitle('您的建议必须满5个字哦!') ;
				d_alert.show() ;
				return ;
			}

			// if(!opinion){
			// 	d_alert.setTitle('请填写意见') ;
			// 	d_alert.show() ;
			// 	return ;
			// }

			var url = global_path +  "index.php/personalcenter/analysis_vote" ;
			var p = {
				testing_id : id ,
				response_votes : 5 ,
				testing_votes : 5 ,
				speed_votes : d_speed_index ,
				conclude_votes : d_result_index ,
				content : opinion
			} ;
			console.info(p) ;
			commonAjax(url, p).then(function(data){
				console.info(data) ;
				if(data && data.status && data.status == '2000'){
					d_alert.setTitle('谢谢您的评价!') ;
					d_alert.show() ;
					d_alert.ok_fn=function(){
						window.history.go(-1) ;
					}
				}
				else{
					d_alert.setTitle('评价失败') ;
					d_alert.show() ;
					//window.history.go(-1) ;
				}
			}).fail(function(){
				d_alert.setTitle('评价失败') ;
				d_alert.show() ;
			}) ;
		}) ;

		$('#wrap1').on('input','textarea[id=opinion]',function(){
            // var str = getInStrByLength(this.value,80) ; 
            var ret = getInStrByLength(this.value,200) ; 
            $('#opinion').val(ret.ret) ;
            $(this).closest('div').find('div').html(ret.length+'/200'); 
		}) ;

	})() ;






}) ;