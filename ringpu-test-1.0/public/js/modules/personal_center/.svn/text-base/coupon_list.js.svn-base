(function(){

})() ;

require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,_){

	var page_no = 1;
    var page_size = 6;
    var total_page = 0 ;
    var isSearching = false ;

	var coupon_type = [
		{"1":"现金券"} ,
		{"2":"折扣券"} ,
		{"3":"满减券"} ,
		{"4":"动物诊疗满减券"} ,
		{"5":"动物诊疗满减券"} ,
		{"6":"动物诊疗满减券"}
	] ;

	var coupon_list_tpl = new jSmart(document.getElementById('coupon_list_tpl').innerHTML) ;

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;

	// 页面初始化
	(function(){
		var curr_coupon_list = RP.store.getItem('curr_coupon_list','session') ;
		var url = global_path + "index.php/personalcenter/getcoupons" ;
		var p = {
			"page_no":1 ,
			"page_size":page_size
		} ;

		commonAjax(url,p).then(function(data){
			console.info(data) ;
			if(data && data.status && data.status == "2000"){
				total_page = data['data']['page']['total_page'] ;
				renderData(data['data']['list']) ;
				RP.store.setItem('curr_coupon_list',data['data']['list'],'session') ;
			}
			else{
				renderData([]) ;
				var error_html = getErrorPage('nodata') ;
				$('#wrap1 section').hide() ;
				$('#wrap1').append(error_html) ;
			}
		}).fail(function(){
			renderData([]) ;
			var error_html = getErrorPage('system') ;
			$('#wrap1 section').hide() ;
			$('#wrap1').append(error_html) ;
		}) ;

	})() ;




	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;

		// 使用规则
		$('#wrap1').on('click','#coupon_use_rules',function(){
			$('.wrap').hide() ;
			$('#wrap2').show() ;
		}) ;
		$('#wrap2').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap1').show() ;
		}) ;

	})() ;


	// 渲染页面
	function renderData(data){
		var list = {
			list : data
		} ;
		var res = coupon_list_tpl.fetch(list) ;
		$('#wrap1').html(res) ;
		// 事件绑定
		eventBind() ;
	}

	// 事件绑定
	function eventBind(){
		// 分页事件绑定
		var startY = 0,
            endY = 0,
            offsetY = 0,
            pageSize = getViewport(),
            clientHeight = pageSize['height'],
            header_height = 44,
            footer_height = -50,
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        document.querySelector('#coupon_list').addEventListener('touchstart', function (evt) {
            if (isSearching) return;
            startY = evt.changedTouches[0].pageY;
        });

        document.querySelector('#coupon_list').addEventListener('touchmove', function (evt) {
            if (isSearching) return;
            endY = evt.changedTouches[0].pageY;
            offsetY = endY - startY;
            if (offsetY >= 0) return;

            var rp = document.querySelector('#coupon_list').getBoundingClientRect();
            var orgList_bottom = rp['bottom'];
            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
                //为了兼容Android 4.0 touchend的不执行bug...
                evt.preventDefault();
            }
        });

         document.querySelector('#coupon_list').addEventListener('touchend', function (evt) {
            if (isSearching) return;
            endY = evt.changedTouches[0].pageY;
            offsetY = endY - startY;
            if (offsetY >= 0) return;

            var rp = document.querySelector('#coupon_list').getBoundingClientRect();
            var orgList_bottom = rp['bottom'];
            //滑动到最底部
            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
                getCouponListByPageInfo();
            }
        });
	}

	// 分页
	function getCouponListByPageInfo(){
		var curr_coupon_list = RP.store.getItem('curr_coupon_list','session') ;
		if(!curr_coupon_list){
			return ;
		}
		isSearching = true;
		page_no = page_no + 1 ;
		if(page_no > total_page){
			// d_alert.setTitle('没有更多数据') ;
			// d_alert.show() ;
			return ;
		}
		
		var url = global_path + "index.php/personalcenter/getcoupons" ;
		var p = {
			page_no : page_no ,
			page_size : page_size
		} ;

		commonAjax(url,p).then(function(data){
			if(data && data.status && data.status == "2000"){
				curr_coupon_list = curr_coupon_list.concat(data['data']['list']) ;
			}
			RP.store.setItem('curr_coupon_list',curr_coupon_list,'session') ;
			renderData(curr_coupon_list) ;
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



}) ;