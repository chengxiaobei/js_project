<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>购物车</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style1.css">
<style>

.mybox-btn-dis{
	color:#666666 !important;
}
</style>
</head>
<body>
  <div class="wrap">
  <script id="jsmart_tpl_off" type="text/x-jsmart-tmpl">
    <header>
      <a class="back-btn"></a>
      <h2>购物车</h2>
      <a class="delete-btn" id="deletecartoff"></a>
    </header>
    <section class="main-section sc-bar-section sc-gwc-section">
      <div id="plusandminus" style="display:none">
	      <!-- 遮罩 -->
	      <div class="mask" style="z-index:602"></div>
	      <!-- 编辑商品数量弹窗 -->
	      <div class="sc-gwc-numwd-con">
	        <h1>编辑商品数量</h1>
	        <!-- 编辑数量模块 -->
	        <div class="edit-num-con">
	          <!-- 减按钮,不可点击时添加类minus-btn-dis -->
	          <a class="left minus-btn minusbox"></a>
	          <!-- 输入,不可编辑时添加类edit-input-dis -->
	          <input id="inputnum" class="left edit-input" type="tel" value="0" maxlength=3>
	          <!-- 加按钮,不可点击时添加类plus-btn-dis -->
	          <a class="right plus-btn plusbox"></a>
	          <div class="clearf"></div>
	        </div>
	        <!-- 按钮模块 -->
	        <div class="btns-con">
	          <a class="left cancle-btn" id="close">取消</a>
	          <a class="right confirm-btn" id="confirmoff">确认</a>
	          <div class="clearf"></div>
	        </div>
	      </div>
      </div>
      <!-- 全选模块 -->
      {if $shop_goods.length>0}
         <div class="sc-gwc-selall-con">
         <!-- 全选按钮，选中时添加类selall-btn-seled -->
         <a class="selall-btn" id="selectall"></a>
         <!-- 文字 -->
         <p>全选</p>
        </div>
	      <!-- 购物车列表模块 -->
	    <div class="sc-gwc-pro-con">
	        <!-- 列表 -->
         <ul class="sc-gwc-pro-ul">
	        {foreach $shop_goods as $key => $value}
	          <li data-productcode={$value.product_code} data-price={$value.price} data-code={$key}>
	            <!-- 按钮 -->
	            <div class="sel-btn-con">
	              <!-- 选择按钮,选中时添加类seled-btn -->
	              <a class="sel-btn {if $key == 0}seled-btn{/if}"></a>   
	            </div>
	            <!-- 商品信息 -->
	            <div class="pro-info-con">
	              <!-- 图片 -->
	              <div class="img-con">
	                <img src="{$value.product_picture}">
	              </div>
	              <!-- 信息 -->
	              <div class="info-con">
	                <p class="name-p">{$value.goodname}</p>
	                <p class="spec-p">{$value.attribute}</p>
	                <p class="price-p"><span>{$value.price}</span>元</p>
	                <!-- 选择数量 -->
	                <div class="num-div num_box" data-code={$key}>
	                  <!-- 减号按钮不可点击时添加类minus-btn-dis -->
	                  <a class="left minus-btn minus minusoff"></a>
	                  <!-- 数字变灰时添加类num-span-dis -->
	                  <span class="left num-span num_{$key}">{$value.products}</span>
	                  <!-- 加号按钮不可点击时添加类plus-btn-dis -->
	                  <a class="right plus-btn plus plusoff"></a>
	                  <div class="clearf"></div>
	                </div>
	              </div>
	            </div>
	          </li>          
	       {/foreach} 
         </ul>
	    </div>
      {/if}
      <!-- 底部总价条 -->
      <div class="sc-total-price-bar" style="z-index:599">
        <!-- 价格 -->
        <div class="left price-div">
          <p>共<span id="allprice">0</span>元</p>
        </div>
        <!-- 按钮 -->
        <a class="right nor-btn" id="addorder">去下单</a>
        <div class="clearf"></div>
      </div>
    </section>
   </script>
   <script id="jsmart_tpl" type="text/x-jsmart-tmpl">
    <header>
      <a class="back-btn"></a>
      <h2>购物车</h2>
      <a class="delete-btn" id="deletecart"></a>
    </header>
    <section class="main-section sc-bar-section sc-gwc-section">
      <div id="plusandminus" style="display:none">
	      <!-- 遮罩 -->
	      <div class="mask" style="z-index:602"></div>
	      <!-- 编辑商品数量弹窗 -->
	      <div class="sc-gwc-numwd-con">
	        <h1>编辑商品数量</h1>
	        <!-- 编辑数量模块 -->
	        <div class="edit-num-con">
	          <!-- 减按钮,不可点击时添加类minus-btn-dis -->
	          <a class="left minus-btn minusbox"></a>
	          <!-- 输入,不可编辑时添加类edit-input-dis -->
	          <input id="inputnum" class="left edit-input" type="tel" value="0" maxlength=3>
	          <!-- 加按钮,不可点击时添加类plus-btn-dis -->
	          <a class="right plus-btn plusbox"></a>
	          <div class="clearf"></div>
	        </div>
	        <!-- 按钮模块 -->
	        <div class="btns-con">
	          <a class="left cancle-btn" id="close">取消</a>
	          <a class="right confirm-btn" id="confirm">确认</a>
	          <div class="clearf"></div>
	        </div>
	      </div>
      </div>
      <!-- 全选模块 -->

        <div class="sc-gwc-selall-con">
         <!-- 全选按钮，选中时添加类selall-btn-seled -->
         <a class="selall-btn" id="selectall"></a>
         <!-- 文字 -->
         <p>全选</p>
        </div>
	      <!-- 购物车列表模块 -->
	    <div class="sc-gwc-pro-con">
	        <!-- 列表 -->
         <ul class="sc-gwc-pro-ul">
	        {foreach $list as $key => $value}
	          {if $value.product_status == "1"}
	          <li class="shop_basket_code_{$value.shop_basket_code}" data-code={$value.shop_basket_code} data-productcode={$value.product_code}
	            data-name={$value.product_title} data-price={$value.price} data-products={$value.products} data-picture={$value.product_picture} data-attribute='{$value.attribute}' data-properties='{$value.properties}'
	            data-status={$value.product_status}
	            >
	            <!-- 按钮 -->
	            <div class="sel-btn-con">
	              <!-- 选择按钮,选中时添加类seled-btn -->
	              <a class="sel-btn"></a>   
	            </div>
	            <!-- 商品信息 -->
	            <div class="pro-info-con">
	              <!-- 图片 -->
	              <div class="img-con">
	                <img src="{$value.product_picture}">
	              </div>
	              <!-- 信息 -->
	              <div class="info-con">
	                <p class="name-p">{$value.product_title}</p>
	                <p class="spec-p">{$value.attribute}</p>
	                <p class="price-p"><span>{$value.price}</span>元</p>
	                <!-- 选择数量 -->
	                <div class="num-div num_box" data-code={$value.shop_basket_code} data-properties={$value.properties}>
	                  <!-- 减号按钮不可点击时添加类minus-btn-dis -->
	                  <a class="left minus-btn minus minusnormal"></a>
	                  <!-- 数字变灰时添加类num-span-dis -->
	                  <span class="left num-span num_{$value.shop_basket_code}">{$value.products}</span>
	                  <!-- 加号按钮不可点击时添加类plus-btn-dis -->
	                  <a class="right plus-btn plus plusnormal"></a>
	                  <div class="clearf"></div>
	                </div>
	              </div>
	            </div>
	          </li>
	          {/if}
	          {if $value.product_status == "2"}
	          <li class="shop_basket_code_{$value.shop_basket_code}" data-code={$value.shop_basket_code} data-productcode={$value.product_code} 
	           data-name={$value.product_title} data-price={$value.price} data-products={$value.products} data-picture={$value.product_picture} data-attribute='{$value.attribute}' data-properties='{$value.properties}'
	           data-status={$value.product_status}
	           >
	            <!-- 按钮 -->
	            <div class="sel-btn-con">
	              <!-- 选择按钮,选中时添加类seled-btn -->
	              <a class="sel-btn"></a>   
	            </div>
	            <!-- 商品信息 -->
	            <div class="pro-info-con">
	              <!-- 图片 -->
	              <div class="img-con">
	                <img src="{$value.product_picture}">
	                <!-- 遮罩文字 -->
	                <div class="white-mask"></div>
	                <div class="mask-div">        
	                  <p>库存不足</p>
	                </div>
	              </div>
	              <!-- 信息 -->
	              <div class="info-con">
	                <p class="name-p">{$value.product_title}</p>
	                <p class="spec-p">{$value.attribute}</p>
	                <p class="price-p"><span>{$value.price}</span>元</p>
	                <!-- 选择数量 -->
	                <div class="num-div num_box" data-code={$value.shop_basket_code} data-properties={$value.properties}>
	                  <!-- 减号按钮不可点击时添加类minus-btn-dis -->
	                  <a class="left minus-btn minus minusnormal"></a>
	                  <!-- 数字变灰时添加类num-span-dis -->
	                  <span class="left num-span num_{$value.shop_basket_code}">{$value.products}</span>
	                  <!-- 加号按钮不可点击时添加类plus-btn-dis -->
	                  <a class="right plus-btn plus plusnormal"></a>
	                  <div class="clearf"></div>
	                </div>
	              </div>
	            </div>
	          </li>
	          {/if}
	          {if $value.product_status == "0"}
	          <li class="shop_basket_code_{$value.shop_basket_code}" data-code={$value.shop_basket_code} data-productcode={$value.product_code} 
	           data-name={$value.product_title} data-price={$value.price} data-products={$value.products} data-picture={$value.product_picture} data-attribute='{$value.attribute}' data-properties='{$value.properties}'
	           data-status={$value.product_status}
	           >
	            <!-- 按钮 -->
	            <div class="sel-btn-con">
	              <!-- 选择按钮,选中时添加类seled-btn -->
	              <a class="sel-btn"></a>   
	            </div>
	            <!-- 商品信息 -->
	            <div class="pro-info-con">
	              <!-- 图片 -->
	              <div class="img-con">
	                <img src="{$value.product_picture}">
	                <!-- 遮罩文字 -->
	                <div class="white-mask"></div>
	                <div class="mask-div">
	                  <p>商品失效</p>
	                </div>
	              </div>
	              <!-- 信息 -->
	              <div class="info-con">
	               <p class="name-p">{$value.product_title}</p>
	                <p class="spec-p">{$value.attribute}</p>
	                <p class="price-p"><span>{$value.price}</span>元</p>
	                <!-- 移除按钮模块 -->
	                <div class="btn-con">
	                  <a class="remove-btn remove_item">移除</a>
	                </div>
	              </div>
	            </div>
	          </li>
	          {/if}
	       {/foreach} 
          </ul>
	    </div>
      <!-- 底部总价条 -->
      <div class="sc-total-price-bar" style="z-index:599">
        <!-- 价格 -->
        <div class="left price-div">
          <p>共<span id="allprice">0</span>元</p>
        </div>
        <!-- 按钮 -->
        <a class="right nor-btn" id="addorder">去下单</a>
        <div class="clearf"></div>
      </div>
    </section>
    </script>
  </div>
</body>
 <script script id="jsmart_tpl_refresh" type="text/x-jsmart-tmpl">
 {foreach $list as $key => $value}
	{if $value.product_status == "1"}
	  <li class="shop_basket_code_{$value.shop_basket_code}" data-code={$value.shop_basket_code} data-productcode={$value.product_code} 
	   data-name={$value.product_title} data-price={$value.price} data-products={$value.products} data-picture={$value.product_picture} data-attribute='{$value.attribute}' data-properties='{$value.properties}'
	    data-status={$value.product_status}
	   >
	    <!-- 按钮 -->
	    <div class="sel-btn-con">
	      <!-- 选择按钮,选中时添加类seled-btn -->
	      <a class="sel-btn"></a>   
	    </div>
	    <!-- 商品信息 -->
	    <div class="pro-info-con">
	      <!-- 图片 -->
	      <div class="img-con">
	        <img src="{$value.product_picture}">
	      </div>
	      <!-- 信息 -->
	      <div class="info-con">
	        <p class="name-p">{$value.product_title}</p>
	        <p class="spec-p">{$value.attribute}</p>
	        <p class="price-p"><span>{$value.price}</span>元</p>
	        <!-- 选择数量 -->
	        <div class="num-div num_box" data-code={$value.shop_basket_code} data-properties={$value.properties}>
	          <!-- 减号按钮不可点击时添加类minus-btn-dis -->
	          <a class="left minus-btn minus minusnormal"></a>
	          <!-- 数字变灰时添加类num-span-dis -->
	          <span class="left num-span num_{$value.shop_basket_code}">{$value.products}</span>
	          <!-- 加号按钮不可点击时添加类plus-btn-dis -->
	          <a class="right plus-btn plus plusnormal"></a>
	          <div class="clearf"></div>
	        </div>
	      </div>
	    </div>
	  </li>
	  {/if}
	  {if $value.product_status == "2"}
	  <li class="shop_basket_code_{$value.shop_basket_code}" data-code={$value.shop_basket_code} data-productcode={$value.product_code}
	   data-name={$value.product_title} data-price={$value.price} data-products={$value.products} data-picture={$value.product_picture} data-attribute='{$value.attribute}' data-properties='{$value.properties}'
	    data-status={$value.product_status}
	   >
	    <!-- 按钮 -->
	    <div class="sel-btn-con">
	      <!-- 选择按钮,选中时添加类seled-btn -->
	      <a class="sel-btn"></a>   
	    </div>
	    <!-- 商品信息 -->
	    <div class="pro-info-con">
	      <!-- 图片 -->
	      <div class="img-con">
	        <img src="{$value.product_picture}">
	        <!-- 遮罩文字 -->
	        <div class="white-mask"></div>
	        <div class="mask-div">        
	          <p>库存不足</p>
	        </div>
	      </div>
	      <!-- 信息 -->
	      <div class="info-con">
	       <p class="name-p">{$value.product_title}</p>
	        <p class="spec-p">{$value.attribute}</p>
	        <p class="price-p"><span>{$value.price}</span>元</p>
	        <!-- 选择数量 -->
	        <div class="num-div">
	          <!-- 减号按钮不可点击时添加类minus-btn-dis -->
	          <a class="left minus-btn minus-btn-dis"></a>
	          <!-- 数字变灰时添加类num-span-dis -->
	          <span class="left num-span num-span-dis">0</span>
	          <!-- 加号按钮不可点击时添加类plus-btn-dis -->
	          <a class="right plus-btn plus-btn-dis"></a>
	          <div class="clearf"></div>
	        </div>
	      </div>
	    </div>
	  </li>
	  {/if}
	  {if $value.product_status == "0"}
	  <li class="shop_basket_code_{$value.shop_basket_code}" data-code={$value.shop_basket_code} data-productcode={$value.product_code}
	   data-name={$value.product_title} data-price={$value.price} data-products={$value.products} data-picture={$value.product_picture} data-attribute='{$value.attribute}' data-properties='{$value.properties}'
	    data-status={$value.product_status}
	   >
	    <!-- 按钮 -->
	    <div class="sel-btn-con">
	      <!-- 选择按钮,选中时添加类seled-btn -->
	      <a class="sel-btn"></a>   
	    </div>
	    <!-- 商品信息 -->
	    <div class="pro-info-con">
	      <!-- 图片 -->
	      <div class="img-con">
	        <img src="{$value.product_picture}">
	        <!-- 遮罩文字 -->
	        <div class="white-mask"></div>
	        <div class="mask-div">
	          <p>商品下架</p>
	        </div>
	      </div>
	      <!-- 信息 -->
	      <div class="info-con">
	       <p class="name-p">{$value.product_title}</p>
	        <p class="spec-p">{$value.attribute}</p>
	        <p class="price-p"><span>{$value.price}</span>元</p>
	        <!-- 移除按钮模块 -->
	        <div class="btn-con">
	          <a class="remove-btn remove_item">移除</a>
	        </div>
	      </div>
	    </div>
	  </li>
	{/if}
  {/foreach} 
 </script>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/shopping_store/cart.js"></script>
</html>


