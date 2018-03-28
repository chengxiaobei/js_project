<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title></title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">

</head>
<body>
  <div class="wrap" id="wrap1">
  	<script id="order_detail_tpl" type="text/x-jsmart-tmpl"> 
	    <header>
	      <a class="back-btn backButton" href="javascript:void(0);"></a>
	      <h2>订单详情</h2>
	      {if $data.order_status!="60007"}{/if}
	      	<a class="phone-btn" href="tel:{$baseInfo_phonenum}"></a>
	      
	    </header>
	    <section class="main-section">
	      <!--订单号和下单时间-->
	      <div class="order-xq-form center-mt" id="order_status">
	      	<div class="order-xq-left right-btn">
	      	  <p>订单号：{$data.order_code}</p>
	      	  <p class="order-xq-time">下单时间：{$data.created}</p>
	      	</div>
	      	<div class="order-xq-right center-red" style="margin-top:-9px;">
	      		{if $data.order_status=="60006"}
	      			交易成功
				{elseif $data.order_status=="60001"}
					待支付
				{elseif $data.order_status=="60003"}
					待发货
				{elseif $data.order_status=="60005"}
					待收货
				{elseif $data.order_status=="60004"}
					待评价
				{else}
					已取消
				{/if}
	      	</div>
	      </div>

	      {if $data.order_status=="60006" || $data.order_status=="60004" || $data.order_status=="60005"}
	      	<div class="order-xq-send" id="order_logistics">
		      	<div class="order-xq-place right-btn">
		      	  <p>{$data.kuaidi_logistics_bean.context}</p>
		      	  <p class="order-xq-time">{$data.kuaidi_logistics_bean.time||$data.created}</p>
		      	</div>
		     </div>
	      {/if}

	      <!--派送地址-->
	      <div class="order-xq-location">
	        <div class="order-xp-xi">
	      	  <div class="order-xq-person">
	      	    <div class="order-xq-person-name left">{$data.order_receiver.receiver}</div>
	       	    <div class="left">{$data.order_receiver.telphone}</div>
	       	    <div class="clearf"></div>
	      	  </div>
	      	  <div class="order-xq-adress">
	      	  	{$data.order_receiver.region}{$data.order_receiver.city}{$data.order_receiver.area}{$data.order_receiver.detail}
	      	  </div>
	      	</div>
	      </div>
	      <!--产品-->
	      <div class="order-xp-buy">
	        <div class="order-xp-probox">
	        	{foreach $data.order_product_list as $key=>$value}
	        		<!--1-->
				    <div class="order-xp-product order_product_item" data-product_code="{$value.product_code}">
					    <!--产品图片-->
					    <div class="order-xp-pro-img left"><img src="{$value.picture}"></div>
					    <!--产品详情-->
					    <div class="order-xp-pro-detail left">
					      <div class="pro-name">{$value.title}</div>
					      <div class="pro-amount">{$value.attribute}</div>
					      <div class="pro-price"><span class="center-red">{$value.price}</span> 元</div>
					    </div>
					    <!--产品数量-->
					    <div class="order-xp-pro-count"><span style="color:;">x </span>{$value.quantity}</div>
					    <div class="clearf"></div>
					</div>
	        	{/foreach}
			</div>
			<!--备注-->
			{if $data.remark_message}
				<div class="order-xp-note">
				  <div class="order-xp-bz left">备注</div>
		          <div class="order-xp-word right">{$data.remark_message}</div>
		          <div class="clearf"></div>
				</div>
			{/if}
		  </div>
		  <!--优惠券-->
		  {if $data.coupons_id}
			  <div class="order-xp-yhq">
			  	<div class="left">优惠券</div>
			  	<div class="right">
				  	{$data.shop_coupon.coupons_depict||''}
			  	</div>
			  	<div class="clearf"></div>
			  </div>
		  {/if}
		  <!--商品金额  运费-->
		  <div class="order-xp-money">
		  	<ul>
		  	  <li>
		  	  	<div class="left">商品金额</div>
		  	  	<div class="right center-red">{$data.total_price}元</div>
		  	  	<div class="clearf"></div>
		  	  </li>
		  	  <li>
		  	  	<div class="left">运费</div>
		  	  	<div class="right center-red">{$data.total_express}元</div>
		  	  	<div class="clearf"></div>
		  	  </li>
		  	</ul>
		  </div>
		  <!--支付方式  发票-->
		  {if ( $data.order_status!="60007")||($data.has_invoice=='1')}
			  <div class="order-xp-money order-xp-lastbox">
			  	<ul>
				  {if $data.order_status!="60007" && ($data.pay_channel=='30001' || $data.pay_channel=='30002' || $data.pay_channel=='30003')}
				  	<li>
				  	  	<div class="left">支付方式</div>
				  	  	<div class="right">
				  	  		{if $data.pay_channel=='30001'}
				  	  			支付宝
				  	  		{elseif $data.pay_channel=='30002'}
				  	  			微信支付
				  	  		{elseif $data.pay_channel=='30003'}
				  	  			银联支付
				  	  		{elseif $data.pay_channel=='30004'}
				  	  			线下支付
				  	  		{else}
				  	  			
				  	  		{/if}
				  	  	</div>
				  	  	<div class="clearf"></div>
				  	</li>
				  {/if}
				  
				  {if $data.has_invoice=='1'}
				  	  <li>
				  	  	<div class="left">发票信息</div>
				  	  	<div class="right order-fapiao">
					  	  	{$data.invoice_title}
				  	  	</div>
				  	  	<div class="clearf"></div>
				  	  </li>
			  	  {/if}
			  	</ul>
			  </div>
		  {/if}
		  <!--实付款-->
		  {if $data.order_status=="60006"}
		  	<div class="center-total">
			  	<div class="order-xp-price left">总计：<span>{$data.pay_amount}</span> 元</div>
			  	<div class="order-xp-del-btn right" style="border-left:1px solid #e2e2e2;"><a href="javascript:void(0);" class="order_feedback">反馈药品</a></div>
			  	<div class="order-xp-del-btn right"><a href="javascript:void(0);" class="order_delete">删除订单</a></div>
			  	<div class="clearf"></div>
			</div>
		  {elseif $data.order_status=="60001"}
		  	<div class="center-total">
			  	<div class="cen-tot-price left">总计：<span>{$data.pay_amount}</span> 元</div>
			  	<div class="order-xp-topay-btn right"><a href="javascript:void(0);" class="go_to_pay">支付</a></div>
			  	<div class="order-xp-del-btn right"><a href="javascript:void(0);" class="order_cancel">取消订单</a></div>
			  	<div class="clearf"></div>
			</div>
		  {elseif $data.order_status=="60003"}
		  	<div class="center-total">
			  	<div class="cen-tot-price left">总计：<span>{$data.pay_amount}</span> 元</div>
			  	<!--
			  	<div class="order-xp-topay-btn right"><a href="javascript:void(0);" class="go_to_pay">去支付</a></div>
			  	<div class="order-xp-del-btn right"><a href="javascript:void(0);" class="order_cancel">取消订单</a></div>
			  	-->
			  	<div class="clearf"></div>
			</div>
		  {elseif $data.order_status=="60005"}
		  	<div class="center-total">
			  	<div class="cen-tot-price left">总计：<span>{$data.pay_amount}</span> 元</div>
			  	<div class="order-xp-shou-btn right"><a href="javascript:void(0);" class="order_confirm_receipt">确认收货</a></div>
			  	<div class="clearf"></div>
			</div>
		  {elseif $data.order_status=="60004"}
		  	<div class="center-total">
			  	<div class="cen-tot-price left">总计：<span>{$data.pay_amount}</span> 元</div>
			  	<div class="order-xp-topay-btn right"><a href="javascript:void(0);" class="order_evaluation">评价</a></div>
			  	<div class="order-xp-del-btn right"><a href="javascript:void(0);" class="order_feedback">反馈药品</a></div>
			  	<div class="clearf"></div>
			</div>
		  {else}
		  	<div class="center-total">
			  	<div class="order-xp-price left">总计：<span>{$data.pay_amount}</span> 元</div>
			  	<div class="order-xp-del-btn right"><a href="javascript:void(0);" class="order_delete">删除订单</a></div>
			  	<div class="clearf"></div>
	  		</div>
		  {/if}
	    </section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/order_detail.js"></script>




