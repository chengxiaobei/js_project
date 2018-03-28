<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>产品反馈</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<!-- 产品反馈 -->
<body>
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="feedback_list_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>产品反馈</h2>
      </header>
      <section class="main-section" id="feedback_list">
        <div class="cpfk-box">
          <div class="cpfk-tit">请选择您要反馈的产品</div>
          <!--多一行产品则多加一个ul-->
          <!--第1行产品-->
          {if $data && $data.length>0}
            {foreach $data as $key=>$value}
              {if $key%3==0}
                <ul class="cpfk-row-pro">
              {/if}
              <li class="product_item" data-productname="{$value.product_title}" data-productcode="{$value.product_code}" data-feedback_id="{$value.feedback_id}">
                <div class="pro-name">{$value.product_title}</div>
                <img src="{$value.product_picture}">
              </li>
              {if $key%3==2}
                  <div class="clearf"></div>
                </ul>
              {elseif $key==($data.length-1)}
                  <div class="clearf"></div>
                </ul>
              {else}
              {/if}
            {/foreach}
            {$data.num}
          {/if}
        </div>
      </section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/product_feedback.js"></script>




