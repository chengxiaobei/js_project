(function(){

})() ;

require(['jquery', 'global', 'jsmart','sTopMemory'],function($,global,_,sTopMemory){
	//console.info(sTopMemory) ;
	jSmartRegister() ;
	//var sheetNo = getQueryString('sheetNo') ;
	var archives_list_tpl = new jSmart(document.getElementById('report_list').innerHTML) ;
	// 分页信息
	var page_no = 1;
    var page_size = 20;
    var total_page = 0 ;
    var isSearching = false ;
   
	// 页面渲染
	(function(){
			check_login_module() ;
			var phoneNo = RP.store.getItem('curr_user_info')['telephone'];
			var myUrl = global_path + "index.php/animalcurl/analysis_getTestingList";
			var p = {
				"phoneNo" : phoneNo
			} ;
			console.log(myUrl);
			console.log(p);
			commonAjax(myUrl,p).then(function(data){
				if(data && data.status && data.status =='2000' && data['data'] && data['data'].length > 0){
					renderHtml(data) ;
					RP.store.setItem('curr_archive_list',data['data'],'session') ;
				}
				else{
					console.log("22222")
					renderHtml([]) ;
					errorPageShow($('#wrap1')[0],'nodata') ;
				}
			}).fail(function(){
				console.log("111111");
				renderHtml([]) ;
				errorPageShow($('#wrap1')[0],'system') ;
			}) ;
	})() ;

	// 业务逻辑
	(function(){
		var sheetno;
		 //跳转详情页并传值
		$('#wrap1').on('click','.detail_button',function(){
			sheetno = $(this).attr('orderno');
			window.location.href = "query_report_detail.php?sheetno="+sheetno;
		})
		// 返回上一级
		$('#wrap1').on('click','.backButton',function(){
			// window.location.href = "index.php" ;
				window.history.go(-1) ;
			}) ;
		 $('#wrap1').on('click','.search_text',function(){
	  	  window.location.href="querysearch.php";
	  });
	})() ;

	// 页面渲染
	function renderHtml(data) {
		var res = archives_list_tpl.fetch(data) ;
		$('#wrap1').html(res) ;
		// 事件绑定
		eventsBind() ;
	}
   
	// 事件绑定
	function eventsBind(){
		// 分页事件绑定
		var startY = 0,
            endY = 0,
            offsetY = 0,
            pageSize = getViewport(),
            clientHeight = pageSize['height'],
            header_height = 44,
            footer_height = -20,
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop 
	}
	// 分页查询
	function getArchiveListByPageInfo(){
		var curr_archive_list = RP.store.getItem('curr_archive_list','session') ;
		console.info(curr_archive_list) ;
		if(!curr_archive_list){
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
		var url = global_path +  "index.php/personalcenter/analysis_list" ;
		commonAjax(url , params).then(function(data){
			if(data && data.status && data.status == "2000"){
				curr_archive_list['analysis_list'] = curr_archive_list['analysis_list'].concat(data['data']['analysis_list']) ;
				curr_archive_list['datetimes'] = dateTimeHandle(curr_archive_list['datetimes'],data['data']['datetimes'])  ;
				// curr_archive_list['page']['count'] = curr_archive_list['analysis_list'].length ;
				// curr_archive_list['page']['page_no'] = page_no ;
			}
			RP.store.setItem('curr_archive_list',curr_archive_list,'session') ;
			renderHtml(curr_archive_list) ;
            isSearching = false;
		}) ;
		//var curr_scrolltop = RP.store.getItem('curr_scrolltop') ;
		// if(curr_scrolltop){
		// 	$('html,body').animate({scrollTop: curr_scrolltop}, 600);
		// }
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

    // 时间处理
    function dateTimeHandle(dobj1,dobj2){
    	for(var k in dobj2){
    		if(!dobj1[k]){
    			dobj1[k] = dobj2[k] ;
    		}
    	}
    	return dobj1 ;
    }






	// jsmart扩展
	function jSmartRegister(){
		jSmart.prototype.registerPlugin("modifier","archive_handleDateTime",function(month,year){
			var d = new Date() ;
			if(d.getFullYear() == year && month == (d.getMonth()*1 + 1) ){
				return '本月' ;
			}
			if(d.getFullYear() == year){
				return month + '月' ;
			}
			return year + '年' + month + '月' ;
		});
	}


}) ;