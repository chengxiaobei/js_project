(function(){

})() ;

// 动物诊疗
require(['global','jsmart','jquery','dialog','validator'],function(global,jsmart,$,_,validator){

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	var animalcurl_index_tpl = new jSmart(document.getElementById('animalcurl_index_tpl').innerHTML) ;
	//页面渲染
	(function(){
		// 是否登录检测
		check_login_module() ;
		RP.store.removeItem('treatment_data');
		var phoneNo = RP.store.getItem('curr_user_info')['telephone'];
		var url = global_path + 'index.php/animalcurl/analysis_getTreatment' ;
		var params = {
			// 'phoneNo':'18920795905',
			'phoneNo': phoneNo
			// 'farmName':'河南省漯河经济开发区富硕养殖场'
		};
		$('.wrap').append(getLoadHtml());
		commonAjax(url,params).then(function(data){
			if(data.status == '2000' && data.data){
				if(data.data.imageUrl){
					var picData = animalcurl_index_tpl.fetch(data.data);
					$('#mainPic').html(picData);
				}
				RP.store.setItem('treatment_data',data.data);
				$('.RP_LOADING').remove();
				$("#noUserMask").hide();
			}else if(data.status == "4002"){
				RP.store.removeItem('treatment_data');
				$('.RP_LOADING').remove();
				$("#noUserMask").show();
			}else{
				RP.store.removeItem('treatment_data');
				$('.RP_LOADING').remove();
				$("#noUserMask").show();
			}
		}).fail(function(e){
			$('.RP_LOADING').remove();
			RP.store.removeItem('treatment_data');
			errorPageShow($("#wrap1")[0],'system',2);
		});
	})();
	//事件监听
	(function(){
		$('#wrap1').on('click','.hzz_xinxi',function(e){
    		e.stopPropagation() ;
   			e.preventDefault() ;
    		$('.wrap').hide() ;
    		$('#wrap2').show() ;
    		$('#wrap2 .backButton').attr('id','back_to_wrap1');
    	}) ;
    	 //帮助信息返回按钮
    	$('#wrap2').on('click','#back_to_wrap1',function(e){
    		e.stopPropagation();
    		e.preventDefault();
    		$('.wrap').hide() ;
    		$('#wrap1').show() ;
    	}) ;
    	// 帮助信息行内点击显示及收起
		$('#wrap2').on('click','.sfbz-lineone-xiala',function(){
			$(this).toggleClass('sfbz-lineone-shouqi');
			if($(this).hasClass('sfbz-lineone-shouqi')){
				$(this).nextAll('p').slideDown() ;
			}else{
				$(this).nextAll('p').slideUp() ;
			}
		}) ;
		$('#wrap2').on('click','.animal-charge-trigger',function(){
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
		$('.wrap').on('click','#hzz_ul li a',function(e){
			e.preventDefault();
			e.stopPropagation();
			var treatment_data = RP.store.getItem('treatment_data');
			console.log(treatment_data);
			if(!treatment_data){
				$("#noUserMask").show();
			}else{
				$("#noUserMask").hide();
				if($(this).attr('data-type')=='birds'){
					window.location.href = './animalcurl_apply_birds.php' ;
				}else if($(this).attr('data-type')=='beasts'){		
					window.location.href = './animalcurl_apply_beasts.php' ;					
				}
			}
		});

	})();

		function getLoadHtml(){
	    var ret = '  <!--加载模块-->'+
	              '  <div class="loading-con RP_LOADING">'+
	              '    <table class="loading-tb">'+
	              '      <tbody>'+
	              '        <tr>'+
	              '          <td>'+
	              '            <img src="../../public/images/loading.gif">'+
	              '          </td>'+
	              '        </tr>'+
	              '      </tbody>'+
	              '    </table>'+
	              '  </div>' ;
	    return ret ;
	}

}) ;