   require(['global','jsmart','jquery','swiperBig','dialog'],function(global,jsmart,$,swiper,dialog){
      //弹窗
      var dialog=new Dialog({type:"confirm_guide"}) ;
      var alert_pop_window=new Dialog({type:"alert"}) ;
      var body = document.getElementsByTagName('body')[0] ;
      //preview big pic
      var mySwiper = new Swiper ('.swiper-container',{
                                    pagination:".swiper-pagination",
                                    paginationClickable:true,
                                    effect:'slide' }) ;
      //logic of the page                           
      (function(){       
        //数字变化 
        $(".wrap").on("input focus","#text",function(e){

          e.stopPropagation() ;
          button_send() ;
          var limitLen=$(this).next().find("#total").html() ;
          var str=$.trim($(this).val()) ;
          var len=gainStrlen(str,limitLen) ;
          $(this).val(len.ret_str) ;
          $(".texta-textcolor").html(len.ret_num) ;
        }) ;

        //发帖-粘贴文字超过规定字数时提示
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
          var limitLen = $(this).next().find("#total").html() ; //已规定的限制字数
          var str=$.trim($(this).val()) ; 
          if(str.length > limitLen){
            alert_pop_window.setTitle("文本过长") ;
            alert_pop_window.show() ;
          }
        }).pasteEvents();
        
        //发表
        $(".wrap").on("click",".fabiao-btn",function(e){
           console.log(3333);
          e.stopPropagation() ;
          
          var text= getText() ;
          var a=$("#choose").data("handleImgs") ;
              $("#text").trigger("blur") ;
        //  console.info(a) ;
           if(!text&&!a){
             //alert("发布内容不能为空") ;
             dialog.setTitle("发布内容不能为空") ;
             dialog.setButton("取消","确定") ;
             dialog.show() ;

             return ;
           }
           if(!text && a){
            dialog.setTitle("说点什么吧......") ;
            dialog.setButton("取消","确定") ;
           /* dialog.confirm_fn=function(){
              loadingShow(document.getElementsByTagName('body')[0]) ;
                   if(a) type="P" ;
                     else type="T" ;
                  upload(text, type,a) ;
            }*/
            dialog.show() ;
           
           }
           if(a){
           type="P" ;
           }
           else {
            type="T" ;
          }
         // console.info(a);
         if(!text) return ;
         //loading_show(body) ;
          upload(text, type,a) ;
             
        }) ;

        //回跳
        $(".wrap").on("click",".back-btn",function(e){
          e.stopPropagation() ;
          if($(this).attr("id")=="back"){
            dialog.confirm_fn=function(){
              window.history.go(-1) ;
              dialog.confirm_fn=null ;
            }
            dialog.setTitle("要放弃此次编辑么") ;
            dialog.setButton("取消","确定") ;
            dialog.show() ;
            return ;
          }
          else{
            $("#rp_preview_wrap").hide() ;
          }
         // console.info(111)
          //alert("要放弃此次编辑吗？") ;
         
          
          //dialog.bindevent() ;
        });
         //禁言确定按钮返回上一级
         $("#Banned-btn").on("click",function(){
       	   console.log(33434);
      	   window.history.go(-1) ;
         })
    })() ;

      //发布按钮的变化
      function button_send(){
        var text= getText() ;
       // console.info(111)
        var a=$("#file").data("handleImgs") ;
        if(text||a){
            $(".wrap").find(".fabiao-btn").removeClass("fabiao-btn-color") ;
          }
        else{
            $(".wrap").find(".fabiao-btn").addClass("fabiao-btn-color") ;
          }
      } ;

      //获取文本内容
      function getText(){
        var text=$.trim($("#text").val()) ;
        return text ;
      } ;
     //判断是否支持canvas
     function isSurportedCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
     }
    //获取当前数目
    function carouselNum(){
      var carousel_num=$("#choose").data("index") ;
      return carousel_num ;
    }
    //获取总图片数目
    function totalNum(){
      var picture_list=$('#choose').data('handleImgs') ;
      var total_num=picture_list.length ;
      picture_list=null ;
      return total_num ;
    } ;

      //上传图片
      function upload(tex,type,pc){
        loading_show(body) ;
        //上传图片和文本的接口
        var url=global_path+"index.php/culture_community/sendDynamicsStatusNew" ;
        var param={
              ask_content:tex ,
              format:type,
              image_list:pc,
              type:'1'
            } ;
            commonAjax(url, param).then(function(data){
              
              if(data&&data.status&&data.status=="2000"){
                console.info(data) ;
            /*    $(".wrap").find(".jb-alert").show() ;
                var ID=setTimeout(function(){
                    $(".wrap").find(".jb-alert").hide() ;
                    window.location.href="./cultureCommunity.php" ;
                    clearTimeout(ID) ;
                },1000) ;*/
                //养殖币
                if(data.data.is_show == 2){
                  getPointHtml('发动态',data.data.score,$('.main-section')[0]);
                }
                //跳转
                setTimeout(gotoNext,2500);
              }
              else if( data && data.status && data.status=="4004" ){
                dialog.setTitle("请求参数缺失") ;
                dialog.show() ;
              } 
              //该用户已被禁言
             else if( data && data.status && data.status=="4001"){
               $('.RP_LOADING').hide();
                dialog.setTitle("您好，由于违规操作，此功能已被系统自动禁用，请遵守社区规则；如需申请解禁，请拨打客服电话400-800-5696。") ;
                dialog.setButton("呼叫客服", "确认") ;
                dialog.cancel_fn = function(){
                  window.location.href = "tel:4008005696";
                }
                dialog.show() ;
            }
          /*    else {
                dialog.setTitle("系统繁忙，请重试")
                return false ;
              }*/
                 
                
            }).fail(function(){
              loadingHide(body) ;
              dialog.setTitle("系统繁忙，请稍候重试") ;
              dialog.setButton("取消", "重试") ;
              dialog.confirm_fn = function(){
                upload(tex,type,pc) ;
              }
              dialog.show() ;
            }) ;  
      } ;

      function gotoNext(){
        loadingHide(body) ;
        window.location.href="./cultureCommunity.php?from=sendStatus" ;

      }

      //图片放大预览
      (function(){
        $(".wrap").on("click",".rp_preview_img",function(e){
          e.stopPropagation() ;
          $("body,html").addClass("ovfHiden") ;

          var imgs=$('#choose').data('h_picture') ;
          console.info(imgs) ;
          var index=$(this).prevAll().length ;
          //$("#choose").data("index",index) ;
         // var imgs_html = getImgList(imgs) ;
         var imgs_html = getImageList(imgs) ;

          $('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
          $("#rp_preview_wrap").find("#carousel_num").html(index+1) ;
          $("#rp_preview_wrap").find("#total_num").html(imgs.length) ;
          $('#rp_preview_wrap').show() ;
          mySwiper.init() ;
          mySwiper._slideTo(index,0) ;

          imgs=null ;
        }) ;
        //点击大图隐藏
        $(".wrap").on("click",".swiper-slide",function(e){
          e.stopPropagation() ;
          $("body,html").removeClass("ovfHiden") ;
          $(this).closest("#rp_preview_wrap").hide() ;
        }) ;
        //删除图片
        $("#rp_preview_wrap").on("click",".delete-btn",function(e){
          e.stopPropagation() ;
          body.style.overflow="auto" ;
          
          dialog.setTitle("是否删除此照片？") ;
          dialog.setButton("取消","删除") ;
          dialog.confirm_fn=function(){
               var curr_index=mySwiper.activeIndex ;
                   mySwiper.removeSlide(curr_index) ; 
               var h_imgs=$('#choose').data('h_picture') ;
               var c_imgs=$('#choose').data('handleImgs') ;
                   h_imgs.splice(curr_index,1) ;
                   $(".fpl-picture").find("ul li:eq("+curr_index+")").remove() ;
                   c_imgs.splice(curr_index,1) ;
                   curr_index=mySwiper.activeIndex ;
               var total_num=$("#total_num").html() ;
                   if(total_num-1<=0){
                       $("#rp_preview_wrap").hide() ;
                   }
                   else{
                        console.info("curr_index"+curr_index) ;
                        $("#carousel_num").html(curr_index+1) ;
                       $("#total_num").html(total_num-1) ;
                   }
                   $("#choose").data("handleImgs",c_imgs) ;
                   $("#choose").data("h_picture",h_imgs) ;
                  //添加图片的按钮显示
                  $("#select").show() ;
                
                   h_imgs=null ;
                   c_imgs=null ;
                  dialog.confirm_fn=null ;
          }
          dialog.show() ;
        }) ;
      })() ;
      
      //上传图片
      (function(){
        var filechooser = document.getElementById("choose");
        //预览图宽
        var liHeight=document.getElementById('select').offsetHeight ;
        var liWidth=document.getElementById('select').offsetWidth ;
        //    用于压缩图片的canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext('2d');
        //    瓦片canvas
        var tCanvas = document.createElement("canvas");
        var tctx = tCanvas.getContext("2d");
        var maxsize = 100 * 1024;
        //选择图片
        document.getElementById("select").addEventListener("click",function(e){
          document.getElementById("choose").click() ;
          //e.preventDefault() ;
         },false) ;
        filechooser.onchange = function () {
            $("#text").trigger("blur") ;
            if (!this.files.length) return;
            var files = Array.prototype.slice.call(this.files);
            if (files.length > 9) {
                //alert("最多同时只可上传9张图片");
                 dialog.setTitle("最多同时只可上传9张图片") ;
                 dialog.show() ;
                return;
            }
            files.forEach(function (file, i) {
                if (!/\/(?:jpeg|png|gif)/i.test(file.type)) return;
                var reader = new FileReader();
                var li = document.createElement("li");
                var extension=file["name"].split(".")[1] ;
    //          获取图片大小
             //   var size = file.size/1024 > 1024 ? (~~(10*file.size/1024/1024))/10 + "MB" :  ~~(file.size/1024) + "KB";
            reader.onload = function () {
               
                var result = this.result;
                var img = new Image();
                img.src = result;
    //                图片加载完毕之后进行压缩，然后上传
                if (img.complete) {
                    callback();
                } else {
                    img.onload = callback;
                }
                function callback() {
                    var tr = limitPictureNum() ;
                       if(tr) return ;
                    var dataURL=compress(img,extension) ;
                   // var data = cutPicture(dataURL,extension);
                   
                        li.innerHTML = '<img src="'+dataURL.newData+'">';
                        //console.info($(li)) ;
                        $(li).attr("class","rp_preview_img") ;
                        $("#fileList").prepend($(li)) ;
                       // data=dataURLtoBlob(data) ;
                         var b={} ;
                            b.file_name=file["name"].split(".")[0] ;
                            b.extension=file["name"].split(".")[1] ;
                            b.image_base64_string=dataURL.ndata.split('base64,')[1];
                           console.info(b)
                         var list={} ;
                             list['h_picture_url']=dataURL.ndata ;
                            //list['h_picture_url']=data ;
                    var ret = $('#choose').data('handleImgs') ? $('#choose').data('handleImgs') : [] ;
                        console.info(ret) ;
                        ret.unshift(b) ;
                        console.info(ret) ;
                    $('#choose').data('handleImgs',ret) ;
                    var picture= $('#choose').data('h_picture') ? $('#choose').data('h_picture') : [] ;
                        picture.unshift(list) ;
                    $('#choose').data('h_picture',picture) ;
                   // upload(data, file.type, $(li));
               //     limitPictureNum() ;
                    button_send() ;
                    removeQuote() ;
                    var tr = limitPictureNum() ;
                    if(tr) return ;
                }
            };
            reader.readAsDataURL(file);
        })
    };     

        //图片限制数目
        function limitPictureNum(){
       //   console.info(111222)
          var picture_array=$("#choose").data('handleImgs')?$("#choose").data('handleImgs'):[] ;
          if(picture_array.length>=9){
            // console.info(111222)
            $("#select").hide() ;
            picture_array=null ;
            return true;
          }
        } ;
        //清楚引用
        function removeQuote(){
          b=null ;
          ret=null ;
          picture=null ;
          list=null ;
          img = null;
          picture_array=null ;
        }
        //    使用canvas对大图片进行压缩
        function cutPicture(img,extension) {
            var initSize = img.src.length;
            var width = img.width;
            var height = img.height;
            console.info("width====>"+width) ;
            console.info("height====>"+height) ;
            if(img.width/img.height>liWidth/liHeight){
                height=img.height;
                width=liWidth*img.height/liHeight ; 
                var sx=(img.width-img.height)/2 ;
                var sy=0 ;
            }
            else{
                width=img.width ;
                height=img.width*liHeight/liWidth ;
                var sy=(img.height-img.width)/2 ;
                var sx=0 ;
            }
            console.info("width2====>"+width) ;
            console.info("height2====>"+height) ;
            var newCanvas = document.createElement("canvas") ;
            var ctx = newCanvas.getContext("2d") ;
            newCanvas.width = width;
            newCanvas.height = height;
    //        铺底色
            ctx.clearRect(0 , 0 ,newCanvas.width , newCanvas.height) ;
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
            ctx.drawImage(img, sx, sy, width, height,0,0,width,height);
            //进行最小压缩
            var ndata = newCanvas.toDataURL('image/jpeg', 0.1);
            console.info("canvas=====>"+ndata) ;
            // console.log('压缩前：' + initSize);
            // console.log('压缩后：' + ndata.length);
            // console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
            newCanvas.width = newCanvas.height = 0;
            return ndata;
             
            
        }

        function compress(img,extension){
          console.log(extension) ;
            var initSize = img.src.length;
            var width = img.width;
            var height = img.height;
            var ratio;
            if ((ratio = width * height / 4000000)>1) {
                ratio = Math.sqrt(ratio);
                width /= ratio;
                height /= ratio;
            }else {
                ratio = 1;
            }
                canvas.width = width;
                canvas.height = height;
                ctx.clearRect(0 , 0 ,canvas.width , canvas.height) ;
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

            var count;
                if ((count = width * height / 1000000) > 1) {
                    count = ~~(Math.sqrt(count)+1); //计算要分成多少块瓦片

        //            计算每块瓦片的宽和高
                    var nw = ~~(width / count);
                    var nh = ~~(height / count);

                    tCanvas.width = nw;
                    tCanvas.height = nh;
                   for (var i = 0; i < count; i++) {
                      for (var j = 0; j < count; j++) {
                          tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);

                          ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                      }
                  }
                } else {
                  ctx.drawImage(img, 0, 0, width, height);
              }
                // ctx.drawImage(img,0,0,width,height);
                var newCanvas = document.createElement("canvas") ;
                var newctx = newCanvas.getContext("2d") ;
                    if(canvas.width/canvas.height>=liWidth/liHeight){
                      newCanvas.height = canvas.height ;
                      newCanvas.width = newCanvas.height*liWidth/liHeight ;
                      var sx = Math.round((canvas.width-canvas.height)/2) ;
                      var sy = 0 ;
                    }
                    if(canvas.width/canvas.height<liWidth/liHeight){
                      newCanvas.width = canvas.width ;
                      newCanvas.height = newCanvas.width*liHeight/liWidth ;
                      var sx = 0 ;
                      var sy = Math.round((canvas.height - canvas.width)/2)
                    }
                    newctx.drawImage(canvas ,sx ,sy ,newCanvas.width , newCanvas.height ,0,0,newCanvas.width ,newCanvas.height) ;
                var newData = newCanvas.toDataURL('image/jpeg', 0.1);    
                var ndata = canvas.toDataURL('image/jpeg', 0.1);
                console.log('压缩后：' + ndata.length);
                console.log('压缩前：' + initSize);
                tCanvas.width = tCanvas.height = canvas.width = canvas.height = newCanvas.height = newCanvas.width =0
                return {newData:newData , ndata : ndata};   
        }


    })() ;


          
    }) ;



