<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <title>分类</title>
    <link type="text/css" rel="stylesheet" href="../../public/css/rp_style1.css">
</head>

<body>
    <div class="wrap">
        <script id="jsmart_tpl" type="text/x-jsmart-tmpl">
            <header>
                <a class="back-btn"></a>
                <h2>分类</h2>
            </header>
            <section class="main-section">
                <!-- 分类名称模块 -->
                <div class="sc-class-name-con">
                    <div class="sc-class-name-div">
                        <ul class="sc-class-name-ul">
                            <!-- li被选中时添加类curr-li -->
                            {foreach $data as $key => $value}
                            <li class="{if $key == 0}curr-li{/if} sel_{$key}" data-id={$key}>
                                <p>{$value.name}</p>
                                <!-- 右三角 -->
                                <div class="triangle-div"></div>
                            </li>
                            {/foreach}
                        </ul>
                    </div>
                </div>
                <!-- 对应商品模块 -->
                <div class="right sc-class-pro-con shangpin-three-martop">
                    {foreach $data as $key => $value} 
                    {if $key ==0}
                    <div class="sc-class-pro-div con_{$key}">
                        <!-- 对应商品列表 -->
                        <ul class="class-pro-ul">
                            <!-- 最后一排的li添加类no-borbottom -->
                            {if $value.childcatren.length>0} 
                           {foreach $value.childcatren as $k => $v}
                            <li data-code={$v.shopCat_Id} data-type="result">
                                <div class="pro-name-div">
                                    <p>{$v.name}</p>
                                </div>
                                <img src="../../public/images/default-head.png" data-original='{$v.picture}'>
                            </li>
                            {/foreach} 
                            {elseif $value.childgoodsren.length>0} 
                           {foreach $value.childgoodsren as $k => $v}
                            <li data-code={$v.goods_code} data-type="detail">
                                <div class="pro-name-div">
                                    <p>{$v.title}</p>
                                </div>
                                <img src="../../public/images/default-head.png" data-original="{$v.picture}">
                            </li>
                            {/foreach} 
                            {else}
                            <div class="public-none" style="width:67%">暂时没有需要的信息~</div>
                            {/if}
                        </ul>
                        <div class="clearf"></div>
                    </div>
                    {else}
                    <div class='con_{$key}' style='display:none'>
                        {foreach $value.childcatren as $kk => $vv}
                          {if $value.childcatren.length>0} 
                        <div class="left shangpin-three-height" data-code={$vv.shopCat_Id} data-type="result">
                            <p>{$vv.name}</p>
                        </div>
                          {elseif $value.childgoodsren.length>0}
                         <div class="left shangpin-three-height" data-code={$vv.goods_code} data-type="detail">
                            <p>{$vv.name}</p>
                        </div>
                         {else}
                            <div class="public-none" style="width:67%">暂时没有需要的信息~</div>
                          {/if}
                        <div class="clearf"></div>
                        <div class="sc-class-pro-div">
                            <!-- 对应商品列表 -->
                           <ul class="class-pro-ul">
                            <!-- 最后一排的li添加类no-borbottom -->
                            {if $vv.childcatren.length>0} 
                           {foreach $vv.childcatren as $k => $v}
                            <li data-code={$v.shopCat_Id} data-type="result">
                                <div class="pro-name-div">
                                    <p>{$v.name}</p>
                                </div>
                                <img src="../../public/images/default-head.png" data-original='{$v.picture}'>
                            </li>
                            {/foreach} 
                            {elseif $vv.childgoodsren.length>0} 
                           {foreach $vv.childgoodsren as $k => $v}
                            <li data-code={$v.goods_code} data-type="detail">
                                <div class="pro-name-div">
                                    <p>{$v.title}</p>
                                </div>
                                <img src="../../public/images/default-head.png" data-original="{$v.picture}">
                            </li>
                            {/foreach} 
                            {/if}
                        </ul>
                            <div class="clearf"></div>
                        </div>
                        {/foreach}
                    </div>
                    {/if} 
                 {/foreach}
                </div>
            </section>
        </script>
    </div>
</body>
<script type="text/javascript" src="../../public/js/common/require.min.js" data-main="../../public/js/modules/shopping_store/type.js"></script>

</html>