<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Testmodel extends CI_Model{

	public function __construct(){
		parent::__construct() ;
		$this->load->helper("http") ;
	}
	


	public function test1(){
		try{
			// print_r($_REQUEST) ;
			echo $this->input->post('name')."<br>" ;
			echo $this->input->post('age') ;
			getPostData_test('http://www.baidu.com','name=bxd&age24') ;
			return "success" ;
		}
		catch(Exception $e){
			return "fail" ;
		}
	}

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
				$return = '' ;
			}

		}catch(Exception $e){
			$ret = false ;
		}
		return $return ;
	}





}

?>