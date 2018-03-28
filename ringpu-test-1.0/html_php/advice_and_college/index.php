<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title></title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style1.css">
</head>
<style>
.border-deal{border-top:0px;border-bottom:0px;}
</style>
<body>
  <div class="wrap">
   <div id="maincontent" style="display:none">
    <header>
      <!--<a class="back-btn" href=""></a>-->
      <h2 id='title'></h2>
      <a class="search-btn" id='search'></a>
    </header>
    <section class="main-section yzzx-index-section">
      <!-- 栏目主容器 -->
      <div class="yzzx-column-con">
        <!-- 详细栏目 -->
        <div class="column-div">
          <ul class="column-ul" id='topbar'>
           <script id="jsmart_tpl_top" type="text/x-jsmart-tmpl"> 
	           {foreach $data as $key => $value}
	            <li name ={$value.categories_id} class="{if $key == 0}curr-li{/if} sel_{$value.categories_id}" data-code='{$value.categories_id}'>{$value.categories_name}</li>
	           {/foreach}     
            </script>
          </ul>
          <div class="clearf"></div>
        </div>
        <!-- 栏目按钮 -->
        <!--<div class="column-btn-div">
          <a class="column-btn" id='follow'></a>
        </div>-->
      </div>
      <!-- 资讯模块 -->
      <div class="yzzx-newslist-con">
        <!-- 资讯列表 -->
        <ul class="newslist-ul" id="content">
         <script id="jsmart_tpl_content" type="text/x-jsmart-tmpl"> 
	      {foreach $data.art_List as $key => $value}
           {if $value.format == '1'}
	          <li data-id={$value.article_code}>
	            <!-- 右侧的信息 -->
	            <div class="info-con">
	              <!-- 文字 -->
	              <div class="text-con">
	                <p>{$value.title}</p>
	              </div>
	              <!-- 日期和标签 -->
	              <div class="date-con">
	                <!-- 日期 -->
	                <div class="left date-div">
	                  <p>{$value.date}</p>
	                </div>
                    <!-- 阅读量 -->
	                <div class="left yueduliang-div">
                      <img class="left" src="../../public/images/yanjing.png">
	                  <p class="left">{$value.views}</p>
                      <div class="clearf"></div>
	                </div>
	                <!-- 标签 -->
	                <div class="right tag-div">
	                 {foreach $value.taglist as $k => $v}
	                  <span class="left">{$v}</span>
	                 {/foreach}
	                  <div class="clearf"></div>
	                </div>
	                <div class="clearf"></div>
	              </div>
	            </div>
	          </li>
           {/if}
           {if $value.format == '2'}
	          <li data-id={$value.article_code}>
	            <!-- 左侧的图片 -->
	            <div class="img-con">
	              {foreach $value.picture_list as $k => $v}
                     <div class="left img-clip-one" style="background: url('{$v.picture}') no-repeat center center #fff;"></div>
		          {/foreach}
	            </div>
	            <!-- 右侧的信息 -->
	            <div class="info-con">
	              <!-- 文字 -->
	              <div class="text-con">
	                <p>{$value.title}</p>
	              </div>
	              <!-- 日期和标签 -->
	              <div class="date-con">
	                <!-- 日期 -->
	                <div class="left date-div">
	                  <p>{$value.date}</p>
	                </div>
                    <!-- 阅读量 -->
	                <div class="left yueduliang-div">
                      <img class="left" src="../../public/images/yanjing.png">
	                  <p class="left">{$value.views}</p>
                      <div class="clearf"></div>
	                </div>
	                <!-- 标签 -->
	                <div class="right tag-div">
		                 {foreach $value.taglist as $k => $v}
		                  <span class="left">{$v}</span>
		                 {/foreach}
	                  <div class="clearf"></div>
	                </div>
	                <div class="clearf"></div>
	              </div>
	            </div>
	          </li>
           {/if}
           {if $value.format == '3'}
	           <li data-id={$value.article_code}>
	            <!-- 右侧的信息 -->
	            <div class="info-con">
	              <!-- 文字 -->
	              <div class="text-con">
	                <p>{$value.title}</p>
	              </div>
	              <!-- 图片 -->
	              <div class="images-con">
		              {foreach $value.picture_list as $k => $v}
			              {if $k<3}
			                <div class="left img-clip-div" style="background: url('{$v.picture}') no-repeat center center #fff;"></div>
			              {/if}
		              {/foreach}
	                  <div class="clearf"></div>
	              </div>
	              <!-- 日期和标签 -->
	              <div class="date-con">
	                <!-- 日期 -->
	                <div class="left date-div">
	                  <p>{$value.date}</p>
	                </div>
                    <!-- 阅读量 -->
	                <div class="left yueduliang-div">
                      <img class="left" src="../../public/images/yanjing.png">
	                  <p class="left">{$value.views}</p>
                      <div class="clearf"></div>
	                </div>
	                <!-- 标签 -->
	                <div class="right tag-div">
	                   {foreach $value.taglist as $k => $v}
		                  <span class="left">{$v}</span>
		               {/foreach}
	                  <div class="clearf"></div>
	                </div>
	                <div class="clearf"></div>
	              </div>
	            </div>
	          </li>
           {/if}
          {/foreach}
         </script>
        </ul>
      </div>
      <div class="public-none" style="display:none">暂时没有需要的信息~</div>
    </section>
   </div>
  </div>
</body>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/advice_and_college/index.js"></script>
</html>


