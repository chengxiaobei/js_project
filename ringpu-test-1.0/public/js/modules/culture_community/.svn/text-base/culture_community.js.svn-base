 require(['global','jquery','jsmart','dialog','swiperBig'],function(global,$,jsmart,dialog,swiper){
    var dynamics_tpl=new jSmart($("#dynamics_tpl").html()) ;
    var person_tpl=new jSmart($("#person_tpl").html()) ;
    var communitybg_tpl=new jSmart($("#communitybg_tpl").html());
    var user_info = RP.store.getItem('curr_user_info') ;
    //var section=document.getElementsByClassName('main-section')[0] ;
    var body = document.getElementsByTagName('body')[0] ;
    var len=0 ;//存储li的个数
    var vote_status ;
    var wrongDialog=new Dialog({type:"alert"}) ;
    var systemDialog=new Dialog({type:"confirm_guide"}) ;
    var share = getQueryString('share');
    //preview big pic
    var mySwiper = new Swiper ('.swiper-container',{
                                    pagination:".swiper-pagination",
                                    paginationClickable:true,
                                    effect:'slide'
                                    }) ;
    //公共弹窗
//    var dialog=new Dialog({type:"confirm_guide"}) ;
   
   
    //用户没有登录
    var check_login=function(){
        check_login_module() ;
      // $(".wrap").eq(0).show() ;
    } ;
    if(share == 'share'){
		 $('.topdownload').show();
	}
    //获取字符串的像素
    var getStrPixel=function(str,strLength){
       var tmp = 0;  
       var len = 0;  
           for(var i=0;i<strLength;i++)  
           {  
            if(str.charCodeAt(i)>255)  
             tmp += 2  
            else  
             len += 1    
           } 
           return tmp+len ;
    } ;
    //获取指定占位数的字符
    var getStr=function(str,len){
      var tmp=0;
      var g_str="";
          for(var i=0;i<str.length;i++){
              if(str.charCodeAt(i)>255)
                tmp+=2;
              else
                tmp+=1 ;
              if(tmp<=len)
                g_str+=str.charAt(i) ;
              else
                break ;
          }
          return g_str ;
    } ;
    function getStrlenth(str,len) {
      var hanzi_num = 0 ;
      var char_num = 0 ;
      var total_num = 0 ;
      var ret_num = 0 ;
      var ret_str = '' ;
       //console.info(str.length) ;
      for(var i=0;i<str.length;i++){ 
          if(str.charCodeAt(i)>255){  
              hanzi_num++ ;
          }else{  
              char_num++ ;
          }
          total_num = hanzi_num * 2 + char_num ;

          ret_num = hanzi_num * 1 + (( char_num % 2 == 0 ) ? (char_num / 2 ) : (parseInt(char_num / 2) + 1));
          if(ret_num<=len){
              ret_str += str.charAt(i);
             }
      }  
         
      return {
          ret_str : ret_str ,
          ret_num : ret_num
      };

} ;

    //消息提醒滚动显示
    var scrollTip=function(){

      var newsTipStr=$("#news_left").html() ;

      var newsTipStrLen=newsTipStr.length ;
      var newsTipContentWidth=getStrPixel(newsTipStr,newsTipStrLen) ;
           if(newsTipContentWidth>24){
            var marquee=document.createElement("marquee") ;
                marquee.innerHTML=newsTipStr ;
                marquee.setAttribute("behavior","scroll") ;
                marquee.setAttribute("direction","left") ;
                marquee.setAttribute("scrollamount","2") ;
            var news_p=document.getElementById('news_left') ;
                news_p.innerHTML="" ;
                news_p.appendChild(marquee) ;
               // console.info(marquee.innerHTML) ;
           }
    } ;
    //获取屏幕宽度
    (function(){
      var pageSize=winSize() ;
      console.info(pageSize.width) ;
    })() ;
    var phoneWidth={
      "320" : 70 ,
      "360" : 82 ,
      "768" : 175  
    } ;
    //省略显示
    var omitShow=function(data,num){
      //var content=RP.store.getItem("content") ;
      var detail_content=data.data.data_list ;
      for(var i=0 in detail_content){
        var str=detail_content[i].ask_content ;
        var len= getStrlenth(str,num) ;
           // console.info(len) ;
            if(len.ret_num>num){
              detail_content[i].ask_content=len.ret_str+"..." ;
            }
            else{
              detail_content[i].ask_content=str ;
            }
      }
      //console.info("code====>"+detail_content[0].ask_code) ;
      return detail_content ;
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
    //change pic
    function changePic(data,tr){
   //   console.info(1111)
      var li=document.getElementsByClassName('rp_preview_img') ;
    //  console.info(li.length) ;
      var url_list=storeURL(data) ;
    //  console.info(url_list) ;
      var length=li.length ;
          li = [].slice.call(li) ;
          li=[].slice.call(li) ;
          if(tr==undefined)
          li.splice(0,len) ;
          if(tr == "down")
            li.splice(length-len,len) ;
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
    var deleteStatus=function(code,self,content,len){
      var ask_code=code ;
      var url=global_path + "index.php/culture_community/deleteStatus" ;
      var param={
          ask_code : ask_code
      }
          commonAjax(url, param).then(function(data){
            if ( data && data.status && data.status==2000 ){
                 //del success
                 $(self).closest(".yzsq-maincon").remove() ;
                 content.splice(len-1,1) ;
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

    //用户头像获取
    (function(){
      //用户未登录
      if(!user_info) return ;
      // loadingShow(document.getElementsByTagName('body')[0]) ;
      var url=global_path+"index.php/culture_community/getPhoto" ;
      var param={} ;

      commonAjax(url,param).then(function(data){
      console.info(data) ;
      if(data&&data.status&&data.status==2000){
          renderData(data,"person") ;
         }
      else{

          }
      })

  })() ;

    //养殖社区上边的背景图片获取
    (function(){
      var url=global_path+"index.php/culture_community/getCommunityBg" ;
      var param={
        type : "FC"
      } ;

      commonAjax(url,param).then(function(data){
      console.log(data) ;
      if(data&&data.status&&data.status==2000){
         var communitybgRes=communitybg_tpl.fetch(data) ;
         $("#communitybg").html(communitybgRes) ;
         }else{

          }
      })

  })() ;

   //消息提醒
    (function(){
      var news_data=RP.store.getItem("news_data") ;
      if(!user_info) return ; //用户未登录
      
      if(news_data){
        RP.store.removeItem("news_data") ;
      }

      var url=global_path+"index.php/culture_community/getNewsTip" ;
      var param={} ;

      commonAjax(url, param).then(function(data){
        console.info(data) ;
        var news_tpl=new jSmart($("#news_tpl").html()) ;
        if(data&&data.status&&data.status==2000){
          if(data.data.length){
            RP.store.setItem("news_data",data) ;
             var res=news_tpl.fetch(data) ;
             $("#news").html(res).show() ;
             scrollTip() ;
          }
          else{
            return ;
          }
         
        }
      }) ;

  })() ;

   //动态内容渲染
    (function(){
      loading_show(body) ;  
      var from = getQueryString('from') ;
      var content=RP.store.getItem("content") ;
      var which_detail = Number(RP.store.getItem("which_detail")) ;
      var cash = RP.store.getItem("cash") ;
     
          if(!user_info){ //用户未登录
            $("#unperson").show() ;
            $("#person").hide() ;
/*            if(content){
               renderData(content,"dynamics") ;
               loadingHide(body) ; 
            //   sendURL(content) ;
            changePic(content,true) ;
               return ;
            }*/
          }
  
         if(from  && from=="detailStatus"){
            if(content){
              if(user_info["user_code"] == content["user_code"]){
                  //改变点赞和评论的数目                  
                    if( which_detail || which_detail == 0 && cash ){
                        content.data.data_list[which_detail].comment_num = cash["comment_num"] ;
                        content.data.data_list[which_detail].upvote_num = cash["upvote_num"] ;
                        content.data.data_list[which_detail].vote_status = cash["vote_status"] ;
                    
                    }
                    RP.store.setItem("content",content) ;
                  renderData(content,"dynamics") ;
                  loadingHide(body) ; 
                  changePic(content,true) ;
                  var scroll_top = RP.store.getItem("scrollTop") ;//记录滚动条的高度
                  if(scroll_top)
                    $(document).scrollTop(scroll_top) ;
                    RP.store.removeItem("scrollTop") ;
                    return ;
              }            
            }
         }
    
       
        
      if(content)
        //切换账户
        RP.store.removeItem("content") ;  
        
      var url=global_path+"index.php/culture_community/getStatus" ;
      var param={

          page_size: 20
        } ;
      
        commonAjax(url,param).then(function(data){
          console.info(data) ;
          if(data&&data.status&&data.status==2000&&data.data){
            if(data.data.data_list.length){
              //console.info(1111)
            //RP.store.setItem("dynamics",JSON.stringify(data)) ;
            if(user_info && user_info["user_code"]){
               data["user_code"] = user_info["user_code"] ;
            }
             // console.info(data["user_code"]) ;
            data.data.data_list=omitShow(data,36) ;
           // cutPhoto(data) ;
           // console.info("content===>"+data.data.data_list[0].ask_content) ;
            RP.store.setItem("content",data) ;
            //data_count=data.data.data_count ;
            renderData(data,"dynamics") ;
            loadingHide(body) ;
           // sendURL(data) ;
           // handle() ;
           changePic(data,true) ;

            }
            else{
              return ;
            }
            
          }
          else if( data&&data.status&&data.status==4002 ){
              loadingHide(body) ;
              // wrongDialog.setTitle("查询数据为空") ;
              // wrongDialog.show() ;
              $("#dynamics").append("<div class='public-none'>暂时没有需要的信息~</div>") ;
          }
          else if ( data && data.status && data.status==4004 ){
             loadingHide(body) ;
             wrongDialog.setTitle("请求参数缺失") ;
             wrongDialog.show() ;
          }
          else{
            loadingHide(body) ;
            wrongDialog.setTitle("页面加载失败，请稍候重试") ;
            wrongDialog.show() ;
          }


        }).fail(function(){
             // systemDialog.setTitle("系统繁忙，请稍候重试") ;
             // systemDialog.show() ;
             loadingHide(body) ;
             var ret = getErrorPage("system") ;
             $("body").append(ret) ;
        })

   })();

    var getDownStatus = function(){
      // loading_show(body) ;
      var content=RP.store.getItem("content") ;
      if(content)
        RP.store.removeItem("content") ;
      var url=global_path+"index.php/culture_community/getStatus" ;
      var param={

          page_size: 20
        } ;
      
        commonAjax(url,param).then(function(data){
          console.info(data) ;
          if(data&&data.status&&data.status==2000&&data.data){
            if(data.data.data_list.length){
              //console.info(1111)
            //RP.store.setItem("dynamics",JSON.stringify(data)) ;
            if(user_info && user_info["user_code"]){
               data["user_code"] = user_info["user_code"] ;
            }
             // console.info(data["user_code"]) ;
            data.data.data_list=omitShow(data,36) ;
           // cutPhoto(data) ;
           // console.info("content===>"+data.data.data_list[0].ask_content) ;
            RP.store.setItem("content",data) ;
            //data_count=data.data.data_count ;
            renderData(data,"dynamics",true,"down") ;
       //     var res= dynamics_tpl.fetch(data) ;
            loadingHide(body) ;
           // sendURL(data) ;
           // handle() ;
           changePic(data,true) ;

            }
            else{
              return ;
            }
            
          }
          else if( data&&data.status&&data.status==4002 ){
              wrongDialog.setTitle("查询数据为空") ;
              wrongDialog.show() ;
          }
          else if ( data && data.status && data.status==4004 ){
             wrongDialog.setTitle("请求参数缺失") ;
          }
          else{
            wrongDialog.setTitle("页面加载失败，请稍候重试") ;
            wrongDialog.show() ;
          }
        }).fail(function(){
             // systemDialog.setTitle("系统繁忙，请稍候重试") ;
             // systemDialog.show() ;
             loadingHide(body) ;
             var ret = getErrorPage("system") ;
             $("body").append(ret) ;
        })
    } ;
   //点赞接口
    var dianzan = function(do_vote,comment_code,length,count){
      var url=global_path+"index.php/culture_community/getZan" ;
      var param={
        comment_code:comment_code,
        do_vote:do_vote
      } ;

      commonAjax(url, param).then(function(data){
        console.info(data.data);
        if(data.data){
          if(data.data.is_show == 2){
            getPointHtml('点赞',data.data.score,$('.main-section')[0]);
          }
        }
        else if( data && data.status && data.status=="4001"){
          systemDialog.setTitle("您好，由于违规操作，此功能已被系统自动禁用，请遵守社区规则；如需申请解禁，请拨打客服电话400-800-5696。") ;
          systemDialog.setButton("呼叫客服", "确认") ;
          systemDialog.cancel_fn = function(){
            window.location.href = "tel:4008005696";
          }
          systemDialog.confirm_fn = function(){
            window.location.reload();
          }
          systemDialog.show() ;        
        }
          
        var content = RP.store.getItem("content") ;
            content.data.data_list[length].vote_status = vote_status ;
            content.data.data_list[length].upvote_num = count ;
            RP.store.setItem("content" , content) ;
      }).fail(function(){
          systemDialog.setTitle("系统繁忙，请稍候重试") ;
          systemDialog.setButton("返回", "确认") ;
          systemDialog.cancel_fn = null;
          systemDialog.show() ;
      }) ;
    } ;



    //渲染函数
    function renderData(data,type,tr,direc){

      if(type=="dynamics"){
          var res= dynamics_tpl.fetch(data) ;
          if( direc == "down" ){
              if( tr == true ){
                  $("#dynamics").html(res) ;
                  return ;
                }
              //若是存在置顶，则在置顶动态之后插入，若没有，则在最前方插入
              if($("#dynamics .yzsq-maincon[weight='999']")[0]){
                $("#dynamics .yzsq-maincon[weight='999']").after(res);
              }else{
                $("#dynamics").prepend(res) ; 
              }
          }
          else if ( direc == "up" ){
               $("#dynamics").append(res) ;
          }
          else{
              $("#dynamics").html(res) ; 
          }        
      }
      if(type=="person"){
        var res=person_tpl.fetch(data) ;
        $("#person").html(res) ;
      }
    

  } ;

   //下拉刷新
     function slideDown(code){
        var page_size=20 ;
        var url=global_path+"index.php/culture_community/getStatus" ;
        var param={
          up_or_down: "down",
          page_size:20 ,
          ask_code:code
        } ;
        commonAjax(url,param).then(function(data){
                
            if(data&&data.status&&data.status==2000&&data.data){
            	      console.log(data);
                 if(!data.data.data_list.length) return ;
                // console.info(111);
                 data.data.data_list=omitShow(data,36) ;
                 if(user_info && user_info["user_code"]){
                     data["user_code"] = user_info["user_code"] ;
                  }
                 var content=RP.store.getItem("content") ;
                // data_count=data.data.data_count ;
                if(content){
                  if(data.data.data_list.length){
                    if(data.data.data_count>data.data.page_size){
                      RP.store.removeItem("content") ;
                      RP.store.setItem("content",data) ;
                      renderData(data,"dynamics",true,"down") ;
                    //  loadingHide(document.getElementById('dynamics')) ;
                 //     sendURL(data,true) ;
                  changePic(data) ;
                      return ;
                    }
                    for(var m=data.data.data_list.length-1;m>=0;m--){
                      content.data.data_list.unshift(data.data.data_list[m]) ;
                    }
                    RP.store.setItem("content",content) ;
                    renderData(data,"dynamics",false,"down") ;
                 //   loadingHide(document.getElementById('dynamics')) ;
               //     sendURL(data) ;
                changePic(data,"down") ;
                  }
                  else{
                 //   loadingHide(document.getElementById('dynamics')) ;
                    return ;
                  }
                
                }  
            }
            if(data&&data.status&&data.status==4002){
              // wrongDialog.setTitle("查询数据为空") ;
              // wrongDialog.show() ;
           //   loadingHide(document.getElementById('dynamics')) ;
              return ;
            }
            }).fail(function(){
          //    loadingHide(document.getElementById('dynamics')) ;
              systemDialog.setTitle("系统繁忙，请稍候重试") ;
              systemDialog.show() ;
        }) ;
       

      } ;

      //上拉查询
      var sildeUp=function(code){
         var url=global_path+"index.php/culture_community/getStatus" ;
         var param={
          up_or_down:"up" ,
          page_size:20 ,
          ask_code:code
         } ;
         commonAjax(url, param).then(function(data){
          if(data&&data.status&&data.status==2000){
            if(data.data.data_list.length){
              // console.info(data) ;
              // console.info(222) ;
                if(user_info && user_info["user_code"]){
                   data["user_code"] = user_info["user_code"] ;
                }
                data.data.data_list=omitShow(data,36) ;
            var content=RP.store.getItem("content") ;
            //data_count=data.data.data_count ;
            if(content){
               [].push.apply(content.data.data_list,data.data.data_list) ;
               RP.store.setItem("content",content) ;
            }
            renderData(data,"dynamics",false,"up") ;
         //   loadingHide(document.getElementById('dynamics')) ; 
         //   sendURL(data) ;
          changePic(data) ;
            }
            else{
          //    loadingHide(document.getElementById('dynamics')) ; 
              return ;
            }
            
          }
          else if(data&&data.status&&data.status==4002){
            // wrongDialog.setTitle("查询数据为空") ;
            // wrongDialog.show() ;
         //   loadingHide(document.getElementById('dynamics')) ; 
            return ;
          }
          else if(data && daata.status && data.status==4004){
       //     loadingHide(document.getElementById('dynamics')) ; 
            wrongDialog.setTitle("请求参数格式错误") ;
            wrongDialog.show() ;
          }
          else{
        //    loadingHide(document.getElementById('dynamics')) ; 
            wrongDialog.setTitle("页面加载失败，请稍候重试") ;
            wrongDialog.show() ;
          }

         }).fail(function(){
       //   loadingHide(document.getElementById('dynamics')) ; 
          systemDialog.setTitle("系统繁忙，请稍候重试") ;
          systenDialog.show() ;
         })
      } ;
      //获取动态唯一标识码
      var getAsk_code=function(type){
        var ask_code ;
        var content=RP.store.getItem("content") ;
        if(content.data.data_list.length==0)  return false ;
         if(type=="down"){
          ask_code=content.data.data_list[0].ask_code ;
         }
         if(type=="up"){
          var length=content.data.data_list.length ;
          ask_code=content.data.data_list[length-1].ask_code ;
         }
         return ask_code ;
      } ;



  	  //业务罗辑
      (function(){

       	$(".wrap").on("click",".maincon-left-img",function(){
          //跳转到个人主页
          //alert(1)
       /*   if(!user_info) { //用户未登录
            check_login() ;
            return false ;
          }*/
          var length=$(this).closest(".yzsq-maincon").prevAll().length ;
          var content=RP.store.getItem("content") ;
          var user_code=content.data.data_list[length].user_code ;
       		window.location.href="./person_mainPage.php?user_code="+user_code + "&bust=" + new Date() ;

       	}) ;

        //跳转到本人的个人主页
        $(".wrap").on("click",".person_image",function(e){
          e.stopPropagation() ;
          if(!user_info) { //用户未登录
            check_login() ;
            return false ;
          }
          window.location.href="./person_mainPage.php?user_code="+user_info["user_code"]+"&bust="+ new Date() ;
        })

        //点赞

        $(".wrap").on("click",".linefive-aixin",function(e){

          e.stopPropagation() ;
          if(!user_info) { //用户未登录
            check_login() ;
            return false ;
          }
          var $this=$(this) ;
          var count=Number($this.find("#count").html()) ;
          var length=$(this).closest(".yzsq-maincon").prevAll().length ;  
          //console.info("length===>"+length) ;
          var content=RP.store.getItem("content") ;
          var comment_code=content.data.data_list[length].ask_code ;
          var do_vote ;
          //点赞样式变化
          if($this.hasClass("linefive-aixinchecked")){
              $this.removeClass("linefive-aixinchecked") ;
              count-- ;
              do_vote="sub" ;
              vote_status = 0 ;
          }else{
              $this.addClass("linefive-aixinchecked") ;
              count++ ;
              do_vote="add" ;
              vote_status = 1 ;
          }   
            $(this).find("#count").html(String(count)) ;    
            dianzan(do_vote,comment_code,length,count) ;
           
        }) ;

        //跳转到动态详情页
        $(".wrap").on("click",".linefive-chatnum",function(e){
          e.stopPropagation() ;
          if(!user_info) { //用户未登录
            check_login() ;
            return false ;
          }
          var length=$(this).closest(".yzsq-maincon").prevAll().length ;
              RP.store.setItem("which_detail",String(length)) ;
          var content=RP.store.getItem("content") ;
          var comment_code=content.data.data_list[length].ask_code ;
          var user_code=content.data.data_list[length].user_code ;
          // RP.store.setItems("comment_code",comment_code) ;
          //console.info('comment_code====>'+comment_code)
          var scrollTop = $(document).scrollTop() ;
        //  console.info(scrollTop) ;
          RP.store.setItem("scrollTop",scrollTop) ;
          window.location.href="./detailStatus.php?comment_code="+comment_code+"&user_code="+user_code+"&from=index&bust="+ new Date() ;

        }) ;

        $(".wrap").on("click",".yzsqrig-linethree",function(e){
          e.stopPropagation() ;
        /*  if(!user_info) { //用户未登录
            check_login() ;
            return false ;
          }*/
          var length=$(this).closest(".yzsq-maincon").prevAll().length ;
              RP.store.setItem("which_detail",String(length)) ;
        //  console.info(length) ;
          var content=RP.store.getItem("content") ;
       //  console.info(content) ;
          var comment_code=content.data.data_list[length].ask_code ;
          var user_code=content.data.data_list[length].user_code ;
          var scrollTop = $(document).scrollTop() ;
       //   console.info(scrollTop) ;
          RP.store.setItem("scrollTop",scrollTop) ;
          window.location.href="./detailStatus.php?comment_code="+comment_code+"&user_code="+user_code+"&from=index&bust="+ new Date() ;

        }) ;

        //跳转到发动态页
        $(".wrap").on("click",".chat-btn",function(){
          if(!user_info) { //用户未登录
            check_login() ;
            return false ;
          }
          window.location.href="./sendStatus.php?bust="+ new Date() ;
        }) ;

        //跳转到消息详情页
        $(".wrap").on("click",".yzsq-hfbg",function(){
          window.location.href="./communityNews.php" ;
        }) ;
       
       //删除动态
       $(".wrap").on("click",".delete_status",function(e){
         e.stopPropagation() ;
         var self = this ;
          var length=$(this).closest(".yzsq-maincon").prevAll().length ;
        //  console.info(length) ;
          var content=RP.store.getItem("content") ;
          var ask_code=content.data.data_list[length].ask_code ;
          console.info(ask_code) ;

         systemDialog.setTitle("是否删除？") ;
         systemDialog.confirm_fn = function(){
         // $(this).closest(".yzsq-maincon").remove() ;
           //del status
           deleteStatus(ask_code , self ,content.data.data_list ,length) ;
         }
         systemDialog.show() ;
       })
      })() ;

      function sildeLoad(){
        //滑动加载
        // if(!user_info) return ;
        var start={
             X: 0,
             Y:0
            },
            end={
             X:0,
             Y:0
            } ;
        var isTouched ;
        var slideDir ;
        //var dynamics_id=document.getElementById('dynamics') ;
        var body = document.getElementsByClassName('wrap')[0] ;
            body.addEventListener("touchstart",function(e){
              // e.preventDefault() ;
              var finger=e.changedTouches[0] ;
                  start.X=finger.pageX ;
                  start.Y=finger.pageY ;
                  scrollTop = $(document).scrollTop() ;
              //    alert(scrollTop)
                  return ;
            },false) ;
            body.addEventListener("touchmove",function(e){
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
                    // alert(11111)
                      slideDir = "down" ;
                      return ;
                   }
                 if($(document).scrollTop()>=$(document).height()-$(window).height() && end.Y<start.Y){
                   e.preventDefault() ;
                    slideDir = "up" ;
                 }
                 
            },false) ;
            body.addEventListener("touchend",function(e){
              // e.preventDefault() ;
              if(!isTouched) return ;
              var finger=e.changedTouches[0] ;
                  end.X=finger.pageX ;
                  end.Y=finger.pageY ;

                   if(end.Y==start.Y) return ;
                   if($(document).scrollTop()==0 && end.Y>start.Y){
                    //  loadingShow(document.getElementById('dynamics')) ; 
                       if( slideDir == "down" ){
                        // var code = getAsk_code(slideDir) ;
                        // if(code) slideDown(code) ;
                       getDownStatus() ;
                        return ;
                       }
                    }
                   if($(document).scrollTop()>=$(document).height()-$(window).height() && end.Y<start.Y){
                   //    loadingShow(document.getElementById('dynamics')) ; 
                       if( slideDir == "up" ){
                        var code = getAsk_code(slideDir) ;
                        if(code) sildeUp(code) ;
                        return ;
                       }
                   }
                
            },false) ;
      }  ;
      sildeLoad() ;

        //图片放大预览 插件swiper
        (function(){
          //动态中页面放大预览
          $(".wrap").on("click",".rp_preview_img",function(e){
            e.stopPropagation() ;
         //   scrollTop = $(document).scrollTop() ;
         //   alert(scrollTop)
            $("body,html").addClass("ovfHiden") ;
            var index = $(this).attr('data-index') ;
             //console.info(index) ;
            var imgs = $(this).closest('.rp_preview_wrap').attr('data-multiple_imgs') ;
          //  var imgs_html = getImgList(JSON.parse(imgs)) ;
            var imgs_html = getImageList(JSON.parse(imgs)) ;
              console.info(imgs_html) ;
            $('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
            $('#rp_preview_wrap').show() ;
            mySwiper.init() ;
            mySwiper._slideTo(index,0) ;
          }) ;
          //点击大图隐藏
        $(".wrap").on("click",".swiper-slide",function(e){
          e.stopPropagation() ;
       //   $(document).scrollTop(scrollTop)  ;
          $(this).closest("#rp_preview_wrap").hide() ;
          $("body,html").removeClass("ovfHiden") ;
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
        
        

      

      }) 