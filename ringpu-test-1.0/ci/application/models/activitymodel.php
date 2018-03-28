<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Activitymodel extends CI_Model{

	public function __construct(){
		parent::__construct() ;
		$this->load->helper("http") ;
	}
	// 抽奖
	public function zhuanpan(){
		$ret = null ;
		try{
			$url = "activity/turnplate" ;
			$params = array(
					"activity_code"=>$this->input->post('activity_code'),
					"user_channel"=>'1003',
					"user_code"=>$this->input->post('user_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	// 抽奖
	public function lotterylist(){
		$ret = null ;
		try{
			$url = "activity/getUserScoreList" ;
			$params = array(
					"activity_code"=>$this->input->post('activity_code'),
					"user_channel"=>'1003',
					"user_code"=>$this->input->post('user_code'),
					"list"=>$this->input->post('list')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}

    // 抽奖
	public function lottery(){
		$ret = null ;
		try{
			$url = "activity/lottery" ;
			$params = array(
				"activity_code"=>$this->input->post('activity_code'),
				"user_channel"=>'1003',
				"user_code"=>$this->input->post('user_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	 // 抽奖
	public function records(){
		$ret = null ;
		try{
			$url = "activity/records" ;
			$params = array(
				"activity_code"=>$this->input->post('activity_code'),
				"user_channel"=>'1003',
				"user_code"=>$this->input->post('user_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}

	 // 中秋摇月饼--显示养殖币和月饼
	public function userlotterytimes(){
		$ret = null ;
		try{
			$url = "activity/user/lottery/times" ;
			$params = array(
				"activity_code"=>$this->input->post('activity_code'),
				"user_channel"=>'1003',
				"user_code"=>$this->input->post('user_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	 // 中秋摇月饼--增加抽奖机会
	public function addlotterytimes(){
		$ret = null ;
		try{
			$url = "activity/addLotteryTimes" ;
			$params = array(
				"activity_code"=>$this->input->post('activity_code'),
				"user_channel"=>'1003',
				"user_code"=>$this->input->post('user_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	// 中秋摇月饼--摇奖中月饼
    public function midautumnlucky(){
    	$ret = null ;
    	try{
    		$url = "activity/midautumn/lucky" ;
    		$params = array(
    			"activity_code"=>$this->input->post('activity_code'),
    			"user_channel"=>'1003',
    			"user_code"=>$this->input->post('user_code')
    		) ;
    		$ret = getPostData($url,$params) ;
    	}catch(Exception $e){
    		echo $e ;
    		$ret = false ;
    	}
    	return $ret ;
    }
	// 中秋摇月饼--月饼Top20
    public function toplist(){
    	$ret = null ;
    	try{
    		$url = "activity/top/list" ;
    		$params = array(
    			"activity_code"=>$this->input->post('activity_code'),
    			"user_channel"=>'1003',
    			"user_code"=>$this->input->post('user_code'),
    			"page_size"=>$this->input->post('page_size')
    		) ;
    		$ret = getPostData($url,$params) ;
    	}catch(Exception $e){
    		echo $e ;
    		$ret = false ;
    	}
    	return $ret ;
    }
    //大鬼子 -- 积分列表
    public function jifenliebiao(){
    	$ret = null ;
    	try{
    		$url = "activity/top/amount/list" ;
    		$params = array(
    			"activity_code"=>$this->input->post('activity_code'),
    			"user_code"=>$this->input->post('user_code'),
    			"page_size"=>$this->input->post('page_size'),
    		) ;
    		$ret = getPostData($url,$params) ;
    	}catch(Exception $e){
    		echo $e ;
    		$ret = false ;
    	}
    	return $ret ;
    }
    //大鬼子 -- 修改养殖比
    public function xiugaiyangzhibi(){
    	$ret = null ;
    	try{
    		$url = "activity/add/lucky/score" ;
    		$params = array(
    			"activity_code"=>$this->input->post('activity_code'),
    			"user_code"=>$this->input->post('user_code'),
    			"lucky_score"=>$this->input->post('lucky_score')
    		) ;
    		$ret = getPostData($url,$params) ;
    	}catch(Exception $e){
    		echo $e ;
    		$ret = false ;
    	}
    	return $ret ;
    }
    //大鬼子 -- 获取次数
    public function huoqucishu(){
    	$ret = null ;
    	try{
    		$url = "activity/user/lottery/times" ;
    		$params = array(
    			"activity_code"=>$this->input->post('activity_code'),
    			"user_code"=>$this->input->post('user_code')
    		) ;
    		$ret = getPostData($url,$params) ;
    	}catch(Exception $e){
    		echo $e ;
    		$ret = false ;
    	}
    	return $ret ;
    }
    //大鬼子 -- 获取人数
    public function huoqurenshu(){
    	$ret = null ;
    	try{
    		$url = "activity/top/amount/list" ;
    		$params = array(
    			"activity_code"=>$this->input->post('activity_code'),
    			"user_code"=>$this->input->post('user_code'),
    			"page_size"=>$this->input->post('page_size')
    		) ;
    		$ret = getPostData($url,$params) ;
    	}catch(Exception $e){
    		echo $e ;
    		$ret = false ;
    	}
    	return $ret ;
    }
  //拉脖子－－增加可玩次数
  public function addpullTimes(){
  	$ret = null ;
  	try{
  		$url = "activity/addLotteryTimes" ;
  		$params = array(
  		 "activity_code"=>$this->input->post('activity_code'),
  		 "user_code"=>$this->input->post('user_code')
  		);
  		$ret = getPostData($url,$params) ;
  	}catch(Exception $e){	
  		echo $e ;
  		$ret = false ;
  	}
  	return $ret ;
  }
   // 拉脖子--记录每次得分
  public function  Scorepoints(){
  	$ret = null ;
  	try{
  		$url = "activity/subChristmasScore" ;
  		$params = array(
  		  "activity_code"=>$this->input->post('activity_code'),
          "user_code"=>$this->input->post('user_code'),
          "amount"=>$this->input->post('amount')
  		);
  		//print_r($params) ;
  		$ret = getPostData($url,$params) ;
  	}catch(Exception $e){
  		echo $e ;
  		$ret = false ;
  	}
  	return $ret ;
  }
  //拉脖子--拉脖子分数排名
   public function neckranking(){
   	$ret = null ;
   	try{
   		$url = "activity/top50/list" ;
   		$params  = array(
   		  "activity_code"=>$this->input->post('activity_code'),
   		  "user_code"=>$this->input->post('user_code')
   		);
   		$ret = getPostData($url,$params) ;
   	}catch(Exception $e){
   		echo $e ;
   		$ret = false ;
   	}
   	return $ret ;
   }
   //拉脖子--获取用户可用抽奖次数和积分
   public function Availableintegral(){
   	$ret = null ;
   	try{
   		$url = "activity/user/lottery/times" ;
   		$params  = array(
   		  "activity_code"=>$this->input->post('activity_code'),
   		  "user_code"=>$this->input->post('user_code')
   		);
   		$ret = getPostData($url,$params) ;
   	}catch(Exception $e){
   		echo $e ;
   		$ret = false ;
   	}
   	return $ret ;
   }	
   //拉脖子--中奖名单
   public function winners(){
   	$ret = null ;
   	try{
   		$url = "activity/winning/list" ;
   		$params  = array(
   		  "activity_code"=>$this->input->post('activity_code')
   		);
   		$ret = getPostData($url,$params) ;
   	}catch(Exception $e){
   		echo $e ;
   		$ret = false ;
   	}
   	return $ret ;
   }	
   //拉脖子----获取用户信息
   public function userinformation(){
   	 $ret = null ;
   	 try{
   	 	$url = "user/get/newinfo" ;
   	 	$params = array(
   	 	  "user_code"=>$this->input->post('user_code')
   	 	);
   	 	$ret =getPostData($url,$params) ;
   	 }catch(Exception $e){
   	 	echo $e ;
   	 	$ret = false ;
   	 }
   	 return $ret ;
   }
  //签到活动－－签到信息
   public function signininformation(){
   	 $ret = null ;
   	 try{
   	 	$url = "user/getSignInfo" ;
   	 	$params = array(
   	 	   "user_code"=>$this->input->post('user_code'),
   	 	   "user_channel"=>$this->input->post('user_channel')
   	 	);
   	 	$ret = getPostData($url,$params) ;
   	 }catch(Exception $e){
   	 	echo $e ;
   	 	$ret = false ;
   	 }
   	 return $ret ;
   }
   //签到
   public function Dailycheck(){
   	$ret = null ;
   	 try{
   	 	$url = "user/sign" ;
   	 	$params = array(
				    "user_code"=>$this->input->post('user_code'),
				    "scoreType"=>$this->input->post('scoreType'),
				    "user_channel"=>$this->input->post('user_channel')
                   );
   	 	$ret = getPostData($url,$params) ;
   	 }catch(Exception $e){
   	 	echo $e ;
   	 	$ret = false ;
   	 }
   	 return $ret ;
   }
   //－－－－－－－领取奖品
   public function Ledtotheprize(){
   		$ret = null ;
   	 try{
   	 	$url = "user/receivePrize" ;
   	 	$params = array(
				    "user_code"=>$this->input->post('user_code'),
				    "awardId"=>$this->input->post('awardId'),
				    "user_channel"=>$this->input->post('user_channel')
                   );
   	 	$ret = getPostData($url,$params) ;
   	 }catch(Exception $e){
   	 	echo $e ;
   	 	$ret = false ;
   	 }
   	 return $ret ;
   }
}