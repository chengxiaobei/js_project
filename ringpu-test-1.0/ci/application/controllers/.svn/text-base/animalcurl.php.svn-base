<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// 动物检测
class Animalcurl extends CI_Controller {

	public function __construct(){
		parent::__construct() ;
		$this->load->model("Animalcurlmodel","animalcurlmodel") ;
	}

	// 查询送检地点
	public function analysis_place(){
		$ret = $this->animalcurlmodel->analysis_place() ;
		echo $ret ;
	}

	//提交申请信息
	public function submit_apply(){
		$ret = $this->animalcurlmodel->submit_apply() ;
		echo $ret ;
	}
	//完善采样单
	public function improve_apply(){
		$ret = $this->animalcurlmodel->improve_apply() ;
		echo $ret ;
	}
	//查询后台是否完善信息
	public function analysis_isImprove(){
		$ret = $this->animalcurlmodel->analysis_isImprove() ;
		echo $ret ;
	}
	// 保存申请信息(old)
	public function analysis_apply(){
		$ret = $this->animalcurlmodel->analysis_apply() ;
		echo $ret ;
	}

	/**************************动物诊疗V1迭代 新接口 start *****************************/
	// 获取动物诊疗所需节本信息
	public function analysis_getTreatment(){
		$ret = $this->animalcurlmodel->analysis_getTreatment();
		echo $ret;
	}
	//新建养殖场页面需要返回省份，城市和销售人员列表，用来进行选择2017/02/06
	public function analysis_getFarmParams(){
		$ret = $this->animalcurlmodel->analysis_getFarmParams();
		echo $ret;
	}
	//新建养殖场保存信息
	public function analysis_saveFarm(){
		$ret = $this->animalcurlmodel->analysis_saveFarm();
		echo $ret;
	}
	//根据养殖场名称模糊查询养殖场列表
	public function analysis_getFarmsByFuzzyName(){
		$ret= $this->animalcurlmodel->analysis_getFarmsByFuzzyName();
	}
	// 根据检测大类获取检测项目
	public function analysis_getTestType(){
		$ret= $this->animalcurlmodel->analysis_getTestType();
	}
	
	// 根据手机号和养殖场名称获取健康咨询顾问和销售审批人
	public function analysis_getSales(){
		$ret= $this->animalcurlmodel->analysis_getSales();
	}

	// 提交送检信息
    public function analysis_submitAnalysis(){
    	$ret= $this->animalcurlmodel->analysis_submitAnalysis();
    }

	// 个人中心查询检验单列表
	public function analysis_getSheetList(){
		$ret= $this->animalcurlmodel->analysis_getSheetList();
	}

	// 个人中心查询检验单详情
	public function analysis_getSheetDetail(){
		$ret= $this->animalcurlmodel->analysis_getSheetDetail();		
	}

	// 个人中心查看检验报告文件列表
	public function analysis_getTestingReport(){
		$ret= $this->animalcurlmodel->analysis_getTestingReport();		
	}
   // 查询检验单列表
	public function analysis_getTestingList(){
		$ret= $this->animalcurlmodel->analysis_getTestingList();		
	}
}

