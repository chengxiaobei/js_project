<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// 公共接口
class Common extends CI_Controller {

	public function __construct(){
		parent::__construct() ;
		$this->load->model("Commonmodel","commonmodel") ;
	}

	// 轮播图
	public function carousel_list(){
		$ret = $this->commonmodel->carousel_list() ;
		echo $ret ;
	}

	// 查询省
	public function query_provice(){
		$ret = $this->commonmodel->query_provice() ;
		echo $ret ;
	}

	// 查询城市
	public  function query_cities(){
		$ret = $this->commonmodel->query_cities() ;
		echo $ret ;
	}

	// 查询地区
	public function query_area(){
		$ret = $this->commonmodel->query_area() ;
		echo $ret ;
	}

}