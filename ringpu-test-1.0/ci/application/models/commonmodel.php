<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Commonmodel extends CI_Model{

	public function __construct(){
		parent::__construct() ;
		$this->load->helper("http") ;
	}


	public function carousel_list(){
		$ret = null ;
		try{
			$url = "adv/advs" ;
			$params = array() ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}


	public function query_provice(){
		$ret = null ;
		try{
			$url = "region/provice" ;
			$params = array() ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}

	public function query_cities(){
		$ret = null ;
		try{
			$url = "region/city" ;
			$params = array(
				"province_code"=>$this->input->post('province_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}

	public function query_area(){
		$ret = null ;
		try{
			$url = "region/area" ;
			$params = array(
				"city_code"=>$this->input->post('city_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}




}