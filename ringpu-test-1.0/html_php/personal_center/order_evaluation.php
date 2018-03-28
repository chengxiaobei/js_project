<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>评价</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style3.css">
<link type="text/css" rel="stylesheet" href="../../public/css/swiper.css">

</head>
<body>
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="order_product_list_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>评价</h2>
      </header>
      <section class="main-section">
        {foreach $order_product_list as $key=>$value}
          <!--物品1-->
          <div class="eval-pro-box order_product_item" id="{$value.product_code}">
          	<div class="eval-pro-praise">
          	  <!--商品图片-->
          	  <div class="eval-pro-img left">
          	  	<img src="{$value.picture}">
          	  </div>
          	  <!--商品评价-->
    	  	  <div class="eval-pro-np left">
        	    <div class="eval-pro-name">{$value.title}</div>
    	  	    <ul class="eval-pro-ping">
    	  	      <!--选中是蓝色 eval-blue ，没选中是灰色 eval-grey-->
    	  	   	  <li class="eval-blue p-evaluation" data-votes="5">好评</li>
    	  	  	  <li class="eval-grey p-evaluation" data-votes="3">中评</li>
    	  	  	  <li class="eval-grey p-evaluation" data-votes="1">差评</li>
    	  	  	  <div class="clearf"></div>
    	  	    </ul>
          	  <div class="clearf"></div>
    	      </div>
    	      <div class="clearf"></div>
          	</div>
          	<!--评论框-->
          	<div class="eval-pro-write">
          	  <textarea placeholder="写评价..." class="content_info"></textarea>
          	</div>
          	<!--图片-->
            <div class="eval-pro-plimg product_img_list">
              <ul>
                <!-- 
                  <li><img src="../../public/images/sc_pro_img2.jpg"></li>
                  <li><img src="../../public/images/sc_pro_img2.jpg"></li>
                  <li><img src="../../public/images/sc_pro_img2.jpg"></li> 
                -->
                <li class="eval-pro-addimg">
                  <a class="file_trigger" href="javascript:void(0);"><img src="../../public/images/eval-addimg.png"></a>
                  <input type="file" accept="image/*"  multiple="multiple">
                 </li>
                <div class="clearf"></div>
              </ul>
            </div>
          </div>
        {/foreach}

        <!--服务评分--> 
        <div class="eval-pro-score">
        	<div class="eval-pro-ser">服务评分</div>
        	<div class="eval-pro-speed">
        	  <ul>
        	  	<li>
        	  	  <div class="eval-pro-sp left">商品包装</div>
        	  	  <ul class="right" id="package_votes">
        	  	  	<li class="eval-star-y p-evaluation-star"><a href="javascript:void(0);" ></a></li>
        	  	  	<li class="eval-star-y p-evaluation-star"><a href="javascript:void(0);" ></a></li>
        	  	  	<li class="eval-star-y p-evaluation-star"><a href="javascript:void(0);" ></a></li>
        	  	  	<li class="eval-star-y p-evaluation-star"><a href="javascript:void(0);" ></a></li>
        	  	  	<li class="eval-star-y p-evaluation-star"><a href="javascript:void(0);"></a></li>
        	  	  	<div class="clearf"></div>
        	  	  </ul>
        	  	  <div class="clearf"></div>
        	  	</li>
        	  	<li>
        	  	  <div class="eval-pro-sp left">物流速度</div>
        	  	  <ul class="right" id="delivery_votes"> 
        	  	  	<li class="eval-star-y p-evaluation-star"><a href="javascript:void(0);" ></a></li>
        	  	  	<li class="eval-star-y p-evaluation-star"><a href="javascript:void(0);" ></a></li>
        	  	  	<li class="eval-star-y p-evaluation-star"><a href="javascript:void(0);" ></a></li>
        	  	  	<li class="eval-star-y p-evaluation-star"><a href="javascript:void(0);" ></a></li>
        	  	  	<li class="eval-star-y p-evaluation-star"><a href="javascript:void(0);" ></a></li>
        	  	  	<div class="clearf"></div>
        	  	  </ul>
        	  	  <div class="clearf"></div>
        	  	</li>
        	  </ul>
        	</div>
        </div>


        <!--发表评价-->
        <div class="center-total">
            <!--选中 eval-checked   没选中 eval-check-->
            <div class="eval-anon eval-checked left is_anonymous">匿名评价</div>
    	      <div class="order-xp-shou-btn right"><a href="javascript:void(0);" id="publish_evaluation">发表评价</a></div>
    	      <div class="clearf"></div>	    
        </div>
      </section>
    </script>
  </div>

  <!-- 提示信息 -->
  <div class="center-tc tip-info" style="display:none;">
      <div></div>
  </div>


  <!-- 图片预览 -->
  <div class="whiteBg deledt-bg" style="display:none" id="rp_preview_wrap">
    <div class="wrap">
      <header>
         <a class="back-btn backButton"></a>
         <h2>
           <!--span标签不要换行-->
           <span id="carousel_num">5</span><span>/</span><span id="total_num">6</span> 
         </h2>
         <a class="delete-btn"></a>
      </header>
      <section class="main-section">
        <!-- 轮播图主容器 -->
        <div class="ylpic-mainlb ylpic-imgtop oa-carousel swiper-container">
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
  </div>

</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/order_evaluation.js"></script>




