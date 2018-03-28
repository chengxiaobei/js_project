<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Advicemodel extends CI_Model{

	public function __construct(){
		parent::__construct() ;
		$this->load->helper("http") ;
	}

    // 获取顶部条
	public function getArtcategories(){
		$ret = null ;
		try{
			$url = "article/getArtCategories" ;
			$params = array(
				"modules_code"=>$this->input->post('modules_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	// 获取文章列表
	public function getArticlelist(){
		$ret = null ;
		try{
			$url = "article/getArticleList" ;
			$params = array(
				"modules_code"=>$this->input->post('modules_code'),
				"categories_id"=>$this->input->post('categories_id'),
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
	// 获取文章内容
	public function getArticledetail(){
		$ret = null ;
		try{
			$url = "article/getArticleRelated" ;
			$params = array(		
				"modules_code"=>$this->input->post('modules_code'),
				"article_code"=>$this->input->post('article_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	// 获取文章内容
	public function getArticleview(){
		$ret = null ;
		try{
			$url = "article/addView" ;
			$params = array(		
				"modules_code"=>$this->input->post('modules_code'),
				"article_code"=>$this->input->post('article_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	// 添加收藏
	public function addArticle(){
		$ret = null ;
		try{
			$url = "article/addArticle" ;
			$params = array(
				"title"=>$this->input->post('title'),
				"article_code"=>$this->input->post('article_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
		// 取消收藏
	public function delArticle(){
		$ret = null ;
		try{
			$url = "article/delArtFavorite" ;
			$params = array(
				"title"=>$this->input->post('title'),
				"article_code"=>$this->input->post('article_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	// 获取评论
	public function getComments(){
		$ret = null ;
		try{
			$url = "article/getComments" ;
			$params = array(
				"title"=>$this->input->post('title'),
				"article_code"=>$this->input->post('article_code'),
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
	// 添加评论
	public function addComments(){
		$ret = null ;
		try{
			$url = "article/addComments" ;
			$params = array(			
				"article_code"=>$this->input->post('article_code'),
				"content"=>$this->input->post('content'),
				"comment_code"=>$this->input->post('comment_code'),
				"to_nickname"=>$this->input->post('to_nickname')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	// 搜索
	public function getArticlebytitle(){
		$ret = null ;
		try{
			$url = "article/getArticleByTitle" ;
			$params = array(			
			    "modules_code"=>$this->input->post('modules_code'),
				"title"=>$this->input->post('title'),
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
	// 分享获取养殖币
	public function getArticleShare(){
		$ret = null ;
		try{
			$url = "article/getArticleShare" ;
			$params = array(
					"article_code"=>$this->input->post('article_code'),
					"type_code"=>$this->input->post('type_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	

}