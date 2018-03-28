(function(){

})() ;


require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,_){

	var feedback_list_tpl = new jSmart(document.getElementById('feedback_list_tpl').innerHTML) ;

	// 分页信息
	var page_no = 1;
    var page_size = 21;
    var total_page = 0 ;
    var isSearching = false ;

    // 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;

	// 页面初始化
	(function(){
		var curr_feedproduct_list = RP.store.getItem('curr_feedproduct_list','session') ;
		if(curr_feedproduct_list){
			renderData(curr_feedproduct_list) ;
		}
		else{
			var url = global_path + "index.php/personalcenter/getProductList" ;
			var p = {
				page_no : page_no ,
				page_size : page_size
			} ;
			commonAjax(url,p).then(function(data){
				console.info(data) ;
				var list = [];
				if(data && data.status && data.status == "2000"){
					list = data['data']['list'] ;
					RP.store.setItem('curr_feedproduct_list', list, 'session') ;
					total_page = data['data']['page']['total_page'] ;
					renderData(list) ;
				}
				else{
					renderData([]) ;
					errorPageShow($('#wrap1')[0],'nodata');
				}
			}).fail(function(){
				renderData([]) ;
				errorPageShow($('#wrap1')[0],'system');
			}) ;
		}
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			// window.location.href = "index.php" ;
			window.history.go(-1) ;
		}) ;

		$('#wrap1').on('click','.product_item',function(){
			var productcode = $(this).attr('data-productcode') ;
			var productname = $(this).attr('data-productname') ;
			var feedback_id = $(this).attr('data-feedback_id') ;

			window.location.href = "answer_question.php?productcode="+productcode+"&feedback_id="+feedback_id + "&producttitle=" + productname ;
		}) ;
		
	})() ;

	// 页面渲染
	function renderData(list){
		var data = {
			data : list
		} ;
		var res = feedback_list_tpl.fetch(data) ;
		$('#wrap1').html(res) ;
		// 事件绑定
		eventBinds() ;
	}

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

        document.querySelector('#feedback_list').addEventListener('touchstart', function (evt) {
            if (isSearching) return;
            startY = evt.changedTouches[0].pageY;
        });

        document.querySelector('#feedback_list').addEventListener('touchmove', function (evt) {
            if (isSearching) return;
            endY = evt.changedTouches[0].pageY;
            offsetY = endY - startY;
            if (offsetY >= 0) return;

            var rp = document.querySelector('#feedback_list').getBoundingClientRect();
            var orgList_bottom = rp['bottom'];
            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
                //为了兼容Android 4.0 touchend的不执行bug...
                evt.preventDefault();
            }
        });

         document.querySelector('#feedback_list').addEventListener('touchend', function (evt) {
            if (isSearching) return;
            endY = evt.changedTouches[0].pageY;
            offsetY = endY - startY;
            if (offsetY >= 0) return;

            var rp = document.querySelector('#feedback_list').getBoundingClientRect();
            var orgList_bottom = rp['bottom'];
            //滑动到最底部
            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
                getFeedListByPageInfo();
            }
        });
	}


	// 分页查询
	function getFeedListByPageInfo(){
		var curr_feedproduct_list = RP.store.getItem('curr_feedproduct_list','session') ;
		if(!curr_feedproduct_list){
			return ;
		}
		page_no = page_no + 1 ;
		if(page_no > total_page){
			d_alert.setTitle('没有更多数据') ;
			d_alert.show() ;
			return ;
		}
		var url = global_path + "index.php/personalcenter/getProductList" ;
		var p = {
			page_no : page_no ,
			page_size : page_size
		} ;

		commonAjax(url , params).then(function(data){
			if(data && data.status && data.status == "2000"){
				curr_feedproduct_list = curr_feedproduct_list.concat(data['data']['list']) ;
			}
			RP.store.setItem('curr_feedproduct_list',curr_feedproduct_list,'session') ;
			renderData(curr_feedproduct_list) ;
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