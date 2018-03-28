<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class Activitycenter extends CI_Controller {

	public function __construct(){
		parent::__construct() ;
		$this->load->model("Activitymodel","activitymodel") ;
	}
	// 转盘抽奖
	public function zhuanpan(){
		$ret = $this->activitymodel->zhuanpan() ;
		echo $ret ;
	}
	// 转盘列表
	public function lotterylist(){
		$ret = $this->activitymodel->lotterylist() ;
		echo $ret ;
	}
	
	
	// 抽奖
	public function lottery(){
		$ret = $this->activitymodel->lottery() ;
		echo $ret ;
	}
	// 是否已经中奖
	public function records(){
		$ret = $this->activitymodel->records() ;
		echo $ret ;
	}

	// 中秋摇月饼--显示养殖币和月饼
	public function userlotterytimes(){
		$ret = $this->activitymodel->userlotterytimes() ;
		echo $ret ;
	}
	// 中秋摇月饼--增加抽奖机会
	public function addlotterytimes(){
		$ret = $this->activitymodel->addlotterytimes() ;
		echo $ret ;
	}
	// 中秋摇月饼--摇奖中月饼
    public function midautumnlucky(){
    	$ret = $this->activitymodel->midautumnlucky() ;
    	echo $ret ;
    }
	// 中秋摇月饼--月饼Top20
    public function toplist(){
    	$ret = $this->activitymodel->toplist() ;
    	echo $ret ;
    }
    //打鬼子 -- 积分列表
    public function jifenliebiao(){
    	$ret = $this->activitymodel->jifenliebiao() ;
    	echo $ret ;
    }
    //打鬼子 -- 修改养殖币
    public function xiugaiyangzhibi(){
    	$ret = $this->activitymodel->xiugaiyangzhibi() ;
    	echo $ret ;
    }
    //打鬼子 -- 获取机会次数
    public function huoqucishu(){
    	$ret = $this->activitymodel->huoqucishu() ;
    	echo $ret ;
    }
    //打鬼子 -- 获取人数列表
    public function huoqurenshu(){
    	$ret = $this->activitymodel->huoqurenshu() ;
    	echo $ret ;
    }
   //拉脖子--增加可玩次数
   public function addpullTimes(){
   	 $ret = $this->activitymodel->addpullTimes() ;
   	 echo $ret ;
   }
   //拉脖子--每次等分提交接口
   public function Scorepoints(){
   	 $ret = $this->activitymodel->Scorepoints() ;
   	echo $ret ;
   }
   //拉脖子--获取用户可用积分和可玩次数
   public function Availableintegral(){
   	$ret = $this->activitymodel->Availableintegral() ;
   	echo $ret ;
   }
   public function neckranking(){
   	$ret = $this->activitymodel->neckranking();
   	echo $ret ;
   }
   //拉脖子--中奖名单
    public function winners(){
    	$ret = $this->activitymodel->winners() ;
    	echo $ret ;
    }
   // 获取用户信息
    public function userinformation(){
    	$ret = $this->activitymodel->userinformation() ;
    	echo $ret ;
    }
  //签到活动－－－签到页信息展示
    public function signininformation(){
    	 $ret = $this->activitymodel->signininformation() ;
    	 echo $ret ;
    }
  //签到活动－－－每日签到
   public function  Dailycheck(){
   	$ret = $this->activitymodel->Dailycheck() ;
   	echo $ret ;
   }
  //签到活动－－－领取奖品
  public function Ledtotheprize(){
  	$ret = $this->activitymodel->Ledtotheprize() ;
  	echo $ret ;
  }
} 