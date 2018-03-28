<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>收藏的文章</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body class="main-body2">
  <div class="wrap" id="wrap1">
    <script id="article_list_tpl" type="text/x-jsmart-tmpl"> 
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>收藏的文章</h2>
      </header>
      <section class="main-section" id="article_list">
        <!--遮罩-->
        <div class="mask cancel_collection" style="display:none;"></div>
        <!--删除  字体变红的类是center-red-->
        <div class="scwz-del cancel_collection" style="display:none;" id="cancel_collection_dialog">
          <div class="deledt-confirm">
            <div class="confirm-top">确认取消收藏吗？</div>
            <div class="confirm-bottom center-red" id="submit">确认</div>
          </div>
          <div class="deledt-cancle">
            <div class="cancle-btn" id="cancel">取消</div>
          </div>
        </div>

        <div class="scwz-box">
          {if $artfav_List.length>0}
            {foreach $artfav_List as $key=>$value}
              {if $value.format==1}
                  <!--1 文字-->
                  <div class="scwz-word article_item" data-status="{$value.status}" data-code="{$value.article_code}">
                    <div class="scwz-tit">{$value.title}</div>
                    <div class="scwz-date yueduliang-only">
                      <div class="left">{$value.date}</div>
                      <!--阅读量-->
                      <div class="left yueduliang-div">
	                    <p class="left yueduliang-yanjing">{$value.views}</p>
                        <div class="clearf"></div>
	                </div>
                      <a class="right" href="javascript:void(0);">
                        {foreach $value.taglist as $k=>$v}
                          {$v}&nbsp;
                        {/foreach}
                      </a>
                      <div class="clearf"></div>
                    </div>
                  </div>
              {elseif $value.format==2}
                  <!--1 图片文字-->
                  <div class="scwz-img-word scwz-img-wordwidth article_item scwz-word" data-status="{$value.status}" data-code="{$value.article_code}">
                    <div class="img-wordwidth" style="background: url('{$value.picture_list[0].picture}') no-repeat center center #fff;background-size: cover;" ></div>
                    <!--<img data-original="{$value.picture_list[0].picture}" src="" class="scwz-img left" style="height:90px">-->
                    <div class="scwz-tit right">{$value.title}</div>
                    <div class="scwz-date yueduliang-only">
                      <div class="left">{$value.date}</div>
                    <!--阅读量-->
                      <div class="left yueduliang-div">
	                    <p class="left yueduliang-yanjing">{$value.views}</p>
                        <div class="clearf"></div>
	                </div>
                      <a class="right" href="javascript:void(0);">
                        {foreach $value.taglist as $k=>$v}
                          {$v}&nbsp;
                        {/foreach}
                      </a>
                      <div class="clearf"></div>
                    </div>
                    <div class="clearf"></div>
                  </div>
              {elseif $value.format==3}
                  <!--3 文字图片-->
                  <div class="scwz-word-img article_item scwz-word" data-status="{$value.status}" data-code="{$value.article_code}">
                    <div class="scwz-tit">{$value.title}</div>
                    <div class="scwz-pic scwz-picwidth">
                      {if $value.picture_list.length>0}
                        {foreach $value.picture_list as $k=>$img}
                          {if $k<=2}
                            <!--<img data-original="{$img.picture}" src="" class="scwz-img" style="padding-bottom:4px;width:32%;height:90px">-->
                            <div class="left" style="background: url('{$img.picture}') no-repeat center center #fff;background-size: cover;"></div>
                          {/if}
                        {/foreach}
                      {/if}
                    </div>
                    <div class="clearf"></div>
                    <div class="scwz-date yueduliang-only">
                      <div class="left">{$value.date}</div>
                      <!--阅读量-->
                      <div class="left yueduliang-div">
	                    <p class="left yueduliang-yanjing">{$value.views}</p>
                        <div class="clearf"></div>
	                </div>
                      <a class="right" href="javascript:void(0);">
                        {foreach $value.taglist as $k=>$v}
                          {$v}&nbsp;
                        {/foreach}
                      </a>
                      <div class="clearf"></div>
                    </div>
                  </div>
              {else}

              {/if}
            {/foreach}
          {/if}

        </div>
      </section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/articles_list.js"></script>




