define(['global','md5'],function(global,md5){

	// 当前连接地址
	var curr_href = window.location.href ;
	var md5_curr_href = hex_md5(curr_href) ;

	// 获取所有scrollTop记录
	var stms = RP.store.getItem('RP_scrollTopMemorys','session') || {} ;
	var curr_sTop = stms[md5_curr_href] || 0 ;
	
	var scrollTopMemory = function(){
		this.isMemory = false ;
	}

	window.onscroll = function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop ;
		stms[md5_curr_href] = scrollTop ;
		RP.store.setItem('RP_scrollTopMemorys', stms, 'session') ;
	}

	return {
		sTopReset : function(){
			document.body.scrollTop = curr_sTop ;
			document.documentElement.scrollTop = curr_sTop ;
		} ,
		sTopRemove : function(){
			stms[md5_curr_href] = 0 ;
			RP.store.setItem('RP_scrollTopMemorys', stms, 'session')
		}
	} ;

}) ;

