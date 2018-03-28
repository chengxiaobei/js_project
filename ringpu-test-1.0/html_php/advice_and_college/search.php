<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>搜索</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style1.css">
</head>
<body>
  <div class="wrap">
    <header>
      <a href="javascript:void(0);" class="back-btn"></a>
      <!-- 搜索框模块 -->
      <div class="sc-h-search-con">
        <!-- 左边的搜索按钮 -->
        <a class="search-btn"></a>
        <!-- 输入框 -->
        <input id="searchtext" class="search-input" type="text" placeholder="搜索">
        <!-- 右边的清除按钮 -->
        <a class="clear-btn"></a>
      </div>
      <a class="reg-btn" id="searchbutton">搜索</a>
    </header>
    <section class="main-section">
      <!-- 搜索结果模块 -->
     <script id="jsmart_tpl_content" type="text/x-jsmart-tmpl"> 
      <div class="ss-search-result-con">
        {if $art_List.length>0&&$count!="0"}
         <p class="result-p"><span>{$count}</span>个搜索结果</p>
        {else}
         <p class="no-result-p">无搜索结果</p>
        {/if}       
      </div>
      <!-- 资讯模块 -->
      {if $art_List.length>0&&$count!="0"}
       <div class="yzzx-newslist-con">
        <!-- 资讯列表 -->
        <ul class="newslist-ul" id="content">
        
	      {foreach $art_List as $key => $value}
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
		              <img class="left" src="{$v.picture}">
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
        
        </ul>
      </div>
      {/if}    
     </script>
    </section>
  </div>
</body>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/advice_and_college/search.js"></script>
</html>


