<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>购物订单</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body>
  
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="orders_list_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>购物订单</h2>
      </header>
      <section class="main-section" id="order_list">
        {if $data && $data.length>0}
          {foreach $data as $key=>$value}
            <div class="gwdd-orderfrom order_item" data-order_code="{$value.order_code}" order-type="{$value.order_status}">
              <div class="gwdd-tpay">
                  <div class="gwdd-ordertime left">下单时间：{$value.created}</div>
                  {if $value.order_status && $value.order_status=="60006"}<!-- 交易成功 -->
                      <div class="right center-red">交易成功</div>
                  {elseif $value.order_status && $value.order_status=="60001"}<!-- 待支付 -->
                      <div class="right center-red">待支付</div>
                  {elseif $value.order_status && $value.order_status=="60003"}<!-- 待发货 -->
                      <div class="right center-red">待发货</div>
                  {elseif $value.order_status && $value.order_status=="60005"}<!-- 待确认收货 -->
                      <div class="right center-red">待收货</div>
                  {elseif $value.order_status && $value.order_status=="60004"}<!-- 待评价 -->
                      <div class="right center-red">待评价</div>
                  {else}<!-- 已取消 -->
                      <div class="right center-red">已取消</div>
                  {/if}
                  <div class="clearf"></div>
                </div>
              <!-- 产品列表 -->
              {if $value.order_product_list && $value.order_product_list.length>0}
                {foreach $value.order_product_list as $k=>$p}
                  <!--产品-->
                  <div class="gwdd-product">
                    <!--产品图片-->
                    <div class="gwdd-pro-img left"><img src="" data-original="{$p.picture}"></div>
                    <!--产品详情-->
                    <div class="gwdd-pro-detail left">
                      <div class="pro-name">{$p.title}</div>
                      <div class="pro-amount">{$p.attribute}</div>
                      <div class="pro-price">{$p.price} 元</div>
                    </div>
                    <!--产品数量-->
                    <div class="gwdd-pro-count"><span style="color:;">x  </span>{$p.quantity}</div>
                    <div class="clearf"></div>
                  </div>
                {/foreach}
              {/if}
                
              <!--按钮-->
              {if $value.order_status && $value.order_status=="60006"}<!-- 交易成功 -->
                <!--实际付款-->
                <div class="gwdd-total">共{$value.total_num}件商品，总计：<span>{$value.pay_amount}</span>元 (含运费{$value.total_express||0}元)</div>
                <div class="gwdd-btn">
                  <div class="gwdd-btn-grey right" style="display:none;"><a href="javascript:void(0);" class="order_feedback">反馈药品</a></div>
                  <div class="gwdd-btn-grey right"><a href="javascript:void(0);" class="order_delete">删除订单</a></div>
                  <div class="clearf"></div>
                </div>
              {elseif $value.order_status && $value.order_status=="60001"}<!-- 待支付 -->
                <!--实际付款-->
                <div class="gwdd-total">共{$value.total_num}件商品，总计：<span>{$value.pay_amount}</span>元 (含运费{$value.total_express||0}元)</div>
                <div class="gwdd-btn">
                  <div class="gwdd-btn-red right"><a href="javascript:void(0);" class="go_to_pay">支付</a></div>
                  <div class="gwdd-btn-grey right"><a href="javascript:void(0);" class="order_cancel">取消订单</a></div>
                  <div class="clearf"></div>
                </div>
              {elseif $value.order_status && $value.order_status=="60003"}<!-- 待发货 -->
                <!--实际付款-->
                <div class="gwdd-total">共{$value.total_num}件商品，总计：<span>{$value.pay_amount}</span>元 (含运费{$value.total_express||0}元)</div>
              {elseif $value.order_status && $value.order_status=="60005"}<!-- 待确认收货 -->
                <!--实际付款-->
                <div class="gwdd-total">共{$value.total_num}件商品，总计：<span>{$value.pay_amount}</span>元 (含运费{$value.total_express||0}元)</div>
                <div class="gwdd-btn">
                  <div class="gwdd-btn-red right"><a href="javascript:void(0);" class="order_confirm_receipt">确认收货</a></div>
                  <div class="clearf"></div>
                </div>
              {elseif $value.order_status && $value.order_status=="60004"}<!-- 待评价 -->
                <!--实际付款-->
                <div class="gwdd-total">共{$value.total_num}件商品，总计：<span>{$value.pay_amount}</span>元 (含运费{$value.total_express||0}元)</div>
                <div class="gwdd-btn">
                  <div class="gwdd-btn-red right"><a href="javascript:void(0);" class="order_evaluation">评价</a></div>
                  <div class="gwdd-btn-grey right" style="display:none;"><a href="javascript:void(0);" class="order_feedback">反馈药品</a></div>
                  <div class="clearf"></div>
                </div>
              {else}<!-- 已取消 -->
                <!--实际付款-->
                <div class="gwdd-total">共{$value.total_num}件商品，总计：<span>{$value.pay_amount}</span>元 (含运费{$value.total_express||0}元)</div>
                <div class="gwdd-btn">
                  <div class="gwdd-btn-grey right"><a href="javascript:void(0);" class="order_delete">删除订单</a></div>
                  <div class="clearf"></div>
                </div>
              {/if}
            </div>
          {/foreach}
        {/if}
      </section>
    </script>
  </div>

</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/orders_list.js"></script>




