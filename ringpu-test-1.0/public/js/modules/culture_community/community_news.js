    require(['global','jsmart','jquery','swiperBig','dialog'],function(global,jsmart,$,swiper,dialog){
    
    var page_no=1 ;
    var page_count ;
    var len=0 ;//存储li的个数
    var errorDialog=new Dialog({type:"alert"}) ;
    var mySwiper = new Swiper ('.swiper-container',{
                                pagination:".swiper-pagination",
                                paginationClickable:true,
                                effect:'slide'
                                }) ;
    //图片修正
    var sendURL=function(data,tr){
      var url=global_path+"index.php/culture_community/detachPhoto" ;
      var url_list=storeURL(data) ;
      var li=document.getElementsByClassName('rp_preview_img') ;
      var length=li.length ;
          li=[].slice.call(li) ;
          if(tr==undefined)
          li.splice(0,len) ;
          len=length ;

      var photo_list=[] ;
      var data_url ;
     // var img ;
      var param={} ;
          param["url"]= url_list ;
          commonAjax(url, param).then(function(datas){
              //console.info(datas.length) ;
              //console.info(li.length)
              for(var i=0 in datas){

                    (function(i){
                       var img=new Image() ;
                           img.src=datas[i] ;
                           if(img.complete){
                              data_url=cutPhoto(img) ;
                              li[i].firstChild.src=data_url ;
                           }
                           else{
                              img.onload=function(){
                              //console.info(i) ;
                              data_url=cutPhoto(img) ;
                              li[i].firstChild.src=data_url ;
                             }
                           }
                    })(i)
                     
              }
          })
    } ;
    //update notice 
    var updateNotice=function(){
      var url = global_path + "index.php/culture_community/updateNotice" ;
      var param = {} ;
          commonAjax(url, param).then(function(data){
            if(data&&data.status&&data.status==2000){
              window.history.go(-1) ;
            }
          })
    } ;
    (function(){
      var url=global_path+"index.php/culture_community/getDetailNews" ;
      var param={
      	  page_no:1,
          page_size:20
      	} ;
        // var data_news=RP.store.getItem("data_news") ;
        // if(data_news){
        //   var news_tpl=new jSmart($("#news_tpl").html()) ;
        //   var res=news_tpl.fetch(data_news) ;
        //   $("#news").html(res) ;
        //   return ;
        // }
      	commonAjax(url, param).then(function(data){
      		if(data&&data.status&&data.status==2000){
      			console.info(data) ;
               page_count=data.data.page_count ;
               RP.store.setItem("data_news",data) ;
      			var news_tpl=new jSmart($("#news_tpl").html()) ;
      			var res=news_tpl.fetch(data) ;
      			$("#news").html(res) ;
        //    sendURL(data)
      		}
          else if ( data && data.status &&data.status==4002 ){
            // errorDialog.setTitle("查询数据为空") ;
            // errorDialog.show() ;
            return ;
          }
          else if ( data && data.status && data.status==4004 ){
            errorDialog.setTitle("请求参数错误") ;
            errorDialog.show() ;
          }
          else{
            errorDialog.setTitle("页面加载失败，请稍候重试") ;
            errorDialog.show() ;
          }
      	}).fail(function(){
          // errorDialog.setTitle("系统繁忙，请稍候重试") ;
          // errorDialog.show() ;
            var ret = getErrorPage("system") ;
             $("body").append(ret) ;
        }) ;

         //renderPage(url) ;
   })() ;
    

    //分页
    function pageDivide(n){
      var url=global_path+"index.php/culture_community/getDetailNews" ;
      var param={
         page_no:n,
         page_size:20 
      } ;
      commonAjax(url, param).then(function(data){
         if(data&&data.status&&data.status==2000){
            console.info(data) ;
            var data_news=RP.store.getItem("data_news") ;
            if(data.data.data_list){
                [].push.apply(data_news.data.data_list,data.data.data_list) ;
                RP.store.setItem("data_news",data_news) ;
                var news_tpl=new jSmart($("news_tpl").html()) ;
                var res=news_tpl.fetch(data) ;
                $("#news").append(res) ;
            //    sendURL(data)
            }         
         }
         else if( data && data.status && data.status==4002 ){
          return ;
         }
         else if( data && data.status && data.status==4004 ){
          errorDialog.setTitle("请求参数格式错误") ;
          errorDialog.show() ;
         }
      }).fail(function(){
        errorDialog.setTitle("系统繁忙，请稍候重试") ;
        errorDialog.show() ;
      }) ;

    } ;
    
    //分页渲染
    function renderPage(){
      
      page_no++ ;
      if(page_no>page_count) return ;  
      pageDivide(page_no) ;

    } ;



    //滑动加载
    var sildeLoad=function(){
        var start={
            X: 0,
            Y:0
        },
            end={
            X:0,
            Y:0
        },  
            isTouched ;
            
        var news_id=document.getElementById('news') ;
        
        news_id.addEventListener("touchstart",function(e){
          // e.preventDefault() ;
          var finger=e.changedTouches[0] ;
              start.X=finger.pageX ;
              start.Y=finger.pageY ;
              return ;
        },false) ;
        news_id.addEventListener("touchmove",function(e){
              // e.preventDefault() ;
             // console.info("x"+start.X+"::::"+"Y"+start.Y) ;
              isTouched = true ;
              var finger=e.changedTouches[0] ;
                  end.X=finger.pageX ;
                  end.Y=finger.pageY ;
                  if(end.Y==start.Y) return ;
                  if(Math.atan2(Math.abs(end.Y-start.Y),Math.abs(end.X-start.X))* 180 / Math.PI<=45)
                    isTouched=false ; 
                   if(!isTouched) return ;
                  if($(document).scrollTop()==0 && end.Y>start.Y){
                     e.preventDefault() ;
                      
                      return ;
                   }
                 if($(document).scrollTop()>=$(document).height()-$(window).height() && end.Y<start.Y){
                   e.preventDefault() ;
                
                 }
                 
            },false) ;
        news_id.addEventListener("touchend",function(e){
          // e.preventDefault() ;
          var finger=e.changedTouches[0] ;
              end.X=finger.pageX ;
              end.Y=finger.pageY ;

              if(end.Y>=start.Y) return ;
             
              if($(document).scrollTop()>=$(document).height()-$(window).height() && end.Y<start.Y){
                  renderPage() ;
                  return ;
               }
        },false)
    } ;
    sildeLoad() ;
    //bind event
    (function(){
         //回跳
         $(".back-btn").on("click",function(){
         //	window.history.go(-1) ;
           updateNotice() ;
         }) ;

         //跳转到个人主页
         $(".wrap").on("click",".sqxxmain-left",function(e){
          e.stopPropagation() ;
          var data_news=RP.store.getItem("data_news") ;
          var length=$(this).closest(".sqxx-addxian").prevAll().length;
          var user_code=data_news.data.data_list[length].Avatar_user_code ;
          window.location.href="./person_mainPage.php?user_code="+user_code ;
         }) ;
         
         //跳转到动态详情页
         $(".wrap").on("click",".xxcon-maincon",function(e){
          e.stopPropagation() ;
          var data_news=RP.store.getItem("data_news") ;
          var length=$(this).closest(".sqxx-addxian").prevAll().length;
          var comment_code=data_news.data.data_list[length].Ask_code ;
          var user_code=data_news.data.data_list[length].Avatar_user_code ;
          window.location.href="./detailStatus.php?comment_code="+comment_code+"&user_code="+user_code ;
         }) ;

         //滑动加载
         sildeLoad() ;
      })() ;
      

      //图片放大预览 插件jUtil
      (function(){
        //动态中页面放大预览
        $(".wrap").on("click",".rp_preview_img",function(e){
          e.stopPropagation() ;
          $("body,html").addClass("ovfHiden") ;
          var index = $(this).attr('data-index') ;
           console.info(index) ;
          var imgs = $(this).closest('.rp_preview_wrap').attr('data-multiple_imgs') ;
        //  var imgs_html = getImgList(JSON.parse(imgs)) ;
        var imgs_html = getImageList(JSON.parse(imgs)) ;

          $('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
          $('#rp_preview_wrap').show() ;

          mySwiper.init() ;
          mySwiper._slideTo(index,0) ;
        }) ;
        //点击大图隐藏
        $(".wrap").on("click",".swiper-slide",function(e){
          e.stopPropagation() ;
          $("body,html").removeClass("ovfHiden") ;
          $(this).closest("#rp_preview_wrap").hide() ;
        }) ;
      })() ;
      


   }) ;