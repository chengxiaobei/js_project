
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart'],function($,global,_){
	//#变量
	//区别资讯和学院
	var type = getQueryString('type');
	var fromModelpage = getQueryString('fromModelpage');
	//（_TOP_A_CONSULT 养殖咨询
	//_TOP_A_COLLEGE 养殖学院）
	var typecode = '';
	var categories_id = 0;//全局的类别id
	var page_size = 20;	
	var page_no = 0;
	var page_all = 1;
	var store=RP.store.getItem('aac_select');
	var diff=RP.store.getItem('aac_diff');
	RP.store.removeItem('aac_more_pic_index');
	//#模板
	var tpl_html_top = $('#jsmart_tpl_top').html();
	var tpl_html_content = $('#jsmart_tpl_content').html();
	//请求url
	 var urlcategories = global_path + "index.php/advicecenter/getArtcategories" ;
	 var urllist = global_path + "index.php/advicecenter/getArticlelist" ;
	
	if( type && type == 'advice' ){
		typecode = '_TOP_A_CONSULT';
		document.title = '养殖资讯';
		$('#title').html('养殖资讯');		
	}else{
		typecode = '_TOP_A_COLLEGE';
		document.title = '养殖学院';
		$('#title').html('养殖学院');
	}
	//$('html,body').scrollTop(RP.store.getItem('aac_index_scrolltop'));			
	// 页面渲染
	(function(){
	 
		 var paramscategories = {
		    modules_code:typecode	 
		 } ;

		 commonAjax(urlcategories , paramscategories).then(function(datacategories){
			   if(datacategories&&datacategories.status=="2000"){
				     var tpl_top = new jSmart(tpl_html_top);
					 var res_top = tpl_top.fetch(datacategories);
					 $('#topbar').html(res_top);
					 dealresult();
					 if(store&&diff==type){
						 categories_id=store;
					 }else{
						  categories_id = datacategories.data[0].categories_id;  
					 }	                               
	                 articlelist(categories_id,"more");
			   }else{
				   var error_html = getErrorPage('system',1) ;
				   $('.wrap').html(error_html) ;
			   }
				
                 
  	    }).fail(function(data){
  	    	var error_html = getErrorPage('system',1) ;
			$('.wrap').html(error_html) ;
  	    })
	
	})() ;
	function dealcontent(datalist){
		for(var i in datalist.data.art_List){
	    	 var taglist=[];
	    	 if(datalist.data.art_List[i].tags.indexOf(',')!= -1){
		    	 taglist= datalist.data.art_List[i].tags.split(',');
		    	 datalist.data.art_List[i].taglist=taglist;
	    	 }else{
	    		 datalist.data.art_List[i].taglist=taglist;
	    		 datalist.data.art_List[i].taglist[0]= datalist.data.art_List[i].tags;
	    	 }
	    	 if(datalist.data.art_List[i].title.length>36){
	    		 datalist.data.art_List[i].title=datalist.data.art_List[i].title.substring(0,36)+"……"; 
			 }
        }
	     console.log(datalist);
	     return datalist;
	}
	function dealresult(){
		if(store){
			 $(".sel_"+store).addClass('curr-li');
			 $(".sel_"+store).siblings().removeClass('curr-li');			
		}
		
	}
	
	//点击头部和下拉刷新
	function articlelist(categories_id,clicktype){
		if(typeof(categories_id)!='number'||typeof(page_no)!='number'||typeof(page_size)!='number'){
			 var error_html = getErrorPage('system',1) ;
 			 $('.wrap').html(error_html) ;
		}else{
			if(clicktype == "change"){
				page_no = 0;
			}
			 if(page_no<page_all){
				 page_no = page_no + 1;
			     var paramslist = {
				    modules_code:typecode,
				    categories_id:categories_id,
				    page_no:page_no,
				    page_size:page_size
				 } ;
			     if(clicktype == "change"){
			    	 $('.yzzx-newslist-con').addClass('border-deal')
			    	 loadingShow($('#content')[0]); 
				 }else if(clicktype == "more"&&page_no==1){
					  loadingShow($('.wrap')[0]) 
				 }		   
		         commonAjax(urllist , paramslist).then(function(datalist){
	                 $('#maincontent').show();
	                 $('.yzzx-newslist-con').removeClass('border-deal')
			    	 if(datalist&&datalist.status == '2000'){
	                    	 datalist = dealcontent(datalist);
	    					 var tpl_content = new jSmart(tpl_html_content);
	    					 var res_content = tpl_content.fetch(datalist);
	                    	 if(page_no == 1){
	                    		 loadingHide($('.wrap')[0]) 
	                    		 page_all = datalist.data.page.total_page;	                    	
		    					 $('#content').html(res_content);
		    					 console.log(RP.store.getItem('aac_index_scrolltop'))
	    						 if(fromModelpage == "detail"){
	    							//$(document).scrollTop(RP.store.getItem('aac_index_scrolltop'))
	    							$('html,body').animate({scrollTop:RP.store.getItem('aac_index_scrolltop')}, 0);
	    						 }else{
	    							RP.store.removeItem('aac_index_scrolltop')
	    						 }
	    					 }else{
		    					 $('#content').append(res_content);
	    					 }
	                    $('.yzzx-newslist-con').show();	 
	                    $('.public-none').hide();	 
					 }else if(datalist.status == '4001'||datalist.status == '4002'){
						 if(clicktype == "change"){
		    		    	 loadingHide($('#content')[0]); 
		    			 }else if(clicktype == "more"&&page_no==1){
		    				  loadingHide($('.wrap')[0]) 
		    			 }	
						 $('.public-none').show();
						 $('.yzzx-newslist-con').hide();
					 }else{
						 if(clicktype == "change"){
		    		    	 loadingHide($('#content')[0]); 
		    			 }else if(clicktype == "more"&&page_no==1){
		    				  loadingHide($('.wrap')[0]) 
		    			 }	
						 var error_html = getErrorPage('system',1) ;
						 $('.wrap').append(error_html) ;
					 }
		         }).fail(function(data){
	        	     if(clicktype == "change"){
	    		    	 loadingHide($('#content')[0]); 
	    			 }else if(clicktype == "more"&&page_no==1){
	    				  loadingHide($('.wrap')[0]) 
	    			 }	
		        	 var error_html = getErrorPage('system',1) ;
		 			 $('.wrap').html(error_html) ;
		         })
			  }else{
				  console.log('分页结束');
			  }
		}
		
		
	}
	function getViewPort(){
		if( document.compatMode == 'BackCompat'){
			return {
				width : document.body.clientWidth ,
				height : document.body.clientHeight 
			} ;
		}
		else{
			return {
				width: document.documentElement.clientWidth ,
				height : document.documentElement.clientHeight 
			} ;
		}
	}
	// 业务逻辑
	(function(){
		
		//点击跳转新闻详情
		$('.wrap').on('click','.newslist-ul li',function(){
			var article_code= $(this).attr("data-id");
			var scrollTop=$(document).scrollTop();
			console.log(scrollTop)//解决scroll 问题
			if(scrollTop == 0){
				scrollTop++;
			}
			RP.store.setItem('aac_index_scrolltop',scrollTop);
			window.location.href='detail.php?code='+article_code+"&type="+type+"&fromModelpage=index";
		}) ;	
		//点击跳转到搜索页面
		$('.wrap').on('click','#search',function(){
			window.location.href='search.php?type='+type;
		}) ;
		//点击顶部切换
		$('.wrap').on('click','#topbar li',function(){
			$(this).addClass('curr-li');
			$(this).siblings().removeClass('curr-li');
			categories_id = parseInt($(this).attr('data-code'));
			var left =  document.getElementsByName(categories_id)[0].getBoundingClientRect().left;//距页顶偏移量
			var scrollLeft = $('.column-div').scrollLeft();
			$('.column-div').animate({scrollLeft:left-10}, 600);	
			articlelist(categories_id,"change");
			var currselect=$('.curr-li').attr('data-code');
			RP.store.setItem('aac_select',currselect);
			RP.store.setItem('aac_diff',type);
		})
        $(window).scroll(function(){
	        if($(document).scrollTop()>=$(document).height()-$(window).height()){        
	        	articlelist(categories_id,"more");
	        }
        })
		
	})() ;

});