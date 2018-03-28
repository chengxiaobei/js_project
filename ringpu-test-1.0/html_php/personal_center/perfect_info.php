<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>完善信息</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style3.css">
</head>
<body class="main-body2">
  <div class="wrap" id="wrap1">
    <header>
      <a class="close-btn backButton" href="javascript:void(0);"></a>
      <h2>完善信息</h2>
    </header>
    <section class="main-section">
      <div class="wsxx-headpor">
        <img src="../../public/images/wsxx-headpor.png" id="avatar">
        <div style="color:#999;font-size:12px;position:absolute;text-align:center;top:60%;width:100%;">上传头像</div>
        <input type="file" id="avatar_input" accept="image/*">
      </div>
      <div class="reg-box perfect-information">
        <!--用户名-->
        <div class="login-phone">
          <div class="login-sjmm left">昵称</div>
          <div class="login-input left">
            <input placeholder="请输入昵称" id="nickname" 
              class="inputValidation" defaultTip="请填写正确昵称" minLength="4" maxLength="20">
          </div>
          <div class="clearf"></div>
        </div>
        <!--用户名-->
        <div class="login-phone">
          <div class="login-sjmm left">姓名</div>
          <div class="login-input left">
            <input placeholder="请输入您的真实姓名" id="username" 
              class="inputValidation" defaultTip="请填写正确的姓名" minLength="4" maxLength="20">
          </div>
          <div class="clearf"></div>
        </div>
        <!--地区-->
        <div class="login-phone">
          <div class="login-sjmm left">地区</div>
          <div class="wsxx-area left" id="choose_area">
            <span class="right">请选择</span>
            <a class="wsxx-choose wsxx-choosechecked" href="javascript:void(0);"></a>
            <div class="clearf"></div>
          </div>
          <div class="clearf"></div>
        </div>
        <div class="login-phone">
          <div class="login-sjmm left">养殖厂名</div>
          <div class="login-input left">
            <input placeholder="请输入养殖厂单位名称" id="client_unit" 
              class="inputValidation" defaultTip="请填写正确的养殖厂名称" minLength="5" maxLength="40">
          </div>
          <div class="clearf"></div>
        </div>
        
        <div class="login-phone">
          <div class="login-sjmm left">全场养殖量</div>
          <div class="login-input left">
            <input placeholder="请输入数字" id="all_nums"  
              class="inputValidation" minLength="2" defaultTip="请填写正确的全场养殖量" maxLength="20" pattern="float" style="width:83%;">
            <p class="right" id="wanyu" style="margin-top:5px;display:none;">万羽</p>
            <p class="right" id="tou" style="margin-top:5px;display:none;">头</p>
          </div>
          <div class="clearf"></div>
        </div>
        
<!--         <div class="login-phone">
          <div class="login-sjmm left">养殖品种</div>
          <div class="login-input right animal_type_choose">
            <span class="right">请选择</span>
            <div class="clearf"></div>
          </div>
          <div class="clearf"></div>
        </div> -->
        <!--动物类型选择底部固定-->
 <!--        <div id="animal_type" style="display:none">
          <div class="mask"></div>
          <div class="animal-choose-bottom" >
            <div class="animal-choose-lineone">选择动物类型</div>
            <div class="animal-choose-linetwo animal_type_item" data-animal_type="birds">禽类（鸡、鸭）</div>
            <div class="animal-choose-linetwo animal_type_item" data-animal_type="beasts">畜类（猪）</div>
          </div>
        </div> -->
        <!--
        <div class="login-phone">
          <div class="login-sjmm left">级别</div>
          <div class="login-input left">
            <input placeholder="请输入养殖动物的品种级别" id="generation" 
              class="inputValidation" defaultTip="请填写正确的级别" minLength="2" maxLength="20">
          </div>
          <div class="clearf"></div>
        </div>
        -->
        <!--邮箱-->
        <div class="login-password">
          <div class="login-sjmm left">邮箱</div>
          <div class="login-input left">
            <input placeholder="请输入常用邮箱" id="email" 
              class="inputValidation" defaultTip="请填写正确的邮箱" minLength="6" maxLength="50" pattern="email">
          </div>
          <div class="clearf"></div>
        </div>
      </div>
      <a class="center-btn login-finbtn" href="javascript:void(0);" id="person_edit">完成</a>
    </section>
  </div>

  <!-- 地区选择 -->
  <?php include "../common/choose_area.php" ?>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/perfect_info.js"></script>




