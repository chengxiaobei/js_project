<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>个人中心</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body class="main-body2">
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="personal_center_tpl">
      <header>
        <!--
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        -->
        <h2>个人中心</h2>
      </header>
      <section class="main-section">
        <!--用户名-->
        <div class="grzx-box" id="personal_message">
          <div class="grzx-user">
            <img class="left" src="{$data.avatar}" style="-webkit-border-radius:26px;border-radius:26px;height:51px;width:51px;" onerror="javascript:this.src='../../public/images/default-head.png'">
            <ul class="left">
              <li>{$data.nickname}</li>
              <li>{$data.telephone|phone_num}</li>
            </ul>
            <a class="right person-qiandao-rukou" id="daysign"><span>签到</span></a>
            <div class="clearf"></div>
          </div>
        </div>
        <!--1-->
        <div class="grzx-content">
        <!--养殖币-->
          <div class="yzb-jcda" id="signrecord">
            <div class="grzx-logo left"></div>
            <div class="grzx-tit left">养殖币</div>
            <div class="clearf"></div>
            <div class="grzx-number">{$data.score}</div>
          </div>
          <!-- 查询检测申请单-->
           <div class="grzx-jcda newone">
            <div class="grzx-logo left" style="background:url(../../public/images/plb.png) no-repeat left center;background-size:20px auto;"></div>
            <div class="grzx-tit left">查询检测申请单</div>
            <div class="clearf"></div>
          </div>
          <!--查询检测报告-->
          <div class="grzx-jcda newtwo">
            <div class="grzx-logo left" style="background:url(../../public/images/pjc.png) no-repeat left center;background-size:20px auto;"></div>
            <div class="grzx-tit left">查询检测报告</div>
            <div class="clearf"></div>
          </div>
          <!--购物订单-->
          <div class="grzx-gwdd" id="orders_list">
            <div class="grzx-logo left"></div>
            <div class="grzx-tit left">购物订单</div>
            <div class="clearf"></div>
          </div>
          <!--收藏的文章-->
          <div class="grzx-scwz" id="articles_list">
            <div class="grzx-logo left"></div>
            <div class="grzx-tit left">收藏的文章</div>
            <div class="clearf"></div>
          </div>
          <!--优惠券-->
          <div class="grzx-yhq" id="coupons_list">
            <div class="grzx-logo left"></div>
            <div class="grzx-tit left">优惠券</div>
            <div class="clearf"></div>
            <div class="grzx-number" id="curr_coupon_count"></div>
          </div>
        </div>
        <!--2-->
        <div class="grzx-content">
          <!--收货地址管理-->
          <div class="grzx-adress" id="goods_receipt_list">
            <div class="grzx-logo left"></div>
            <div class="grzx-tit left">收货地址管理</div>
            <div class="clearf"></div>
          </div>
          <!--产品反馈-->
          <div class="grzx-cpfk" id="product_feedback_list" style="display:none">
            <div class="grzx-logo left"></div>
            <div class="grzx-tit left">产品反馈</div>
            <div class="clearf"></div>
          </div>
        </div>
        <!--3-->
        <div class="grzx-content">
          <!--设置-->
          <div class="grzx-set" id="settings_list">
            <div class="grzx-logo left"></div>
            <div class="grzx-tit left">设置</div>
            <div class="clearf"></div>
          </div>
          <!--意见反馈-->
          <div class="grzx-yjfk" id="opinion_feedback_list">
            <div class="grzx-logo left"></div>
            <div class="grzx-tit left">意见反馈</div>
            <div class="clearf"></div>
          </div>
          <!--消息中心-->
          <div class="grzx-xxzx" id="messages_list">
            <div class="grzx-logo left"></div>
            <div class="grzx-tit left">消息中心</div>
            <div class="clearf"></div>
          </div>
        </div>
        <a class="center-btn login-finbtn" href="javascript:void(0);" id="logout">退出当前账号</a>
        <!--底部-->
        <div class="foot" style="display:none;">
          <ul>
            <li class="footg-index"></li>
            <li class="footg-online"></li>
            <li class="footg-farm"></li>
            <li class="footb-center"></li>
            <div class="clearf"></div>
          </ul>
        </div>
      </section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/index.js"></script>


