  <?php include "../common/header_culture.php";?>
  <link type="text/css" rel="stylesheet" href="../../public/css/swiper.css">
    <style type="text/css">
     .ovfHiden{overflow: hidden;}
    </style>
    <body class="whiteBg">
      <div class="wrap">
        <header>
	        <a class="back-btn" id="back"></a>
		      <h2>发动态</h2>
          <a class="reg-btn fabiao-btn fabiao-btn-color">发表</a>
	      </header>

	    <section class="main-section content-padbom">

	        <!--textarea 输入文字区域 -->
          <div class="fdt-borbom">
            
             <textarea class="texta-noborder border-bottom" placeholder="说点什么吧......" id="text"></textarea>
             <p>
             <!--span标签不要换行-->
                <span class="texta-textcolor">0</span><span>/</span><span id="total">800</span>
             </p>
 
          </div>

         <!--下面的添加照片区域-->
       <div class="fpl-mainpic">
          <div class="fpl-picture">
            <ul id="fileList" class="img-list">
              <!--
              <li><img src="../../images/rou1.png"></li>
              <li><img src="../../images/rou2.png"></li>
              <li><img src="../../images/rou3.png"></li>
              <li class="fpl-nomar"><img src="../../images/rou4.png"></li>
              <li><img src="../../images/rou1.png"></li>
              <li><img src="../../images/rou2.png"></li>
              -->
              <li class="picture-addbtn" id="select">
              <input type="file" style="display:none;" id="choose"  multiple accept="image/*">
                <img src="../../public/images/addpicture-img.png">
                  <span>添加照片</span>
              </li>
              <div class="clearf"></div>
            </ul>
          </div>
        </div>

       <!--弹窗-->
        <div class="jb-alert" style="display:none">
          <p class="jb-alertimg"></p>
          <p class="jb-alerttext">评论成功</p>
        </div>
	    </section>
      </div>
      


      <!--图片放大预览-->
      <div class="whiteBg deledt-bg" style="display:none" id="rp_preview_wrap">

        <div class="wrap">
          <header>
             <a class="back-btn"></a>
             <h2>
               <!--span标签不要换行-->
               <span id="carousel_num">5</span><span>/</span><span id="total_num">6</span> 
             </h2>
             <a class="delete-btn"></a>
          </header>
          <section class="main-section">
            <!-- 轮播图主容器 -->
            <div class="ylpic-mainlb ylpic-imgtop oa-carousel swiper-container">
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
           <!-- <footer >
             <div class="huadpic-main" style="background:#000;height:40px;">
               <div class="oa-carousel-button-wrap huadpic-bommain">
                 <div class="oa-carousel-buttons huadpic-center">
                </div>
              </div>
            </div>
                     </footer> -->
        </div>
    </div>
<!--
     <div id="RP_COMMON_CONFIRM_GUIDE" style="display:none;position:absolute;z-index:800">		
            	   <div class="mask"></div>    
            	   <div class="rp-tc">	       
            	     <div class="rp-tc-tit">	         
            	     	 <p class="RP_COMMON_DIALOG_CONTENT" style="font-size:15px;">您好，由于违规操作，此功能已被系统自动禁用，请遵守社区规则；如需申请解禁，请拨打客服电话400-800-5696。</p>	       
            	     </div>	        
            	     <div class="rp-tc-btn">	     
            	       <a class="left rp-tc-btn-left RP_COMMON_DIALOG_CANCEL_GUIDE" style="display:none" href="javascript:void(0);">返回</a>     
            	       <a class="right rp-tc-btn-right rp-tc-blue RP_COMMON_DIALOG_CONFIRM_GUIDE" id="Banned-btn" href="javascript:void(0);" style="border:none;text-align:center;width:100%">确认</a>	          
            	      <div class="clearf"></div>	        
            	     </div>    	
            	   </div>
       </div>
-->
    </body>
    </html>
    <script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="./../../public/js/modules/culture_community/send_status.js"></script>