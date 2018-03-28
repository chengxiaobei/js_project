(function(){

})() ;

require(['jquery', 'global', 'jsmart'],function($,global,_){
	
    //#变量
    var goodslist;
    var sumprice;
	var list=[];
	var good={};
	var page_size = 10;	
	var page_no = 0;
	var page_all = 1;
	var campaign_kind = getQueryString('campaign_kind');

	//诊疗档案
	var type = getQueryString('type');
	var id = getQueryString('id');
	//#模板
	var tpl_html = $('#coupon_list_tpl').html();
	//#请求url
	var url = global_path + "index.php/shoppingcenter/getCouponslist" ;
	
	//#初始化
	
	//#页面渲染
	(function(){
		//处理成接口需要的字段
		if(campaign_kind == 'P'){
			goodslist = RP.store.getItem('shop_goodslist');
			console.log(goodslist);
			sumprice = RP.store.getItem('shop_price');
			for(var i=0; i<goodslist.length;i++){
				good.product_code=goodslist[i].productcode;
				good.product_count=goodslist[i].products;
				good.product_price=goodslist[i].price;
				list.push(good);		
			}		
		}else{
			sumprice = RP.store.getItem('animalcurl_price');
		}
		landmore();

	})() ;
	function landmore(){
		 if(page_no<page_all){
		     page_no = page_no + 1;
		     var param = {
		    	"list":list,	 
				"page_no":page_no,
				"page_size":page_size,
				"product_total_price":sumprice,
				"campaign_kind":campaign_kind
			 } ;
		     if(page_no == 1){
		    	 loadingShow($('#couponlist')[0]);  
		     }		     
			 commonAjax(url,param).then(function(data){
				 if(data&&data.status=="2000"){
					 var tpl = new jSmart(tpl_html);
				     var res = tpl.fetch(data.data);
					 if(page_no == 1){
						 page_all = data.data.page.total_page;
						 $('#couponlist').html(res); 
					 }else{
						 $('#couponlist').append(res);
					 }
			 	 }else if(data&&data.status=="4002"){
			 		 loadingHide($('#couponlist')[0]); 
			 		 $('.main-section').append('<div class="public-none">暂时没有需要的信息~</div>')	
			 	 }else{
			 		loadingHide($('#couponlist')[0]);  
			 		var error_html = getErrorPage('system',1) ;
					$('.wrap').append(error_html) ;
			 	 } 
			 }).fail(function(data){
				    loadingHide($('#couponlist')[0]); 
				    var error_html = getErrorPage('system',1) ;
					$('.wrap').append(error_html) ;
			 });
		 }else{
			console.log('分页结束'); 
		 }
	}




	// 业务逻辑
	(function(){
		$('.wrap').on('click','.coupon-list-back',function(){
			if(campaign_kind == 'P'){
				window.location.href="order.php";			
			}else{
				window.history.go(-1) ;
			}
		}) ;
		$('.wrap').on('click','.yhq-redbox',function(){
			var coupon={}
			coupon.code=$(this).attr('data-code');
			coupon.name=$(this).attr('data-name');
			RP.store.setItem('shop_coupon',coupon);
			if(campaign_kind == 'P'){
				window.location.href="order.php";
			}else{
				window.location.href="../personal_center/archives_detail.php?type=" + type + "&id=" + id;
			}
		}) ;
		$('.wrap').on('click','.yhq-userule',function(){
			$('.yhq-rule-bg').show();
			$('.yhq-userule').hide();
			$('#couponlist').hide();
			$('.back-btn').removeClass('coupon-list-back');
			$('.back-btn').addClass('coupon-rule-back');
			$('.public-none').hide();
			$('h2').html('使用规则');
			document.title="使用规则";
		})
		$('.wrap').on('click','.coupon-rule-back',function(){
			$('.yhq-rule-bg').hide();
			$('.yhq-userule').show();
			$('#couponlist').show();
			$('.public-none').show();
			$('.back-btn').addClass('coupon-list-back');
			$('.back-btn').removeClass('coupon-rule-back');
			$('h2').html('优惠券');
			document.title="优惠券";
		})
		//分页	    
       $(window).scroll(function(){
        if($(document).scrollTop()>=$(document).height()-$(window).height()){        
        	landmore();
         }
       })
		
	})() ;
}) ;