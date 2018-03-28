<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>我的诊疗档案</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body>
  <div class="wrap" id="wrap1">
  	<script type="text/x-jsmart-tmpl" id="archives_list_tpl">
	    <header>
	      <a class="back-btn backButton" href="javascript:void(0);"></a>
	      <h2>我的诊疗档案</h2>
	    </header>
	    <section class="main-section" id="archives_list">
	    	{if $analysis_list && $analysis_list.length>0}
	    		{foreach $datetimes as $key=>$value}
	    			<div class="myjcda-bigbox">
	    				<div class="myjcda-month">{$value.month|archive_handleDateTime:$value.year}</div>
	    				<ul>
		    				{foreach $analysis_list as $k=>$v}
		    					{if $v.datetime==$key && $v.status != "50006"}
						          <li class="right-btn archives_item" data-id="{$v.id}">
						            <div class="myjcda-apply">
						              <div class="myjcda-time left">申请时间：{$v.date}</div>
				              			<div class="myjcda-blue right archive_status" data-type="{$v.status}">
					              			{$v.name}
					              		</div>
						              <div class="clearf"></div>
						            </div>
						          </li>
						        {/if}
		    				{/foreach}
	    				</ul>
	    			</div>
	    		{/foreach}
	    	{/if}
	    </section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/archives_list.js"></script>




