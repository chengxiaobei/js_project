(function(){
	
})
require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,_){
//	jSmartRegister() ;
	var fromModelPage = getQueryString('fromModelPage') ;
	var sheetNo = getQueryString('sheetNo');
	var archives_list_tpl = new jSmart(document.getElementById('archives_list_tpl').innerHTML) ;
	// 分页信息
	var page_no = 1;
    var page_size = 20;
    var total_page = 0 ;
    var isSearching = false ;
	// 页面渲染
	(function(){
		console.log(sheetNo);
			var myUrl = global_path + "index.php/animalcurl/analysis_getSheetDetail";
			var p = {
				"sheetNo" : sheetNo
			} ;
			console.log(myUrl);
			console.log(p);
			commonAjax(myUrl,p).then(function(data){
				console.log(data);		
				if(data && data.status && data.status =='2000' && data['data']){
					renderHtml(data['data']) ;
				}else{
					renderHtml([]) ;
					errorPageShow($('#wrap1')[0],'nodata') ;
				}
			}).fail(function(){
				errorPageShow($("#wrap1")[0],'system',2);
			}) ;

	})() ;
	//业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(e){
			
			console.log('2');
			// window.location.href = "index.php" ;
			if(fromModelPage==null){
				window.history.go(-1) ;
			}else if(fromModelPage){
				window.location.href="../animal_cure/index.php";
			}
		}) ;
		//$('#wrap1').on('click','')
		//切换功能
		$('#wrap1').on('click','.list-item',function(){
			var a = $(this).index();
		  $(".detail_inspection_report_left").find(".list-item").css({"background":"#D9D9D9","color":"#000"});
	 	  $(".detail_inspection_report_left .list-item").eq(a).css({"background":"#fff","color":"#1FA8EC"});
		  $(".detail_inspection_report_right").css({"z-index":"0"});
 	 	  $(".detail_inspection_report_right").eq(a).css({"z-index":"10"});
			//?type=" + type + "&id=" + id;
		}) ;
		$('#wrap1').on('click','.reg-btn',function(){
			window.location.href="query_report_detail.php?sheetNo="+sheetNo;
		})
	})() ;
	// 页面渲染
	function renderHtml(data) {
		var res = archives_list_tpl.fetch(data) ;
		$('#wrap1').html(res) ;
		// 事件绑定
		//eventsBind() ;
	}
})
