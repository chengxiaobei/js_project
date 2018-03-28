
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

	var personal_center_tpl = new jSmart(document.getElementById('personal_center_tpl').innerHTML) ;

	var d_confrim_guide = new Dialog({type:'confirm_guide'}) ;

	// 页面渲染
	(function(){	

		// 是否登录检测
		check_login_module() ;

		var curr_user_info = RP.store.getItem('curr_user_info') ;  
		console.info(curr_user_info) ;
		var data = {
			data:curr_user_info
		} ;
      //为什么加&& !curr_user_info['avatar']
		if(curr_user_info){
			getLatestUserInfo().then(function(data_user){
				if(data_user && data_user.status && data_user.status =="2000"){
					RP.store.setItem('curr_user_info',data_user['data']) ;
					var res = personal_center_tpl.fetch(data_user) ;
					$('#wrap1').html(res) ;
				}
			}) ;		
		}
		else{
			var res = personal_center_tpl.fetch(data) ;
			$('#wrap1').html(res) ;
			if(curr_user_info){
			// 查询最新用户信息
				getLatestUserInfo().then(function(data_user){
					if(data_user && data_user.status && data_user.status =="2000"){
						RP.store.setItem('curr_user_info',data_user['data']) ;
					}
				}) ;
			}
		}
		getCouponCount() ;

	})() ;



	// 业务逻辑
	(function(){	
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;
		// 个人信息
		$('#wrap1').on('click','#personal_message',function(){
			window.location.href = "personal_message.php" ;
		}) ;
		// 档案检测
		$('#wrap1').on('click','.one',function(){
			window.location.href = "archives_list.php" ;
		}) ;
		$('#wrap1').on('click','.newone',function(){
			window.location.href = "archives_listnew.php" ;
		}) ;
		$('#wrap1').on('click','.newtwo',function(){
			window.location.href = "query_test_report.php" ;
		}) ;
		// 购物订单
		$('#wrap1').on('click','#orders_list',function(){
			window.location.href = "orders_list.php" ;
		}) ;
		// 收藏的文章
		$('#wrap1').on('click','#articles_list',function(){
			// console.info(222) ;
			window.location.href = "articles_list.php" ;
		}) ;
		// 优惠券
		$('#wrap1').on('click','#coupons_list',function(){
			window.location.href = "coupon_list.php" ;
		}) ;
		// 收货地址管理
		$('#wrap1').on('click','#goods_receipt_list',function(){
			window.location.href= "receiver_areas_list.php" ;
		}) ;
		// 产品反馈
		$('#wrap1').on('click','#product_feedback_list',function(){
			window.location.href = "product_feedback.php" ;
		}) ;
		// 设置
		$('#wrap1').on('click','#settings_list',function(){
			window.location.href = "settings_list.php" ;
		}) ;
		// 意见反馈
		$('#wrap1').on('click','#opinion_feedback_list',function(){
			window.location.href = "opinion_feedback.php" ;
		}) ;
		// 消息中心
		$('#wrap1').on('click','#messages_list',function(){
			window.location.href = "messages_list.php" ;
		}) ;
		// 跳转到签到
		$('#wrap1').on('click','#daysign',function(e){
			e.stopPropagation();
			window.location.href = "sign_in.php" ;
		}) 
		// 跳转到积分明细
		$('#wrap1').on('click','#signrecord',function(){
			window.location.href = "signrecord.php" ;
		}) ;
		// 登出
		$('#wrap1').on('click','#logout',function(){
			// console.info(111) ;
			
			var confirm_call = function(){
				var url = global_path + "index.php/personalcenter/logout" ;
				var p = {} ;
				commonAjax(url,p).then(function(data){
					// console.info(data) ;
					if(data && data.status && data.status == "2000"){
						RP.store.removeItem('curr_user_info') ;
						window.location.href = "login.php" ;
					}
				}) ;
			}
			d_confrim_guide.setTitle('是否确定退出?') ;
			d_confrim_guide.confirm_fn = confirm_call ;
			d_confrim_guide.show() ; 
		}) ;
	})() ;


	// 获取优惠券总数量
	function getCouponCount(){
		var curr_coupon_count = RP.store.getItem('curr_coupon_count','session') ;
		// if(!curr_coupon_count){
			var url = global_path + "index.php/personalcenter/getcoupons" ;
			var p = {
				"page_no":1 ,
				"page_size":6
			} ;

			commonAjax(url,p).then(function(data){
				if(data && data.status && data.status == "2000"){
					RP.store.setItem('curr_coupon_count',data['data']['page']['count'],'session') ;
					$('#curr_coupon_count').html(data['data']['page']['count']) ;
				}
			}) ;
		// }
		// else{
		// 	$('#curr_coupon_count').html(curr_coupon_count) ;
		// }
	}

	function getLatestUserInfo(){
		var url = global_path + 'index.php/personalcenter/get_newinfo' ;
		var p = {} ;
		return commonAjax(url,p);
	}
});