
(function(){
	
})() ;


require(['jquery', 'global', 'jsmart'],function($,global,_){

	//变量
	var code = getQueryString('code');
	var content = getQueryString('content');
	// 页面渲染
	(function(){
        
        // setTimeout(function(){
        //     $('#searchtext').focus() ;
        // },1000) ;

	})() ;
 


	// 业务逻辑
	(function(){
		//点击返回
		$('.wrap').on('click','.back-btn',function(){			
				window.history.go(-1) ;
		}) ;
		 //点击清除按钮
	    $('.wrap').on('click','.clear-btn',function(){
	    	$('#searchtext').val('');
	    })
	    //点击搜索按钮 
	    $('.wrap').on('click','#searchbutton',function(){
	    	var content=$.trim($('#searchtext').val());
	    	if(content&&content!=""&&content!=" "){
	    		window.location.href="result.php?content="+content;
	    	}
	      
	    });
		
	})() ;

});