
(function(){
	//警告语
	//console.log("%c您正在使用开发者工具，请勿做任何操作，否则造成任何账号损失由个人承担，中信网已对此ip地址进行了监控,谢谢"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
	//

/*	var jifenliebiao = global_path + 'index.php/activitycenter/jifenliebiao';
	commonAjax(jifenliebiao,{user_code:"gIrvbGJD7sbRDVOO1KSQUf9kK55fGbXo",activity_code:"A16090002",page_size:20},function(data){
		console.log(data)
	})
	var xiugaiyangzhibi = global_path + 'index.php/activitycenter/xiugaiyangzhibi';
	commonAjax(xiugaiyangzhibi,{user_code:"gIrvbGJD7sbRDVOO1KSQUf9kK55fGbXo",activity_code:"A16090002",lucky_score:100},function(data){
		console.log(data)
	})*/


	//参数
	var user_code = getQueryString('code')||(RP.store.getItem('curr_user_info')?RP.store.getItem('curr_user_info').user_code:"");
	//var user_code = "gIrvbGJD7sbRDVOO1KSQUf9kK55fGbXo";
	var activity_code = "A16090002";
	//接口地址
	//$("#abcd").html(user_code)
	var xiugaiyangzhibi = global_path + 'index.php/activitycenter/xiugaiyangzhibi';
	var huoqurenshu = global_path + 'index.php/activitycenter/huoqurenshu';
	var huoqucishu = global_path + 'index.php/activitycenter/huoqucishu';
	//剩余游戏次数
	var lefttimes;
	//剩余养殖币
	var leftyangzhibi;
	//当局分数
	var $currscor = 0;
	//第一次读取养殖币个数
	commonAjax(huoqucishu,{user_code:user_code,activity_code:activity_code},function(data){
		console.log(data)
			$("#geshu").html(data.data.total_score);
			$("#scor").html(data.data.prize_amount)
			lefttimes = data.data.total_times;
			leftyangzhibi = data.data.total_score;
			console.log(lefttimes)
	})
	/*commonAjax(jifenliebiao,{user_code:user_code,activity_code:activity_code},function(data){
		console.log(data)
	})*/

	//公共弹框
	$("#myalert").on("click","#mylaertqueding",function(){
		$("#myalert").attr("hidden","hidden");
	})
			//活动是否结束
	var currdate = new Date().getTime();
	var endDate = new Date("2016/10/13").getTime();
	if(currdate > endDate){
		$("#myalert").removeAttr("hidden");
        $("#myalertbiaoti").html("对不起，活动已结束");
	}

	
	//测试函数
	var test = function(){
		console.log("test")
	}
	//老鼠出现
	var show = function(){
		var showtimer = setInterval(function(){
			var $index = $("tbody img:eq("+Math.floor(Math.random()*9)+")");
			//如果现在洞里没有小人
			if(!$index.attr("alive")){
				var $role = Math.floor(Math.random()*6);
				if($role>1){
					$index.attr({src:"../images/guizi1.png",alive:"true"}).animate({width:"90%",left:"7%"},400)
				}else{
					$index.attr({src:"../images/hongjun1.png",alive:"true"}).animate({width:"90%",left:"0%"},400)
				}
			}
			//存在时间
			setTimeout(function(){
				$index.animate({width:"0%",left:"50%"},200).removeAttr("alive")
			},1500)
		},400)
		showcall = function(){
			return showtimer;
		}
	}

	//分数规则
	var point = function(type){
		var  $scor = $("#scor")
		//当前分数
		var curr = Number($scor.html());
		//1为+10分  2为-5分
		if(type ==  1){
			$scor.html(curr+10)
			$currscor = $currscor +10;
		}else{
			curr == 0?$scor.html(0):$scor.html(curr-5);
			$currscor == 0?$currscor=0:$currscor=$currscor-5;
		}
	}

	//老鼠被打
	var hit = function(){
		$("tbody").on("click","img",function(){
			if($(this).attr("src") == "../images/guizi1.png"){
				//打鬼子
				$(this).attr("src","../images/guizi2.png")
				point(1);
			}else if($(this).attr("src") == "../images/hongjun1.png"){
				//打红军
				$(this).attr("src","../images/hongjun2.png")
				point(2)
			}
		})
	}
	//结束30秒倒计时
	var thirtycountdown = function(){
		var n = 29;
		var thirtycountdowntimer = setInterval(function(){
			$("#time").html(n--)
			if(n == -1){
				$("body").append("<div class='mask-transparent'></div>")
				clearInterval(thirtycountdowntimer)
				clearInterval(showcall());
				$("#time").html(30);
				//alert("game over 你的得分为:"+$("#scor").html())
				commonAjax(xiugaiyangzhibi,{user_code:user_code,activity_code:activity_code,lucky_score:$currscor},function(data){
					console.log(data)
					$(".mask-transparent").remove();
					if(data == ""){alert("接口报错")}
					lefttimes = data.data.total_times;
					leftyangzhibi = data.data.total_score;
					//倒计时隐藏，显示养殖币
					$("#yangzhibi").css("display","block");
        			$("#daojishi").css("display","none");
					$("#geshu").html(leftyangzhibi);
					//$("#scor").html(data.data.prize_amount)
					$("#nuli").removeAttr("hidden");
					//当局游戏分数
					$("#nulidiv span:eq(0)").html($currscor);
					$currscor = 0;
					$("#nulidiv span:eq(1)").html(Number(data.data.user_ranking));
					$("#muliqueding").bind("click",function(){
						$("#nuli").attr("hidden","hidden");
					})
				})
				$("#playing").removeAttr("hidden")
				$("#tips").attr("hidden","hidden");
			}
		},1000)
	}
	//
	//开始按钮
	$(".wrap").on("click","#start",function(){
	if(currdate > endDate){
		$("#myalert").removeAttr("hidden");
        $("#myalertbiaoti").html("对不起，活动已结束");
        return false;
	}
        //请求接口
        scrollTo(0,0)
        if(user_code == ""){
        	$("#myalert").removeAttr("hidden");
        	$("#myalertbiaoti").html("请先登录");
        }else if(lefttimes == undefined){
        	$("#myalert").removeAttr("hidden");
        	$("#myalertbiaoti").html("活动已结束 ");
        }else if(lefttimes == 0){
        		$("#jihuiyongwan").removeAttr("hidden");
        		$("#jihuiyongwanqueding").bind("click",function(){
        			$("#jihuiyongwan").attr("hidden","hidden");
        		})
        	}else if(leftyangzhibi < 10){
        		$("#yangzhibibuzu").removeAttr("hidden");
        		$("#yangzhibibuzuqueding").bind("click",function(){
        			$("#yangzhibibuzu").attr("hidden","hidden")
        		})
        	}else{
        		lefttimes--;
        		//养殖币隐藏，倒计时显示
        		$("#yangzhibi").attr("hidden","hidden");
        		$("#daojishi").removeAttr("hidden");

        		var $countdownbg = $(".countdownbg")
				$countdownbg.removeAttr("hidden")
				$("#yangzhibi").css("display","none");
				$("#daojishi").css("display","block");
				var n = 2;
				//开始3秒倒计时
				var counttimer = setInterval(function(){
				var $countdownimg = $(".countdown-img");
				$countdownimg.attr("src","../images/countdown"+n+".png")
				n--;

				if(n == -1){
					clearInterval(counttimer);
					$countdownbg.attr("hidden","hidden");
					$countdownimg.attr("src","../images/countdown3.png")
					$("#playing").attr("hidden","hidden")
					$("#tips").removeAttr("hidden");
					show();
					hit();
					thirtycountdown();
				}
			},1000)
        	}
	})

	//底部切换条
	$(".tree-bottomnotice-tab").on("click","li",function(){
		var $this = $(this);
		switch(Number($this.attr("value"))){
			case 1:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#huodongguize").css("display","block");$("#huodongguize").siblings("div").css("display","none");break;
			case 2:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#huodongjiangpin").css("display","block");$("#huodongjiangpin").siblings("div").css("display","none");break;
			case 3:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#niurenbang").css("display","block");$("#niurenbang").siblings("div").css("display","none");
					commonAjax(huoqurenshu,{user_code:user_code,activity_code:activity_code,page_size:50},function(data){
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
								$("#topbang").append("<p><span>"+jialing(n)+"</span><span>"+info.nickname+"</span><span>总分"+info.amount+"</span></p>")
							})
						}else{
							alert("参数错误")
						}
						$("#wodebang").empty()
						$("#wodebang").append("<p><span>"+Number(data.data.userRank.ranking)+"</span><span>"+data.data.userRank.nickname+"</span><span>总分"+data.data.userRank.amount+"</span></p>")
					})
			break;
			case 4:$this.addClass("tab-checked").siblings("li").removeClass("tab-checked");$("#zhongjiangmingdan").css("display","block");$("#zhongjiangmingdan").siblings("div").css("display","none");break;
		}
	})
})();