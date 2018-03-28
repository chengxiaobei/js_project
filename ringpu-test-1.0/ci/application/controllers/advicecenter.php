<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class Advicecenter extends CI_Controller {

	public function __construct(){
		parent::__construct() ;
		$this->load->model("Advicemodel","advicemodel") ;
	}


	// 获取顶部条
	public function getArtcategories(){
		$ret = $this->advicemodel->getArtcategories() ;
		echo $ret ;
	}

    // 获取文章内容
	public function getArticlelist(){
		$ret = $this->advicemodel->getArticlelist() ;
		echo $ret ;
	}
    // 获取文章详情
	public function getArticledetail(){
		$ret = $this->advicemodel->getArticledetail() ;
		echo $ret ;
	}
	// 获取文章统计
	public function getArticleview(){
		$ret = $this->advicemodel->getArticleview() ;
		echo $ret ;
	}
	// 收藏文章
	public function addArticle(){
		$ret = $this->advicemodel->addArticle() ;
		echo $ret ;
	}
	// 取消收藏文章
	public function delArticle(){
		$ret = $this->advicemodel->delArticle() ;
		echo $ret ;
	}
	// 获取评论
	public function getComments(){
		$ret = $this->advicemodel->getComments() ;
		echo $ret ;
	}
	// 添加评论
	public function addComments(){
		$ret = $this->advicemodel->addComments() ;
		echo $ret ;
	}
	// 搜索
	public function getArticlebytitle(){
		$ret = $this->advicemodel->getArticlebytitle() ;
		echo $ret ;
	}
	//分享获取养殖币 
	public function getArticleShare(){
		$ret = $this->advicemodel->getArticleShare() ;
		echo $ret ;
	}

}