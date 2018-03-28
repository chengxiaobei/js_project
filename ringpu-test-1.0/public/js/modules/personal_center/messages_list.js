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

require(['jquery', 'global', 'jsmart'],function($,global,_){

	// 分页信息
	var page_no = 1;
    var page_size = 20;
    var total_page = 0 ;
    var isSearching = false ;

    var messages_list_tpl = new jSmart(document.getElementById('messages_list_tpl').innerHTML) ;



	//页面初始化
	(function(){
		var url = global_path + 'index.php/personalcenter/getMessage' ;
		var p = {
			page_no : page_no ,
			page_size : page_size
		} ;
		commonAjax(url,p).then(function(data){
			console.info(data) ;
			var res ;
			if(data && data.status && data.status == '2000' && data['data']['list']){
				renderHTMl(data['data']['list']) ;
				total_page = data['data']['page']['total_page'] ; 
				RP.store.setItem('curr_message_list',data['data']['list'],'session') ;
			}
			else{
				renderHTMl([]) ;
				errorPageShow($('#wrap1')[0],'nodata') ; 
			}
		}).fail(function(){
			renderHTMl([]) ;
			errorPageShow($('#wrap1')[0],'system') ;
		}) ;
	})() ;


	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			//window.history.go(-1) ;
			window.location.href='index.php' ;
		}) ;
		//点击每条消息的时候
		$('#wrap1').on('click','.xxzx-logo',function(){
			var type = $(this).attr('data-type') ;
			var id = $(this).attr('data-id') ;
			var modules_code = $(this).attr('data-modules_code');
			if(modules_code == '_TOP_A_CONSULT'){
				modules_code = 'advice';
			}else{
				modules_code = 'college';
			}
			var ms20 = new RegExp('MS20') ;
			var ms10 = new RegExp('MS10') ;
			var ms40 = new RegExp('MS40') ;
			if(ms20.test(type)){
				// if(type == 'MS20007'){
				// 	return ;
				// }else{
					window.location.href='archives_detail.php?id=' + id + '&fromModelpage=messages_list' ;
				//}
			}
			if(ms10.test(type)){
				if(type == 'MS10001'){
					window.location.href='order_detail.php?order_code=' + id + '&fromModelpage=messages_list' ;	
				}else if(type == 'MS10002'){
					window.location.href='order_logistics.php?orderNum=' + id + '&fromModelpage=messages_list' ;
				}else if(type == 'MS10003'){
					window.location.href='coupon_list.php?fromModelpage=messages_list' ;
				}else{
					return ;
				}
			}
			if(ms40.test(type)){
				window.location.href='../advice_and_college/detail.php?code='+ id +'&type='+modules_code+"&fromModelpage=messages_list";
			}
		}) ;
	})() ;


	function renderHTMl(list){
		var d = {
			data : list 
		} ;
		var res = messages_list_tpl.fetch(d);
		$('#wrap1').html(res) ;
		$('.xxzx-time').each(function(i){
			if($(this).html() == $('.time_'+(i-1)).html()){
				$(this).hide();
				$(this).parent().attr('style','margin-top:0px;border:0px')
				$(this).parent().prev().attr('style','margin-top:10px;border-bottom:0px')
				console.log($(this).siblings('.xxzx-con').find("ul li div").eq(0).attr('style','border-top:1px solid #e2e2e2'))
				
			}
		})
		eventsBind() ;
	}

	function eventsBind(){
		// 分页事件绑定
		var startY = 0,
            endY = 0,
            offsetY = 0,
            pageSize = getViewport(),
            clientHeight = pageSize['height'],
            header_height = 44,
            footer_height = -20,
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        document.querySelector('#messages_list').addEventListener('touchstart', function (evt) {
            if (isSearching) return;
            startY = evt.changedTouches[0].pageY;
        });

        document.querySelector('#messages_list').addEventListener('touchmove', function (evt) {
            if (isSearching) return;
            endY = evt.changedTouches[0].pageY;
            offsetY = endY - startY;
            if (offsetY >= 0) return;

            var rp = document.querySelector('#messages_list').getBoundingClientRect();
            var orgList_bottom = rp['bottom'];
            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
                //为了兼容Android 4.0 touchend的不执行bug...
                evt.preventDefault();
            }
        });

        document.querySelector('#messages_list').addEventListener('touchend', function (evt) {
            if (isSearching) return;
            endY = evt.changedTouches[0].pageY;
            offsetY = endY - startY;
            if (offsetY >= 0) return;

            var rp = document.querySelector('#messages_list').getBoundingClientRect();
            var orgList_bottom = rp['bottom'];
            //滑动到最底部
            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
                getMessageListByPageInfo();
            }
        });

	}


	// 分页查询
	function getMessageListByPageInfo(){
		var curr_message_list = RP.store.getItem('curr_message_list','session') ;
		if(!curr_message_list){
			return ;
		}
		isSearching = true;
		page_no = page_no + 1 ;
		if(page_no > total_page){
			return ;
		}
		var params = {
			page_no : page_no ,
			page_size : page_size
		} ;
		var url = global_path +  "index.php/personalcenter/getMessage" ;

		commonAjax(url , params).then(function(data){
			if(data && data.status && data.status == "2000"){
				curr_message_list = curr_message_list.concat(data['data']['list']) ;
			}
			RP.store.setItem('curr_message_list',curr_message_list,'session') ;
			renderHTMl(curr_message_list) ;
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

    // jsmart扩展
	(function(){
		jSmart.prototype.registerPlugin("modifier","getTitle",function(content){
			// console.info(content) ;
			if(!content) return '' ;
			content = JSON.parse(content) ;
			// console.info(content) ;
			return content['title'] || '' ;
		});

		//获取详情id
		jSmart.prototype.registerPlugin("modifier","getMsgId",function(content){
			// console.info(content) ;
			if(!content) return '' ;
			content = JSON.parse(content) ;
			// console.info(content) ;
			// var test_id = new RegExp('test_id') ;
			// var order_code = new RegExp('order_code') ;
			// console.info(content) ;
			// console.info(test_id.test(content)) ;
			if(content['extras']['test_id']){
				return content['extras']['test_id'];
			}else if(content['extras']['order_code']){
				return content['extras']['order_code'] ;
			}else if(content['extras']['article_code']){
				return content['extras']['article_code'] ;
			}
			else{
				return '' ;
			}
		});
		jSmart.prototype.registerPlugin("modifier","getModules_code",function(content){
			if(!content) return '' ;
			content = JSON.parse(content) ;
			// console.info(content) ;
			return content['extras']['modules_code'] || '' ;
		});

	})() ;



}) ;