<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>商城首页</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style1.css">
</head>
<body>
  <div class="wrap">
   <script id="jsmart_tpl" type="text/x-jsmart-tmpl">
    <header>
      <!--<a class="back-btn" href=""></a>-->
      <!-- 搜索框模块 -->
      <div class="sc-h-search-con">
        <!-- 左边的搜索按钮 -->
        <a class="search-btn"></a>
        <!-- 输入框 -->
        <input class="search-input" type="text" placeholder="搜索" readonly=true>
        <!-- 右边的清除按钮 -->
        <a class="clear-btn"></a>
      </div>
      <a class="class-btn" id="type"></a>
    </header>
    <section class="main-section">
      <!-- 销量冠军 -->
      <!-- 商品主容器 -->
      {foreach $data as $key =>$value}
         {if $value.type == "P"&&$value.items.length>0}
	      <div class="sc-product-con">
	        <!-- 标题模块 -->
	        <div class="title-div">
	          <h1 class="left xlgj-h1" style=" background:rgba(0, 0, 0, 0) url('{$value.icon}') no-repeat scroll left center / 15px auto;">{$value.name}</h1>
	          <div class="clearf"></div>
	        </div>
	        <!-- 商品列表 -->
	        <ul class="sc-xlgj-ul">
	          <!-- 最后一排的li添加类no-borbottom -->
	          {foreach $value.items as $k =>$v}
	          <li data-code={$v.goods_code}>
	            <div class="pro-item-con">
	              <!-- 图片容器 -->
	               <div class="img-con defaultimg" data-original='{$v.picture}' style="background: url('../../public/images/default-head.png') no-repeat center center #fff;">
                   
                   </div>
	              <!-- 商品名称和规格 -->
	              <div class="name-con">
	                <div class="name-div">
	                  <p>{$v.title}</p>
	                </div>
	                <div class="weight-div">
	                  <p>{if $v.is_show_price == 1}{$v.price}元{/if}</p>
	                </div>
	              </div>
	              <!-- 标签 -->
	              <div class="tag-con">
	               {if $v.taglist.length>0}
		               {foreach $v.taglist as $x =>$y}
		                <span class="left">{$y}</span>
		               {/foreach}
	               {/if}
	               <div class="clearf"></div> 
	              </div>
	            </div>
	          </li>
	         {/foreach}
	        </ul>
	        <div class="clearf"></div>
	      </div>
      {/if}
      {if $value.type == "BP"&&$value.items.length>0}
      <!-- 超低价 -->
      <!-- 商品主容器 -->
      <div class="sc-product-con">
        <!-- 标题模块 -->
        <div class="title-div">
          <h1 class="left cdj-h1" style=" background:rgba(0, 0, 0, 0) url('{$value.icon}') no-repeat scroll left center / 14px auto;">{$value.name}</h1>
          <div class="clearf"></div>
        </div>
        <!-- 超低价商品列表 -->
        <ul class="sc-cdj-ul">
        {foreach $value.items as $k =>$v}         
          <li data-code={$v.goods_code}>
            <!-- 商品图片容器 -->
            <div class="pro-img-con">
              <div class="pro-img-div">
                <img src="../../public/images/default-head.png" data-original='{$v.picture}'>
              </div>
            </div>
            <!-- 商品信息容器 -->
            <div class="pro-info-con">
              <!-- 商品信息 -->
              <div class="left pro-info-div">
                <div class="name-con">
                  <div class="left name-div">
                    <p>{$v.title}</p>
                  </div>
                  <div class="left weight-div">
                    {if $v.taglist.length>0}
                    <p>{$v.taglist[0]}</p>
                    {/if}
                  </div>
                  <div class="clearf"></div>
                </div>
                <div class="explain-con">
                  <p>{$v.brief}</p>
                </div>
              </div>
              <!-- 商品价格 -->
              <div class="right pro-price-div">
                <p class="now-price">{if $v.is_show_price == 1}{$v.price}元{/if}</p>
                <p class="origin-price">{if $v.is_show_price == 1}{$v.old_price}元{/if}</p>
              </div>
              <div class="clearf"></div>
            </div>
            <div class="clearf"></div>
          </li>
         {/foreach} 
        </ul>
      </div>
       {/if}
       {if $value.type == "PC"&&$value.items.length>0}
      <!-- 热门分类 -->
      <!-- 商品主容器 -->
      <div class="sc-product-con">
        <!-- 标题模块 -->
        <div class="title-div">
          <h1 class="left rmfl-h1" style=" background:rgba(0, 0, 0, 0) url('{$value.icon}') no-repeat scroll left center / 14px auto;">{$value.name}</h1>
          <!--<a class="right more-btn" href="">更多</a>-->
          <div class="clearf"></div>
        </div>
        <!-- 热门分类列表商品大块儿 -->
        <ul class="sc-rmfl-ul-2">
        {foreach $value.items as $k =>$v}
         {if $k<2}   
          <li data-code={$v.shopCat_Id}>
            <p>{$v.name}</p>
            <img src="../../public/images/default-head.png" data-original='{$v.picture}'>
          </li>
         {/if}
        {/foreach}
        </ul>
        <div class="clearf"></div>
        <!-- 热门分类列表商品小块儿 -->
        <ul class="sc-rmfl-ul-4">
          <!-- 最后一排的li添加类no-borbottom -->
         {foreach $value.items as $k =>$v}
          {if $k>=2}
          <li data-code={$v.shopCat_Id}>
            <p>{$v.name}</p>
            <img src="../../public/images/default-head.png" data-original='{$v.picture}'>
          </li>
          {/if}
         {/foreach}           
        </ul>
        <div class="clearf"></div>
      </div>
       {/if}
      {/foreach}
      <!-- 购物车主容器 -->
      <div class="sc-gwc-main-con">
        <!-- 购物车按钮模块 -->
        <div class="gwc-btn-con gwc-btn-con-shrink">
          <!-- 按钮 -->
          <a class="gwc-btn" id="cart"></a>
          <!-- 数字 -->
          <div class="gwc-num" style="display:none"><span id="goodsnum">0</span></div>
        </div>
      </div>
      <!-- 底部总价条 -->
     <!--
      <div class="sc-total-price-bar">
        <div class="left price-div price-div-ml">
          <p>共<span>98</span>元</p>
        </div>
        <a class="right nor-btn" id='next'>去下单</a>
        <div class="clearf"></div>
      </div>
      -->
    </section>
   </script>
  </div>
</body>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/shopping_store/index.js"></script>
</html>


