<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>评价</title>
<link type="text/css" rel="stylesheet" href="../../public/css/swiper.css">
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style3.css">
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style1.css">

<style>
.ovfHiden{overflow: hidden;height: 100%;}
</style>
</head>
<body>
  <div class="wrap" id="rp_preview_wrap" style="display:none;">
    <section class="main-section">
    <!-- 轮播图主容器 -->
     <div class="ylpic-mainlb oa-carousel swiper-container">
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
    <header>
      <a class="back-btn"></a>
      <h2>评价</h2>
    </header>
    <section class="main-section sc-pj-section">
      <!-- 评价切换条模块 -->
      <div class="sc-pj-switch-con">
        <ul class="sc-pj-switch-ul">
          <li data-code="all" class="curr-li">
            <p>全部({$all_count})</p>
          </li>
          <li data-code="prefect">
            <p>好评({$perfect_count})</p>
          </li>
          <li data-code="normal">
            <p>中评({$ok_count})</p>
          </li>
          <li data-code="bad">
            <p>差评({$negative_count})</p>
          </li>
        </ul>
      </div>
      <!-- 评价列表模块 -->
      <div id="eva_list">
	      
      </div>      
    </section>
   </script>
  </div>
</body>
<script id="jsmart_tpl_item" type="text/x-jsmart-tmpl">
<!-- 评价列表模块 -->
     <div class="sc-pj-list-con">
	   <ul class="sc-pj-list-ul">
	  {foreach $page_data as $key=>$value}
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
				    <div class="left img-clip-div defaultimg"  data-index={$k} data-original='{$v.common_pic_url}' style="background: url('../../public/images/default-head.png') no-repeat center center #fff;"></div>
				   {/foreach}
				    <div class="clearf"></div>
				  </div>
			  {/if}
		  </div>
	   </li>	   		 
	 {/foreach}
	 </ul>
   </div>  		
</script>
<script id="jsmart_tpl_item_more" type="text/x-jsmart-tmpl">
<!-- 评价列表模块 -->
	  {foreach $page_data as $key=>$value}
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
				   <div class="left img-clip-div defaultimg"  data-index={$k} data-original='{$v.common_pic_url}' style="background: url('../../public/images/default-head.png') no-repeat center center #fff;"></div>
				   {/foreach}
				    <div class="clearf"></div>
				  </div>
			  {/if}
		  </div>
	   </li>
	 {/foreach}		
</script>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/shopping_store/evaluate.js"></script>
</html>


