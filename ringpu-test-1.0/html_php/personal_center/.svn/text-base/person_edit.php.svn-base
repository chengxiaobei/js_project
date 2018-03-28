<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>编辑个人信息</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style3.css">
<style type="text/css">
  #avatar_input{ 
    width:20; height:92px;margin:0 auto;
    filter:alpha(opacity=0);-moz-opacity:.0;opacity:0.0; cursor:pointer;
  }
  .grxx-input{
    border:0!important;
  }
</style>


</head>
<body>
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="user_info_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>编辑个人信息</h2>
      </header>
      <section class="main-section">
        <!--头像-->
        <div class="wsxx-headpor">
          <img src="{$user.avatar||'../../public/images/wsxx-headpor.png'}" id="avatar" style="-webkit-border-radius:92px;border-radius:92px;height:92px;width:92px;">
          <input type="file" id="avatar_input" accept="image/*" >
        </div>
        <!--1-->
        <div class="grxx-content" style="margin-top:48px;">
        <!--昵称-->
          <div class="grxx-username">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">昵称</div>
            <div class="grxx-input right">
              <input placeholder="请输入昵称" id="nickname" value="{$user.nickname||''}" 
                class="inputValidation" defaultTip="请填写正确的昵称" minLength="4" maxLength="20">
            </div>
            <div class="clearf"></div>
          </div>
          <!--姓名-->
          {if $user.status && ($user.status=='0'||$user.status=='1'||$user.status=='2')}
          {else}
            <div class="grxx-name">
              <div class="grxx-logo left"></div>
              <div class="grxx-tit left">姓名</div>
              <div class="grxx-input right">
                <input placeholder="请输入您的真实姓名" id="user_name" value="{$user.username|getRealName ||''}" 
                  class="inputValidation" defaultTip="请填写正确的姓名" minLength="4" maxLength="20">
              </div>
              <div class="clearf"></div>
            </div>
          {/if}
          <!--地区-->
          <div class="grxx-area-hover">
            <div class="grxx-area">
              <div class="grxx-logo left"></div>
              <div class="grxx-tit left">地区</div>
              <div class="grxx-dz right" id="choose_area" style="margin-right:8px;">
                <span>
                  {if $user.province_name}
                    {$user.province_name}{$user.city_name}{$user.area_name}
                  {else}
                    请选择
                  {/if}
                </span>
              </div>
              <div class="clearf"></div>
            </div>
          </div>
          <!--养殖厂名-->
          <div class="grxx-companyname">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">养殖厂名</div>
            <div class="grxx-input right" >
              <input placeholder="请输入养殖厂单位名称" id="unit_name" value="{$user.client_unit||''}"  
                class="inputValidation" defaultTip="请填写正确的养殖厂名称" minLength="5" maxLength="40">
            </div>
            <div class="clearf"></div>
          </div>

          <!--全场养殖量-->
          <div class="grxx-companyno">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">全场养殖量</div>
            <div class="grxx-input right">
              <input placeholder="请输入数字" id="unit_scale" value="{$user.all_nums||''}"  
                class="inputValidation" minLength="2" defaultTip="请填写正确的全场养殖量" maxLength="20" pattern="float" style="width:83%;">
            <p class="right" id="wanyu" style="margin-top:5px;display:none;">万羽</p>
            <p class="right" id="tou" style="margin-top:5px;display:none;">头</p>
            </div>
            <div class="clearf"></div>
          </div>

          <!--养殖品种-->
          <div class="grxx-variety">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">养殖品种</div>
            <div class="grxx-input right animal_type_choose">
              <!--<input placeholder="请输入养殖动物的品种" id="variety" value="{$user.breed||''}"  
                class="inputValidation" defaultTip="请填写正确的品种" minLength="2" maxLength="20">-->
            {if $user.breed && $user.breed=='birds'}
            <span class="right">禽类（鸡、鸭）</span>
            {elseif $user.breed && $user.breed=='beasts'}
            <span class="right">畜类（猪）</span>
            {else}
            <span class="right">请选择</span>
            {/if}
            <div class="clearf"></div>
            </div>
            <div class="clearf"></div>
          </div>
          <!--动物类型选择底部固定-->
          <div id="animal_type" style="display:none">
            <div class="mask"></div>
            <div class="animal-choose-bottom" >
              <div class="animal-choose-lineone">选择动物类型</div>
              <div class="animal-choose-linetwo animal_type_item" data-animal_type="birds">禽类（鸡、鸭）</div>
              <div class="animal-choose-linetwo animal_type_item" data-animal_type="beasts">畜类（猪）</div>
            </div>
          </div>
          <!--级别-->
          <!--
          <div class="grxx-level">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">级别</div>
            <div class="grxx-input right">
              <input placeholder="请输入养殖动物的品种级别" id="generation" value="{$user.generation||''}" 
                class="inputValidation" defaultTip="请填写正确的级别" minLength="2" maxLength="20">
            </div>
            <div class="clearf"></div>
          </div>
          -->
          <!--邮箱-->
          <div class="grxx-mail">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">邮箱</div>
            <div class="grxx-input right">
              <input placeholder="请输入常用邮箱" id="email" value="{$user.email||''}" 
                class="inputValidation" defaultTip="请填写正确的邮箱" minLength="6" maxLength="50" pattern="email">
            </div>
            <div class="clearf"></div>
          </div>
        </div>
        <a class="center-btn login-finbtn" href="javascript:void(0);" id="save">保存</a>
      </section>
    </script>
  </div>

  <!-- 地区选择 -->
  <?php include "../common/choose_area.php" ?>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/person_edit.js"></script>




