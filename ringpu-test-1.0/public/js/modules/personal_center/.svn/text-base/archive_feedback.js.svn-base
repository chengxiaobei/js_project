(function(){

})() ;


// 个人中心--检测--反馈
require(['jquery', 'global','swiperBig','dialog'],function($,global,swiper,_){

	var test_id = getQueryString('id') ;
	// 第一步选项
	var step1_option = null ;
	var step1_option_text = null ;

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;

	var d_confirm = new Dialog({type:"confirm_guide"}) ;

	var curr_file_dom ;


	// swiper对象
	var swiper_opt = {
        pagination:".swiper-pagination",
        paginationClickable:true,
        effect:'slide'
	} ;
	var mySwiper = new Swiper ('.swiper-container',swiper_opt) ;

	// 压缩图片宽度
	var compression_img_width = 640 ;
	// 临时画布
	var tmp_canvas = document.createElement('canvas') ;
	var tmp_ctx = tmp_canvas.getContext('2d') ; 

	// 页面渲染
	(function(){

	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;

		$('#wrap1').on('click','.feedback_step1 li',function(){
			$(this).removeClass('fk-check').addClass('fk-checked').siblings().removeClass('fk-checked').addClass('fk-check') ;
		}) ;

		$('#wrap1').on('click','.feedback_step1_next',function(){
			step1_option = $('.feedback_step1').find('.fk-checked').attr('data-type') ; 
			step1_option_text = $('.feedback_step1').find('.fk-checked').attr('data-text') ; 
			//console.log(step1_option) ;
			if(!step1_option){
				d_alert.setTitle('请完善问卷信息') ;
				d_alert.show() ;
				return false ;
			}else{
				if(step1_option != '1'){
					$('.wrap').hide() ;
					$('#wrap2').show() ;
				}
				else{
					$('.wrap').hide() ;
					$('#wrap3').show() ;
				}
			}

		}) ;

		$('#wrap2').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap1').show() ;
		}) ;

		$('#wrap2').on('click','.feedback_step2 li',function(){
			$(this).toggleClass('fk-check').toggleClass('fk-checked') ;
		}) ;

		$('#wrap2').on('click','.feedback_step2_next',function(){
			var step2_option = $('.feedback_step2').find('li.fk-checked').attr('data-type') ; 
			if(!step2_option){
				d_alert.setTitle('请完善问卷信息') ;
				d_alert.show() ;
				return false ;
			}
			$('.wrap').hide() ;
			$('#wrap3').show() ;
		});

		$('#wrap3').on('click','.backButton',function(){
			$('.wrap').hide() ;
			if(step1_option && step1_option == '1'){
				$('#wrap1').show() ;
			}
			else{
				$('#wrap2').show() ;
			}
		}) ;

		$('#wrap3').on('click','#select_img',function(){
			$('#feedback_file').trigger('click') ;
		}) ;

		// 图片预览
		$('#wrap3').on('click','.rp_preview_img',function(e){
			e.stopPropagation() ; 
			var imgs = $(this).closest('ul').find('.rp_preview_img') ;
	        var index = $(this).prevAll().length ;
	        var imgs_html = getImgList(imgs) ;

          	$('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
          	$("#rp_preview_wrap").find("#carousel_num").html(index+1) ;
          	$("#rp_preview_wrap").find("#total_num").html(imgs.length) ;
          	$('#rp_preview_wrap').show() ;
          	$('#rp_preview_wrap .wrap').show() ;
          	mySwiper.init() ;
          	mySwiper._slideTo(index,0) ;
          	imgs = null ;
		}) ;

		// 点击隐藏预览框
		$("#rp_preview_wrap .wrap").on("click",".swiper-slide",function(e){
          	e.stopPropagation() ;
          	$(this).closest("#rp_preview_wrap").hide() ;
        }) ;

        // 删除图片
        $("#rp_preview_wrap").on("click",".delete-btn",function(e){
        	e.stopPropagation() ;
        	d_confirm.setTitle("是否删除此照片？") ;
          	d_confirm.setButton("取消","删除") ;
          	d_confirm.confirm_fn = function(){
          		var curr_index = mySwiper.activeIndex ;
          		var $curr_img_wrap = $('#wrap3_img_list') ;
                mySwiper.removeSlide(curr_index) ;
                var total_num=$("#total_num").html() ;
               	if(total_num-1<=0){
                  	$("#rp_preview_wrap").hide() ;
               	}
               	else{
               		var index_num = 0 ;
               		if(curr_index == (total_num-1)){
               			index_num = curr_index ;
               		}
               		else{
               			index_num = curr_index + 1 ;
               		}
                    $("#carousel_num").html(index_num) ;
                   	$("#total_num").html(total_num-1) ;
               	}
                $curr_img_wrap.find('li').eq(curr_index).remove() ;
                var curr_handleImgs = $curr_img_wrap.find('input[type=file]').data('handleImgs') ;
                curr_handleImgs.splice(curr_index,1) ;
                console.info(curr_handleImgs) ;
                $curr_img_wrap.find('input[type=file]').data('handleImgs',curr_handleImgs) ;

                // 图片张数控制
                var curr_len = curr_handleImgs.length ;
                if(curr_len < 20){
                	$curr_img_wrap.find('#feedback_file').closest('li').show() ;
                }
                else{
                	$curr_img_wrap.find('#feedback_file').closest('li').hide() ;
                }
          	}
          	d_confirm.show() ;
        }) ;

		$('#wrap3').on('change','#feedback_file',function(){
			var files = $('#feedback_file')[0].files ;
			curr_file_dom = $(this)[0] ;
			// 图片处理
			handleImg(files) ;
			// console.info(files) ;
			// if(files.length > 4){
			// 	$('#feedback_file')[0].files  = null ;
			// 	d_alert.setTitle('最多上传4张图片,请重新选择') ;
			// 	d_alert.show() ;
			// }
			// if(files && files.length > 0){
			// 	for(var i = 0 ; i < files.length ; i++){
			// 		var file = files[i] ;
			// 		readFile(file,readFile_callback) ;
			// 	}
			// }
		}) ;

		$('#wrap3').on('click','.feedback_step3_next',function(){
			$('.wrap').hide() ;
			// var files = $('#feedback_file')[0].files ;
			// if(files.length <=0){
			// 	alert('请选择图片') ;
			// }
			$('#wrap4').show() ;
		}) ;

		$('#wrap4').on('click','.backButton',function(){
			$('.wrap').hide() ;
			$('#wrap3').show() ;
		}) ;

		// 完成
		$('#wrap4').on('click','#complete',function(){
			var step1_opt = step1_option ;
			var step2_opt = [] ;
			$('.feedback_step2').find('li.fk-checked').each(function(i,v){
				var tmp = {} ;
				var data_type = $(this).attr('data-type') ; 
				tmp['cause'] = data_type ;
				step2_opt.push(tmp);
			}) ;
			var image_list = $('#feedback_file').data('handleImgs') ;

			var ot_opinion = $('#wrap4').find('#other_opinion').val() ;

			var url = global_path + "index.php/personalcenter/scheme_feedback" ;
			var p = {
				'test_id':test_id ,
				'effect_name' : step1_option_text||'' ,
				'effect_level' : step1_opt || '',
				'cause_names' : step2_opt || [] ,
				'suggestion' : ot_opinion || '',
				'image_list' : image_list || []
			} ;
			console.info(p) ;
			commonAjax(url,p).then(function(data){
				// console.info(data) ;
				if (data && data.status && data.status == '2000') {
					window.history.go(-1) ;
				};
			}) ;
		}) ;


		// 表单验证
		$('#wrap4').on('input','#other_opinion',function(){
			var str = getStrByLength(this.value,60) ;  
            $('#other_opinion').val(str) ;
            $('#other_opinion').next('div').html(str.length+'/100'); 
		}) ;

		$('#rp_preview_wrap').on('click','.backButton',function(){
			$('#rp_preview_wrap').hide();
			
		})
	})() ;



	// 图片处理
	function handleImg(files){
		var ret = $(curr_file_dom).data('handleImgs') ? $(curr_file_dom).data('handleImgs') : [] ;
		console.info(ret) ;
		var curr_len = ret.length ;

		if(curr_len >=20){
			return ;
		}

		for(var i = 0 ; i < files.length ; i++){
			curr_len++ ;
			if(curr_len > 20){
				return ;
			}
			(function(){
				var tmp = {} ;
				var file = files[i] ;
				var name = file['name'] ;
				tmp['file_name'] = name.split('.')[0] ;
				tmp['extension'] = name.split('.')[1] ;

				var reader = new FileReader() ;
				reader.readAsDataURL(file) ;
				// console.info(file) ;
				reader.onload = function(){
					var base64 = reader.result ;
					// 获取图片大小,手机端有问题
					// var img_size = dataURLtoBlob(base64) ;
					// 大于100KB
					if(file.size > 102400){
						(function(){
							var img = new Image() ;
							img.src = base64 ;
							if(img.complete){
								img_onload(img,ret,tmp) ;
							}else{
								img.onload = function(){
									img_onload(img,ret,tmp) ;
								}
							}
						})(ret,tmp,base64) ;
					}
					else{
						//var html = '<li class="rp_preview_img"><img style="width:52px;height:52px;" src="'+ base64 +'"></li>' ;
						var html = '<li class="zdfafk-imgwid rp_preview_img" style="background: url('+ base64 +') no-repeat center center #fff;background-size:cover;"></li>' ;

						$(curr_file_dom).closest('ul').prepend(html) ;
						base64 = base64.split('base64,')[1];
						tmp['image_base64_string'] = base64 ;
						ret.push(tmp) ;
						$(curr_file_dom).data('handleImgs',ret) ;
					}
				}
			})(i) ;
		}
	}


	// 图片加载回调函数
	function img_onload(img,ret,tmp){

		var	img_width = img.width ,
			img_height = img.height ;

		var scale = compression_img_width / img_width;
				
		tmp_canvas.width = compression_img_width ;
		tmp_canvas.height = parseInt(img.height * scale ) ;

		tmp_ctx.clearRect(0,0,tmp_canvas.width,tmp_canvas.height) ;

		tmp_ctx.drawImage(img,0,0,img_width,img_height,0,0,tmp_canvas.width,tmp_canvas.height) ;
		// alert(scale) ;
		var tmp_base64 = tmp_canvas.toDataURL("image/jpeg",scale) ;
		tmp_ctx.clearRect(0,0,tmp_canvas.width,tmp_canvas.height) ;
		tmp_canvas.width = 0 ;
		tmp_canvas.height = 0 ;
		//var html = '<li class="rp_preview_img "><img style="width:52px;height:52px;" src="'+ tmp_base64 +'"></li>' ;
		var html = '<li class="zdfafk-imgwid rp_preview_img" style="background: url('+ tmp_base64 +') no-repeat center center #fff;background-size:cover;"></li>' ;
		$(curr_file_dom).closest('ul').prepend(html) ;
		tmp_base64 = tmp_base64.split('base64,')[1];
		tmp['image_base64_string'] = tmp_base64 ;
		ret.push(tmp) ;
		$(curr_file_dom).data('handleImgs',ret) ;
	}


	function getImgList(list){
        var pageSize = winSize();
        var liWidth = pageSize['width'];
        var liHeight = pageSize['height'] ;
        var head=document.getElementsByTagName('head')[1] ;
        var fragment=document.createDocumentFragment() ;
        if(head) liHeight=liHeight-head.offsetHeight ;
        for(var i = 0 ; i < list.length ; i++){
            (function(i){
            	console.info(list[i]) ;
	            var li = document.createElement("li") ;
	            var img = document.createElement("img") ;
	            var div = document.createElement("div") ;
	            // var url = list[i].attr('src') ;
	            var height,width ;
                li.setAttribute("class","swiper-slide") ;
                div.setAttribute("class","ylpic-mainlb-div") ;
                li.style.width = liWidth + "px" ;
                li.style.height = liHeight + "px" ;
                div.style.height = liHeight + "px" ;
                div.style.width = liWidth + "px" ;
                var img_url = $(list[i]).css('background-image') ;
               // alert(img_url) ;
               // console.info(img_url);
               //  var img_urls = img_url.split('') ;
               // // console.log(img_urls);
               //  for(var i=0;i<img_urls.length-1;i++){
               //  	if(img_urls[4]=='\"'){
               //  		imgs_urls = img_url.split('\"') ; 
               //  		//console.log(imgs_urls);
               //  		//console.log(imgs_urls[1]) ;
               //  		img_urls = imgs_urls[1];
               //  		console.log(imgs_urls);
               //  		console.log(img_urls);
               //  	}
               //  	else{
               //  		var reg =  /\([^\)]+\)/g; 
               //  		var tmp = img_url.match(reg)[0]; 
               //  		img_urls = img_url.substring(4,img_url.length-1);
               //  	}
               //  }
                var sear =new RegExp('\"');
                if(sear.test(img_url)){
                	var imgs_urls = img_url.split(sear) ;
                	img_urls = imgs_urls[1];
                }else{
                	var imgs_urls = img_url.split('(') ;
                	var img_urls_test = imgs_urls[1].split(')');
                	img_urls = img_urls_test[0];
                }
                //console.log(imgs_urls);
                console.log(img_urls);
                img.src = img_urls ;
               // console.info(img) ;
	                if(img.complete){
	                    height = img.height ;
	                    width = img.width ;
	                    if(width/height > liWidth/liHeight){
	                        img.style.width = liWidth +"px" ;
	                        img.style.height = liWidth*height/width +"px" ;
	                    } 
	                    else{
	                        img.style.height = liHeight +"px" ;
	                        img.style.width = width*liHeight/height +"px" ;
	                    }
	                }
	                else{
	                  	img.onload=function(){
		                    height = img.height ;
		                    width = img.width ;
		                    if(width/height > liWidth/liHeight){
		                        img.style.width = liWidth +"px" ;
		                        img.style.height = liWidth*height/width +"px" ;
		                    } 
		                    else{
		                        img.style.height = liHeight +"px" ;
		                        img.style.width = width*liHeight/height +"px" ;
		                    }
	                  	}
	                }
                div.appendChild(img) ;
                li.appendChild(div) ;
                fragment.appendChild(li) ;
            })(i);
        }
        return fragment ;
    } ;

  	function winSize(){
    	var e = window,
        	a = 'inner';
	    if (!('innerWidth' in window )){
	        a = 'client';
	        e = document.documentElement || document.body;
	    }
    	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    };


	// function readFile_callback(url){
	// 	if(!url){
	// 		return false ;
	// 	}
	// 	var html = '<li class="zdfafk-input" >'+
	// 		       '     <img src="'+url+'">'+
	// 		       '     <div class="zdfafk-add"></div>'+
	// 		       ' </li>' ;
	// 	$('#wrap3_img_list').prepend(html) ;
	// }

}) ;