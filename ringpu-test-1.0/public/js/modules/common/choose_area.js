(function(){

})() ;


require(['jquery', 'global', 'jsmart'],function($,global,_){

	var provice_list_tpl = new jSmart(document.getElementById('provice_list_tpl').innerHTML) ;
	var city_list_tpl = new jSmart(document.getElementById('city_list_tpl').innerHTML) ;
	var area_list_tpl = new jSmart(document.getElementById('area_list_tpl').innerHTML) ;

	// 获取地区信息
	var common_provice_info = RP.store.getItem('common_provice_info') ;
	// 当前省份的城市列表
	var curr_provice = null ;
	var curr_city = null ;
	var curr_area = null ;


	// 页面渲染
	(function(){ 
		// 初始化省份
		if(common_provice_info && common_provice_info.data && common_provice_info.data.length >0){
			console.info(common_provice_info) ;
			var res = provice_list_tpl.fetch(common_provice_info) ;
			$('#wrap1').html(res) ;
		}
		else{
			var url_provice = global_path + "index.php/common/query_provice" ;
			var p_provice = {} ;
			commonAjax(url_provice,p_provice).then(function(data){
				console.info(data) ;
				RP.store.setItem('common_provice_info',data)
				var res = provice_list_tpl.fetch(data) ;
				$('#wrap1').html(res) ;
			}) ;
		}
		
	})() ;



	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			// console.info(111) ;
			window.history.go(-1) ;
		}) ;

		$('#wrap2').on('click','.backButton,.select_again',function(){
			$('.wrap').hide() ;
			$('#wrap1').show() ;
		}) ;

		$('#wrap3').on('click','.backButton,.select_again',function(){
			$('.wrap').hide() ;
			$('#wrap2').show() ;
		}) ;

		$('#wrap1').on('click','.provice',function(){
			var province_code = $(this).attr('data-code') ;
			var province_name = $(this).attr('data-name') ;

			// 设置当前省份
			curr_provice = {
				province_name : province_name ,
				province_code : province_code
			} ;

			// 获取当前省份城市
			var curr_citys_info = getCitys(province_code) ;

			if(curr_citys_info){
				console.info(curr_citys_info) ;
				var data = {
					data : curr_citys_info ,
					province_name : province_name
				} ;
				var res = city_list_tpl.fetch(data) ;
				$('#wrap2').html(res) ;
				$('.wrap').hide() ;
				$('#wrap2').show() ;
			}
			else{
				var url_provice = global_path + "index.php/common/query_cities" ;
				var p_provice = {
					province_code : province_code
				} ;
				commonAjax(url_provice,p_provice).then(function(data){
					if(data && data['data']){
						curr_citys_info = data['data'] ;
						setCitys(province_code,curr_citys_info) ;
					}
					data['province_name'] = province_name ;
					var res = city_list_tpl.fetch(data) ;
					$('#wrap2').html(res) ;
					$('.wrap').hide() ;
					$('#wrap2').show() ;
				}) ;
			}
		}) ;

		// 点击城市
		$('#wrap2').on('click','.city',function(){
			var city_code = $(this).attr('data-code') ;
			var city_name = $(this).attr('data-name') ;

			curr_city = {
				city_code : city_code ,
				city_name : city_name
			} ;

			var url_provice = global_path + "index.php/common/query_area" ;
				var p_provice = {
					city_code : city_code
				} ;
				commonAjax(url_provice,p_provice).then(function(data){
					console.info(data) ;
					data['city_name'] = city_name ;
					var res = area_list_tpl.fetch(data) ;
					$('#wrap3').html(res) ;
					$('.wrap').hide() ;
					$('#wrap3').show() ;
				}) ;

		}) ;

		// 点击地区
		$('#wrap3').on('click','.area',function(){
			var area_name = $(this).attr('data-name') ;
			var area_code = $(this).attr('data-code') ;
			curr_area = {
				area_name : area_name ,
				area_code : area_code 
			} ;
			var curr_area_info = {
				province : curr_provice ,
				city : curr_city ,
				area : curr_area 
			} ;
			RP.store.setItem('curr_area_info',curr_area_info) ;
			// console.info(curr_area_info) ;
			window.history.go(-1) ;
		});
	})() ;

	// 设置某省份的城市
	function setCitys(province_code,citys){
		common_provice_info = RP.store.getItem('common_provice_info') ;
		if(!common_provice_info){
			return false ;
		}
		for(var i = 0 ; i < common_provice_info['data'].length ; i++){
			var provice = common_provice_info['data'][i] ;
			if(provice['province_code'] == province_code){
				provice['citys'] = citys ;
				RP.store.setItem('common_provice_info',common_provice_info) ;
				break ;
			}
		}
	}

	// 获取某省份的城市
	function getCitys(province_code){
		var ret = null ;
		common_provice_info = RP.store.getItem('common_provice_info') ;
		for(var i = 0 ; i < common_provice_info['data'].length ; i++){
			var provice = common_provice_info['data'][i] ;
			if(provice['province_code'] == province_code){
				if(provice['citys']){
					ret = provice['citys'] ;
				}
				break ;
			}
		}
		return ret ;
	}



}) ;