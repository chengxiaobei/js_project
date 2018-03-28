<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>选择支付方式</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body>
  <div class="wrap" id="wrap1">
    <header>
      <a class="back-btn backButton" href="javascript:void(0);"></a>
      <h2>选择支付方式</h2>
    </header>
    <section class="main-section">
      <div class="chpay-box center-mt">
        <ul>
          <!--选中是 chpay-checked   没选中是 chpay-checked-->
          <li class="chpay-logo-zfb"><div pay-type="1" class="chpay-check pay-option">支付宝</div></li>
          <li class="chpay-logo-wx"><div pay-type="2" class="chpay-check pay-option">微信</div></li>
          <li class="chpay-logo-yl"><div pay-type="3" class="chpay-check pay-option">银联</div></li>
          <li class="chpay-logo-xxzf"><div pay-type="4" class="chpay-checked pay-option">线下支付</div></li>
        </ul>
      </div>
      <div class="center-total">
        <div class="cen-tot-price left">
          总计：<span>98</span>元
        </div>
        <div class="cen-tot-btn right"><a href="javascript:void(0);" id="order_submit">提交订单</a></div>
        <div class="clearf"></div>
      </div>
    </section>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/pay_options.js"></script>




