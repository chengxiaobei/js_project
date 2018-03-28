(function(){

})() ;

require(['global','jsmart','jquery','dialog'],function(global,jsmart,$,_){

	var test_id = getQueryString('test_id') ;
	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	//var fromModelpage = getQueryString('fromModelpage') ;
	var complete_achive_feed;
	var complete_animal_list;
	// console.info(fromModelpage);
	// 页面渲染
	(function(){
		complete_achive_feed = RP.store.getItem('complete_achive_feed');//送料信息标志位
		complete_animal_list = RP.store.getItem('complete_animal_list');//完善采集单标志位
		console.info(complete_achive_feed);
		console.info(complete_animal_list);
		if(!complete_achive_feed){//已完成
			$('.dw-shenqing-zhixian').show();
			$('.dw-shenqing-tishi').show() ;
			$('#go_to_archive_feed_info').show() ;
		}
		if(!complete_animal_list){//已完成
			$('#go_to_animal_list_edit').show();
		}
		// if(fromModelpage && fromModelpage == 'animal_cure_result'){
		// 	$('.dw-shenqing-zhixian').hide();
		// 	$('.dw-shenqing-tishi').hide() ;
		// 	$('#go_to_archive_feed_info').hide() ;
		// }
		// if(fromModelpage && fromModelpage == 'animal_index_edit'){
		// 	//$('#go_to_animal_list_edit').show() ;
		// 	$('.dw-shenqing-zhixian').show();
		// 	$('.dw-shenqing-tishi').show() ;
		// 	$('#go_to_archive_feed_info').show() ;
		// }
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.back-btn',function(e){
			e.stopPropagation() ;
   			e.preventDefault() ;
//			window.history.go(-1) ;
			window.location.href = "index.php" ;
		}) ;
		// 我的检测档案
		$('#wrap1').on('click','#go_to_archive_list',function(e){
			e.stopPropagation() ;
   			e.preventDefault() ;
			// console.info("#go_to_archive_list");
			window.location.href = "../personal_center/archives_list.php?test_id="+test_id ;
		});
		// 填写送料信息
		$('#wrap1').on('click','#go_to_archive_feed_info',function(e){
			e.stopPropagation() ;
   			e.preventDefault() ;
   			// console.info('#go_to_archive_feed_info');
		window.location.href = "../personal_center/archive_feed_info.php?id="+test_id + "&fromModelpage=animal_cure_result" ;
		}) ;
		// 完善信息按钮
		$('#wrap1').on('click','#go_to_animal_list_edit',function(e){
			e.stopPropagation() ;
   			e.preventDefault() ;
			var params = {} ;
			params['test_id'] = test_id;
			var url = global_path + 'index.php/animalcurl/analysis_isImprove' ;
			commonAjax(url,params).then(function(data){
				console.log(data);
				if(data && data.status && data.status == '2000'){//没有被完善
//					console.log(data);
					window.location.href = "animal_list_edit.php?test_id="+test_id ;
				}else if(data && data.status && data.status == '6001'){//已被后台完善
//					console.log(data);
					d_alert.setTitle(data.message) ;
					d_alert.ok_fn = function(){
					$('#go_to_animal_list_edit').hide();
					}
					d_alert.show() ;
				}else{
					errorPageShow($("#wrap3")[0],'system',2);
				}	
			}).fail(function(){
				errorPageShow($("#wrap3")[0],'system',2);
			}) ;
		});
		//帮助信息
		// $('#wrap1').on('click','.help-btn',function(e){
		// 	e.stopPropagation() ;
  //  			e.preventDefault() ;
  //  			$('.wrap').hide();
  //  			$('#wrap2').show();
		// });
		$('#wrap2').on('click','.backButton',function(e){
    		e.stopPropagation();
    		e.preventDefault();
    		$('.wrap').hide() ;
    		$('#wrap1').show() ;
    	});
    	$('#wrap2').on('click','.animal-charge-trigger',function(){
    		$(this).toggleClass('animal-charge-down');
    		if($(this).hasClass('animal-charge-down')){
    			$(this).closest('.animal-charge-item-title').next('div').slideUp() ;
				$(this).html('展开') ;
    		}else{
    			$(this).closest('.animal-charge-item-title').next('div').slideDown() ;
				$(this).html('收回') ;
    		}
    	})

    	//

	})() ;
}) ;