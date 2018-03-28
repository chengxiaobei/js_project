<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<link type="text/css" rel="stylesheet" href="../../public/css/main_rp.css">
	<style>
	 .main_inspection_report .check_list .middle_check_list .check_list_right {
           height: 66px;
		    box-sizing: border-box;
		    padding-top:0;
		    position: absolute;
		    top: 10%;
		    right: 2%;
    }
	</style>
</head>
<body class="whiteBg">
<div class="wrap" id="wrap1"> 
  <script type="text/x-jsmart-tmpl" id="report_list">
	<header>
      <a class="back-btn backButton" href="javascript:;"></a>
      <h2>查询检测报告</h2>
      <a class="reg-btn" href="javascript:;"></a>
    </header>
   
    <section class="main_inspection_report">
		<div class="search_outside">
			<div class="search_inside">
				<div class="search_text left" style="color:#ddd;line-height:29px;">搜索</div>
				<div class="closs_img right"></div>
			</div>
		</div>
		<div style="margin-top: 101px;"></div>
		{if $data && $data.length>0}
	    {foreach $data as $key=>$value}
	   
		<div class="check_list">
			<div class="middle_check_list">
				<div class="check_list_left left">
					<div class="left_mobile">送检单号：{$value.sheetNo}</div>
					<div class="left_note">养殖场名称：{$value.farmName}</div>
				</div>
				<div class="check_list_right right">
					<div class="detail_button" orderno = '{$value.sheetNo}'>查看</div>
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
    data-main="../../public/js/modules/personal_center/query_report.js"></script>
    