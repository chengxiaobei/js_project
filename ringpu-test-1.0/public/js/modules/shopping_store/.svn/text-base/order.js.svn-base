
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,dialog){

    //#变量
	var list=[];	
	var orderlist=[];
	var goodslist = RP.store.getItem('shop_goodslist');
	var newreceive = RP.store.getItem('shop_receive');
	var coupon = RP.store.getItem('shop_coupon');
	var message = RP.store.getItem('shop_message');
	var bill = RP.store.getItem('shop_bill');
	var billitem={};	
	var coupon_code = "";
	var product_price = "";
	var express = "";
	var price = "";
    var receiver ={};
    var country = '中国';
    var order_details ={};
    order_details.clientip = "";
    order_details.channel_name = ""; 
    order_details.appname = "HTML5"; 
    order_details.platform = "HTML5"; 
    order_details.version = "1.0"; 
    order_details.module_name = ""; 
    order_details.deviceid = ""; 
    order_details.user_agent = "";
    order_details.latitude = ""; 
    order_details.longitude = ""; 
    order_details.has_invoice = 0; 
    order_details.remark_message = ""; 
    var order_invoice ={};
	if(coupon){
		coupon_code=coupon.code;
	}else{
		coupon_code="";
	}
	var shopconfirm = new Dialog({type:'confirm_guide'}) ;
	var shopalert = new Dialog({type:'alert'}) ;
	var validator = {
			tip1:"确认要离开吗？",
			tip2:"请选择收货地址",
			tip3:"请输入2-20字发票抬头",
			tip4:"您选购的部分商品已失效或库存不足"
		};
	//#模板
	var tpl_html = $('#jsmart_tpl').html();
	//#请求url
	var url = global_path + "index.php/shoppingcenter/getOrderprice" ;
	var addorderurl = global_path + "index.php/shoppingcenter/addOrders" ;
	//#初始化
	
	//#页面渲染
	(function(){	


		//处理成接口需要的字段
		console.log(goodslist)
		for(var i=0; i<goodslist.length;i++){
			//good.price=goodslist[i].price;
			var good={};
			good.product_code=goodslist[i].productcode;
			good.product_count=goodslist[i].products;
			good.properties=goodslist[i].properties;
			list.push(good);
			var ordergood={};
			ordergood.product_code=goodslist[i].productcode;
			ordergood.product_count=goodslist[i].products;
			ordergood.properties=goodslist[i].properties;
			ordergood.product_title=goodslist[i].name;
			ordergood.basket_code=goodslist[i].basketcode;
			ordergood.properties_name=goodslist[i].attribute;
			ordergood.picture=goodslist[i].picture;
			orderlist.push(ordergood);
			
		}
		if(goodslist){
	         var params = {
			    coupon_code:coupon_code,
			    list:list
			 } ;
	         loadingShow($('#maincontent')[0]) 
			 commonAjax(url , params).then(function(data){
				 if(data&&data.status=="2000"){
					 data.goodslist=goodslist;//获取购物车的数据
					 if(coupon_code == ""){
						RP.store.setItem('shop_price',data.data.product_price);//获取首次存储总价 
					 }
					
					 if(newreceive){ //重新选择了地址
						 console.log(newreceive)
					     data.data.receiver=newreceive;
					 }
					 if(coupon){
						 console.log(coupon)
					     data.coupon=coupon; 
					 }
					 dealcontent(data);
					 console.log(data);
					 var tpl = new jSmart(tpl_html);
					 var res = tpl.fetch(data);	
					 $('#maincontent').html(res);
					 dealresult();
			 	 }else if(data.status=="4100"||data.status=="4110"||data.status=="4120"){
			 		 data.goodslist=goodslist;//获取购物车的数据
			 		 var tpl = new jSmart(tpl_html);
					 var res = tpl.fetch(data);	
					 $('#maincontent').html(res);
					 dealresult();
					 shopalert.setTitle(validator.tip4);
			    	 shopalert.show();
			    	 shopalert.ok_fn=function(){
							window.history.go(-1) ;
					 }
			 	 }else{
			 		loadingHide($('#maincontent')[0])  
			 		var error_html = getErrorPage('system',1) ;
                    $('#maincontent').hide();
					$('.wrap').append(error_html) ;
			 	 } 			                
	  	     }).fail(function(data){
	  	    	 loadingHide($('#maincontent')[0]) 
	  	    	 var error_html = getErrorPage('system',1) ;
	  	    	 $('#maincontent').hide();
				 $('.wrap').append(error_html) ;
	  	     });
		}else{
			 var error_html = getErrorPage('system',1) ;
			 $('.wrap').append(error_html) ;
		}		

	})() ;
	function dealcontent(data){
		product_price = data.data.product_price;
		express = data.data.total_express_price;
		price = data.data.price;
		if(data.data.receiver){
			receiver.telphone = data.data.receiver.telphone;
			receiver.receiver = data.data.receiver.receiver;
			receiver.country = country;
			receiver.region = data.data.receiver.province;
			receiver.city = data.data.receiver.city;
			receiver.area = data.data.receiver.area;
			receiver.postcode = "";
			receiver.detail = data.data.receiver.detail;
			receiver.receive_code = data.data.receiver.code;
		}		
	}
	function dealresult(){
		if(message){
			$('#leavemsg').val(message);
		}
		if(bill){
			if(bill.type=="on"){
				$('#switch_btn').removeClass('switch-btn-off');
				$('#switch_btn').addClass('switch-btn-on');
				$('#bill_content').val(bill.content);
				$('#bill').show();
			}
		}
	}
	
	
    function addorder(){
    	
    	 if(!receiver.receive_code){
        	 shopalert.setTitle(validator.tip2);
	    	 shopalert.show();
    		 return; 
         }
    	 
         if($('#switch_btn').hasClass('switch-btn-on'))
         {
        	 order_details.has_invoice = 1;
        	 if($('#bill_content').val()&&getStrlength($('#bill_content'))>=2){
        		 order_invoice.invoice_title = $('#bill_content').val();
        		 order_invoice.taxpayer_type = "";
        		 order_invoice.customer_type = "";
        	 }else{
        		 shopalert.setTitle(validator.tip3);
		    	 shopalert.show();
        		 return;
        	 }
         }else{
        	 order_invoice.invoice_title = "";
    		 order_invoice.taxpayer_type = "";
    		 order_invoice.customer_type = ""; 
         }
        // 下单
        
             order_details.remark_message =$('#leavemsg').val(); 
             var addorderparams = {
    		    list:orderlist,
    		    coupon_code:coupon_code,
    		    product_price:product_price,
    		    express:express,
    		    price:price,
    		    order_receiver:receiver,
    		    order_details:order_details,
    		    order_invoice:order_invoice
    		 } ;
             loadingShow($('#maincontent')[0]);
    		 commonAjax(addorderurl , addorderparams).then(function(data){
    			 if(data&&data.status=="2000"){
    				   window.location.href="pay_options.php?fromModelpage=order&&code="+data.data.order_code;
    		 	 }else{
    		 		   loadingHide($('#maincontent')[0]); 
    		 		   var error_html = getErrorPage('system',2) ;
   				       $('.wrap').append(error_html) ;
    		 	 } 			                
      	     })

    }

	// 业务逻辑
	(function(){
		//选择收货地址
		$('.wrap').on('click','.chooseaddress',function(){
			var code=$(this).attr('data-code');
			if($('#switch_btn').hasClass('switch-btn-on')){
				billitem.type="on";
				billitem.content=$('#bill_content').val();
			}else{
				billitem.type="off"
			}
			
			RP.store.setItem('shop_message',$('#leavemsg').val());
			RP.store.setItem('shop_bill',billitem);
			if(code){
				window.location.href="address.php?code="+code;
			}else{
				window.location.href="address.php";
			}			
		}) ;
		 $('.wrap').on('input keyup','#leavemsg,#bill_content',function(){
			 getStrlength($('#leavemsg'),20);
			 getStrlength($('#bill_content'),20);
		
		  })
		//控制输入的字符
		 $('.wrap').on('focus','#leavemsg,#bill_content',function(){
			 $('.sc-total-price-bar').css('position','static');  		
		  })
		  $('.wrap').on('blur','#leavemsg,#bill_content',function(){
			  $('.sc-total-price-bar').css({'position':'fixed','bottom':'0'});  		
		  })
		//发票按钮的切换
		$('.wrap').on('click','#switch_btn',function(){
			if($(this).hasClass('switch-btn-on')){
				$(this).removeClass('switch-btn-on');
				$(this).addClass('switch-btn-off');
				$('#bill').hide();
			}else{
				$(this).removeClass('switch-btn-off');
				$(this).addClass('switch-btn-on');
				$('#bill').show();
			}
		}) ;
		//提交订单
		$('.wrap').on('click','#addorder',function(){
			var billcontent = $('#bill_content').val();
			addorder();
			
			
		}) ;
		//返回
		$('.wrap').on('click','.back-btn',function(){
			shopconfirm.setTitle(validator.tip1);
			shopconfirm.show() ;				
			shopconfirm.confirm_fn=function(){
				window.location.href="cart.php?fromModelpage=order";
				RP.store.removeItem('shop_goodslist');
				RP.store.removeItem('shop_receive');
				RP.store.removeItem('shop_coupon');
				RP.store.removeItem('shop_message');
				RP.store.removeItem('shop_bill');
			};		


		}) ;
		//跳转到优惠劵页面
		$('.wrap').on('click','#usecoupon',function(){
			if($('#switch_btn').hasClass('switch-btn-on')){
				billitem.type="on";
				billitem.content=$('#bill_content').val();
			}else{
				billitem.type="off"
			}
			console.log(billitem)
			RP.store.setItem('shop_message',$('#leavemsg').val());
			RP.store.setItem('shop_bill',billitem);
			window.location.href="coupon_list.php?campaign_kind=P"
		}) ;

		
	})() ;

});