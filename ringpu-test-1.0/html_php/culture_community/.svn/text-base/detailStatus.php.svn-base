     <?php include "../common/header_culture.php";?>
     <link type="text/css" rel="stylesheet" href="../../public/css/rp_style4.css">
     <link type="text/css" rel="stylesheet" href="../../public/css/swiper.css">
     <style type="text/css">
     .ovfHiden{overflow: hidden;height: 100%;}
    </style>
       <body class="whiteBg dtxq-whitebg">
         <div class="wrap" id="detail">
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
             <a class="back-btn"></a>
             <h2>动态详情</h2>
             <a class="diandian-btn"></a>
           </header>

           <section class="content-padbom main-section">
             <div class="yzsq-maincon rp_preview_wrap" id="detail">
               <div class="maincon-content" id="detail_head">
               </div>

               <div class="dtxq-maincen" id="detail_content"> 
                 <div class="dtxq-chatmain" id="detail_comment">
                 </div>
               </div>

             </div>

              <!--底部的举报弹窗-->
              <div style="display:none" id="accuse">
              <div class="mask"></div>
                <div class="dtxq-footer-alert" >
                  <div class="footer-alert-top">举报</div>
                  <div class="footer-alert-bottom">取消</div>
                </div>
              </div>

              <!--聊天框-->
              <div style="display:none" id="talk">
                <div class="mask" ></div>
                <div class="dtxq-footer-main">
                  <div class="footer-main-texta">
                    <textarea id="text" placeholder="说点什么吧......"></textarea>
                  </div>
                  <div class="main-texta-linetwo">
                    <div class="left main-texta-left">
                      <p><span id="str_num">0</span>/<span class="texta-left-last">500</span></p>
                    </div>
                    <div class="right main-texta-right">
                      <a class="btn-base">发布</a>
                    </div>
                    <div class="clearf"></div>
                  </div>
                </div>
              </div>
            </section>

            <!--底部-->
            <footer id="detail_footer">
            </footer>

             <!--弹窗-->
            <div class="jb-alert" style="display:none">
              <p class="jb-alertimg"></p>
              <p class="jb-alerttext">评论成功</p>
            </div>
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
       <!--     <footer >
         <div class="huadpic-main" style="background:#000;height:40px;">
           <div class="oa-carousel-button-wrap huadpic-bommain">
             <div class="oa-carousel-buttons huadpic-center">
            </div>
          </div>
        </div>
                 </footer> -->
        </div>
       </body>
              <script type="text/x-jsmart-tmpl" id="detail_head_tpl">  

                  <div class="maincon-left">
                    <img src="{$comment_data.avatar}">
                  </div>

                  <div class="maincon-right">
                    <div class="yzsqrig-lineone">
                      <p class="lineone-left left">{$comment_data.nick_name}</p>
                      {if $comment_data.province}
                      <p class="lineone-right right">{$comment_data.province}</p>
                      {/if}
                      <div class="clearf"></div>
                    </div>
                    <div class="yzsqrig-linefour left">
                      <p class="linefour-time left">{$comment_data.date_string|turn_time}</p>
                      {if $comment_data.user_code == $user_code}
                      <p class="right delete_status">删除</p>
                      {/if}
                    </div>

                    <div class="clearf"></div>
                    <!--留言评论可点击的那个横条加这个位置-->
                  </div> 
                  <div class="clearf"></div>
              
                </script>


                <script type="text/x-jsmart-tmpl" id="detail_content_tpl">

                  {if $comment_data.ask_content}
                  <p class="dtxq-maincen-linetwo">
                    {$comment_data.ask_content}
                  </p>
                  {/if}
                  {if $comment_data.picture_list.length}
                  <div class="dtxq-maincen-lineimg rp_preview_wrap" data-multiple_imgs='{$comment_data.picture_list|jsonstr}'> 
                    <ul>
                      {foreach $comment_data.picture_list as $k=>$pic_url}
                       <!--
                        <li class="rp_preview_img" data-index="{$k}"><img src="./../../public/images/default-community.png"></li>
                       -->
                      <li class="rp_preview_img" data-index="{$k}" style='background:url(./../../public/images/default-community.png) no-repeat center center;background-size:cover'>
                      </li>
                      
                      {/foreach}
                    </ul>
                    <div class="clearf"></div>
                  </div>
                  {/if}

                </script>

                <script type="text/x-jsmart-tmpl" id="detail_comment_tpl">
                <!--带灰色背景的聊天内容模块--> 
                  {if $comment_to_comment.length}
                  <div class="chatmain-toujiantou">
                    <a></a>
                  </div>
                  {/if}
                  
                  <!--聊天内容模块--> 
                  <div class="chatcon-main">
                    {foreach $comment_to_comment as $com}
                    <div class="dtxq-chatcon">
                      <div class="chatcon-left left">
                        <img src="{$com.avatar}">
                      </div>
                      <div class="chatcon-right right">
                        <div class="chatright-top">
                          <p class="chat-name left">
                            {if $com.to_user_code}
                            <span>{$com.nick_name}</span><span class="chat-name-huif">回复</span><span>{$com.to_nick_name}</span>
                            {else}
                            <span>{$com.nick_name}</span>
                            {/if}
                          </p>
                          <p class="chat-date right">{$com.created|turn_time}</p>
                          <div class="clearf"></div>
                        </div>
                        <div class="chatright-bottom left">
                          <p>{$com.content}</p>
                        </div>
                        <div class="clearf"></div>
                      </div>
                      <div class="clearf"></div>
                    </div>
                    {/foreach}
                  </div>
           
              </script>
         


           <!--底部-->
            <script type="text/x-jsmart-tmpl" id="detail_footer_tpl">
             <div class="dtxq-foot">
               <div class="dtxq-foot-left left">
                 <p>评论(<span>{$comment_data.comment_num}</span>)</p>
               </div>
               <div class="dtxq-foot-right right">
                 <p>点赞(<span>{$comment_data.upvote_num}</span>)</p>
               </div>
             </div>
           </script>
         
       <script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="./../../public/js/modules/culture_community/detail_status.js"></script>