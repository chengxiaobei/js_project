<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title></title>
<link type="text/css" rel="stylesheet" href="../../public/css/main_rp.css">
<style>
.search_check_main .search_check_list .search_check_right .search_check_bottom .list_bottom_left{
          	width:46%;
          }
 </style>
</head>
<body>
  <div class="wrap" id="wrap1">
  	<script type="text/x-jsmart-tmpl" id="archives_list_tpl">
	<header>
      <a class="back-btn backButton" href=""></a>
      <h2>搜索</h2>
      <a class="reg-btn" href=""></a>
    </header>
	<section class="search_check_main" id="archives_list">
		<div class="search_outside">
			<div class="search_inside" style="margin:0;float:left;margin-left:12%;width:76%;">
				<input type="text" class="search_text left" name="#" placeholder=" 搜索"></input>
				<div class="closs_img right"></div>
			</div>
			<div class="search-btn" style="float: left;line-height: 29px;margin-left: 3%;">搜索</div>
		</div>
		<!-- 送检中引用类：left_img1 检测中引用类：left_img2 检测完引用类：left_img3 -->
		{if $data && $data.length>0}
	    	{foreach $data as $key=>$value}
	    	{if $value.status=="通过"}
		<div class="search_check_list left_img1 archives_item" orderno="{$value.sheetNo}" style="background:#fff url(../../public/images/jcwc.png) no-repeat left top;background-size:auto 50px">
		{/if}
		{if $value.status=="审批中"}
		<div class="search_check_list left_img1 archives_item" orderno="{$value.sheetNo}">
		{/if}
			<div class="search_check_right">
				<div class="search_check_top">送检单号：{$value.sheetNo}</div>
				<div class="search_check_bottom">
					<div class="list_bottom_left">送检类型：{$value.animalType}</div>
					<div class="list_bottom_right">{$value.submitDate}</div>
				</div>
			</div>	
			<div class="clearf"></div>
		</div>
		{/foreach}
		{/if}
	</section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/listsearch.js"></script>




