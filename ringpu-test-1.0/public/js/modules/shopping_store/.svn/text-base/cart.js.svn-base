
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,dialog){

    //#变量
	var selectdel = [];
	var max = 999;
	var page_size = 20;	
	var page_no = 0;
	var page_all = 1;
	var selected ;
    var shop_goods = RP.store.getItem('shop_goods');
    var curr_user_info = RP.store.getItem('curr_user_info') ; 
	var code = getQueryString('code');
	var content = getQueryString('content');
	var fromModelpage = getQueryString('fromModelpage');
	var shopconfirm = new Dialog({type:'confirm_guide'}) ;
	var shopalert = new Dialog({type:'alert'}) ;
	var ua = navigator.userAgent.toLowerCase();
	var validator = {
		tip1:"您选购的部分商品已失效或库存不足，请返回重新选择",
		tip2:"确认删除所选中的商品？",
		tip3:"库存不足",
		tip4:"数据保存失败",
	};
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	var tpl_html_off = $('#jsmart_tpl_off').html();
	var tpl_html_refresh = $('#jsmart_tpl_refresh').html();
	//#请求url
	var url = global_path + "index.php/shoppingcenter/getShopbasket" ;
	var urlchange = global_path + "index.php/shoppingcenter/editShopbasket" ;
	var urldel = global_path + "index.php/shoppingcenter/deleteShopbasket" ;
	var urladdbasket = global_path + "index.php/shoppingcenter/addShopbasket" ;
	
	//#初始化
	
	//#页面渲染
	(function(){	
		if(ua.indexOf('ipad') > -1||ua.indexOf('iphone') > -1){
			//window.location.reload();
		}else if(ua.indexOf('android')>-1){
			
		}else{
			
		}
       if(curr_user_info){
    	   //加入离线商品
    	   if(shop_goods){
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
	  	  			    RP.store.removeItem('shop_goods');
	  	  		 	 }else if(data&&data.status=="4036"){
		  	  		 	shopalert.setTitle(validator.tip3);
	  		    		shopalert.show();
	  		    		RP.store.removeItem('shop_goods');
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
    	   //展示登陆购物车
    	   land_more();  
       }else{
    	   //获取离线购物车
    	   console.log(shop_goods)
    	   getoffbasket();
       }
		

	})() ;
	
   function isshowallselect(data){
	   if(data.list<=0){
		   $('.sc-gwc-selall-con').hide();
		   $('.sc-gwc-pro-con').hide();
	   }
   }
   function land_more(){
	   if(page_no<page_all){
	     page_no = page_no + 1;
         var params = {
		    page_size:page_size,
		    page_no:page_no
		 } ;
         if(page_no == 1){
        	 loadingShow($('.wrap')[0]) 
         }       
		 commonAjax(url , params).then(function(data){
			 if(data&&data.status=="2000"){
				 if(page_no == 1){
					 page_all = data.data.page.total_page;
					 var tpl = new jSmart(tpl_html);
					 var res = tpl.fetch(data.data);
					 $('.wrap').html(res); 
				 }else{
					 var tpl_refresh = new jSmart(tpl_html_refresh);
					 var res_refresh = tpl_refresh.fetch(data.data);
					 $('.sc-gwc-pro-ul').append(res_refresh);
				 }
				 
				 dealresult(data.data);
				 
		 	 }else if(data&&data.status=="4002"){
		 		 loadingHide($('.wrap')[0]) 
		 		 var tpl = new jSmart(tpl_html);
				 var res = tpl.fetch(data.data);
				 $('.wrap').html(res); 
				 $('.main-section').append('<div class="public-none">暂时没有需要的信息~</div>')	
				 $('#addorder').addClass('nor-btn-dis');
		 	 }else{
		 		loadingHide($('.wrap')[0])  
		 		var error_html = getErrorPage('system',1) ;
				$('.wrap').append(error_html) ;
		 	 }
			 isshowallselect(data.data); 
  	     }).fail(function(){
  	    	    loadingHide($('.wrap')[0])  
		  	   	var error_html = getErrorPage('system',1) ;
				$('.wrap').append(error_html) ;
		}) ;
	   }else{
		  console.log('分页结束');
	   }
   }
   //刷新购物车删除后重新请求数据
   function refresh(){
     var paramsrefresh = {
	    page_size:page_size,
	    page_no:1
	 } ;
     loadingShow($('.sc-gwc-pro-ul')[0])  
	 commonAjax(url , paramsrefresh).then(function(data){
		 if(data&&data.status=="2000"){ 
			 var tpl_refresh = new jSmart(tpl_html_refresh);
			 var res_refresh = tpl_refresh.fetch(data.data);
			 $('.sc-gwc-pro-ul').html(res_refresh);
			 			
	 	 }else if(data&&data.status=="4002"){
	 		 loadingHide($('.sc-gwc-pro-ul')[0]) 
	 		 var tpl_refresh = new jSmart(tpl_html_refresh);
			 var res_refresh = tpl_refresh.fetch(data.data);
			 $('.sc-gwc-pro-ul').html(res_refresh);
			 $('.main-section').append('<div class="public-none">暂时没有需要的信息~</div>')	
			 $('#addorder').addClass('nor-btn-dis');
	 	 }else{
	 		 loadingHide($('.sc-gwc-pro-ul')[0])  
	 		 var error_html = getErrorPage('system',1) ;
			 $('.wrap').append(error_html) ; 
	 	 } 		 
		 dealresult(data.data);   
     }).fail(function(){
    	    loadingHide($('.sc-gwc-pro-ul')[0]) 
	  	   	var error_html = getErrorPage('system',1) ;
			$('.wrap').append(error_html) ;
	 });
   }
   //删除购物车
   function deletegoods(){
	    selected.each(function(){
		   selectdel.push($(this).parents().parents().attr('data-code'))
		});
		console.log(selectdel)
         var paramsdel = {
		    list_code:selectdel
		 } ;
		 commonAjax(urldel , paramsdel).then(function(data){
			 if(data&&data.status=="2000"){   			 		
				 refresh();
		 	 }else{
		 		var error_html = getErrorPage('system',2) ;
				$('.wrap').append(error_html) ;
		 	 } 			                
  	     }).fail(function(){
	  	    	var error_html = getErrorPage('system',2) ;
				$('.wrap').append(error_html) ;
		}) ;
   }
   
   //处理js自带bug
   function priceformat(price){
	 if(price.indexOf('.')!=-1&&(price.split('.')[1]).length>2){
		 price=parseFloat(price).toFixed(2);
	 }
	 return price;
   }
   function dealresult(data){
	     $('.sc-gwc-pro-ul li').each(function(){
	    	 if($(this).attr('data-status') == "1"){
	    		 $(this).find('.sel-btn-con a').addClass('seled-btn');
	    		 dealprice($('.seled-btn'));
	    		 return false;
	    	 }
	     })
		 dealprice($('.seled-btn'));
	   //全选
	   if($('.sc-gwc-pro-ul li').length == $('.seled-btn').length){
		   $('#selectall').addClass('selall-btn-seled');
	   }else{
		   $('#selectall').removeClass('selall-btn-seled');
	   }
	   //加号减号按钮置灰
	   $('.minus-btn').each(function(){
		   if($(this).next('span').html()== 1){
			   $(this).addClass('minus-btn-dis')
		   }
	   })
	    $('.plus-btn').each(function(){
		   if($(this).prev('span').html()== max){
			   $(this).addClass('plus-btn-dis')
		   }
	   })
	   //数据没有
	   if($('.sc-gwc-pro-ul li').length<=0){
		   $('.sc-gwc-selall-con').hide();
		   $('.sc-gwc-pro-con').hide();
	   }
	
   }
   //改变商品数量
   function change(products,shop_basket_code,properties){
         var paramschange = {
	 	    products:products,
		    shop_basket_code:shop_basket_code,
		    properties:properties
		 } ;

		 commonAjax(urlchange , paramschange).then(function(data){
			 if(data&&data.status=="2000"){
				 
		 	 }else if(data&&data.status=="4036"){
		 		shopalert.setTitle(validator.tip3);
		    	shopalert.show();
		 	 }else{
		 		var error_html = getErrorPage('system',2) ;
				$('.wrap').append(error_html) ;
		 	 } 			                
  	     }).fail(function(data){
  	    	var error_html = getErrorPage('system',2) ;
			$('.wrap').append(error_html) ;
  	     })
   }
   //处理商品价格
   function dealprice(selected){
	   var allprice = 0;
	   if(selected.length>0){
		   
		    selected.each(function(){
			   allprice=allprice+$(this).parents().parents().attr('data-price')*$(this).parents().parents().attr('data-products')
			});
		   
		    if((allprice+"").indexOf('.')!=-1&&((allprice+"").split('.')[1]).length>2){
		    	allprice=parseFloat(allprice).toFixed(2);
		    	$("#allprice").html(allprice);	
		    }else{
		    	 $("#allprice").html(allprice);	
		    }
	   }else{
		   $("#allprice").html(allprice);	
	   }	    	   
   }
   function getoffbasket(){
		var offbasket={};
		offbasket.shop_goods=shop_goods;
		if(shop_goods&&shop_goods.length>0){
			 var tpl_off = new jSmart(tpl_html_off);
			 var res_off = tpl_off.fetch(offbasket);
			 console.log(offbasket)
			 $('.wrap').html(res_off);
		     if($('.sc-gwc-pro-ul li').length == $('.seled-btn').length){
			   $('#selectall').addClass('selall-btn-seled');
		     }else{
			   $('#selectall').removeClass('selall-btn-seled');
		     }
			 dealoffprice($('.seled-btn'));
		    $('.minus-btn').each(function(){
			   if($(this).next('span').html()== 1){
				   $(this).addClass('minus-btn-dis')
			   }
		    })
		    $('.plus-btn').each(function(){
			   if($(this).prev('span').html()== max){
				   $(this).addClass('plus-btn-dis')
			   }
		   })
		}else{
			 var tpl_off = new jSmart(tpl_html_off);
			 var res_off = tpl_off.fetch(offbasket);
			 console.log(offbasket)
			 $('.wrap').html(res_off);
			 $('.main-section').append('<div class="public-none">暂时没有需要的信息~</div>')	
			 $('#addorder').addClass('nor-btn-dis');
		}
	}
   function dealoffprice(selected){
	   var allprice = 0;
	   if(selected.length>0){
		   selected.each(function(){
		    	var offnum = $(this).parent().parent().attr('data-code');
		    	var num = parseInt($('.num_'+offnum).html());
			   allprice=allprice+$(this).parent().parent().attr('data-price')*num;
			});
		   if((allprice+"").indexOf('.')!=-1&&((allprice+"").split('.')[1]).length>2){
		    	allprice=parseFloat(allprice).toFixed(2);
		    	$("#allprice").html(allprice);	
		    }else{
		    	 $("#allprice").html(allprice);	
		    }
	   }else{		   
		    $("#allprice").html(allprice);
	   }

   }
   function dealoffnum(){
	   for(var i=0;i<shop_goods.length;i++){
		   $('.sc-gwc-pro-ul li').each(function(){
			   if($(this).attr('data-productcode')==shop_goods[i].product_code&&$(this).attr('data-price')==shop_goods[i].price){
				   shop_goods[i].products= parseInt($(this).find('.num-span').html()) 
			   }
		   })
	   }
	   RP.store.setItem('shop_goods',shop_goods);
	   console.log(shop_goods)
   }
   //移除商品
   function remove(item){
		var removeitem =[];
		removeitem.push(item);
       var paramsremove = {
		    list_code:removeitem
		 } ;

		 commonAjax(urldel , paramsremove).then(function(data){
			 if(data&&data.status=="2000"){   			 		
				 refresh();
		 	 }else{
		 		var error_html = getErrorPage('system',2) ;
				$('.wrap').append(error_html) ;
		 	 } 			                
	     })
  }
	// 业务逻辑
	(function(){
		//点击返回
		$('.wrap').on('click','.back-btn',function(){
			if(fromModelpage == "pay_options"||fromModelpage == "pay_fail"||fromModelpage == "pay_success"||fromModelpage == "pay_offline_success"){
				window.location.href="index.php";
			}else if(fromModelpage == "order"){
				window.location.href="index.php";
			}else{
				window.history.go(-1) ;	
			}		
		}) ;
		//选择商品
		$('.wrap').on('click','.sel-btn-con a',function(e){
			e.stopPropagation();
			$(this).toggleClass('seled-btn');
			if(curr_user_info){
			     dealprice($('.seled-btn'));
	        }else{
	    		 dealoffprice($('.seled-btn'));
	        }
		   //如果全部选中 选中全选按钮
		   if($('.sc-gwc-pro-ul li').length == $('.seled-btn').length){
			   $('#selectall').addClass('selall-btn-seled');
		   }else{
			   $('#selectall').removeClass('selall-btn-seled');
		   }
		   //按钮变灰
		   if($('.seled-btn').length<=0){
			   $('#addorder').addClass('nor-btn-dis');
		   }else{
			   $('#addorder').removeClass('nor-btn-dis');
		   }
		}) ;
		//全选
		$('.wrap').on('click','#selectall',function(){
			$(this).toggleClass('selall-btn-seled');			
			if($(this).hasClass('selall-btn-seled')){
				$('.sel-btn-con a').addClass('seled-btn');
				if(curr_user_info){
					dealprice($('.seled-btn'))
				}else{
					dealoffprice($('.seled-btn'))
				}
				
			}else{
				$('.sel-btn-con a').removeClass('seled-btn');
				$("#allprice").html(0)
			}
			//按钮置灰
		   if($('.seled-btn').length<=0){
			   $('#addorder').addClass('nor-btn-dis');
		   }else{
			   $('#addorder').removeClass('nor-btn-dis');
		   }
		}) ;
		//删除购物车
		$('.wrap').on('click','#deletecart',function(){
			selected=$('.seled-btn');
			console.log(selected)
			if(selected.length>0){
				shopconfirm.setTitle(validator.tip2);
				shopconfirm.show() ;				
				shopconfirm.confirm_fn=deletegoods;							
			}
		});
		//删除离线购物车
		$('.wrap').on('click','#deletecartoff',function(){
			var selected=$('.seled-btn');
			console.log(selected)
			if(selected.length>0){
				shopconfirm.setTitle(validator.tip2);
				shopconfirm.show();	
				shopconfirm.confirm_fn=function(){
					selected.each(function(){
					    shop_goods.splice($(this).parents('li').attr('data-code'), 1);//无论选择几个删除第一个
						console.log(shop_goods)
					});
					  dealoffprice($('.seled-btn'));
					 RP.store.setItem('shop_goods',shop_goods);
					 getoffbasket();
				};
				
			}
			
			
		});
		//下单
		$('.wrap').on('click','#addorder',function(){
		 if(!$('#addorder').hasClass('nor-btn-dis')&&$('.seled-btn').length>0){
			 var flagless = "0"
			    if(curr_user_info){
			    	$('.seled-btn').each(function(){
						if($(this).parents('li').attr('data-status')=="2"){
							flagless = "1";
							return false;
						}
			    	});
			    	if(flagless == "0"){
						var goodslist=[];
						$('.seled-btn').each(function(){
							var good={}
							good.name=$(this).parents('li').attr('data-name');
							good.attribute=$(this).parents('li').attr('data-attribute');
							good.picture=$(this).parents('li').attr('data-picture');
							good.price=$(this).parents('li').attr('data-price');
							good.productcode=$(this).parents('li').attr('data-productcode');
							good.products=$(this).parents('li').attr('data-products');
							good.basketcode=$(this).parents('li').attr('data-code');
							good.properties=$(this).parents('li').attr('data-properties');
							goodslist.push(good);
						})
						RP.store.setItem('shop_goodslist',goodslist);
						console.log(goodslist)
						window.location.href="order.php";
			    	}else{
			    		shopalert.setTitle(validator.tip1);
	  		    		shopalert.show();
			    	}

				}else{
					check_login_module() ;
				} 
		   }	
			
		});
		//移除下架商品
		$('.wrap').on('click','.remove_item',function(e){
			e.stopPropagation();
			remove($(this).parents('li').attr('data-code'));
		});

		//点击输入数字
		$('.wrap').on('click', '.num_box', function(e) {
				e.stopPropagation();
				var number=$(this).find('.num-span').html();
				var ccode=$(this).attr("data-code")
				var acode=$(this).attr("data-properties")
				$("#inputnum").val(number);
				$("#confirm").attr("data-code",ccode)
				$("#confirmoff").attr("data-code",ccode)
				$("#confirm").attr("data-properties",acode)
				$("#plusandminus").show();
			    if($('.minusbox').next('input').val()== 1){
				   $('.minusbox').addClass('minus-btn-dis')
			    }else{
			       $('.minusbox').removeClass('minus-btn-dis')
			    }
			    if($('.plusbox').prev('input').val()== max){
			    	$('.plusbox').addClass('plus-btn-dis')
			    }else{
			    	$('.plusbox').removeClass('plus-btn-dis')
			    }
		});
		//弹框加
		$('.wrap').on('click', '.plusbox', function() {
			if(!$(this).hasClass('plus-btn-dis')){
				var num = $('#inputnum').val();
				num++;
				$('#inputnum').val(num);
				$(this).parents().find('.minus-btn').removeClass('minus-btn-dis');
				if(num >= max){
					$(this).addClass('plus-btn-dis');
				}
			}else{
				console.log('超过最大数量');
			}
		});
		//弹框减
		$('.wrap').on('click', '.minusbox', function() {
			if(!$(this).hasClass('minus-btn-dis')){
				var num = $('#inputnum').val();
				if (num > 1) {
					num--;					
					$(this).parents().find('.plus-btn').removeClass('plus-btn-dis');
					$('#inputnum').val(num);
					if(num == 1){
					 $(this).addClass('minus-btn-dis');
					}
				}else{
					$(this).addClass('minus-btn-dis');
				}
			}else{
				console.log('超过最少数量');
			}
			
		});
		
		
		//普通加
		$('.wrap').on('click', '.plusnormal', function(e) {
			e.stopPropagation();
			if(!$(this).hasClass('plus-btn-dis')){
				var num = parseInt($(this).prev().html());
				num++;
				change(num,$(this).parents().attr('data-code'),$(this).parents().attr('data-properties'));
				$(this).parents('.sc-gwc-pro-ul li').attr('data-products',num);
				$(this).prev().html(num);
				$(this).parents().find('.minus-btn').removeClass('minus-btn-dis');
				dealprice($('.seled-btn'));
				if(num >= max){
					$(this).addClass('plus-btn-dis');
				}
			}else{
				console.log('超过最大数量');
			}
		});
		//普通减
		$('.wrap').on('click', '.minusnormal', function(e) {
			e.stopPropagation();
			if(!$(this).hasClass('minus-btn-dis')){
				var num = parseInt($(this).next().html());
				if (num > 1) {
					num--;
					change(num,$(this).parents().attr('data-code'),$(this).parents().attr('data-properties'));
					$(this).parents('.sc-gwc-pro-ul li').attr('data-products',num);
					$(this).parents().find('.plus-btn').removeClass('plus-btn-dis');
					$(this).next().html(num);
					dealprice($('.seled-btn'));
					if(num == 1){
					 $(this).addClass('minus-btn-dis');
					}
				}else{
					$(this).addClass('minus-btn-dis');
				}
			}else{
				console.log('超过最少数量');
			}
			
		});
		
		//跳转到详情
		$('.wrap').on('click', '.sc-gwc-pro-ul li', function(e) {
			e.stopPropagation();
			var codedetail=$(this).attr('data-productcode');
			window.location.href="detail.php?code="+codedetail+"&fromModelpage=cart";
		});
		//输入验证
		$('.wrap').on('input', '#inputnum', function() {
			if(this.value == "" || this.value == null){
				$(this).prev().addClass('minus-btn-dis');
				$(this).next().addClass('plus-btn-dis');
				$('#confirmoff').addClass('mybox-btn-dis');
			}else{
				$('#confirmoff').removeClass('mybox-btn-dis');
				this.value=parseInt(this.value);
				if(this.value == 0){
					this.value="";	
				}else if(this.value == 1){
					$(this).prev().addClass('minus-btn-dis');
					$(this).next().removeClass('plus-btn-dis');
				}else if(this.value == max){
					$(this).prev().removeClass('minus-btn-dis');
					$(this).next().addClass('plus-btn-dis');
				}else{
				    $(this).prev().removeClass('minus-btn-dis');
					$(this).next().removeClass('plus-btn-dis');
				}
			    this.value=this.value.replace(/[^0-9]/g,'');
			  
			}
	
		});
		//关闭弹框
		$('.wrap').on('click', '#close', function() {
			$('#confirm').removeClass('mybox-btn-dis');
			$('#confirmoff').removeClass('mybox-btn-dis');
			$('#plusandminus').hide();
			$('.minus-btn').each(function(){
				if($(this).next('span').html()== 1){
					$(this).addClass('minus-btn-dis')
				}else{
					$(this).removeClass('minus-btn-dis')
				}
			})
		});
		//提交弹框
		$('.wrap').on('click', '#confirm', function() {
			if(!$(this).hasClass('mybox-btn-dis')){
				var code=$(this).attr('data-code');
				change($("#inputnum").val(),$(this).attr('data-code'),$(this).attr('data-properties'))
				$(".num_"+code).html($("#inputnum").val());
				$(".shop_basket_code_"+$(this).attr('data-code')).attr('data-products',$("#inputnum").val());
				dealprice($('.seled-btn'));
				$('#plusandminus').hide();
				$('.minus-btn').each(function(){
					if($(this).next('span').html()== 1){
						$(this).addClass('minus-btn-dis')
					}else{
						$(this).removeClass('minus-btn-dis')
					}
				})
				$('.plus-btn').each(function(){
					if($(this).prev('span').html()== max){
						$(this).addClass('plus-btn-dis')
					}else{
						$(this).removeClass('plus-btn-dis')
					}
				})	
			}		
		});
		//离线加
		$('.wrap').on('click', '.plusoff', function(e) {
			e.stopPropagation();
			if(!$(this).hasClass('plus-btn-dis')){
				var num = parseInt($(this).prev().html());
				num++;
				$(this).prev().html(num);
				$(this).parents().find('.minus-btn').removeClass('minus-btn-dis');
				dealoffprice($('.seled-btn'));
				if(num >= max){
					$(this).addClass('plus-btn-dis');
				}
			}else{
				console.log('超过最大数量');
			}
			dealoffnum();
		});
		//离线减
		$('.wrap').on('click', '.minusoff', function(e) {
			e.stopPropagation();
			if(!$(this).hasClass('minus-btn-dis')){
				var num = parseInt($(this).next().html());
				if (num > 1) {
					num--;					
					$(this).parents().find('.plus-btn').removeClass('plus-btn-dis');
					$(this).next().html(num);
					dealoffprice($('.seled-btn'));
					if(num == 1){
					 $(this).addClass('minus-btn-dis');
					}
				}else{
					$(this).addClass('minus-btn-dis');
				}
			}else{
				console.log('超过最少数量');
			}
			dealoffnum();
		});
		//离线提交弹框
		$('.wrap').on('click', '#confirmoff', function() {
			if(!$(this).hasClass('mybox-btn-dis')){
				var code=$(this).attr('data-code');
				$(".num_"+code).html($("#inputnum").val());
				$('#plusandminus').hide();
				dealoffprice($('.seled-btn'));
				$('#plusandminus').hide();
				$('.minus-btn').each(function(){
					if($(this).next('span').html()== 1){
						$(this).addClass('minus-btn-dis')
					}else{
						$(this).removeClass('minus-btn-dis')
					}
				})
				$('.plus-btn').each(function(){
					if($(this).prev('span').html()== max){
						$(this).addClass('plus-btn-dis')
					}else{
						$(this).removeClass('plus-btn-dis')
					}
				})
				dealoffnum();
				console.log(shop_goods)
				RP.store.setItem('shop_goods',shop_goods);
			}			
		});		
		//分页	    
       $(window).scroll(function(){
        if($(document).scrollTop()>=$(document).height()-$(window).height()&&curr_user_info){        
        	land_more();
         }
       })
	   //控制输入的字符
	   $('.wrap').on('focus','#inputnum',function(){
		 $('.sc-total-price-bar').hide();  		
	   })
	   $('.wrap').on('blur','#inputnum',function(){
		  $('.sc-total-price-bar').show();  		
	   })
		
	})() ;

});