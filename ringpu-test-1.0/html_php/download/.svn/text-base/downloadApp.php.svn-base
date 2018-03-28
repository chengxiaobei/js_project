<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>养殖宝下载</title> 
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style3.css">
<link type="text/css" rel="stylesheet" href="../../public/css/activity.css">
<script src="../../public/js/common/jquery-1.9.1.min.js"></script>
<script src="../../public/js/common/globalvar.js"></script>
<script  src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<body class="yzb-download-body">
  <div class="wrap">
    <section>
      <div class="mask" style="display:none" id="showdownload">
        <div class="yyy-fenxiang">
          <p>请点击右上角 “<span><img src="../../public/images/yyy-diandian.png"></span>”  选择<span>（在浏览器中打开)</span></p>
        </div>
      </div>
      <div class="mask" style="display:none" id="showgetpoint">
        <div class="yyy-fenxiang">
          <p style="margin-top:-23px">请点击右上角 “<span><img src="../../public/images/yyy-diandian.png"></span>”  分享<span style="text-align:center;display:block">好友填写推荐码注册后你可以获得养殖币哦</span></p>
        </div>
      </div>
      <!--按钮上的文字-->
      <!-- <p class="bebtn-p">养殖宝，养殖行业一站式服务平台</p> -->
      <!--立即下载按钮-->
      <!--  <a class="download-btn" >立即下载安卓版APP</a>-->
      <!--下载的二维码左右结构-->
      <div class="yzb-down-saomiao">
        <div class="yzb-down-saomiao-main">
          <div class="left yzb-saomiao-left">
            <p>养殖户端</p>
            <img src="../../public/images/hd-yzh-logo.png">
            <a class="download_yzh">立即下载</a>
          </div>
          <div class="right yzb-saomiao-right">
            <p>兽医端</p>
            <img src="../../public/images/hd-syd-logo.png">
            <a class="download_sy">立即下载</a>
          </div>
          <div class="clearf"></div>
        </div>
      </div>
      <!--养殖之旅模块-->
      <div class="yzb-yzzl-con" style="margin-top:28%;">
        <!--养殖之旅标题-->
        <div class="main-title-div">
          <img src="../../public/images/yzb_main_title.png">
        </div>
        <!--养殖之旅各个模块说明列表-->
        <ul class="model-exp-ul">
          <li class="dwzl-li">
            <!--模块标题-->
            <div class="title-div">
              <img src="../../public/images/title_dwzl.png">
            </div>
            <!--文字-->
            <p>随时发起检测申请，实时查询检测进度，诊断结果一手掌握</p>
          </li>
          <li class="zxzj-li">
            <!--模块标题-->
            <div class="title-div">
              <img src="../../public/images/title_zxzj.png">
            </div>
            <!--文字-->
            <p>养殖问题直接找专家提问，实时在线沟通</p>
          </li>
          <li class="sc-li">
            <!--模块标题-->
            <div class="title-div">
              <img src="../../public/images/title_sc.png">
            </div>
            <!--文字-->
            <p>海量药品，超低价格，轻松下单</p>
          </li>
          <li class="yzxy-li">
            <!--模块标题-->
            <div class="title-div">
              <img src="../../public/images/title_yzxy.png">
            </div>
            <!--文字-->
            <p>最全面的、及时的养殖类信息服务平台，各种政策、行情资讯提早了解，专业资料免费阅读学习</p>
          </li>
          <li class="yzsq-li">
            <!--模块标题-->
            <div class="title-div">
              <img src="../../public/images/title_yzsq.png">
            </div>
            <!--文字-->
            <p>养殖行业朋友的大家庭，结交新朋友尽在于此</p>
          </li>
        </ul>
        <div class="clearf"></div>
      </div>
     <!-- 二维码模块-->
     <div class="yzb-ewm-con">
       <p>也可以通过扫码关注“养殖宝”微信公众号!</p>
      <img src="../../public/images/yzb_ewm_img.png">
     </div>
    </section>
  </div>
  <script>
    var urlshareinit = global_path + "wx_share.php";
    var sharetitle='养殖宝';
    var sharecontent='点击这里，下载养殖宝！';
	var shareimg='https://m.ringpu.com/ringpu/public/images/lxwm-logoing.png';
	var ua = navigator.userAgent.toLowerCase();
	var url= 'https://m.ringpu.com/ringpu/html_php/download/downloadApp.php';
	var getpoint = getQueryString('point');
	if(getpoint == "getpoint"){
		$("#showgetpoint").show();
	}
	commonAjax(urlshareinit , {url:url}).then(function(data){

 		 	var opts = {
 			    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
 			    appId: data.appId, // 必填，公众号的唯一标识
 			    timestamp: data.timestamp, // 必填，生成签名的时间戳
 			    nonceStr: data.nonceStr, // 必填，生成签名的随机串
 			    signature:data.signature,// 必填，签名，见附录1
 			    jsApiList: [
 			                'onMenuShareTimeline',
 			                'onMenuShareAppMessage',
 			                'onMenuShareQQ',
 			                'onMenuShareWeibo',
 			                'onMenuShareQZone'         
 			    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
 			} ;


 			wx.config(opts);

 			wx.ready(function () {
 	 			  // 2. 分享接口
 	 			  // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
 	 			    wx.onMenuShareAppMessage({
 	 			      title: sharetitle,
 	 			      desc: sharecontent,
 	 			      link: window.location.href,
 	 			      imgUrl: shareimg,
 	 			      trigger: function (res) {
 	 			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
 	 			        //alert('用户点击发送给朋友');
 	 			      },
 	 			      success: function (res) {
 	 			        //alert('已分享');
 	 			      },
 	 			      cancel: function (res) {
 	 			       // alert('已取消');
 	 			      },
 	 			      fail: function (res) {
 	 			        //alert(JSON.stringify(res));
 	 			      }
 	 			    });
 	 			  // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
 	 			    wx.onMenuShareTimeline({
 	 			    	 title: sharetitle,
 	 	 			      desc: sharecontent,
 	 	 			      link: window.location.href,
 	 	 			      imgUrl: shareimg,
 	 	 			      trigger: function (res) {
 	 	 			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
 	 	 			        //alert('用户点击发送给朋友');
 	 	 			      },
 	 	 			      success: function (res) {
 	 	 			        //alert('已分享');
 	 	 			      },
 	 	 			      cancel: function (res) {
 	 	 			       // alert('已取消');
 	 	 			      },
 	 	 			      fail: function (res) {
 	 	 			        //alert(JSON.stringify(res));
 	 	 			      }
 	 			    });

 	 			  // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
 	 			    wx.onMenuShareQQ({
 	 			    	 title: sharetitle,
 	 	 			      desc: sharecontent,
 	 	 			      link: window.location.href,
 	 	 			      imgUrl: shareimg,
 	 	 			      trigger: function (res) {
 	 	 			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
 	 	 			        //alert('用户点击发送给朋友');
 	 	 			      },
 	 	 			      success: function (res) {
 	 	 			        //alert('已分享');
 	 	 			      },
 	 	 			      cancel: function (res) {
 	 	 			       // alert('已取消');
 	 	 			      },
 	 	 			      fail: function (res) {
 	 	 			        //alert(JSON.stringify(res));
 	 	 			      }
 	 			    });
 	 			  
 	 			  // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
 	 			    wx.onMenuShareWeibo({
 	 			    	 title: sharetitle,
 	 	 			      desc: sharecontent,
 	 	 			      link: window.location.href,
 	 	 			      imgUrl: shareimg,
 	 	 			      trigger: function (res) {
 	 	 			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
 	 	 			        //alert('用户点击发送给朋友');
 	 	 			      },
 	 	 			      success: function (res) {
 	 	 			        //alert('已分享');
 	 	 			      },
 	 	 			      cancel: function (res) {
 	 	 			       // alert('已取消');
 	 	 			      },
 	 	 			      fail: function (res) {
 	 	 			        //alert(JSON.stringify(res));
 	 	 			      }
 	 			    });

 	 			  // 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
 	 			    wx.onMenuShareQZone({
 	 			    	 title: sharetitle,
 	 	 			      desc: sharecontent,
 	 	 			      link: window.location.href,
 	 	 			      imgUrl: shareimg,
 	 	 			      trigger: function (res) {
 	 	 			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
 	 	 			        //alert('用户点击发送给朋友');
 	 	 			      },
 	 	 			      success: function (res) {
 	 	 			        //alert('已分享');
 	 	 			      },
 	 	 			      cancel: function (res) {
 	 	 			       // alert('已取消');
 	 	 			      },
 	 	 			      fail: function (res) {
 	 	 			        //alert(JSON.stringify(res));
 	 	 			      }
 	 			    });
 	 		});
 	 		wx.error(function (res) {
 	 	     //alert(res.errMsg);
 	 	    });
 		 })
 		$('.download_yzh').on('click',function(){
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){
		       $('#showdownload').show();
		    }else{
			   window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.consumer";
		      // window.location.href="http://m.ringpu.com/download/apps/RingpuConsumer-lastest.apk"
		    }
 		}) 
 		$('.download_sy').on('click',function(){
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){
		       $('#showdownload').show();
		    }else{
			    window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.agent";
		    	// window.location.href="http://m.ringpu.com/download/apps/RingpuAgent-lastest.apk"
		    }
 		})
 		$('.mask').on('click',function(){
 			 $('#showdownload').hide();
 			 $('#showgetpoint').hide();
 		}) 			
  </script>
</body>
</html>