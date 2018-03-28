<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>收货地址</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body>
  <div class="wrap" id="wrap1" style="display:none;">
    <script type="text/x-jsmart-tmpl" id="reciver_list_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>收货地址</h2>
        <a class="add-btn receiver_add" href="javascript:void(0);"></a>
      </header>
      <section class="main-section">
        {if $data && $data.length>0}
          {foreach $data as $key=>$value}
            <!---->
            <div class="shdz-box receiver_item" data-code="{$value.code}">
              <div class="shdz-adress">
                <div class="shdz-np">
                  <div class="shdz-name left" style="width:50%;">{$value.receiver}</div>
                  <div class="left">{$value.telphone}</div>
                  <div class="clearf"></div>
                </div>
                <div class="shdz-site">{$value.province}{$value.city}{$value.area}{$value.detail}</div>
              </div>
              <div class="shdz-bjsc">
                <div class="shdz-del right receiver_delete">删除</div>
                <div class="shdz-edit right receiver_edit">编辑</div>
                <div class="clearf"></div>
              </div>
            </div>
          {/foreach}
        {/if}
      </section>
    </script>
  </div>
  
  <!-- 提示信息 -->
  <div class="center-tc tip-info" style="display:none;">
      <div></div>
  </div>

  <!-- 添加地址 -->
  <div class="wrap" id="wrap2" style="display:none;">
    <header>
      <a class="back-btn backButton" href="javascript:void(0);"></a>
      <h2>添加地址</h2>
    </header>
    <section class="main-section">
      <div class="login-box">
        <!--收货人姓名-->
        <div class="login-phone">
          <div class="bjdz-name left">收货人姓名</div>
          <div class="bjdz-input left">
            <input id="receiver" 
              defaultTip="请输入正确的收货人姓名" minLength="2" maxLength="20">
          </div>
          <div class="clearf"></div>
        </div>
        <!--手机号码-->
        <div class="login-phone">
          <div class="bjdz-name-four left"><span>手机号</span>码</div>
          <div class="bjdz-input left" >
            <input id="telphone" type="tel" required="required" maxLength="15">
          </div>
          <div class="clearf"></div>
        </div>
        <!--所在地区-->
        <div class="login-phone right-btn" id="choose_area">
          <div class="bjdz-name-four left"><span>所在地</span>区</div>
          <div class="bjdz-input left choose_area"></div>
          <div class="clearf"></div>
        </div>
        <!--详细地址-->
        <div class="login-password">
          <div class="bjdz-name-four left"><span>详细地</span>址</div>
          <div class="bjdz-text left">
            <textarea id="detail"></textarea>
            <div class="bjdz-plus detail_content_length"><span>0/</span><span class="center-red">60</span></div>
          </div>
          <div class="clearf"></div>
        </div>
        <!--选联系人-->
        <div class="bjdz-choose-lxr" style="display:none;">
          <a href="">
            <div class="bjdz-people">选联系人</div>
          </a>
        </div>
      </div>
      <a class="center-btn login-finbtn" href="javascript:void(0);" id="save">保存</a>
    </section>
  </div>


  <!-- 编辑收货地址 -->
  <div class="wrap" id="wrap3">
    <script type="text/x-jsmart-tmpl" id="reciver_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>编辑地址</h2>
      </header>
      <section class="main-section">
        <div class="login-box">
          <!--收货人姓名-->
          <div class="login-phone">
            <div class="bjdz-name left">收货人姓名</div>
            <div class="bjdz-input left">
              <input id="receiver_update" value="{$data.receiver}" 
                class="inputValidation" defaultTip="请输入正确的收货人姓名" minLength="2" maxLength="20">
            </div>
            <div class="clearf"></div>
          </div>
          <!--手机号码-->
          <div class="login-phone">
            <div class="bjdz-name-four left"><span>手机号</span>码</div>
            <div class="bjdz-input left"><input id="telphone_update" value="{$data.telphone}" type="tel" required="required" maxLength="15"></div>
            <div class="clearf"></div>
          </div>
          <!--所在地区-->
          <div class="login-phone right-btn" id="choose_area_update" data-province="{$data.provinceCode}" data-city="{$data.cityCode}" data-area="{$data.areaCode}">
            <div class="bjdz-name-four left"><span>所在地</span>区</div>
            <div class="bjdz-input left choose_area" data-code="{$data.code}">{$data.province}{$data.city}{$data.area}</div>
            <div class="clearf"></div>
          </div>
          <!--详细地址-->
          <div class="login-password">
            <div class="bjdz-name-four left"><span>详细地</span>址</div>
            <div class="bjdz-text left">
              <textarea id="detail_update">{$data.detail}</textarea>
              <div class="bjdz-plus detail_content_length"><span>0/</span><span class="center-red">60</span></div>
            </div>
            <div class="clearf"></div>
          </div>
          <!--选联系人-->
          <div class="bjdz-choose-lxr" style="display:none;">
            <a href="">
              <div class="bjdz-people">选联系人</div>
            </a>
          </div>
        </div>
        <a class="center-btn login-finbtn" href="javascript:void(0);" id="update">保存</a>
      </section>
    </script>
  </div>

  <!-- 地区选择 -->
  <?php include "../common/choose_area.php" ?>

</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/receiver_areas_list.js"></script>




