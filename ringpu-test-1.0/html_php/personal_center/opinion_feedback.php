<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>意见反馈</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

<link type="text/css" rel="stylesheet" href="../../public/css/rp_style3.css">
<link type="text/css" rel="stylesheet" href="../../public/css/swiper.css">

<script type="text/javascript" src="../../public/js/common/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="../../public/js/common/dialog.js"></script>

</head>
<style type="text/css">
     .ovfHiden{overflow: hidden;}
</style>
<!-- 意见反馈 -->
<body>
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="question_list_tpl">
      <header style="display:none;">
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>意见反馈</h2>
        <a class="reg-btn" href="javascript:void(0);" id="option_submit">提交</a>
      </header>
      <section class="main-section" style="margin-top:0;">
        <!--问题1-->
        {if $data && $data.feedback && $data.feedback.length>0}
          {foreach $data.feedback as $key=>$value}
            <div class="dtym-question question_item" data-required="{$value.required}" data-question_id="{$value.question_id}" data-multiple="{$value.question_multiple}">
              <div class="dtym-title">
                {$value.question_title}{if $value.required=='1'}*{/if}{if $value.question_multiple=="1"}（多选）{/if}
              </div>
              <!--选中是 answer-checked 没选中是 answer-check-->
              {if $value.option_list && $value.option_list.length>0}
                {foreach $value.option_list as $k=>$v}
                  {if $v.options_checked==1}
                      <div data-options_id="{$v.options_id}" class="dtym-answer answer-checked per-answer-option">{$v.options_name}</div>
                  {else}
                      <div data-options_id="{$v.options_id}" class="dtym-answer answer-check per-answer-option">{$v.options_name}</div>
                  {/if}
                {/foreach}
              {else}
                  <!--反馈意见-->
                  <div class="dtym-opinbox">
                    <div class="dtym-opinion">
                      <textarea id="other_opinion"></textarea>
                      <div class="dtym-plus">0/100</div>
                    </div>
                  </div>
              {/if}
            </div>
          {/foreach}
        {/if}

        <!--下面的添加照片区域-->
       
       <div class="fankui-mainpic">
          <div class="fpl-picture">
            <ul id="fileList" class="img-list">
              <li class="picture-addbtn" id="select">
              <input type="file" style="display:none;" id="choose"  multiple  accept="image/*">
                <img src="../../public/images/addpicture-img.png">
                  <span>添加照片</span>
              </li>
            </ul>
            <div class="clearf"></div>
          </div>
        </div>
        

      </section>
    </script> 
  </div>

  <!-- 提示信息 -->
  <div class="center-tc tip-info" style="display:none;">
      <div></div>
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


</body>
</html>

<!-- app调用 -->
<script type="text/javascript">

  // 公用提示框
  var d_alert = new Dialog({type:'alert'}) ;


  // 提供给app的函数
  function submit_app(){
    if(!answerQuestion_check()){
      return ;
    }
    var global_path = "http://"+window.location.hostname+"/ringpu/ci/";
    if((window.location.href).indexOf('https')!=-1){
		global_path = "https://"+window.location.hostname+"/ringpu/ci/";
	}

    function getQueryString(name) {
        var search_str = decodeURIComponent(window.location.search);
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = search_str.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    var usercode = getQueryString('usercode') ;
    var feedback_id = $('#wrap1').data('feedback_id');
    // 1 产品反馈 2 意见反馈
    var type = 2 ; 
    var list_options = [] ;
    var content = "" ;


    var list_options = [] ;
    []['forEach'].call(document.querySelectorAll('.per-answer-option'),function(v,i){
      var options_id = v && v.getAttribute('data-options_id') ;
      var tmp = {} ;
      tmp['options_id'] = options_id ;
      if(v.classList.contains('answer-checked')){
        tmp['options_checked'] = "1" ;
      }
      else{
        tmp['options_checked'] = "0" ;
      }
      list_options.push(tmp) ;
    }) ;
    
    content = document.querySelector('#other_opinion').value ;
    // console.info(list_options) ;
    var url = global_path + "index.php/personalcenter/creatFeedback" ;
    var p = {
      feedback_id : feedback_id ,
      type : type ,
      content : content ,
      list_options : list_options 
    } ;
    $.ajax({
      url : url ,
      data : p ,
      dataType : 'json' ,
      type: 'post'
    }).always(function(data){
      // console.info(data) ;
      if(data && data.status && data.status == "2000"){
        // window.location.href = "product_feedback.php" ;
        appForHtml5.showToast('success') ;
      }
      else{
        appForHtml5.showToast('fail') ;
      }
    }) ;

  }

  // 信息验证
  function answerQuestion_check(){
    var flag = true ;
    $('.question_item').each(function(i,v){
      var is_required = $(this).attr('data-required') ;
      if(is_required && is_required == '1'){
        // 是否是文本域
        if($(this).find('textarea').size() > 0){
          var other_opinion = $('#other_opinion').val() ;
          if(!other_opinion){
            flag = false ;
          }
        }
        else{
          if($(this).find('.answer-checked').size()<=0){
            flag = false ;
          }
        }
      }
    }) ;
    if(!flag){
      d_alert.setTitle('请完善问卷信息') ;
      d_alert.show() ;
    }
    return flag ;
  }


</script>

<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/opinion_feedback.js"></script>




