<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class Shoppingcenter extends CI_Controller {

	public function __construct(){
		parent::__construct() ;
		$this->load->model("Shoppingmodel","shoppingmodel") ;
	}


	//商品分类
	public function getCategorylist(){
		$ret = $this->shoppingmodel->getCategorylist() ;
		echo $ret ;
	}
    //商城首页
	public function getIndex(){
		$ret = $this->shoppingmodel->getIndex() ;
		echo $ret ;
	}
    //商城商品结果
	public function getProductgooslist(){
		$ret = $this->shoppingmodel->getProductgooslist() ;
		echo $ret ;
	}
	//商品评价
	public function evaluate(){
		$ret = $this->shoppingmodel->evaluate() ;
		echo $ret ;
	}
	
	//商品详情
	public function detail(){
		$ret = $this->shoppingmodel->detail() ;
		echo $ret ;
	}
	
	//获取购物车
	public function getShopbasket(){
		$ret = $this->shoppingmodel->getShopbasket() ;
		echo $ret ;
	}
	//改变购物车商品个数
	public function editShopbasket(){
		$ret = $this->shoppingmodel->editShopbasket() ;
		echo $ret ;
	}
	//删除购物车商品
	public function deleteShopbasket(){
		$ret = $this->shoppingmodel->deleteShopbasket() ;
		echo $ret ;
	}
	//添加购物车
	public function addShopbasket(){
		$ret = $this->shoppingmodel->addShopbasket() ;
		echo $ret ;
	}
	//获取订单信息
	public function getOrderprice(){
		$ret = $this->shoppingmodel->getOrderprice() ;
		echo $ret ;
	}
	//下单
	public function addOrders(){
		$ret = $this->shoppingmodel->addOrders() ;
		echo $ret ;
	}
    //线下支付
	public function payOffline(){
		$ret = $this->shoppingmodel->payOffline() ;
		echo $ret ;
	}
	//优惠劵
	public function getCouponslist(){
		$ret = $this->shoppingmodel->getCouponslist() ;
		echo $ret ;
	}
	// 微信支付
	public function weixin_pay(){
		$ret = $this->shoppingmodel->weixin_pay() ;
		echo $ret ;
	}
	public  function payAlipayinit(){
		echo json_encode($_REQUEST);
	}
	// 支付获取养殖币
	public function getOrderScore(){
		$ret = $this->shoppingmodel->getOrderScore() ;
		echo $ret ;
	}


}