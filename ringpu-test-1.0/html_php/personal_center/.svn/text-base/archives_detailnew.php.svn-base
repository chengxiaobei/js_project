<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<link type="text/css" rel="stylesheet" href="../../public/css/main_rp.css">
	<style>
		.detail_inspection_report .detail_inspection_report_right .detail_right_body .detail_body_left {
          width: 100%;
          float: left;
         }
         .detail_inspection_report .detail_inspection_report_right .detail_right_body .detail_body_left .detail_left_list {
           height:auto;
           line-height: 24px;
           font-size: 12px;
           padding-right:12%;
           color:#666;
          }
          .detail_inspection_report .detail_inspection_report_right .detail_right_body .detail_body_left .detail_left_list p{
          	display:block;
          	min-height:24px;
          	color:#000;
          }
         .detail_inspection_report .detail_inspection_report_right{
          	overflow-y: scroll;
          	width:67%;
          	right:-3%;
          	padding-bottom:24px;
          }
	</style>
</head>
<body class="whiteBg" style="background: white;">
<div class="wrap" id="wrap1">
	<script type="text/x-jsmart-tmpl" id="archives_list_tpl">
	<header>
      <a class="back-btn backButton" href="javascript:void(0);"></a>
      <h2>送检单详情</h2>
      <a class="reg-btn" href="javascript:void(0);" style="width:30%;">查看检测报告</a>
    </header>
	<section class="detail_inspection_report">
		<div class="detail_inspection_report_left" id="hzz-right">
			<div class="detail_left_title list-item">通用</div>
			<div class="detail_left_choose list-item">{$animalType}</div>
			<div class="detail_left_choose list-item">样品及检测项目</div> 
	        {if $animalType=="家畜"} 
			<div class="detail_left_choose list-item">猪场血清学调查记录</div>
			{/if}
			<div class="detail_left_choose list-item">疫情及治疗询问</div>
			<div class="detail_left_choose list-item">审批信息</div>
		</div>
	
		<div class="detail_inspection_report_right" style="z-index: 10;">
			<div class="detail_right_title">通用</div>
			<div class="detail_right_body">
				<div class="detail_body_left">
					<div class="detail_left_list">手机号<br/><p>{$phoneNo}</p></div>
					<div class="detail_left_list">动物类别<br/><p>{$animalType}</p></div>
					<div class="detail_left_list">养殖场名称<br/><p>{$farmName}</p></div>
					<div class="detail_left_list">药物检测<br/><p>{$drugTesting}</p></div>
				</div>
				<div class="clearf"></div>
			</div>
		</div>
		{if $animalType =="家畜"}
		<div class="detail_inspection_report_right">
			<div class="detail_right_title">{$animalType}</div>
			<div class="detail_right_body">
				<div class="detail_body_left">
					<div class="detail_left_list">母猪存栏数<br/><p>{$livestockTotalCount} 头</p></div>
					<div class="detail_left_list">年出栏肥猪数<br/><p>{$livestockYearCount} 头</p></div>
					<div class="detail_left_list">饲养品种<br/><p>{$livestockBreeds}</p></div>
					<div class="detail_left_list">送检猪类别<br/><p>{$livestockGenders}</p></div>
					<!-- <div class="detail_left_list">母猪胎次<br/><p>{$livestockParity}</p></div> -->
				</div>
				<div class="clearf"></div>
			</div>
		</div>
		{/if}
		{if $animalType == "家禽"}
			<div class="detail_inspection_report_right">
			<div class="detail_right_title">{$animalType}</div>
			<div class="detail_right_body">
				<div class="detail_body_left">
					<div class="detail_left_list">全场养殖量<br/><p>{$poultryTotalCount} 只</p></div>
					<div class="detail_left_list">单舍养殖量<br/><p>{$poultrySingleCount} 只</p></div>
					<div class="detail_left_list">公司养殖量／月<br/><p>{$poultryMonthCount} 只</p></div>
					<div class="detail_left_list">饲养品种<br/><p>{$poultryBreeds}</p></div>
					<div class="detail_left_list">迭送代次</br><p>{$poultryGenerations}</p></div>
				</div>
				<div class="clearf"></div>
			</div>
		</div>
		{/if}
		<div class="detail_inspection_report_right">
			<div class="detail_right_title">样品及检测项目</div>
			{if $testingSamplingList && $testingSamplingList.length>0}
			{foreach $testingSamplingList as $key=>$value}
			<div class="xm" style="color:#1FA8EC;height:20px;width:100%;border-bottom:1px solid #ddd;">检测样品{$key+1}</div>
			<div class="detail_right_body">
				<div class="detail_body_left">
					<div class="detail_left_list">检测大类<br/><p>{$value.samplingSystemNo}</p></div>
				    <div class="detail_left_list">检测项目<br/><p>{$value.testTypeName}</p></div>
					<div class="detail_left_list">检测部位或样品<br/><p>{$value.testTypeDetailNames}</p></div>
					<div class="detail_left_list">栋舍／场名<br/><p>{$value.farmName}</p></div>
					<div class="detail_left_list">送检日龄<br/><p>{$value.sendAge}{if $value.sendAge} 日龄{/if}</p></div>
					<div class="detail_left_list">发病日龄<br/><p>{$value.morbidityAge}{if $value.morbidityAge} 日龄{/if}</p></div>
					<div class="detail_left_list">样品数量<br/><p>{$value.sendSamplingCount}</p></div>
				</div>
				<div class="clearf"></div>
			</div>
		{/foreach}
		{/if}
		</div>
		{if $animalType == "家畜"}
		<div class="detail_inspection_report_right">
			<div class="detail_right_title">猪场血清学调查记录</div>
			{foreach $pigSerumRecordList as $key=>$value}
			<div class="xm" style="color:#1FA8EC;height:20px;width:100%;border-bottom:1px solid #ddd;">猪场血清学调查{$key+1}</div>
			<div class="detail_right_body">
				<div class="detail_body_left">
					<div class="detail_left_list">编号<br/><p>{$value.no}</p></div>
					<div class="detail_left_list">耳号<br/><p>{$value.earNo}</p></div>
					<div class="detail_left_list">猪阶段<br/><p>{$value.pigStage}</p></div> 
					<!--<div class="detail_left_list">疫苗及用药<br/><p>{$value.vaccine}</p></div> -->
					<div class="detail_left_list">死产<br/><p>{$value.stillbirth}</p></div>
					<div class="detail_left_list">流产<br/><p>{$value.abortion}</p></div>
					<div class="detail_left_list">干尸<br/><p>{$value.mummy}</p></div>
					<div class="detail_left_list">空杯<br/><p>{$value.nonpregnant}</p></div>
					<div class="detail_left_list">高烧<br/><p>{$value.highfever}</p></div>
					<div class="detail_left_list">呼吸道疾病<br/><p>{$value.respiratoryDisease}</p></div>
					<div class="detail_left_list">神经症状<br/><p>{$value.nervous}</p></div>
					<div class="detail_left_list">刻板行为<br/><p>{$value.mechanical}</p></div>
					<div class="detail_left_list">其他症状<br/><p>{$value.othersymptom}</p></div>
				</div>
				<div class="clearf"></div>
			</div>
			{/foreach}
		</div>
		{/if}
		<div class="detail_inspection_report_right">
			<div class="detail_right_title">疫情及治疗询问</div>
			<div class="detail_right_body">
				<div class="detail_body_left">
					<div class="detail_left_list">发病率：<br/><p>{$morbidity} %</p></div>
					<div class="detail_left_list">死亡率：<br/><p>{$mortality} %</p></div>
					{if $animalType == "家禽"}
					<div class="detail_left_list">临床症状描述：<br/><p>{$clinicalSymptoms}</p></div>
					{/if}
					<div class="detail_left_list">免疫信息－疫苗名称及厂家：<br/><p>{$vaccineName}</p></div>
					<div class="detail_left_list">免疫信息－免疫程序描述：<br/><p>{$immuneProcedure}</p></div>
					<div class="detail_left_list">用药方案,产品描述，效果：<br/><p>{$dosageSchedule}</p></div>
					<div class="detail_left_list">消毒方案及产品描述：<br/><p>{$disinfectingPlan}</p></div>
					<div class="detail_left_list">剖检病变：<br/><p>{$dissectingLesion}</p></div>
					<div class="detail_left_list">初步诊断<br/><p>{$preliminaryDiagnosis}</p></div>
					<div class="detail_left_list">灭鼠灭蝇措施：<br/><p>{$derattingPlan}</p></div>
				</div>
				<div class="clearf"></div>
			</div>
		</div>
		<div class="detail_inspection_report_right">
			<div class="detail_right_title">审批信息</div>
			<div class="detail_right_body">
				<div class="detail_body_left">
					<div class="detail_left_list">健康咨询顾问<br/><p>{$consultantPhoneNo}</p></div>
					<div class="detail_left_list">销售审批人<br/><p>{$salesPhoneNo}</p></div>
				</div>
				<div class="clearf"></div>
			</div>
		</div>
	</section>
	</script>
</div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/archives_detailnew.js"></script>

