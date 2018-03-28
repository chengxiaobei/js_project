require(['global','jsmart','jquery','dialog','validator'],function(global,jsmart,$,_,validator){

	var url=global_path+"index.php/animalcurl/analysis_getTreatment";
	var params={
    "user_code": "2s3sp54vzm0yKC2YlsSJvHVRHBEC2pao",
    "shop_code": "ringpu",
    "farmName": "birds",
    "phoneNo": "13739797781"
	}
	commonAjax(url,params).then(function(data){
		console.info(data);
	});


	var url_getSheetList=global_path+"index.php/animalcurl/analysis_getSheetList";
	var params_getSheetList={
		'phoneNo':'13739797781'
	}
	commonAjax(url_getSheetList,params_getSheetList).then(function(data){
		console.info(data);
	});
}) ;