<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>确认订单</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style1.css">
</head>
<body>
  <div class="wrap">
    <header>
      <a class="back-btn"></a>
      <h2>确认订单</h2>
    </header>
    <section class="main-section sc-bar-section sc-top-section" id="maincontent">
     <script id="jsmart_tpl" type="text/x-jsmart-tmpl">
     
      {if $data.receiver}
      <div class="sc-shdz-con chooseaddress" data-code={$data.receiver.code}>
        <!-- 姓名和电话 -->
        <div class="name-con">
          <div class="left name-div">
            <p>收货人：{$data.receiver.receiver}</p>
          </div>
          <div class="right phone-div">
            <p>{$data.receiver.telphone}</p>
          </div>
          <div class="clearf"></div>
        </div>
        <!-- 收货地址 -->
        <div class="address-con">
          <p class="address-p">{$data.receiver.province}{$data.receiver.city}{$data.receiver.area}{$data.receiver.detail}</p>
        </div>
      </div>
      {else}
       <!-- 收货地址模块 -->
      <div class="sc-shdz-con sc-shdz-add-con chooseaddress">
        <!-- 添加收货地址 -->
        <div class="add-address-con">
          <p class="add-address-p">添加收货地址</p>
        </div>
      </div>
      {/if}
      <!-- 标题 -->
      <div class="sc-ddxq-title-con">
        <p>商品信息</p>
      </div>
      <!-- 商品信息模块 -->
      <ul class="sc-ddxq-spxx-con">
      {foreach $goodslist as $key =>$value}
        <li>
          <!-- 商品图片 -->
          <div class="img-con">
            <div class="img-div">
              <img src="{$value.picture}">
            </div>
          </div>
          <!-- 商品信息 -->
          <div class="info-con">
            <!-- 商品名称 -->
            <div class="name-con">
              <p>{$value.name}</p>
            </div>
            <!-- 商品描述 -->
            <div class="discribe-con">
              <p>{$value.attribute}</p>
            </div>
            <!-- 商品价格和数量 -->
            <div class="price-con">
              <div class="left price-div">
                <p><span>{$value.price}</span>元</p>
              </div>
              <div class="right num-div">
                <p>×{$value.products}</p>
              </div>
              <div class="clearf"></div>
            </div>
          </div>
          <div class="clearf"></div>
        </li>
        {/foreach}       
      </ul>
      <!-- 索要发票模块 -->
      <div class="sc-syfp-con">
        <!-- label和开关 -->
        <div class="label-con">
          <div class="left label-div">
            <p>索要发票</p>
          </div>
          <div class="right switch-div">
            <!-- 开关按钮开启时类为switch-btn-on,关闭时类为switch-btn-off -->
            <a class="switch-btn-off" id="switch_btn"></a>
          </div>
          <div class="clearf"></div>
        </div>
        <!-- 输入发票抬头 -->
        <div class="fp-input-con" id="bill" style='display:none'>
          <input id="bill_content" class="fp-input" type="text" placeholder="请输入发票抬头" maxlength="40">
        </div>
      </div>
      <!-- 备注 -->
      <ul class="sc-ddxq-beizhu-con">
        <li>
          <div class="left label-con">
            <p>备注</p>
          </div>
          <div class="right content-con">
            <input id="leavemsg" class="beizhu-input" type="text" placeholder="给商家留言">
          </div>
          <div class="clearf"></div>
        </li>
      </ul>
      <!-- 优惠券 -->
      <ul class="sc-ddxq-yhq-con" id="usecoupon">
        <li>
          <div class="left label-con">
            <p>优惠券</p>
          </div>
          <div class="right content-con">
            <p class="youhuiquan-p">{if $coupon}{$coupon.name}{/if}</p>
          </div>
          <div class="clearf"></div>
        </li>
      </ul>
      <!-- 商品金额和运费 -->
      <ul class="sc-ddxq-price-con">
        <li>
          <div class="left label-con">
            <p>商品金额</p>
          </div>
          <div class="right content-con">
            <p class="price-p">{$data.product_price}元</p>
          </div>
          <div class="clearf"></div>
        </li>
        <li>
          <div class="left label-con">
            <p>运费</p>
          </div>
          <div class="right content-con">
            <p class="price-p">{$data.total_express_price}元</p>
          </div>
          <div class="clearf"></div>
        </li>
      </ul>
      <!-- 底部总价条 -->
      <div class="sc-total-price-bar" style="z-index:599">
        <!-- 价格 -->
        <div class="left price-div">
          <p>共<span>{$data.price}</span>元</p>
        </div>
        <!-- 按钮 -->
        <a class="right nor-btn" id="addorder">提交订单</a>
        <div class="clearf"></div>
      </div>
     </script> 
    </section>
  </div>
</body>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/shopping_store/order.js"></script>
</html>


