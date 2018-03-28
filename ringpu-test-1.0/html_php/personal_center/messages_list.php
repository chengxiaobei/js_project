<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>消息中心</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body class="main-body2">
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="messages_list_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>消息中心</h2>
      </header>
      <section class="main-section" id="messages_list" style="margin-top:56px;">
        {if $data}
          {foreach $data as $key=>$value}
            <div class="xxzx-box" style="margin-top:10px;">
              <div class="xxzx-time time_{$key}">{$value.created}</div>
              <div class="xxzx-con">
                <ul>
                  {if $value.items}
                    {foreach $value.items as $k=>$v}
                      {if $v.type == "MS80001"}
                      <li class="xxzx-logo xxzx-logo6" data-type="{$v.type}" data-id="{$v.content|getMsgId}" data-modules_code="{$v.content|getModules_code}"><div>{$v.title}</div></li>
                      {elseif $v.type == "MS10003"||$v.type == "MS10001"||$v.type == "MS10002"}
                       <li class="xxzx-logo xxzx-logo3" data-type="{$v.type}" data-id="{$v.content|getMsgId}" data-modules_code="{$v.content|getModules_code}"><div>{$v.title}</div></li>
                      {elseif $v.type == "MS20001"||$v.type == "MS20002"||$v.type  == "MS20004"||$v.type  == "MS20006"}
                       <li class="xxzx-logo xxzx-logo1" data-type="{$v.type}" data-id="{$v.content|getMsgId}" data-modules_code="{$v.content|getModules_code}"><div>{$v.title}</div></li>
                      {elseif $v.type == "MS30001"}
                       <li class="xxzx-logo xxzx-logo4" data-type="{$v.type}" data-id="{$v.content|getMsgId}" data-modules_code="{$v.content|getModules_code}"><div>{$v.title}</div></li>                                            
                      {/if}
                    {/foreach}
                  {/if}
                  <!--
                    <li class="xxzx-logo2"><div>您的检测1234567病料已被登记</div></li>
                    <li class="xxzx-logo3"><div>您的检测1234567用药方案可以查看了</div></li>
                    <li class="xxzx-logo4"><div>您的订单1234567已发货</div></li>
                    <li class="xxzx-logo5"><div>您的订单1234567已签收，记得来评价哦</div></li>
                    <li class="xxzx-logo6"><div>APP新版上线，欢迎体验</div></li>
                  -->
                </ul>
              </div>
            </div>
          {/foreach}
        {/if}
      </section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/messages_list.js"></script>




