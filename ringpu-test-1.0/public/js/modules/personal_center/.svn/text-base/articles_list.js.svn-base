(function(){

})() ;

require(['jquery', 'global', 'jsmart','dialog'],function($,global,_,_){

	var page_no = 1;
    var page_size = 20;
    var total_page = 0 ;
    var isSearching = false ;

	var article_type = ["纯文本","单图片","多图片","HTML"] ;

	var article_list_tpl = new jSmart(document.getElementById('article_list_tpl').innerHTML) ;

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;

	// 页面渲染
	(function(){
		var url = global_path + "index.php/personalcenter/getArtFavoriteList" ;

		var p = {
			"page_no":page_no ,
			"page_size":page_size
		} ;

		commonAjax(url,p).then(function(data){
			console.info(data) ;
			if(data && data.status && data.status == "2000" 
					&& data['data'] && data['data']['artfav_List']){
				data = dealcontent(data) ;
				renderHTML(data['data']['artfav_List']) ;
				total_page = data['data']['page']['total_page'] ;
				RP.store.setItem('curr_article_list',data['data']['artfav_List'],'session') ;
			}
			else{
				renderHTML([]) ;
				errorPageShow($('#wrap1')[0],'nodata') ;
			}
		}).fail(function(){
			renderHTML([]) ;
			errorPageShow($('#wrap1')[0],'system') ;
		}) ;


	})() ;

	// 业务逻辑
	(function(){
		var timer = null ;

		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;

		$('#wrap1').on('click','.article_item',function(){
			var code = $(this).attr('data-code') ;
			var status = $(this).attr('data-status') ;
			if(status && status == '2'){
				d_alert.setTitle('该文章不存在或已被删除') ;
				d_alert.show() ;
				return ;
			}
			else{
				window.location.href = "../advice_and_college/detail.php?code="+code + "&type=" ;
			}
		}) ;

		$('#wrap1').on('click','#submit',function(){
			// $('.cancel_collection').hide() ;
			var code = $(this).attr('data-code') ;
		}) ;

		$('#wrap1').on('click','#cancel',function(){
			$('.cancel_collection').hide() ;
		}) ;

	})() ;


	// 渲染页面
	function renderHTML(list){
		var d = {
			artfav_List : list
		} ;
		var res = article_list_tpl.fetch(d) ;
		$('#wrap1').html(res) ;
		imgLazyLoad() ;
		// 滑动事件绑定
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
            startTime ,
            endTIme ,
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

		// 长按取消关注
		// []['forEach'].call(document.querySelectorAll('.article_item'),function(v){
		// 	var startTime ,
		// 		endTIme ;

		// 	v.addEventListener('touchstart',function(e){
		// 		e.preventDefault() ;
		// 		if (isSearching) return;
		// 		startTime = new Date() ;
		// 		startY = e.changedTouches[0].pageY;
		// 	}) ;

		// 	v.addEventListener('touchmove',function(e){
		// 		if (isSearching) return;
	 //            endY = e.changedTouches[0].pageY;
	 //            offsetY = endY - startY;

	 //            var rp = document.querySelector('#article_list').getBoundingClientRect();
	 //            var orgList_bottom = rp['bottom'];
	 //            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
	 //                //为了兼容Android 4.0 touchend的不执行bug...
	 //                e.preventDefault();
	 //            }
		// 	}) ;

		// 	v.addEventListener('touchend',function(e){
		// 		if (isSearching) return;
		// 		endTIme = new Date() ;
		// 		var diff_time = endTIme.getTime() - startTime.getTime() ;
		// 		endY = e.changedTouches[0].pageY;
  //           	offsetY = endY - startY;

		// 		if(diff_time>=2000 && !offsetY){
		// 			alert(3333) ;
		// 			$('.cancel_collection').show() ;
		// 		}
		// 		else if(!offsetY){
		// 			alert(2222) ;
		// 			var code = $(this).attr('data-code') ;
		// 			var status = $(this).attr('data-status') ;
		// 			if(status && status == '2'){
		// 				d_alert.setTitle('该文章不存在或已被删除') ;
		// 				d_alert.show() ;
		// 				return ;
		// 			}
		// 			else{
		// 				window.location.href = "../advice_and_college/detail.php?code="+code + "&type=" ;
		// 			}
		// 		}else{
		// 			alert(1111) ;
		// 			var rp = document.querySelector('#article_list').getBoundingClientRect();
		//             var orgList_bottom = rp['bottom'];
		//             alert('orgList_bottom=' + orgList_bottom) ;
		//             alert('(clientHeight * 1 - footer_height)=' + (clientHeight * 1 - footer_height)) ;
		//             alert('isSearching=' + isSearching) ;
		//             //滑动到最底部
		//             if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
		//             	alert(0000) ;
		//                 getArticleListByPageInfo();
		//             }
		// 		}
		// 	}) ;
		// }) ;

        document.querySelector('#article_list').addEventListener('touchstart', function (evt) {
        	// evt.preventDefault() ;
            if (isSearching) return;
            startY = evt.changedTouches[0].pageY;
            startTime = new Date() ;
        });

        document.querySelector('#article_list').addEventListener('touchmove', function (evt) {
            if (isSearching) return;
            endY = evt.changedTouches[0].pageY;
            offsetY = endY - startY;
            if (offsetY > 0) return;

            var rp = document.querySelector('#article_list').getBoundingClientRect();
            var orgList_bottom = rp['bottom'];
            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
                //为了兼容Android 4.0 touchend的不执行bug...
                evt.preventDefault();
            }
        });

        document.querySelector('#article_list').addEventListener('touchend', function (evt) {
            if (isSearching) return;
            endY = evt.changedTouches[0].pageY;
            offsetY = endY - startY;
            endTIme = new Date() ;
			var diff_time = endTIme.getTime() - startTime.getTime() ;
            if (offsetY > 0) return;

    //         if(diff_time>=2000 && !offsetY){
    //         	$('.cancel_collection').show() ;
    //         }
    //         else if(!offsetY){
    //         	var $article_item = $(this) ; 
    //         	if(!$(this).is('.article_item')){
    //         		$article_item = $(this).closest('.article_item') ;
    //         	}
    //         	var code = $article_item.attr('data-code') ;
				// var status = $article_item.attr('data-status') ;
				// if(status && status == '2'){
				// 	d_alert.setTitle('该文章不存在或已被删除') ;
				// 	d_alert.show() ;
				// 	return ;
				// }
				// else{
				// 	window.location.href = "../advice_and_college/detail.php?code="+code + "&type=" ;
				// }
    //         }
    //         else{
            	var rp = document.querySelector('#article_list').getBoundingClientRect();
	            var orgList_bottom = rp['bottom'];
	            //滑动到最底部
	            if (orgList_bottom <= (clientHeight * 1 - footer_height) && !isSearching) {
	                getArticleListByPageInfo();
	            }
            // }
        });

	}


	// 分页查询
	function getArticleListByPageInfo(){
		var curr_article_list = RP.store.getItem('curr_article_list','session') ;
		if(!curr_article_list){
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
		var url = global_path +  "index.php/personalcenter/getArtFavoriteList" ;

		commonAjax(url , params).then(function(data){
			if(data && data.status && data.status == "2000" 
					&& data['data'] && data['data']['artfav_List']){
				curr_article_list = curr_article_list.concat(data['data']['artfav_List']) ;
			}
			RP.store.setItem('curr_article_list',curr_article_list,'session') ;
			renderHTML(curr_article_list) ;
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





	function dealcontent(datalist){
		for(var i in datalist.data.artfav_List){
	    	 var taglist=[];
	    	 if(datalist.data.artfav_List[i].tags.indexOf(',')!= -1){
		    	 taglist= datalist.data.artfav_List[i].tags.split(',');
		    	 datalist.data.artfav_List[i].taglist=taglist;
	    	 }else{
	    		 datalist.data.artfav_List[i].taglist=taglist;
	    		 datalist.data.artfav_List[i].taglist[0]= datalist.data.artfav_List[i].tags;
	    	 }
	    	 if(datalist.data.artfav_List[i].title.length>36){
	    		 datalist.data.artfav_List[i].title=datalist.data.artfav_List[i].title.substring(0,36)+"……"; 
			 }
        }
	    return datalist;
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