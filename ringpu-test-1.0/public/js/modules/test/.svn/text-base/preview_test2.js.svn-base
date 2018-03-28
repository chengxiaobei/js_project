require(['jquery', 'global', 'jsmart','jUtil'],function($,global,_,jUtil){

	setPageSize() ;

	var settings = {
		'interval':3000 ,
		'showbutton':'true' ,
		'touch':'true'
	} ;
	jUtil('.oa-carousel').carousel(settings) ;
	// jUtil('.oa-carousel').carousel(index) ;
	// setTimeout(function(){
	// 	$('.oa-carousel-list-item').show() ;
	// },200) ;


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

    function setPageSize(){
    	var pageSize = getViewport();
		var liWidth = pageSize['width'];
    	var liHeight = pageSize['height'] - 80;

    	$('.oa-carousel-list-item').css({'width':liWidth,'height':liHeight}) ;
    	$('.oa-carousel-list-item').css({'width':liWidth,'height':liHeight}) ;
    }
}) ;