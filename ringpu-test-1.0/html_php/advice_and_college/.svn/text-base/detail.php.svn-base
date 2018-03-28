<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title></title>
<link type="text/css" rel="stylesheet"
	href="../../public/css/swiper.css">
<link type="text/css" rel="stylesheet"
	href="../../public/css/rp_style1.css">
	<link type="text/css" rel="stylesheet"
	href="../../public/css/rp_style4.css">
<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<style>
.ovfHiden {
	overflow: hidden;
	height: 100%;
}
</style>


</head>
<body>
	<div class="wrap">
	   <div class="weixin-tc topdownload" style="display:none">
			<div class="weixin-tc-img">
				<img src="../../public/images/weixinxiazaiimg.png" />
			</div>
			<div class="weixin-tc-text">
				<h3>养殖宝APP</h3>
				<p>养殖业<span>一站式</span>平台&nbsp;&nbsp;邀您加入</p>
			</div>
			<div class="lijixiazai" id="download">
				<a >立即下载</a>
			</div>
			<div class="weixin-tc-close">
				<a class="closetopdownload"></a>
			</div>
		</div>
		<header style="display: none">
			<a class="back-btn detail-back-btn"></a>
			<h2 id="title">详情</h2>
			<a class="home-btn"></a>
		</header>
		<section class="main-section yzzx-bar-section">
			<!-- 遮罩 -->
			<div id="commentbox" style='display: none'>
				<div class="mask" id='commentmask'></div>
				<!-- 评论输入模块 -->
				<div class="yzzx-commentin-con">
					<div class="yzzx-commentin-div">
						<!-- 文本域 -->
						<div class="textarea-div">
							<textarea id="commentboxcontent" maxlength="200"
								placeholder="说点什么吧……"></textarea>
						</div>
						<!-- 字数和按钮 -->
						<div class="word-btn-div">
							<!-- 字数 -->
							<div class="left word-div">
								<p>
									<span id="word" style='color: #999999'>0</span>/<span>100</span>
								</p>
							</div>
							<!-- 按钮 -->
							<div class="right btn-div">
								<!-- 发布按钮，不可点击时添加类publish-btn-dis -->
								<a id='publish' class="publish-btn publish-btn-dis">发布</a>
							</div>
							<div class="clearf"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- 文章详情主容器 -->
			<div id="maincontent">
				<script id="jsmart_tpl_content" type="text/x-jsmart-tmpl">
        <div id="detailmain" style='display:block'>
	       {if $art_Content.format!=3}
		      <div class="yzzx-wzxq-con">
		        <!-- 标题 -->
		        <h1>{$art_Content.title}</h1>
		        <!-- 日期和标签等 -->
		        <div class="date-con">
		          <!-- 日期和来源 -->
		          <div class="left date-div" style="margin-bottom:4px;">
		            <span class="left date-span">{$art_Content.date}</span>
		            <span class="left">来源：{$art_Content.copyright}</span>
                    <img style="margin-left:10px; width:17px !important;height:auto !important;" class="left ydl-img" src="../../public/images/yanjing.png">
	                 <span class="left" style="margin-left:5px; text-indent:0; font-size:12px; color:#999;">{$art_Content.views+1}</span>
		            <div class="clearf"></div>
		          </div>
                  <!-- 阅读量
	                <div class="left yueduliang-div">
                      <div class="clearf"></div>
	                </div> -->
		          <!-- 标签 -->
		          <div class="right tag-div">
		           {foreach $art_Content.taglist as $key => $value}
		             <span class="left">{$value}</span>
		           {/foreach}
		            <div class="clearf"></div>
		          </div>
		          <div class="clearf"></div>
		        </div>		    
		        <div class="contentdetail">
		          {$art_Content.content}
		        </div>
		     </div>   
		   {else}
		      <div class="yzzx-wzxq-lb-con swiper-container">
		        <!-- 轮播图 -->
		        <ul class="yzzx-wzxq-lb-ul swiper-wrapper">
		        {foreach $art_Content.picture_list as $key => $value}
		          <li class="swiper-slide" data-index ={$key}>
		            <div class="img-con">
		              <img src="{$value.picture}">
		            </div>
		              <!-- 介绍文字 -->
			        <div class="yzzx-wzxq-etext-con">
			          <div class="yzzx-wzxq-etext-div">
			            <!-- 标题和页数模块 -->
			            <div class="title-div">
			              <!-- 标题 -->
			              <h1>{$art_Content.title}</h1>
			              <!-- 页数 -->
			              <div class="pages-div">
			                <p><span>{$key+1}</span>/{$art_Content.picture_list.length}</p>
			              </div>
			            </div>
			            <!-- 介绍文字模块 -->
			            <div class="etext-div">
			              <p>{$value.summary}</p>
			            </div>
			          </div>
			        </div>
		          </li>
		        {/foreach}
		          <li class="swiper-slide" data-index="max">
             <div class="yzzx-wzxq-con" style='background:#fff'>
		        <!-- 标题 -->
		        <h1>{$art_Content.title}</h1>
		        <!-- 日期和标签等 -->
		        <div class="date-con">
		          <!-- 日期和来源 -->
		          <div class="left date-div">
		            <span class="left date-span">{$art_Content.date}</span>
		            <span class="left">来源：{$art_Content.copyright}</span>
		            <div class="clearf"></div>
		          </div>
                  <!-- 阅读量 -->
	                <div class="left yueduliang-div">
                      <img class="left ydl-img" src="../../public/images/yanjing.png">
	                  <p class="left">{$art_Content.views+1}</p>
                      <div class="clearf"></div>
	                </div>
		          <!-- 标签 -->
		          <div class="right tag-div">
		           {foreach $art_Content.taglist as $key => $value}
		             <span class="left">{$value}</span>
		           {/foreach}
		            <div class="clearf"></div>
		          </div>
		          <div class="clearf"></div>
		        </div>		    
		     		</div>   
			         <div class="page-con">
				      <!-- 模块的标题 -->
				      <div class="model-title-con">
				        <p>相关阅读</p>
				      </div>			      
					     {if $art_RelastionList.length>0}
					      <!-- 资讯模块 -->
					      <div class="yzzx-newslist-con">
					        <!-- 资讯列表 -->
						     <ul class="newslist-ul relastion">
						        {foreach $art_RelastionList as $key => $value}
						           {if $value.format == '1'}
							         <li data-id={$value.article_code} data-title={$value.title}>
							            <!-- 右侧的信息 -->
							            <div class="info-con">
							              <!-- 文字 -->
							              <div class="text-con">
							                <p>{$value.newtitle}</p>
							              </div>
							              <!-- 日期和标签 -->
							              <div class="date-con">
							                <!-- 日期 -->
							                <div class="left date-div">
							                  <p>{$value.date}</p>
							                </div>
                   <!-- 阅读量 -->
	                <div class="left yueduliang-div">
                      <img class="left ydl-img" src="../../public/images/yanjing.png">
	                  <p class="left">{$art_Content.views+1}</p>
                      <div class="clearf"></div>
	                </div>
							                <!-- 标签 -->
							                <div class="right tag-div">
							                 {foreach $value.taglistre as $k => $v}
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
							         <li data-id={$value.article_code} data-title={$value.title}>
							            <!-- 左侧的图片 -->
							            <div class="img-con">
							              <img src="{$value.picture_list[0].picture}">
							            </div>
							            <!-- 右侧的信息 -->
							            <div class="info-con">
							              <!-- 文字 -->
							              <div class="text-con">
							                <p>{$value.newtitle}</p>
							              </div>
							              <!-- 日期和标签 -->
							              <div class="date-con">
							                <!-- 日期 -->
							                <div class="left date-div">
							                  <p>{$value.date}</p>
							                </div>
                    <!-- 阅读量 -->
	                <div class="left yueduliang-div">
                      <img class="left ydl-img" src="../../public/images/yanjing.png">
	                  <p class="left">{$art_Content.views+1}</p>
                      <div class="clearf"></div>
	                </div>
							                <!-- 标签 -->
							                <div class="right tag-div">
								                 {foreach $value.taglistre as $k => $v}
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
							         <li data-id={$value.article_code} data-title={$value.title} data-format={$value.format}>
							            <!-- 右侧的信息 -->
							            <div class="info-con">
							              <!-- 文字 -->
							              <div class="text-con">
							                <p>{$value.newtitle}</p>
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
                      <img class="left ydl-img" src="../../public/images/yanjing.png">
	                  <p class="left">{$art_Content.views+1}</p>
                      <div class="clearf"></div>
	                </div>
							                <!-- 标签 -->
							                <div class="right tag-div">
							                   {foreach $value.taglistre as $k => $v}
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
					      {else}
					       <div class="yzzx-newslist-con">
					        <!-- 资讯列表 -->
					         <ul class="newslist-ul">
					          <li>
					            <!--暂无相关阅读模块-->
					            <div class="no-essay-div">
					              <p>暂无相关阅读</p>
					            </div>
					          </li>
					         </ul>
					       </div>
					     {/if}
			              <!-- 模块的标题 -->
					      <div class="model-title-con">
					        <p>评论</p>
					      </div>
					      {if $art_Comments.length>0}
					       <!-- 评论模块 -->
					       <div class="yzzx-comment-con">
					        <!-- 评论列表 -->
					        <ul class="yzzx-comment-ul commentlist">
					         {foreach $art_Comments as $key => $value}
					           {if $key<10}
						          <li>
						            <!-- 头像 -->
						            <div class="head-img-con">
						              <img src="{$value.avatar}">
						            </div>
						            <!-- 内容 -->
						            <div class="info-div">
						              <!-- 名字 -->
						              <div class="name-div">
						                <!-- 左侧的名字和回复 -->
						                <div class="left name-reply-div">
						                  {if $value.to_nickname&&$value.to_nickname != ""}	                 
						                 <span class="left uname-span commentto" data-nickname={$value.nickname} data-code={$value.comment_code}>{$value.nickname}</span> 
						                  <span class="left">回复</span>
						                  <span class="left uname-span commentto" data-nickname={$value.to_nickname} data-code={$value.comment_code}>{$value.to_nickname}</span>
						                  {else}
                                           <span class="left uname-span commentto" data-nickname={$value.nickname} data-code={$value.comment_code}>{$value.nickname}</span>
						                  
						                  {/if}
						                  <div class="clearf"></div>
						                </div>
						                <!-- 日期 -->
						                <div class="right date-div">
						                  <p>{$value.created|rpdate}</p>
						                </div>
						                <div class="clearf"></div>
						              </div>
						              <!-- 评论 -->
						              <div class="comment-div">
						                <p>{$value.content}</p>
						              </div>
						            </div>
						          </li>
					           {/if}
					         {/foreach}
					        </ul>
							<!-- 按钮模块 -->
							{if $art_Comments.length>=10}
						        <div class="btn-con">
						          <!-- 查看全部评论按钮 -->
						          <a class="check-allcomm-btn">查看全部评论</a>
						        </div>
					        {/if}
					      </div>
					    {else}
					      <div class="yzzx-comment-con">
					        <!-- 评论列表 -->
					        <ul class="yzzx-comment-ul">
					          <!--暂无评论的li,类为no-comment-li-->
					          <li class="no-comment-li">
					            <!--暂无评论模块-->
					            <div class="no-comment-div">
					              <p>暂无评论</p>
					            </div>
					          </li>
					        </ul>
			              </div>
				       {/if}	      
			          </li>
			        </ul>		      
			      </div>
		       {/if}   

			  {if $art_Content.format!=3}
			      <!-- 模块的标题 -->
			      <div class="model-title-con">
			        <p>相关阅读</p>
			      </div>	      
			     {if $art_RelastionList.length>0}
			      <!-- 资讯模块 -->
			      <div class="yzzx-newslist-con">
			        <!-- 资讯列表 -->
			        <ul class="newslist-ul relastion">
			        {foreach $art_RelastionList as $key => $value}
			           {if $value.format == '1'}
				          <li data-id={$value.article_code} data-title={$value.title}>
				            <!-- 右侧的信息 -->
				            <div class="info-con">
				              <!-- 文字 -->
				              <div class="text-con">
				                <p>{$value.newtitle}</p>
				              </div>
				              <!-- 日期和标签 -->
				              <div class="date-con">
				                <!-- 日期 -->
				                <div class="left date-div">
				                  <p>{$value.date}</p>
				                </div>
				                <!-- 标签 -->
				                <div class="right tag-div">
				                 {foreach $value.taglistre as $k => $v}
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
				          <li data-id={$value.article_code} data-title={$value.title}>
				            <!-- 左侧的图片 -->
				            <div class="img-con">
				              <img src="{$value.picture_list[0].picture}">
				            </div>
				            <!-- 右侧的信息 -->
				            <div class="info-con">
				              <!-- 文字 -->
				              <div class="text-con">
				                <p>{$value.newtitle}</p>
				              </div>
				              <!-- 日期和标签 -->
				              <div class="date-con">
				                <!-- 日期 -->
				                <div class="left date-div">
				                  <p>{$value.date}</p>
				                </div>
				                <!-- 标签 -->
				                <div class="right tag-div">
					                 {foreach $value.taglistre as $k => $v}
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
				           <li data-id={$value.article_code} data-title={$value.title} data-format={$value.format}>
				            <!-- 右侧的信息 -->
				            <div class="info-con">
				              <!-- 文字 -->
				              <div class="text-con">
				                <p>{$value.newtitle}</p>
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
				                   {foreach $value.taglistre as $k => $v}
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
			     {else}
			       <div class="yzzx-newslist-con">
			        <!-- 资讯列表 -->
			        <ul class="newslist-ul">
			          <li>
			            <!--暂无相关阅读模块-->
			            <div class="no-essay-div">
			              <p>暂无相关阅读</p>
			            </div>
			          </li>
			        </ul>
			      </div>
			    {/if}		
	      
	      
	            <!-- 模块的标题 --><!--锚点标签-->
	            <div id="commentflag"></div>
			      <div class="model-title-con">
			        <p>评论</p>
			      </div>
			      {if $art_Comments.length>0}
			       <!-- 评论模块 -->
			       <div class="yzzx-comment-con">
			        <!-- 评论列表 -->
				        <ul class="yzzx-comment-ul commentlist">
				        {foreach $art_Comments as $key => $value}
				           {if $key<10}
					          <li>
					            <!-- 头像 -->
					            <div class="head-img-con">
					              <img src="{$value.avatar}">
					            </div>
					            <!-- 内容 -->
					            <div class="info-div">
					              <!-- 名字 -->
					              <div class="name-div">
					                <!-- 左侧的名字和回复 -->
					                <div class="left name-reply-div">
					                  {if $value.to_nickname&&$value.to_nickname!=""}	                 
					                 <span class="left uname-span commentto" data-nickname={$value.nickname} data-code={$value.comment_code}>{$value.nickname}</span> 
					                  <span class="left">回复</span>
					                  <span class="left uname-span commentto" data-nickname={$value.to_nickname} data-code={$value.comment_code}>{$value.to_nickname}</span>
					                  {else}
                                        <span class="left uname-span commentto" data-nickname={$value.nickname} data-code={$value.comment_code}>{$value.nickname}</span>					                  
					                  {/if}
					                  <div class="clearf"></div>
					                </div>
					                <!-- 日期 -->
					                <div class="right date-div">
					                  <p>{$value.created|rpdate}</p>
					                </div>
					                <div class="clearf"></div>
					              </div>
					              <!-- 评论 -->
					              <div class="comment-div">
					                <p>{$value.content}</p>
					              </div>
					            </div>
					          </li>
				           {/if}
				          {/foreach}
				        </ul>
						<!-- 按钮模块 -->
						{if $art_Comments.length>=10}
				        <div class="btn-con">
				          <!-- 查看全部评论按钮 -->
				          <a class="check-allcomm-btn">查看全部评论</a>
				        </div>
			            {/if}
			      </div>
			    {else}
			      <div class="yzzx-comment-con">
			        <!-- 评论列表 -->
			        <ul class="yzzx-comment-ul">
			          <!--暂无评论的li,类为no-comment-li-->
			          <li class="no-comment-li">
			            <!--暂无评论模块-->
			            <div class="no-comment-div">
			              <p>暂无评论</p>
			            </div>
			          </li>
			        </ul>
	              </div>
		       {/if}	       
	       {/if}
	  </div>
      <div id="commentmain" style="display:none">
	       <div class="yzzx-comment-con">
	        <!-- 评论列表 -->
	        <ul class="yzzx-comment-ul commentlist" id="commentlistul">
	          
	        </ul>
	      </div>
      </div>
      <!-- 底部操作条 -->
       <div class="yzzx-handle-bar">
        <div class="handle-div">
          <!-- 输入框 -->
          <div class="input-div">
            <input id='comment_input' class="comment-input" type="text" placeholder="写评论…" readonly= "true">
          </div>
          <!-- 按钮们 -->
          <div class="handle-btn-div">
            <!-- 评论按钮  评论按钮(字数过多变成省略号的话请给span添加类comment-max-span)-->
            <a class="left comment-btn" id="allcomment">{if $com_Count>0}<span {if $com_Count>999}class="comment-max-span"{/if}>{$com_Count}</span>{/if}</a>
            <!-- 收藏按钮，已收藏的话添加类collected-btn -->
            <a class="left collect-btn {if $status == 1}collected-btn{/if}" id='collect'></a>
            <!-- 转发按钮 -->
            <!--<a class="left forward-btn" href=""></a>-->
            <div class="clearf"></div>
          </div>
        </div>     
       </div>
      </script>
			</div>
		</section>
	</div>
</body>
<script id="jsmart_tpl_commentlist" type="text/x-jsmart-tmpl">
 {foreach $data.comlist as $key => $value}
  <li>
    <!-- 头像 -->
    <div class="head-img-con">
      <img src="{$value.avatar}">
    </div>
    <!-- 内容 -->
    <div class="info-div">
      <!-- 名字 -->
      <div class="name-div">
        <!-- 左侧的名字和回复 -->
        <div class="left name-reply-div">
          {if $value.to_nickname&&$value.to_nickname != ""}	                 
         <span class="left uname-span commentto" data-nickname={$value.nickname} data-code={$value.comment_code}>{$value.nickname}</span> 
          <span class="left">回复</span>
          <span class="left uname-span" data-nickname={$value.to_nickname} data-code={$value.comment_code}>{$value.to_nickname}</span>
          {else}
            <span class="left uname-span commentto" data-nickname={$value.nickname} data-code={$value.comment_code}>{$value.nickname}</span>
          
          {/if}
          <div class="clearf"></div>
        </div>
        <!-- 日期 -->
        <div class="right date-div">
          <p>{$value.created|rpdate}</p>
        </div>
        <div class="clearf"></div>
      </div>
      <!-- 评论 -->
      <div class="comment-div">
        <p>{$value.content}</p>
      </div>
    </div>
  </li>
 {/foreach} 
</script>
<script type="text/javascript"
	src="../../public/js/common/require.min.js"
	data-main="../../public/js/modules/advice_and_college/detail.js"></script>
</html>