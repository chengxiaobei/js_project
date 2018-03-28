(function(){

})() ;

// 意见反馈
require(['jquery', 'global','jsmart','dialog','swiperBig'],function($,global,_,_,swiper){

	// 是否来自app
	var fromapp = getQueryString('fromapp') ;

	var feedback_id = '';
	var product_code = '';
	// 1 产品反馈 2 意见反馈
	var type = 2 ; 
	var list_options = [] ;
	var content = "" ;
    
    if((window.location.href).indexOf('https')==-1){
		global_path = global_path_old;
	}

	var question_list_tpl = new jSmart(document.getElementById('question_list_tpl').innerHTML) ;

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	var dialog=new Dialog({type:"confirm_guide"}) ;
	var mySwiper = new Swiper ('.swiper-container',{
                                    pagination:".swiper-pagination",
                                    paginationClickable:true,
                                    effect:'slide' }) ;

	// 页面渲染
	(function(){
		if(fromapp && fromapp =='1'){
			// var usercode = getQueryString('usercode') ;
			// var user_info = RP.store.getItem('curr_user_info') || {};
			// user_info['user_code'] = usercode ;
			// RP.store.setItem('curr_user_info',user_info) ;
		}

		var url = global_path + "index.php/personalcenter/getfeedback" ;
		var p = {
			type : type ,
			feedback_id : feedback_id ,
			product_code : product_code
		} ;
		commonAjax(url,p).then(function(data){
			console.info(data) ;
			if(data && data.status && data.status == "2000"){
				feedback_id = data['data']['feedback_id'] ;
				$('#wrap1').data('feedback_id',feedback_id) ;
			}
			var res = question_list_tpl.fetch(data) ;
			$('#wrap1').html(res) ;
            
           // $(".dtym-question").eq(0).addClass("center-mt") ;
			$(".dtym-opinbox").closest(".dtym-question").addClass("fankui-nomarbom") ;
			$(".dtym-opinbox").find("#other_opinion").attr("placeholder","说点什么吧··· ···") ;
            //detach Pic
            preChoose() ;
            choosePic() ;
            largePreview() ;


			if(!fromapp){
				$('#wrap1 header').show() ;
				$('#wrap1 section').css('marginTop','44px') ;
			}
		}).fail(function(){
			var res = question_list_tpl.fetch([]) ;
			$('#wrap1').html(res) ;
			errorPageShow($('#wrap1')[0],'system');
			if(!fromapp){
				$('#wrap1 header').show() ;
				$('#wrap1 section').css('marginTop','44px') ;
			}
		}) ;
	})() ;

	// 业务逻辑
	(function(){
		$('.wrap').on('click','.back-btn',function(){
			if ($(this).hasClass("backButton"))
			   window.location.href = "index.php" ;
		    else {
		       $("#rp_preview_wrap").hide() ;
		       $("body,html").removeClass("ovfHiden") ;
		    }
		       
		}) ;

		$('#wrap1').on('click','.question_item>.per-answer-option',function(){
			var multiple = $(this).closest('.question_item').attr('data-multiple') ;
			if(multiple && multiple=="1"){
				$(this).toggleClass('answer-checked') ;
				$(this).toggleClass('answer-check') ;
			}
			else{
				$(this).toggleClass('answer-checked').siblings('.per-answer-option').removeClass('answer-checked') ;
			}
		}) ;

		// 意见提交
		$('#wrap1').on('click','#option_submit',function(){
			if(!answerQuestion_check()){
				return ;
			}
			$('.per-answer-option').each(function(i,v){
				var options_id = $(this).attr('data-options_id') ;
				var tmp = {} ;
				tmp['options_id'] = options_id ;
				if($(this).hasClass('answer-checked')){
					tmp['options_checked'] = "1" ;
				}
				else{
					tmp['options_checked'] = "0" ;
				}
				list_options.push(tmp) ;
			}) ;
			content = $('#other_opinion').val() ;
			// console.info(list_options) ;
			var url_NI = global_path + "index.php/personalcenter/creatFeedback" ;
			var url = global_path + "index.php/personalcenter/creatFeedbackwi" ;
			var image_path_list = $('#choose').data('storeImg') ;
			console.info(image_path_list);
			var p = {
				feedback_id : feedback_id ,
				// product_code : '' ,
				type : type ,
				content : content ,
				list_options : list_options ,
				image_path_list : image_path_list
			} ;
			console.info(p);
			var p_NI = {
				feedback_id : feedback_id ,
				// product_code : '' ,
				type : type ,
				content : content ,
				list_options : list_options
			} ;
			if ( !image_path_list || image_path_list.length === 0 ) {
                  url = url_NI ;
                  p = p_NI ;
			}
			commonAjax(url,p).then(function(data){
				// console.info(data) ;
				if(data && data.status && data.status == "2000"){
					$('.tip-info').find('div').html('感谢您的反馈！') ;
 					$('.tip-info').show() ;
 					setTimeout(function(){
 						$('.tip-info').hide() ;
 						window.history.go(-1) ;
 					},1000) ;
					// window.history.go(-1) ;
				}
				else{
					d_alert.setTitle('保存失败') ;
					d_alert.show() ;
				}
			}) ;
		}) ;

		// 表单验证
		$('#wrap1').on('input','#other_opinion',function(){
			var str = getStrByLength(this.value,100) ; 
            $('#other_opinion').val(str) ;
            $(this).closest('div').find('div').html(str.length+'/100'); 
		}) ;
		$('#wrap1').on('focus','#other_opinion',function(){
			$(this).attr("placeholder","") ;
			setTimeout(function(){
				document.body.scrollTop = Math.max(document.body.scrollHeight,document.body.clientHeight) + 10000;
				document.documentElement.scrollTop = Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight) + 10000;
			},200) ;
		}) ;
		$("#wrap1").on('blur',"#other_opinion",function(){
			//$(this).attr("placeholder","我希望加入（）功能或改善（）服务，因为我经常（）") ;
			$(this).attr("placeholder","说点什么吧··· ···") ;
		})
	})() ;

	// 信息验证
	function answerQuestion_check(){
		var flag = true ;
		$('.question_item').each(function(i,v){
			var is_required = $(this).attr('data-required') ;
			if(is_required && is_required == '1'){
				// 是否是文本域
				if($(this).find('textarea').size() > 0){
					var other_opinion = $('#other_opinion').val() ;
					if(!other_opinion){
						flag = false ;
					}
				}
				else{
					if($(this).find('.answer-checked').size()<=0){
						flag = false ;
					}
				}
			}
		}) ;
		if(!flag){
			d_alert.setTitle('请完善问卷信息') ;
			d_alert.show() ;
		}
		return flag ;
	}

    // detach pic
    function preChoose(){
    	document.getElementById("select").addEventListener("click",function(e){
          document.getElementById("choose").click() ;
          //e.preventDefault() ;
         },false) ;
    }
    function choosePic(){
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
    	    filechooser.onchange = function () {
	            if (!this.files.length) return;
	            var files = Array.prototype.slice.call(this.files);
	            
	            files.forEach(function (file, i) {
	                if (!/\/(?:jpeg|png|gif)/i.test(file.type)) return;
	                var reader = new FileReader();
	                var li = document.createElement("li");
	                var fileLength=file["name"].split(".").length ;
	            reader.onload = function () {
	                var result = this.result;
	                var img = new Image();
	                img.src = result;
	                if (img.complete) {
	                    callback();
	                } else {
	                    img.onload = callback;
	                }
	                function callback() {
	                    var dataURL=compress(img) ;
	                        li.innerHTML = '<img src="'+dataURL.newData+'">';
	                        $(li).attr("class","rp_preview_img") ;
	                         var b={} ;
	                            b.file_name=file["name"].split(".")[0] + new Date().getTime() ;
	                            b.extension=file["name"].split(".")[fileLength-1] ;
	                            b.image_base64_string=dataURL.ndata.split('base64,')[1];
	                         var list={} ;
	                             list['h_picture_url']=dataURL.ndata ;
	                    var picture= $('#choose').data('h_picture') ? $('#choose').data('h_picture') : [] ;
	                        picture.unshift(list) ;
	                    $('#choose').data('h_picture',picture) ;
	                    //$("#fileList").prepend($(li)) ;
	                    uploadPic(b) ;
	                }
	                //图片上传接口
				     function uploadPic(b){
				     	console.info(b) ;
				        var ret = $('#choose').data('storeImg') ? $('#choose').data('storeImg') : [] ;
				     	var url = global_path + "index.php/personalcenter/image" ;
				     	var param = {
				     		extension : b.extension ,
				     		file_name : b.file_name ,
				     		image_base64_string : b.image_base64_string ,
				     		module_name : "feedback"
				     	}

				     	   commonAjax(url, param).then(function(imgData){

				     	   	   if ( imgData && imgData.status && imgData.status == 2000 ){
				                  var data = imgData.data ;
				                      ret["l_image_path"] = data["L_path"] ;
				                      ret["h_image_path"] = data["H_path"] ;
				                      ret["extension"] = b.extension ;
				                  console.info(data) ;
				                  ret.unshift(data) ;
				                  $('#choose').data('storeImg' , ret) ;
				                  $("#fileList").prepend($(li)) ;
				     	   	   }
				     	   	   else if ( imgData && imgData.status && imgData.status == 4210 ){
				     	   	   	  alert("图片上传失败") ;
				     	   	   }

				     	   }).fail(function(){
				     	   	   alert("接口异常，图片上传失败") ;
				     	   })
				     }
	            };
	            reader.readAsDataURL(file);
	        })
	    };

	    function compress(img,extension){

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
            
                	var newCanvas = document.createElement("canvas") ;
	                var newctx = newCanvas.getContext("2d") ;
	                    if(canvas.width/canvas.height>=1){
	                      newCanvas.height = canvas.height ;
	                      newCanvas.width = newCanvas.height ;
	                      var sx = Math.round((canvas.width-canvas.height)/2) ;
	                      var sy = 0 ;
	                    }
	                    if(canvas.width/canvas.height<1){
	                      newCanvas.width = canvas.width ;
	                      newCanvas.height = newCanvas.width ;
	                      var sx = 0 ;
	                      var sy = Math.round((canvas.height - canvas.width)/2) ;
	                    }
	                    newctx.drawImage(canvas ,sx ,sy ,newCanvas.width , newCanvas.height ,0,0,newCanvas.width ,newCanvas.height) ;
	                var newData = newCanvas.toDataURL('image/jpeg', 0.1);    
	                var ndata = canvas.toDataURL('image/jpeg', 0.1);
	                tCanvas.width = tCanvas.height = canvas.width = canvas.height = newCanvas.height = newCanvas.width =0
	                return {newData:newData , ndata : ndata};  
            
        }

    }

    //图片放大预览
     function largePreview(){
        $(".wrap").on("click",".rp_preview_img",function(e){
          e.stopPropagation() ;
          $("body,html").addClass("ovfHiden") ;
          var imgs=$('#choose').data('h_picture') ;
          console.info(imgs) ;
          var index=$(this).prevAll().length ;
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
          
          dialog.setTitle("是否删除此照片？") ;
          dialog.setButton("取消","删除") ;
          dialog.confirm_fn=function(){
               var curr_index=mySwiper.activeIndex ;
                   mySwiper.removeSlide(curr_index) ; 
               var h_imgs=$('#choose').data('h_picture') ;
               var c_imgs=$('#choose').data('storeImg') ;
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
                   $("#choose").data("storeImg",c_imgs) ;
                   $("#choose").data("h_picture",h_imgs) ;
                  //添加图片的按钮显示
                  $("#select").show() ;
                
                   h_imgs=null ;
                   c_imgs=null ;
                  dialog.confirm_fn=null ;
          }
          dialog.show() ;
        }) ;
      }

}) ;