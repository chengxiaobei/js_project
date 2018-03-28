<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>物流详情</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body>
  <div class="wrap" id="wrap1">
  	<script type="text/x-jsmart-tmpl" id="archives_logistics_tpl">
	    <header>
	      <a class="back-btn backButton" href="javascript:void(0);"></a>
	      <h2>物流详情</h2>
	    </header>
	    <section class="main-section">
	      <!--快件信息-->
	      <div class="wlxx-detail">
	        <p><span class="">快递单号：</span>{$nu}</p>
	        <p><span class="">快递公司：</span>{$com}</p>
	      </div>
	      <!--物流-->
	      <!--左边 蓝色的点是 wlxx-dot-blue ， 灰色的点是 wlxx-dot-grey -->
	      <!--若字体变蓝  在li上添加类 center-blue -->
	      <div class="jc-wl-arrive">
	        <ul>
	        	{if $data}
	        		{foreach $data as $key=>$value}
				        <li>
				            <div class="jc-wl-site">{$value.context}</div>
				            <div class="jc-wl-time">{$value.time}</div>
				            <div class="jc-wl-dot-grey"></div>
				        </li>
			        {/foreach}
	          	{/if}
	          	<!--
		          <li>
		            <div class="jc-wl-site">【天津市】快件已到达天津市中转中心，正发往东丽分拨区</div>
		            <div class="jc-wl-time">2015-09-25 14:00:22</div>
		            <div class="jc-wl-dot-grey"></div>
		          </li>
		          <li>
		            <div class="jc-wl-site">【河北市】快件员xxx已揽件</div>
		            <div class="jc-wl-time">2015-09-25 14:00:22</div>
		            <div class="jc-wl-dot-grey"></div>
		          </li>
	          	-->
	        </ul>
	      </div>
	    </section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/archive_logistics.js"></script>




