<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>更换手机号1</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body>
  <div class="wrap" id="wrap1">
    <header>
      <a class="back-btn backButton" href="javascript:void(0);"></a>
      <h2>更换手机号</h2>
    </header>
    <section class="main-section">
      <!--请输入您注册的手机号-->
      <div class="ghsjh-regphone">
        <div style="line-height:35px!important;" class="ghsjh-tit">请输入您注册的手机号</div>
        <div class="ghsjh-input" style="padding:2px 0;">
          <input style="padding:0!important;" placeholder="请输入11位手机号" id="phone_register" type="tel" required="required" maxLength="11">
        </div>
      </div>
      <!--请输入您想要绑定的手机号-->
      <div class="ghsjh-pound">
        <div style="line-height:35px!important;" class="ghsjh-tit">请输入您想要绑定的手机号</div>
        <div class="ghsjh-input" style="padding:2px 0;">
          <input style="padding:0!important;" placeholder="请输入11位手机号" id="phone_update" type="tel" required="required" maxLength="11">
        </div>
      </div>
      <!--下一步按钮-->
      <div class="ghsjh-btn "><a href="javascript:void(0);" id="step_one" class="grey-bluebtn">下一步</a></div>
    </section>
  </div>

  <div class="wrap" id="wrap2" style="display:none;">
    <div class="center-tc tip-info" style="display:none;">
      <div>验证码发送成功，请查收！</div>
    </div>
    <header>
      <a class="back-btn backButton" href="javascript:void(0);"></a>
      <h2>更换手机号</h2>
    </header>
    <section class="main-section">
      <!--我们已将验证短信发送到您的手机上-->
      <div class="ghsjh-regphone">
        <div class="ghsjh-tit">我们已将验证短信发送到您的手机上</div>
        <div class="ghsjh-input left">
          <input placeholder="请输入短信验证码" id="checkcode" type="tel" required="required" maxLength="6">
        </div>
        <a class="ghsjh-codebtn right" href="javascript:void(0);" id="sendCheckCode">发送验证码</a>
        <div class="clearf"></div>
      </div>
      <!--确认更换按钮-->
      <div class="ghsjh-btn"><a href="javascript:void(0);" id="submit_update" class="grey-bluebtn">确认更换</a></div>
    </section>
  </div>
</body>
</html>

<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/phone_edit.js"></script>




