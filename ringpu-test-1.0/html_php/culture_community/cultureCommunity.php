    <?php include "../common/header_culture.php";?>
	<link type="text/css" rel="stylesheet" href="../../public/css/rp_style4.css">
    <link type="text/css" rel="stylesheet" href="../../public/css/swiper.css">
    <style type="text/css">
     .ovfHiden{overflow: hidden;}
    </style>
    <body class="whiteBg" >
        
        <div class="wrap">
        	 <div class="weixin-tc topdownload" style="display: none">
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
	        <header>
	          <a class=""></a>
		        <h2>养殖社区</h2>
            <a class="chat-btn zhaoxj-img"></a>
	        </header>

          <section class="main-section">
            
<!--             <div class="yzsq-headermain" id="unperson" style="display:none">

                <img src="../../public/images/topbg-img.png"class="topbg-img img-auto">
                
                <div class="headermain-toux">
                  <span></span>
                  <img src="../../public/images/default-headPic.png" class="person_image">
                  <div class="clearf"></div>
                </div>
             </div> -->
             
             


              <!--养殖社区头像区域 -->
             <div class="yzsq-headermain">
                <div id="communitybg">
                  <script type="text/x-jsmart-tmpl" id="communitybg_tpl">           
                    <img src="{$data[0].img_url}" class="topbg-img img-auto">     
                  </script>
                </div>
                <div id="person">
                  <script type="text/x-jsmart-tmpl" id="person_tpl">
                  <div class="headermain-toux" data-single_img='{$data.avatar}'>
                  <span class="left">{$data.nick_name}</span>
                    <img src="{$data.avatar}" class="person_image">
                    <div class="clearf"></div>
                  </div>
                  </script>
                </div>
             </div>

             <!--当有回复消息时直接调用这整块，没有回复消息时直接隐藏掉这个yzsq-jianxi整个块 -->
             <div class="yzsq-jianxi" style="display:none" id="news">
             <script type="text/x-jsmart-tmpl" id="news_tpl">
               <div class="yzsq-textcent">
                 <div class="yzsq-hfbg">
                   <p class="left" id="news_left">{if $data.length>3}{$data[0]}，{$data[1]}，{$data[2]}等{$data.length}人{elseif $data.length==1}{$data[0]}{elseif $data.length==2}{$data[0]}，{$data[1]}&nbsp;{$data.length}人{else}{$data[0]}，{$data[1]}，{$data[2]}&nbsp;{$data.length}人{/if}回复了你</p>
                   <span class="right"></span>
                   <div class="clearf"></div>
                 </div>
               </div>
               </script>
             </div>

            <!--养殖社区动态内容 -->
            <div id="dynamics">  
            </div>
            
           </section> 

            <!--底部-->
           <footer style="display:none">
              <div class="foot">
                 <ul>
                   <!--选中使用类footb-index -->
                   <li class="footg-index"></li>
                   <!--选中使用类footb-online -->
                   <li class="footg-online"></li>
                   <!--选中使用类footb-farm -->
                   <li class="footg-farm footb-farm"></li>
                   <!--选中使用类footb-online -->
                   <li class="footg-online"></li>
                   <div class="clearf"></div>
                 </ul>
              </div>
           </footer>

        </div>

        <!--图片放大预览-->
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
          <!-- 底部分页模块 -->
          <!--  <footer >
            <div class="huadpic-main" style="background:#000;height:40px;">
              <div class="oa-carousel-button-wrap huadpic-bommain">
                <div class="oa-carousel-buttons huadpic-center">
               </div>
             </div>
           </div>
                    </footer> -->
        </div>

    </body>
    <script type="text/x-jsmart-tmpl" id="dynamics_tpl">
            {foreach $data.data_list as $key=>$list}
             <div  class="yzsq-maincon rp_preview_wrap" {if $list.weight == 999}weight="999"{/if} data-multiple_imgs='{$list.picture_list|jsonstr}'>
                <div class="maincon-content">
                	  {if $list.weight == 999}
                    <div class="yzsq-place-top">
                    </div>
                  {/if}
                    <div class="maincon-left">
                      <img src="{$list.avatar}" class="maincon-left-img">

                    </div>

                    <div class="maincon-right">
                      
                      <div class="yzsqrig-lineone">
                        <p class="lineone-left left">{$list.nick_name}</p>
                        {if $list.province}
                        <p class="lineone-right right">{$list.province}</p>
                        {/if}
                      <div class="clearf"></div>
                      </div>

               <!--   <div class="yzsqrig-linetwo left">
                        <p>最近猪价又上升了</p>   
                      </div> 
                -->    
                      {if $list.ask_content}
                      <div class="yzsqrig-linethree left">
                        <p>{$list.ask_content}</p> 
                      </div>
                      {/if} 
                      {if $list.picture_num>0}
                      <div class="yzsq-linesix-mainimg left">
                        <ul>
                          {foreach $list.picture_list as $k=>$value}
                          
                          <li class="rp_preview_img" data-index="{$k}" style='background: url(./../../public/images/default-community.png) no-repeat center center;background-size:cover;'></li>
                          
                          <!--
                          <li class="rp_preview_img" data-index="{$k}"><img src='./../../public/images/default-community.png'></li>
                          -->
                          {/foreach}
                        </ul>
                      </div>
                      {/if}
                      <div class="yzsqrig-linefour left">
                        <p class="linefour-time left">{$list.date_string|turn_time}</p>
                        {if $list.user_code == $user_code}
                        <p class="right delete_status">删除</p>
                        {/if}
                        <!--
                        <p class="linefour-chat right" id="comment"></p>
                        -->
                      </div>

                      <div class="yzsqrig-linefive left">
                        <!--点击后的图标使用类linefive-aixinchecked -->
                        <p class="linefive-aixin left {if $list.vote_status==1}linefive-aixinchecked{/if}"><span id="count">{$list.upvote_num}</span></p>
                        <p class="linefive-chatnum left"><span>{$list.comment_num}</span></p>
                      </div>

                      <div class="clearf"></div>
                       
                       <!--留言评论可点击的那个横条 -->
                       
                      <div class="yzsq-pingl" style="display:none">
                        <ul>
                          <!--当选中时使用类yzsq-jbchecked -->
                          <li class="yzsq-jb yzsq-jbchecked">
                            <span class="left"></span>
                            <a class="left">举报</a>
                          </li>
                          <!--当选中时使用类yzsq-zanchecked-->
                          <li class="yzsq-zan">
                            <span class="left"></span>
                            <a class="left">赞</a>
                          </li>
                          <!--当选中时使用类 yzsq-plchecked -->
                          <li class="yzsq-pinglun">
                            <span class="left"></span>
                            <a class="left">评论</a>
                          </li>
                          <div class="clearf"></div>
                        </ul>
                      </div>

                    </div>
                    <div class="clearf"></div>
                
                </div> 
              </div>

              {/foreach}
             </script>
   <!-- <script type="text/javascript" src="./../../public/js/modules/culture_community/culture_community.js"></script>-->
    <script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="./../../public/js/modules/culture_community/culture_community.js"></script>