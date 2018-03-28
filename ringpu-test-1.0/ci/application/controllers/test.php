<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Test extends CI_Controller {

	public function __construct(){
		parent::__construct() ;
		$this->load->model("Testmodel","testmodel") ;
	}


	public function test1(){

		$ret = array();

		$url = 'http://123.56.146.81:8685/assets/images/ask/201512/CA4DD5DD22EC25E43D6BACE9E647B439_HD.jpg' ;
		$size = getimagesize($url);  
		$ret['size'] = $size ;
		$ret['url'] = "data:{$size['mime']};base64," . base64_encode(file_get_contents($url)); 

		echo json_encode($ret) ;
	}

	// 微信支付回调
	public function weixin_pay(){
		$ret = $this->testmodel->weixin_pay() ;
		echo $ret ;
	}

	// 微信支付回调地址
	public function weixin_pay_callback(){
		echo 'success' ;
	}



} 


