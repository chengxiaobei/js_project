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

	// 分页信息
	var page_no = 1;
    var page_size = 20;
    var total_page = 0 ;
    var isSearching = false ;

	// 订单状态列表
	var order_status = [
		{"key":"60006",name:"交易成功"} ,
		{"key":"60001",name:"待支付"} ,
		{"key":"60003",name:"待发货"} ,
		{"key":"60005",name:"待确认收货"} ,
		{"key":"60004",name:"待评价"} ,
		{"key":"60007",name:"已取消"} 
	] ;


	var orders_list_tpl = new jSmart(document.getElementById('orders_list_tpl').innerHTML) ;

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	var d_confrim_guide = new Dialog({type:'confirm_guide'}) ;
	var fromModelpage = getQueryString('fromModelpage') ;

	// 页面渲染
	(function(){
		var curr_order_list = RP.store.getItem('curr_order_list','session') ;
		console.info(curr_order_list) ;
		if(curr_order_list && false){
			renderData(curr_order_list) ;
		}else{
			var params = {
				page_no : page_no ,
				page_size : page_size
			} ;
			var url = global_path +  "index.php/personalcenter/getOrderList" ;
			commonAjax(url , params).then(function(data){
				console.info(data) ;
				if(data && data.status && data.status == "2000" 
					&& data['data'] && data['data']['order_list']){
						RP.store.setItem('curr_order_list',data['data']['order_list'],'session') ;
						renderData(data['data']['order_list']) ;
						total_page = data['data']['page']['total_page'] ;
				}
				else{
					renderData([]) ;
					// var error_html = getErrorPage('nodata') ;
					// $('#wrap1 section').hide() ;
					// $('#wrap1').append(error_html) ;
					errorPageShow($('#wrap1')[0],'nodata') ;
				}
			}).fail(function(){
				renderData([]) ;
				// var error_html = getErrorPage('system') ;
				// $('#wrap1 section').hide() ;
				// $('#wrap1').append(error_html) ;
				errorPageShow($('#wrap1')[0],'system') ;
			}) ;
		}
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			// window.location.href = "index.php" ;
			if(fromModelpage == "pay_result"||fromModelpage == "pay_success"||fromModelpage == "pay_fail"||fromModelpage == "pay_offline_success"){
				window.location.href = "index.php" ;
			}else{
				window.history.go(-1) ;
			}
		}) ;

		// 删除订单
		$('#wrap1').on('click','.order_delete',function(e){
			e.stopPropagation() ;
			e.preventDefault() ;

			var $this = $(this) ;

			var confirm_call = function(){
				var order_code = $this.closest('.order_item').attr('data-order_code') ; 
				var order_status = 1 ;
				var p = {
					order_code : order_code ,
					order_status : order_status
				} ;
				console.info(p) ;
				var url = global_path + "index.php/personalcenter/updateOrderStatus" ;
				commonAjax(url,p).then(function(data){
					console.info(data) ;
					if(data && data.status && data.status == "2000"){
						window.location.href = window.location.href ;
					}
				}) ;
			}
			d_confrim_guide.setTitle('确定删除订单?') ;
			d_confrim_guide.confirm_fn = confirm_call ;
			d_confrim_guide.show() ;
		}) ;

		// 反馈药品
		$('#wrap1').on('click','.order_feedback',function(e){
			e.stopPropagation() ;
			e.preventDefault() ;
			console.info('药品反馈') ;
			window.location.href = "product_feedback.php" ;
		}) ;

		// 取消订单
		$('#wrap1').on('click','.order_cancel',function(e){
			e.stopPropagation() ;
			e.preventDefault() ;
			var $this = $(this) ;

			var confirm_call = function(){
				var order_code = $this.closest('.order_item').attr('data-order_code') ; 
				var order_status = 2 ;
				var p = {
					order_code : order_code ,
					order_status : order_status
				} ;
				var url = global_path + "index.php/personalcenter/updateOrderStatus" ;
				commonAjax(url,p).then(function(data){
					if(data && data.status && data.status == "2000"){
						window.location.href = window.location.href ;
					}
				}) ;
			}

			d_confrim_guide.setTitle('确定取消订单?') ;
			d_confrim_guide.confirm_fn = confirm_call ;
			d_confrim_guide.show() ;
		}) ;


		// 支付
		$('#wrap1').on('click','.go_to_pay',function(e){
			e.stopPropagation() ;
			e.preventDefault() ;
			var order_code = $(this).closest('.order_item').attr('data-order_code') ;
			window.location.href = "../shopping_store/pay_options.php?code=" + order_code + '&fromModelpage=order_list'  ;
		}) ;

		// 确认收货
		$('#wrap1').on('click','.order_confirm_receipt',function(e){
			e.stopPropagation() ;
			e.preventDefault() ;
			var $this = $(this) ;

			var confirm_call = function(){
				var order_code = $this.closest('.order_item').attr('data-order_code') ; 
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

		// 评价
		$('#wrap1').on('click','.order_evaluation',function(e){
			e.stopPropagation() ;
			e.preventDefault() ;
			var order_code = $(this).closest('.order_item').attr('data-order_code') ;  
			window.location.href = "order_evaluation.php?order_code=" + order_code ;
		}) ;

		// 进入订单详情
		$('#wrap1').on('click','.order_item',function(){
			var order_type = $(this).attr('order-type') ;
			var order_code = $(this).closest('.order_item').attr('data-order_code') ;
			if(!order_code){
				return false ;
			}
			window.location.href = "order_detail.php?order_code=" + order_code ;
		}) ;
		
	})() ;

	// 数据渲染
	function renderData(data){
		var r_data = {
			data : data
		} ;
		var res = orders_list_tpl.fetch(r_data) ;
		$('#wrap1').html(res) ;
		// 事件绑定
		eventBinds() ;

		imgLazyLoad() ;
	}


	// 事件绑定
	function eventBinds(){
		// 分页事件绑定
		var startY = 0,
            endY = 0,
            offsetY = 0,
            pageSize = getViewport(),
            clientHeight = pageSize['height'],
            header_height = 44,
            footer_height = -50,
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        document.querySelector('#order_list').addEventListener('touchstart', function (evt) {
            if (isSearching) return;
            startY = evt.changedTouches[0].pageY;
        });

        document.querySelector('#order_list').addEventListener('touchmove', function (evt) {
            if (isSearching) return;
            endY = evt.changedTouches[0].pageY;
            offsetY = endY - startY;
            if (offsetY >= 0) return;

            var rp = document.querySelector('#order_list').getBoundingClientRect();
            var orgList_bottom = rp['bottom'];
            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
                //为了兼容Android 4.0 touchend的不执行bug...
                evt.preventDefault();
            }
        });

         document.querySelector('#order_list').addEventListener('touchend', function (evt) {
            if (isSearching) return;
            endY = evt.changedTouches[0].pageY;
            offsetY = endY - startY;
            if (offsetY >= 0) return;

            var rp = document.querySelector('#order_list').getBoundingClientRect();
            var orgList_bottom = rp['bottom'];
            //滑动到最底部
            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
                getOrderListByPageInfo();
            }
        });
	}


	function getOrderListByPageInfo(){
		var curr_order_list = RP.store.getItem('curr_order_list','session') ;
		if(!curr_order_list){
			return ;
		}
		isSearching = true;
		page_no = page_no + 1 ;
		if(page_no > total_page){
			// d_alert.setTitle('没有更多数据') ;
			// d_alert.show() ;
			return ;
		}
		var params = {
			page_no : page_no ,
			page_size : page_size
		} ;
		var url = global_path +  "index.php/personalcenter/getOrderList" ;
		commonAjax(url , params).then(function(data){
			if(data && data.status && data.status == "2000"){
				curr_order_list = curr_order_list.concat(data['data']['order_list']) ;
			}
			RP.store.setItem('curr_order_list',curr_order_list,'session') ;
			renderData(curr_order_list) ;
            isSearching = false;
		}) ;
	}


	 // 获取页面尺寸
    function getViewport() {
        //判断文档模式compatMode == 'BackCompat'
        if (document.compatMode == 'BackCompat') {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            };
        } else {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            };
        }
    }

    // 图片懒加载
    function imgLazyLoad(){
    	$('img').attr('src','../../public/images/default-head.png') ;

    	$('img').each(function(){
    		var $self = $(this) ;
    		var original = $self.attr('data-original') ;
    		if(!original){
    			return ;
    		}
    		$('<img />').on('load',function(){
    			$self.attr('src',original) ;
    			$self.attr('data-original',''); 
    		}).attr('src',original) ;
    	}) ;
    }

}) ;
