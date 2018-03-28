<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>物流信息</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body>
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="order_logistics_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>物流信息</h2>
      </header>
      <section class="main-section">
        <!--快件信息-->
        <div class="wlxx-detail">
          <p><span class="">承运公司：</span>{$com}</p>
          <p><span class="">运单编号：</span>232435345464654</p>
          <p><span class="">客服电话：</span>11232343</p>
        </div>
        <!--物流-->
        <!--左边 蓝色的点是 wlxx-dot-blue ， 灰色的点是 wlxx-dot-grey -->
        <!--若字体变蓝  在li上添加类 center-blue -->
        <div class="wlxx-arrive">
          <ul>
            {foreach $data as $key=>$value}
              <li>
                <div class="wlxx-site">{$value.location}</div>
                <div class="wlxx-time">{$value.time}</div>
                <div class="wlxx-dot-grey"></div>
              </li>
            {/foreach}
          </ul>
        </div>
      </section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/order_logistics.js"></script>





