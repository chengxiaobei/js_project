<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>优惠券</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">
</head>
<body class="main-body2">
  <div class="wrap">
  
      <header>
        <a class="back-btn coupon-list-back" href="javascript:void(0);"></a>
        <h2>优惠券</h2>
      </header>
      <section class="main-section">
       <div class="center-mt yhq-rule-bg" style="display:none">
	      <ul>
	        <li>
	          1.养殖宝所发放的优惠券仅限在有效期内在养殖宝商城或者动物诊疗抵扣订单金额，过期作废。不能支付运费，不能兑换现金或其它用途，不开具发票。
	        </li>
	        <li>
	          2.使用优惠券的订单，如果未支付订单前取消，系统会在取消订单成功后24小时内把优惠券退回帐号，有效期不变。
	        </li>
	        <li>
	          3.订单支付后取消订单或者拒收，优惠券作废，不予退回。
	        </li>
	        <li>
	          4.使用商城优惠券的订单，若发生售后退换货，按商品售价所占订单金额比例等额拆分实际支付金额，已用优惠券不退还。比如：您购买了价格为80元的商品A，和价格为120元的商品B。使用了全场满200-50元的优惠券一张。实际付款为150元。
	        </li>
	        <li>
	          当您单独申请A商品退款时，应退金额为：150*(80/200)=150*0.4=60元
	        </li>
	        <li>
	          当您单独申请B商品退款时，应退金额为：150*(120/200)=150*0.6=90元
	        </li>
	        <li>
	          5.  每张优惠券仅可使用一次，每个订单仅可使用一张优惠券。
	        </li>
	        <li>
	          6.  规则最终解释权归养殖宝所有。
	        </li>
	      </ul>
       </div>
        <!--使用规则-->
        <div class="yhq-userule">
          <a>使用规则</a>
        </div>
        <!--优惠券1-->
        <div id="couponlist">
        <script id="coupon_list_tpl" type="text/x-jsmart-tmpl">  
         {if $list.length>0}
          {foreach $list as $key=>$value}
            <div class="yhq-redbox" data-code={$value.code} data-name={$value.coupons_depict}>
              <div class="yhq-discount">
                <div class="left">
                  {if $value.campaignType=='1'}
                    现金券
                  {elseif $value.campaignType=='2'}
                    折扣券
                  {elseif $value.campaignType=='3'}
                    满减券
                  {elseif $value.campaignType=='4'}
                    动物诊疗现金券
                  {elseif $value.campaignType=='5'}
                    动物诊疗折扣券
                  {elseif $value.campaignType=='6'}
                    动物诊疗满减券
                  {else}
                  {/if}
                </div>
                <div class="right">{$value.coupons_depict}</div>
                <div class="clearf"></div>
              </div>
              <div class="yhq-indate">有效期至{$value.expireDay}</div>
              <div class="yhq-limit">{$value.protocol}</div>
            </div>
          {/foreach}
        {/if} 
        </div>
       </script>
      </section>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/shopping_store/coupon_list.js"></script>




