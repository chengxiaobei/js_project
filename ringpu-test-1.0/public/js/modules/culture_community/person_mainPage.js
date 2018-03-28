    require(['global','jquery','jsmart','swiperBig','dialog'],function(global,$,jsmart,swiper,dialog){

    var personPage_tpl=new jSmart($("#personPage_tpl").html()) ;
    var user_code=getQueryString("user_code") ;
    var body=document.getElementsByClassName("whiteBg")[0] ;
    var len=0 ;//存储li的长度 
    //pop window of error
    var errorDialog = new Dialog({type:"alert"}) ;
    //preview big pic
    var mySwiper = new Swiper ('.swiper-container',{
                                    pagination:".swiper-pagination",
                                    paginationClickable:true,
                                    effect:'slide'
                                    }) ;
   // alert(user_code) ;
    //var data_count ;
    //var page_no=2 ;
    //alert(new Date().getFullYear());
   //对时间的处理
    var detachTime=function(time){

        var time=time.split(" ") ;
            time=time[0].split("-") ;
        var day=new Date().getDate() ,
            month=new Date().getMonth()+1 ,
            year=new Date().getFullYear() ;
        var timeDay=time[2] ,
            timeMonth=time[1] ,
            timeYear=time[0] ;
            if(timeYear==year){
                if(timeMonth==month){
                    if(timeDay==day){
                        timeDay="今天" ;
                        timeMonth=""
                    }
                         
                    // else if(timeDay==(day-1)){
                    //     timeDay="昨天" ;
                    //     timeMonth=""
                    // }
                         
                    else{
                         if (timeDay.length==1) 
                            timeDay="0"+timeDay ;
                         else timeDay=timeDay ;
                         timeMonth=timeMonth+"月" ;
                     } 
                }
                else{
                    if (timeDay.length=1) timeDay="0"+timeDay ;
                    else timeDay=timeDay ;
                    timeMonth=timeMonth ;
                }
            }
            else{

            }
        return {
             timeDay:timeDay,
             timeMonth:timeMonth
        }

  
    } ;
    //图片修正
    var sendURL=function(data,tr){
      //var url=global_path+"index.php/culture_community/detachPhoto" ;
      var url=global_path+"index.php/culture_community/getImageData" ;
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
          if( !param["url"].length ) return ;
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
    function changePic(data,tr){
      var li=document.getElementsByClassName('rp_preview_img') ;
      var url_list=storeURL(data) ;
      var length=li.length ;
          li = [].slice.call(li) ;
          li=[].slice.call(li) ;
          if(tr==undefined)
          li.splice(0,len) ;
          len = length ; 
          for ( var i in li ){
            (function(i){
              var img = new Image() ;
                      img.onload = function(){

                        li[i].style['background-image'] = "url("+url_list[i]+") " ;
                    
                     }
                  
                  img.src = url_list[i] ;
            })(i)
          
          }
    } ;
     //用户头像获取
    (function(){

      var url=global_path+"index.php/culture_community/getPhoto" ;
      var param={
        user_code:user_code
      } ;

      commonAjax(url,param).then(function(data){
      console.info(data) ;
      if(data&&data.status&&data.status==2000){
          //renderData(data,"person") ;
          var person_tpl=new jSmart($("#person_tpl").html()) ;
          var res=person_tpl.fetch(data) ;
          $("#person").html(res) ;
         }
      else{

          }
      })

  })() ;

    //开始页面渲染
    (function(user_code){
        loadingShow(document.getElementById('personPage')) ;
        var url=global_path+"index.php/culture_community/getPageStatus" ;
        var PersonPage_tpl=personPage_tpl ;
        var param={
            user_code:user_code,
            page_size: 20
        } ;
        // var data_status=RP.store.getItem("data_status") ;
        // if(data_status){
        //    var res=PersonPage_tpl.fetch(data_status) ; 
        //    $("#personPage").html(res) ;
        //    return ;
        // }
        commonAjax(url, param).then(function(data){
            //alert(1)
            console.info(data) ;
            if(data&&data.status&&data.status==2000&&data.data){
                if(data.data.data_list.length){
                    for(var i in data.data.data_list){
                        if(data.data.data_list[i].date_string){
                            var date_string=detachTime(data.data.data_list[i].date_string) ;
                            data.data.data_list[i].timeDay=date_string.timeDay ;
                            data.data.data_list[i].timeMonth=date_string.timeMonth ;
                        }
                    }
                    RP.store.setItem("data_status",data) ;
                    //data_count=data.data.data_count ;
                    var res=PersonPage_tpl.fetch(data) ;
                    //alert(res) ;
                    $("#personPage").html(res) ; 
                   // sendURL(data) ;
                   changePic(data,true) ;
                }
                else{
                   // alert("返回数据为空") ;
                   loadingHide(document.getElementById('personPage')) ;
                   return ;
                }    
            }
            else if ( data && data.status && data.status==4002 ){
              // errorDialog.setTitle("查询数据为空") ;
              // errorDialog.show() ;
              loadingHide(document.getElementById('personPage')) ;
              return ;
            }
            else if ( data && data.status && data.status==4004 ){
              loadingHide(document.getElementById('personPage')) ;
              errorDialog.setTitle("请求参数格式错误") ;
              errorDialog.show() ;
            }
            else{
              loadingHide(document.getElementById('personPage')) ;
              errorDialog.setTitle('页面加载失败，请稍候重试') ;
              errorDialog.show() ;
            }
            
        }).fail(function(){
          // errorDialog.setTitle("系统繁忙，请稍候重试") ;
          // errorDialog.show() ;
          loadingHide(document.getElementById('personPage')) ;
            var ret = getErrorPage("system") ;
             $("body").append(ret) ;
        })

    })(user_code) ;

    //上拉加载
    var sildeUp=function(user_code,code){
            var url=global_path+"index.php/culture_community/getPageStatus" ;
            var PersonPage_tpl=personPage_tpl ;
            var param={
                user_code:user_code,
                page_size: 20,
                up_or_down:"up" ,
                ask_code:code
            } ;
            commonAjax(url, param).then(function(data){
                console.info(data) ;
                var data_status=RP.store.getItem("data_status") ;
                if(data&&data.status&&data.status==2000&&data.data){
                    if(data.data.data_list.length){
                      for(var i in data.data.data_list){
                        if(data.data.data_list[i].date_string){
                            var date_string=detachTime(data.data.data_list[i].date_string) ;
                            data.data.data_list[i].timeDay=date_string.timeDay ;
                            data.data.data_list[i].timeMonth=date_string.timeMonth ;
                        }
                    }
                   // data_count=data.data.data_count ;
                   [].push.apply(data_status.data.data_list,data.data.data_list) ;
                    //data_status.data.data_list.push(data.data.data_list) ;
                    RP.store.setItem("data_status",data_status) ;
                    var res=PersonPage_tpl.fetch(data) ;
                    //alert(res) ;
                    $("#personPage").append(res) ; 
                 //   sendURL(data) ;
                 changePic(data) ;
                }
                else{
                    return ;
                }
                }
                else if ( data && data.status && data.status==4002 ){
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
              errorDialog.setTitle("系统繁忙，请稍候重试") ;
              errorDialog.show() ;
            }) ;
    } ;

    //下拉加载
    var slideDown=function(user_code,code){
         var url=global_path+"index.php/culture_community/getPageStatus" ;
         var PersonPage_tpl=personPage_tpl ;
         var param={
                user_code:user_code,
                page_size: 20,
                up_or_down:"down" ,
                ask_code:code
            } ;
            commonAjax(url, param).then(function(data){
                if(data&&data.status&&data.status==2000){
                    console.info(data);
                    var data_status=RP.store.getItem("data_status") ;
                    if(data.data.data_list){
                      for(var i in data.data.data_list){
                        if(data.data.data_list[i].date_string){
                            var date_string=detachTime(data.data.data_list[i].date_string) ;
                            data.data.data_list[i].timeDay=date_string.timeDay ;
                            data.data.data_list[i].timeMonth=date_string.timeMonth ;
                        }
                      }
                      for(var m=data.data.data_list.length-1;m>=0;m--){
                        data_status.data.data_list.unshift(data.data.data_list[m]) ;
                      }
                      if(data.data.page_size<data.data.data_count){
                        RP.removeItem("data_status") ;
                        RP.setItem("data_status",data) ;
                        var res=PersonPage_tpl.fetch(data) ;
                       $("#personPage").prepend(res) ;  
                       changePic(data) ;
                       return ;
                      }
                      RP.store.setItem("data_status",data_status) ;
                       var res=PersonPage_tpl.fetch(data) ;
                       $("#personPage").prepend(res) ; 
                       changePic(data) ;
                      
                    }
                    else{
                        return ;
                    }
                }
            }).fail(function(){
              errorDialog.setTitle("系统繁忙，请稍候重试") ;
              errorDialog.show() ;
            })
    } ;
    //获取动态唯一表示码
    var getAsk_code=function(type){
        var ask_code ;
        var content=RP.store.getItem("content") ;
         if(type=="down"){
          ask_code=content.data.data_list[0].ask_code ;
         }
         if(type=="up"){
          var length=content.data.data_list.length ;
          ask_code=content.data.data_list[length-1].ask_code ;
         }
         return ask_code ;
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
        };
        var isTouched  ;
        var slideDir ;
        var personPage_id=document.getElementById('personPage') ;
        
        personPage_id.addEventListener("touchstart",function(e){
          // e.preventDefault() ;
          var finger=e.changedTouches[0] ;
              start.X=finger.pageX ;
              start.Y=finger.pageY ;
              return ;
        },false) ;
        personPage_id.addEventListener("touchmove",function(e){
          // e.preventDefault() ;
          isTouched = true ;
          var finger=e.changedTouches[0] ;
              end.X=finger.pageX ;
              end.Y=finger.pageY ;
              if(end.Y==start.Y) return ;
              if(Math.atan2(Math.abs(end.Y-start.Y),Math.abs(end.X-start.X))* 180 / Math.PI<=45){
                isTouched=false ;
              }  
              if(!isTouched) return ;
              if($(document).scrollTop()==0 && end.Y>start.Y){
                 e.preventDefault() ;
                  slideDir = "down" ;
                  return ;
               }
             if($(document).scrollTop()>=$(document).height()-$(window).height() && end.Y<start.Y){
               e.preventDefault() ;
                slideDir = "up" ;
             }
        }) ;
        personPage_id.addEventListener("touchend",function(e){
          // e.preventDefault() ;
           if(!isTouched) return ;
          var finger=e.changedTouches[0] ;
              end.X=finger.pageX ;
              end.Y=finger.pageY ;

              if(end.Y==start.Y) return ;
              if($(document).scrollTop()==0 && end.Y>start.Y){
                 if( slideDir == "down" ){
                  var code = getAsk_code(slideDir) ;
                  if(code) slideDown(code) ;
                  return ;
                 }
              }
             if($(document).scrollTop()>=$(document).height()-$(window).height() && end.Y<start.Y){
                 if( slideDir == "up" ){
                  var code = getAsk_code(slideDir) ;
                  if(code) sildeUp(code) ;
                  return ;
                 }
             }
            
        },false)
    } ;

    


    //bind event
    (function(){

    	$(".wrap").on("click","p",function(){
    	   //$(this)
        }) ;
      //跳转到动态详情页面
      $(".wrap").on("click",".yzsqrig-linethree",function(e){
        e.stopPropagation() ;
        var data_status=RP.store.getItem("data_status") ;
        var length=$(this).closest(".yzsq-maincon").prevAll().length ;
        var ask_code=data_status.data.data_list[length].ask_code ;
        //console.info(user_code) ;
        window.location.href="./detailStatus.php?user_code="+user_code+"&comment_code="+ask_code+"&from=person_mainPage" ;
      })

        $(".wrap").on("click",".back-btn",function(){
        	
        	//window.history.go(-1) ;
          window.location.href="./cultureCommunity.php" ;
        }) ;

        //滑动加载
        sildeLoad() ;
    })() ;
    

    //图片放大预览
    (function(){
      $(".wrap").on("click",".rp_preview_img",function(e){
        e.stopPropagation() ;
        var index = $(this).attr('data-index') ;
        // console.info(index) ;
       // alert(index) ;
        var imgs = $(this).closest('.rp_preview_wrap').attr('data-multiple_imgs') ;
        if(body)
          body.style.overflow="hidden" ;
        //console.info(imgs) ;
       // var imgs_html = getImgList(JSON.parse(imgs)) ;
       var imgs_html = getImageList(JSON.parse(imgs)) ;

        // console.info(imgs_html) ;
        // $('.wrap').hide() ;
        $('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
        $('#rp_preview_wrap').show() ;
        mySwiper.init() ;
        mySwiper._slideTo(index,0) ;
      }) ;
      //点击大图隐藏
        $(".wrap").on("click",".swiper-slide",function(e){
          e.stopPropagation() ;
           if(body)
          body.style.overflow="auto" ;
          $(this).closest("#rp_preview_wrap").hide() ;
        }) ;
     //头像放大预览
      $(".wrap").on("click","#person_image",function(e){
        e.stopPropagation() ;
        var headImage=$(this).parent().attr("data-single_img") ;
        console.info(headImage) ;
        var list=[{h_picture_url:headImage}] ;
        var index=0 ;
        var imgs_html = getImgList(list) ;
        $('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
        $('#rp_preview_wrap').show() ;
        mySwiper.init() ;
       // mySwiper._slideTo(index,0) ;
      }) ;
    })() ;




})