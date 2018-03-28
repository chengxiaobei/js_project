<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Shoppingmodel extends CI_Model{

	public function __construct(){
		parent::__construct() ;
		$this->load->helper("http") ;
	}


	//商品分类
	public function getCategorylist(){
		$ret = null ;
		try{
			$url = "shop/getCategoryList" ;
			$params = array(
				
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
    //商品首页 
	public function getIndex(){
		$ret = null ;
		try{
			$url = "navigation/getNavigation" ;
			$params = array(
				"position"=>$this->input->post('position')
				
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	//商品结果
	public function getProductgooslist(){
		$ret = null ;
		try{
			$url = "shop/getProductGoosList" ;
			$params = array(
				"category_id"=>$this->input->post('category_id'),
				"title"=>$this->input->post('title'),
				"sort"=>$this->input->post('sort'),
				"page_no"=>$this->input->post('page_no'),
				"page_size"=>$this->input->post('page_size')				
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	//商品详情
	public function detail(){
		$ret = null ;
		try{
			$url = "shop/product/detail" ;
			$params = array(
				"product_code"=>$this->input->post('product_code')		
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	//商品评价
	public function evaluate(){
		$ret = null ;
		try{
			$url = "shop/product/productcomments" ;
			if($this->input->post('product_comment_code')&&$this->input->post('up_or_down')){
				$params = array(
				"product_code"=>$this->input->post('product_code'),
				"product_votes_query"=>$this->input->post('product_votes_query'),
				"page_size"=>$this->input->post('page_size'),
				"product_comment_code"=>$this->input->post('product_comment_code'),
				"up_or_down"=>$this->input->post('up_or_down')					
			     ) ;
			}else{
				$params = array(
				"product_code"=>$this->input->post('product_code'),
				"product_votes_query"=>$this->input->post('product_votes_query'),
				"page_size"=>$this->input->post('page_size')						
			     ) ;
			}
			
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	//获取购物车
	public function getShopbasket(){
		$ret = null ;
		try{
			$url = "basket/getShopBasket" ;
			$params = array(
			    "page_no"=>$this->input->post('page_no'),
			    "page_size"=>$this->input->post('page_size')							
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
    //改变购物车商品个数
	public function editShopbasket(){
		$ret = null ;
		try{
			$url = "basket/editShopBasket";
			$params = array(
			    "products"=>$this->input->post('products'),
			    "shop_basket_code"=>$this->input->post('shop_basket_code'),
			    "properties"=>$this->input->post('properties')				
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
    //删除购物车商品
	public function deleteShopbasket(){
		$ret = null ;
		try{
			$url = "basket/deleteShopBasket" ;
			$params = array(
			    "list_code"=>$this->input->post('list_code')					
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	//加入购物车商品
	public function addShopbasket(){
		$ret = null ;
		try{
			$url = "basket/createShopBasket" ;
			$params = array(
			    "product_list"=>$this->input->post('product_list')					
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	public function getOrderprice(){
		$ret = null ;
		try{
			$url = "order/getOrderPrice" ;
			$params = array(
			    "coupon_code"=>$this->input->post('coupon_code'),
			    "list"=>$this->input->post('list')		
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	public function addOrders(){
		$ret = null ;
		try{
			$url = "order/AddOrders" ;
			$params = array(
			    "product_price"=>$this->input->post('product_price'),
			    "express"=>$this->input->post('express'),
			    "price"=>$this->input->post('price'),	
			    "coupon_code"=>$this->input->post('coupon_code'),
			    "list"=>$this->input->post('list'),
			    "order_receiver"=>$this->input->post('order_receiver'),
			    "order_details"=>$this->input->post('order_details'),
			    "order_invoice"=>$this->input->post('order_invoice')								
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	public function payOffline(){
		$ret = null ;
		try{
			$url = "remittance/addRemittance" ;
			$params = array(
			    "order_code"=>$this->input->post('order_code'),
			    "bank_name"=>$this->input->post('bank_name'),
			    "bank_account"=>$this->input->post('bank_account'),	
			    "remit_number"=>$this->input->post('remit_number')			   							
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	public function getCouponslist(){
		$ret = null ;
		try{
			$url = "coupons/getCouponsList" ;
			$params = array(
			    "product_total_price"=>$this->input->post('product_total_price'),
			    "page_no"=>$this->input->post('page_no'),	
			    "page_size"=>$this->input->post('page_size'),
			    "campaign_kind"=>$this->input->post('campaign_kind')	   							
			) ;
			$list=$this->input->post('list');
			if(!empty($list)){
				$params['list'] = $list ;
			}else{
				$params['list']= array();
			}
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}

    //微信支付
	public function weixin_pay(){
		require_once "WxPay.Data.php";
		$ret = null ;
		try{
			$url = "wxpay/wap/sign" ;
			$params = array(
				"order_code"=>$this->input->post('order_code') ,
				"pay_type"=>$this->input->post('pay_type') ,
				"pay_channel"=>$this->input->post('pay_channel') ,
				"pay_name"=>$this->input->post('pay_name'), 
				"openid"=>$this->input->post('openid'),
			) ;
			$ret = getPostData($url,$params) ;
			// print_r($ret) ;
			// file_put_contents("./pay.log", $ret, FILE_APPEND);

			$ret_arr = json_decode($ret,true) ;
 
			$return = array() ;

			if($ret_arr && $ret_arr['status'] && $ret_arr['status'] =='2000'){
				$jsapi = new WxPayJsApiPay();
				$jsapi->SetAppid($ret_arr['data']["appid"]);
				$timeStamp = time();
				$jsapi->SetTimeStamp("$timeStamp");
				$jsapi->SetNonceStr($jsapi->getNonceStr());
				// $jsapi->SetPackage("prepay_id=" . $UnifiedOrderResult['prepay_id']);
				$jsapi->SetPackage($ret_arr['data']['package']);
				$jsapi->SetSignType("MD5");
				$jsapi->SetPaySign($jsapi->MakeSign());
				$return = json_encode($jsapi->GetValues());
			}
			else{
				$return = $ret ;
			}

		}catch(Exception $e){
			$ret = false ;
		}
		return $return ;
	}
	public function getOrderScore(){
		$ret = null ;
		try{
			$url = "order/getOrderScore" ;
			$params = array(
					"type_code"=>$this->input->post('type_code'),
					"order_code"=>$this->input->post('order_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	
	

}