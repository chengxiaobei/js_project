(function(){
	// 加载页面
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

	// $wrap : 父容器 
	function loadingShow($wrap){
	    if(!$wrap) return ;
	    []['forEach'].call($wrap.childNodes,function(v){
	        if(v.nodeType == 1){
	            v.style.display = "none" ;
	        }
	    }) ;
	    if(!$wrap.querySelector('.RP_LOADING')){
	        var loading_html = getLoadHtml() ;
	        $wrap.insertAdjacentHTML('beforeend',loading_html) ;
	    }
	    $wrap.querySelector('.RP_LOADING').style.display = "block" ;
	    return ;
	}
	loadingShow(document.querySelector('#wrap1')) ;
})() ;

require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,_){

	var order_detail_tpl = new jSmart(document.getElementById('order_detail_tpl').innerHTML) ;

	var order_type = getQueryString('order_type') ; 
	var order_code = getQueryString('order_code') ;
	var fromModelpage = getQueryString('fromModelpage') ;
	// 订单状态列表
	var order_status = [
		{"key":"60006",name:"交易成功"} ,
		{"key":"60001",name:"待支付"} ,
		{"key":"60003",name:"待发货"} ,
		{"key":"60005",name:"待确认收货"} ,
		{"key":"60004",name:"待评价"} ,
		{"key":"60007",name:"已取消"} 
	] ;

	var d_confrim_guide = new Dialog({type:'confirm_guide'}) ;


	// 页面初始化
	(function(){
		var p = {
			order_code : order_code 
		} ;
		var url = global_path + "index.php/personalcenter/getOrderDetail" ;

		commonAjax(url,p).then(function(data){
			console.info(data) ;
			if(data && data.status && data.status == "2000"){
				setTitleByOrderType(data['data']['order_status']) ;
			}
			data['baseInfo_phonenum'] = RP.baseInfo['phonenum'] ;
			var res = order_detail_tpl.fetch(data) ;
			$('#wrap1').html(res) ;
		}) ;
		

	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			if(fromModelpage == "pay_success"||fromModelpage == "pay_fail"||fromModelpage == "pay_offline_success"){
				window.location.href="orders_list.php?fromModelpage=pay_result";
			}else{
				window.history.go(-1) ;
			}
		}) ;

		// 查询订单状态
		$('#wrap1').on('click','#order_status',function(){
			window.location.href = "order_status.php?orderNum=" + order_code;
		}) ;

		// 查询物流信息
		$('#wrap1').on('click','#order_logistics',function(){
			window.location.href = "order_logistics.php?orderNum=" + order_code ;
		}) ;

		// 去支付
		$('#wrap1').on('click','.go_to_pay',function(){
			window.location.href = "../shopping_store/pay_options.php?code=" + order_code + '&fromModelpage=order_detail' ;
		}) ;

		// 删除订单
		$('#wrap1').on('click','.order_delete',function(){
			var $this = $(this) ;

			var confirm_call = function(){
				var order_status = 1 ;
				var p = {
					order_code : order_code ,
					order_status : order_status
				} ;
				console.info(p) ;
				var url = global_path + "index.php/personalcenter/updateOrderStatus" ;
				commonAjax(url,p).then(function(data){
					if(data && data.status && data.status == "2000"){
						window.history.go(-1) ;
					}
				}) ;
			}
			d_confrim_guide.setTitle('确定删除订单?') ;
			d_confrim_guide.confirm_fn = confirm_call ;
			d_confrim_guide.show() ;
		}) ;
		// 取消订单
		$('#wrap1').on('click','.order_cancel',function(){
			var $this = $(this) ;
			var confirm_call = function(){
				var order_status = 2 ;
				var p = {
					order_code : order_code ,
					order_status : order_status
				} ;
				var url = global_path + "index.php/personalcenter/updateOrderStatus" ;
				commonAjax(url,p).then(function(data){
					console.info(data) ;
					if(data && data.status && data.status == "2000"){
						window.location.href = window.location.href ;
					}
				}) ;
			}

			d_confrim_guide.setTitle('确认取消该订单?') ;
			d_confrim_guide.confirm_fn = confirm_call ;
			d_confrim_guide.show() ;

		}) ;

		// 待确认收货
		$('#wrap1').on('click','.order_confirm_receipt',function(){
			var confirm_call = function(){
				var order_status = 3 ;
				var p = {
					order_code : order_code ,
					order_status : order_status
				} ;
				var url = global_path + "index.php/personalcenter/updateOrderStatus" ;
				commonAjax(url,p).then(function(data){
					console.info(data) ;
					if(data && data.status && data.status == "2000"){
						window.location.href = window.location.href ;
					}
				}) ;
			}
			d_confrim_guide.setTitle('确认已收货?') ;
			d_confrim_guide.confirm_fn = confirm_call ;
			d_confrim_guide.show() ;
		}) ;

		// 产品反馈
		$('#wrap1').on('click','.order_feedback',function(){
			window.location.href = "product_feedback.php?orderNum=" + order_code ;
		}) ;

		// 订单评价
		$('#wrap1').on('click','.order_evaluation',function(){
			window.location.href = "order_evaluation.php?order_code=" + order_code;
		}) ;

		// 进入商品详情
		$('#wrap1').on('click','.order_product_item',function(e){
			e.stopPropagation() ;
			e.preventDefault() ;
			var product_code = $(this).attr('data-product_code') ;
			window.location.href = "../shopping_store/detail.php?code=" + product_code ;
		}) ;

	})() ;


	// 设置标题
	function setTitleByOrderType(status){
		if(!status){
			return ;
		}
		for(var i = 0 ,len = order_status.length ; i < len ; i++){
			var o = order_status[i] ;
			if(status == o['key']){
				$('title').html(o['name']) ;
				break ;
			}
		}
	}



}) ;
