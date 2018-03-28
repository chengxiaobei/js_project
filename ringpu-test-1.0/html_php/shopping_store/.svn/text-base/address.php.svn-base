<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="format-detection" content="telephone=no" />
<title>收货地址</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style1.css">
</head>
<body>
  <div class="wrap">
    <header>
      <a class="back-btn"></a>
      <h2>收货地址</h2>
      <a class="add-btn"></a>
    </header>
    <section class="main-section sc-top-section">
      <!-- 收货地址列表 -->
     <script id="jsmart_tpl" type="text/x-jsmart-tmpl"> 
      <ul class="sc-shdz-list-ul">  
       {foreach $data as $key => $value}
        <li data-code={$value.code} data-area={$value.area} data-areaCode={$value.areaCode}
        data-city={$value.city} data-cityCode={$value.cityCode} data-province={$value.province}
        data-provinceCode={$value.provinceCode} data-receiver={$value.receiver} data-telphone={$value.telphone}
        data-detail={$value.detail}
        >
          <!-- 选择按钮 -->
          <div class="sel-btn-con">
              <a class="{if $value.code == $receive_code} sel-btn {/if}"></a>
          </div>
          <!-- 收货信息和地址 -->
          <div class="info-con">
            <!-- 姓名和电话 -->
            <div class="name-con">
              <div class="left name-div">
                <p>{$value.receiver}</p>
              </div>
              <div class="right phone-div">
                <p>{$value.telphone}</p>
              </div>
              <div class="clearf"></div>
            </div>
            <!-- 收货地址 -->
            <div class="address-con">
              <p>{$value.province}{$value.city}{$value.area}{$value.detail}</p>
            </div>
          </div>
          <!-- 操作 -->
          <div class="handle-con">
            <a class="handle-btn-edit" data-code={$value.code}>编辑</a>
          </div>
        </li>        
      {/foreach}
      </ul>
     </script> 
    </section>
  </div>
</body>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/shopping_store/address.js"></script>
</html>


