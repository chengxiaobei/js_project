<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>商品详情</title>
<link type="text/css" rel="stylesheet" href="../../public/css/swiper.css">
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style3.css">
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style1.css">
<style>
.pagination {
  position: absolute;
  z-index: 20;
  bottom: 10px;
  width: 66px;
  text-align: center;
  right:40%;
}
.swiper-pagination-bullet {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius:5px;
  background: #fff;
  margin: 0 2px;
  opacity: 0.8;
  cursor: pointer;
}
.swiper-pagination-bullet-active {
  background: #1fa8ec;
}
.ovfHiden{overflow: hidden;height: 100%;}
</style>
</head>
<body>
    <div class="wrap" id="rp_preview_wrap" style="display:none;">
    <section class="main-section">
    <!-- 轮播图主容器 -->
     <div class="ylpic-mainlb oa-carousel swiper-container container-comment">
      <!-- 轮播图 -->
      <ul class="oa-carousel-list ylpic-mainlb-ul swiper-wrapper">
        <li class="oa-carousel-list-item">
          <div class="ylpic-mainlb-div">
            <img src="../../public/images/yzzx_img3.png">
          </div>
        </li>
        <li class="oa-carousel-list-item">
          <div class="ylpic-mainlb-div">
            <img src="../../public/images/yzzx_img3.png">
          </div>
        </li>
        <li class="oa-carousel-list-item">
          <div class="ylpic-mainlb-div">
            <img src="../../public/images/yzzx_img3.png">
          </div>
        </li>
      </ul>
      <div class="swiper-pagination"></div>
      <div class="clearf"></div>
    </div>
   </section>
  </div>  
  <div class="wrap" id="maincontent">
   <script id="jsmart_tpl" type="text/x-jsmart-tmpl">
    <div id="top"></div>
    <header>
      <a class="back-btn"></a>
      <!-- 切换 -->
      <div class="sc-splc-switch-con">
        <ul class="sc-splc-switch">
          <li class="curr-li good" data-code="good">
            <p>商品</p>
          </li>
          <li class="detail" data-code="detail">
            <p>详情</p>
          </li>
          <li data-code="comment">
            <p>评价</p>
          </li>
        </ul>
        <div class="clearf"></div>
      </div>
      <!--<a class="share-btn"></a>-->
      <!-- <h2>详情</h2>-->
    </header>
    <section class="main-section sc-bar-section sc-top-section">
      <!-- 商品详情及数量模块 -->
      <div class="sc-splc-pinfo-con">
        <!-- 商品图片容器 -->
        <div class="img-con swiper-container container-good">
          <!-- 轮播图 -->         
          <ul class="lb-img-ul swiper-wrapper" data-multiple_imgs='{$product_info.picture_list|jsonstr}'>
           {foreach $product_info.picture_list as $key =>$value}
            <li class="swiper-slide defaultimg"  data-index={$key}  style="background:url('../../public/images/default-head.png') no-repeat center center #fff;" data-original='{$value.common_pic_url}'></li>
           {/foreach} 
          </ul>
          <div class="pagination"></div>      
         <!--<div class="clearf"></div>
          <ul class="lb-point-ul">
            <li class="curr-li"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="clearf"></div>-->
        </div>
        <!-- 商品信息 -->
        <div class="pro-info-con">
          <!-- 商品名 -->
          <div class="pro-name-div">
            <p>{$product_info.title}</p>
          </div>
          <!-- 商品价格 -->
          <div class="pro-price-div">
          {if $product_info.is_show_price == 1}
          {if $product_info.sale_money_min_max_entity.min_sale_money&&$product_info.sale_money_min_max_entity.max_sale_money
          	&&$product_info.sale_money_min_max_entity.max_sale_money!=$product_info.sale_money_min_max_entity.min_sale_money
          	&&$product_info.sale_money_min_max_entity.max_sale_money!=""&&$product_info.sale_money_min_max_entity.max_sale_money!="null"
          	&&$product_info.sale_money_min_max_entity.min_sale_money!=""&&$product_info.sale_money_min_max_entity.min_sale_money!="null"}
            <p><span>{$product_info.sale_money_min_max_entity.min_sale_money}元</span>~<span>{$product_info.sale_money_min_max_entity.max_sale_money}元</span></p>
          {else}
            <p><span>{$product_info.price}元</span></p>
          {/if}
          {/if} 
          </div>
          <!-- 其它信息 -->
          <div class="pro-order-div">
            <span class="left">已售:{$product_info.amount}件</span>
            <span class="left">{$product_info.product_delivery_entity.message}</span>
            <div class="clearf"></div>
          </div>
        </div>
      </div>
      <!-- 选择规格 -->
      {if $property_money_list&&$product_info.is_show_price == 1}
      <ul class="sc-sel-spec-con">
        <li>
          <div class="left label-con">
            <p>选择规格</p>
          </div>
          <div class="right content-con">
            <p class="spec-p"></p>
          </div>
          <div class="clearf"></div>
        </li>
      </ul>
      {/if}
      <!-- 评价模块 -->
      <div class="sc-pj-list-con">
        <!-- 头部的评价信息 -->
        <div class="sc-splc-phead-con" id="evaluate">
          <div class="sc-splc-phead-div">
            <p>评价 {if $all_count>0}（{$all_count}人，好评{$perfect_rate}）{/if}</p>
          </div>
        </div>
        <!-- 评价列表 -->
       
        <ul class="sc-pj-list-ul">
         {if $comment_list.length>0}
          {foreach $comment_list as $key=>$value}
          <li data-multiple_imgs='{$value.picture_list_for_comment|jsonstr}'>
            <!-- 头像模块 -->
            <div class="img-con">
              <img src="{$value.avatar}">
            </div>
            <!-- 详细评论 -->
            <div class="comm-detail-con">
              <!-- 用户名和星 -->
              <div class="name-con">
                <div class="left name-div">
                  <p>{$value.nick_name}</p>
                </div>
                <div class="clearf"></div>
              </div>
              <!-- 日期 -->
              <div class="date-con">
                <p>{$value.created|rpdate}</p>
              </div>
              <!-- 评论内容 -->
              <div class="comm-text-con">
                <p>{$value.commnet_content}</p>
              </div>
              <!-- 图片 -->
			  {if $value.format == "2"&&$value.picture_list_for_comment.length>0}
				  <div class="comm-img-con">
				   {foreach $value.picture_list_for_comment as $k=>$v}
				   <div class="left img-clip-div defaultimg"  data-index={$k} style="background:url('../../public/images/default-head.png') no-repeat center center #fff;" data-original='{$v.common_pic_url}'></div>
				   {/foreach}
				    <div class="clearf"></div>
				  </div>
			  {/if}
            </div>
          </li>
          {/foreach}
          {else}
	          <li class="no-comment-li">
	            <!-- 暂无评价模块 -->
	            <div class="no-comment-div">
	              <p>暂无评价</p>
	            </div>
	          </li>
          {/if}           
        </ul>

      </div>
      <!-- 详情说明模块 -->
      <div class="sc-splc-detail-con" id="middle">
        <!-- 标题 -->
        <div class="title-div">
          <p>详情</p>
        </div>
        <!-- 内容 -->
        <div class="content-div">
	      {if $product_info.content}
	        {$product_info.content}
	      {/if}          
        </div>
      </div>
      <!-- 购物车主容器 -->
            <!-- 选择数量和规格模块 -->
      <div id="choose" style="display:none">
          <div class="mask" id="hidemask"></div>      
	      <div class="sc-sel-slgg-con">
	        <!-- 关闭按钮 -->
	        <a class="close-btn" id="closechoose"></a>
	        <!-- 商品信息模块 -->
	        <div class="pro-info-con">
	          <!-- 商品图片 -->
	          <div class="img-div">
	            <img id="goodimg" src="{$product_info.picture_list[0].common_pic_url}">
	          </div>
	          <!-- 商品信息 -->
	          <div class="pro-info-div">
	          {if $property_money_list&&$property_money_list.length>0}
	            <p class="price-p" id="changeprice">{$product_info.sale_money_min_max_entity.min_sale_money}元<span style="color:#999999">~</span>{$product_info.sale_money_min_max_entity.max_sale_money}元</p>
	          {else}
	            <p class="price-p" id="changeprice">{$product_info.price}元</p>
	          {/if} 
	            <p class="kucun-p">库存 <span id="changerepertory">{$product_info.quantity}</span>件</p>
	      
	          </div>
	        </div>
	        {if $property_money_list&&$property_money_list.length>0}
		        <!-- 商品规格模块 -->
		        {foreach $property_list as $key => $value}
			        <div class="pro-spec-con">
			          <h1>{$value.title}</h1>
			          <ul class="spec-ul">
			          {foreach $value.items as $k => $v}
			            <li class="" data-picture='{$v.picture_list[0].picture}'  data-property={$value.property_id} data-code={$value.property_id+':'+$v.value_id}>{$v.name}</li>		                 
			          {/foreach}
			          </ul>
			          <div class="clearf"></div>
			        </div>
		        {/foreach}
	        {/if}
	        <!-- 商品数量模块 -->
	        <div class="pro-num-con">
	          <h1>购买数量</h1>
	          <!-- 选择数量 -->
	          <div class="num-div">
	            <a class="left minus-btn minus-btn-dis {if $product_info.quantity<=1}minus-btn-dis{/if}"></a>
	            <span class="left num-span" id="buynum">1</span>
	            <a class="right plus-btn {if $product_info.quantity<=1}plus-btn-dis{/if}"></a>
	            <div class="clearf"></div>
	          </div>
	        </div>
	         <!--提示模块-->
	        <div id="selectspec" class="alert-div" style="display:none">
	          <p></p>
	        </div>
	      </div>
      </div>
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
    {if $product_info.is_show_price == 1}
      <div class="sc-total-price-bar" >
        <!-- 价格 -->
       <!--
        <div class="left price-div price-div-ml">
          <p>共<span>98</span>元</p>
        </div>
       -->
        <!-- 按钮 -->
        <a class="right nor-btn" id="next">加入购物车</a>
        <div class="clearf"></div>
      </div>
    {/if}
    </section>
   </script>
  </div>
</body>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/shopping_store/detail.js"></script>
</html>


