    require(['global','jquery','dialog','jsmart','swiperBig'],function(global,$,dialog,jsmart,swiper){
    var detail_head_tpl=new jSmart( $("#detail_head_tpl").html() ) ,
        detail_content_tpl = new jSmart( $("#detail_content_tpl").html() ) ,
        detail_comment_tpl = new jSmart( $("#detail_comment_tpl").html() ) ,
        detail_footer_tpl = new jSmart( $("#detail_footer_tpl").html() ) ;

   
    var ask_code=getQueryString("comment_code") ;
    var from=getQueryString("from") ;
    var user_code=getQueryString("user_code") ;
    var user_info = RP.store.getItem('curr_user_info') ;
    var cash = {} ;//存储点赞和评论的数目
    var vote_count ;//记录点赞的数目
    var comment_num ; //记录评论数目
    var scrollTop ;//记录评论时滚动条的位置 
    var getScrollTop ;
    if(user_info){
     // var self_user_code=user_info["user_code"] ;
    }
    var body = document.getElementsByTagName('body')[0] ;
    loading_show(body) ;
    var check_login=function(){
        check_login_module() ;
      // $(".wrap").eq(0).show() ;
    } ;
    //alert(user_code) ;
    var flag=0 ; //是否点赞的标识 0:否 1:是
    var tip=0 ; //评论与回复评论的标志 0:评论 1:回复评论
    var is_focus = false ;//判断是否聚焦 ;
      // var To_user_code ;
    //公共弹窗
    var alert_pop_window=new Dialog({type:"alert"}) ;
    var errorDialog=new Dialog({type:"confirm_guide"}) ;
    var dialog=new Dialog({type:"confirm_guide"}) ;
    var getScrollTop_f = function(){
      var headHeight = $("head").outerHeight() ;
      var headerHeight = $("header").outerHeight() ;
      var pHeight = $(".dtxq-maincen-linetwo").outerHeight() ;
      var divHeight = $(".dtxq-maincen-lineimg").outerHeight() ;

          return headHeight + headerHeight +  pHeight + divHeight ;
    } ;
    var share = getQueryString('share');
    if(share == 'share'){
		 $('.topdownload').show();
	}
    //图片修正
    var storeURL=function(data){
      var comment_data=data.data.comment_data ;
      var urlArray=[] ;
          for(var i=0 in comment_data.picture_list){
              urlArray.push(comment_data.picture_list[i].common_pic_url) ;
          }
          return urlArray ;
    } ;
    var sendURL=function(data,tr){
     // var url=global_path+"index.php/culture_community/detachPhoto" ;
      var url=global_path+"index.php/culture_community/getImageData" ;
      var url_list=storeURL(data) ;
      var li=document.getElementsByClassName('rp_preview_img') ;

      var photo_list=[] ;
      var data_url ;
     // var img ;
      var param={} ;
          param["url"]= url_list ;
          if(!param["url"].length) return ;
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
    //删除动态接口
    var deleteStatus=function(code,self){
      var ask_code=code ;
      var url=global_path + "index.php/culture_community/deleteStatus" ;
      var param={
          ask_code : ask_code
      }
          commonAjax(url, param).then(function(data){
            if ( data && data.status && data.status==2000 ){
                 //del success
                // window.location.href = "./cultureCommunity.php" ;
                window.location.replace("./cultureCommunity.php") ;
            }
            if ( data && data.status &&data.status==4200 ){
                 //data in library no change
            }
            if ( data && data.status && data.status==4004 ){
                 //lack of param requested 
            }
          }).fail(function(){
            //net error
          })
    } ;
    //详情页面接口
    var detail_page=function(commented){
      var url=global_path+"index.php/culture_community/getDetailStatus" ;
      var param={
           //user_code:user_code ,
           ask_code:ask_code
       }
       commonAjax(url, param).then(function(data){
           if(data&&data.status&&data.status==2000){
              console.info(data) ;
              
             // var res=detail_tpl.fetch(data) ;
              if(data.data.comment_data.vote_status==0){
                flag=0 ;
              }
              if(data.data.comment_data.vote_status==1){
                flag=1 ;
           //     data.data.comment_data.upvote_num--;
              }
              if(user_info && user_info['user_code'])
                data.data.user_code = user_info['user_code'] ;
              RP.store.setItem("detail_data",data) ;


              renderData(commented) ;
              getScrollTop = getScrollTop_f() ;
            //  sendURL(data) ;
              comment_num = data.data.comment_data.comment_num ;
              vote_count=data.data.comment_data.upvote_num ; 
              zan_changeColor(vote_count) ;
              loadingHide(body) ;
           }
           else if( data && data.status && data.status==4002 ){
              loadingHide(body) ;
              alert_pop_window.setTitle("查询数据为空") ;
              alert_pop_window.show() ;
           }
           else if ( data && data.status && data.status==4004 ){
              alert_pop_window.setTitle("请求参数缺失") ;
              alert_pop_window.show() ;
           }
           else{
            //console.info(333333333333)
            loadingHide(body) ;
            alert_pop_window.setTitle("页面加载失败，请稍候重试") ;
            alert_pop_window.show() ;
           }
            
       }).fail(function(){
           loadingHide(body) ;
           errorDialog.setTitle("系统繁忙，请稍候重试")  ;
           errorDialog.show() ;
       })

    } ;
    detail_page() ;
    function renderData(commented){
      var detail_data = RP.store.getItem("detail_data") ;
   /*   var data= {} ;
      var data.detail_comment_data = detail_data.data.comment_data ;
      var data.detail_comment_to_comment_data = detail_data.data.comment_to_comment ;
      var data.comment_data_count = detail_data.data.data_count ;*/


      var comment_page_size = detail_data.data.page_size ;
      var comment_current_datetime = detail_data.data.current_datetime ;
          
      var head_res = detail_head_tpl.fetch(detail_data.data) ;
      var content_res = detail_content_tpl.fetch(detail_data.data) ;
      var comment_res = detail_comment_tpl.fetch(detail_data.data) ;
      var footer_res = detail_footer_tpl.fetch(detail_data.data) ;
          

          if(commented == true){
            $("#detail_comment").html(comment_res) ;
            $("#detail_footer").html(footer_res) ;
            return ;
          }
          $("#detail_head").html(head_res) ;
          $("#detail_content").prepend(content_res) ;
          $("#detail_comment").html(comment_res) ;
          $("#detail_footer").html(footer_res) ;

      //    sendURL(detail_data) ;
           changePic(detail_data,true) ;
    } ;

    //下拉、上拉刷新
     var slide=function(type,code){
       var url=global_path+"index.php/culture_community/getDetailStatus" ;
       var param={
           //user_code:user_code ,
           ask_code:ask_code,
           up_or_down:type,
           comment_code:code
       };
       commonAjax(url, param).then(function(data){
           if(data&&data.status&&data.status==2000){
            console.info(data) ;
            var detail_data=RP.store.getItem("detail_data") ;
            if(type=="down"){
              for(var i=0;i<data.data.comment_to_comment.length;i++){
                detail_data.data.comment_to_comment.unshift(data.data.comment_to_comment[i]) ;
              }
            }
            if(type=="up"){
              [].push.apply(detail_data.data.comment_to_comment,data.data.comment_to_comment) ;
            }
            RP.store.setItem("detail_data",detail_data) ;
            renderData(true) ;
           }
           else if(data&&data.status&&data.status==4002){
            // alert_pop_window.setTitle("查询数据为空")  ;
            // alert_pop_window.show() ;
            return ;
           }
           else if ( data && data.status && data.status==4004 ){
            alert_pop_window.setTitle("请求参数缺失") ;
            alert_pop_window.show() ;
           }
           else{
            alert_pop_window.setTitle("页面加载失败，请稍候再试") ;
            alert_pop_window.show() ;
           }
       }).fail(function(){
            errorDialog.setTitle("系统繁忙，请稍候重试") ;
            errorDialog.show() ;
       }) 
     } ;

     //获取评论码
     var getComment_code=function(type){
      var detail_data=RP.store.getItem("detail_data") ;
     // console.info(detail_data)
      if(detail_data.data.comment_to_comment.length==0) return false;
      if(type=="down"){
        var comment_code=detail_data.data.comment_to_comment[0].comment_code ;
      }
      if(type=="up"){
        var length=detail_data.data.comment_to_comment.length ;
        //console.info(length) ;
        var comment_code=detail_data.data.comment_to_comment[length-1].comment_code ;
      }
      return comment_code ;
     } ;


    //发布评论接口
    var sendComment=function(comment_content,ask_code){

     	var url=global_path+"index.php/culture_community/getComment" ;
     	var param={
            comment_content: comment_content,
            ask_code:ask_code
     	} ;
     	commonAjax(url, param).then(function(data){
     		$("#text").val('');
     		if(data&&data.status&&data.status==2000){
          //alert(1)
          //$(".wrap").find("#talk").hide() ;
         // $(".wrap").find(".jb-alert").show() ;
          $(".wrap").find(".jb-alert").hide() ;
          //window.location.href='./detailStatus.php?comment_code='+ask_code ;
          detail_page(true) ;
          $("html,body").removeClass("ovfHiden") ;
          if(scrollTop > getScrollTop )
            scrollTop = getScrollTop ;
          $(document).scrollTop(scrollTop) ;
          $("#talk").hide() ;
          
     			console.info(data) ;
     		}
        else if ( data && data.status && data.status==4002 ){
          return ;
        }
        else if ( data && data.status && data.status==4004 ){
          alert_pop_window.setTitle("请求数据格式化错误") ;
          alert_pop_window.show() ;
        }
        else if ( data && data.status && data.status==4200 ){
          alert_pop_window.setTitle("数据库没有变化") ;
          alert_pop_window.show() ;
        }
        else if ( data && data.status && data.status==4001 ){
          dialog.setTitle("您好，由于违规操作，此功能已被系统自动禁用，请遵守社区规则；如需申请解禁，请拨打客服电话400-800-5696。") ;
          dialog.setButton("呼叫客服", "确认") ;
          dialog.cancel_fn = function(){
            window.location.href = "tel:4008005696";
          }
          dialog.show() ;
        }
        else{
          alert_pop_window.setTitle("系统繁忙，请稍候重试") ;
          alert_pop_window.show() ;
        }
     	}).fail(function(){
        errorDialog.setTitle("系统繁忙，请稍候重试") ;
        errorDialog.show() ;
      }) ;

    } ;

    //点赞
    var dianzan=function(do_vote,comment_code){
      
      var url=global_path+"index.php/culture_community/getZan" ;
      var param={
        comment_code:comment_code,
        do_vote:do_vote
      }
      commonAjax(url, param).then(function(data){
        if(data&&data.status&&data.status=="2000"){
          // console.info(data.data.is_show) ;
          // alert(2);
          //点赞增加养殖币
          if(data.data){
            if(data.data.is_show == 2){
              getPointHtml('点赞',data.data.score,$('.main-section')[0]);
            }
          }
        }
        else if ( data && data.status && data.status=="4002" ){
          return ;
        }
        else if( data && data.status && data.status=="4004" ){
          alert_pop_window.setTitle("请求参数缺失") ;
          alert_pop_window.show() ;
        }
        else if( data && data.status && data.status=="4200" ){
          alert_pop_window.setTitle("数据库没有变化") ;
          alert_pop_window.show() ;
        }
        else if( data && data.status && data.status=="4001"){
          dialog.setTitle("您好，由于违规操作，此功能已被系统自动禁用，请遵守社区规则；如需申请解禁，请拨打客服电话400-800-5696。") ;
          dialog.setButton("呼叫客服", "确认") ;
          dialog.cancel_fn = function(){
            window.location.href = "tel:15900296029";
          }
          dialog.show() ;
        }
        else{
          alert_pop_window.setTitle("系统繁忙，请稍候重试") ;
          alert_pop_window.show() ;
        }
      }).fail(function(){
        alert_pop_window.setTitle("系统繁忙，请稍候重试") ;
        alert_pop_window.show() ;
      })
    } ;
    //点赞颜色变化
   function zan_changeColor(count){
     // console.info(1111) ;
     var str ;

        if(flag==1){
         // console.info(222) ;
          $(".wrap").find(".dtxq-foot-right").find("p").addClass("dtxq-foot-textcolor") ;
          str="已赞("+count+")" ;
        }
        if(flag==0){
          $(".wrap").find(".dtxq-foot-right").find("p").removeClass("dtxq-foot-textcolor") ;
          str="点赞("+count+")" ;
          console.info(str) ;
         // str=str_data ;
        }   
        $('.wrap').find(".dtxq-foot-right").find("p").html(str) ;
        cash['vote_status'] = flag ;
        cash["upvote_num"] = count ;
        cash['comment_num'] = comment_num ;
        RP.store.setItem("cash" , cash) ;
    } ;

    //回复评论
    var answerComment=function(to_user_code,comment_content,ask_code,to_comment_code){
     	var detail_data=RP.store.getItem("detail_data") ;
     	var url=global_path+"index.php/culture_community/getAnswerComment" ;
     	var param={
     		to_user_code:to_user_code ,
     		comment_content:comment_content,
     		ask_code:ask_code,
     		to_comment_code:to_comment_code
     	} ;
        commonAjax(url, param).then(function(data){
        	if(data&&data.status&&data.status==2000){
        		console.info(data) ;
            //window.location.href='./detailStatus.php?comment_code='+ask_code ;
            detail_page(true) ;
            $("html,body").removeClass("ovfHiden") ;
            if(scrollTop > getScrollTop )
               scrollTop = getScrollTop ;
            $(document).scrollTop(scrollTop) ;
            $("#talk").hide() ;
         //   window.location.reload() ;
        	}
          else if ( data && data.status && data.status==4002 ){
            return ;
          }
          else if ( data && data.status && data.status==4004 ){
            alert_pop_window.setTitle("请求数据格式化错误") ;
            alert_pop_window.show() ;
          }
          else if ( data && data.status &&data.status==4200 ){
            alert_pop_window.setTitle("数据库没有变化") ;
            alert_pop_window.show() ;
          }
          else{
            alert_pop_window.setTitle("系统繁忙，请稍候重试") ;
            alert_pop_window.show() ;
          }
        }).fail(function(){
            alert_pop_window.setTitle("系统繁忙，请稍候重试") ;
            alert_pop_window.show() ;
        })
    } ;
    

    //获取评论内容
    var commentContent=function(){
     // if(tip==0)
        var cont=$.trim($(".wrap").find("#talk").find("#text").val()) ;
      // if(tip==1){
      //   var cont=$(".wrap").find("#talk").find("#text").val().substring(call_str.length) ;
      // }
      return cont ;
    } ;

    //获取评论的字符数
    var commentCount=function(){
     // alert(1)
      //if(tip==0)
      var count=$.trim($(".wrap").find("#talk").find("#text").val()).length ;
      // if(tip==1){
      //   var count=$(".wrap").find("#talk").find("#text").val().substring(call_str.length).length ;
      // 
      // }
      return count ;
    } ;

    //获取输入字符限制数
    var limitedCount=function(){
      var num=$(".wrap").find("#talk").find(".texta-left-last").html() ;
      return num ;
    } ;
    //评论框的placeholder
    var call_back=function(name){
      //console.info(111) ;
      if(tip==1){
        var str="回复"+name+"：";
      }
      if(tip==0){
        var str="说点什么吧......" ;
      }
      $(".wrap").find("#text").attr("placeholder",str) ;

    } ;

     //bind event
    (function(){

       //评论与回复评论
      $(".wrap").on("click",".dtxq-foot-left,.chatcon-right",function(e){
          if(!user_info) { //用户未登录
            check_login() ;
            return false ;
          }
          e.stopPropagation() ;
          scrollTop = $(document).scrollTop() ;
          $(".wrap").find("#talk").show() ;
          //$('#text').val('');
          $("html,body").addClass("ovfHiden") ;
          var ua = navigator.userAgent.toLowerCase();
          if(ua.indexOf('ipad') < 0 && ua.indexOf('iphone') < 0)
             $(".wrap").find("#text").val('').trigger("focus") ; 
                 
          if($(this).hasClass("dtxq-foot-left"))
            tip=0 ;
          else{
            tip=1 ;
           var num=$(this).closest(".dtxq-chatcon").prevAll().length ;
           var detail_data=RP.store.getItem("detail_data") ;
           var to_user_code=detail_data.data.comment_to_comment[num].user_code ;
           var to_comment_code=detail_data.data.comment_to_comment[num].comment_code ;
           var name=detail_data.data.comment_to_comment[num].nick_name ;
          // if(to_user_code!==self_user_code)
           //alert(call_str) ;
           //console.info(to_comment_code) ;
           //全局对象存储参数以便回复评论
               ac={
               to_user_code:to_user_code ,
               to_comment_code:to_comment_code
           } ;

          } 
           call_back(name) ;//placeholder
          //var comment_content=
          //sendComment(comment_content, comment_code) ;

      }) ;
       
      //字数
      $(".wrap").on("input focus","#text",function(e){
          e.stopPropagation() ;
          if(e.type = "focus"){
            is_focus = true ;
          }
          if($.trim(this.value)!==""){
            $(this).closest("#talk").find(".btn-base").addClass("main-texta-btnchecked") ;
          }
          else{
            $(this).closest("#talk").find(".btn-base").removeClass("main-texta-btnchecked") ;
          }
          var limitLen=limitedCount() ;
          var str=$.trim($(this).val()) ;
          var len=gainStrlen(str,limitLen) ;
          $(this).val(len.ret_str);
          $(this).parent().next().find("#str_num").html(len.ret_num)
      }) ;
      
      //回复-粘贴文字超过字数限制时提示
      $.fn.pasteEvents = function( delay ) {
        if (delay == undefined) delay = 20;
        return $(this).each(function() {
            var $el = $(this);
            $el.on("paste", function() {
                $el.trigger("prepaste");
                setTimeout(function() { $el.trigger("postpaste"); }, delay);
            });
        });
      };
    
      $("#text").on("postpaste", function() { 
        var limitLen=limitedCount() ; //已规定的限制字数
        var str=$.trim($(this).val()) ; 
        if(str.length > limitLen){
          alert_pop_window.setTitle("文本过长") ;
          alert_pop_window.show() ;
        }
      }).pasteEvents();

      //发布与回复评论
      $(".wrap").on("click",".btn-base",function(e){
          e.stopPropagation() ;
          if(!$(this).hasClass("main-texta-btnchecked")){
            //alert("发布内容不能为空") 
            alert_pop_window.setTitle("发布内容不能为空") ;
            alert_pop_window.show() ;
            return ;
          }
          var comment_content=commentContent ;
          if(tip==0){
            sendComment(comment_content, ask_code) ;
          }
          else{
           // alert(1)
            var to_user_code=ac.to_user_code,
                to_comment_code=ac.to_comment_code ;
            answerComment(to_user_code, comment_content, ask_code, to_comment_code) ;
          }
          //alert(1)
          
      }) ;

       //点赞
      $(".wrap").on("click",".dtxq-foot-right",function(e){
          if(!user_info){
            check_login() ;
            return false ;
          }
          e.stopPropagation() ;
          var do_vote ;
         // var count=$(this).find("span").html() ;
          // var detail_data=RP.store.getItem("detail_data") ;
          //     vote_count=detail_data.data.comment_data.upvote_num ; 
         // alert(count)
          if(flag==0) {
              vote_count++ ;
              do_vote="add" ;
              flag=1 ;
          }
          else{
              vote_count--;
              do_vote="sub" ;
              flag=0 ;
          }
          console.info("vote_count"+vote_count) ;
          zan_changeColor(vote_count) ;
         // $(this).find("span").html(count) ;
          dianzan(do_vote, ask_code) ;
      }) ;
      
      //取消评论
      $(".wrap").on("click",".mask",function(){
        $(this).parent().hide() ;
        is_focus = false ;
        $("html,body").removeClass("ovfHiden") ;
        $(document).scrollTop(0) ;
      })
   

      //跳转到个人主页
      $(".wrap").on("click",".chatcon-left",function(e){
          e.stopPropagation() ;
          var num=$(this).closest(".dtxq-chatcon").prevAll().length ;
          var detail_data=RP.store.getItem("detail_data") ;
          var user_code=detail_data.data.comment_to_comment[num].user_code ;
          window.location.href="./person_mainPage.php?user_code="+user_code ;
      }) ;

      //往回跳
      $(".wrap").on("click",".back-btn",function(e){

          e.stopPropagation() ;
          if ( from == "index" )
            window.location.href="./cultureCommunity.php?from=detailStatus" ;
          if ( from == "person_mainPage" )
            window.location.href="./person_mainPage.php?user_code="+user_code ;

      }) ;


      //举报弹窗显示
     $(".wrap").on("click",".diandian-btn",function(e){
      
        e.stopPropagation() ;
        $("#accuse").show() ;
     }) ;

     //举报页面跳转
     $(".wrap").on("click",".footer-alert-top",function(e){
        if(!user_info) { //用户未登录
          check_login() ;
          return false ;
        }
        e.stopPropagation() ;
        var detail_data=RP.store.getItem("detail_data") ;
        var code=detail_data.data.comment_data.ask_code ;
        //alert(code) ;
        window.location.href="./cultureAccusation.php?comment_code="+code ;
     }) ;

     //取消举报
     $(".wrap").on("click",".footer-alert-bottom",function(e){

        e.stopPropagation() ;
        $("#accuse").hide() ;
     }) ;


    //删除动态
     $(".wrap").on("click",".delete_status",function(e){
       e.stopPropagation() ;
       var self = this ;
      //  console.info(length) ;
        var content=RP.store.getItem("detail_data") ;
        var ask_code=content.data.comment_data.ask_code ;
        console.info(ask_code) ;

       errorDialog.setTitle("是否删除？") ;
       errorDialog.confirm_fn = function(){
       // $(this).closest(".yzsq-maincon").remove() ;
         //del status
         deleteStatus(ask_code , self ) ;
       }
       errorDialog.show() ;
     })

     })() ;

     //滑动
     function sildeLoad(){
        //滑动加载
      var start={
           X: 0,
           Y:0
          },
          end={
           X:0,
           Y:0
          } ,
          isTouched ,
          slideDir ;   
      var detail_id=document.getElementById('detail') ;
          
          detail_id.addEventListener("touchstart",function(e){
            // e.preventDefault() ;
            var finger=e.changedTouches[0] ;
                start.X=finger.pageX ;
                start.Y=finger.pageY ;
                return ;
          },false) ;
          detail_id.addEventListener("touchmove",function(e){
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
                    if(!is_focus)
                     e.preventDefault() ;
                      slideDir = "down" ;
                      return ;
                   }
                 if($(document).scrollTop()>=$(document).height()-$(window).height() && end.Y<start.Y){
                  if(!is_focus)
                   e.preventDefault() ;
                    slideDir = "up" ;
                 }
            },false) ;
          detail_id.addEventListener("touchend",function(e){
            // e.preventDefault() ;
            if(!isTouched) return ;
            var finger=e.changedTouches[0] ;
                end.X=finger.pageX ;
                end.Y=finger.pageY ;

                if(end.Y==start.Y) return ;
                if($(document).scrollTop()==0 && end.Y>start.Y){
                       if( slideDir == "down" ){
                        var code = getComment_code(slideDir) ;
                        if(code) slide(slideDir,code) ;
                        return ;
                       }
                }
               if($(document).scrollTop()>=$(document).height()-$(window).height() && end.Y<start.Y){
                   if( slideDir == "up" ){
                    var code = getComment_code(slideDir) ;
                    if(code) slide(slideDir,code) ;

                    return ;
                   }
               }
          },false)

          

      }  ;
      sildeLoad() ;
    //scroll event 
    /*$(window).scroll(function(){

      console.info(22222222)
        if($(document).scrollTop()==0){
            console.info(1111)
            var code = getComment_code("down") ;
            if(code) slide("down",code) ;
            return ;
           
        }
       if($(document).scrollTop()>=$(document).height()-$(window).height()){
           
            var code = getComment_code("up") ;
            if(code) slide("up",code) ;

            return ;
           
       }
    }) ;*/
      
      //图片放大预览
        (function(){
          $(".wrap").on("click",".rp_preview_img",function(e){
            e.stopPropagation() ;
            $("body,html").addClass("ovfHiden") ;
            var index = $(this).attr('data-index') ;
            console.info(index) ;
            var imgs = $(this).closest('.rp_preview_wrap').attr('data-multiple_imgs') ;
            //console.info(imgs) ;
           // var imgs_html = getImgList(JSON.parse(imgs)) ;
           var imgs_html = getImageList(JSON.parse(imgs)) ;

            $('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
            $('#rp_preview_wrap').show() ;
            mySwiper = new Swiper ('.swiper-container',{pagination:".swiper-pagination",paginationClickable:true}) ;
            mySwiper._slideTo(index,0) ;     
          }) ;
          //点击大图隐藏
          $(".wrap").on("click",".swiper-slide",function(e){
            e.stopPropagation() ;
            $("body,html").removeClass("ovfHiden") ;
            $(this).closest("#rp_preview_wrap").hide() ;
          }) ;
        })() ;
        
        //关闭下载条
	    $('.wrap').on('click','.closetopdownload',function(){
	    	$('.topdownload').hide();
	    })
	     $('.wrap').on('click','#download',function(){
	    	 var ua = navigator.userAgent.toLowerCase();
	    	 if (ua.indexOf('ipad') > -1||ua.indexOf('iphone') > -1){
	        	 window.location.href="https://itunes.apple.com/us/app/yang-zhi-bao/id1112414634?l=zh&ls=1&mt=8";
	          }else{
	        	 window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.consumer#opened";
	          }
	    	    
	     })
        
     
    }) ;