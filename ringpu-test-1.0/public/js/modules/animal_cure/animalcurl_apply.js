(function(){

})() ;

require(['global','jsmart','jquery','dialog','validator'],function(global,jsmart,$,_,validator){
		// 公用提示框
	var d_alert = new Dialog({type:'alert'}) ;
	var d_confrim_guide = new Dialog({type:'confirm_guide'}) ;
	var test_id = getQueryString('test_id') ;
	var type = getQueryString('type') ;
	var sample_type=getSampleType();
	var animal_type = getQueryString('animal_type');
	var animalcurl_apply_tpl = new jSmart(document.getElementById('animalcurl_apply_tpl').innerHTML) ;
	var animalcurl_apply_choice_tpl = new jSmart(document.getElementById('animalcurl_apply_choice_tpl').innerHTML) ;
	var sampling_itmes_tpl = new jSmart(document.getElementById('sampling_itmes_tpl').innerHTML);
	var animalcurl_apply_sales_tpl = new jSmart(document.getElementById('animalcurl_apply_sales_tpl').innerHTML);
	var animalcurl_apply_city_tpl = new jSmart(document.getElementById('animalcurl_apply_city_tpl').innerHTML);
	var animalcurl_apply_sallist_tpl = new jSmart(document.getElementById('animalcurl_apply_sallist_tpl').innerHTML);
	var animalcurl_beasts_pig_tpl="";
	var submit_data={};
	if(sample_type=="beasts"){
		animalcurl_beasts_pig_tpl=new jSmart(document.getElementById('animalcurl_beasts_pig_tpl').innerHTML);
	}
	//index/details用于存储不同检测大类返回的检测项目,避免覆盖,避免重复请求  
	var sampling_index=[];
	var sampling_details=[];
	//缓存样品及检测项目
	RP.store.setItem('sampling_index',sampling_index);
	RP.store.setItem('sampling_details',sampling_details);

	//样品价格
	var totalPrice = 0;
	// var pig_data={'index':0};
	//样品点击删除时的当前行
	var cancelEl;
	//样品点击删除时的外层结构
	var conEl;
	//提交检测单时的参数
	var post_params = {};
	// 页面渲染
	(function(){
		// var url = global_path + 'index.php/animalcurl/analysis_getTreatment' ;
		// var params = {
		// 	'phoneNo':'13739797781',
		// 	'farmName':'河南省漯河经济开发区富硕养殖场'
		// };
		var treatment_data = RP.store.getItem('treatment_data');
		if(treatment_data){
			treatment_data.index=0;
		}else{
			window.location.href='./index.php';
		}
		RP.store.setItem('resource_item',JSON.stringify(treatment_data));
		var mianRes = animalcurl_apply_tpl.fetch(treatment_data);
		var choiceRes = animalcurl_apply_choice_tpl.fetch(treatment_data);
		$('#mainWrap').append(mianRes);
		$('#choiceWrap').html(choiceRes);
		addNewSample();
		if(getSampleType()=='beasts'){
			addNewPigSample();
		}
		// commonAjax(url,params).then(function(data){
		// 	if(data.status == '2000'){
		// 		data.data.index=0;
		// 		RP.store.setItem('resource_item',JSON.stringify(data.data));
		// 		var mianRes = animalcurl_apply_tpl.fetch(data.data);
		// 		var choiceRes = animalcurl_apply_choice_tpl.fetch(data.data);
		// 		$('#mainWrap').append(mianRes);
		// 		$('#choiceWrap').html(choiceRes);
		// 		addNewSample();
		// 		if(getSampleType()=='beasts'){
		// 			addNewPigSample();
		// 		}
		// 	}
		// }).fail(function(e){
		// 	console.log('111111');
		// });
	})() ;

	//事件监听
	(function(){
		//最大字符验证

		$('.wrap').on('keydown keyup blur','input[ids="earNo"],#farmName,input[ids="farmName"],input[ids="vaccine"]',function(){
			var max = $(this).attr('max-input') ;
			// console.info(max);

			if(max){
				var str = getStrByLength(this.value,max) ;
				$(this).val(str) ;
			}
		}) ;

		//最大字符验证数字
		$('.wrap').on('keydown keyup blur','#morbidity,#mortality,input[ids="no"],input[ids="sendAge"],input[ids="morbidityAge"],input[ids="sendSamplingCount"],#phoneNo,#newContactPhone,#poultryTotalCount,#poultrySingleCount,#poultryMonthCount,#livestockTotalCount,#livestockYearCount,#livestockParity',function(){
			var max = $(this).attr('max-input') ;
			$(this).attr('maxlength',max);
			var num_text = $(this).val();
			var ret = num_text.replace(/[^\d]/g,'');
			$(this).val(ret);
		}) ;
       //验证邮箱
       $('.wrap').on('blur','#newEmail',function(){
       	   var emailtext = $(this).val();
       	   var emailPat=/^(.+)@(.+)$/;
       	   var emailtext=emailtext.match(emailPat);
          if (emailtext==null) {
          	errTips = "请填入正确的邮箱";
            //alert("电子邮件地址必须包括 ( @ 和 . )")
            d_alert.setTitle(errTips);
			d_alert.show();
			$(this).val('');
            return false;
          }
       })
		//发病率 死亡率验证
		// $('.wrap').on('keydown keyup blur','#morbidity,#mortality',function(){
		// 	var num_text = $(this).val();
  //     		var ret = num_text.replace(/^(100|[1-9]\d|\d)$/,''); 
		// 	$(this).val(ret); 
		// });

		// 文本域字数验证
		$('.wrap').on('keydown keyup blur','#clinicalSymptoms,#vaccineName,#immuneProcedure,#dosageSchedule,#disinfectingPlan,#dissectingLesion,#preliminaryDiagnosis,#derattingPlan,[ids="othersymptom"]',function(){
			var num;
	   	// 其他,发病情况
	   		if($(this).attr('id') == 'vaccineName'){
	   			num = 50 ;
	   		}
	   		else{
	   			num = 100 ;
	   		}
	   		var ret = '' ,tmp_len = 0 ;
        	var str = this.value;
    		for (var i=0; i<str.length; i++) { 
       		 	if(tmp_len>=num){
            		break ;
        		}
	        	tmp_len++ ;
	        	var c_str = str.charAt(i); 
	        	ret += c_str ; 
   			 }
	   		// var str = getStrByLength(this.value,num) ;
	   		$(this).val(ret) ;
	   		$(this).next('div').html(tmp_len + '/<span>'+ num +'</span>') ;

	   	}) ;
		//编辑按钮点击效果
		$('.wrap').on('click','.right-edit',function(){
			if($(this).hasClass('editing')){
				$(this).html("编辑");
				$(this).removeClass('editing');
				if($(this).closest('li').find('.text-area textarea').val()!=""){
					$(this).css('color','gray');    //已经编辑过的状态
				}else{
					$(this).css('color','#1fa8ec'); //未编辑内容的状态
				}
				$(this).closest('li').find('.text-area').hide();
			}else{
				$(this).html("完成");
				$(this).addClass('editing');
				$(this).closest('li').find('.text-area').show();
			}
		});

		//点击下一步,数据验证
		// $('.wrap').on('click','.exam-next',function(){
		// 	var subId = $(this).closest('.sub-section').attr('id');
		// 	console.log(checkContent(sample_type,subId));
		// 	if(!checkContent(sample_type,subId)){
		// 		return false;
		// 	};
		// })

		//单选按钮点击样式
		$('.wrap').on('click','.con-check',function(){
			$(this).addClass('curr');
			$(this).siblings('.con-check').removeClass('curr');
		});
		//返回按钮
		$('.wrap').on('click','.main-back-btn',function(){
			$('.sub-section').each(function(){
				if($(this).css('display') != 'none'){
					//第一步，返回到动物诊疗首页
					if($(this).attr('id') == 'section1'){
						window.history.go(-1) ;
					}else{
						$(this).hide();
						changeProgessBar($(this).attr('id'),'prev');
						$(this).prev().show();
					}
				
				}
				
			});
		});

		//取消按钮
		$('.wrap').on('click','.main-reg-btn',function(){
			// $('.cancel_tips').show();
			var confirm_cancel = function(){
				RP.store.removeItem('sampling_index');
				RP.store.removeItem('sampling_details');
				RP.store.removeItem('resource_item');
				RP.store.removeItem('treatment_data');
				window.location.href = "./index.php";
			}
			d_confrim_guide.setTitle('是否取消当前检测申请单？') ;
			d_confrim_guide.confirm_fn = confirm_cancel ;
			d_confrim_guide.show() ; 
		});
		// //取消弹窗确定
		// $('.cancel_tips').on('click','.confirm',function(e){
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// 	window.location.href = "./index.php";
		// 	// $(this).closest('.cancel_tips').hide();
		// });
		// //取消弹窗关闭
		// $('.cancel_tips').on('click','.hzz_right',function(e){
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// 	$(this).closest('.cancel_tips').hide();
		// });

		//完成和下一步按钮
		$('.wrap').on('click','.animal-exam-next a',function(e){
			e.stopPropagation();
			e.preventDefault();
			var thisSubSection = $(this).closest('.sub-section');
			var check = checkContent(sample_type,thisSubSection.attr('id'));
			if(!check){
				return false;
			}else{
				if($(this).hasClass('complete-btn')){
					// console.log(post_params);
					submitTreatment();
				}else if($(this).hasClass('check-next-btn')){
					getSales(thisSubSection);
						// thisSubSection.hide();
						// changeProgessBar(thisSubSection.next().attr('id'),'next');
						// thisSubSection.next().show();						
				}else{
					// console.log(post_params);
					thisSubSection.hide();
					changeProgessBar(thisSubSection.next().attr('id'),'next');
					thisSubSection.next().show();

				}
			}
		});

		//畜类－－饲养品种多选
		$('.wrap').on('click','#beasts_breeding',function(){
			$('#mainWrap').hide();
			$('.beasts_breeding').siblings('div').hide();
			$('.beasts_breeding').show();
			$('#choiceWrap').show();
		});
		//畜类－－送检猪类别多选
		$('.wrap').on('click','#pigs_category',function(){
			$('#mainWrap').hide();
			$('.pigs_category').siblings('div').hide();
			$('.pigs_category').show();
			$('#choiceWrap').show();
		});
		//禽类－－饲养品种多选
		$('.wrap').on('click','#birds_breeding',function(){
			$('#mainWrap').hide();
			$('.birds_breeding').siblings('div').hide();
			$('.birds_breeding').show();
			$('#choiceWrap').show();
		});
		//公用--检测部位及样品多选
		$('.wrap').on('click','div[ids="birds_type_names"]',function(){

			var el = $(this).closest('li').prev().find('.div-input');
			var s_index=$(this).closest('.con-sample').attr('sample-index');
			var str_arr = el.text();
			addItemstoTypes(str_arr,s_index);
			$('#mainWrap').hide();
			$('.birds_type_names').siblings('div').hide();
			$('.birds_type_names').show();
			$('#choiceWrap').show();
		});

		//多选的选择按钮
		$('.wrap').on('click','.animal-treat-choose ul li',function(){
			if($(this).hasClass('curr')){
				$(this).find('.choose-curr').remove();
				$(this).removeClass('curr');
			}else{
				$(this).addClass('curr');
				$(this).append('<div class="choose-curr"></div>');
			}
		});
		//多选框的返回按钮
		$('.wrap').on('click','.choice-back-btn',function(){
			$('#choiceWrap').hide();
			$('#mainWrap').show();
		});

		//多选框的完成按钮
		$('.wrap').on('click','.choice-reg-btn',function(){
			var array = '';
			var itemPrice = 0;
			totalPrice = 0;
			var item = $(this).parent().next().find('ul .curr');
			var className = $(this).closest('div').attr('class');

			if(item && item.length>0){
				item.each(function(index){
						array += $(this).text();
						//不是最后一个就加;隔开
						if(index != (item.length-1)){
							array += ';';						
						}
						//入股时检测项目的选择的时候
						if(className=='sampling_detail'){
							itemPrice = itemPrice +Number($(this).attr('item-price'));
						}
				})
			}

			if(array!=''){
				$('#'+className).removeClass('curr');
				$('#'+className).text(array);
				//sampling_detail选择检测项目或者birds_type_names选择检测部位或样品
				if(className=='sampling_detail'||className=='birds_type_names'){ 
					var s_index=$('.'+className+' ul li').last().attr('s_index');
					$('div[sample-index='+s_index+']').find('div[ids="'+className+'"]').removeClass('curr');
					$('div[sample-index='+s_index+']').find('div[ids="'+className+'"]').text(array);
					if(className=='sampling_detail'){
						$('div[sample-index='+s_index+']').attr('sample-price',itemPrice);	
					}
				}

			}
			
			//遍历样品，获取每一个样品的价格，计算总费用
			$('#section3 .con-sample').each(function(){
				totalPrice = totalPrice + Number($(this).attr('sample-price'));
			});
			var nums = $('input[ids="sendSamplingCount"]').val();
			if(nums){
				var finallPrice = totalPrice * Number(nums);
				$('#sampleFee span').text(finallPrice);
			}else{
				$('#sampleFee span').text('0');
			}	
			$('#choiceWrap').hide();
			$('#mainWrap').show();
		});

		//监听样品数量变化，预估价格随之变化
		$('.wrap').on('keydown keyup blur','input[ids="sendSamplingCount"]',function(){
			var nums = $('input[ids="sendSamplingCount"]').val();
			if(nums && totalPrice>0){
				var finallPrice = totalPrice * Number(nums);
				$('#sampleFee span').text(finallPrice);
			}else{
				$('#sampleFee span').text('0');
			}
		});

		$('.wrap').on('click','.hzz_Capacity',function(){
			$(this).hide();
		});
		//公用－－选择或新建养殖场
		$('.wrap').on('click','#farmNames',function(){
			// $('.farmNames').show();
			// window.location.href = "./animalcurl_apply_choosefarm.php";
			$('.wrap').hide();
			$('#farmWrap').show();
		});
		//禽类－－送检代次单选
		$('.wrap').on('click','#poultry_generations',function(){
			$('.poultry_generations').show();
		});
		//畜类－－猪阶段单选
		$('.wrap').on('click','div[ids="pigStage"]',function(){
			$(this).closest('.con-sample').find('.pigStage').show();
		});
		//公用－－健康咨询顾问单选
		$('.wrap').on('click','#consultant_phone',function(){
			$('.consultant_phone').show();
		});
		//公用－－销售审批人单选
		$('.wrap').on('click','#sales_phone',function(){
			$('.sales_phone').show();
		});
		//公用－－检测大类单选
		$('.wrap').on('click','div[ids="birds_sampling"]',function(){
			var is_birds=window.location.pathname.indexOf('birds');
			if(is_birds>-1){
				$(this).closest('.con-sample').find('.birds_sampling').show();
			}else{
				$(this).closest('.con-sample').find('.beasts_sampling').show();
			}

		});
		//畜类－－检测大类单选
		// $('.wrap').on('click','div[ids="beasts_sampling"]',function(){

		// });
		//禽类和畜类－－检测项目选择
		$('.wrap').on('click','div[ids="sampling_detail"]',function(e){
			e.preventDefault();
			e.stopPropagation();
			var el = $(this).closest('li').prev().find('.div-input');
			var s_index=$(this).closest('.con-sample').attr('sample-index');
			var animalType = el.attr('animal-type');
			var typeName = el.text();
			samplingSystem(animalType,typeName,'.sampling_detail',s_index);
			// $('#mainWrap').hide();
			// $('.sampling_detail').siblings('div').hide();
			// $('.sampling_detail').show();
			// $('#choiceWrap').show();
		});
		//单选的li点击
		$('.wrap').on('click','.select_down ul li',function(e){
			e.preventDefault();
			e.stopPropagation();
			var className = $(this).closest('.select_down').attr('data-type');
			//检测大类的选择
			if($(this).attr('animal-type')){
				var s_index=$(this).closest('.con-sample').attr('sample-index');
				$('div[sample-index='+s_index+']').find('div[ids="birds_sampling"]').attr('animal-type',$(this).attr('animal-type'));
				$('div[sample-index='+s_index+']').find('div[ids="birds_sampling"]').text($(this).text());
				$('div[sample-index='+s_index+']').find('div[ids="birds_sampling"]').removeClass('curr');
				$('div[sample-index='+s_index+']').find('div[ids="sampling_detail"]').text('请选择（可多选）');
				$('div[sample-index='+s_index+']').find('div[ids="sampling_detail"]').addClass('curr');
				$('div[sample-index='+s_index+']').find('div[ids="birds_type_names"]').text('请选择（可多选）');
				$('div[sample-index='+s_index+']').find('div[ids="birds_type_names"]').addClass('curr');
			}else if($(this).attr('pig-stage')){
				var s_index=$(this).closest('.con-sample').attr('sample-index');
				$('div[sample-index='+s_index+']').find('div[ids="pigStage"]').attr('pig-stage',$(this).attr('pig-stage'));
				$('div[sample-index='+s_index+']').find('div[ids="pigStage"]').text($(this).text());
				$('div[sample-index='+s_index+']').find('div[ids="pigStage"]').removeClass('curr');
			}else if(className=="consultant_phone" || className=="sales_phone"){
				$('#'+className).text($(this).text());
				$('#'+className).attr("phone-no",$(this).attr("phone-no"));
				$('#'+className).removeClass('curr');
			}else{
				$('#'+className).text($(this).text());
				$('#'+className).removeClass('curr');
			}
			$(this).closest('.select_down').hide();
		});

		//检测样品添加按钮
		$('.wrap').on('click','.con-addsample .sample-add',function(e){
			e.preventDefault();
			e.stopPropagation();
			var el_id=$(this).closest('.sub-section').attr('id');
			if(el_id=="section3"){
				addNewSample();
			}else{
				addNewPigSample();
			}

		});
		//检测样品点击展示
		$('.wrap').on('click','.con-sample .sample-title',function(){
			$(this).next().toggle();
			$(this).toggleClass('curr');
		});
		//检测样品删除

		$('.wrap').on('click','.con-sample .title-del',function(e){
			e.preventDefault();
			e.stopPropagation();
			conEl = $(this).closest('.animal-apply-con');
			// var length = conEl.find('.con-sample').length;
			// if(length <= 1){
			// 	conEl.find('.con-sample .title-del').hide();
			// }else{
			// 	$('.delete_tips').show();
				cancelEl = $(this).closest('.con-sample');
			// }
			var confirm_delete = function(){
				cancelEl.remove();
				conEl.find('.con-sample').each(function(index,el){
					$(el).find('.sample-title .left span').text(index+1);
					if(conEl.find('.con-sample').length == 1){
						$(el).find('.sample-title .title-del').hide();
					}
				});
			}
			d_confrim_guide.setTitle('是否删除此样品信息？') ;
			d_confrim_guide.confirm_fn = confirm_delete ;
			d_confrim_guide.show() ; 
		});

		// //删除确认弹窗
		// $('.wrap').on('click','',function(){
		// 	$('.delete_tips')
		// });
		// //取消弹窗确定
		// $('.delete_tips').on('click','.confirm',function(e){
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// 	cancelEl.remove();
		// 	conEl.find('.con-sample').each(function(index,el){
		// 		$(el).find('.sample-title .left span').text(index+1);
		// 	});
		// 	$(this).closest('.delete_tips').hide();
		// });
		// //取消弹窗关闭
		// $('.delete_tips').on('click','.hzz_right',function(e){
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// 	$(this).closest('.delete_tips').hide();
		// });
		
		/***
		 ** 养殖场信息，搜索新建等
		 ** 一律监听在最外层元素#farmWrap上
		***/
		//搜索按钮点击,请求接口
		$('#farmWrap').on('click','#searchBtn',function(){
			var searchText = $('#searchText').val().trim();
			if(searchText){
				var url = global_path + 'index.php/animalcurl/analysis_getFarmsByFuzzyName';
				var params = {
					'device_id':'deviceid',
    				'app_name':'appname',
					'farmName':searchText
				};
				$('#farmWrap').append(getLoadHtml());
				commonAjax(url,params).then(function(data){
					if(data.status == '2000' && data.data[0]){
						$('.RP_LOADING').remove();
						var list = data.data;
						var html="";
						for(var i=0;i<list.length;i++){
							html+="<li>"+list[i]+"</li>";
						}
						$('#farmWrap .search-list-item ul').html(html);
						$('#farmWrap .search-nodata').hide();
						$('#farmWrap .search-list').show();
						console.log(data);
					}else{
						$('.RP_LOADING').remove();
						$('#farmWrap .search-list').hide();
						$('#farmWrap .search-nodata').show();
					}
				}).fail(function(e){
					$('.RP_LOADING').remove();
					errorPageShow($("#farmWrap")[0],'system',2);
				});
			}
		});

		//搜索清除数据
		$('#farmWrap').on('click','.closs_img',function(){
			$('#searchText').val('');
		});

		//搜索页面数据点击返回上一层
		$('#farmWrap').on('click','.search-list-item ul li',function(){
			var content = $(this).text();
			$('#farmNames').text(content);
			$('#farmNames').removeClass('curr');
			$('.wrap').hide();
			$('#mainWrap').show();	
		});
		//搜索页面返回
		$('#farmWrap').on('click','.farm-back-btn',function(){
			$('.wrap').hide();
			$('#mainWrap').show();			
		});
		//新建养殖场页面显示
		$('#farmWrap').on('click','.farm-add-btn',function(){
			$('#addfarmWrap #addfarmSection input').val('');
			 // 新建养殖场页面需要返回省份，城市和销售人员列表接口
			var sales = global_path + 'index.php/animalcurl/analysis_getFarmParams';
         		var salesparams = {
				'device_id':"deviceId",
				'app_name':"appName"
		 	}
         	commonAjax(sales,salesparams).then(function(data){
					if(data.status == '2000' && data.data){
						var data = JSON.parse(data.data);
					   //把数据放入模版
					   //省份页面
						var provinces = animalcurl_apply_city_tpl.fetch(data);
						$('#whereCity #provinceList').html(provinces);
						//自定义下标
					 	for(var n=0;n<data.provinces.length;n++){
					 		data.provinces[n].index = n; 
					 	}
						var mainReq = animalcurl_apply_city_tpl.fetch(data);
						//存储带下标的数据
						RP.store.setItem('animalcurl_newfarm_info',data);
						$('#whereCity #provinceList').html(mainReq);
						$('#salesWrap #salesList').html(mainReq);
						//销售数据
						var provincesc = animalcurl_apply_sallist_tpl.fetch(data);
						$('#salesWrap #salesList').html(provincesc);
					}
				});
		    $('.wrap').hide();
			$('#addfarmWrap').show();	
		});
		//新建养殖场确定按钮
        $('#addfarmWrap').on('click','#hzz-incity',function(){
			$('.wrap').hide();
			$('#whereCity').show();
         });
		//城市选择页面
		$('#whereCity').on('click','#provinceList ul li',function(){
			 var farmInfo = RP.store.getItem('animalcurl_newfarm_info');
			 console.log(farmInfo);
			 //对应的省市下标
			 var cityno = $(this).attr("city-no");
			 //获取对应的省市
			 var cityname = $(this).attr("city-name");
			 //存储对应的省市
			 RP.store.setItem('cityname',cityname);
			 var cityList = farmInfo.provinces[cityno].c;
			 var html='';
			 for(var i=0;i<cityList.length;i++){
			 	html+='<li area-name="'+cityList[i].n+'"><div><div class="left conli-left"><span style="background:none">'+cityList[i].n+'</span></div><div class="clearf"></div></div></li>';
			 }
			 console.log(html);
			 $('.wrap').hide();
			$('#whereCityx').show();
			 $('#cityList ul').append(html);
			 console.log($(this).attr("city-no"));
		})
		//销售页面
		$('#hzz-sales').on('click',function(){
			$('.wrap').hide();
			$('#salesWrap').show();
		})
		//获取城市列表数据并填到新建养殖厂页面
		$('#whereCityx').on('click','#cityList ul li',function(){
			var areaname = $(this).attr("area-name");
			var Province = RP.store.getItem('cityname');
			$('#newProvince').val(Province);
			$('#newCity').val(areaname);
			$('#addfarmWrap #hzz-incity').val(Province  +" "+ areaname );
			var html = '';
			$('#cityList ul').html(html);
			$('.wrap').hide();
			$('#addfarmWrap').show();
		});
		//获取销售列表数据并填到新建养殖厂页面
		$('#salesWrap').on('click','#salesList ul li',function(){
			var realName = $(this).attr("realName");
			var id = $(this).attr("sales-id");
			var userPhone = $(this).attr("userPhone");
			//销售人员
			$('#addfarmWrap #hzz-sales').val(realName);
			//销售电话
			$('#addfarmWrap #newSalePhone').val(userPhone);
			//id
			$('#addfarmWrap #newSaleId').val(id);
			$('.wrap').hide();
			$('#addfarmWrap').show();
		});
		//销售返回按钮
		$('#salesWrap').on('click','.farm-back-btn',function(){
			$('.wrap').hide();
			$('#addfarmWrap').show();	
		});
		//城市页面返回
		$('#whereCity').on('click','.farm-back-btn',function(){
			$('.wrap').hide();
			$('#addfarmWrap').show();
		});
		//城市二级页面返回
		$('#whereCityx').on('click','.farm-back-btn',function(){
			var html = '';
			$('#cityList ul').html(html);
			$('.wrap').hide();
			$('#addfarmWrap').show();	
		});
		//新建养殖场返回按钮
		$('#addfarmWrap').on('click','.farm-back-btn',function(){
			$('.wrap').hide();
			$('#farmWrap').show();	
		});
		//新建养殖场确定按钮
		$('#addfarmWrap').on('click','.addfarm-btn',function(){
			var farmName = $('#newFarmName').val(),
				contactPerson = $('#newContact').val() ,
			    contactPhone = $('#newContactPhone').val(),
			    emailNo = $('#newEmail').val(),
			    province = $('#newProvince').val(),
			    city = $('#newCity').val(),
			    address = $('#newFarmAddress').val(),
			    sales = $('#newSalePhone').val(),
			    salesId = $('#newSaleId').val();
			var flag = true;
			if(!farmName){
					errTips = "请填写养殖场名称"
					flag = false;
				}else if(!contactPerson){
					errTips = "请填写养殖场联系人"
					flag = false;
				}else if(!contactPhone){
					errTips = "请填写联系方式"
					flag = false;
				}else if(!province || !city){
					errTips = "请选择所在省市"
					flag = false;
				}else if(!address){
					errTips = "请填写养殖场地址"
					flag = false;
				}else if(!sales || !salesId){
					errTips = "请选择销售"
					flag = false;
				}else{
					flag = true;
				}
			if(!flag){
				d_alert.setTitle(errTips);
				d_alert.show();
				return flag;
			}
			var params = {
				'device_id':'deviceId',
				'app_name':'appName',
			     'farmName':farmName,
			     'contactPerson':contactPerson,
			     'contactPhone':contactPhone,
			     'emailNo':emailNo,
			     'province':province,
			     'city':city,
			     'address':address,
			     'sales':sales,
			     'salesId':salesId
			}
			var url = global_path + 'index.php/animalcurl/analysis_saveFarm';
			commonAjax(url,params).then(function(data){
				if(data.status == "2000"){
					$('#mainWrap #farmNames').text(farmName);
					$('#mainWrap #farmNames').removeClass('curr');
					$('.wrap').hide();
					$('#mainWrap').show();
				}else{
					d_alert.setTitle('保存失败，请重新提交');
					d_alert.show();
					return false;
				}
			}).fail(function(e){
				errorPageShow($("#addfarmWrap")[0],'system',2);
			})
		});
	})();
	//判断进程条
	function changeProgessBar(className,operation){
		if(operation == "next"){
			$('.apply-box .' + className).addClass('curr');
			$('.apply-box .' + className).prev().find('.cirle-line').removeClass('curr');
			$('.apply-box .' + className).find('.cirle-line').addClass('curr');			
		}else{
			$('.apply-box .' + className).removeClass('curr');
			$('.apply-box .' + className).prev().find('.cirle-line').addClass('curr');
			$('.apply-box .' + className).find('.cirle-line').removeClass('curr');	
		}
	}
	//根据检测大类请求检测项目的接口
	function samplingSystem(animalType,typeName,el,s_index){
		var sam_indexs=RP.store.getItem('sampling_index');
		var sam_details=RP.store.getItem('sampling_details');
		var item_index=sam_indexs.indexOf(typeName);
		if(item_index > -1){
			rendarSample(s_index,el,JSON.parse(sam_details[item_index]));
				$('#mainWrap').hide();
				$('.sampling_detail').siblings('div').hide();
				$('.sampling_detail').show();
				$('#choiceWrap').show();
			    return ;
		}
		var url = global_path + 'index.php/animalcurl/analysis_getTestType';
		var params = {
			'animalType':animalType,
			'typeName':typeName
		}
		commonAjax(url,params).then(function(data){
			// console.log(data);
			if(data.status == '2000'){
				// console.log(data.data);
				var source=data.data;
				sam_indexs.push(typeName);
				sam_details.push(JSON.stringify(source));
				RP.store.setItem('sampling_index',sam_indexs);
				RP.store.setItem('sampling_details',sam_details);
				rendarSample(s_index,el,source);
				$('#mainWrap').hide();
				$('.sampling_detail').siblings('div').hide();
				$('.sampling_detail').show();
				$('#choiceWrap').show();
			}else{
				errorPageShow($("#mainWrap")[0],'system',2);
			}
		}).fail(function(e){
			errorPageShow($("#mainWrap")[0],'system',2);
		})
	}
	//检测大类渲染函数
	function rendarSample(s_index,el,source){
				var html="";
				for(var i=0;i<source.length;i++){
					html+="<li item-type='"+i+"' s_index='"+s_index+"' item-price='"+source[i].price+"'>"+source[i].detailName+"</li>";
				}
				$(el).find('ul').html(html);
				var className=$(el).attr('class');
				if(!$('div[sample-index='+s_index+']').find('div[ids="'+className+'"]').hasClass('curr')){
					$('div[sample-index='+s_index+']').find('div[ids="'+className+'"]').addClass('curr');
					$('div[sample-index='+s_index+']').find('div[ids="'+className+'"]').text('请选择（可多选)');
				}
				if(!$('div[sample-index='+s_index+']').find('div[ids="birds_type_names"]').hasClass('curr')){
					$('div[sample-index='+s_index+']').find('div[ids="birds_type_names"]').addClass('curr');
					$('div[sample-index='+s_index+']').find('div[ids="birds_type_names"]').text('请选择（可多选)');
				}
	}
	//检测项目及样品(根据检测项目填充不同内容)
	function addItemstoTypes(string_array,s_index){
		var sam_indexs=RP.store.getItem('sampling_index');
		var sam_details=RP.store.getItem('sampling_details');
		var sampling_type=$('div[sample-index='+s_index+']').find('div[ids="birds_sampling"]').text();
		console.log(sampling_type);
		var items=sam_details[sam_indexs.indexOf(sampling_type)];
		items=JSON.parse(items);
		console.log(items);
		var nums=string_array.split(';');
		if(items && items!={}){
			var list=[];
			for(var i=0;i<nums.length;i++){
				for(var j=0;j<items.length;j++){
					if(items[j].detailName==nums[i]){
						for(var k=0;k<items[j].samplingTypeNames.length;k++){
							if(list.indexOf(items[j].samplingTypeNames[k]) == -1){
								list.push(items[j].samplingTypeNames[k]);
							}
						}
					}
				}
			}
			if(list.length>0){
				var html="";
				for(var ii=0;ii<list.length;ii++){
					html+="<li type-name='"+list[ii]+"' s_index='"+s_index+"'>"+list[ii]+"</li>";
				}
				$('.birds_type_names').find('ul').html(html);
				if(!$('div[ids="birds_type_names"]').hasClass('curr')){
					$('div[ids="birds_type_names"]').addClass('curr');
					$('div[ids="birds_type_names"]').text('请选择（可多选)');
				}
			}
		}

	}
	//添加检测样品
	function addNewSample(){
		var data=RP.store.getItem('resource_item');
		data.index = $('#section3 .animal-apply-con .con-sample').length + 1;
		var result_html=sampling_itmes_tpl.fetch(data);
		$('#section3').find('.animal-apply-con').append(result_html);
		RP.store.setItem('resource_item',JSON.stringify(data));
		if(data.index > 1){
			$('#section3 .animal-apply-con .con-sample .title-del').show();
		}
	}
	//添加猪血清调查样品
	function addNewPigSample(){
		var pig_data=RP.store.getItem('resource_item');
		pig_data.index = $('#section4 .animal-apply-con .con-sample').length + 1;
		console.log(pig_data);
		var result_html=animalcurl_beasts_pig_tpl.fetch(pig_data);
		$('#section4').find('.animal-apply-con').append(result_html);
		RP.store.setItem('resource_item',JSON.stringify(pig_data));
		if(pig_data.index > 1){
			$('#section4 .animal-apply-con .con-sample .title-del').show();
		}
	}
	//获取当前送检类型
	function getSampleType(){
		return window.location.pathname.indexOf('birds')>-1 ? 'birds':'beasts';
		console.log(window.location.pathname.indexOf('birds'));
	}
	//判断当前步骤数据是否完整
	function checkContent(s_type,s_step){
		console.log(s_type,s_step);
		var errTips = "";
		var flag = true;
		if(s_type=="birds"){
			switch(s_step)
			{
				case 'section1':
						var phoneNo=$('#phoneNo').val(),
							farmName=$('#farmName').val(),
							drugTesting=$('#drugTesting').find('.curr').text();
							if(!phoneNo){
								errTips = "请填写手机号"
								flag = false;
							}else if(!validator['check_phone'](phoneNo)){
								flag = false;
							}else if($('#farmNames').hasClass('curr')){
								errTips = "请选择养殖场名称"
								flag = false;
							}else{
								post_params['phoneNo'] = phoneNo;
    							post_params['farmName'] = $('#farmNames').text();
    							post_params['drugTesting'] = drugTesting;
							}
							
						break;
				case 'section2':
						var poultryTotalCount = $('#poultryTotalCount').val(),
							poultrySingleCount = $('#poultrySingleCount').val(),
							poultryMonthCount = $('#poultryMonthCount').val();
							if(!poultryTotalCount){
								errTips = "请填写全场养殖量"
								flag = false;
							}else if(!poultrySingleCount){
								errTips = "请填写单舍养殖量"
								flag = false;
							}else if(!poultryMonthCount){
								errTips = "请填写公司养殖量"
								flag = false;
							}else if($('#birds_breeding').hasClass('curr')){
								errTips = "请选择饲养品种"
								flag = false;
							}else if($('#poultry_generations').hasClass('curr')){
								errTips = "请选择送检代次"
								flag = false;
							}else{
								var breedingArray = $('#birds_breeding').text().split(';');
								post_params['poultryTotalCount'] = poultryTotalCount;
    							post_params['poultrySingleCount'] = poultrySingleCount;
    							post_params['poultryMonthCount'] = poultryMonthCount;
    							post_params['poultryBreeds'] = breedingArray;
    							post_params['poultryGenerations'] = $('#poultry_generations').text();
							}
						break;
				case 'section3':
						var sendSamplingCount = $("[ids='sendSamplingCount']");
						sendSamplingCount.each(function(index){
							if(!$(this).val()){
								errTips = "请填写样品数量"
								flag = false;
							}
						});
						//栋舍／场名改为非必填
						var farmName = $("[ids='farmName']");
						// farmName.each(function(index){
						// 	if(!$(this).val()){
						// 		errTips = "请填写栋舍/场名"
						// 		flag = false;
						// 	}
						// });
						var birds_type_names = $("[ids='birds_type_names']");
						birds_type_names.each(function(index){
							if($(this).hasClass('curr')){
								errTips = "请选择检测部位或样品"
								flag = false;
							}
						});
						var sampling_detail = $("[ids='sampling_detail']");
						sampling_detail.each(function(index){
							if($(this).hasClass('curr')){
								errTips = "请选择检测项目"
								flag = false;
							}
						});
						var birds_sampling = $("[ids='birds_sampling']");
						birds_sampling.each(function(index){
							if($(this).hasClass('curr')){
								errTips = "请选择检测大类"
								flag = false;
							}
						});
						if(flag){
							var testingSamplingList = [];
							var sendAge = $("[ids='sendAge']");
							var morbidityAge = $("[ids='morbidityAge']");
							for(i=0;i<sendAge.length;i++){
								var tmp = {};
								tmp.samplingSystemNo = $(birds_sampling[i]).text();
								tmp.testTypeName = $(sampling_detail[i]).text().split(';');
								tmp.testTypeDetailNames = $(birds_type_names[i]).text().split(';');
								tmp.farmName = $(farmName[i]).val();
								tmp.sendAge = $(sendAge[i]).val();
								tmp.morbidityAge = $(morbidityAge[i]).val();
								tmp.sendSamplingCount = $(sendSamplingCount[i]).val();
								testingSamplingList.push(tmp);
							}
							post_params['testingSamplingList'] = testingSamplingList;
						}
						break;
				case 'section4':
						var morbidity = $('#morbidity').val();
						var mortality = $('#mortality').val();
						var vaccineName = $('#vaccineName').val();
						var immuneProcedure = $('#immuneProcedure').val();
						var preliminaryDiagnosis = $('#preliminaryDiagnosis').val();
						if(!morbidity){
							errTips = "请填写发病率"
							flag = false;
						}else if(!new RegExp(/^(100|[1-9]\d|\d)$/).test(morbidity)){
							errTips = "请输入正确的发病率"
							flag = false;
						}else if(!mortality){
							errTips = "请填写死亡率"
							flag = false;
						}else if(!new RegExp(/^(100|[1-9]\d|\d)$/).test(mortality)){
							errTips = "请输入正确的死亡率"
							flag = false;
						}else if(!vaccineName){
							errTips = "请填写免疫信息-疫苗名称及厂家"
							flag = false;
						}else if(!immuneProcedure){
							errTips = "请填写免疫信息-免疫程序描述"
							flag = false;
						}else if(!preliminaryDiagnosis){
							errTips = "请填写初步诊断"
							flag = false;
						}else{
							post_params['morbidity'] = morbidity;
    						post_params['mortality'] = mortality;
    						post_params['clinicalSymptoms'] = $('#clinicalSymptoms').val();
    						post_params['vaccineName'] = vaccineName;
    						post_params['immuneProcedure'] = immuneProcedure;
    						post_params['dosageSchedule'] = $("#dosageSchedule").val();
    						post_params['disinfectingPlan'] = $("#disinfectingPlan").val();
    						post_params['dissectingLesion'] = $("#dissectingLesion").val();
    						post_params['preliminaryDiagnosis'] = preliminaryDiagnosis;
    						post_params['derattingPlan'] = $("#derattingPlan").val();

						}
						break;
				case 'section5':
						if($('#consultant_phone').hasClass('curr')){
							errTips = "请选择健康咨询顾问"
							flag = false;
						}else if($('#sales_phone').hasClass('curr')){
							errTips = "请选择销售审批人"
							flag = false;
						}else{
							post_params['consultantPhoneNo'] = $('#consultant_phone').attr('phone-no');
							post_params['salesPhoneNo'] = $('#sales_phone').attr('phone-no');
							console.log(post_params['consultantPhoneNo']);
							console.log(post_params['salesPhoneNo']);
						}
						break;
			}
		}else{
			switch(s_step)
			{
				case 'section1':
						var phoneNo=$('#phoneNo').val(),
							farmName=$('#farmName').val(),
							drugTesting=$('#drugTesting').find('.curr').text();
						if(!phoneNo){
							errTips = "请填写手机号"
							flag = false;
						}else if(!validator['check_phone'](phoneNo)){
							flag = false;
						}else if($('#farmNames').hasClass('curr')){
							errTips = "请选择养殖场名称"
							flag = false;
						}else{
							post_params['phoneNo'] = phoneNo;
    						post_params['farmName'] = $('#farmNames').text();
    						post_params['drugTesting'] = drugTesting;
						}
						break;
				case 'section2':
						var livestockTotalCount = $('#livestockTotalCount').val(),
							livestockYearCount = $('#livestockYearCount').val(),
							poultryMonthCount = $('#poultryMonthCount').val();
						if(!livestockTotalCount){
							errTips = "请填写母猪存栏数"
							flag = false;
						}else if(!livestockYearCount){
							errTips = "请填写年出栏肥猪数"
							flag = false;
						}else if($('#beasts_breeding').hasClass('curr')){
							errTips = "请选择饲养品种"
							flag = false;
						}else if($('#pigs_category').hasClass('curr')){
							errTips = "请选择送检猪类别"
							flag = false;
						}else{
							post_params['livestockTotalCount'] = livestockTotalCount;
    						post_params['livestockYearCount'] = livestockYearCount;
    						post_params['livestockGenders'] = $('#pigs_category').text().split(';');
    						post_params['livestockBreeds'] = $('#beasts_breeding').text().split(';');
    						// post_params['livestockParity'] = $('#livestockParity').val();
						}
						break;
				case 'section3':
						var sendSamplingCount = $("[ids='sendSamplingCount']");
						sendSamplingCount.each(function(index){
							if(!$(this).val()){
								errTips = "请填写样品数量"
								flag = false;
							}
						});
						//栋舍／场名改为非必填
						var farmName = $("[ids='farmName']");
						// farmName.each(function(index){
						// 	if(!$(this).val()){
						// 		errTips = "请填写栋舍/场名"
						// 		flag = false;
						// 	}
						// });
						var birds_type_names = $("[ids='birds_type_names']");
						birds_type_names.each(function(index){
							if($(this).hasClass('curr')){
								errTips = "请选择检测部位或样品"
								flag = false;
							}
						});
						var sampling_detail = $("[ids='sampling_detail']");
						sampling_detail.each(function(index){
							if($(this).hasClass('curr')){
								errTips = "请选择检测项目"
								flag = false;
							}
						});
						var birds_sampling = $("[ids='birds_sampling']");
						birds_sampling.each(function(index){
							if($(this).hasClass('curr')){
								errTips = "请选择检测大类"
								flag = false;
							}
						});
						if(flag){
							var testingSamplingList = [];
							var sendAge = $("[ids='sendAge']");
							var morbidityAge = $("[ids='morbidityAge']");
							for(i=0;i<sendAge.length;i++){
								var tmp = {};
								tmp.samplingSystemNo = $(birds_sampling[i]).text();
								tmp.testTypeName = $(sampling_detail[i]).text().split(';');
								tmp.testTypeDetailNames = $(birds_type_names[i]).text().split(';');
								tmp.farmName = $(farmName[i]).val();
								tmp.sendAge = $(sendAge[i]).val();
								tmp.morbidityAge = $(morbidityAge[i]).val();
								tmp.sendSamplingCount = $(sendSamplingCount[i]).val();
								testingSamplingList.push(tmp);
							}
							post_params['testingSamplingList'] = testingSamplingList;
						}
						break;
				case 'section4':
						var othersymptom = $("[ids='othersymptom']");
						othersymptom.each(function(index){
							if(!$(this).val()){
								errTips = "请填写其他症状"
								flag = false;
							}
						});
						// var vaccine = $("[ids='vaccine']");
						// vaccine.each(function(index){
						// 	if(!$(this).val()){
						// 		errTips = "请填写疫苗及用药"
						// 		flag = false;
						// 	}
						// });
						var pigStage = $("[ids='pigStage']");
						pigStage.each(function(index){
							if($(this).hasClass('curr')){
								errTips = "请选择猪阶段"
								flag = false;
							}
						});
						var beasts_no = $("[ids='no']");
						beasts_no.each(function(index){
							if(!$(this).val()){
								errTips = "请填写编号"
								flag = false;
							}
						});
						if(flag){
							var pigSerumRecordList = [];
							var earNo = $("[ids='earNo']");
							// var vaccine = $("[ids='vaccine']");
							var stillbirth = $("[ids='stillbirth']").find('.curr');
							var abortion = $("[ids='abortion']").find('.curr');
							var mummy = $("[ids='mummy']").find('.curr');
							var nonpregnant = $("[ids='nonpregnant']").find('.curr');
							var highfever = $("[ids='highfever']").find('.curr');
							var respiratoryDisease = $("[ids='respiratoryDisease']").find('.curr');
							var nervous = $("[ids='nervous']").find('.curr');
							var mechanical = $("[ids='mechanical']").find('.curr');
							for(i=0;i<beasts_no.length;i++){
								var tmp = {};
								tmp.no = $(beasts_no[i]).val();
								tmp.earNo = $(earNo[i]).val();
								tmp.pigStage = $(pigStage[i]).text();
								// tmp.vaccine = $(vaccine[i]).val();
								tmp.stillbirth = $(stillbirth[i]).text();
								tmp.abortion = $(abortion[i]).text();
								tmp.mummy = $(mummy[i]).text();
								tmp.nonpregnant = $(nonpregnant[i]).text();
								tmp.highfever = $(highfever[i]).text();
								tmp.respiratoryDisease = $(respiratoryDisease[i]).text();
								tmp.nervous = $(nervous[i]).text();
								tmp.mechanical = $(mechanical[i]).text();
								tmp.othersymptom = $(othersymptom[i]).val();
								pigSerumRecordList.push(tmp);
							}
							post_params['pigSerumRecordList'] = pigSerumRecordList;
						}

						break;
				case 'section5':
						var morbidity = $('#morbidity').val();
						var mortality = $('#mortality').val();
						var vaccineName = $('#vaccineName').val();
						var immuneProcedure = $('#immuneProcedure').val();
						var preliminaryDiagnosis = $('#preliminaryDiagnosis').val();
						if(!morbidity){
							errTips = "请填写发病率"
							flag = false;
						}else if(!new RegExp(/^(100|[1-9]\d|\d)$/).test(morbidity)){
							errTips = "请输入正确的发病率"
							flag = false;
						}else if(!mortality){
							errTips = "请填写死亡率"
							flag = false;
						}else if(!new RegExp(/^(100|[1-9]\d|\d)$/).test(mortality)){
							errTips = "请输入正确的死亡率"
							flag = false;
						}else if(!vaccineName){
							errTips = "请填写免疫信息-疫苗名称及厂家"
							flag = false;
						}else if(!immuneProcedure){
							errTips = "请填写免疫信息-免疫程序描述"
							flag = false;
						}else if(!preliminaryDiagnosis){
							errTips = "请填写初步诊断"
							flag = false;
						}else{
							post_params['morbidity'] = morbidity;
    						post_params['mortality'] = mortality;
    						// post_params['clinicalSymptoms'] = $('#clinicalSymptoms').val();
    						post_params['vaccineName'] = vaccineName;
    						post_params['immuneProcedure'] = immuneProcedure;
    						post_params['dosageSchedule'] = $("#dosageSchedule").val();
    						post_params['disinfectingPlan'] = $("#disinfectingPlan").val();
    						post_params['dissectingLesion'] = $("#dissectingLesion").val();
    						post_params['preliminaryDiagnosis'] = preliminaryDiagnosis;
    						post_params['derattingPlan'] = $("#derattingPlan").val();

						}
						break;
				case 'section6':
						if($('#consultant_phone').hasClass('curr')){
							errTips = "请选择健康咨询顾问"
							flag = false;
						}else if($('#consultant_phone').hasClass('curr')){
							errTips = "请选择销售审批人"
							flag = false;
						}else{
							post_params['consultantPhoneNo'] = $('#consultant_phone').attr('phone-no');
							post_params['salesPhoneNo'] = $('#sales_phone').attr('phone-no');
							console.log(post_params['consultantPhoneNo']);
							console.log(post_params['salesPhoneNo']);
						}
						break;
			}
		}
		if(!flag){
			d_alert.setTitle(errTips);
			d_alert.show();
			return flag;
		}
		return flag;
	}
	function getSales(thisSubSection){
		var url = global_path + 'index.php/animalcurl/analysis_getSales' ;
		var get_params = {};
		get_params['device_id'] = 'deviceid';
    	get_params['app_name'] = 'appname';
		get_params['phoneNo'] = post_params['phoneNo'];
		get_params['farmName'] = post_params['farmName'];
		commonAjax(url,get_params).then(function(data){
			if(data.status="2000" && data.data){
				if(data.data.consultantPhoneNo[0] && data.data.salesPhoneNo[0]){
					var res = animalcurl_apply_sales_tpl.fetch(data.data);
					$('#mainWrap').append(res);	
					thisSubSection.hide();
					changeProgessBar(thisSubSection.next().attr('id'),'next');
					thisSubSection.next().show();
			
				}else{
					var confirm_cancel = function(){
						RP.store.removeItem('sampling_index');
						RP.store.removeItem('sampling_details');
						RP.store.removeItem('resource_item');
						RP.store.removeItem('treatment_data');
						window.location.href = "./index.php";
					}
					d_alert.setTitle('你没有审批人信息，请联系部门主管');
					// d_alert.ok_fn = confirm_cancel ;
					d_alert.show();
				}

			}else if(data.status = "5001"){
				d_alert.setTitle(data.message);
				d_alert.show();
			}else if(data.status = "4001"){
				d_alert.setTitle('请求失败，请重新填写')
				d_alert.show();
			}else{
				errorPageShow($("#mainWrap")[0],'system',2);
			}	
		}).fail(function(e){
			errorPageShow($("#mainWrap")[0],'system',2);
		});
	}
	function getLoadHtml(){
	    var ret = '  <!--加载模块-->'+
	              '  <div class="loading-con RP_LOADING">'+
	              '    <table class="loading-tb">'+
	              '      <tbody>'+
	              '        <tr>'+
	              '          <td>'+
	              '            <img src="../../public/images/loading.gif">'+
	              '          </td>'+
	              '        </tr>'+
	              '      </tbody>'+
	              '    </table>'+
	              '  </div>' ;
	    return ret ;
	}
	function submitTreatment(){
		var url = global_path + 'index.php/animalcurl/analysis_submitAnalysis' ;
		post_params['device_id'] = 'deviceid';
    	post_params['app_name'] = 'appname';
    	if(sample_type=='birds'){
			post_params['animalType'] = '家禽';
    	}else{
			post_params['animalType'] = '家畜';
    	}
		$('.wrap').append(getLoadHtml());
		commonAjax(url,post_params).then(function(data){
			if(data.status="2000" && data.data){
				$('.RP_LOADING').remove();
				RP.store.removeItem('sampling_index');
				RP.store.removeItem('sampling_details');
				RP.store.removeItem('resource_item');
				RP.store.removeItem('treatment_data');
				RP.store.setItem('animalcurl_success_info',data.data);
				console.log(data.data);
				window.location.href = "./animalcurl_apply_success.php?sheetNo="+data.data.sheetNo;
			}else if(data.status = "5001"){
				$('.RP_LOADING').remove();
				d_alert.setTitle(data.message);
				d_alert.show();
			}else if(data.status = "4001"){
				$('.RP_LOADING').remove();
				d_alert.setTitle('提交失败，请重新填写')
				d_alert.show();
			}else{
				$('.RP_LOADING').remove();
				errorPageShow($("#mainWrap")[0],'system',2);
			}
		}).fail(function(e){
			$('.RP_LOADING').remove();
			errorPageShow($("#mainWrap")[0],'system',2);
		});
	}

});