    <?php include "../common/header_culture.php";?>
    <link type="text/css" rel="stylesheet" href="../../public/css/swiper.css">
    <style type="text/css">
     .ovfHiden{overflow: hidden;}
    </style>
      <body class="whiteBg">
        <div class="wrap">
          <header>
            <a class="back-btn"></a>
            <h2>社区消息</h2>
            <a class=""></a>
          </header>

          <section class="content-padbom main-section">
            <!--养殖社区下面一整块 -->
            <div class="sqxx-maincon" id="news">
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
              <div class="clearf"></div>
            </div>
           </section>
          <!-- 底部分页模块 -->
           <footer >
             <div class="huadpic-main" style="background:#000;height:40px;">
               <div class="oa-carousel-button-wrap huadpic-bommain">
                 <div class="oa-carousel-buttons huadpic-center">
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
      <script type="text/x-jsmart-tmpl" id="news_tpl">
               {foreach $data.data_list as $v}
               <div class="sqxx-addxian">
                 <div class="sqxxcon-content">
                   <div class="sqxxmain-left left">
                     <img src="{$v.avatar}">
                   </div>
                   <div class="sqxxmain-right left">
                     <div class="sqxx-lineone">
                       <p class="left">{$v.nick_name}</p>
                       <div class="clearf"></div>
                     </div>
                     <div class="sqxx-linetwo">
                       <!--当p标签加上类linetwo-aixinimg的时候，显示的是爱心图片-->
                       {if $v.zan==1}
                       <p class="linetwo-aixinimg"></p>
                       {else}
                       <p>{$v.comment_content}</p>
                       {/if}
                     </div>
                     <div class="clearf"></div>
                     <!--留言评论可点击的那个横条加这个位置-->
                   </div>
                   <div class="clearf"></div>
                 </div> 
                 <!--带灰色背景的内容模块--> 
                 <div class="sqxx-xxcon">
                   {if $v.ask_content}
                   <div class="xxcon-maincon">
                     <div class="sqxx-text">
                       <p>{$v.ask_content}</p>
                     </div>
                   </div>
                   {/if}
                 
                 <!-- 图片 -->
           
                 {if $v.picture_list}
                 <div class="left sqmessage-img rp_preview_wrap" data-multiple_imgs='{$v.picture_list|jsonstr}'>
                   <ul>
                     {foreach $v.picture_list as $k=>$value}
                     <li class="rp_preview_img" data-index="{$k}" style='background: url({$value.common_pic_url}) no-repeat center center;background-size:cover;'></li>
                          
                    <!--
                    <li class="rp_preview_img" data-index="{$k}"><img src='./../../public/images/default-community.png'></li>
                    -->
                     {/foreach}
                   </ul>
                 </div>
                 {/if}
                </div>
               </div>
               {/foreach}
               </script>

      <script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="./../../public/js/modules/culture_community/community_news.js"></script>