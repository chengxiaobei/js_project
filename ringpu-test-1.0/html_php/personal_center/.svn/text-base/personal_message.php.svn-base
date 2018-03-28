<!DOCTYPE html>
<html lang="en">
<head>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>个人信息</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">
</head>
<body class="main-body2">
  
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="personal_message_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>个人信息</h2>
      </header>
      <section class="main-section">
        <!--头像-->
        <div class="wsxx-headpor">
          <img src="{$user.avatar}" style="-webkit-border-radius:92px;border-radius:92px;height:92px;width:92px;">
        </div>
        <!--1-->
        <div class="grxx-content" style="margin-top:40px;">
          <!--昵称-->
          <div class="grxx-username">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">昵称</div>
            <div class="grxx-para right">{$user.nickname}</div>
            <div class="clearf"></div>
          </div>
          <!--姓名-->
          <div class="grxx-name">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">姓名</div>
            <div class="grxx-para right">{$user.username|getRealName}</div>
            <div class="clearf"></div>
          </div>
          <!--地区-->
          <div class="grxx-area">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">地区</div>
            <div class="right grxx-para">{$user.province_name}{$user.city_name}{$user.area_name}</div>
            <div class="clearf"></div>
          </div>
          <!--养殖厂名-->
          <div class="grxx-companyname">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">养殖厂名</div>
            <div class="grxx-para right">{$user.client_unit}</div>
            <div class="clearf"></div>
          </div>


          <!--全场养殖量-->
          <div class="grxx-companyno">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">全场养殖量</div>
            <div class="grxx-para right">
              {$user.all_nums}
              {if $user.all_nums && $user.breed=='birds'}
            <span class="right">万羽</span>
            {elseif $user.all_nums && $user.breed=='beasts'}
            <span class="right">头</span>
            {else}
            {/if}
            </div>
            <div class="clearf"></div>
          </div>

         <!--养殖品种-->
          <div class="grxx-variety">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">养殖品种</div>
            <div class="grxx-para right">
            {if $user.breed && $user.breed=='birds'}
            禽类（鸡、鸭）
            {elseif $user.breed && $user.breed=='beasts'}
            畜类（猪）
            {else}
            {$user.breed}
            {/if}
            </div>
            <div class="clearf"></div>
          </div>

          <!--级别-->
          <!--
          <div class="grxx-level">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">级别</div>
            <div class="grxx-para right">{$user.generation}</div>
            <div class="clearf"></div>
          </div>
          -->
          <!--邮箱-->
          <div class="grxx-mail">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">邮箱</div>
            <div class="grxx-para right" style="max-height:60px;max-width:65%;">{$user.email|truncate:50:''}</div>
            <div class="clearf"></div>
          </div>
        </div>
        <!--2-->
        <div class="grxx-content" >
          <!--手机号-->
          <div class="grxx-phone" style="display:none;" id="phone_go_edit">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">手机号</div>
            <div class="grxx-number right">{$user.telephone|phone_num}</div>
            <div class="clearf"></div>
          </div>
          <!--修改密码-->
          <div class="grxx-xgmm" id="pass_go_edit">
            <div class="grxx-logo left"></div>
            <div class="grxx-tit left">修改密码</div>
            <div class="clearf"></div>
          </div>
        </div>
        <a class="center-btn login-finbtn" href="javascript:void(0);" id="person_edit">编辑</a>
      </section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/personal_message.js"></script>




