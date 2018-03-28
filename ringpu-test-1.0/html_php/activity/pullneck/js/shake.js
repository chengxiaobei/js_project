
	// 是否登录检测
	//参数
	//var user_code = getQueryString('code')||(RP.store.getItem('curr_user_info')?RP.store.getItem('curr_user_info').user_code:"");
	//var role_code = getQueryString('code')||(RP.store.getItem('curr_user_info')?RP.store.getItem('curr_user_info').role_code:"");
	var user_code = getQueryString('user_code');
	var pre_user_code = getQueryString('code');
	// if(!user_code){
	// user_code  = RP.store.getItem('curr_user_info').user_code;
	// }
	if(user_code==''||!user_code){
		//若user_code不存在 ，找code（兼容之前版本）
		if(pre_user_code==''|| !pre_user_code){
			window.location.href="appfunction://login";		
		}else{
			user_code = pre_user_code;
		}
	}
	//console.log(role_code);   
	var role_code;
	var activity_code = "A16090003";
	//接口地址
	//$("#abcd").html(user_code)
	console.log(global_path);
	//用户信息
	var userinformation = global_path + 'index.php/activitycenter/userinformation';
	console.log(userinformation);
	
	//top50排名
	var huoqurenshu = global_path + 'index.php/activitycenter/neckranking';
	//分享增加可玩次数
	var  addTimes = global_path + 'index.php/activitycenter/addpullTimes'; 
	//获取积分和可玩次数
	var integral = global_path + 'index.php/activitycenter/Availableintegral';
	//提交每次的得分
	var everyintegral = global_path + 'index.php/activitycenter/Scorepoints';
	console.log(everyintegral);
	//剩余游戏次数
	var lefttimes = 0;
	// //剩余养殖币
	// var leftyangzhibi = 0;
	//当局分数
	var $currscor = 0;
		//总剩余次数
	var surplusTimes=0;
	//养殖币数量
	var total_score = 0;
	//可分享次数
	var ftimes = 0;
	//最高分
	var scores = 0;
	//活动结束状态码
	 var status;
	console.log(surplusTimes);
	//传递的参数
	var p = {
		"activity_code": activity_code,
		"user_code": user_code
	};
	var u = {
		"user_code": user_code
	};
	//获取用户信息的接口
	commonAjax(userinformation,u,function(data){
		if(data.status == "2000" && data.data){
			role_code = data.data.role_code;
		}else{
			// alert("您的网络不稳定，请刷新重试");
		}
		
	}).fail(function(e){
		// alert("您的网络不稳定，请刷新重试");
	});
	//第一次获取养殖币及次数
	commonAjax(integral,p,function(data){
		console.log(data);
		status = data.status;
		total_score=data.data.total_score;
		$(".geshu1 #money").html(total_score);
			lefttimes = data.data.total_times;
			surplusTimes = data.data.surplusTimes;
			ftimes = data.data.ftimes;
			scores = data.data.scores;
			//活动结束时改动
			if(scores==undefined){
				scores=0;
			};
			
		$("#scor").html(lefttimes);
		$(".high-rank").text("best: "+scores+" m");
	});

	var timers;
//-------------业务逻辑
//-----------------------游戏开始
	var newtimer;
			 
	$("#gamestart").on("touchend mouseup",function(){

		$('.share-button').css({"z-index":"800"});
		//检测是否是专家
		if(status=="80005"){
			$(".lunbo").css({"display":"none"});
		    $(".lb").css({"display":"none"});
			$(".end").show();
			$('.end').siblings('.alert-tips').hide();
		}else if(status ==""){
			
		}else{
			if(role_code!="_PROFICIENT"){
			$(".experts").show();
			$(".experts").siblings(".alert-tips").hide(); 
			// $(".experts").css({"display":"block"});
			$(".geshu2").css({"display":"none"});
	        $(".geshu1").css({"display":"block"});
	      	// $(".notimersz").css({"display":"none"});
	      	// $(".notimers").css({"display":"none"});
	      	// $(".endpop-ups").css({"display":"none"});
	   	    $(".lunbo").css({"display":"none"});
		    $(".lb").css({"display":"none"});
		}else{
		var timer;
		$(".money-tree-bottomnotice").css({"top":"100%","z-index":"0"});
	    //有次数时候
	    if(lefttimes>0){
	    	//剩余7次和6次，需要减养殖币
	    	if(surplusTimes>5 && total_score>=10){
	    		$(".geshu1").css({"display":"none"});
	    		$(".geshu2").css({"display":"block"});
	    		$(".guide-button").css({"z-index":"-10"});
	    		startTimer();
	    		submitScore();
	    	}else if(surplusTimes<=5){
	    		$(".geshu1").css({"display":"none"});
	    		$(".geshu2").css({"display":"block"});
	    		$(".guide-button").css({"z-index":"300"});
	    		startTimer();
	    		submitScore();
	    	}else{
	    		//提示养殖币不足
	    		$(".geshu2").css({"display":"none"});
	    		$(".geshu1").css({"display":"block"});
	    		$(".guide-button").css({"z-index":"300"});
				$(".lunbo").css({"display":"none"});
				$(".lb").css({"display":"none"});
	    		$('.nomoney').show();
	    		$('.nomoney').siblings('.alert-tips').hide();
	    	}    	    	
	    }else{
	    	//提示次数不足
	    	$(".geshu2").css({"display":"none"});
	    	$(".geshu1").css({"display":"block"});
	    	$(".guide-button").css({"z-index":"300"});
			$(".lunbo").css({"display":"none"});
			$(".lb").css({"display":"none"});
	    	if(surplusTimes>0){//还可以分享，增加次数
		    	$('.notimers').show();
		    	$('.notimers').siblings('.alert-tips').hide();	  
		    	$(".nms-determine").on("touchend mouseup",function(){
		    	     $(".notimersc").css({"display":"none"});
		    	     $(".notimers").css({"background":"none"});
		    	     $(".share-button").css({"z-index":"800"});
		    	})  		
	    	}else{
	    		$('.notimersz').show();
		    	$('.notimersz').siblings('.alert-tips').hide();	
	    	}

	    }

	//    (function(){
 //    		  var i = 1;
	// 	  if(i<3){
	// 	    var timer = setInterval(function(){
	// 		$(".lb").css({"display":"none"});
	// 		$(".lb").eq(i).stop().fadeIn();
	// 		$(".lunbo").css({"background":"rgba(33,33,33,0.8)"})
	// 		    i++;
	// 		if(i==5){
	// 			clearInterval(timer);
	// 			$(".lunbo").css({"display":"none"});
	// 			$(".lb").css({"display":"none"});
	// 			$(".newmask").css({"display":"none"});
	// 			$(".lunbo").css({"background":"none"});
	// 			if(flag){
	// 				clearTimeout(newtimer);
	// 				var wait=30;  
	// 				timeOut(); 					
	// 			}
	// 		    function timeOut(){  
	// 			  if(wait==-1){  
	// 			  	   clearTimeout(newtimer);
	// 			  	   flag = false;
	// 			       return false; 
	// 				 }else{
	// 					  newtimer=setTimeout(function(){  
	// 				      wait--;  
	// 					  timeOut();  
	// 			     },1000);
	// 			     $(".geshu2 #geshu").html(wait);
	// 			     }
	// 			 } 
			
	// 	}
	//   },1000);
	// 	  console.log(i);
	//  }
	// })();
// 		clearTimeout(timers);
// 		timers=setTimeout(function(){
// 			$(".scroller-wrapper").css({"transform":"translate3d(0px,0px,0px)","transtion":"none"});
//             $(".idol-head").css({"transform":"translate3d(0px,0px,0px)","transtion":"none"});
//             $(".idol-body").css({"transform":"translate3d(0px,0px,0px) scaleY(1)","transtion":"none"});
//             $(".geshu2").css({"display":"none"});
// 			$(".geshu1").css({"display":"block"});
// 			$(".lunbo").css({"display":"none"});
// 			$(".lb").css({"display":"none"});
// 	      $currscor = bast();
// //---------------------提交每次游戏结束后的分数
// 		  var t = { 
//   		            "activity_code": activity_code,
// 		            "user_code": user_code,
// 		            "amount": $currscor
//                  };
//             console.log(t);
// 		  commonAjax(everyintegral,t,function(data){
//    		   	    if(data.status=="80000"){
// 				clearTimeout(timers);
// 				if($currscor > scores){
//    		   	    scores = $currscor;
// 	      		$(".high-rank").text("best: "+scores+" m");
// 	      		$(".endpop-ups .endpop-text").text("恭喜你，获得"+scores+"分，打破了自己的记录，继续加油啊！")
// 	      	}else{
// 	      		$(".endpop-ups .endpop-text").text("很遗憾，获得"+$currscor+"分，差一点就破纪录了，继续努力吧！")
// 	      	}    
// 		  		$(".endpop-ups").show()
// 		  		$(".endpop-ups").siblings(".alert-tips").hide();
// 				$(".nms-determine").on("touchend mouseup",function(){
// 		    	     $(".notimersc").css({"display":"none"});
// 		    	     $(".notimers").css({"background":"none"});
// 		    	     $(".share-button").css({"z-index":"200"});
// 		    	});
// 		  			//重新给公共变量赋值
// 					submitCallback();
//    		   	    }
//               });
// 		 },34000)

//---------------------获取养殖币和可玩次数
//surplusTimes;// 总剩余次数
//limitTimes;// 系统赠送的剩余次数
	 }
 }

		
		
	})
   $(".guide-ok").on("touchend mouseup",function(){
		console.log(1);
        $(".guide-button").css({"z-index":"300"});
		})
//-----------------再玩一次
	$(".again").on("touchend mouseup", function (a) {
	$(".guide-button").css({"z-index":"300"});
	$(".endpop-ups").css({"display":"none"});
	$(".lunbo").show();
	$(".newmask").css({"display":"block"});
	$(".scroller-wrapper").css({"transform":"translate3d(0px,0px,0px)","transtion":"none"});
    $(".idol-head").css({"transform":"translate3d(0px,0px,0px)","transtion":"none"});
    $(".idol-body").css({"transform":"translate3d(0px,0px,0px) scaleY(1)","transtion":"none"});
    a.preventDefault(), a.stopPropagation();
    var b = BLACKOUT({
        click: !0,
        insertBefore: $(".guide"),
        color: "rgba(66,33,11,0.8)"
    });
    cssAnimationKicker($(".guide"), {
        transform: "translate3d(0,200%,0)",
        display: "block",
        opacity: "0",
        transition: "0.3s ease-out"
    }, {
        transform: "translate3d(0,0,0)",
        opacity: "1"
    }), b.one("clearStart", function () {
        cssAnimationKicker($(".guide"), {
            transform: "translate3d(0,0,0)",
            display: "block",
            opacity: "1",
            transition: "0.3s ease-out"
        }, {
            transform: "translate3d(0,200%,0)",
            opacity: "0"
        })
    })
})
//----------所有的机会都用完
 $(".nms-determinez").on("touchend mouseup",function(){
 	window.location.href="appfunction://backhome";
 })
  $(".nmy-determine").on("touchend mouseup",function(){
 	 	window.location.href="appfunction://backhome";
 })
 $(".end-determinez").on("touchend mouseup",function(){
 	window.location.href="appfunction://backhome";
 })
 //----------点击x号
 $(".endpop-upsx").on("touchend mouseup",function(){
 	
 	window.location.href="appfunction://backhome";
 })
 $(".nomoneyx").on("touchend mouseup",function(){
 	window.location.href="appfunction://backhome";
 })
 $(".notimersx").on("touchend mouseup",function(){
 	window.location.href="appfunction://backhome";
 })
 $(".notimerszx").on("touchend mouuseup",function(){
 	window.location.href="appfunction://backhome";
 })
 $(".expertsx").on("touchend mouuseup",function(){
 	
 	window.location.href="appfunction://backhome";
 })
 $(".endx").on("touchend mouuseup",function(){
 	
 	window.location.href="appfunction://backhome";
 })
 //---------------养值币不足
 $(".es-determinez").on("touchend mouuseup",function(){
 	window.location.href="appfunction://backhome";
 })
//----------------点击分享或我要炫耀增加一次机会
//-----------------我要炫耀
$(".toshowoff").on("touchend mouseup",function(a){
	// var app_key = getQueryString('app_code');
	// var shareUrl = "";
	// if(app_key == "20001"){
	// 	shareUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.consumer#opened";
	// }
	// if(app_key == "20007"){
	// 	shareUrl = "https://itunes.apple.com/us/app/yang-zhi-bao/id1112414634?l=zh&ls=1&mt=8";
	// }
	// if(app_key == "20002"){
	// 	shareUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.agent";
	// }
	// if(app_key == "20008"){
	// 	shareUrl = "https://itunes.apple.com/cn/app/yang-zhi-bao-shou-yi-duan/id1112429075?mt=8";
	// }
	var shareUrl = dir_path+"/../download/downloadApp.php";;
	   window.location.href = "appfunction://share?title=圣诞活动&content=我居然得了"+ $currscor +"分，一起来赢大奖吧&url="+shareUrl+"&img_url="+ dir_path +"/pullneck/img/banner.png";
})
////ringpu/html_php/activity/pullneck/img/
//-----------------分享按钮
$(".share-button").on("touchend mouseup",function(a){
	// var app_key = getQueryString('app_code');
			 // commonAjax(addTimes,p,function(data){
		  // })
	var shareUrl = dir_path+"/../download/downloadApp.php";
	// if(app_key == "20001"){
	// 	shareUrl = global_path＋"html_php/download/downloadApp.php";
	// }
	// if(app_key == "20007"){
	// 	shareUrl = "http://global_path/ringpu/html_php/download/downloadApp.php";
	// }
	// if(app_key == "20002"){
	// 	shareUrl = "http://global_path/ringpu/html_php/download/downloadApp.php";
	// }
	// if(app_key == "20008"){
	// 	shareUrl = "http://global_path/ringpu/html_php/download/downloadApp.php";
	// }
	   window.location.href = "appfunction://share?title=圣诞活动&content=我居然得了"+ scores +"分，一起来赢大奖吧&url="+shareUrl+"&img_url="+ dir_path +"/pullneck/img/banner.png";
})
//---------------APP CallBack
//  function shareCallbackAPP(shareResult){
//  	// alert(shareResult);
// //---------------分享成功
// 	     if(surplusTimes>0){
// 		if(shareResult.shareResult==1){
// //-------------增加次数接口
// 	$("#gamestart").on("touchend mouseup",function(a){
// 		 commonAjax(addTimes,p,function(data){
// 		  })
// 		      $(".notimers").css({"display":"none"});
// 		      $(".share-button").css({"z-index":"-10"});
// 		      $(".notimersc").css({"display":"block"});
// 		    	  $(".notimers").css({"background":"rgba(33,33,33,0.8)"});
// 			  	console.log(12121212);
// 				$(".guide-ok").on("touchend mouseup",function(){ 
// 					})
// 			    a.preventDefault(), a.stopPropagation();
// 			    var b = BLACKOUT({
// 			        click: !0,
// 			        insertBefore: $(".guide"),
// 			        color: "rgba(66,33,11,0.8)"
// 			    });
// 			    cssAnimationKicker($(".guide"), {
// 			        transform: "translate3d(0,200%,0)",
// 			        display: "block",
// 			        opacity: "0",
// 			        transition: "0.3s ease-out"
// 			    }, {
// 			        transform: "translate3d(0,0,0)",
// 			        opacity: "1"
// 			    }), b.one("clearStart", function () {
// 			        cssAnimationKicker($(".guide"), {
// 			            transform: "translate3d(0,0,0)",
// 			            display: "block",
// 			            opacity: "1",
// 			            transition: "0.3s ease-out"
// 			        }, {
// 			            transform: "translate3d(0,200%,0)",
// 			            opacity: "0"
// 			        })
// 			    }), $(".guide-ok").one("click", function () {
// 			        b.clear()
// 			  })
// 			});
// 	     }
// 	   }
//  } 
//--------------游戏提示按钮
$("#guide-button").on("touchend mouseup",function(){
	        $(".experts").css({"display":"none"});
			$(".geshu2").css({"display":"none"});
	        $(".geshu1").css({"display":"block"});
	      	$(".notimersz").css({"display":"none"});
	      	$(".notimers").css({"display":"none"});
	      	$(".endpop-ups").css({"display":"none"});
	   	    $(".lunbo").css({"display":"none"});
		    $(".lb").css({"display":"none"});
		    
})
//---------切换角色game-start-bar
   $(".role").on("touchend mouseup",function(){
   	var a = $(this);
    var newindex=a.index();    
    console.log(newindex);
      return 3 == a.index() && $(".idols").eq(newindex).hasClass("void") ? void shareToUnlockPanel() : (characterIndex = a.index(), $(".idols").addClass("grey"), $(".idols").eq(newindex).removeClass("grey"), characterWrapper.css({
        transform: "scale(" + responsiveScale + ") translate3d(0,200px,0)",
        transition: "200ms ease-out"
    }), setTimeout(function () {
    		var left = "-" + 100 * Number(characterIndex) + "%";
    		$("#dd").on("click","li",function(){
		console.log(1);
	});
        $(".pipe-wrapper").css({
            transform: "translate3d("+ left +",0,0)",
            transition: "400ms ease-in-out"
        })
    }, 60), void setTimeout(function () {
        characterWrapper.css({
            transform: "scale(" + responsiveScale + ") translate3d(0,0,0)",
            transition: "200ms ease-out"
        }), setTimeout(function () {
            characterWrapper.css({
                transition: "none"
            })
        }, 200), idol.removeClass("idol-head-0 idol-head-1 idol-head-2 idol-head-3").addClass("idol-head-" + characterIndex), idolBody.removeClass("idol-body-0 idol-body-1 idol-body-2 idol-body-3").addClass("idol-body-" + characterIndex)
    }, 300))
   })
//--------------底部切换条
	$(".tree-bottomnotice-tab").on("touchend mouseup","li",function(e){
		console.log(1);
		e.preventDefault()
		e.stopPropagation()
		var $this = $(this);
		switch(Number($this.attr("value"))){
			case 1:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#huodongguize").css("display","block");$("#huodongguize").siblings("div").css("display","none");break;
			case 2:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#huodongjiangpin").css("display","block");$("#huodongjiangpin").siblings("div").css("display","none");break;
			case 3:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#niurenbang").css("display","block");$("#niurenbang").siblings("div").css("display","none");
					commonAjax(huoqurenshu,{user_code:user_code,activity_code:activity_code},function(data){
						//$("#niurenbang").empty();
						var jialing = function(n){
							var str ;
							if(n<9){
								str = "0"+(n+1);
							}else{
								str = n+1;
							}
							return str;
						}
						console.log(data)
						if(data.status == 2000){
							$("#topbang").empty()
							$.each(data.data.rankList,function(n,info){
								if(n<30){									
								$("#topbang").append("<p><span>"+jialing(n)+"</span><span>"+info.nickname+"</span><span>总分"+info.score+"</span></p>")
								}
							})
						}else{
							alert("参数错误")
						}
						$("#wodebang").empty()
						$("#wodebang").append("<p><span>"+Number(data.data.userRank.ranking)+"</span><span>"+data.data.userRank.nickname+"</span><span>总分"+data.data.userRank.score+"</span></p>")
					})
			break;
			case 4:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#zhongjiangmingdan").css("display","block");$("#zhongjiangmingdan").siblings("div").css("display","none");break;
		}
	})
	$(".tree-bottomnotice-tab").on("touchend mouseup","li",function(e){
		console.log(1);
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		switch(Number($this.attr("value"))){
			case 1:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#huodongguizes").css("display","block");$("#huodongguizes").siblings("div").css("display","none");break;
			case 2:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#huodongjiangpins").css("display","block");$("#huodongjiangpins").siblings("div").css("display","none");break;
			case 3:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#niurenbangs").css("display","block");$("#niurenbangs").siblings("div").css("display","none");
					commonAjax(huoqurenshu,{user_code:user_code,activity_code:activity_code},function(data){
						//$("#niurenbang").empty();
						var jialing = function(n){
							var str ;
							if(n<9){
								str = "0"+(n+1);
							}else{
								str = n+1;
							}
							return str;
						}
						console.log(data)
						if(data.status == 2000){
							$("#topbangs").empty()
							$.each(data.data.rankList,function(n,info){
								if(n<30){	
								$("#topbangs").append("<p><span>"+jialing(n)+"</span><span>"+info.nickname+"</span><span>总分"+info.score+"</span></p>")
								}
							})
						}else{
							alert("参数错误")
						}
						$("#wodebangs").empty()
						$("#wodebangs").append("<p><span>"+Number(data.data.userRank.ranking)+"</span><span>"+data.data.userRank.nickname+"</span><span>总分"+data.data.userRank.score+"</span></p>")
					})
			break;
			case 4:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#zhongjiangmingdans").css("display","block");$("#zhongjiangmingdans").siblings("div").css("display","none");break;
		}
	})

function submitCallback(){
		commonAjax(integral,p,function(data){
		 surplusTimes = data.data.surplusTimes;
		 lefttimes = data.data.total_times;
		 total_score = data.data.total_score;
		 $(".geshu1 #money").html(data.data.total_score);
		 $("#scor").html(lefttimes);
		 });
	// 	 if(lefttimes<0){
	//     	//提示次数不足
	//     	if(surplusTimes>0){//还可以分享，增加次数
	// 	    	$('.notimers').show();
	// 	    	$('.notimers').siblings('.alert-tips').hide();	    		
	//     	}else{
	//     		$('.notimersz').show();
	// 	    	$('.notimersz').siblings('.alert-tips').hide();	
	//     	}  	    	
	//     }else{
	//     	//提示次数不足
	//     	if(surplusTimes>0){//还可以分享，增加次数
	// 	    	$('.notimers').show();
	// 	    	$('.notimers').siblings('.alert-tips').hide();	    		
	//     	}else{
	//     		$('.notimersz').show();
	// 	    	$('.notimersz').siblings('.alert-tips').hide();	
	//     	}

	//     }

	// 	 if(surplusTimes>0){
	// 	 //当前可用次数已用完需分享
	// 	 if(data.data.total_times <=0){
	// 	 	$(".notimers").css({"display":"block"});
	// 	 	 $(".geshu1").css({"display":"block"});
	// 		 $(".geshu2").css({"display":"none"});
	// 	 	clearTimeout(timers);
	// 	 	$(".endpop-ups").css({"display":"none"});
	// 	 	$(".lunbo").css({"display":"none"});
	// 	 	$(".lb").css({"display":"none"});
	// 		$(".nms-determine").on("touchend mouseup",function(){
	// 	    	     $(".notimersc").css({"display":"none"});
	// 	    	     $(".notimers").css({"background":"none"});
	// 	    	     $(".share-button").css({"z-index":"200"});
	// 	    })
	// 	  };
	//    }else{
	//    	clearTimeout(timers);
	//    	$(".geshu2").css({"display":"none"});
	//     $(".geshu1").css({"display":"block"});
	//    	$(".notimersz").css({"display":"block"});
	//    	$(".endpop-ups").css({"display":"none"});
	// 	$(".lunbo").css({"display":"none"});
	// 	$(".lb").css({"display":"none"});
	//    }
	//  	//养殖币不足
	//  	if(surplusTimes>5){
	// 	 if(data.data.total_score<10){
	// 	  	clearTimeout(timers);
	// 	 	$(".lunbo").css({"display":"block"});
	// 	 	$(".lb").css({"display":"none"});
	// 	    $(".nomoney").css({"display":"block"});
	// 	    $(".nmy-determine").on("touchend mouseup",function(){
	// 	    	       window.location.href = "appfunction://backhome";
	// 	    })
	// 	  }
	// 	 }
	// 		$(".geshu1 #money").html(data.data.total_score);
	// 		lefttimes = data.data.total_times;
	// 		$("#scor").html(lefttimes);
	// })
}

function startTimer(){
	var flag=true;
    var i = 1;
	if(i<3){
		 var timer = setInterval(function(){
			$(".lb").css({"display":"none"});
			$(".lb").eq(i).stop().fadeIn();
			$(".lunbo").css({"background":"rgba(33,33,33,0.8)"})
			    i++;
			if(i==5){
				clearInterval(timer);
				$(".lunbo").css({"display":"none"});
				$(".lb").css({"display":"none"});
				$(".newmask").css({"display":"none"});
				$(".lunbo").css({"background":"none"});
				if(flag){
					clearTimeout(newtimer);
					var wait=29;  
					timeOut(); 					
				}
			    function timeOut(){  
				  if(wait==-1){  
				  	   clearTimeout(newtimer);
				  	   flag = false;
				       return false; 
					 }else{
						  newtimer=setTimeout(function(){  
					      wait--;  
						  timeOut();  
				     },1000);
				     $(".geshu2 #geshu").html(wait);
				     }
				 } 
			
		}
	  },1000);
		  console.log(i);
	 }
}
function submitScore(){
 		clearTimeout(timers);
		timers=setTimeout(function(){
			$(".scroller-wrapper").css({"transform":"translate3d(0px,0px,0px)","transtion":"none"});
            $(".idol-head").css({"transform":"translate3d(0px,0px,0px)","transtion":"none"});
            $(".idol-body").css({"transform":"translate3d(0px,0px,0px) scaleY(1)","transtion":"none"});
            $(".geshu2").css({"display":"none"});
			$(".geshu1").css({"display":"block"});
			$(".lunbo").css({"display":"none"});
			$(".lb").css({"display":"none"});
	      $currscor = bast();
//---------------------提交每次游戏结束后的分数
		  var t = { 
  		            "activity_code": activity_code,
		            "user_code": user_code,
		            "amount": $currscor
                 };
            console.log(t);
		  commonAjax(everyintegral,t,function(data){
   		   	    if(data.status=="80000"){
				clearTimeout(timers);
				if($currscor > scores){
   		   	    scores = $currscor;
	      		$(".high-rank").text("best: "+scores+" m");
	      		$(".endpop-ups .endpop-text").text("恭喜你，获得"+scores+"分，打破了自己的记录，继续加油啊！")
	      	}else{
	      		$(".endpop-ups .endpop-text").text("很遗憾，获得"+$currscor+"分，差一点就破纪录了，继续努力吧！")
	      	}    
		  		$(".endpop-ups").show()
		  		$(".endpop-ups").siblings(".alert-tips").hide();
				$(".nms-determine").on("touchend mouseup",function(){
		    	     $(".notimersc").css({"display":"none"});
		    	     $(".notimers").css({"background":"none"});
		    	     $(".share-button").css({"z-index":"800"});
		    	});
		  			//重新给公共变量赋值
					submitCallback();
   		   	    }
              });
		 },34000)
 }

function shareCallbackAPP(shareResult){
    if(surplusTimes>0 && ftimes<5){
		if(shareResult.shareResult==1){
//-------------增加次数接口
		 commonAjax(addTimes,p,function(data){
		 	// alert(data);
		 	if(data.status == "2000"){
		 		lefttimes = lefttimes + 1;
		 		$("#scor").text(lefttimes);
		 		$(".lunbo").show();
		 	}
		  })
	// $("#gamestart").on("touchend mouseup",function(a){
	// 	 commonAjax(addTimes,p,function(data){
	// 	  })
	// 	      $(".notimers").css({"display":"none"});
	// 	      $(".share-button").css({"z-index":"-10"});
	// 	      $(".notimersc").css({"display":"block"});
	// 	    	  $(".notimers").css({"background":"rgba(33,33,33,0.8)"});
	// 		  	console.log(12121212);
	// 			$(".guide-ok").on("touchend mouseup",function(){ 
	// 				})
	// 		    a.preventDefault(), a.stopPropagation();
	// 		    var b = BLACKOUT({
	// 		        click: !0,
	// 		        insertBefore: $(".guide"),
	// 		        color: "rgba(66,33,11,0.8)"
	// 		    });
	// 		    cssAnimationKicker($(".guide"), {
	// 		        transform: "translate3d(0,200%,0)",
	// 		        display: "block",
	// 		        opacity: "0",
	// 		        transition: "0.3s ease-out"
	// 		    }, {
	// 		        transform: "translate3d(0,0,0)",
	// 		        opacity: "1"
	// 		    }), b.one("clearStart", function () {
	// 		        cssAnimationKicker($(".guide"), {
	// 		            transform: "translate3d(0,0,0)",
	// 		            display: "block",
	// 		            opacity: "1",
	// 		            transition: "0.3s ease-out"
	// 		        }, {
	// 		            transform: "translate3d(0,200%,0)",
	// 		            opacity: "0"
	// 		        })
	// 		    }), $(".guide-ok").one("click", function () {
	// 		        b.clear()
	// 		  })
	// 		});
	     }
	   }
   }
//------规则
$(".detailed").on("touchend mouseup",function(e){
		e.preventDefault();
		e.stopPropagation();
		$("#wrap2").show();
		$("#wrap2").siblings("div").hide();
		// $(".content").hide();
		// $(".guide").hide();
		// $(".lunbo").hide();
 	// window.location.href = "rules.html?user_code="+user_code;
 })
  $("#wrap2 #rulesp").on("touchend mouseup",function(e){
  			e.preventDefault();
		e.stopPropagation();
		$("#wrap2").hide();
		$(".content").show();
		$(".guide").show();
		$(".lunbo").show();
		$(".BLACKOUT").show();
 	// window.location.href = "index.html?user_code="+user_code;
 })