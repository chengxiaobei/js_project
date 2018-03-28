<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>5 填写送料信息</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>

<!-- 个人中心--检测--填写送料信息 -->
<body>
  <!-- 填写送料信息 -->
  <div class="wrap" id="wrap1">
    <header>
      <a class="back-btn backButton" href="javascript:void(0);"></a>
      <h2>填写送料信息</h2>
    </header>
    <section class="main-section">
      <!--弹窗-->
      <div class="slxx-choose" style="display:none;" id="feed_type_list">
        <div class="slxx-ch-mode">选择送料方式</div>
        <ul>
          <!-- <li data-type="company">企业取料</li> -->
          <li data-type="person">个人寄料</li>
        </ul>
      </div>
      <!--弹窗-->
      <div class='mask'  style="display:none;" id="feed_personal_type_list">
       <div class="slxx-choose">
      
        <div class="slxx-ch-mode">选择送料方式</div>
        <ul>
          <li data-type="1">快递</li>
          <li data-type="2">车送</li>
        </ul>
       </div> 
      </div>
      <!--送料方式-->
      <div class="slxx-content center-mt tianxi-slxx-maincon">
        <ul>
          <li id="feed_type">
            <div class="slxx-tit left">送料方式</div>
            <div class="slxx-de left choose_feed_type" style="text-align:right;">请选择</div>
            <div class="clearf"></div>
          </li>
          <!--寄料方式-->
          <li style="display:none;" id="feed_personal_type" class="feed_personal">
            <div class="slxx-tit left">送料方式</div>
            <div class="slxx-de left choose_personal_feed_type choose_feed_type" style="text-align:right;"></div>
            <div class="clearf"></div>
          </li>
          <li style="display:none;" class="feed_personal feed_personal_kd feed_personal_kd_gs">
            <div class="slxx-tit left">快递公司</div>
            <div class="slxx-de left feed_personal_kd_company">请选择</div>
            <div class="clearf"></div>
          </li>
          <li style="display:none;" class="feed_personal feed_personal_kd feed_personal_kd_dh">
            <div class="slxx-tit left">快递单号</div>
            <div class="slxx-de left">
              <input id="feed_personal_kd_dh"
                class="inputValidation" defaultTip="请输入正确的快递单号" minLength="1" maxLength="20">
            </div>
            <div class="clearf"></div>
          </li>
          <!--车牌号-->
          <li style="display:none;" class="feed_personal feed_personal_cs feed_personal_cs_cp">
            <div class="slxx-tit left">车牌号</div>
            <div class="slxx-de left">
              <input id="feed_personal_cs_cp"
                class="inputValidation" defaultTip="请输入正确的车牌号" minLength="1" maxLength="20">
            </div>
            <div class="clearf"></div>
          </li>
          <!--司机电话-->
          <li style="display:none;" class="feed_personal feed_personal_cs feed_personal_cs_dh">
            <div class="slxx-tit left">司机电话</div>
            <div class="slxx-de left">
              <input id="feed_personal_cs_dh" maxLength="11" type="tel" 
                class="inputValidation" pattern="phonenum">
            </div>
            <div class="clearf"></div>
          </li>
        </ul>
      </div>
      <div class="slxx-phone feed_personal_cs" style="display:none;">
        <p>选择车送，请出发前联系诊断中心！</p>
        <!--<p>电话：022-88958053/022-88958065</p>-->
        <p>电话：4008005696</p>
      </div>
      <div><a class="center-btn slxx-btn-fahuo" id="send_feed" href="javascript:void(0);">确定</a></div>
    </section>
  </div>

  <div class="wrap" id="send_company" style="display:none;">
    <script type="text/x-jsmart-tmpl" id="send_company_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>选择快递公司</h2>
      </header>
      <section class="main-section">
        <div class="xzdq-city">
          <ul>
            {if $data && $data.length>0}
              {foreach $data as $key=>$value}
                <li data-delivery_name="{$value.delivery_name}" data-delivery_id="{$value.delivery_id}" class="provice"><a href="javascript:void(0);">{$value.delivery_name}</a></li>
              {/foreach}
            {/if}
          </ul>
        </div>
      </section>
    </script>
  </div>

</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/archive_feed_info.js"></script>




