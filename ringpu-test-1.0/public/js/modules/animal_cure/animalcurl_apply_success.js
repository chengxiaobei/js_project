(function(){

})() ;

require(['global','jsmart','jquery','dialog','validator'],function(global,jsmart,$,_,validator){
	var animalcurl_success_tpl = new jSmart(document.getElementById('animalcurl_success_tpl').innerHTML);

	(function(){
		var sheetNo = getQueryString('sheetNo') ;
		var applyInfo = RP.store.getItem('animalcurl_success_info');
		var mainReq = animalcurl_success_tpl.fetch(applyInfo);
		$('.animal-sjd-info-con').html(mainReq);
		//查看检测单
		$('.wrap').on('click','.animal-btn-two .curr',function(){
			window.location.href = "../personal_center/archives_detailnew.php?sheetNo="+sheetNo+"&fromModelPage=animalcurl_apply";
		});
	})();
});