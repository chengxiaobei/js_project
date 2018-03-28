<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// 个人中心
class Personalcenter extends CI_Controller {

	public function __construct(){
		parent::__construct() ;
		$this->load->model("Pcentermodel","pcentermodel") ;
	}


	// 用户注册
	public function register(){
		$ret = $this->pcentermodel->register() ;
		echo $ret ;
	}

	// 用户登录
	public  function login(){
		$ret = $this->pcentermodel->login() ;
		echo $ret ;
	}

	// 登出
	public function logout(){
		$ret = $this->pcentermodel->logout() ;
		echo $ret ;
	}

	// 完善信息
	public  function edit(){
		$ret = $this->pcentermodel->edit() ;
		echo $ret ;
	}

	// 获取短信验证码
	public function getPhoneVerify(){
		$ret = $this->pcentermodel->getPhoneVerify() ;
		echo $ret ;
	}


	// 优惠券
	public function getcoupons(){
		$ret = $this->pcentermodel->getcoupons() ;
		echo $ret ;
	}

	// 收货地址
	public function getReceiver(){
		$ret = $this->pcentermodel->getReceiver() ;
		echo $ret ;
	}

	// 添加收货地址
	public function createReceiver(){
		$ret = $this->pcentermodel->createReceiver() ;
		echo $ret ;
	}

	// 删除收货地址
	public function deleteReceiver(){
		$ret = $this->pcentermodel->deleteReceiver() ;
		echo $ret ;
	}

	// 收藏文档列表
	public function getArtFavoriteList(){
		$ret = $this->pcentermodel->getArtFavoriteList() ;
		echo $ret ;
	}

	// 修改手机号
	public function update_tel(){
		$ret = $this->pcentermodel->update_tel() ;
		echo $ret ;
	}

	// 修改密码
	public function update_pwd(){
		$ret = $this->pcentermodel->update_pwd() ;
		echo $ret ;
	}

	// 编辑用户信息
	public function update_user(){
		$ret = $this->pcentermodel->update_user() ;
		echo $ret ;
	}

	// 找回密码
	public function reset_pwd(){
		$ret = $this->pcentermodel->reset_pwd() ;
		echo $ret ;
	}

	// 获取最新用户信息
	public function get_newinfo(){
		$ret = $this->pcentermodel->get_newinfo() ;
		echo $ret ;
	}

	// 获取待反馈商品列表
	public function getProductList(){
		$ret = $this->pcentermodel->getProductList() ;
		echo $ret ;
	}

	// 获取反馈题目
	public function getfeedback(){
		$ret = $this->pcentermodel->getfeedback() ;
		echo $ret ;
	}

	// 保存反馈信息
	public function creatFeedback(){
		$ret = $this->pcentermodel->creatFeedback() ;
		echo $ret ;
	}


	// --------购物订单---------

	// 获取订单列表
	public function getOrderList(){
		$ret = $this->pcentermodel->getOrderList() ;
		echo $ret ;
	}

	// 订单详情
	public function getOrderDetail(){
		$ret = $this->pcentermodel->getOrderDetail() ;
		echo $ret ;
	}

	// 修改订单状态
	public function updateOrderStatus(){
		$ret = $this->pcentermodel->updateOrderStatus() ;
		echo $ret ;
	}


	// 评论订单的商品
	public function product_comment(){
		$ret = $this->pcentermodel->product_comment() ;
		echo $ret ;
	}

	// 获取订单状态信息
	public function getOrderStatus_list(){
		$ret = $this->pcentermodel->getOrderStatus_list() ;
		echo $ret ;
	}

	// 查询物流信息
	public function kuaidiLogistics(){
		$ret = $this->pcentermodel->kuaidiLogistics() ;
		echo $ret ;
	}


	// 诊疗档案列表
	public function analysis_list(){
		$ret = $this->pcentermodel->analysis_list() ;
		echo $ret ;
	}

	// 检测评价
	public function analysis_vote(){
		$ret = $this->pcentermodel->analysis_vote() ;
		echo $ret ;
	}

	// 获取快递公司
	public function getsendcompany(){
		$ret = $this->pcentermodel->getsendcompany() ;
		echo $ret ;
	}

	// 填写送料信息
	public function analysis_send(){
		$ret = $this->pcentermodel->analysis_send() ;
		echo $ret ;
	}

	// 检测档案详情
	public function getanalysisdetail(){
		$ret = $this->pcentermodel->getanalysisdetail() ;
		echo $ret ;
	}

	// 取消诊疗
	public function analysis_cancel(){
		$ret = $this->pcentermodel->analysis_cancel() ;
		echo $ret ;
	}

	// 检测物流信息
	public function analysis_kuaidi(){
		$ret = $this->pcentermodel->analysis_kuaidi() ;
		echo $ret ;
	}

	// 消息列表
	public function getMessage() {
		$ret = $this->pcentermodel->getMessage() ;
		echo $ret ;
	}

	// 诊断反馈
	public function scheme_feedback(){
		$ret = $this->pcentermodel->scheme_feedback() ;
		echo $ret ;
	}

    /*意见反馈 改
      图片上传*/
    public function image(){
    	$ret = $this->pcentermodel->image() ;
    	echo $ret ;
    }
    /*意见反馈 改
      包括图片的反馈*/
    public function creatFeedbackwi(){
    	$ret = $this->pcentermodel->creatFeedbackwi() ;
    	echo $ret ;
    }


	// 测试
	public function test(){
		print_r($_REQUEST['product_info']) ;
		// print_r($_FILES) ;
		exit ;
	}
	
	// 签到查询
	public function getSign(){
		$ret = $this->pcentermodel->getSign() ;
		echo $ret ;
	}

	// 签到
	public function Signin(){
		$ret = $this->pcentermodel->Signin() ;
		echo $ret ;
	}
	// 获取养殖币
	public function getpoint(){
		$ret = $this->pcentermodel->getpoint() ;
		echo $ret ;
	}
	// 养殖币获取记录
	public function pointrecord(){
		$ret = $this->pcentermodel->pointrecord() ;
		echo $ret ;
	}
	

}