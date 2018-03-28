
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart','sTopMemory','swiper'],function($,global,_,sTopMemory,swiper){
	var type = getQueryString('type');
	var from = getQueryString('from');
	var share = getQueryString('share');
	var platform = getQueryString('platform');
	var page_size = 30;	
	var page_no = 0;
	var page_all = 1;
	var scroll = "no";//是否滚动
	var more_pic_index = 0;
	var article_code = getQueryString('code');	//获取详情的id
	var fromModelpage = getQueryString('fromModelpage');
	var curr_user_info = RP.store.getItem('curr_user_info') ;
	var more_pic_index_store = RP.store.getItem('aac_more_pic_index') ;
	var RP_scrollTopMemorys = RP.store.getItem('RP_scrollTopMemorys') ;
	var ua = navigator.userAgent.toLowerCase();
	var typecode = '';
	var title = '';//记录文章的标题
	var format='';
	var to_nickname=''
	var comment_code='';
	var sharetitle='';
	var shareimg='';
	var sharedes='';
	//var shareimg='http://m.ringpu.com/ringpu/public/images/lxwm-logoing.png';
	//#url
	if((window.location.href).indexOf('https')==-1){
		global_path = global_path_old;
	}
	var url = global_path + "index.php/advicecenter/getArticledetail";
	var urlview = global_path + "index.php/advicecenter/getArticleview";
	var urladdarticle = global_path + "index.php/advicecenter/addArticle";
	var urldelarticle = global_path + "index.php/advicecenter/delArticle";
	var urladdcomments = global_path + "index.php/advicecenter/addComments";
	var urlgetcomments = global_path + "index.php/advicecenter/getComments";
	var urlgetArticleShare = global_path + "index.php/advicecenter/getArticleShare";
	// var urlshareinit = global_path + "index.php/wxshare/shareinit";
	var urlshareinit = global_path + "wx_share.php";
	//#模板
	var tpl_html_content= $('#jsmart_tpl_content').html();
	var tpl_html_commentlist= $('#jsmart_tpl_commentlist').html();
	if( type && type == 'advice' ){
		typecode = '_TOP_A_CONSULT';			
	}else{
		typecode = '_TOP_A_COLLEGE';
	}
	if(share == 'share'){
		 $('.topdownload').show();
	}
	if(from == 'app'){
  	   $('header').hide();
  	   $('.main-section').css('padding-bottom','0px');
  	   $('.main-section').css('margin-top','0px'); 	  
    }else{
       $('header').show();
    }
	
	// 页面渲染
	(function(){	

		// 是否登录检测
		//check_login_module() ;
		//wxshare();
		redetailcom('frist');

	})() ;
	function sharesuccess(){
		   var params = {
					type_code:"RP_SCORE_BY_A_SHARE",
		   			  article_code:article_code
		   } ;
		    commonAjax(urlgetArticleShare , params ).then(function(data){
		   	 if(data&&data.status=="2000"){
		   		if(data.data.is_show != 0){
		   			 getPointHtml("分享成功",data.data.score,$('.main-section')[0]);
		   		 }	 	 	 
		   	}else{
			   var error_html = getErrorPage('system',2) ;
			   $('.wrap').append(error_html) ;
		   		}
		   	}).fail(function(data){
			   	var error_html = getErrorPage('system',2) ;
				$('.wrap').append(error_html) ;
		   	})
	}
	function wxshare(){
 		 commonAjax(urlshareinit , {url:window.location.href}).then(function(data){

 		 	var opts = {
 			    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
 			    appId: data.appId, // 必填，公众号的唯一标识
 			    timestamp: data.timestamp, // 必填，生成签名的时间戳
 			    nonceStr: data.nonceStr, // 必填，生成签名的随机串
 			    signature:data.signature,// 必填，签名，见附录1
 			    jsApiList: [
 			                'onMenuShareTimeline',
 			                'onMenuShareAppMessage',
 			                'onMenuShareQQ',
 			                'onMenuShareWeibo',
 			                'onMenuShareQZone'         
 			    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
 			} ;


 			wx.config(opts);

 			wx.ready(function () {
 	 			  // 2. 分享接口
 	 			  // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
 	 			    wx.onMenuShareAppMessage({
 	 			      title: sharetitle,
 	 			      desc: sharedes,
 	 			      link: window.location.href+"&share=share",
 	 			      imgUrl: shareimg,
 	 			      trigger: function (res) {
 	 			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
 	 			        //alert('用户点击发送给朋友');
 	 			      },
 	 			      success: function (res) {
 	 			        //alert('已分享');
 	 			    	sharesuccess();
 	 			      },
 	 			      cancel: function (res) {
 	 			       // alert('已取消');
 	 			      },
 	 			      fail: function (res) {
 	 			        //alert(JSON.stringify(res));
 	 			      }
 	 			    });
 	 			  // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
 	 			    wx.onMenuShareTimeline({
 	 			    	 title: sharetitle,
 	 	 			      desc: sharedes,
 	 	 			      link: window.location.href+"&share=share",
 	 	 			      imgUrl: shareimg,
 	 	 			      trigger: function (res) {
 	 	 			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
 	 	 			        //alert('用户点击发送给朋友');
 	 	 			      },
 	 	 			      success: function (res) {
 	 	 			        //alert('已分享');
 	 	 			    	sharesuccess();
 	 	 			      },
 	 	 			      cancel: function (res) {
 	 	 			       // alert('已取消');
 	 	 			      },
 	 	 			      fail: function (res) {
 	 	 			        //alert(JSON.stringify(res));
 	 	 			      }
 	 			    });

 	 			  // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
 	 			    wx.onMenuShareQQ({
 	 			    	 title: sharetitle,
 	 	 			      desc: sharedes,
 	 	 			      link: window.location.href+"&share=share",
 	 	 			      imgUrl: shareimg,
 	 	 			      trigger: function (res) {
 	 	 			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
 	 	 			        //alert('用户点击发送给朋友');
 	 	 			      },
 	 	 			      success: function (res) {
 	 	 			        //alert('已分享');
 	 	 			    	sharesuccess();
 	 	 			      },
 	 	 			      cancel: function (res) {
 	 	 			       // alert('已取消');
 	 	 			      },
 	 	 			      fail: function (res) {
 	 	 			        //alert(JSON.stringify(res));
 	 	 			      }
 	 			    });
 	 			  
 	 			  // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
 	 			    wx.onMenuShareWeibo({
 	 			    	 title: sharetitle,
 	 	 			      desc: sharedes,
 	 	 			      link: window.location.href+"&share=share",
 	 	 			      imgUrl: shareimg,
 	 	 			      trigger: function (res) {
 	 	 			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
 	 	 			        //alert('用户点击发送给朋友');
 	 	 			      },
 	 	 			      success: function (res) {
 	 	 			        //alert('已分享');
 	 	 			    	sharesuccess();
 	 	 			      },
 	 	 			      cancel: function (res) {
 	 	 			       // alert('已取消');
 	 	 			      },
 	 	 			      fail: function (res) {
 	 	 			        //alert(JSON.stringify(res));
 	 	 			      }
 	 			    });

 	 			  // 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
 	 			    wx.onMenuShareQZone({
 	 			    	 title: sharetitle,
 	 	 			      desc: sharedes,
 	 	 			      link: window.location.href+"&share=share",
 	 	 			      imgUrl: shareimg,
 	 	 			      trigger: function (res) {
 	 	 			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
 	 	 			        //alert('用户点击发送给朋友');
 	 	 			      },
 	 	 			      success: function (res) {
 	 	 			        //alert('已分享');
 	 	 			    	sharesuccess();
 	 	 			      },
 	 	 			      cancel: function (res) {
 	 	 			       // alert('已取消');
 	 	 			      },
 	 	 			      fail: function (res) {
 	 	 			        //alert(JSON.stringify(res));
 	 	 			      }
 	 			    });
 	 		});
 	 		wx.error(function (res) {
 	 	     //alert(res.errMsg);
 	 	    });
 		 })		
 		
	}
	//左右划动
	function leftandright(type){
		var liWidth = $(".yzzx-wzxq-lb-con")[0].offsetWidth;
	      var liHeight = $(".yzzx-wzxq-lb-con")[0].offsetHeight;
	      $(".yzzx-wzxq-lb-ul").css("height", liHeight);
	      $(".yzzx-wzxq-lb-ul>li").css({
	        "width": liWidth,
	        "height": liHeight
	      });
	      $(".yzzx-wzxq-lb-ul>li>.img-con").css({
	        "width": liWidth,
	        "height": liHeight
	      });
	      $(".yzzx-wzxq-lb-ul .page-con").css({
	        "width": liWidth,
	        "height": liHeight
	      });

        var mySwiper = new Swiper('.swiper-container',{
            onSlideChangeEnd: function (swiper) {
                console.log(swiper);
                var index = swiper.activeIndex;
                console.log(index);
                more_pic_index=index;
                RP.store.setItem('aac_more_pic_index',more_pic_index) ;
            }
		})
//        if(type == "later"){
//        	 mySwiper.init() ;
//             var len=$('.swiper-slide').length;
//             mySwiper._slideTo(len-1,0) ;
//        }else{
        	 mySwiper.init() ;
        	 console.log(RP.store.getItem('aac_more_pic_index'))
        	 if(RP.store.getItem('aac_more_pic_index')){
        		 mySwiper._slideTo(parseInt(RP.store.getItem('aac_more_pic_index')),0) ;
        	 }
//        }
       
	}
	
	//后台的图片是否要处理
   function dealresult(type){
	    $('.contentdetail img').css('width','100%');
	    $('.contentdetail img').parents('p').css('text-indent','0px');
	    if(format!=3){
	    	if($('.contentdetail img').length>0){
		    	shareimg= $($('.contentdetail img')[0]).attr("src");
		    }else{
		    	shareimg="http://m.ringpu.com/ringpu/public/images/lxwm-logoing.png";
		    }
	    }else{
	    	shareimg= $($('.yzzx-wzxq-lb-ul img')[0]).attr("src");
	    }
	    $('#commentboxcontent').val('');//清空内容
	    sharetitle=$('.yzzx-wzxq-con h1').html()||$('.title-div h1').html();
	    document.title=$('.yzzx-wzxq-con h1').html()||$('.title-div h1').html();
	   //对app进行处理
       if(from == 'app'){
    	   $('.model-title-con').hide();
    	   $('.yzzx-newslist-con').hide();
    	   $('.yzzx-handle-bar').hide();
    	   $('.yzzx-comment-con').hide();
    	   window.someThing.initData(true);
       }
       if(format!=3&&type!="frist"&&type!="comment"){
            //window.location.href="#commentflag";
    	   $( 'html,body' ).animate({scrollTop:$('#commentflag').offset().top-50}, 0);
		 }
       
   }
   function dealcontent(data){
	    	 var taglist=[];
	    	 if(data.data.art_Content.tags.indexOf(',')!= -1){
		    	 taglist= data.data.art_Content.tags.split(',');
		    	 data.data.art_Content.taglist=taglist;
	    	 }else{
	    		 data.data.art_Content.taglist=taglist;
	    		 data.data.art_Content.taglist[0]=data.data.art_Content.tags;
	    	 }
	    	 var taglistre=[];
	    	 for(var i in data.data.art_RelastionList){
		    	 if(data.data.art_RelastionList.length>0){
		    		 if(data.data.art_RelastionList[i].tags.indexOf(',')!= -1){
		    			 taglistre= data.data.art_RelastionList[i].tags.split(',');
				    	 data.data.art_RelastionList[i].taglistre=taglistre;
			    	 }else{
			    		 data.data.art_RelastionList[i].taglistre=taglistre;
			    		 data.data.art_RelastionList[i].taglistre[0]=data.data.art_RelastionList[i].tags;
			    	 }
		    		 if(data.data.art_RelastionList[i].title.length>36){
			    		 data.data.art_RelastionList[i].newtitle=data.data.art_RelastionList[i].title.substring(0,36)+"……"; 
					 }else{
						 data.data.art_RelastionList[i].newtitle=data.data.art_RelastionList[i].title;
					 } 
		    	 }
	    	 }	     
	     title = data.data.art_Content.title;
	     format = data.data.art_Content.format;
	     sharedes = data.data.art_Content.summary;
	     if((window.location.href).indexOf('https')!=-1){
	    	 data.data.art_Content.content=data.data.art_Content.content.replace(/http:\/\//g,'https://');
	 	 }	     
	     console.log(data);
	     return data;
	}
    function dealcollect(item){
    	if(item.hasClass('collected-btn')){  		
    		var params = {
   			   title:title,
   		       article_code:article_code
   			 } ;

   			 commonAjax(urldelarticle , params ).then(function(data){
   			 	if(data&&data.status=="2000"){   			 		
   			 	   item.removeClass('collected-btn')	
   			 	}else{
	   			 	var error_html = getErrorPage('system',2) ;
					$('.wrap').append(error_html) ;
   			 	}
   			 }).fail(function(data){
   				var error_html = getErrorPage('system',2) ;
				$('.wrap').append(error_html) ;
   			 })	
   		 
    	}else{
    		var params = {
   			   title:title,
   		       article_code:article_code
   			 } ;
   			 commonAjax(urladdarticle , params ).then(function(data){
   			 	if(data&&data.status=="2000"){
   			 	     item.addClass('collected-btn');  			 	 
   			 	}else{
	   			 	var error_html = getErrorPage('system',2) ;
					$('.wrap').append(error_html) ;
   			 	}
   			 }).fail(function(data){
	   			 	var error_html = getErrorPage('system',2) ;
					$('.wrap').append(error_html) ;
   			 })
    	}
    }
    function redetailcom(type){
         var params = {
	       modules_code:typecode,
	       article_code:article_code
		 } ;
         if(from == 'app'||type == 'later'){
        	 
         }else{
             loadingShow($('#maincontent')[0]);  
         }
		 commonAjax(url , params ).then(function(data){
		 	if(data&&data.status=="2000"){
		 		 data=dealcontent(data);
		 		 if(data.data.art_Content.format == 3){		 			
		 			 var tpl_content = new jSmart(tpl_html_content);
					 var res_content = tpl_content.fetch(data.data);
					 $('#maincontent').html(res_content);
		 			 leftandright(type);
					 dealresult(type); 
		 		 }else{
		 			 var tpl_content = new jSmart(tpl_html_content);
					 var res_content = tpl_content.fetch(data.data);
					 $('#maincontent').html(res_content);
					 dealresult(type); 
		 		 }
		 		 commonAjax(urlview , params ).then(function(data){
		 			 
		 		 });
		 		wxshare();
		 	}else{
		 		loadingHide($('#maincontent')[0]);
		 		var error_html = getErrorPage('system',1) ;
				$('.wrap').html(error_html) ;
		 	}
		 }).fail(function(data){
			 loadingHide($('#maincontent')[0]);
			 var error_html = getErrorPage('system',1) ;
			 $('.wrap').html(error_html) ;
		 })

    }
    //评论
    function commentall(content,article_code,comment_code,to_nickname){
		        var params = {
	   			   content:content,
	   		       article_code:article_code,
	   		       comment_code:comment_code,
	   		       to_nickname:to_nickname
	   			 } ;
			    commonAjax(urladdcomments , params ).then(function(data){
			 	 if(data&&data.status=="2000"){   			 		
			 	    if(scroll == "no"){
				 		 redetailcom("later");				 		
				 		 $('#commentbox').hide();
				 		 $('html,body').removeClass('ovfHiden');
					 	 $('#commentboxcontent').val('');//清空内容
					 	
			 	    }else if(scroll == "yes"){
				 		  page_no = 0;
					 	  if(format!=3){
					 		   $('.wrap').animate({scrollTop:0}, 0);
					 	  }
				 		  $('#commentbox').hide();
				 		  $('html,body').removeClass('ovfHiden');
					 	  $('#commentboxcontent').val('');//清空内容
					 	  landmore();
			 	    }			 	   
			 	 //发布成功后置0
			 	  $('#word').html(0); 			 	   			 	   
			 	}else{
			 		var error_html = getErrorPage('system',2) ;
					$('.wrap').append(error_html) ;
			 	}
			 }).fail(function(data){
				    var error_html = getErrorPage('system',2) ;
					$('.wrap').append(error_html) ;
			 }) 
    }
    function landmore(){
    	 if(page_no<page_all){
				page_no = page_no + 1;
		        var params = {
	   		       article_code:article_code,
	   		       page_no:page_no,
	   		       page_size:page_size
	   			} ;
		        if(page_no == 1){
		          loadingShow($('#commentlistul')[0])
		        }		       
		        commonAjax(urlgetcomments , params ).then(function(data){
			 	if(data&&data.status=="2000"){
		 			if(page_no == 1){
               		 page_all = data.data.page.total_page;
			 		 var tpl_commentlist = new jSmart(tpl_html_commentlist);
					 var res_commentlist = tpl_commentlist.fetch(data);
					 $('#commentlistul').html(res_commentlist);
		 			}else{
	 				 var tpl_commentlist = new jSmart(tpl_html_commentlist);
					 var res_commentlist = tpl_commentlist.fetch(data);
					 $('#commentlistul').append(res_commentlist);
		 			}
			 	}else if(data&&data.status=="4002"){
			 		loadingHide($('#commentlistul')[0])
			 		$('#commentlistul').html(' <div class="public-none">暂时没有需要的信息~</div>')
			 	}else{
			 		loadingHide($('#commentlistul')[0])
			 		var error_html = getErrorPage('system',1) ;
					$('.wrap').html(error_html) ;
			 	}
			}).fail(function(data){
				loadingHide($('#commentlistul')[0])
				var error_html = getErrorPage('system',1) ;
				$('.wrap').html(error_html) ;
			})
    	 }else{
    		console.log('分页结束');
    	 }
    }
	// 业务逻辑
	(function(){
       //点击进行收藏
		$('.wrap').on('click','#collect',function(){
		 
			if(curr_user_info){
				dealcollect($(this));	
			}else{
				check_login_module();
			}

			
	    })	
	 
	    //点击评论对文章
	    $('.wrap').on('click','#comment_input',function(){
	    	if(curr_user_info){
	    		$('html,body').addClass('ovfHiden');
	    		$('#commentbox').show();
	    		$('#commentboxcontent').attr('placeholder',"说点什么吧……");
	    		if(ua.indexOf('ipad') > -1||ua.indexOf('iphone') > -1){
	    			//window.location.reload();
	    		}else if(ua.indexOf('android')>-1){
	    			$('#commentboxcontent').focus();	
	    		}else{
	    			$('#commentboxcontent').focus();	
	    		} 	
		    	to_nickname=''
		        comment_code='';
		    		
	    	}else{
	    		check_login_module();
	    	}	    	
	    	
	    })
	    //点击评论对个人
	    $('.wrap').on('click','.commentlist li',function(){
	    	//判断用户是否登录
	    	if(curr_user_info){
	    		$('html,body').addClass('ovfHiden');
	    		$('#commentbox').show();		    
		    	to_nickname=$(this).children().find('.commentto').attr('data-nickname');
		    	comment_code=$(this).children().find('.commentto').attr('data-code');
		    	$('#commentboxcontent').attr('placeholder',"回复"+to_nickname+":");
		    	$('#commentboxcontent').focus();
	    	}else{
	    		check_login_module();
	    	}
	    	
	    	
	    })
	    $('.wrap').on('click','#commentmask',function(){
	    	$('#commentbox').hide();
	    	$('html,body').removeClass('ovfHiden');
	    })
	   

    	//控制输入的字符
		 $('.wrap').on('input','#commentboxcontent',function(){
			 var word = getStrlength($('#commentboxcontent'),100);
			 $("#word").html(word);
		     if($("#commentboxcontent").val().length>0&&word!=0){
				$('#publish').removeClass('publish-btn-dis');
			 }else{
				$('#publish').addClass('publish-btn-dis');
			 }
		
		  })
		//点击发布按钮
		 $('.wrap').on('click','#publish',function(){
			 if($('#publish').hasClass('publish-btn')){
				 var content = $('#commentboxcontent').val();
				 commentall(content,article_code,comment_code,to_nickname);
			 }
		
		  })
		//点击相关阅读
		  $('.wrap').on('click','.relastion li',function(){
			  var article_code= $(this).attr("data-id");
			  var title= $(this).attr("data-title");
			  var format= $(this).attr("data-format");			 
			  window.location.href='detail.php?code='+article_code+"&type="+type+"&fromModelpage=detail";		
			  	
		  })
		  $(window).scroll(function(){
			  if(scroll == "yes"){
			     if($(document).scrollTop()>=$(document).height()-$(window).height()){        
		        	landmore();
		         } 
			  }	       
          })
         //点击返回
		$('.wrap').on('click','.detail-back-btn',function(){
			if(fromModelpage == "index"){
				window.location.href='index.php?fromModelpage=detail&&type='+type;
				RP.store.removeItem('RP_scrollTopMemorys');
			}else if(fromModelpage == "search"){
				window.location.href='search.php?type='+type;
				RP.store.removeItem('RP_scrollTopMemorys');
			}else if(fromModelpage == "detail"){
				window.history.go(-1) ;
			}else{
				window.history.go(-1) ;
			}
						
	    })
	    //点击回到首页
	    $('.wrap').on('click','.home-btn',function(){
	    	window.location.href='index.php?fromModelpage=detail&&type='+type;
	    })
	     //点击返回
		$('.wrap').on('click','.comment-back-btn',function(){
			document.title="详情";
			$('#title').html('详情');
			$('.back-btn').removeClass('comment-back-btn');
	    	$('.back-btn').addClass('detail-back-btn');
			$('#commentmain').hide();
			$('.handle-div').css('padding-right','64px');
	    	$('#detailmain').show();
	    	$('#commentheader').hide();
	    	$('#detailheader').show();
	    	$('#allcomment').show();
	    	$('#collect').show();
	    	$('#commentbox').hide();
	    	$('html,body').removeClass('ovfHiden');
	 	    $('#commentboxcontent').val('');//清空内容
	    	scroll = "no";
	    	redetailcom("comment");	
	    })
	    //点击评论跳转
	    $('.wrap').on('click','#allcomment,.check-allcomm-btn',function(){
	    	document.title="评论";
	    	$('#title').html('评论');
	    	$('.back-btn').removeClass('detail-back-btn');
	    	$('.back-btn').addClass('comment-back-btn');
	    	$('#commentmain').show();
	    	$('.handle-div').css('padding-right',0);
	    	$('#detailmain').hide();
	    	$('#allcomment').hide();
	    	$('#collect').hide();
	    	$( '#commentmain' ).animate({scrollTop: '0px'}, 800);
	    	page_no = 0;
	    	scroll = "yes";
	    	landmore();	    	
	    })
           //关闭下载条
	    $('.wrap').on('click','.closetopdownload',function(){
	    	$('.topdownload').hide();
	    })
	     $('.wrap').on('click','#download',function(){
	    	 if(platform == "jxs"){
	    		 window.location.href="../download/downloadApp_jxs.php";
	    	 }else if(platform == "ptd"){
    		         if (ua.indexOf('ipad') > -1||ua.indexOf('iphone') > -1){
    		        	 window.location.href="https://itunes.apple.com/us/app/yang-zhi-bao/id1112414634?l=zh&ls=1&mt=8";
    		          }else{
    		        	 window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.consumer#opened";
    		          }		
	    		 //window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.consumer#opened";
	    		 //window.location.href="../download/downloadApp.php";
	    	 }else{
	    		 if (ua.indexOf('ipad') > -1||ua.indexOf('iphone') > -1){
		        	 window.location.href="https://itunes.apple.com/us/app/yang-zhi-bao/id1112414634?l=zh&ls=1&mt=8";
		          }else{
		        	 window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.consumer#opened";
		          }		
	    		// window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.consumer#opened";
	    		 //window.location.href="../download/downloadApp.php";
	    	 }
	    	    
	     })
		
	})() ;

});