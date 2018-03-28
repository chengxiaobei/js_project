
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,dialog){
	
    //#变量
	var curr_user_info = RP.store.getItem('curr_user_info') ; 
	var shop_goods = RP.store.getItem('shop_goods');
	var page_size = 10;	//获取商品个数写死
	var page_no = 1;//获取商品个数写死
	var shopalert = new Dialog({type:'alert'}) ;
	var  specicalescape=['!','@','#','$','&','*','(',')','=',';','+','\'']
	var validator = {
		tip2:"确认删除所选中的商品？",
		tip3:"库存不足",
		tip4:"数据保存失败"
	};
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	//#请求url
	var url = global_path + "index.php/shoppingcenter/getIndex" ;
	var urlbasket = global_path + "index.php/shoppingcenter/getShopbasket" ;
	var urladdbasket = global_path + "index.php/shoppingcenter/addShopbasket" ;
	//#初始化
	
	//#页面渲染
	(function(){	
		jsmartdealurl();
	   //初始化清掉页面的缓存  
		RP.store.removeItem("shop_type_select");
		//由于使用微信关闭按钮导致的缓存无法清除
		RP.store.removeItem('shop_goodslist');
		RP.store.removeItem('shop_receive');
		RP.store.removeItem('shop_coupon');
		RP.store.removeItem('shop_message');
		RP.store.removeItem('shop_bill');
	   //加入离线商品
 	   if(shop_goods&&curr_user_info){
 		   var product_list=[];
 		   for(var i=0;i<shop_goods.length;i++){
 			   product_list.push(shop_goods[i]); 
 		   }
 		   console.log(product_list);
	  	         var params = {
	  	  		    product_list:product_list
	  	  		 } ;
             console.log(product_list)
	  	  		 commonAjax(urladdbasket , params).then(function(data){
	  	  			 if(data&&data.status=="2000"){
	  	  			    console.log('同步成功');
	  	  			    RP.store.removeItem('shop_goods');
	  	  		 	 }else if(data&&data.status=="4036"){
//		  	  		 	shopalert.setTitle(validator.tip3);
//	  		    		shopalert.show();
	  	  		 		 console.log('同步失败');
	  	  		 	     RP.store.removeItem('shop_goods');
	  	  		 	 }else if(data&&data.status=="4006"){
//			  	  		 	shopalert.setTitle(validator.tip4);
//		  		    		shopalert.show();
	  	  		 	     console.log('同步失败');
	  	  		 	     RP.store.removeItem('shop_goods');
		  	  		 }else{
		  	  			 console.log('同步失败');
	  	  		 	     RP.store.removeItem('shop_goods');
//	 	  	    		var error_html = getErrorPage('system',2) ;
//	 					$('.wrap').append(error_html) ; 
	  	  		 	 }
	  	    	 }).fail(function(){ 
//	  	    		var error_html = getErrorPage('system',2) ;
//					$('.wrap').append(error_html) ; 
	  	    	 })
 	   }  
		 var params = {
		    position:'_V_PRODUCT_NAVI'
		 } ;
		 loadingShow($('.wrap')[0]);
		 commonAjax(url , params).then(function(data){
			 if(data&&data.status=="2000"){   			 		
				 var tpl = new jSmart(tpl_html);
				 data=dealcontent(data)
				 var res = tpl.fetch(data);
				 $('.wrap').html(res);
			       if(curr_user_info){
		             var paramsbasket = {
					    page_no:page_no,
					    page_size:page_size
					 } ;
			    	 commonAjax(urlbasket , paramsbasket).then(function(data){
						 if(data&&data.status=="2000"){   			 		
							$("#goodsnum").html(data.data.page.count)
							dealresult();
					 	 }else if(data&&data.status=="4002"){
					 		$("#goodsnum").html(0)
					 		dealresult();
					 	 }else{
					 		var error_html = getErrorPage('system',2) ;
							$('.wrap').append(error_html) ;
					 	 } 			                
			  	     }).fail(function(){
					  	   	var error_html = getErrorPage('system',2) ;
							$('.wrap').append(error_html) ;
					}) ;
			       }else{
			    	   if(shop_goods){
			    		   $("#goodsnum").html(shop_goods.length) 
			    	   }else{
				    	   $("#goodsnum").html(0); 
			    	   }
			    	   dealresult();
			       }
			     
			     
		 	 }else if(data.status=="4002"){
				 loadingHide($('.wrap')[0]) 
		 		 var tpl = new jSmart(tpl_html);
				 var res = tpl.fetch(data);
				 $('.wrap').html(res); 
				 $('.main-section').append('<div class="public-none">暂时没有需要的信息~</div>')	
		 	 }
			 else{
		 		loadingHide($('.wrap')[0]); 
		 	 	var error_html = getErrorPage('system',1) ;
				$('.wrap').append(error_html) ;
		 	 } 			                
  	     }).fail(function(){
  	    	loadingHide($('.wrap')[0]); 
  	    	var error_html = getErrorPage('system',1) ;
			$('.wrap').append(error_html);
  	     })
  	    

	})() ;
	function dealresult(){
	   if($("#goodsnum").html() == 0){
    	   $('.gwc-num').hide();
       }else{
    	   $('.gwc-num').show();
       }
	   //处理页面的底线
	   $('.sc-xlgj-ul').each(function(){
		   var gooditem =$(this).find('li').length;
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
	   })

	   $('.sc-rmfl-ul-4').each(function(){
		   var typeitem = $(this).find('li').length;
		   if(typeitem%4 == 0){
			   $('.sc-rmfl-ul-4 li').each(function(i){
				   if(i+1==typeitem||i+1==typeitem-1||i+1==typeitem-2||i+1==typeitem-3){
					   $(this).attr('style','border-bottom:0px;')
				   }
			   })
		   }else if(typeitem%4 == 1){
			   $('.sc-rmfl-ul-4 li').each(function(i){
				   if(i+1==typeitem){
					   $(this).attr('style','border-bottom:0px;')
				   }
			   })
		   }else if(typeitem%4 == 2){
			   $('.sc-rmfl-ul-4 li').each(function(i){
				   if(i+1==typeitem||i+1==typeitem-1){
					   $(this).attr('style','border-bottom:0px;')
				   }
			   })
		   }else if(typeitem%4 == 3){
			   $('.sc-rmfl-ul-4 li').each(function(i){
				   if(i+1==typeitem||i+1==typeitem-1||i+1==typeitem-2){
					   $(this).attr('style','border-bottom:0px;')
				   }
			   })
		   }
	   })
	   
	   imgLazyLoad();
	}
    // 图片懒加载
    function imgLazyLoad(){
  	  $('.defaultimg').each(function(i){
  		 var $self = $(this) ;
  		 var original = $self.attr('data-original') ;
	  		 $('<img/>').bind('load', function () {
	  			 for(var i=0;i<specicalescape.length;i++){
	  				 if(original.indexOf(specicalescape[i])!=-1){
	 	  				original=original.replace(specicalescape[i],escape(specicalescape[i]));
	 	  			 }
	  			 }
	  		    console.log(original)
	  			$self.css("background-image", 'url('+original+')');
	         }).attr('src', original);	 
  	  }) ;
  	  $('.pro-img-div img,.sc-rmfl-ul-2 img,.sc-rmfl-ul-4 img').each(function(){
  		 var $self = $(this) ;
  		 var original = $self.attr('data-original') ;
  	  		 $('<img/>').bind('load', function () {
	  	  		 for(var i=0;i<specicalescape.length;i++){
	  				 if(original.indexOf(specicalescape[i])!=-1){
	 	  				original=original.replace(specicalescape[i],escape(specicalescape[i]));
	 	  			 }
	  			 }
  	  			$self.attr('src',original);
  	         }).attr('src', original);  
  	  });
   }
	function dealcontent(data){
		for(var i in data.data){
			for(var k in data.data[i].items){
				 console.log(data.data[i].items[k])
		    	 var taglist=[];
				 if(data.data[i].items[k].tags){
			    	 if(data.data[i].items[k].tags.indexOf(',')!= -1){
				    	 taglist= data.data[i].items[k].tags.split(',');
				    	 data.data[i].items[k].taglist=taglist;
			    	 }
			    	 else{
			    		 data.data[i].items[k].taglist=taglist;
			    		 data.data[i].items[k].taglist[0]= data.data[i].items[k].tags;
			    	 }
				 }
				 if(data.data[i].items[k].brief){
					 if(data.data[i].items[k].brief.length>50){
						 data.data[i].items[k].brief=data.data[i].items[k].brief.substring(0,50)+"……"; 
					 }
				 }
			}
	    	 
        }
	     return data;
	}
	function jsmartdealurl(){
		jSmart.prototype.registerPlugin("modifier","decodeURI",function(url){
			
			return decodeURI(url) ;
		});
        jSmart.prototype.registerPlugin("modifier","encodeURI",function(url){
			
			return encodeURI(url) ;
		});
	}
	// 业务逻辑
	(function(){
		//点击跳转到下单
		$('.wrap').on('click','#next',function(){
			window.location.href='order.php';
		}) ;
		//跳转到商品分类
		$('.wrap').on('click','#type',function(){
			window.location.href='type.php?fromModelpage=index';
		}) ;
		//跳转到搜索页面
		$('.wrap').on('click','.sc-h-search-con',function(){
			window.location.href='search.php';
		}) ;
		//跳转到详情页面
		$('.wrap').on('click','.sc-xlgj-ul li,.sc-cdj-ul li',function(){
			var codedetail=$(this).attr("data-code")
			window.location.href="detail.php?code="+codedetail;
		})
		//跳转到购物车页面
		$('.wrap').on('click','#cart',function(){
			window.location.href="cart.php";
		})
		//跳转结果页面
		$('.wrap').on('click','.sc-rmfl-ul-2 li,.sc-rmfl-ul-4 li',function(){
			var code=$(this).attr('data-code');
			window.location.href="result.php?fromModelpage=index&&code="+code;
		})

		
	})() ;

});