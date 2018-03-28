 $(function(){
 	   var  perform = false;
	   var user_code = getQueryString('user_code');
	   var user_channel = getQueryString('user_channel');
	   var package_name = getQueryString('package_name');
	   //（package_name）ios端判断是养殖户端和兽医端
	   if(package_name=="com.ringpu.BTAnimalManager"){
	    	    user_channel="1002";
	    }
	   // getQueryString('user_channel');
	   //若user_code不存在，就获取之前的版本的code；
		var pre_user_code = getQueryString('code');
		if(user_code==null && pre_user_code==null){
 			$(".mask").show();
			$(".rp-tc").show();
			$(".hzz-sgin-right").on('click',function(){
				window.location.href = "appfunction://back";
			})
		}else if(pre_user_code!==null){
			user_code = pre_user_code;
			perform = true;
		}else if(user_code!==null){
			perform = true;
		}
		console.log(perform);
		var app_key = getQueryString('app_code');
		   getLoadHtml();
		 	var number = 0;
		 	var awardId;
			//－－－－－－－－－签到页信息接口
			var signininformation = global_path + 'index.php/activitycenter/signininformation';
			//--------------每日签到
			var Dailycheck = global_path + 'index.php/activitycenter/Dailycheck';
			//--------------领取奖品
			var Ledtotheprize = global_path + 'index.php/activitycenter/Ledtotheprize';
			//－－－－－－－－－签到页信息接口传参	
			var showp = {
				"user_code":user_code,
				"user_channel":user_channel
			}
			//-----------每日签到参数
			var daycheckp = {
				"user_code":user_code,
				"user_channel":user_channel,
				"scoreType":"1"
			}
		//签到月份
		 $(".sia-topp span").html(showmonth());
    //签到页面渲染
    if(perform){
    	     mainprogram();
    }
    	//业务逻辑
    (function(){
    		//-------点击签到
	     $(".sia-topbtn").on('click',function(){
		       	 //$(this).siblings('.sia-topu li').unbind('click');
			           //--------签到请求
			         commonAjax(Dailycheck,daycheckp,function(data){
   	                        if(data.status=="2000" && data.data){
   	                        	     console.log(data);
   	                        		$(".sn-popupw p").html(data.data.summary);
   	                        		$(".sn-popupw").show();
   	                        		mainprogram();
   	                        }
                        })
		  })
		 //---------- 规则
       	$(".rules_bottom").on('click',function(){
           		$(".wrap2").show();
           })
        $(".sign-suer").on('click',function(){
           	    $(".wrap2").hide();
           })
        //------点击回到app首页
        $(".back-btn").on('click',function(){
           		window.location.href = "appfunction://backhome";
         })
    })()
	 //------渲染页面的函数
    function mainprogram(){
    	   	commonAjax(signininformation,showp,function(data){
		 if(data.status == "2000" && data.data){
		 	console.log(data);
		 	switchbg(data);
		 	//签到状态
		 	var isSign = data.data.isSign;
		    //连续签到第一天的日期2017-01-01
		 	var fistDate  = data.data.fistDate;
		 	//连续签到的天数
		 	var continuous = data.data.signDay;
		 	//2017-01
		 	var year = Number(fistDate.substring(-1,4));
		 	var month = Number(fistDate.substring(5,7));
		 	//-------获取fistDate所在月天数
	       var whydatek = whydate(year,month);
	       //连续签到第一天
		    fistDate = Number(fistDate.substring(8,10))-1;
		 	$(".sia-topu2 li div").html(fistDate);
		 	$(".sia-topbtn span").html(continuous);
		 	//是否签到
		 	if(isSign==1){
		 		$(".sia-topbtn b").html("已签到");
		 	}
		  //判断连续签到是否超过7天根据连续签到天数渲染签到日期
		 	if(continuous>7){
		 		console.log(continuous);
		 		$(".sia-topu li p span").html("+5");
		 		    $(".sia-topu li").eq(6).removeClass("sia-topue");
			 	   if(continuous>28&&continuous<36){
			 	   	 continuous =  parseInt(continuous % 7);
			 			for(var i=0;i<continuous;i++){  
				 			  $(".sia-topu li").eq(continuous).find("p").show();
					 		  $(".sia-topu li").eq(i).find("p").hide();
						      $(".sia-topu li").eq(i).find("div").addClass("correct"); 
						      $(".sia-topu li").eq(i).css({"background":"#FF872B"});
						     if(continuous>6||continuous==7){
				   	              $(".sia-topu").css({"background":"#FF872B"});
				             }
						     if(continuous>=2){
						      $(".sia-topu li").eq(1).addClass("sia-topuey");
						     }
					   }
					      $(".sia-topu li").eq(1).find("div").removeClass("correct"); 
					      $(".sia-topu li").eq(1).addClass("sia-topue"); 
			 		}else if(continuous>14&&continuous<22){
			 			  continuous =  parseInt(continuous % 7);
			 			for(var i=0;i<continuous;i++){  
				 			  $(".sia-topu li").eq(continuous).find("p").show();
					 		  $(".sia-topu li").eq(i).find("p").hide();
						      $(".sia-topu li").eq(i).find("div").addClass("correct"); 
						      $(".sia-topu li").eq(i).css({"background":"#FF872B"});
						     if(continuous>6||continuous==7){
				   	              $(".sia-topu").css({"background":"#FF872B"});
				             }
						     if(continuous>=1){
						      $(".sia-topu li").eq(0).addClass("sia-topuey");
						     }
					   }
						  $(".sia-topu li").eq(0).find("div").removeClass("correct"); 
						  $(".sia-topu li").eq(0).addClass("sia-topue"); 
						  
			 	}else{
			 		continuous =  parseInt(continuous % 7);
			 			for(var i=0;i<continuous;i++){  
				 			  $(".sia-topu li").eq(continuous).find("p").show();
					 		  $(".sia-topu li").eq(i).find("p").hide();
						      $(".sia-topu li").eq(i).find("div").addClass("correct"); 
						      $(".sia-topu li").eq(i).css({"background":"#FF872B"});
						     if(continuous>6||continuous==7){
				   	              $(".sia-topu").css({"background":"#FF872B"});
				             }
					   }
			 		$(".sia-topu li").removeClass("sia-topue");
			 	}
		 	}else{
		 		for(var i=0;i<continuous;i++){ 
		 		  $(".sia-topu li").eq(continuous).find("p").show();
			      $(".sia-topu li").eq(i).find("p").hide();
			      $(".sia-topu li").eq(i).find("div").addClass("correct");
			      $(".sia-topu li").eq(i).css({"background":"#FF872B"});
			      if(continuous>6||continuous==7){
			        $(".sia-topu li").eq(6).find("div").removeClass("correct");
			        $(".sia-topu li").eq(6).addClass("sia-topuey");
			   	    $(".sia-topu").css({"background":"#FF872B"});
			    }
		      }
		 	}
		 	//根据fistDate连续排7天
		 	for(var i=0;i<7;i++){
		 		console.log(fistDate);
			     if(fistDate>whydatek-1){
			     	fistDate=1;
			     }else{
			     	fistDate++;
			      if(fistDate>9){
		 			 fistDate = fistDate ;
		 		   }else{
		 			 fistDate = "0" + fistDate; 
		 		   }
			     }
			     $(".sia-topu2 li").eq(i).find("div").html(fistDate);
		     }
		 }else{
		 	errorPageShow($('#wrap1')[0],'nodata') ;
		 }
	     }).fail(function(e){ 
		   errorPageShow($('#wrap1')[0],'system') ;
	   });
	 }
 //--------当前月份
      function showmonth(){
          var mydate = new Date();
          //var str = "" + mydate.getFullYear() + "年";
          var  str = (mydate.getMonth()+1) + "月份";
          //str + = mydate.getDate() + "日";
          return str;
       }
       function showdate(){
          var mydate = new Date();
          // var str = mydate.getFullYear();
          //str = (mydate.getMonth()+1) + "月份";
          var str = mydate.getDate();
          return str;
       }
       //console.log(showdate());
        //  本月有多少天
       function whydate(year,month){
        //构造一个日期对象：
         var  day = new Date(year,month,0); 
        //获取天数：
         var daycount = day.getDate();
          return daycount;
       }
    //------领取礼物逻辑
     function switchbg(data){	
     	 //------前七天
     	   	  if(data.data.awardlist[0].days==7&&data.data.awardlist[0].status==0){
			      	    $(".hzz-task1").css({"background":"url(img/gettask7.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      	       $(".hzz-task1").off('click');
			      	       $(".hzz-task1").on('click',function(){
		      	                $(".sn-popupw p").html(data.data.awardlist[0].tips);
		      	                $(".sn-popupw").show();
		                   })
			      	    $(".sn-popupwcf").on('click',function(){
		      	            	     window.location.href = "appfunction://backhome"; 
		      	            })
			      }else if(data.data.awardlist[0].days==7&&data.data.awardlist[0].status==1){
			      	    $(".hzz-task1").css({"background":"url(img/getgift7.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      	     $(".hzz-task1").off('click');
			      	      $(".hzz-task1").on('click',function(){
		      	               $(".sn-popupw p").html(data.data.awardlist[0].tips);
		      	               $(".sn-popupw").show();
		      	        		   awardId = data.data.awardlist[0].id;
		                  }) 
		                $(".sn-popupwcf").on('click',function(){
			      	       //var productCode = null;
			      	        popupwcf();
			      	    })
			      }else if(data.data.awardlist[0].days==7&&data.data.awardlist[0].status==2){
			      	    $(".hzz-task1").off('click');
			      	    $(".hzz-task1").css({"background":"url(img/hasgift7.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      }else if(data.data.awardlist[0].days==7&&data.data.awardlist[0].status==3){
			      	   $(".hzz-task1").off('click');
			      	    $(".hzz-task1").css({"background":"url(img/hasgift7.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      }else if(data.data.awardlist[0].days==7&&data.data.awardlist[0].status==null){
			      	 $(".hzz-task1").off('click');
			      	 $(".hzz-task1").on('click',function(){
			      	  	$(".sn-popupwf p span").html("连续7天签到");
			      	    $(".sn-popupwf").show();
			      	  })
			      }
		//--------15天
			     if(data.data.awardlist[1].days==15&&data.data.awardlist[1].status==0){
			      	    $(".hzz-task2").css({"background":"url(img/gettask15.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      	    $(".hzz-task2").off('click');
			      	    $(".hzz-task2").on('click',function(){
		      	             $(".sn-popupw p").html(data.data.awardlist[1].tips);
		      	              $(".sn-popupw").show(); 
		                 })
			      	    $(".sn-popupwcf1").on('click',function(){
		      	            	     window.location.href = "appfunction://backhome"; 
		      	            })
			      	   
			      }else if(data.data.awardlist[1].days==15&&data.data.awardlist[1].status==1){
			      	    $(".hzz-task2").css({"background":"url(img/getgift15.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      	    $(".hzz-task2").off('click');
			      	    $(".hzz-task2").on('click',function(){
		      	              $(".sn-popupw p").html(data.data.awardlist[1].tips);
		      	              $(".sn-popupw").show();
		      	              awardId = data.data.awardlist[1].id;
		                })
			      	     $(".sn-popupwcf1").on('click',function(){
			      	    //var productCode = data.data.awardlist[1].productCode;
			      	          popupwcf();
			      	    })
			      }else if(data.data.awardlist[1].days==15&&data.data.awardlist[1].status==2){
			      	   $(".hzz-task2").off('click');
			      	    $(".hzz-task2").css({"background":"url(img/hasgift15.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      }else if(data.data.awardlist[1].days==15&&data.data.awardlist[1].status==3){
			      	   $(".hzz-task2").off('click');
			      	    $(".hzz-task2").css({"background":"url(img/hasgift15.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      }else if(data.data.awardlist[1].days==15&&data.data.awardlist[1].status==null){
			      	    $(".hzz-task2").off('click');
			      	    $(".hzz-task2").on('click',function(){
			      	  	   $(".sn-popupwf p span").html("连续15天签到");
			      	       $(".sn-popupwf").show();
			      	    })
			      }
		//-------30天
			      if(data.data.awardlist[2].days==30&&data.data.awardlist[2].status==0){
			      	   $(".hzz-task3").css({"background":"url(img/gettask30.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      	   $(".hzz-task3").off('click');
			      	   $(".hzz-task3").on('click',function(){
		      	            $(".sn-popupw p").html(data.data.awardlist[2].tips);
		      	            $(".sn-popupw").show();
		      	            $(".sn-popupwcf").on('click',function(){
		      	            	     window.location.href = "appfunction://backhome";
		      	            })
		                 })
			      }else if(data.data.awardlist[2].days==30&&data.data.awardlist[2].status==1){
			      	    $(".hzz-task3").css({"background":"url(img/getgift30.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      	    $(".hzz-task3").off('click');
			      	    $(".hzz-task3").on('click',function(){
		      	              $(".sn-popupw p").html(data.data.awardlist[2].tips);
		      	              $(".sn-popupw").show();
		      	              awardId = data.data.awardlist[2].id;
		                })
			      	    $(".sn-popupwcf2").on('click',function(){
			      	       //var productCode = data.data.awardlist[2].productCode;
			      	        popupwcf();
			      	    })
			      }else if(data.data.awardlist[2].days==30&&data.data.awardlist[2].status==2){
			      		$(".hzz-task3").off('click');
			      	    $(".hzz-task3").css({"background":"url(img/hasgift30.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      }else if(data.data.awardlist[2].days==30&&data.data.awardlist[2].status==3){
			      		$(".hzz-task3").off('click');
			      	    $(".hzz-task3").css({"background":"url(img/hasgift30.png) no-repeat center","-webkit-background-size": "100%","background-size": "100%"});
			      }else if(data.data.awardlist[2].days==30&&data.data.awardlist[2].status==null){
			      		$(".hzz-task3").off('click');
			      	     $(".hzz-task3").on('click',function(){
			      	  	   $(".sn-popupwf p span").html("连续30天签到");
			      	       $(".sn-popupwf").show();
			      	     })
			      }
		 }
      $(".sn-popupwcff").on('click',function(){
     	    $(".sn-popupwf").hide();
      })
     //进入商品详情
    function popupwcf(){
      		 //------签到领奖参数
			var awardp = {
				"user_code":user_code,
				"user_channel":user_channel,
			    "awardId":awardId 
		     }
      	     //签到领奖
      	     // if(number==0){
      	     	//签到领奖接口
	             commonAjax(Ledtotheprize,awardp,function(data){
	   	             console.log(data);
	   	             mainprogram();
	             })
	          // }
     	     // number++;
     	    $(".sn-popupw").hide();
      }
  $(".sn-popupwcf").on('click',function(){
  	      $(".sn-popupw").hide();
  })
})