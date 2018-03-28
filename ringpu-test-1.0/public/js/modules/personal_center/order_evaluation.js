(function(){
	// 加载页面
	function getLoadHtml(){
	    var ret = '  <!--加载模块-->'+
	              '  <div class="loading-con RP_LOADING">'+
	              '    <table class="loading-tb">'+
	              '      <tbody>'+
	              '        <tr>'+
	              '          <td>'+
	              '            <img src="../../public/images/loading.gif">'+
	              '          </td>'+
	              '        </tr>'+
	              '      </tbody>'+
	              '    </table>'+
	              '  </div>' ;
	    return ret ;
	}

	// $wrap : 父容器 
	function loadingShow($wrap){
	    if(!$wrap) return ;
	    []['forEach'].call($wrap.childNodes,function(v){
	        if(v.nodeType == 1){
	            v.style.display = "none" ;
	        }
	    }) ;
	    if(!$wrap.querySelector('.RP_LOADING')){
	        var loading_html = getLoadHtml() ;
	        $wrap.insertAdjacentHTML('beforeend',loading_html) ;
	    }
	    $wrap.querySelector('.RP_LOADING').style.display = "block" ;
	    return ;
	}
	loadingShow(document.querySelector('#wrap1')) ;
})() ;


// 订单中的商品评价
require(['jquery', 'global', 'jsmart','swiperBig','dialog'],function($,global,_,swiper,_){

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;

	var d_confirm = new Dialog({type:"confirm_guide"}) ;

	var curr_file_dom = null ; 
	// 商品包装评分
	var package_votes = "" ;
	// 物流速度评分
	var delivery_votes = "" ;
	// 商品参数
	var product_info = [] ;

	var order_code = getQueryString("order_code") ;

	var order_product_list_tpl = new jSmart(document.getElementById('order_product_list_tpl').innerHTML) ;

	// 临时画布
	var tmp_canvas = document.createElement('canvas') ;
	var tmp_ctx = tmp_canvas.getContext('2d') ; 

	// 截取图片临时画布
	var tmp_cut_canvas = document.createElement('canvas') ;
	var tmp_cut_ctx = tmp_cut_canvas.getContext('2d') ;
	// 截取图片宽、高
	// var cut_img_width = 52 ,
	// 	cut_img_height = 52 ;

	// 压缩图片宽度
	var compression_img_width = 640 ;

	// swiper对象
	var swiper_opt = {
        pagination:".swiper-pagination",
        paginationClickable:true,
        effect:'slide'
	} ;
	var mySwiper = new Swiper ('.swiper-container',swiper_opt) ; 

	// MA542015120714538
	// 页面初始化
	(function(){
		var p = {
			order_code : order_code 
		} ;
		var url = global_path + "index.php/personalcenter/getOrderDetail" ;

		commonAjax(url,p).then(function(data){
			console.info(data) ;
			if(data && data.status && data.status == "2000"){
				var res = order_product_list_tpl.fetch(data['data']) ;
				$('#wrap1').html(res) ;
			}
			else{
				var res = order_product_list_tpl.fetch({order_product_list:[]}) ;
				$('#wrap1').html(res) ;
				// var error_html = getErrorPage('nodata') ;
				// $('#wrap1 section').hide() ;
				// $('#wrap1').append(error_html) ;
			}
		}).fail(function(){
			var res = order_product_list_tpl.fetch({order_product_list:[]}) ;
			$('#wrap1').html(res) ;
			var error_html = getErrorPage('system') ;
			$('#wrap1 section').hide() ;
			$('#wrap1').append(error_html) ;
		}) ;
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;

		$('#rp_preview_wrap').on('click','.backButton',function(){
			$('#rp_preview_wrap').hide() ;
			$('#wrap1').show() ;
		}) ;

		// 产品评价
		$('#wrap1').on('click','.p-evaluation',function(){
			if($(this).hasClass('eval-blue')){
				return false ;
			}
			$(this).closest('ul').find('.eval-blue').addClass('eval-grey').removeClass('eval-blue') ;
			$(this).removeClass('eval-grey').addClass('eval-blue') ;
		}) ;

		// 商品包装、物流评分
		$('#wrap1').on('click','.p-evaluation-star',function(){
			console.info(11) ;
			$(this).closest('ul').find('.eval-star-y').addClass('eval-star-g').removeClass('eval-star-y') ;
			$(this).prevAll('li').andSelf().addClass('eval-star-y').removeClass('eval-star-g') ;
		}) ;

		// 文件选择
		$('#wrap1').on('click','.file_trigger',function(){
			$(this).closest('li').find('input').trigger('click') ;
		}) ;

		$('#wrap1').on('change','input[type=file]',function(){
			var files = $(this)[0].files ;
			curr_file_dom = $(this)[0] ;
			// if(files && files.length > 0){
			// 	for(var i = 0 ; i < files.length ; i++){
			// 		var file = files[i] ;
			// 		readFile(file,readFile_callback) ;
			// 	}
			// }
			// 图片处理
			handleImg(files) ;
		}) ;

		$('#wrap1').on('click','.is_anonymous',function(){
			$(this).toggleClass('eval-checked') ;
			$(this).toggleClass('eval-check') ;
		}) ;

		// 图片预览
		$('#wrap1').on('click','.rp_preview_img',function(e){
			// console.info(1111) ;
			e.stopPropagation() ; 
			var imgs = $(this).closest('ul').find('.rp_preview_img') ;
	        var index = $(this).prevAll().length ;
	        var imgs_html = getImgList(imgs) ;

	        // 记录当前预览的产品
	        $('.order_product_item').removeClass('curr_rp_preview_img') ;
	        $(this).closest('.order_product_item').addClass('curr_rp_preview_img') ;

          	$('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
          	$("#rp_preview_wrap").find("#carousel_num").html(index+1) ;
          	$("#rp_preview_wrap").find("#total_num").html(imgs.length) ;
          	$('#rp_preview_wrap').show() ;
          	mySwiper.init() ;
          	mySwiper._slideTo(index,0) ;
          	imgs = null ;
		}) ;

		// 点击隐藏预览框
		$(".wrap").on("click",".swiper-slide",function(e){
          	e.stopPropagation() ;
          	$(this).closest("#rp_preview_wrap").hide() ;
        }) ;

        // 删除图片
        $("#rp_preview_wrap").on("click",".delete-btn",function(e){
        	e.stopPropagation() ;
        	d_confirm.setTitle("是否删除此照片？") ;
          	d_confirm.setButton("取消","删除") ;
          	d_confirm.confirm_fn = function(){
          		var curr_index=mySwiper.activeIndex ;
          		var $curr_img_wrap = $('.curr_rp_preview_img').find('.product_img_list ul') ;
                mySwiper.removeSlide(curr_index) ;
                var total_num=$("#total_num").html() ;
               	if(total_num-1<=0){
                  	$("#rp_preview_wrap").hide() ;
               	}
               	else{
               		var index_num = 0
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
                // console.info(curr_handleImgs) ;
                $curr_img_wrap.find('input[type=file]').data('handleImgs',curr_handleImgs) ;

                // 图片张数控制
                var curr_len = getImgLength() ;
                if(curr_len < 20){
                	$curr_img_wrap.find('.file_trigger').closest('li').show() ;
                }
                else{
                	$curr_img_wrap.find('.file_trigger').closest('li').hide() ;
                }
          	}
          	d_confirm.show() ;
        }) ;

		// 发表评论
		$('#wrap1').on('click','#publish_evaluation',function(){
			// console.info('发表评论') ;
			package_votes = $('#package_votes').find('li.eval-star-y').size() ;
			delivery_votes = $('#delivery_votes').find('li.eval-star-y').size() ;
			// 昵称
			var nickname = "" ;
			var type = $('.is_anonymous').hasClass('eval-checked') ? "0" : "1" ;
			if(type && type == "1"){
				var curr_user_info = RP.store.getItem('curr_user_info') ;
				// console.info(curr_user_info) ;
				nickname = curr_user_info['nickname'] ;
			}
			product_info = [] ;
			var total_img_length = 0 ;
			$('.order_product_item').each(function(i,v){
				var product_code = $(this).attr('id') ;
				var tmp = {} ;
				tmp['product_code'] = product_code;
				tmp['product_votes'] = $('#' + product_code).find('.p-evaluation.eval-blue').attr('data-votes') ;
				tmp['content_info'] = $('#' + product_code).find('.content_info').val() ;
				if($('#' + product_code).find('input[type=file]').data('handleImgs')){
					tmp['pictures'] = $('#' + product_code).find('input[type=file]').data('handleImgs') ;
					total_img_length += tmp['pictures'].length ;
				}else{
					tmp['pictures'] = [] ;
				}
				product_info.push(tmp) ;
				console.log(product_info)
			}) ;
			if(total_img_length > 20){
				d_alert.setTitle('最多上传20张图片') ;
				d_alert.show() ;
				return ;
			}

			loadingShow($('#wrap1>section')[0]) ;
			var params = {
				package_votes : package_votes ,
				delivery_votes : delivery_votes ,
				product_info : product_info ,
				order_code : order_code ,
				nickname : nickname,
				type : type
			} ;
			console.log(product_info)
			var url = global_path +  "index.php/personalcenter/product_comment" ;
			commonAjax(url,params).then(function(data){
				// console.info(data) ;
				loadingHide($('#wrap1>section')[0]) ;

				if(data && data.status && data.status == '2000'){
					// $('.tip-info').find('div').html('评价成功！') ;
					// $('.tip-info').show() ;
					d_alert.setTitle('评价成功！') ;
					d_alert.show() ;
					setTimeout(function(){
						window.history.go(-1) ;
					},1000) ;
				}
			}) ;

		}) ;

		// 表单验证
		$('#wrap1').on('input','.content_info',function(){
			var str = getStrByLength(this.value,100) ; 
            $(this).val(str) ;
		}) ;

	})() ;


	// 图片处理
	function handleImg(files){
		var ret = $(curr_file_dom).data('handleImgs') ? $(curr_file_dom).data('handleImgs') : [] ;
		console.info(ret) ;
		var curr_len = getImgLength() ;
		// alert(curr_len) ;

		if(curr_len >=20){
			$('.file_trigger').closest('li').hide() ;
			return ;
		}
		for(var i = 0 ; i < files.length ; i++){
			curr_len++ ;
			if(curr_len >= 20){
				$('.file_trigger').closest('li').hide() ;
			}
			if(curr_len > 20){
				return ;
			}
			(function(){
				var tmp = {} ;
				var file = files[i] ;
				var name = file['name'] ;
				tmp['filename'] = name.split('.')[0] ;
				tmp['exname'] = name.split('.')[1] ;

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
						//var html = '<li class="rp_preview_img"><img style="width:52px;height:52px;" real-src="'+ base64 +'" src="'+ base64 +'"></li>' ;
						var html = '<li class="rp_preview_img" style="background: url('+ base64 +') no-repeat center center #fff;background-size:cover;"></li>' ;
						$(curr_file_dom).closest('ul').prepend(html) ;
						base64 = base64.split('base64,')[1];
						tmp['avatar'] = base64 ;
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

		cutImage(curr_file_dom,img,tmp_base64) ;

		tmp_base64 = tmp_base64.split('base64,')[1];
		tmp['avatar'] = tmp_base64 ;
		ret.push(tmp) ;
		$(curr_file_dom).data('handleImgs',ret) ;
	}

	// 截取图片
	function cutImage(curr_file_dom,img,tmp_base64){
		if(!curr_file_dom || !img || !tmp_base64){
			return ;
		}
		var	img_width = img.width ,
			img_height = img.height ;

		var cut_num ;
		var scale = compression_img_width / img_width;
		
		if(img_width > img_height){
			cut_num = img_height ;
		}	 
		else{
			cut_num = img_width ;
		}
		tmp_cut_canvas.width = compression_img_width ;
		tmp_cut_canvas.height = compression_img_width ;
		tmp_cut_ctx.clearRect(0,0,compression_img_width,compression_img_width) ;
		// console.info(img) ;

		tmp_cut_ctx.drawImage(img,0,0,cut_num,cut_num,0,0,compression_img_width,compression_img_width) ;

		var tmp_cut_base64 = tmp_cut_canvas.toDataURL("image/jpeg",scale) ;
		tmp_cut_ctx.clearRect(0,0,compression_img_width,compression_img_width) ;

		//var html = '<li class="rp_preview_img"><img  style="width:52px;height:52px;" real-src="' + tmp_base64 +'" src="'+ tmp_cut_base64 +'"></li>' ;
		var html = '<li class="rp_preview_img" style="background: url('+ tmp_base64 +') no-repeat center center #fff;background-size:cover;"></li>' ;
		$(curr_file_dom).closest('ul').prepend(html) ;
	}


	// 获取图片张数
	function getImgLength(){
		var ret = 0 ;
		$('input[type=file]').each(function(i,v){
			var handleImgs = $(this).data('handleImgs') || [] ;
			ret += handleImgs.length ; 
		}) ;
		return ret ;
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
            	// console.info(list[i]) ;
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
                //img.src = $(list[i]).find('img').attr('real-src') ;
				img_url = $(list[i]).css('background-image') ;

                var sear =new RegExp('\"');
                if(sear.test(img_url)){
                	var imgs_urls = img_url.split(sear) ;
                	img_urls = imgs_urls[1];
                }else{
                	var imgs_urls = img_url.split('(') ;
                	var img_urls_test = imgs_urls[1].split(')');
                	img_urls = img_urls_test[0];
                }
                console.log(img_urls);
                img.src = img_urls ;

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
            })(i)
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





	// 预览图片
	// function readFile_callback(url){
	// 	console.info(url) ;
	// 	if(!url){
	// 		return false ;
	// 	}
	// 	var html = '<li><img src="'+url+'"></li>' ;
	// 	$(curr_file_dom).closest('ul').prepend(html) ;
	// }
}) ;