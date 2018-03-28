<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Animalcurlmodel extends CI_Model{

	public function __construct(){
		parent::__construct() ;
		$this->load->helper("http") ;
	}


	// 查询送检地点
	public function analysis_place(){
		$ret = null ;
		try{
			$url = "analysis/place" ;
			$params = array(
				'animal_type'=>$this->input->post('animal_type') ,
				'province'=>$this->input->post('province') ,
				'city'=>$this->input->post('city') ,
				'area'=>$this->input->post('area') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}

	//动物诊疗申请信息20160317
	public function submit_apply(){
		$ret = null;
		try{
			$url = "analysis/submitApply";
			$params = array(
				'app_name'=>$this->input->post('app_name') ,
				'device_id'=>$this->input->post('device_id') ,
				'animal_type'=>$this->input->post('animal_type') ,
				'province'=>$this->input->post('province') ,
				'city'=>$this->input->post('city') ,
				'area'=>$this->input->post('area') ,
				'detection_place'=>$this->input->post('detection_place') ,
				'pay_type'=>$this->input->post('pay_type') ,
				'card_nums'=>$this->input->post('card_nums') ,
				'client_name'=>$this->input->post('client_name') ,
				'client_tel'=>$this->input->post('client_tel') ,
				'client_unit'=>$this->input->post('client_unit') ,
				'symptoms' =>$this->input->post('symptoms') ,
				'specimen_info'=>$this->input->post('specimen_info') ,
				'case_info'=>$this->input->post('case_info')
				);
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}

	//动物诊疗完善信息20160317
	public function improve_apply(){
		$ret = null ;
		try{
			$url = "analysis/improveApply" ;
			$params = array(
				'test_id'=>$this->input->post('test_id') ,
				'single_nums'=>$this->input->post('single_nums') ,
				'all_nums'=>$this->input->post('all_nums') ,
				'breed'=>$this->input->post('breed') ,
				'generation'=>$this->input->post('generation') ,
				'morbidity_days'=>$this->input->post('morbidity_days') ,
				'client_days'=>$this->input->post('client_days') ,
				'morbidity'=>$this->input->post('morbidity') ,
				'mortality'=>$this->input->post('mortality') ,
				'case_info'=>$this->input->post('case_info') ,
				'clinical_feature'=>$this->input->post('clinical_feature') ,
				'clinical_info'=>$this->input->post('clinical_info') ,
				'tentative_diagnosis'=>$this->input->post('tentative_diagnosis') ,
				'immune_info'=>$this->input->post('immune_info') ,
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}

	//后台查询是否已完善信息(20160323)
	public function analysis_isImprove(){
		$ret = null ;
		try{
			$url = "analysis/isImprove" ;
			$params = array(
				'test_id'=>$this->input->post('test_id')
				);
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret;
	}
	// 保存申请信息(old)
	public function analysis_apply(){
		$ret = null ;
		try{
			$url = "analysis/apply" ;
			$params = array(
				'app_name'=>$this->input->post('app_name') ,
				'device_id'=>$this->input->post('device_id') ,
				'animal_type'=>$this->input->post('animal_type') ,
				'province'=>$this->input->post('province') ,
				'city'=>$this->input->post('city') ,
				'area'=>$this->input->post('area') ,
				'detection_place'=>$this->input->post('detection_place') ,
				'pay_type'=>$this->input->post('pay_type') ,
				'card_nums'=>$this->input->post('card_nums') ,
				'client_name'=>$this->input->post('client_name') ,
				'client_tel'=>$this->input->post('client_tel') ,
				'purpose_info'=>$this->input->post('purpose_info') ,
				'client_unit'=>$this->input->post('client_unit') ,
				'single_nums'=>$this->input->post('single_nums') ,
				'all_nums'=>$this->input->post('all_nums') ,
				'contacts_name'=>$this->input->post('contacts_name') ,
				'contacts_tel'=>$this->input->post('contacts_tel') ,
				'breed'=>$this->input->post('breed') ,
				// 'breed_info'=>$this->input->post('breed_info') ,
				'generation'=>$this->input->post('generation') ,
				'detailed_address'=>$this->input->post('detailed_address') ,
				'specimen_info'=>$this->input->post('specimen_info') ,
				'morbidity_days'=>$this->input->post('morbidity_days') ,
				'client_days'=>$this->input->post('client_days') ,
				'morbidity'=>$this->input->post('morbidity') ,
				'mortality'=>$this->input->post('mortality') ,
				'case_info'=>$this->input->post('case_info') ,
				'curative_effect'=>$this->input->post('curative_effect') ,
				'vaccine_info'=>$this->input->post('vaccine_info') ,
				'immune_info'=>$this->input->post('immune_info') ,
				'clinical_feature'=>$this->input->post('clinical_feature') ,
				'clinical_info'=>$this->input->post('clinical_info') ,
				'tentative_diagnosis'=>$this->input->post('tentative_diagnosis') ,
				'proposal_info'=>$this->input->post('proposal_info') 
			) ;
			$ret = getPostData($url,$params) ;
		}catch(Exception $e){
			echo $e ;
			$ret = false ;
		}
		return $ret ;
	}


	/****************************动物诊疗V1迭代  start**********************************/
	// 获取动物诊疗所需基本信息
	public function analysis_getTreatment(){
		$ret=null;
		try{
			$url="analysis/getAnimalTreatment";
			$params=array(
				'phoneNo'=>$this->input->post('phoneNo'),
				'farmName'=>$this->input->post('farmName')
				);
			$ret=getPostData($url,$params);
		}catch(Exception $e){
			echo $e;
			$ret =false;
		}
		return $ret;
	}

	//根据养殖场名称模糊查询养殖场列表
	public function analysis_getFarmsByFuzzyName(){
		$ret=null;
		try{
			$url="analysis/getFarmsByFuzzyName";
			$params=array(
				'device_id'=>$this->input->post('device_id'),
				'app_name'=>$this->input->post('app_name'),
				'farmName'=>$this->input->post('farmName')
				);
			$ret=getPostData($url,$params);
		}catch(Exception $e){
			echo $e;
			$ret =false;
		}
		return $ret;
	}

	// 根据检测大类获取检测项目
	public function analysis_getTestType(){
		$ret=null;
		try{
			$url="analysis/getTestTypeNameBySampling";
			$params=array(
				'animalType'=>$this->input->post('animalType'),
				'typeName'=>$this->input->post('typeName')
				);
			$ret=getPostData($url,$params);
		}catch(Exception $e){
			echo $e;
			$ret =false;
		}
		return $ret;
	}
	//新建养殖场页面需要返回省份，城市和销售人员列表，用来进行选择
	public function analysis_getFarmParams(){
		$ret=null;
		try{
			$url="analysis/getFarmParams";
			$params=array(
			     'device_id'=>$this->input->post('device_id'),
			     'app_name'=>$this->input->post('app_name')
			);
			$ret=getPostData($url,$params);
		}catch(Exception $e){
			echo $e;
			$ret = false;
		}
		return $ret;
	}
	//新建养殖场保存信息
	public function analysis_saveFarm(){
		$ret=null;
		try{
			$url="analysis/saveFarm";
			$params=array(
			     'device_id'=>$this->input->post('device_id'),
			     'app_name'=>$this->input->post('app_name'),
			     'farmName'=>$this->input->post('farmName'),
			     'contactPerson'=>$this->input->post('contactPerson'),
			     'contactPhone'=>$this->input->post('contactPhone'),
			     'emailNo'=>$this->input->post('emailNo'),
			     'province'=>$this->input->post('province'),
			     'city'=>$this->input->post('city'),
			     'address'=>$this->input->post('address'),
			     'sales'=>$this->input->post('sales'),
			     'salesId'=>$this->input->post('salesId')
			);
			$ret=getPostData($url,$params);
		}catch(Exception $e){
			echo $e;
			$ret = false;
		}
		return $ret;
	}

	// 根据手机号和养殖场名称获取健康咨询顾问和销售审批人
	public function analysis_getSales(){
		$ret=null;
		try{
			$url="analysis/getSalesAndConsultants";
			$params=array(
				'phoneNo'=>$this->input->post('phoneNo'),
				'farmName'=>$this->input->post('farmName')
				);
			$ret=getPostData($url,$params);
		}catch(Exception $e){
			echo $e;
			$ret =false;
		}
		return $ret;
	}
		// 提交送检信息
    	public function analysis_submitAnalysis(){
    		$ret=null;
    		try{
    			$url="analysis/submitAnalysis";
    			$params=array(
    			    'device_id'=>$this->input->post('device_id'),
    			    'app_name'=>$this->input->post('app_name'),
    				'animalType'=>$this->input->post('animalType'),
    				'phoneNo'=>$this->input->post('phoneNo'),
    				'farmName'=>$this->input->post('farmName'),
    				'drugTesting'=>$this->input->post('drugTesting'),
    				'morbidity'=>$this->input->post('morbidity'),
    				'mortality'=>$this->input->post('mortality'),
    				'clinicalSymptoms'=>$this->input->post('clinicalSymptoms'),
    				'vaccineName'=>$this->input->post('vaccineName'),
    				'immuneProcedure'=>$this->input->post('immuneProcedure'),
    				'dosageSchedule'=>$this->input->post('dosageSchedule'),
    				'disinfectingPlan'=>$this->input->post('disinfectingPlan'),
    				'dissectingLesion'=>$this->input->post('dissectingLesion'),
    				'preliminaryDiagnosis'=>$this->input->post('preliminaryDiagnosis'),
    				'derattingPlan'=>$this->input->post('derattingPlan'),
    				'consultantPhoneNo'=>$this->input->post('consultantPhoneNo'),
    				'salesPhoneNo'=>$this->input->post('salesPhoneNo'),
    				'poultryTotalCount'=>((!!$this->input->post('poultryTotalCount')) ? $this->input->post('poultryTotalCount') : ''),
    				'poultrySingleCount'=>((!!$this->input->post('poultrySingleCount')) ? $this->input->post('poultrySingleCount') : ''),
    				'poultryMonthCount'=>((!!$this->input->post('poultryMonthCount')) ? $this->input->post('poultryMonthCount') : ''),
    				'poultryBreeds'=>((!!$this->input->post('poultryBreeds')) ? $this->input->post('poultryBreeds') : ''),
    				'poultryGenerations'=>((!!$this->input->post('poultryGenerations')) ? $this->input->post('poultryGenerations') : ''),
    				'livestockTotalCount'=>((!!$this->input->post('livestockTotalCount')) ? $this->input->post('livestockTotalCount') : ''),
    				'livestockYearCount'=>((!!$this->input->post('livestockYearCount')) ? $this->input->post('livestockYearCount') : ''),
    				'livestockGenders'=>((!!$this->input->post('livestockGenders')) ? $this->input->post('livestockGenders') : []),
    				'livestockBreeds'=>((!!$this->input->post('livestockBreeds')) ? $this->input->post('livestockBreeds') : []),
    				'livestockParity'=>((!!$this->input->post('livestockParity')) ? $this->input->post('livestockParity') : ''),
    				'testingSamplingList'=>$this->input->post('testingSamplingList'),
    				'pigSerumRecordList'=>((!!$this->input->post('pigSerumRecordList')) ? $this->input->post('pigSerumRecordList') : [])

    				);
    			$ret=getPostData($url,$params);
    		}catch(Exception $e){
    			echo $e;
    			$ret =false;
    		}
    		return $ret;
    	}

	// 个人中心查询检验单列表
	public function analysis_getSheetList(){
		$ret=null;
		try{
			$url="analysis/getSheetList";
			$params=array(
				'phoneNo'=>$this->input->post('phoneNo')
				);
			$ret =getPostData($url,$params);
		}catch(Exception $e){
			echo $e;
			$ret =false;
		};
		return $ret;
	}
	// 个人中心查询检验单详情
	public function analysis_getSheetDetail(){
		$ret=null;
		try{
			$url="analysis/getSheetDetail";
			$params=array(
				'sheetNo'=>$this->input->post('sheetNo')
				);
			$ret=getPostData($url,$params);
		}catch(Exception $e){
			echo $e;
			$ret =false;
		}
		return $ret;
	}
	// 个人中心查看检验报告文件列表
	public function analysis_getTestingReport(){
		$ret=null;
		try{
			$url="analysis/getTestingReport";
			$params=array(
				'sheetNo'=>$this->input->post('sheetNo')
				);
			$ret=getPostData($url,$params);
		}catch(Exception $e){
			echo $e;
			$ret =false;
		}
		return $ret;
	}
	
	//查询检验单列表
	public function analysis_getTestingList(){
		$ret=null;
		try{
			$url="analysis/getTestingList";
			$params=array(
				'phoneNo'=>$this->input->post('phoneNo')
				);
			$ret=getPostData($url,$params);
		}catch(Exception $e){
			echo $e;
			$ret =false;
		}
		return $ret;
	}
	
}
