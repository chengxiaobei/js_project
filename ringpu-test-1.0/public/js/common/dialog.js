
Dialog = function(opts){

	if(!this instanceof Dialog){
		return new Dialog(opts) ;
	}

	this.type = opts.type || 'alert' ;
	this.title = opts.title || '';
	this.ok_fn = opts.ok_fn || null ;
	this.cancel_fn = opts.cancel_fn || null ;
	this.confirm_fn = opts.confirm_fn || null ;

	this.init() ;
	this.bindEvents() ;
} ;

Dialog.prototype.init = function(){
	var dialog_html ;
	var body = document.querySelector('body') ;
	var type = this.type ;
	if(type && type == 'alert' && !document.querySelector('#RP_COMMON_ALERT')){
		dialog_html = getHtmlByType(this.type) ;
	}
	if(type && type == 'confirm' && !document.querySelector('#RP_COMMON_CONFIRM')){
		dialog_html = getHtmlByType(this.type) ;
	}
	if(type && type == 'confirm_guide' && !document.querySelector('#RP_COMMON_CONFIRM_GUIDE')){
		dialog_html = getHtmlByType(this.type) ;
	}
	if(dialog_html){
		document.querySelector('body').insertAdjacentHTML('beforeend',dialog_html) ;
	}
}

Dialog.prototype.bindEvents = function(){
	var self = this ;
	if(this.type == 'alert'){
		// console.info(11111) ;
		var ok_btn = document.querySelector('.RP_COMMON_DIALOG_OK') ;
		var ok_call = function(){
			document.querySelector('#RP_COMMON_ALERT').style.display = 'none' ;
			if(self.ok_fn){
				self.ok_fn.call(self) ;
			}
		}
		ok_btn.addEventListener('click',ok_call,false) ;
	}
	if(this.type == 'confirm'){
		var cancel_btn = document.querySelector('.RP_COMMON_DIALOG_CANCEL') ;
		var confrim_btn = document.querySelector('.RP_COMMON_DIALOG_CONFIRM') ;
		var cancel_call = function(){
			document.querySelector('#RP_COMMON_CONFIRM').style.display = 'none' ;
			if(self.cancel_fn){
				self.cancel_fn.call(self) ;
			}
		}
		var confrim_call = function(){
			document.querySelector('#RP_COMMON_CONFIRM').style.display = 'none' ;
			window.location.href = window.location.href ;
			if(self.confirm_fn){
				self.confirm_fn.call(self) ;
			}
		}
		cancel_btn.addEventListener('click',cancel_call,false) ;
		confrim_btn.addEventListener('click',confrim_call,false) ;
	}
	if(this.type == 'confirm_guide'){
		var cancel_btn = document.querySelector('.RP_COMMON_DIALOG_CANCEL_GUIDE') ;
		var confrim_btn = document.querySelector('.RP_COMMON_DIALOG_CONFIRM_GUIDE') ;
		var cancel_call = function(){
			document.querySelector('#RP_COMMON_CONFIRM_GUIDE').style.display = 'none' ;
			if(self.cancel_fn){
				self.cancel_fn.call(self) ;
			}
		}
		var confrim_call = function(){
			document.querySelector('#RP_COMMON_CONFIRM_GUIDE').style.display = 'none' ;
			if(self.confirm_fn){
				self.confirm_fn.call(self) ;
			}
		}
		cancel_btn.addEventListener('click',cancel_call,false) ;
		confrim_btn.addEventListener('click',confrim_call,false) ;
	}
}


function getHtmlByType(type){
	var ret = '' ;
	if(type && type == 'alert'){
		ret = '<div id="RP_COMMON_ALERT" style="display:none;">'+
			  '	<div class="mask" style="z-index:666"></div>'+
			  '    	<div class="rp-tc">'+
			  '	        <div class="rp-tc-tit">'+
			  '	          <p class="RP_COMMON_DIALOG_CONTENT">'+(this.title ? this.title : '您不可以这样哦～')+'</p>'+
			  '	        </div>'+
			  '	        <div class="rp-tc-btn">'+
			  '	          <a class="rp-tc-btn-one RP_COMMON_DIALOG_OK" href="javascript:void(0);">关闭</a>'+
			  '	        </div>'+
			  '    	</div>'+
			  '</div>' ;
	}
	if(type && type == 'confirm'){
		ret = '<div id="RP_COMMON_CONFIRM" style="display:none;">'+
			  '		<div class="mask"></div>'+
			  '    	<div class="rp-tc">'+
			  '	        <div class="rp-tc-tit">'+
			  '	          <p class="RP_COMMON_DIALOG_CONTENT">您的操作有误哦～</p>'+
			  '	        </div>'+
			  '	        <div class="rp-tc-btn">'+
			  '	          <a class="left rp-tc-btn-left RP_COMMON_DIALOG_CANCEL" href="javascript:void(0);">返回</a>'+
			  '	          <a class="right rp-tc-btn-right RP_COMMON_DIALOG_CONFIRM" href="javascript:void(0);">重试</a>'+
			  '	          <div class="clearf"></div>'+
			  '	        </div>'+
			  '    	</div>'+		
      		  '</div>' ;
	}
	if(type && type == 'confirm_guide'){
		ret = '<div id="RP_COMMON_CONFIRM_GUIDE" style="display:none;">'+
			  '		<div class="mask"></div>'+
			  '    	<div class="rp-tc">'+
			  '	        <div class="rp-tc-tit">'+
			  '	          <p class="RP_COMMON_DIALOG_CONTENT">确认操作吗～</p>'+
			  '	        </div>'+
			  '	        <div class="rp-tc-btn">'+
			  '	          <a class="left rp-tc-btn-left RP_COMMON_DIALOG_CANCEL_GUIDE" href="javascript:void(0);">返回</a>'+
			  '	          <a class="right rp-tc-btn-right rp-tc-blue RP_COMMON_DIALOG_CONFIRM_GUIDE" href="javascript:void(0);">确认</a>'+
			  '	          <div class="clearf"></div>'+
			  '	        </div>'+
			  '    	</div>'+
			  '</div>' ;
	}
	return ret ;
}

Dialog.prototype.show = function(){
	var target ;
	if(this.type == 'alert'){
		target = document.querySelector('#RP_COMMON_ALERT') ;
	}
	if(this.type == 'confirm'){
		target = document.querySelector('#RP_COMMON_CONFIRM') ;
	}
	if(this.type == 'confirm_guide'){
		target = document.querySelector('#RP_COMMON_CONFIRM_GUIDE') ;
	}
	target.style.display = 'block' ;
} ;

Dialog.prototype.setTitle = function(title){
	if(!title) return ;
	var target ;
	if(this.type == 'alert'){
		target = document.querySelector('#RP_COMMON_ALERT') ;
	}
	if(this.type == 'confirm'){
		target = document.querySelector('#RP_COMMON_CONFIRM') ;
	}
	if(this.type == 'confirm_guide'){
		target = document.querySelector('#RP_COMMON_CONFIRM_GUIDE') ;
	}
	target.querySelector('.RP_COMMON_DIALOG_CONTENT').innerHTML = title ;
}
Dialog.prototype.setButton=function(cancel,confirm){
	var target_cancel ;
	var target_confirm ;
	if(this.type == 'alert'){
		target_cancel = document.querySelector('#RP_COMMON_ALERT').querySelector(".RP_COMMON_DIALOG_OK") ;
	}
	if(this.type == 'confirm'){
		target_cancel = document.querySelector('#RP_COMMON_CONFIRM').querySelector(".RP_COMMON_DIALOG_OK") ;
		target_confirm = document.querySelector('#RP_COMMON_CONFIRM').querySelector(".RP_COMMON_DIALOG_OK") ;
	}
	if(this.type == 'confirm_guide'){
		target_cancel = document.querySelector('#RP_COMMON_CONFIRM_GUIDE').querySelector(".RP_COMMON_DIALOG_CANCEL_GUIDE") ;
		target_confirm = document.querySelector('#RP_COMMON_CONFIRM_GUIDE').querySelector(".RP_COMMON_DIALOG_CONFIRM_GUIDE") ;
	}
	target_cancel.innerHTML=cancel ;
	target_confirm.innerHTML=confirm ;

}

