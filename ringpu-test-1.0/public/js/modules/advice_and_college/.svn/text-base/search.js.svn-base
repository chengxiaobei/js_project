
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart'],function($,global,_){

	var type = getQueryString('type');
	//var searchresult = RP.store.getItem('aac_search') ;
	//var searchtitle = RP.store.getItem('aac_title') ; 
	var title = '';
	var typecode = '';
	var page_size = 20;	
	var page_no = 0;
	var page_all = 1;
	if( type && type == 'advice' ){
		typecode = '_TOP_A_CONSULT';			
	}else{
		typecode = '_TOP_A_COLLEGE';
	}
	//#模板
	var tpl_html_content= $('#jsmart_tpl_content').html();
	//#请求url
	var urlgetarticlebytitle = global_path + "index.php/advicecenter/getArticlebytitle";
	// 页面渲染
	(function(){	


//		if(searchresult){
//			 var tpl_content = new jSmart(tpl_html_content);
//			 var res_content = tpl_content.fetch(searchresult);						 
//			 $('.main-section').html(res_content);
//			 $('#searchtext').val(searchtitle);
//		}
	})() ;
	
	 function search(typecode,title){
		 if(page_no<page_all){
			 page_no = page_no + 1;
	         var params = {
			   modules_code:typecode,
			   title:title,
			   page_no:page_no,
		       page_size:page_size
			 } ;
	         if(page_no == 1){
	        	 loadingShow($('.main-section')[0]);
	         }
		    commonAjax(urlgetarticlebytitle , params ).then(function(data){
			 	if(data&&data.status=="2000"){
			 			if(page_no == 1){
				 			 page_all = data.data.page.total_page;
					 		 data=dealcontent(data);
					 		 var tpl_content = new jSmart(tpl_html_content);
							 var res_content = tpl_content.fetch(data.data);
							 //RP.store.setItem('aac_search',data.data);
							 //RP.store.setItem('aac_title',title);
							 $('.main-section').html(res_content);
			 			}else{
			 				 data=dealcontent(data);
					 		 var tpl_content = new jSmart(tpl_html_content);
							 var res_content = tpl_content.fetch(data.data);
							 $('#content').append(res_content);
			 			}
			 	}else if(data&&data.status=="4002"){
			 		 if(page_no == 1){
			        	 loadingHide($('.main-section')[0]);
			         }
			 		 var tpl_content = new jSmart(tpl_html_content);
					 var res_content = tpl_content.fetch(data.data);
					 $('.main-section').html(res_content);	
			 	}else{
			 		if(page_no == 1){
			        	 loadingHide($('.main-section')[0]);
			         }
			 		var error_html = getErrorPage('system',2) ;
					$('.wrap').append(error_html) ;
			 	}
			 	 
		    }).fail(function(data){
		    	 if(page_no == 1){
		        	 loadingHide($('.main-section')[0]);
		         }
		    	var error_html = getErrorPage('system',2) ;
				$('.wrap').append(error_html) ;
		    })
	    
		 }else{
			 console.log('分页结束');
		 }
	 }
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

	// 业务逻辑
	(function(){
		//点击返回
		$('.wrap').on('click','.back-btn',function(){

			var timestamp=new Date().getTime();
			window.location.href="index.php?type="+type+"&time="+timestamp;
	    })
	    //点击清除按钮
	    $('.wrap').on('click','.clear-btn',function(){
	    	$('#searchtext').val('');
	    })
	    //点击搜索按钮 
	    $('.wrap').on('click','#searchbutton',function(){
	    	title=$.trim($('#searchtext').val());
	    	if(title&&title!=""&&title!=" "){
	    		page_no = 0;
	    		search(typecode,title);
	    	}else{
	    		$('#searchtext').val("");
	    	}
	    
	    });
		//点击跳转新闻详情
		$('.wrap').on('click','.newslist-ul li',function(){
			var article_code= $(this).attr("data-id");
			window.location.href='detail.php?code='+article_code+"&type="+type+"&fromModelpage=search";
		}) ;
		 $(window).scroll(function(){			  
		     if($(document).scrollTop()>=$(document).height()-$(window).height()&&title&&title!=""&&title!=" "){        
		    	 search(typecode,title);
	         } 
         })
		
	})() ;

});