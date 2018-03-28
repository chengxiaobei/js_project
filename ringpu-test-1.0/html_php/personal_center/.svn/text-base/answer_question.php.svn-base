<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title></title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

<script type="text/javascript" src="../../public/js/common/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="../../public/js/common/dialog.js"></script>

</head>

<!-- 产品反馈答题 -->
<body class="main-body2">
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="question_list_tpl">
      <header style="display:none;">
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2></h2>
        <a class="reg-btn" href="javascript:void(0);" id="option_submit">提交</a>
      </header>
      <section class="main-section" style="margin-top:0;">
        <!--问题1-->
        {if $data['feedback'] && $data['feedback'].length>0}
          {foreach $data['feedback'] as $key=>$value}
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
        <!-- <button onclick="submit_app()">test</button> -->
      </section>
    </script> 
  </div>

  <!-- 提示信息 -->
  <div class="center-tc tip-info" style="display:none;">
      <div></div>
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

    function getQueryString(name) {
        var search_str = decodeURIComponent(window.location.search);
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = search_str.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    var productcode = getQueryString('productcode') ;
    var producttitle = getQueryString('producttitle') ;
    var feedback_id = getQueryString('feedback_id') ;
    var usercode = getQueryString('usercode') || "" ;
    var type = 1 ; 


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
      product_code : productcode ,
      feedback_id : feedback_id ,
      type : type ,
      content : content ,
      list_options : list_options ,
      user_code : usercode
    } ;
    // console.info(p) ;
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
      d_alert.setTitle('请完善信息') ;
      d_alert.show() ;
    }
    return flag ;
  }




</script>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/answer_question.js"></script>




