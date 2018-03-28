

define(['jquery'],function($){

	// 依赖jquery的插件封装

	jQUtil_Config = {} ;
	jQUtil_Events = {} ;
	jQUtil_Untils = {} ; 

	jQUtil_Config['carousel'] = {
		'preview_wrap_selector' : 'rp_preview_wrap' , 
		'currButtton_class':'huadong-white',	//底部按钮激活类
		'animate_time':300,						//每次动画运行时间
		'animate_num' :50 						//动画运行次数
	} ;

	jQUtil_Events['carousel'] = {
		// 初始化dom 组件
		initDom : function(target){
			var self = this ;
			// 外层组件
			var $oa_carousel = target ;
			console.info($oa_carousel) ;
			// 包围img组件
			var $oa_carousel_list = $oa_carousel.find('.oa-carousel-list') ;
			console.info($oa_carousel_list) ;
			// 图片列表组件
			var $oa_carousel_list_items = $oa_carousel_list.find('.oa-carousel-list-item');
			console.info($oa_carousel_list_items) ;

			var len = $oa_carousel_list_items.length ;

			var oa_carousel_opts = $oa_carousel.data('oa-carousel-opts') ;
			var touch = oa_carousel_opts['touch'] ;
			oa_carousel_opts['oa_carousel_list_items_length'] =  len ;
			
			//获取外层组件宽度
			var carousel_Width  = $oa_carousel[0].offsetWidth ;
			var carousel_Height = $oa_carousel[0].offsetHeight ;

			oa_carousel_opts['carousel_Width'] = carousel_Width ;
			$oa_carousel.data('oa-carousel-opts',oa_carousel_opts) ;

			// 设置内层组件的位置
			$oa_carousel_list[0].style.width = len * carousel_Width + 'px' ;
			if(touch && touch == 'true'){
				// self.setTransfrom($oa_carousel_list,-carousel_Width,0) ;
				self.setTransfrom($oa_carousel_list,0,0) ;
			}
			else{
				// $oa_carousel_list[0].style.left = '-' + carousel_Width + 'px' ;
			}
			
			// 设置每个图片的宽度
			for( var i = 0 ; i < len ; i++){
				var img = $oa_carousel_list_items.get( i ) ;
				img.style.width = carousel_Width + 'px' ;
			}

			// 获取初始化参数
			var oa_carousel_opts = $oa_carousel.data('oa-carousel-opts');
			// 是否显示底部按钮
			var showbutton = oa_carousel_opts['showbutton'] ;
			// 是否显示左右箭头 
			var showarrow = oa_carousel_opts['showarrow'] ;

			if(showbutton && showbutton == 'true'){
				var button_html = '<div class="oa-carousel-buttons huadpic-center">' ;
				for(var i = 0 ; i < len ; i++){
					if(i==0){
						button_html += '<a index="1" class="'+jQUtil_Config['carousel']['currButtton_class']+'"></a>' ;
					}
					else{
						button_html += '<a index="'+(i+1)+'"></a>' ;
					}
				}
				button_html += '</div>' ;	

				$oa_carousel.closest('#'+jQUtil_Config['carousel']['preview_wrap_selector'])
				.find('.oa-carousel-button-wrap').html(button_html) ;	   
			}
		} ,
		'stop' : function(target){
			var $this = target ;
			var oa_carousel_opts = $this.data('oa-carousel-opts') ;
			oa_carousel_opts['animating'] = "false" ;
			$this.data('oa-carousel-state','stop') ;
			$this.data('oa-carousel-opts',oa_carousel_opts) ;
		},
		'next' : function(target){
			var $this = target ;
			var self = this ;

			var oa_carousel_opts = $this.data('oa-carousel-opts') ;

			var index = oa_carousel_opts['index'] ,
				animating = oa_carousel_opts['animating'] ,
				len = oa_carousel_opts['oa_carousel_list_items_length'] ;
			if( animating && animating == 'true'){
				return ;
			}
			if( index >= ( len - 3) ){
				index = 0 ;
			}
			else{
				index = index + 1 ;
			}
			oa_carousel_opts['animating'] = 'true' ;
			$this.data('oa-carousel-opts',oa_carousel_opts) ;

			var offset = oa_carousel_opts['carousel_Width'] * -1 ;
			self.animate($this, offset, index) ;
		},
		'prev' : function(target){
			var $this = target ;
			var self = this ;

			var oa_carousel_opts = $this.data('oa-carousel-opts') ;

			var index = oa_carousel_opts['index'] ,
				animating = oa_carousel_opts['animating'] ,
				len = oa_carousel_opts['oa_carousel_list_items_length'] ;
			if( animating && animating == 'true'){
				return ;
			}
			if( index <=0 ){
				index = len - 3 ;
			}
			else {
				index = index - 1 ;
			}

			oa_carousel_opts['animating'] = 'true' ;
			$this.data('oa-carousel-opts',oa_carousel_opts) ;

			var offset = oa_carousel_opts['carousel_Width'] ;

			self.animate($this,offset,index) ;
		},
		goIndex : function(target,index){
			var $this = target ;
			var self = this ;
			var oa_carousel_opts = $this.data('oa-carousel-opts') ;
			var animating = oa_carousel_opts['animating'] ;

			if(index == null || typeof index != 'number' || isNaN(index) || (animating && animating == 'true')) 
				return ;

			var curr_index =  oa_carousel_opts['index'] ;
			var len = oa_carousel_opts['oa_carousel_list_items_length'] ;
			var carousel_Width = oa_carousel_opts['carousel_Width'] ;
			var showbutton = oa_carousel_opts['showbutton'] ;

			if(index < 0){
				index = 0 ;
			}
			if(index > (len - 1)){
				index = len -1 ;
			}
			var offset = ( index - curr_index ) *  carousel_Width * -1 ;
			self.animate($this,offset,index) ;

		},
		animate : function(target,offset,index){

			var $this = target ;
			var self = this ;//carousel_Width
			var $oa_carousel_list = $this.find('.oa-carousel-list') ;

			var oa_carousel_opts = $this.data('oa-carousel-opts') ;
			var touch = oa_carousel_opts['touch'] ;
			var curr_index = oa_carousel_opts['index'] ;
			var carousel_Width = oa_carousel_opts['carousel_Width'] ;
			var len =  oa_carousel_opts['oa_carousel_list_items_length'] ;
			var showbutton = oa_carousel_opts['showbutton'] ;

			if(touch && touch=='true'){
				var value = (-curr_index)*carousel_Width + offset ;
				// var value = (-curr_index-1)*carousel_Width + offset ;

				var time = jQUtil_Config['carousel']['animate_time'] / 1000 ;
				// if(value<(len-2)*(-carousel_Width)){
				// 	// 轮播到最后一个
				// 	value = -carousel_Width ;
				// }
				// if(value>(-carousel_Width)){
				// 	// 轮播到第一个
				// 	value = (len-2)*(-carousel_Width) ;
				// }
				if(value<(len-1)*(-carousel_Width)){
					// 轮播到最后一个
					value = (len-1)*(-carousel_Width) ;
				}
				if(value>0){
					// 轮播到第一个
					value = 0 ;
				}

				self.setTransfrom($oa_carousel_list,value,time) ;
				oa_carousel_opts['animating'] = 'false' ;
				oa_carousel_opts['index'] = index ;
				$this.closest("#rp_preview_wrap").find("#carousel_num").html(index+1) ;
				if(showbutton && showbutton == 'true'){
					self.showButtons($this) ;
				}
			}
		} ,
		'showButtons' : function(target){
			var $this = target ;
			var oa_carousel_opts = $this.data('oa-carousel-opts') ;
			var $oa_carousel_buttons = $this.closest('#'+jQUtil_Config['carousel']['preview_wrap_selector'])
										.find('.oa-carousel-buttons') ;
			var buttons = $oa_carousel_buttons.find('a') ;
			var index = oa_carousel_opts['index'] ;
			var className = jQUtil_Config['carousel']['currButtton_class'] ;

			for(var i = 0 ; i < buttons.length ; i++){
				var button = buttons.eq(i) 
				if( index == i ){
					button.addClass(className) ;
				}
				else{
					button.removeClass(className) ;
				}
			}
		},
		'bindEvent' : function(target){
			var $this = target ;
			var self = this ;
			var oa_carousel_opts = $this.data('oa-carousel-opts');
			var showbutton = oa_carousel_opts['showbutton'] ;
			var showarrow = oa_carousel_opts['showarrow'] ;
			var touch = oa_carousel_opts['touch'] ;

			if(showbutton && showbutton == 'true'){
				var $oa_carousel_button_wrap = $this.closest('#'+jQUtil_Config['carousel']['preview_wrap_selector'])
											.find('.oa-carousel-button-wrap');
				$oa_carousel_button_wrap.on('click','a',function(){
					var click_button = $(this) ;
					var click_index = click_button.attr('index') ;
					var oa_carousel_opts = $this.data('oa-carousel-opts') ;
					var curr_index = oa_carousel_opts['index'] ;

					if((curr_index+1) == click_index) return ;

					self.goIndex($this,(click_index-1));
				}) ;
			}

			$this.on('mouseover',function(){
				self.stop($this) ;
			}) ;

			// 轻触离开
			$this.on('click',function(){
				$(this).closest('#'+jQUtil_Config['carousel']['preview_wrap_selector']).hide() ;
			}) ;

			// 触摸滑动
			if(touch && touch == 'true'){
				var touchStart = function(evt){
					var curr_target = evt.target ;
					if($(curr_target).hasClass('oa-carousel-arrow') || $(curr_target).is('span')) return ;

					var oa_carousel_opts = $this.data('oa-carousel-opts');
					var animating = oa_carousel_opts['animating'] ;
					var index = oa_carousel_opts['index'] ;
					var len = oa_carousel_opts['oa_carousel_list_items_length'] ;
					if(animating && animating == 'true') return ;
					
					oa_carousel_opts['startTime'] = new Date() * 1 ;
					oa_carousel_opts['startX'] = evt.touches[0].pageX ;
					oa_carousel_opts['offsetX'] = 0 ;

					$this.data('oa-carousel-opts',oa_carousel_opts) ;
				}

				var touchMove = function(evt){
					var curr_target = evt.target ;
					if($(curr_target).hasClass('oa-carousel-arrow') || $(curr_target).is('span')) return ;

					var oa_carousel_opts = $this.data('oa-carousel-opts');
					var animating = oa_carousel_opts['animating'] ;
					var index = oa_carousel_opts['index'] ;
					var len = oa_carousel_opts['oa_carousel_list_items_length'] ;
					if(animating && animating == 'true') return ;
					
					var curr_index = oa_carousel_opts['index'] ;
					var carousel_Width = oa_carousel_opts['carousel_Width'] ;
					var $oa_carousel_list = $this.find('.oa-carousel-list') ;


					// evt.preventDefault() ;
					oa_carousel_opts['offsetX'] = evt.targetTouches[0].pageX - oa_carousel_opts['startX'] ;
					// var value = (-curr_index-1)*carousel_Width + oa_carousel_opts['offsetX'] ;

					var value = (-curr_index)*carousel_Width + oa_carousel_opts['offsetX'] ;

					if(index == 0 && oa_carousel_opts['offsetX'] > 0 ){
						return ;
					}
					if(index ==(len-1) && oa_carousel_opts['offsetX'] < 0){
						return ;
					}

					self.setTransfrom($oa_carousel_list,value,0) ;

					$this.data('oa-carousel-opts',oa_carousel_opts) ;
				}

				var touchEnd = function(evt){
					var curr_target = evt.target ;
					if($(curr_target).hasClass('oa-carousel-arrow') || $(curr_target).is('span')) return ;

					var oa_carousel_opts = $this.data('oa-carousel-opts');
					var animating = oa_carousel_opts['animating'] ;
					if(animating && animating == 'true') return ;
					//evt.preventDefault();
					
					var carousel_Width = oa_carousel_opts['carousel_Width'] ;
					var boundary =  carousel_Width / 20 ;
					var startTime = oa_carousel_opts['startTime'] ;
					var endTime = new Date() * 1 ;
					var offsetX = oa_carousel_opts['offsetX'] ;
					var index = oa_carousel_opts['index'] ;
					var len = oa_carousel_opts['oa_carousel_list_items_length'] ;
					var $oa_carousel_list = $this.find('.oa-carousel-list') ;

					if(index == 0 && oa_carousel_opts['offsetX'] > 0 ){
						return ;
					}
					if(index ==(len-1) && oa_carousel_opts['offsetX'] < 0){
						return ;
					}
					
					// if((endTime - startTime)>50){
					// 	if(offsetX >= boundary ){
					// 		index = index * 1 + (-1) ;
					// 		if(index<0){
					// 			index = len - 3 ;
					// 		}
					// 	}else if(offsetX < 0 && offsetX < -boundary){
					// 		index = index + 1 ;
					// 		if(index>len-3){
					// 			index = 0 ;
					// 		}
					// 	}
					// }

					if((endTime - startTime)>50){
						if(offsetX >= boundary ){
							index = index * 1 + (-1) ;
							if(index<0){
								index = 0 ;
							}
						}else if(offsetX < 0 && offsetX < -boundary){
							index = index + 1 ;
							if(index > len-1){
								index = len -1 ;
							}
						}
					}
					self.goIndex($this,index);
				}

				if( document.addEventListener ) {
					$this[0].addEventListener('touchstart', touchStart);
					$this[0].addEventListener('touchmove', touchMove);
					$this[0].addEventListener('touchend', touchEnd);
				}
				else if( document.attachEvent ){ //IE
					$this[0].attachEvent('ontouchstart', touchStart);
					$this[0].attachEvent('ontouchmove', touchMove);
					$this[0].attachEvent('ontouchend', touchEnd);
				}
			}
			$this.data('oa-carousel-active','true') ;
		},
		'setTransfrom' : function(target,value,time){
			var transition = 'transform '+time+'s ease-out' ,
				webkit_transition = '-webkit-transform '+time+'s linear' ,
				moz_transition = '-moz-transform '+time+'s linear' ,
				o_transition = '-o-transform '+time+'s linear' ,
				transform = 'translate3d('+ value +'px, 0, 0)' ;

			target[0].style.transition = transition ;
			target[0].style.webkitTransition = webkit_transition ;
			target[0].style.mozTransition = moz_transition;
			target[0].style.oTransition = o_transition;

			target[0].style.webkitTransform = transform ;
			target[0].style.mozTransform = transform ;
			target[0].style.oTransform = transform ;
			target[0].style.transform = transform ;
		}
	} ;

	
	$.fn.carousel = function(opts){

		var $this = $(this) ;
		if(!$this.hasClass('oa-carousel')) return ;

		if(isNaN(opts) && (!opts || typeof opts == 'object')){
			var oa_carousel_active = $this.data('oa-carousel-active') ;
			console.info('oa_carousel_active==' + oa_carousel_active) ;

			opts = opts ? opts : {} ;
			opts['interval'] = opts['interval'] ? opts['interval'] : 2000 ;
			opts['touch'] = opts['touch'] ? opts['touch'] : 'false' ;
			opts['showbutton'] = opts['showbutton'] ? opts['showbutton'] : 'false' ;
			opts['showarrow'] = opts['showarrow'] ? opts['showarrow'] : 'false' ;
			opts['index'] = opts['index'] ? opts['index'] : 0 ;
			opts['animating'] = opts['animating'] ? opts['animating'] : 'false' ;
			$this.data('oa-carousel-opts',opts);

			jQUtil_Events['carousel'].initDom($this);
			if(!oa_carousel_active){
				jQUtil_Events['carousel'].bindEvent($this);
			}
		}
		else if(opts!=null && !isNaN(opts)){
			jQUtil_Events['carousel'].goIndex($this,opts*1);
		}
	}

	return $ ;
	
}) ;











