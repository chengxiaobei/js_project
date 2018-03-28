
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','swiper','dialog','sTopMemory'],function($,global,_,swiper,dialog,sTopMemory){

    //#变量
	var  specicalescape=['!','@','#','$','&','*','(',')','=',';','+','\'']
	var product_code = getQueryString('code');
	var fromModelpage = getQueryString('fromModelpage')
	var curr_user_info = RP.store.getItem('curr_user_info') ;
	var shop_goods = RP.store.getItem('shop_goods');
	var RP_scrollTopMemorys = RP.store.getItem('RP_scrollTopMemorys') ;
	var max = 999;
	var top;//距页顶偏移量 
	var mustchoose = 0;
	var middle;
	var money_rule_list=[];
	var page_size = 10;	//获取商品个数写死
	var page_no = 1;//获取商品个数写死
	var finnal = "";
	var finnalname = "";
	var finnalprice = "";
	var goods = [];
	var good = {};
	var goodname="";
	var goodmaxminprice="";
	var goodrepertory="";
	var goodpicture="";
	var shopalert = new Dialog({type:'alert'}) ;
	var validator = {
		tip1:"请选择规格",	
		tip3:"库存不足",
		tip4:"数据保存失败"
	};
	 var mySwiper = new Swiper ('.container-comment',{
	        pagination:".swiper-pagination",
	        paginationClickable:true,
	        effect:'slide'
	        }) ;
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	//#请求url
	var url = global_path + "index.php/shoppingcenter/detail" ;
	var urlbasket = global_path + "index.php/shoppingcenter/getShopbasket" ;
	var urladdbasket = global_path + "index.php/shoppingcenter/addShopbasket" ;
	//#初始化
	
	//#页面渲染
	(function(){	
//		 if(RP.store.getItem('shop_detail_scrolltop')){
//			RP.store.removeItem('shop_detail_scrolltop')
//		 }
		 var params = {
		    product_code:product_code
		 } ;
		 if(RP_scrollTopMemorys){
			 loadingShow($('#maincontent')[0])  
		 }else{
			 loadingShow($('#maincontent')[0])
		 }
		 commonAjax(url , params).then(function(data){
			 if(data&&data.status=="2000"){   			 		
				 var tpl = new jSmart(tpl_html);
				 var res = tpl.fetch(data.data);				
				 $('#maincontent').html(res);
				 dealcontent(data.data);
//				 top = $("#top").offset().top;//距页顶偏移量 
//				 middle = $("#middle").offset().top;
				 top =  document.getElementById("top").getBoundingClientRect().top;//距页顶偏移量

				  if(curr_user_info){
			          getbasket();
				  }else{
					   if(shop_goods){
			    		   $("#goodsnum").html(shop_goods.length) 
			    	   }else{		    	
				    	   $("#goodsnum").html(0) 
			    	   }
					   dealresult();
				  }
				  
		 	 }else if(data&&data.status=="4002"){
		 		 loadingHide($('#maincontent')[0]) 
		 		 var tpl = new jSmart(tpl_html);
				 var res = tpl.fetch({});				
				 $('#maincontent').html(res);
				 $('.main-section').hide();
		 		 $('header').append('<div class="public-none">该商品已下架~</div>')	 
		 	 }else{
		 		 loadingHide($('#maincontent')[0])  
		 		 var error_html = getErrorPage('system',1) ;
				 $('.wrap').append(error_html) ;
		 	 }  
  	     }).fail(function(){
  	    	    loadingHide($('#maincontent')[0])  
		  	   	var error_html = getErrorPage('system',1) ;
				$('.wrap').append(error_html) ;
		}) ;
     

	})() ;
	function getbasket(){
         var paramsbasket = {
		    page_no:page_no,
		    page_size:page_size
		 } ;

		 commonAjax(urlbasket , paramsbasket).then(function(data){
			 if(data&&data.status=="2000"){
				$("#goodsnum").html(data.data.page.count);
		 	 }else{
		 		$("#goodsnum").html(0);
		 	 }
			 dealresult();
  	     }).fail(function(){
		  	   	var error_html = getErrorPage('system',2) ;
				$('.wrap').append(error_html) ;
		}) ;
	}
    function dealresult(){
   	    if($("#goodsnum").html() == 0){
     	   $('.gwc-num').hide();
        }else{
     	   $('.gwc-num').show();
        }
   	    //获取图片的宽
   	   console.log($('.lb-img-ul li').length)
   	   $('.lb-img-ul li').each(function(){
   		   $(this).css('height',$(this).width());
   	   })
   	    //处理图片
//   	    $('.content-div').find('img').each(function(){
//   	    	$(this).css('width',"100%");
//   	    })
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
	     var swiper = new Swiper('.container-good', {
	        pagination: '.pagination',
	        paginationClickable: true
	     });
	     $('.spec-ul li').each(function(){
	    	 var isshow = false;
	    	 console.log(money_rule_list)
	    	 var allproperties=[];
	    	 for(var i=0;i<money_rule_list.length;i++){
	    		 var properties=money_rule_list[i].properties;
	    		 console.log(properties)
	    		 properties=properties.substring(0,properties.length - 1);
	    		 console.log(properties)
	    		 var propertie= properties.split(';')
	    		 console.log(propertie);
	    		 for(var k=0;k<propertie.length;k++){
	    			 allproperties.push(propertie[k]);
		    	 }
	    		 
	    	 }
	    	 console.log(allproperties)
	    	   for(var k=0;k<allproperties.length;k++){
	    		 if($(this).attr('data-code')== allproperties[k]){
	    			 isshow = true;
	    		 }
	    	    }
	    	 if(isshow == false){
	    		 $(this).hide(); 
	    	 }
	     })
	    

   }
    function dealcontent(data){
    	//存储规则
    	if(data.property_money_list&&data.property_money_list.length>0){
    		for(var i=0;i<data.property_money_list.length;i++){
        		money_rule_list.push(data.property_money_list[i]);
        	}
    	    goodmaxminprice=data.product_info.sale_money_min_max_entity.min_sale_money+'元<span style="color:#999999">~</span>'+data.product_info.sale_money_min_max_entity.max_sale_money+"元";
    		goodrepertory=data.product_info.quantity;
    	}
    	//获取商品信息
    	 if(data.property_list){
			 mustchoose = data.property_list.length; 
		 }else{
			 mustchoose = 0;
			 finnalprice = data.product_info.price;
		 }
    	 goodname=data.product_info.title;
    	 if(data.product_info.picture_list.length>0){
    	   goodpicture = data.product_info.picture_list[0].common_pic_url;
    	 }
    }

    function addbasket(product_list){
    	console.log(product_list)
	     var params = {
		    product_list:product_list
		 } ;

		 commonAjax(urladdbasket , params).then(function(data){
			 if(data&&data.status=="2000"){
				 goods = [];//重置加入购物车的商品
				 $("#choose").hide();
				 $('html,body').removeClass('ovfHiden');
				 $('.spec-ul li').each(function(){
					 $(this).removeClass('curr-li');
				 })
				getbasket();
		 	 }else if(data&&data.status=="4036"){
		 		 
//		 		shopalert.setTitle(validator.tip3);
//		    	shopalert.show();
		 		$('#selectspec').find('p').html('库存不足');
				$('#selectspec').show();
		 	 }else if(data&&data.status=="4038"){
		 		$('#selectspec').find('p').html('您所选购的商品已超过限购数量');
				$('#selectspec').show();
		 	 }else if(data&&data.status=="4006"){
	  	  		 	shopalert.setTitle(validator.tip4);
  		    		shopalert.show();
  	  		 }else{
  	  		 	var error_html = getErrorPage('system',2) ;
				$('.wrap').append(error_html) ;
	  		 } 	 			                
  	     }).fail(function(){
  	    	var error_html = getErrorPage('system',2) ;
			$('.wrap').append(error_html) ;
  	     })
    }
    function addoffbasket(product){
    	var shop_goods = RP.store.getItem('shop_goods') ;
    	if(shop_goods&&shop_goods.length>0){
    		var hastemp = "no";
    		for(var i=0;i<shop_goods.length;i++){
    			if(product.product_code == shop_goods[i].product_code&&product.properties==shop_goods[i].properties){
    				if(shop_goods[i].products >=999){
    					 $('#selectspec').find('p').html('您所选购的商品已超过限购数量');
    					 $('#selectspec').show();
    					 return ;
    				}else if(shop_goods[i].products >= parseInt($('#changerepertory').html())){
    					 $('#selectspec').find('p').html('库存不足');
    					 $('#selectspec').show();
    					 return ;
    				}
    				else{
        				shop_goods[i].products = parseInt(shop_goods[i].products)+ parseInt(product.products);	
    				}
    				hastemp = "yes";
    			}
    		}
    		if(hastemp == "no"){
    			shop_goods.unshift(product);
    		}
    		RP.store.setItem('shop_goods',shop_goods);
    	}else{
    		goods.push(product);
    	    RP.store.setItem('shop_goods',goods);
    	}
	   //更新购物车的数量
    	$('.gwc-num').show();
    	$("#choose").hide();
    	$('html,body').removeClass('ovfHiden');
		$('.spec-ul li').each(function(){
			 $(this).removeClass('curr-li');
		})
        $('#goodsnum').html(RP.store.getItem('shop_goods').length);
	    console.log(RP.store.getItem('shop_goods'))
    }
    //改变后的价格和库存
    function dealprice(){
    	finnal = "";
    	finnalname = "";   	
    	finnalprice = "";
    	if(money_rule_list){
	    	$('.spec-ul .curr-li').each(function(){
	    		finnal=finnal+$(this).attr('data-code')+";";
	    	})
	    	for(var i=0;i<money_rule_list.length;i++){ 		
	    		if(finnal == money_rule_list[i].properties){
	    			finnalprice = money_rule_list[i].price;
	    			$('#changeprice').html(money_rule_list[i].price+"元");
	    			$('#changerepertory').html(money_rule_list[i].quantity);
	    		}
	    	}
	    	//拼接字符串
	    	$('.pro-spec-con').each(function(){
	    		finnalname = finnalname + $(this).find('h1').html()+':'+$(this).find('.spec-ul .curr-li').html()+' ; ';
	    	})
	    	finnalname=finnalname.substring(0,finnalname.length-3);
    	}
    }
    //对于不符合的做隐藏 
    function dealhide(item){
    	 console.log(money_rule_list)
    	 var choose=item.attr("data-code");
    	 var property=item.attr("data-property");
    	 var maincode=[];
		 for(var i=0;i<money_rule_list.length;i++){ 		
	   		if(money_rule_list[i].properties.indexOf(choose)!=-1){	
	   			maincode.push(money_rule_list[i].properties)
	   		}
	     }

		 $('.spec-ul li').each(function(){
			 if($(this).attr('data-property')==property){
                //实现 点击一下同级不做置黑
			 }else{
				 var changeflag = "0";
				 for(var i=0;i<maincode.length;i++){					
					 if(maincode[i].indexOf($(this).attr('data-code'))!=-1){
						 changeflag = "1";
					 }
				 }
				 if(changeflag == "0"){
				    $(this).addClass('disable-li')
				 }
			 }
			
		 });
    }
	// 业务逻辑
	(function(){
		$('.wrap').on('click','.back-btn',function(){
			    RP.store.removeItem('RP_scrollTopMemorys');
				window.history.go(-1) ;
		}) ;
		$('.wrap').on('click','.sc-splc-switch li',function(){
			//滚动条为互斥商品
//			$(this).addClass('curr-li');
//			$(this).siblings().removeClass('curr-li');
			var type=$(this).attr('data-code');
			if(type == "good"){				
				$('html,body').animate({scrollTop: document.getElementById("top").getBoundingClientRect().top-44}, 600);
			}else if(type == "detail"){
				$('html,body').animate({scrollTop:document.getElementById('middle').getBoundingClientRect().top-44}, 600);				
			}else{
			    var scrollTop=$(document).scrollTop();
			    console.log(scrollTop)
			    RP.store.setItem('shop_detail_scrolltop',scrollTop);
				window.location.href="evaluate.php?code="+product_code;
			}
		}) ;
		function getViewPort(){
			if( document.compatMode == 'BackCompat'){
				return {
					width : document.body.clientWidth ,
					height : document.body.clientHeight 
				} ;
			}
			else{
				return {
					width: document.documentElement.clientWidth ,
					height : document.documentElement.clientHeight 
				} ;
			}
		}
		//滚动时候触发 
	   $(window).scroll(function() { 
		  middle = document.getElementById("middle").getBoundingClientRect().top;
		  var clientHeight = getViewPort()['height'];
	      if (middle <= clientHeight) {
	    	  $('.detail').addClass('curr-li');
			  $('.detail').siblings().removeClass('curr-li');
	      }else{
	    	  $('.good').addClass('curr-li');
			  $('.good').siblings().removeClass('curr-li');
	      }
		  
//		  var screenheight = document.body.clientHeight || document.documentElement.clientHeight;
//	      var scroH = $(this).scrollTop()+screenheight;//滚动条滚动距离+屏幕的高度
//	      console.log("scroH---"+scroH);
//	      console.log("middle---"+middle)
//	       console.log("top---"+top)
//	      if (scroH >= middle) {
//	    	  $('.detail').addClass('curr-li');
//			  $('.detail').siblings().removeClass('curr-li');
//	      }else{
//	    	  $('.good').addClass('curr-li');
//			  $('.good').siblings().removeClass('curr-li');
//	      }
	    });
	    //跳转到购物车页面
		$('.wrap').on('click','#cart',function(){
			if(fromModelpage =="cart"){
				window.history.go(-1) ;							
			}else{
				window.location.href="cart.php";
			}				
		})
		//点击添加到购物车
		$('.wrap').on('click','#next',function(){
			if($('#choose').css('display') == "none"){
				 $("#choose").show();
				 $('html,body').addClass('ovfHiden');
				 $('#selectspec').hide();
			}else{
			   if($('.spec-ul .curr-li').length == mustchoose){
				    if(curr_user_info){
					   good.product_code=product_code;
					   good.properties=finnal;
					   good.products=$('#buynum').html();
					   good.price=finnalprice;
					   good.attribute=finnalname;
					   good.product_picture=$('#goodimg').attr('src');
					   goods.push(good);
					   console.log(goods);
					   addbasket(goods);   
				   }else{
					   if($('#changerepertory').html()=="0"){
						   $('#selectspec').find('p').html('库存不足');
						   $('#selectspec').show();
					   }else{
						   good.product_code=product_code;
						   good.properties=finnal;
						   good.products=parseInt($('#buynum').html());
						   good.price=finnalprice;
						   good.attribute=finnalname;
						   good.goodname=goodname; 
						   good.product_picture = $('#goodimg').attr('src');			   
						   addoffbasket(good);    
					   }					 
				   }
			   }else{
				    $('#selectspec').find('p').html('请选择规格');
					$('#selectspec').show();
			   }
			}

		}) ;
		//点击改变数量
		$('.wrap').on('click', '.minus-btn', function(e) {
			e.stopPropagation();
			if(!$(this).hasClass('minus-btn-dis')){
				var num = parseInt($(this).next().html());
				if (num > 1) {
					num--;
					$(this).parents().find('.plus-btn').removeClass('plus-btn-dis');
					$(this).next().html(num);
					if(num <= 1){
					 $(this).addClass('minus-btn-dis');
					}
				}else{
					$(this).addClass('minus-btn-dis');
				}
			}else{
				console.log('超过最少数量');
			}
			
		});
		$('.wrap').on('click', '.plus-btn', function(e) {
			e.stopPropagation();
			if(!$(this).hasClass('plus-btn-dis')){
				var num = parseInt($(this).prev().html());
				num++;
				$(this).prev().html(num);
				$(this).parents().find('.minus-btn').removeClass('minus-btn-dis');
				if(num >= max){
					$(this).addClass('plus-btn-dis');
				}
			}else{
				console.log('超过最大数量');
			}
		});
		//跳转到评价界面
		$('.wrap').on('click','#evaluate',function(){
		    var scrollTop=$(document).scrollTop();
		    console.log(scrollTop)
		    RP.store.setItem('shop_detail_scrolltop',scrollTop);
			window.location.href='evaluate.php?code='+product_code;
		}) ;
		//关闭弹框
		$('.wrap').on('click','#closechoose,#hidemask',function(){
		   $("#choose").hide();
		   $('html,body').removeClass('ovfHiden');
		}) ;
		//点击剂量
		$('.wrap').on('click','.sc-sel-spec-con li',function(){
		   $("#choose").show();
		   $('html,body').addClass('ovfHiden');
		}) ;
		//点击切换//该方法目前针对两级互斥类似淘宝 
		$('.wrap').on('click','.spec-ul li',function(){
			if(!$(this).hasClass('disable-li')){
				if($(this).hasClass('curr-li')){
					if($(this).attr('data-picture')!=""){
						   $('#goodimg').attr('src',goodpicture);
					   }
					 if($('.spec-ul .curr-li').length == mustchoose){						 
						  $(this).parents('.pro-spec-con').siblings().find('li').removeClass('disable-li'); 
						  $(this).removeClass('curr-li');
					  }else{
						  $(this).removeClass('curr-li');
					      $('.spec-ul li').removeClass('disable-li'); 
					  }
			     
				}else{
					   if($(this).attr('data-picture')!=""){
						   $('#goodimg').attr('src',$(this).attr('data-picture'));	
					   }else{
						   $('#goodimg').attr('src',goodpicture);	
					   }
					  if($('.spec-ul .curr-li').length == mustchoose){
						  $(this).addClass('curr-li');
						  //$(this).siblings().removeClass('curr-li');
						  if($(this).siblings().hasClass('curr-li')){
							  $(this).siblings().removeClass('curr-li');
							  $(this).parents('.pro-spec-con').siblings().find('li').removeClass('disable-li'); 
						  }
					  }else{
						  $(this).addClass('curr-li');
						  if($(this).siblings().hasClass('curr-li')){
							  $(this).siblings().removeClass('curr-li');
							  $(this).parents('.pro-spec-con').siblings().find('li').removeClass('disable-li'); 
						  }
					  }
				     dealhide($(this));
				}
			   if($('.spec-ul .curr-li').length == mustchoose){
				   $('#selectspec').hide();
				   dealprice();
			   }else{
				   $('#changeprice').html(goodmaxminprice);
	    		   $('#changerepertory').html(goodrepertory);
			   }
			  
		   }
		}) ;
		$('.wrap').on('click','.img-clip-div',function(e){
			  e.stopPropagation() ;
			  var scrollTop=$(document).scrollTop();
			  RP.store.setItem('shop_detail_scrolltop',scrollTop);
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
//		       		 var $self = $(this) ;
//		       		 var original = $self.attr('src') ;
//		       		 //$self.attr('src','../../public/images/default-head.png') ;
//		       		 $('<img/>').bind('load', function () {
//		        			$self.attr('src',original);
//		               }).attr('src', original);
//		       })
		    
		})
		$('.wrap').on('click','.lb-img-ul li',function(e){
			  e.stopPropagation() ;
			  var scrollTop=$(document).scrollTop();
			  RP.store.setItem('shop_detail_scrolltop',scrollTop);
			  $('html,body').css({'overflow':'hidden'});
	          var index = $(this).attr('data-index') ;
	          var imgs = $('.lb-img-ul').attr('data-multiple_imgs') ;
	          var imgs_html = getImageList(JSON.parse(imgs)) ;
	          $('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
	          $('#rp_preview_wrap').show() ;
	          $('#maincontent').hide();
	          mySwiper.init() ;
	          mySwiper._slideTo(index,0) ;
//	      	  $('.ylpic-mainlb-div img').each(function(){
//		       		 var $self = $(this) ;
//		       		 var original = $self.attr('src') ;
//		       		 var original_width = $self.width();
//		       		 var original_height = $self.height();
//		       		 //$self.attr('src','../../public/images/default-head.png') ;
//		       		 $('<img/>').bind('load', function () {
//		        			$self.attr('src',original);
//		               }).attr('src', original);
//		      })
		    
		})
		$('.wrap').on('click','.swiper-hide',function(e){
			e.stopPropagation();
			$('#rp_preview_wrap').hide();
			$('#maincontent').show();
			$('html,body').css({'overflow':'auto'});
			$(document).scrollTop(RP.store.getItem('shop_detail_scrolltop'));
		})
		
	})() ;

});