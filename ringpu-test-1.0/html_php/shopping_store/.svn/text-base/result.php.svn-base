<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>商品展示</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style1.css">
</head>
<body>
  <div class="wrap">
    <header>
      <a class="back-btn"></a>
      <!-- 搜索框模块 -->
      <div class="sc-h-search-con">
        <!-- 左边的搜索按钮 -->
        <a class="search-btn"></a>
        <!-- 输入框 -->
        <input class="search-input" type="text" placeholder="搜索" readonly= "true">
        <!-- 右边的清除按钮 -->
        <a class="clear-btn"></a>
      </div>
      <a class="class-btn" id="type"></a>
    </header>
    <section class="main-section  sc-spzs-section">
      <!-- 商品展示切换条模块 -->
      <div class="sc-spzs-switch-con">
        <ul class="sc-spzs-switch-ul">
          <li data-code="multiple">
            <p>综合排序</p>
          </li>
          <li data-code="priceup">
            <p class="tri-down">价格从低到高</p>
          </li>
          <li data-code="salesdown">
            <p>销量从高到低</p>
          </li>
        </ul>
        <div class="clearf"></div>
      </div>
      <!-- 商品主容器 -->
      <div class="sc-product-con">
        <!-- 商品列表 -->
        <ul class="sc-xlgj-ul" id="content">
          <script id="jsmart_tpl" type="text/x-jsmart-tmpl">
          <!-- 最后一排的li添加类no-borbottom -->
          {foreach $product_list as $key => $value}
          <li data-code="{$value.goods_code}">
            <div class="pro-item-con">
              <!-- 图片容器 -->
              <div class="img-con defaultimg"  data-original='{$value.picture}' style="background: url('../../public/images/default-head.png') no-repeat center center #fff;">
                   
              </div>
              <!-- 商品名称和规格 -->
              <div class="name-con">
                <div class="name-div">
                  <p>{$value.title}</p>
                </div>
                <div class="weight-div">
                  <p>{if $value.is_show_price == 1}{$value.price}元{/if}</p>
                </div>
              </div>
              <!-- 标签 -->
              <div class="tag-con">
              {if $value.taglist>0}
	              {foreach $value.taglist as $k =>$v}
	                <span class="left">{$v}</span>
	              {/foreach}
              {/if}
              <div class="clearf"></div> 
              </div>
            </div>
          </li>
       {/foreach}
         </script>
        </ul>
        <div class="clearf"></div>
      </div>
      <!-- 购物车主容器 -->
      <div class="sc-gwc-main-con" >
        <!-- 购物车按钮模块 -->
        <div class="gwc-btn-con gwc-btn-con-shrink">
          <!-- 按钮 -->
          <a class="gwc-btn" id="cart"></a>
          <!-- 数字 -->
          <div class="gwc-num" style='display:none'><span id="goodsnum">0</span></div>
        </div>
      </div>
      <!-- 底部总价条 -->
     <!--
      <div class="sc-total-price-bar">
        <div class="left price-div price-div-ml">
          <p>共<span>98</span>元</p>
        </div>
        <a class="right nor-btn" id="next">去下单</a>
        <div class="clearf"></div>
      </div>
     -->
    </section>
  </div>
</body>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/shopping_store/result.js"></script>
</html>


