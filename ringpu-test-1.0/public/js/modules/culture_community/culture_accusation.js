    require(['global','jsmart','jquery','dialog','validator'],function(global,jsmart,$,dialog,_){

    var comment_code=getQueryString("comment_code") ;
    //pop window of error
    var errorDialog = new Dialog({type:"alert"}) ;

    //获取输入字符长度
    var str_len=function(){
      var len=$.trim($("#text").val()).length ;
      return len;
    } ;

    var getReports=function(){
      var rep=[] ;
      var chosenList=$(".jb-choosechecked") ;
      if(chosenList){
        var len=$(".jb-choosechecked").length ;
        for(var i=0;i<len;i++){
           var text=$.trim(chosenList.eq(i).parent().text()) ;
           rep.push(text) ;
        }
      }
      
      if($(".jb-choosetwo-checked")){
        var tex=$.trim($("#text").val()) ;
        rep.push(tex) ;
      }
      return rep ;
    } ;
    //发送按钮颜色变化
    var changeButtonColor=function(){
      if($(".jb-choosechecked").length!==0){
        $(".jb-fasongbtn").find("a").removeClass("grey-bluebtn") ;
      }
      else if($("#text").val().length!==0){
        $(".jb-fasongbtn").find("a").removeClass("grey-bluebtn") ;
      }
      else{
        $(".jb-fasongbtn").find("a").addClass("grey-bluebtn") ;
      }
    } ;

    //发布举报
    var sendAccusation=function(code,rep){
      var url=global_path+"index.php/culture_community/sendAccusation" ;
      var param={
          comment_code:code ,
          reports:rep
      };
      commonAjax(url, param).then(function(data){
        if(data&&data.status&&data.status==2000){
          console.info(data) ;
          // var ID=setTimeout(function(){
            // alert(1)
            //window.location.href="./detailStatus.php?comment_code="+comment_code ;
            window.location.href="./cultureCommunity.php" ;
            // clearTimeout(ID) ;
         //  },500);
          
        }
      }).fail(function(){
        errorDialog.setTitle("系统繁忙，请稍候重试") ;
        errorDialog.show() ;
      })
    } ;


    (function(){

      //选择原因
      $(".wrap").on("click",".right",function(e){
      	e.stopPropagation() ;
      	if(!$(this).hasClass("jb-choosetwo-unchecked")){
            $(this).addClass("jb-choosechecked") ;
      	    $(this).parent().siblings().find("span").removeClass("jb-choosechecked") ;
      	    $(this).parent().siblings(".jb-choosetwo").find("span").removeClass("jb-choosetwo-checked");
            $(this).parent().siblings(".jb-choosetwo").find(".jb-maintexta").hide() ;
            $(".grey-bluebtn").removeClass("grey-bluebtn") ;
      	}
      	else{
      		$(this).addClass("jb-choosetwo-checked") ;
          $(this).nextAll(".jb-maintexta").show() ;
      		$(this).parent().siblings().find("span").removeClass("jb-choosechecked") ;
      	}
       // $(".grey-bluebtn").removeClass("grey-bluebtn") ;
        /*if(!$(this).hasClass("jb-choosetwo-unchecked")){
          $(this).toggleClass("jb-choosechecked") ;
        }
        else{
          $(this).toggleClass("jb-choosetwo-checked") ;
          if($(this).hasClass("jb-choosetwo-checked"))
            $(this).nextAll(".jb-maintexta").show() ;
          else
            $(this).nextAll(".jb-maintexta").hide() ;
        }*/
        changeButtonColor() ;
      }) ;
      
      //显示字符长度
      (function(){
        $("#text").val("") ;
      })();
      $(".wrap").on("input focus","#text",function(e){
        e.stopPropagation() ;
        changeButtonColor() ;
        
        var num=$(this).parent().next().find("#total").html() ;
        var str=$.trim($(this).val()) ;
        var len=gainStrlen(str,num) ;
        $(this).val(len.ret_str) ;
        $(this).parent().next().find("#num").html(len.ret_num) ;
      }) ;
        //发送举报

        $(".wrap").on("click",".jb-fasongbtn",function(e){
          e.stopPropagation() ;
          if($(this).find("a").hasClass("grey-bluebtn")){
            //alert("举报内容不能为空")
            return ;
          }
          var reports=getReports() ;
          sendAccusation(comment_code, reports) ;
          $(".jb-alert").show() ;
        }) ;

        //往回跳
        $(".wrap").on("click",".back-btn",function(e){
          e.stopPropagation() ;
          window.history.go(-1) ;
        })

    })() ;



    }) ;