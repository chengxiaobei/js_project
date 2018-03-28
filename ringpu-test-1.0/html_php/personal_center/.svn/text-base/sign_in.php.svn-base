<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>签到</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body>
  <div class="wrap">
    <header>
      <a class="back-btn"></a>
      <h2>每日签到</h2>
      <!--<a class="add-btn" href=""></a>-->
    </header>
    <section class="main-section">
    <script id="jsmart_tpl" type="text/x-jsmart-tmpl"> 
      <div class="qiandao-con">
        <div class="qiandao-con-main">
          <img src="../../public/images/qiandao-bg.png">
         {if $data.sign == 2}
          <img src="../../public/images/未签到.png" class="qiandao-noneimg signclick">
          <p class="right-text">今日签到可领取<span>{$data.toDayScore||1}</span>个</p>
         {elseif $data.sign == 1}
           <img src="../../public/images/已签到.png" class="qiandao-noneimg">
           <p class="right-text">明日签到可领取<span>{$data.tomorrowScore||0}</span>个</p>    
         {/if}
          <p class="qiandao-leftyzb">
           <span>{$data.totalScore}</span>
          </p>
        </div>
      </div>
      <!-- 签到个数-->
        <div class="qd-twoline">
          <div class="qd-twoline-main">
            <div class="left qd-twoline-left">
              <p class="qd-twoline-one">连续签到</p>
              <p class="qd-twoline-two"><span>{$data.keepDays}</span>天</p>
            </div>
            <div class="right qd-twoline-left qd-twoline-right">
              <p class="qd-twoline-one">累计签到</p>
              <p class="qd-twoline-two">{$data.totalDays}天</p>
            </div>
            <div class="clearf"></div>
          </div>
        </div>
       <!-- 签到规则-->
      <div class="qd-threeline">
        <div class="qd-threeline-main">
          <p class="title-lineone">签到规则</p>
          <p class="twoline-con">{$data.summary}</p>
        </div>
      </div>
     </script>
    </section>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js"
    data-main="../../public/js/modules/personal_center/sign_in.js"></script>




