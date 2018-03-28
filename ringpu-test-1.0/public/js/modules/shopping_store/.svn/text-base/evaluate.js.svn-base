
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','swiper'],function($,global,_,swiper){

    //#变量
	var product_code = getQueryString('code');
	var evaluate="0";
	var product_comment_code = "";
	var page_size = 30;
	var landmore = 'yes';
	var  specicalescape=['!','@','#','$','&','*','(',')','=',';','+','\'']
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	var tpl_html_item = $('#jsmart_tpl_item').html();
	var tpl_html_item_more = $('#jsmart_tpl_item_more').html();
	//#请求url
	var url = global_path + "index.php/shoppingcenter/evaluate" ;
    var mySwiper = new Swiper ('.swiper-container',{
        pagination:".swiper-pagination",
        paginationClickable:true,
        effect:'slide'
        }) ;
	//#初始化
	//#页面渲染
	(function(){	
		if(RP.store.getItem('shop_evaluate_scrolltop')){
			RP.store.removeItem('shop_evaluate_scrolltop')
		}
		// 是否登录检测
		//check_login_module() ;
        evaluatelist(product_code,evaluate,"click","0"); 

	})() ;

	//点击头部和下拉刷新
	function evaluatelist(product_code,product_votes_query,clicktype,firstcome){
		if(clicktype == "click"){
	        var paramslist = {
		    product_code:product_code,
		    product_votes_query:product_votes_query,
		    page_size:page_size
		    } ;
		}else{
	        var paramslist = {
		    product_code:product_code,
		    product_votes_query:product_votes_query,
		    page_size:page_size,
		    product_comment_code:product_comment_code,				 
		    up_or_down: "up"
		    } ;
		}
		if(firstcome =="0"){
			loadingShow($('#maincontent')[0]) 
		}else{
			if(clicktype =="click"){
				loadingShow($('#eva_list')[0]) 
			}
			
		}
		
	    commonAjax(url , paramslist).then(function(data){
	    	 

	    	 if(data&&data.status == '2000'){				
		    		 var tpl = new jSmart(tpl_html);
					 var tpl_item = new jSmart(tpl_html_item);
					 var tpl_item_more=new jSmart(tpl_html_item_more);
					 var res = tpl.fetch(data.data);
					 var res_item = tpl_item.fetch(data.data);
					 var res_item_more = tpl_item_more.fetch(data.data);
					 if(firstcome == "0"){
						 $('#maincontent').html(res);
						 $('#eva_list').html(res_item);
					 }else{
						 if(clicktype == "click"){
							 $('#eva_list').html(res_item);
						 }else{
							 if(data.data.page_data.length>0){
							   $('.sc-pj-list-ul').append(res_item_more);							   
							 }else{
								 landmore = 'no';
							 }
						 }
						
				     }
					 if(data.data.page_data.length>0){
						 var last_comment=data.data.page_data.length-1; 
						 product_comment_code = data.data.page_data[last_comment].comment_code; 
					 }					
					 imgLazyLoad();
			 }else if(data.status == "4002"){
				 if(firstcome == "0"){
					 var tpl = new jSmart(tpl_html);
					 data.data={};//后台返回数据为空处理
					 data.data.all_count=0;
					 data.data.perfect_count=0;
					 data.data.ok_count=0;
					 data.data.negative_count=0;
					 var res = tpl.fetch(data.data);
					 $('#maincontent').html(res);
					 //loadingHide($('#maincontent')[0]) 
					 $('#eva_list').html(' <div class="public-none">暂时没有需要的信息~</div>')
				 }else{
					 if(clicktype == "click"){
						 loadingHide($('#eva_list')[0]) 	 
					     $('#eva_list').html(' <div class="public-none">暂时没有需要的信息~</div>')	 
					 }
				 }		
			 }else{
				 if(firstcome =="0"){
		    		 loadingHide($('#maincontent')[0]) 
				 }else{
					if(clicktype =="click"){
						loadingHide($('#eva_list')[0]) 
					}					
				 } 	
				 var error_html = getErrorPage('system',1) ;
				 $('.wrap').append(error_html) ;
			 }
	    }).fail(function(){
	    	 if(firstcome =="0"){
	    		 loadingHide($('#maincontent')[0]) 
			 }else{
				if(clicktype =="click"){
					loadingHide($('#eva_list')[0]) 
				}
				
			 }
	    	 var error_html = getErrorPage('system',1) ;
			 $('.wrap').append(error_html) ;
	    });
	}
    // 图片懒加载
    function imgLazyLoad(){
  	  $('.defaultimg').each(function(){
   		 var $self = $(this) ;
  		 var original = $self.attr('data-original') ;
  		 $('<img/>').bind('load', function () {
  			for(var i=0;i<specicalescape.length;i++){
 				 if(original.indexOf(specicalescape[i])!=-1){
	  				original=original.replace(specicalescape[i],escape(specicalescape[i]));
	  			 }
 			 }
  			$self.css("background-image", 'url('+original+')');
         }).attr('src', original);
  	  }) ;

   }

	// 业务逻辑
	(function(){
		$('.wrap').on('click','.back-btn',function(){
			window.history.go(-1) ;
		}) ;
		//顶部条切换
		$('.wrap').on('click','.sc-pj-switch-ul li',function(){
			$(this).addClass('curr-li');
			$(this).siblings().removeClass('curr-li');
			var type=$(this).attr("data-code");
			if(type == "all"){
				evaluate = "0";
			}else if(type == "prefect"){
				evaluate = "5";
			}else if(type == "normal"){
				evaluate = "3";
			}else if(type == "bad"){
				evaluate = "1";
			}
			landmore = 'yes';
			evaluatelist(product_code,evaluate,"click","1");  

		}) ;


		$('.wrap').on('click','.img-clip-div',function(e){
			  e.stopPropagation() ;
			  var scrollTop=$(document).scrollTop();
			  RP.store.setItem('shop_evaluate_scrolltop',scrollTop);
			  $('html,body').css({'overflow':'hidden'});
		
	          var index = $(this).attr('data-index') ;
	          var imgs = $(this).parents('li').attr('data-multiple_imgs') ;
	          var imgs_html = getImageList(JSON.parse(imgs)) ;
	          $('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
	          $('#rp_preview_wrap').show() ;
	          $('#maincontent').hide();
	          mySwiper.init() ;
	          mySwiper._slideTo(index,0) ;
//	      	  $('.ylpic-mainlb-div img').each(function(){
//	       		 var $self = $(this) ;
//	       		 var original = $self.attr('src') ;
//	       		// $self.attr('src','../../public/images/default-head.png') ;
//	       		 $('<img/>').bind('load', function () {
//	        			$self.attr('src',original);
//	               }).attr('src', original);
//	       	  })
		    
		})
		$('.wrap').on('click','.swiper-slide',function(e){
			e.stopPropagation();
			$('#rp_preview_wrap').hide();
			$('#maincontent').show();
			$('html,body').css({'overflow':'auto'});
			$(document).scrollTop(RP.store.getItem('shop_evaluate_scrolltop'));
			//$('body,html').removeClass('ovfHiden');
		})
        $(window).scroll(function(){
            if($(document).scrollTop()>=$(document).height()-$(window).height()&&landmore == 'yes'){        
            	evaluatelist(product_code,evaluate,"more","1"); 
             }
         })
   
		
	})() ;

});