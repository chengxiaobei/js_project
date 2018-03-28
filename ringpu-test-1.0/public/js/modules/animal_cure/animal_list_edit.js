(function(){

})() ;

require(['global','jsmart','jquery','dialog','validator'],function(global,jsmart,$,_,validator){

	// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	var test_id = getQueryString('test_id') ;
	var type = getQueryString('type') ;
	var animal_type = getQueryString('animal_type');
	console.info(type);
	console.info(test_id);
	var sample_name_array = [];
	var sample_name_arrays = [];
	var curr_sample_name ;
	// // 动物类型 birds : 禽类  beasts ： 家畜
	// var animal_type = getQueryString('animal_type') ;
	// // 送检人
	// var client_name ;
	// // 联系电话
	// var client_tel ;
	// // 送检目的
	// var purpose_info = [];
	// // 送检单位
	// var client_unit ;
	/*** 第一步参数 ***/
	// 单舍养殖量 （禽类特有，畜类为空）
	var single_nums ;
	// 全场养殖量
	var all_nums ;
	// 联系人
	// var contacts_name ;
	// 电话
	var contacts_tel ;
	// 品种
	var breed ;
	//禽类品种选择
	var breedchoose ;
	// var birds_breed_info;
	// var birds_type ; 
	// 品种详情（禽类特有，畜类为空） 已去掉
	// var breed_info ;
	// 级别
	var generation ;
	// 详细地址
	// var detailed_address ;
	// 样品信息
	// var specimen_info = [] ;
	// 开始发病日龄
	var morbidity_days ;
	// 送检日龄 
	var client_days ;
	// 发病率
	var morbidity ;
	// 死亡率 
	var mortality ;

	/*** 第二步参数 ***/
	// 拟检病例信息 
	var case_info = [] ;
	var curr_case_info = [] ;
	var antibody ;
	var pathogeny ;
	var bacteria ;
	var	other ;
	/*** 第三步参数 ***/
	// // 用药方案与疗效
	// var curative_effect ;
	// // 疫苗信息
	// var vaccine_info ;
	// 免疫信息
	var immune_info ;
	// 临床表现（检测病毒、细菌必填，其它时候为空）
	var clinical_feature ;
	// 剖检病变（检测病毒、细菌必填，其它时候为空）
	var clinical_info ;
	// 初步诊断
	var tentative_diagnosis ;
	// // 建议检查的项目（禽类特有，畜类为空）
	// var proposal_info ;

	// // 是否有病毒、细菌检测
	// var hasVirusesOrBacteria = false ;
	// // 是否有抗体检测 
	// var hasAntibody = false ;

	// 缓存信息-下次使用
	var animalcurl_apply_info = {} ;

	// 页面渲染
	(function(){
		refresh_html() ;
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(e){
			e.stopPropagation() ;
   			e.preventDefault() ;
   			// var timestamp=new Date().getTime();
 			// window.location.href = "animal_cure_result.php?time="+timestamp;
			window.history.go(-1) ;
		}) ;
		$('#wrap1').on('click','.animal_fill_next_one',function(e){		
			if(!moduleOneVal()){
				return ;
			}
			e.stopPropagation();
			e.preventDefault();
			$('.wrap').hide() ;
			$('#wrap2').show() ;
		});

		$("#wrap1").on('click','#animal_choose',function(e){
			e.stopPropagation();
			e.preventDefault();
			$("#animalchoose").show();
		});
		$("#wrap1").on("click",".mask",function(e){
			e.stopPropagation();
			e.preventDefault();
			$("#animalchoose").hide();
			$("#typechoose").hide();
		})
		$("#wrap1").on("click",".animal-choose-linetwo2",function(e){
			e.stopPropagation();
			e.preventDefault();
			var animal_text = $(this).html();
			console.info(breedchoose);
			if(animal_text != breedchoose){
				$("#birds_breed").val('');				
			}
			breedchoose = animal_text;
			$("#animal_choose").addClass("black-colorclass");
			$("#birds_input").show();
			$("#animal_choose").html(animal_text);
			$("#animalchoose").hide();
		})
		$("#wrap1").on("click","#type_choose",function(e){
			e.stopPropagation();
			e.preventDefault();
			$("#typechoose").show();
		})
		$("#wrap1").on("click",".animal-choose-linetwo1",function(e){
			e.stopPropagation();
			e.preventDefault();
			var animal_text = $(this).html();
			generation = animal_text;
			console.info(generation);
			$("#type_choose").addClass("black-colorclass");
			$("#type_choose").html(animal_text);
			$("#typechoose").hide();
		})
		$('#wrap2').on('click','.backButton',function(e){
			e.stopPropagation();
			e.preventDefault();
			$('.wrap').hide() ;
			$('#wrap1').show() ;
		}) ;

		$('#wrap2').on('click','.animal_fill_next_two',function(e){
			if(!moduleTwoVal()){
				return ;
			}
			e.stopPropagation();
			e.preventDefault();
			$('.wrap').hide() ;
			$('#wrap3').show() ;
		});

		$('#wrap3').on('click','.backButton',function(e){
			e.stopPropagation();
			e.preventDefault();
			$('.wrap').hide() ;
			$('#wrap2').show() ;
		}) ;

		//最大字符验证
		$('#wrap1,#wrap2,#wrap3').on('keydown keyup blur','#all_nums,#single_nums#client_name,#client_unit,#contacts_name,#birds_breed,#beasts_breed,#generation,#serum,#tissue,#cordBlood,#semen,#milk,#other_specimen_name,#other_specimen_num,#morbidity_days,#client_days,#morbidity,#mortality',function(){
			var max = $(this).attr('max-input') ;
			if(max){
				var str = gainStrlen(this.value,max) ;
				$(this).val(str.ret_str) ;
			}
		}) ;
		
		// $("#wrap1,#wrap2,#wrap3").on("input","#all_nums",function(){
		// 	// var event= event || window.event;  
  //   		// var getValue = $(this).val();
		// 	var num_text = $(this).val();
		// 	console.info(num_text);
		// 	// num_text.replace()
		// 	var dot = num_text.indexOf('.');
		// 	// console.info(numstr);
		// 	console.info(dot);
		// 	console.info(num_text.length);
		// 	if(dot<0){
		// 	// 	// alert(1);
		// 		console.info(num_text.length);
		// 		//小数点前的位数
		// 		if(num_text.length>4){
		// 			alert(1);
		// 			$(this).val(num_text);
		// 		}
		// 	}else if(dot==0){
		// 		$(this).val('');
		// 	}
		// 	// else if(dot<0){
		// 	// 	//没有数点
		// 	// 	var numstr = num_text.split('.');
		// 	// 	console.info(numstr);

		// 	// }


		// 	// if(dot<0){
		// 	// 	//小数点前的位数
		// 	// 	console.info(num_text);
		// 	// 	if(num_text.length>4){
		// 	// 		num_text.replace('');
		// 	// 	}
		// 	// }else{
		// 	// 	//小数点后显示位数
		// 	// 	if(num_text.length-dot-1>1){
		// 	// 		var 
		// 	// 		num_text.replace()
		// 	// 	}
		// 	// }

			
			
		// })
		
		
		//养殖量位数规定
		// console.log(breed);
		$('#wrap1').on('input','#single_nums,#all_nums',function(){
			var temp = $(this).val();
			var ret = setNumbersRule(temp,animal_type);
			$(this).val(ret);

		 //  if(animal_type == 'birds'){
			// var temp = $(this).val();
			// var d = temp.indexOf('.');
			// // console.info(d);
			// if(d<=0){//整数
			// 	var ret = temp.replace(/[^\d]/g,'') ;
			// 	if(temp.length>4){
			// 		ret = ret.substring(0,4);
			// 		$(this).val(ret);	
			// 	}else{
			// 		$(this).val(ret);					
			// 	}
			// }else{//小数
			// 	console.info(d);
			// 	var ret = temp.replace(/[^\d\.]/g,'') ;
			// 	if(temp.length - d - 1 > 1){
			// 		ret = ret.substring(0,d+2);
			// 		$(this).val(ret);
			// 	}else{
			// 		$(this).val(ret);
			// 	}
			// }
		 //  }else{
		 //  	var temp = $(this).val();
		 //  	var ret = temp.replace(/[^\d]/g,'') ;
		 //  	$(this).val(ret);
		 //  }
		});
		// 文本域字数验证
		$('#wrap1,#wrap2,#wrap3').on('keydown keyup blur','#other_purpose,#detailed_address,#antibody,#pathogeny,#virus,#separation,#bacteria,#gene,#pathological,#other,#curative_effect,#vaccine_info,#immune_info,#clinical_feature,#clinical_info,#tentative_diagnosis,#proposal_info',function(){
			var num;
   			// 其他送检目的
   			if($(this).attr('id') == 'other_purpose'){
   				num = 50 ;
   			}
   			else if($(this).attr('id') == 'detailed_address'){
   				num = 40 ;
   			}
   			else{
   				num = 100 ;
   			}
   			var str = gainStrlen(this.value,num) ;
   			console.info(str) ; 
   			$(this).val(str.ret_str) ;
   			$(this).closest('div').next('p').html(str.ret_num + '/<span>'+ num +'</span>') ;

   		}) ;

		$('#wrap3').on('click','.animal_fill_submit',function(){
			
			if(!moduleThreeVal()){
				return ;
			}
			var animalcurl_apply_info = {} ;
			//判断动物类型，缓存品种
			if(animal_type == 'beasts'){
				breed = $('#beasts_breed').val();
				animalcurl_apply_info['breed'] = breed ;
			}else{
				breed = breedchoose + $('#birds_breed').val();
				animalcurl_apply_info['breed'] = breedchoose ;
				animalcurl_apply_info['birds_breed_info'] = $('#birds_breed').val();					
			}

			var params = {} ;
			params['test_id'] = test_id;
			params['single_nums'] = single_nums ;
			params['all_nums'] = all_nums ;
			params['breed'] = breed ;
			params['generation'] = generation ;
			params['morbidity_days'] = morbidity_days ;
			params['client_days'] = client_days ;
			params['morbidity'] = morbidity ;
			params['mortality'] = mortality ;
			params['case_info'] = curr_case_info ;
			params['clinical_feature'] = clinical_feature;
			params['clinical_info'] = clinical_info ;
			params['tentative_diagnosis'] = tentative_diagnosis ;
			params['immune_info'] =  immune_info;

			//缓存动物类型，全场单舍养殖量，级别
			animalcurl_apply_info['animal_type'] = animal_type ;
			animalcurl_apply_info['all_nums'] = all_nums ;
			animalcurl_apply_info['single_nums'] = single_nums ;			
			animalcurl_apply_info['generation'] = generation ;
			var user_code = RP.store.getItem('curr_user_info')['user_code'] ;
			animalcurl_apply_info['user_code'] = user_code ;
			var animalcurl_apply_info_key = 'animalcurl_apply_info' + user_code ;
			RP.store.setItem(animalcurl_apply_info_key,animalcurl_apply_info) ;
			var url = global_path + 'index.php/animalcurl/improve_apply' ;

			commonAjax(url,params).then(function(data){
				console.info(data) ;
				if(data && data.status && data.status == '2000'){
					//RP.store.removeItem('animalcurl_base_info') ;
					var curr_case_info_name = 'curr_case_info' + test_id;
					RP.store.removeItem(curr_case_info_name);
					var complete_animal_list = 'complete_animal_list' + test_id
					RP.store.setItem(complete_animal_list,'true');
					d_alert.setTitle('采样单已完善！') ;
					d_alert.ok_fn = function(){
						if(!type){
							window.location.href = 'animal_cure_result.php?test_id='+test_id;
						}else{
							window.location.href = '../personal_center/archives_detail.php?id='+test_id+'&type='+type;
						}
					}
					d_alert.show() ;
				}else if(data && data.status && data.status == '6001'){
					RP.store.removeItem('curr_case_info');
					var complete_animal_list = 'complete_animal_list' + test_id
					RP.store.setItem(complete_animal_list,'true');
					d_alert.setTitle(data.message) ;
					d_alert.ok_fn = function(){
					if(!type){
							window.location.href = 'animal_cure_result.php?test_id='+test_id;
						}else{
							window.location.href = '../personal_center/archives_detail.php?type='+type+'&=id'+test_id;
						}
					}
					d_alert.show() ;
				}else{
					// d_alert.setTitle('表单提交失败') ;
					// d_alert.show() ;
					errorPageShow($("#wrap3")[0],'system',2);
				}
				
			}).fail(function(){
				//d_alert.setTitle('表单提交失败') ;
				//d_alert.show() ;
				errorPageShow($("#wrap3")[0],'system',2);
			}) ;


		}) ;

	})() ;

	//刷新页面，读取缓存
	function refresh_html(){
		
		var curr_user_info = RP.store.getItem('curr_user_info') ;
		var user_code = curr_user_info['user_code'] ;
		var animalcurl_apply_info_key = 'animalcurl_apply_info' + user_code ;
		var animalcurl_apply_info = RP.store.getItem(animalcurl_apply_info_key) ;
		var animalcurl_base_info_key = 'animalcurl_base_info'+ user_code ;
		var animalcurl_base_info = RP.store.getItem(animalcurl_base_info_key);
		console.info(animalcurl_base_info);
		console.info(curr_user_info);
		console.info(animalcurl_apply_info);
		console.info(type);
		if(type){//from诊疗档案
			var curr_case_info_id = "curr_case_info"+test_id;
			curr_sample_name =RP.store.getItem(curr_case_info_id);
			console.info(curr_sample_name); 
			// console.info(curr_sample_name['animal_type']);
			// console.info(curr_sample_name['sample_loimias']);

			//判断品种和级别
			if(animal_type=='birds'){
				$("#animal_choose").show();
				// animal_type = 'birds';
			}else{
				$("#father").hide();
				$("#animal_choose").hide();
				$("#beasts_input").show();
				$("#birds_input").hide();
				$('#single_nums').next('p').html('头');
				$('#all_nums').next('p').html('头');
				// animal_type = 'beasts';
			}
			
			//第二步拟建疾病
			// sample_name_arrays = curr_sample_name['sample_loimias']
			console.info(curr_sample_name);
			for(var i in curr_sample_name){
				if(curr_sample_name[i].sample_name=='抗体'){
					$('#antibody').closest('.case_info_list').show();
				}else if(curr_sample_name[i].sample_name=='病毒'){
					$('#pathogeny').closest('.case_info_list').show();
				}else if(curr_sample_name[i].sample_name=='细菌'){
					$('#bacteria').closest('.case_info_list').show();
				}else{
					$('.console_info_title').html(curr_sample_name[i].sample_name);
					$('#other').closest('.case_info_list').show();
				}
			}
		}else{//from动物诊疗
		animal_type = animalcurl_base_info['animal_type'];
		case_info = RP.store.getItem('curr_case_info');
		// console.log(case_info);
		//第二步，拟建疾病
		if(case_info && case_info.length != 0){
			for(var i in case_info){
				if(case_info[i].case_type=='抗体'){
					$('#antibody').closest('.case_info_list').show();
				}else if(case_info[i].case_type=='病毒'){
					$('#pathogeny').closest('.case_info_list').show();
				}else if(case_info[i].case_type=='细菌'){
					$('#bacteria').closest('.case_info_list').show();
				}else{
					$('.console_info_title').html(case_info[i].other_name);
					$('#other').closest('.case_info_list').show();
				}
			}
		}
	}
	var birds_breed_info = '';
	//当上一次填写动物类型和本次相同时，读取上一次的单舍养殖量，全场养殖量，品种，品种详情，级别
		if(!animalcurl_apply_info || animalcurl_apply_info.length == 0){
			if(curr_user_info['breed'] == animal_type){//个人信息中
				all_nums = curr_user_info['all_nums'] ;				
			}
		}else{//上次填写的
			if(animalcurl_apply_info['animal_type'] == animal_type){
				user_code = animalcurl_apply_info['user_code'] ;
				all_nums = animalcurl_apply_info['all_nums'] ;
				single_nums = animalcurl_apply_info['single_nums'] ;
				// console.log(breed);
				generation = animalcurl_apply_info['generation'] ;
					console.info(animal_type);
					if(animal_type=='beasts'){
						breed = animalcurl_apply_info['breed'];
						$('#beasts_breed').val(breed) ;
					}else{
						breedchoose = animalcurl_apply_info['breed'];
						birds_breed_info = animalcurl_apply_info['birds_breed_info'];
						breed = breedchoose + birds_breed_info;
					}
			}
		}
		if(animal_type=='beasts'){
			$("#father").hide();//级别：父代
			$("#beasts_input").show();//畜类品种详情
			$('#single_nums').next('p').html('头');
			$('#all_nums').next('p').html('头');
		}else{
			$("#animal_choose").html(breedchoose);
			$('#birds_breed').val(birds_breed_info) ;
			$("#animal_choose").show();//禽类品种选择
			if(breedchoose){
			$("#birds_input").show();//禽类品种详情				
			}
		}
		if(all_nums){
		$('#all_nums').val(all_nums) ;			
		}
		if(single_nums){
		$('#single_nums').val(single_nums) ;			
		}
		if(generation){
			$('#type_choose').html(generation) ;
		} 
	}
	//验证最小字数
	function min_input(str,min){
		var flag = true ;
		var charLen = 0;
		for(var i=0;i<str.length;i++){
		    if(str.charCodeAt(i)>255){  
		        charLen += 2 ;
		 	}else{  
		 	    charLen ++ ;
		 	}
		}
		console.info(charLen) ;
		if(str && charLen<min ){
			flag = false ;
		}
		return flag ;
	}

	//1.完善信息第一步验证
    function moduleOneVal(){
    	single_nums = $('#single_nums').val() || '' ;
		all_nums = $('#all_nums').val() || '' ;
		// breed = $('#breed').val() || '' ;
		// breed = breed;
		// birds_type = $("#birds_input").find('input').val() || '';
		generation = generation;
		morbidity_days = $('#morbidity_days').val() || '' ;
		client_days = $('#client_days').val() || '' ;
		morbidity = $('#morbidity').val() || '' ;
		mortality = $('#mortality').val() || '' ;
		// console.info(single_nums.length);
		// console.info(breed+' '+birds_type);
    	var flag = true ;
    	if(!flag){
			return false ;
		}
		if(single_nums.substring(single_nums.length-1,single_nums.length)=='.'){
			d_alert.setTitle('请填写正确的单舍养殖量！') ;
			d_alert.show() ;
			return false;
		}
		if(single_nums && !min_input(single_nums,1) ){
			d_alert.setTitle('请填写正确的单舍养殖量！') ;
			d_alert.show() ;
			return false;
		}
		if(!all_nums){
			d_alert.setTitle('请填写全场养殖量！') ;
			d_alert.show() ;
			return false;			
		}
		if(all_nums.substring(all_nums.length-1,all_nums.length)=='.'){
			d_alert.setTitle('请填写正确的全场养殖量！') ;
			d_alert.show() ;
			return false;
		}
		if(all_nums && !min_input(all_nums,1)){
			d_alert.setTitle('请填写正确的全场养殖量！') ;
			d_alert.show() ;
			return false;
		}
		var birds_breed = $('#birds_breed').val();
		if(animal_type == 'birds' && !birds_breed){
			d_alert.setTitle('请填写品种！') ;
			d_alert.show() ;
			return false;			
		}
		if(birds_breed && !min_input(birds_breed,2)){
			d_alert.setTitle('请填写正确的品种详情！') ;
			d_alert.show() ;
			return false;
		}
		var beasts_breed = $('#beasts_breed').val();
		if(animal_type == 'beasts' && !beasts_breed){
			d_alert.setTitle('请填写品种！') ;
			d_alert.show() ;
			return false;			
		}
		if(beasts_breed && !min_input(beasts_breed,2)){
			d_alert.setTitle('请填写正确的品种详情！') ;
			d_alert.show() ;
			return false;
		}

		if(!generation){
			d_alert.setTitle('请选择级别！') ;
			d_alert.show() ;
			return false;			
		}
		// if(generation && !min_input(generation,2)){
		// 	d_alert.setTitle('请填写正确的级别！') ;
		// 	d_alert.show() ;
		// 	return false;
		// }
		if(!client_days){
			// console.info(generation);
			d_alert.setTitle('请填写送检日龄！') ;
			d_alert.show() ;
			return false;			
		}
		
		if(!morbidity){
			d_alert.setTitle('请填写发病率') ;
			d_alert.show() ;
			return false;
		}
		if(morbidity && !min_input(morbidity,1)){
			d_alert.setTitle('请输入正确的发病率') ;
			d_alert.show() ;
			return false;
		}
		if(!mortality){
			d_alert.setTitle('请填写死亡率') ;
			d_alert.show() ;
			return false;
		}
		if(mortality && !min_input(mortality,1)){
			d_alert.setTitle('请输入正确的死亡率') ;
			d_alert.show() ;
			return false;
		}
		return flag;
	}
	//2.完善信息第二步验证
    function moduleTwoVal(){
    	var flag = true ;
    	if(!flag){
			return false ;
		}
		antibody = $('#antibody').val() || '';
		pathogeny = $('#pathogeny').val() || '';
		bacteria = $('#bacteria').val() || '';
		other = $('#other').val() || '';
		var title;
		curr_case_info = [];
		if(case_info && case_info.length != 0){
			for(var i in case_info){
				//console.info(case_info[i].case_type);
				if(case_info[i].case_type=='抗体'){
					if(!antibody){
						d_alert.setTitle('请填写抗体拟检疫病') ;
						d_alert.show() ;
						return false;
					}
				}else if(case_info[i].case_type=='病毒'){
					if(!pathogeny){
						d_alert.setTitle('请填写病毒拟检疫病') ;
						d_alert.show() ;
						return false;					
					}
				}else if(case_info[i].case_type=='细菌'){
					if(!bacteria){
						d_alert.setTitle('请填写细菌拟检疫病') ;
						d_alert.show() ;
						return false;
					}
				}else{
					title = case_info[i].other_name;
					if(!other){
						d_alert.setTitle('请填写' + title + '拟检疫病') ;
						d_alert.show() ;
						return false ;					
					}
				}
			}

		}	
		if(curr_sample_name && curr_sample_name.length != 0){
			for(var i in curr_sample_name){
				//console.info(case_info[i].case_type);
				if(curr_sample_name[i].sample_name=='抗体'){
					if(!antibody){
						d_alert.setTitle('请填写抗体拟检疫病') ;
						d_alert.show() ;
						return false;
					}
				}else if(curr_sample_name[i].sample_name=='病毒'){
					if(!pathogeny){
						d_alert.setTitle('请填写病毒拟检疫病') ;
						d_alert.show() ;
						return false;					
					}
				}else if(curr_sample_name[i].sample_name=='细菌'){
					if(!bacteria){
						d_alert.setTitle('请填写细菌拟检疫病') ;
						d_alert.show() ;
						return false;
					}
				}else{
					title = curr_sample_name[i].other_name;
					if(!other){
						d_alert.setTitle('请填写' + title + '拟检疫病') ;
						d_alert.show() ;
						return false ;					
					}
				}
			}
		}
			
			if(antibody){
					var tmp = {};
						tmp['case_type'] = '抗体' ;
						tmp['case_details'] = antibody;
						tmp['other_name'] = '';
						curr_case_info.push(tmp);
					}
					if(pathogeny){
						var tmp = {};
						tmp['case_type'] = '病毒' ;
						tmp['case_details'] = pathogeny;
						tmp['other_name'] = '';
						curr_case_info.push(tmp);
					}
					if(bacteria){
						var tmp = {};						
						tmp['case_type'] = '细菌' ;
						tmp['case_details'] = bacteria;
						tmp['other_name'] = '';
						curr_case_info.push(tmp);
					}
					if(other){
						var tmp = {};
						tmp['case_type'] = 'other' ;//'other'
						tmp['case_details'] = other;
						tmp['other_name'] = title;
						curr_case_info.push(tmp);
					}
					console.info(curr_case_info);			
		return flag ;
    }

   //  function makeCaseList(type){
   //  	var tmp = {} ;
   //  	if(curr_case_info && curr_case_info.length != 0){
			// for(var i in curr_case_info){
			// 	var case_type = curr_case_info[i].case_type;
			// 	console.info(case_type);
			// 	if(type=='antibody'){
			// 			if(case_type == '抗体'){
			// 				curr_case_info[i].case_detail = antibody;						
			// 			}else{
			// 				tmp['case_type'] = '抗体' ;
			// 				tmp['case_detail'] = antibody;
			// 				tmp['other_name'] = '';
			// 				curr_case_info.push(tmp);							
			// 			}
			// 		}
			// 		if(type=='pathogeny'){
			// 			if(case_type == '病毒'){
			// 				curr_case_info[i].case_detail = pathogeny;
			// 			}else{
			// 				tmp['case_type'] = '病毒' ;
			// 				tmp['case_detail'] = pathogeny;
			// 				tmp['other_name'] = '';
			// 				curr_case_info.push(tmp);
			// 			}
			// 		}
			// 			if(type=='bacteria'){
			// 				if(case_type == '细菌'){
			// 					curr_case_info[i].case_detail = bacteria;						
			// 				}else{
			// 					tmp['case_type'] = '细菌' ;
			// 					tmp['case_detail'] = bacteria;
			// 					tmp['other_name'] = '';
			// 					curr_case_info.push(tmp);
			// 				}
			// 			}
			// 			if(type='other'){
			// 				if(case_type == 'other'){
			// 				curr_case_info[i].case_detail = other;						
			// 				}else{
			// 					tmp['case_type'] = 'other' ;//'other'
			// 					tmp['case_detail'] = other;
			// 					tmp['other_name'] = '';
			// 					curr_case_info.push(tmp);
			// 				}
			// 			}
			// 		}
			// 	}else{
			// 		if(type='antibody'){
			// 			tmp['case_type'] = '抗体' ;
			// 			tmp['case_detail'] = antibody;
			// 			tmp['other_name'] = '';
			// 			curr_case_info.push(tmp);
			// 			console.info(curr_case_info);			
			// 		}
			// 		if(type='pathogeny'){
			// 			tmp['case_type'] = '病毒' ;
			// 			tmp['case_detail'] = pathogeny;
			// 			tmp['other_name'] = '';
			// 			curr_case_info.push(tmp);
			// 			console.info(curr_case_info);								
			// 		}
			// 		if(type='bacteria'){
			// 			tmp['case_type'] = '细菌' ;
			// 			tmp['case_detail'] = bacteria;
			// 			tmp['other_name'] = '';
			// 			curr_case_info.push(tmp);
			// 			console.info(curr_case_info);			
			// 		}
			// 		if(type='	other'){
			// 			tmp['case_type'] = 'other' ;//'other'
			// 			tmp['case_detail'] = other;
			// 			tmp['other_name'] = '';
			// 			curr_case_info.push(tmp);
			// 			console.info(curr_case_info);			
			// 		}
			// 	}

   //  }
	//3.完善信息第三步验证
    function moduleThreeVal(){
 		clinical_feature = $('#clinical_feature').val() || '';
 		clinical_info = $('#clinical_info').val() || '';
 		tentative_diagnosis = $('#tentative_diagnosis').val() || '';
 		immune_info = $('#immune_info').val() || '';
 		var flag = true;
 		if(!flag){
 			return false;
 		}
 		if(!clinical_feature){
 			d_alert.setTitle('请填写临床表现！') ;
			d_alert.show() ;
			return false;
 		}
 		if(!immune_info){
 			d_alert.setTitle('请填写免疫信息！') ;
			d_alert.show() ;
			return false;
 		}
 		return flag;
 	}

}) ;