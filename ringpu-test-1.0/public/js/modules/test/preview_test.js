

require(['jquery', 'global', 'jsmart','jUtil'],function($,global,_,jUtil){

	var article_list_tpl = new jSmart(document.getElementById('article_list_tpl').innerHTML) ;

	// 数据渲染
	(function(){
		var url=global_path+"index.php/culture_community/getStatus" ;
      	var param={
          page_size: 60
        } ; 
        // var tmp_data = RP.store.getItem('tmp_data') ; 
        // var res = article_list_tpl.fetch(tmp_data) ;
        // $('#wrap1').html(res) ;
        commonAjax(url, param).then(function(data){
        	console.info(data) ;
        	RP.store.setItem('tmp_data',data['data']) ;
        	var res = article_list_tpl.fetch(data['data']) ;
        	$('#wrap1').html(res) ;
        }) ;

	})() ;


	// 事件绑定
	(function(){
		$('#wrap1').on('click','.rp_preview_wrap .rp_preview_img',function(){
			// console.info(22222) ;
			var index = $(this).attr('data-index') ;
			// console.info(index) ;
			var imgs = $(this).closest('.rp_preview_wrap').attr('data-multiple_imgs') ;

			var imgs_html = getImgList(JSON.parse(imgs)) ;

			// console.info(imgs_html) ;
			// $('.wrap').hide() ;
			$('#rp_preview_wrap').find('.oa-carousel-list').html(imgs_html) ;
			$('#rp_preview_wrap').show() ;

			var settings = {
				'interval':3000 ,
				'showbutton':'true' ,
				'touch':'true'
			} ;
			jUtil('.oa-carousel').carousel(settings) ;
			jUtil('.oa-carousel').carousel(index) ;
			setTimeout(function(){
				$('.oa-carousel-list-item').show() ;
			},200) ;
			
		}) ;
	})() ;


	function getViewport() {
        //判断文档模式compatMode == 'BackCompat'
        if (document.compatMode == 'BackCompat') {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            };
        } else {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            };
        }
    }

	function getImgList(list){
		var pageSize = getViewport();
		var liWidth = pageSize['width'];
    	var liHeight = pageSize['height'] - 38;

    	var first_img = list[0] ;
    	var last_img = list[list.length-1] ;

    	var ret = '' ;

		ret +='<li class="oa-carousel-list-item" style="display:none;width:'+liWidth+'px;height:'+liHeight+'px;'+'">'+
	          '  <div class="ylpic-mainlb-div"  style="width:'+liWidth+'px;height:'+liHeight+'px;'+'">'+
	          '    <img src="'+last_img['h_picture_url']+'">'+
	          '  </div>'+
	          '</li>' ;

		for(var i = 0 ; i < list.length ; i++){
			ret +='<li class="oa-carousel-list-item" style="display:none;width:'+liWidth+'px;height:'+liHeight+'px;'+'">'+
		          '  <div class="ylpic-mainlb-div"  style="width:'+liWidth+'px;height:'+liHeight+'px;'+'">'+
		          '    <img src="'+list[i]['h_picture_url']+'">'+
		          '  </div>'+
		          '</li>' ;
		}

		ret +='<li class="oa-carousel-list-item" style="display:none;width:'+liWidth+'px;height:'+liHeight+'px;'+'">'+
	          '  <div class="ylpic-mainlb-div"  style="width:'+liWidth+'px;height:'+liHeight+'px;'+'">'+
	          '    <img src="'+first_img['h_picture_url']+'">'+
	          '  </div>'+
	          '</li>' ;

		return ret ;
	}



	(function(){
		var canvas = document.createElement('canvas') ;
		var ctx = canvas.getContext('2d') ;

		var img = new Image() ;
		img.src = 'http://123.56.146.81:8685/assets/images/ask/201512/CA4DD5DD22EC25E43D6BACE9E647B439_HD.jpg' ;

		img.onload = function(){
			canvas.width = img.width ;
			canvas.height = img.height ;

			console.info(1111) ;
			ctx.drawImage(img,0,0) ;
		}
		// console.info(canvas) ;
	})() ;


	// function imgHandle(img){

	// }

});
