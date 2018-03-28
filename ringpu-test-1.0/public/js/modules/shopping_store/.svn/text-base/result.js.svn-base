
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart'],function($,global,_){

    //#变量
	var category_id = "" || getQueryString('code');
	var title = "" || getQueryString('content');
	var curr_user_info = RP.store.getItem('curr_user_info') ;
	var fromModelpage = getQueryString('fromModelpage');
	var shop_goods = RP.store.getItem('shop_goods');
	var store=RP.store.getItem('shop_result_select');//记录上次所选的类别
	$('.search-input').val(title);
	var page_all = 1;
	var page_size = 20;	
	var page_no =  0;
	var sort = "0";
	var  specicalescape=['!','@','#','$','&','*','(',')','=',';','+','\'']
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	//#请求url
	var urllist = global_path + "index.php/shoppingcenter/getProductgooslist" ;
	var urlbasket = global_path + "index.php/shoppingcenter/getShopbasket" ;
	//#初始化
	
	//#页面渲染
	(function(){	

		if(store){
			$('.sc-spzs-switch-ul li').each(function(){
				if($(this).attr('data-code')==store&&store!="pricedown"){
					$(this).addClass('curr-li');
					$(this).siblings().removeClass('curr-li');
				}else if(store=="pricedown"){
					if($(this).attr('data-code')=='priceup'){
						$(this).attr('data-code','pricedown');
						$(this).addClass('curr-li');
						$(this).find('p').html("价格从高到低");
						$(this).siblings().removeClass('curr-li');
					}
				}
				
			})
			if(store == "multiple"){
				sort="0";
			}else if(store == "priceup"){
				sort="1";
			}else if(store == "pricedown"){
				sort="2";
			}else if(store == "salesdown"){
				sort="3";
			}
			
		}else{
			$('.sc-spzs-switch-ul li').each(function(){
				if($(this).attr('data-code')=="multiple"){
					$(this).addClass('curr-li');
					$(this).siblings().removeClass('curr-li');
				}
				
			})
		}
	   articlelist(sort,category_id,title,"click"); 	
	

		 if(curr_user_info){
		     var paramsbasket = {
			    page_size:page_size,
			    page_no:page_no
			 } ;
	
			 commonAjax(urlbasket , paramsbasket).then(function(data){
				 if(data&&data.status=="2000"){   			 		
					$("#goodsnum").html(data.data.page.count)
			 	 }else if(data&&data.status=="4002"){
			 		$("#goodsnum").html(0)
			 	 }else{
			 	  	var error_html = getErrorPage('system',2) ;
					$('.wrap').append(error_html) ;
			 	 } 
				 dealresultcart();
	  	     }).fail(function(){
	  	    	var error_html = getErrorPage('system',2) ;
				$('.wrap').append(error_html) ;
	  	     })
         }else{
        	 if(shop_goods){
	    		   $("#goodsnum").html(shop_goods.length) 
	    	   }else{	    	
		    	   $("#goodsnum").html(0) 
	    	   }
        	 dealresultcart();
         }
	
	})() ;
	function dealresultcart(){
		   if($("#goodsnum").html() == 0){
	    	   $('.gwc-num').hide();
	       }else{
	    	   $('.gwc-num').show();
	       }

	}
	function  dealresult(){
		   var gooditem =$('.sc-xlgj-ul li').length;
		   if(gooditem%3 == 0){
			   $('.sc-xlgj-ul li').each(function(i){
				   if(i+1==gooditem||i+1==gooditem-1||i+1==gooditem-2){
					   $(this).attr('style','border-bottom:0px;')
				   }
			   })
		   }else if(gooditem%3 == 1){
			   $('.sc-xlgj-ul li').each(function(i){
				   if(i+1==gooditem){
					   $(this).attr('style','border-bottom:0px;')
				   }
			   })
		   }else if(gooditem%3 == 2){
			   $('.sc-xlgj-ul li').each(function(i){
				   if(i+1==gooditem||i+1==gooditem-1){
					   $(this).attr('style','border-bottom:0px;')
				   }
			   })
		   }
		   imgLazyLoad();
	}
	function dealcontent(data){
		for(var i in data.data.product_list){			
    	 var taglist=[];
				 if(data.data.product_list[i].tags){
			    	 if(data.data.product_list[i].tags.indexOf(',')!= -1){
				    	 taglist= data.data.product_list[i].tags.split(',');
				    	 data.data.product_list[i].taglist=taglist;
			    	 }
			    	 else{
			    		 data.data.product_list[i].taglist=taglist;
			    		 data.data.product_list[i].taglist[0]= data.data.product_list[i].tags;
			    	 }
				 }					   	 
	        }
	     return data;
	}
	//点击头部和下拉刷新
	function articlelist(sort,category_id,title,type){
		 if(page_no<page_all){
			page_no = page_no + 1;
			var paramslist = {	   
				    sort:sort, 
				    category_id:category_id,
				    title:title,
				    page_no:page_no,
				    page_size:page_size
					
				 } ;
			if(type == "click"){
				loadingShow($('#content')[0]);
			}
		    commonAjax(urllist , paramslist).then(function(datalist){			 	
		    	 if(datalist&&datalist.status == '2000'){
		    		 datalist=dealcontent(datalist);
					 var tpl = new jSmart(tpl_html);
					 var res = tpl.fetch(datalist.data);
					 if(page_no == 1){
						 page_all = datalist.data.page.total_page;
					 }
					 if(type == "click"){
						 $('#content').html(res);
					 }else{
						 $('#content').append(res);
					 }
					 dealresult(); 
				 }else if(datalist&&datalist.status == '4002'){
					 loadingHide($('#content')[0]);
					 $('.sc-product-con').html('<div class="public-none">暂时没有需要的信息~</div>')		  
				 }else{
					loadingHide($('#content')[0]); 
					var error_html = getErrorPage('system',1) ;
					$('.wrap').append(error_html) ;
				 }
		    }).fail(function(data){
		    	loadingHide($('#content')[0]); 
				var error_html = getErrorPage('system',1) ;
				$('.wrap').append(error_html) ;
		    })
		 }
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
		//点击切换商品类型
		$('.wrap').on('click','.sc-spzs-switch-ul li',function(){
			var code=$(this).attr('data-code');
			if($(this).hasClass('curr-li')){
				if(code == "multiple"){
					sort="0";
				}else if(code == "priceup"){
					sort="2";
				    $(this).attr('data-code',"pricedown");
				    $(this).find('p').addClass('tri-up');
				    $(this).find('p').html("价格从高到低");
				}else if(code == "pricedown"){
					sort="1";
					$(this).attr('data-code',"priceup");
					 $(this).find('p').removeClass('tri-up')
					$(this).find('p').html("价格从低到高");
				}else if(code == "salesdown"){
					sort="3";
				}	
			}else{
				if(code == "multiple"){
					sort="0";
				}else if(code == "priceup"){
					sort="1";
				}else if(code == "pricedown"){
					sort="2";
				}else if(code == "salesdown"){
					sort="3";
				}
			}
			$(this).addClass('curr-li');
			$(this).siblings().removeClass('curr-li');
			RP.store.setItem('shop_result_select',$('.curr-li').attr('data-code'));
			//切换时将page_no重置
			page_no = 0;
			articlelist(sort,category_id,title,"click");
		})
		//点击返回
		$('.wrap').on('click','.back-btn',function(){
			RP.store.removeItem("shop_result_select");
			window.history.go(-1) ;
		}) ;
		//跳转到搜索页面
		$('.wrap').on('click','.sc-h-search-con',function(){
			if(fromModelpage =="index"||fromModelpage =="type"){
				window.location.href="search.php";
			}else{
				window.history.go(-1) ;
			}
			
//			if(category_id&&category_id!=""){
//				window.location.href="search.php?code="+category_id;	
//			}else if(title&&title!=""){
//				window.location.href="search.php?content="+title;	
//			}
		}) ;
		//跳转到商品分类
		$('.wrap').on('click','#type',function(){
			//RP.store.removeItem("shop_type_select");
			if(fromModelpage =="index"){
				window.location.href="type.php"
			}else{
				window.history.go(-1) ;	
			}			
		}) ;
		//跳转到商品详情
		$('.wrap').on('click','.sc-xlgj-ul li',function(){
			var codedetail=$(this).attr("data-code");
			//
			window.location.href='detail.php?code='+codedetail;
		}) ;
		//跳转到购物车页面
		$('.wrap').on('click','#cart',function(){
			if(category_id&&category_id!=""){
				window.location.href="cart.php?code="+category_id;	
			}else if(title&&title!=""){
				window.location.href="cart.php?content="+title;	
			}
			
		})
		//分页	    
       $(window).scroll(function(){
        if($(document).scrollTop()>=$(document).height()-$(window).height()){        
        	articlelist(sort,category_id,title,"more");
         }
       })
	})() ;

});