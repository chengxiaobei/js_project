<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// 个人中心
class Pcentermodel extends CI_Model{

	public function __construct(){
		parent::__construct() ;
		$this->load->helper("http") ;
	}


	// 用户注册
	public function register(){
		$ret = null ;
		try{
			$url = "user/signup" ;
			$params = array(
				"telephone"=>$this->input->post('phonenum') ,
				"password"=>$this->input->post('password') ,
				"verification_code"=>$this->input->post('verification_code') ,
				"friend_telephone"=>$this->input->post('friend_telephone') ,
				"dealer_num"=>'' ,
				"friend_code"=>'',
				"breed"=>$this->input->post('breed')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}

	// 用户登录
	public  function login(){
		$ret = null ;
		try{
			$url = "user/login" ;
			$params = array(
				"telephone"=>$this->input->post('telephone') ,
				"password"=>$this->input->post('password') 
			) ;
			$ret = getPostData($url,$params) ;
			$ret_arr = json_decode($ret,true) ;
			if(!empty($ret_arr['status']) && $ret_arr['status'] == "2000" && !empty($ret_arr['data'])){
				$_SESSION['curr_user'] = $ret_arr['data'] ;
			}
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 登出
	public function logout(){
		$_SESSION['curr_user'] = null ;
		$ret = array(
			"status"=>"2000" ,
			"msg"=>"ok"
		) ;
		return json_encode($ret) ;
	}

	// 完善用户信息
	public function edit(){
		$ret = null ;
		try{
			$url = "user/add" ;

			$country_code = (!!$this->input->post('country_code')) ? $this->input->post('country_code') : '' ;
			$province_code = (!!$this->input->post('province_code')) ? $this->input->post('province_code') : '' ;
			$city_code = (!!$this->input->post('city_code')) ? $this->input->post('city_code') : '' ;
			$area_code = (!!$this->input->post('area_code')) ? $this->input->post('area_code') : '' ;
			$avatar = "" ;
			$filename = "" ;
			$exname = "" ;

			$img = Img2base64($_FILES) ;
			if($img && count($img) >0){
				$avatar = $img[0]['avatar'] ;
				$filename = $img[0]['filename'] ;
				$exname = $img[0]['exname'] ;
			}

			$params = array(
				"nickname"=>$this->input->post('nickname') ,

				"username"=>$this->input->post('username') ,
				"client_unit"=>$this->input->post('client_unit') ,
				"all_nums"=>$this->input->post('all_nums') ,
				"breed"=>$this->input->post('breed') ,
				"generation"=>$this->input->post('generation') ,

				"email"=>$this->input->post('email') ,
				"avatar"=>$avatar ,
				"country_code"=>1 ,
				"province_code"=>$province_code ,
				"city_code"=>$city_code ,
				"area_code"=>$area_code ,
				"filename"=>$filename ,
				"exname"=>$exname
			) ;

			// print_r($params) ;exit ;

			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}


	// 获取短信验证码
	public function getPhoneVerify(){
		$ret = null ;
		try{
			$url = "user/get/verify" ;
			$params = array(
				"telephone"=>$this->input->post('telephone') ,
				"scene"=>$this->input->post('scene')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 获取优惠券
	public function getcoupons(){
		$ret = null ;
		try{
			$url = "coupons/getcoupons" ;
			$params = array(
				"page_no"=>$this->input->post('page_no') ,
				"page_size"=>$this->input->post('page_size') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 收货地址
	public function getReceiver(){
		$ret = null ;
		try{
			$url = "receiver/getReceiver" ;
			$params = array(
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 添加收货地址
	public function createReceiver(){
		$ret = null ;
		try{
			$url = "receiver/createReceiver" ;
			$params = array(
				"receiver"=>((!!$this->input->post('receiver')) ? $this->input->post('receiver') : '') ,
				"telphone"=>((!!$this->input->post('telphone')) ? $this->input->post('telphone') : '') ,
				"provinceCode"=>((!!$this->input->post('provinceCode')) ? $this->input->post('provinceCode') : '') ,
				// "province"=>((!!$this->input->post('province')) ? $this->input->post('province') : '') ,
				"cityCode"=>((!!$this->input->post('cityCode')) ? $this->input->post('cityCode') : '') ,
				// "city"=>((!!$this->input->post('city')) ? $this->input->post('city') : '') ,
				"areaCode"=>((!!$this->input->post('areaCode')) ? $this->input->post('areaCode') : '') ,
				// "area"=>((!!$this->input->post('area')) ? $this->input->post('area') : '') ,
				"detail"=>((!!$this->input->post('detail')) ? $this->input->post('detail') : '') ,
				"code"=>((!!$this->input->post('code')) ? $this->input->post('code') : '') ,
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 删除收货地址
	public function deleteReceiver(){
		$ret = null ;
		try{
			$url = "receiver/deleteReceiver" ;
			$params = array(
				"list"=>array(
					$this->input->post('code')
				) ,
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 收藏的文章列表
	public function getArtFavoriteList(){
		$ret = null ;
		try{
			$url = "article/getArtFavoriteList" ;
			$params = array(
				"page_no"=>$this->input->post('page_no') ,
				"page_size"=>$this->input->post('page_size') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
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

	// 修改手机号
	public function update_tel(){
		$ret = null ;
		try{
			$url = "user/update/tel" ;
			$params = array(
				"old_msg"=>$this->input->post('old_msg') ,
				"new_msg"=>$this->input->post('new_msg') ,
				"verification_code"=>$this->input->post('verification_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 修改密码
	public function update_pwd(){
		$ret = null ;
		try{
			$url = "user/update/pwd" ;
			$params = array(
				"old_msg"=>$this->input->post('old_msg') ,
				"new_msg"=>$this->input->post('new_msg') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 编辑用户信息
	public function update_user(){
		$ret = null ;
		try{
			$url = "user/update/info" ;
			$params = array() ;
			// 头像信息
			if(count($_FILES)>0){
				$avatar = "" ;
				$filename = "" ;
				$exname = "" ;

				$img = Img2base64($_FILES) ;
				if($img && count($img) >0){
					$avatar = $img[0]['avatar'] ;
					$filename = $img[0]['filename'] ;
					$exname = $img[0]['exname'] ;
				}
				$params['avatar'] = $avatar ;
				$params['filename'] = $filename ;
				$params['exname'] = $exname ;
			}
			else{
				$params['avatar'] = "" ;
				$params['filename'] = "" ;
				$params['exname'] = "" ;
			}
			if($this->input->post('province_id') &&
			   $this->input->post('city_id') && 
			   $this->input->post('area_id') ){
				$params['province_id'] = $this->input->post('province_id') ;
				$params['city_id'] = $this->input->post('city_id') ;
				$params['area_id'] = $this->input->post('area_id') ;
			}
			else{
				$params['province_id'] = "" ;
				$params['city_id'] = "" ;
				$params['area_id'] = "" ;
			}
			$params['nickname'] = $this->input->post('nickname') ;
			$params['username'] = $this->input->post('user_name') ;
			$params['unit_name'] = $this->input->post('unit_name') ;
			$params['unit_scale'] = $this->input->post('unit_scale') ;
			$params['variety'] = $this->input->post('variety') ;
			$params['generation'] = $this->input->post('generation') ;
			$params['email'] = $this->input->post('email') ;

			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 找回密码
	public function reset_pwd(){
		$ret = null ;
		try{
			$url = "user/reset/pwd" ;
			$params = array(
				"telephone"=>$this->input->post('telephone') ,
				"password"=>$this->input->post('password') ,
				"verification_code"=>$this->input->post('verification_code')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 获取用户最新信息
	public function get_newinfo(){
		$ret = null ;
		try{
			$url = "user/get/newinfo" ;
			$params = array(
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 获取待反馈商品列表
	public function getProductList(){
		$ret = null ;
		try{
			$url = "feedback/getProductList" ;
			$params = array(
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 获取反馈题目
	public function getfeedback(){
		$ret = null ;
		try{
			$url = "feedback/getfeedback" ;
			$params = array(
				"type"=>$this->input->post('type') ,
				"feedback_id"=>$this->input->post('feedback_id'),
				"product_code"=>$this->input->post('product_code') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 保存反馈信息
	public function creatFeedback(){
		$ret = null ;
		try{
			$url = "feedback/creatFeedback" ;
			
			$params = array(
				"type"=>$this->input->post('type') ,
				"content"=>$this->input->post('content') ,
				// "feedback_id"=>$this->input->post('feedback_id'),
				// "product_code"=>$this->input->post('product_code'),
			//	"image_list" =>$this->input->post('image_list') ,
			) ;
			$list_options=$this->input->post('list_options');
			$feedback_id = $this->input->post('feedback_id') ;
			$product_code = $this->input->post('product_code') ;
			if(!empty($list_options)){
				$params['list_options'] = $list_options ;
			}else{
				$params['list_options']= array();
			}
			if(!empty($feedback_id)){
				$params['feedback_id'] = $feedback_id ;
			}
			if(!empty($product_code)){
				$params['product_code'] = $product_code;
			}
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 获取订单列表
	public function getOrderList(){
		$ret = null ;
		try{
			$url = "order/getOrderList" ;
			$params = array(
				"page_no"=>$this->input->post('page_no') ,
				"page_size"=>$this->input->post('page_size') ,
				'user'
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 订单详情
	public function getOrderDetail(){
		$ret = null ;
		try{
			$url = "order/getOrderDetail" ;
			$params = array(
				"order_code"=>$this->input->post('order_code') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	//  修改订单状态
	public function updateOrderStatus(){
		$ret = null ;
		try{
			$url = "order/updateOrderStatus" ;
			$params = array(
				"order_code"=>$this->input->post('order_code') ,
				"order_status"=>$this->input->post('order_status') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 评论订单的商品
	public function product_comment(){
		$ret = null ;
		try{
			$url = "merchant/comment" ;
			$product_info = $this->input->post('product_info');
		    for($i =0;$i<count($product_info);$i++){
			   if(!array_key_exists('pictures',$product_info[$i])){
			   	  $product_info[$i]['pictures']= array();			   	  
			   }
			}
			$params = array(
				// 包装评分
				"package_votes"=>$this->input->post('package_votes') ,
				// 物流评分
				"delivery_votes"=>$this->input->post('delivery_votes') ,
				// 昵称
				"nickname"=>$this->input->post('nickname') ,
				// 是否匿名
				"type"=>$this->input->post('type') ,
				// 订单编号
				"order_code"=>$this->input->post('order_code') ,
				// 商品信息
				"product_info"=>$product_info
			) ;
		
			// print_r($params) ;exit ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 获取订单状态列表
	public function getOrderStatus_list(){
		$ret = null ;
		try{
			$url = "order/getorderRecords" ;
			$params = array(
				"order_code"=>$this->input->post('order_code') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 查询物流信息
	public function kuaidiLogistics(){
		$ret = null ;
		try{
			$url = "kuaidi/kuaidiLogistics" ;
			$params = array(
				"order_code"=>$this->input->post('order_code') ,
				"express_company"=>$this->input->post('express_company') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}


	// 诊疗档案列表
	public function analysis_list(){
		$ret = null ;
		try{
			$url = "analysis/list" ;
			$params = array(
				"page_no"=>$this->input->post('page_no') ,
				"page_size"=>$this->input->post('page_size') 
			) ;
			$ret = getPostData($url,$params) ;


			$ret_arr = json_decode($ret,true) ;
			$datetimes = array() ;
			if($ret_arr['status'] == '2000'){
				$analysis_list = $ret_arr['data']['analysis_list'] ;
				// print_r($analysis_list) ;
				foreach($analysis_list as $key=>$value){
					$datetime = preg_replace("/(\d{4}-\d{2}).*/", "\\1", $value['date']) ;
					$ret_arr['data']['analysis_list'][$key]['datetime'] = $datetime ;
					$datetime_arr = explode('-',$datetime) ;
					$year = $datetime_arr[0] ;
					$month = $datetime_arr[1] ;
					// $curr_datetime = date('Y',time()) ;
					if(!array_key_exists($datetime, $datetimes)){
						$datetimes[$datetime] = array(
							'datetime' => $datetime ,
							'year' => $year ,
							'month' => $month
						) ;
					}
				}
				$ret_arr['data']['datetimes'] = $datetimes ;
			}

		}catch(Exception $e){
			$ret = false ;
		}
		return json_encode($ret_arr) ;
	}

	// 检测评价
	public function analysis_vote(){
		$ret = null ;
		try{
			$url = "analysis/vote" ;
			$params = array(
				"testing_id"=>$this->input->post('testing_id') ,
				"response_votes"=>$this->input->post('response_votes') ,
				"testing_votes"=>$this->input->post('testing_votes') , 
				"speed_votes"=>$this->input->post('speed_votes') , 
				"conclude_votes"=>$this->input->post('conclude_votes') ,  
				"content"=>$this->input->post('content') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 获取快递公司
	public function getsendcompany(){
		$ret = null ;
		try{
			$url = "analysis/getsendcompany" ;
			$params = array(
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 填写送料信息
	public function analysis_send(){
		$ret = null ;
		try{
			$url = "analysis/send" ;
			$params = array(
				"test_id"=>$this->input->post('test_id') ,  
				"delivery_id"=>$this->input->post('delivery_id') ,
				"delivery_name"=>$this->input->post('delivery_name') ,  
				"send_type"=>$this->input->post('send_type') ,  
				"delivery_type"=>$this->input->post('delivery_type') ,  
				"track_code"=>$this->input->post('track_code') ,  
				"vehicle_tel"=>$this->input->post('vehicle_tel') ,
				"vehicle_code"=>$this->input->post('vehicle_code') 
			) ;
			// print_r($params) ;exit;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 检测档案详情
	public function getanalysisdetail(){
		$ret = null ;
		try{
			$url = "analysis/getanalysisdetail" ;
			$params = array(
				"test_id"=>$this->input->post('testing_id')
			) ;
			$coupon_code= $this->input->post('coupon_code') ;
			if(!empty($coupon_code)){
				$params['coupon_code'] = $coupon_code ;
			}else{
				$params['coupon_code'] = '';
			}
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 取消诊疗
	public function analysis_cancel(){
		$ret = null ;
		try{
			$url = "analysis/cancle" ;
			$params = array(
				"test_id"=>$this->input->post('test_id')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 检测物流信息
	public function analysis_kuaidi(){
		$ret = null ;
		try{
			$url = "kuaidi/analysis" ;
			$params = array(
				"test_id"=>$this->input->post('test_id')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 消息列表
	public function getMessage(){
		$ret = null ;
		try{
			$url = "message/getMessage" ;
			$params = array(
				"page_no"=>$this->input->post('page_no') ,
				"page_size"=>$this->input->post('page_size')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}

	// 诊断反馈
	public function scheme_feedback(){
		$ret = null ;
		try{
			$url = "analysis/scheme/feedback" ;
			$params = array(
				"test_id"=>$this->input->post('test_id') ,
				"effect_name"=>$this->input->post('effect_name') ,
				"effect_level"=>$this->input->post('effect_level') ,
				"suggestion"=>$this->input->post('suggestion') ,
				"casue_name"=>$this->input->post('cause_names') ,
				"image_list"=>$this->input->post('image_list')
			) ;
			if($this->input->post('cause_names')){
				$params['casue_name'] = $this->input->post('cause_names') ;
			}
			else{
				$params['casue_name'] = array() ; 
			}
			if($this->input->post('image_list')){
				$params['image_list'] = $this->input->post('image_list') ;
			}
			else{
				$params['image_list'] = array() ; 
			}
			// print_r($params) ;
			// echo json_encode($params) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
	}
    
    public function image (){
    	$ret = null ;
    	try{
    		$url = "ask/image" ;
    		$params = array(
                    "extension" => $this->input->post("extension") ,
                    "file_name" => $this->input->post("file_name") ,
                    "image_base64_string" => $this->input->post("image_base64_string") ,
                    "module_name" => $this->input->post("module_name")
    			) ;
    		$ret = getPostData($url,$params) ;
    		//$ret = getPostData_test($url,$params) ;
    	}catch(Exception $e){
    		$ret = false ;
    	}
    	return $ret ;
    }

    public function creatFeedbackwi(){
    	$ret = null ;
		try{
			$url = "feedback/creatFeedback" ;
			$params = array(
				"type"=>$this->input->post('type') ,
				"content"=>$this->input->post('content') ,
				// "feedback_id"=>$this->input->post('feedback_id'),
				// "product_code"=>$this->input->post('product_code'),
				"image_path_list" =>$this->input->post('image_path_list') ,
				"list_options"=>$this->input->post('list_options') 
			) ;
			$feedback_id = $this->input->post('feedback_id') ;
			$product_code = $this->input->post('product_code') ;
			if(!empty($list_options)){
				$params['list_options'] = $list_options ;
			}else{
				$params['list_options']= array();
			}
			if(!empty($feedback_id)){
				$params['feedback_id'] = $feedback_id ;
			}
			if(!empty($product_code)){
				$params['product_code'] = $product_code;
			}
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			$ret = false ;
		}
		return $ret ;
    }
    // 查询签到
	public function getSign(){
		$ret = null ;
		try{
			$url = "user/getSign" ;
			$params = array(
				"type_code"=>$this->input->post('typeCode')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	// 签到
	public function Signin(){
		$ret = null ;
		try{
			$url = "user/sign" ;
			$params = array(
					"type_code"=>$this->input->post('typeCode')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	// 获取养殖币
	public function getpoint(){
		$ret = null ;
		try{
			$url = "score/getScoreTypeList" ;
			$params = array(
					"typeCode"=>$this->input->post('typeCode')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}
	// 签到
	public function pointrecord(){
		$ret = null ;
		try{
			$url = "score/getScoreRecordsList" ;
			$params = array(
					"page_size"=>$this->input->post('page_size'),
					"page_no"=>$this->input->post('page_no')
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}

}