<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>赚养殖币</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style4.css">

</head>
<body>
		<div class="wrap">
			<!-- 赚养殖币头部 -->
			<header>
	    		<a class="back-btn"></a>
		   			<h2>赚养殖币</h2>
	   		</header>
	   		<!-- 赚养殖币主体 -->
	   		 <section class="zhuanyzb-body main-section">
               <script id="jsmart_tpl" type="text/x-jsmart-tmpl"> 
        	
              {foreach $data as $key=>$value}
               <div class="zhuanyzbsection">
	   				<div class="h3"><h3>{$value.module}</h3></div>
	   				<ul class="yzbrenwu">
	   					{foreach $value.list as $k=>$v}
	   					<!-- 完善信息行 -->
	   					<li data-code={$v.code} data-finish={$v.is_finish}>
                         {if !$v.tip_words}
	   						<div>
	   							<p>{$v.title}</p>
	   							<span>{$v.score_desc}</span>
	   						</div>         
                         {else}
                           <div>         
                            <p>{$v.title}</p>
	   						<a class="tuijianjiangli-tc tuijianbutton"></a>
                           </div>

           			  <div class="mask tuijian" style="display:none">
							<div class="zhuanyzb-tc" style="line-height:23px;">
								{$v.tip_words|getcontent}
							</div>
						</div>   
                         {/if}
                            {if $v.is_finish == 2&&$v.code!="RP_SCORE_BY_A_SHARE"}
	   						<div class="wc">
	   							<span>去完成</span>
	   							<a href=""><img src="../../public/images/right-btn.png" /></a>
	   						</div>
                           {/if}
	   					</li>
                       {/foreach}
	   				</ul>
	   			</div>
	   			{/foreach}
	   			</script>
	   		</section>  
		</div>
	</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js"
    data-main="../../public/js/modules/personal_center/getpoint.js"></script>




