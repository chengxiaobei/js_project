    <?php include "../common/header_culture.php";?>
    <link type="text/css" rel="stylesheet" href="../../public/css/swiper.css">
    <style type="text/css">
     .ovfHiden{overflow: hidden;}
    </style>
      <body class="whiteBg">
        <div class="wrap">
          <header>
	          <a class="back-btn"></a>
		        <h2>个人主页</h2>
            <a class=""></a>
	        </header>

	        <section class="main-section">
	        <!--养殖社区头像区域 -->
            <div class="yzsq-headermain" id="person">
              <script type="text/jsmrat-tmpl" id="person_tpl">
       	      <img src="../../public/images/topbg-img.png"class="topbg-img img-auto">
              <div class="headermain-toux" data-single_img='{$data.avatar}'>
       	        <span class="left">{$data.nick_name}</span>
       	        <img src="{$data.avatar}" id="person_image">
       	        <div class="clearf"></div>
              </div>
              </script>
            </div>

            <!--个人主页内容模块 -->
            <div id="personPage">
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
       <script type="text/x-jsmart-tmpl" id="personPage_tpl">
            {foreach $data.data_list as $v}
            <div class="yzsq-maincon grzy-noxian">
              <div class="maincon-content maincon-rigxian person-mainleft">
                <div class="maincon-left person-leftdate">
                  {if $v.timeMonth==""}
                  <p>{$v.timeDay}</p>
                  {else}
                  <p class="left">{$v.timeDay}</p>
                  <p class="grzy-month left">{$v.timeMonth}</p>
                  <div class="clearf"></div>
                  {/if}
                </div>
                <div class="maincon-right yzsq-marbom">
                  <!--
                  <div class="yzsqrig-linetwo left yzsqrig-nopadd">
                    <p>最近猪价又上升了</p>
                  </div>
                  -->
                  {if $v.ask_content}
                  <div class="yzsqrig-linethree left">
                    <p>{$v.ask_content}</p> 
                  </div>
                  {/if}
                  {if $v.picture_list}
                  <div class="grzy-linesix-mainimg left rp_preview_wrap" data-multiple_imgs='{$v.picture_list|jsonstr}'>
                    <ul>
                      {foreach $v.picture_list as $k=>$value}
                      
                      <li class="rp_preview_img" data-index="{$k}" style='background: url(./../../public/images/default-community.png) no-repeat center center;background-size:cover;'></li>
                         
                      <!--
                      <li class="rp_preview_img" data-index="{$k}"><img src='./../../public/images/default-community.png'></li>
                      -->
                      {/foreach}
                    </ul>
                  </div>
                  {/if}
                  <!--
                  <div class="clearf"></div>
                  -->
                </div>
                <div class="clearf"></div>
              </div> 
            </div>
            {/foreach}
            </script>
       <script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="./../../public/js/modules/culture_community/person_mainPage.js"></script>