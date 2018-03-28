<?php include "../common/header_culture.php";?>
<body class="whiteBg">
	<!--动物诊疗第一步 -->
	<div class="wrap" id="wrap1">
	  <header>
		<!--
		<a class="back-btn backButton"></a>
		-->
		<h2>动物诊疗</h2>
		<a class="reg-btn help-btn animal_help_info">帮助信息</a>
	  </header>
	  <section class="main-section">
<!-- 	  	<div class="animal-typebottom-jianxi">
          <div class="typebottom-jianxi-text">
            <p>请填写基本信息，每项必填</p>
          </div>
        </div> -->
		<div class="unline-paybox dwzl-width">
      	<ul>
      	  <li>
            <!--星号使用类sj-xing-->
      	  	<div class="unline-id-bank dwzl-redxing-one left">送检人</div>
      	  	<div class="unline-input left">
      	  	  <input placeholder="请输入送检人姓名" max-input="10" id="client_name" type="text" required="required">
      	  	</div>
      	  	<div class="clearf"></div>
      	  </li>
      	  <li>
      	  	<div class="unline-id-bank dwzl-redxing-two left">联系电话</div>
      	  	<div class="unline-input left">
      	  	  <input placeholder="请输入送检人联系电话" maxLength="11" id="client_tel" type="tel" required="required">
      	  	</div>
      	  	<div class="clearf"></div>
      	  </li>
      	  <li>
      	  	<div class="unline-id-bank dwzl-redxing-three left">送检单位(全称)</div>
      	  	<div class="unline-input left">
      	  	  <input placeholder="请输入养殖场全称" max-input="40"  id="client_unit" required="required">
      	  	</div>
      	  	<div class="clearf"></div>
      	  </li>
      	</ul>
      </div>
		<a href="javascript:void(0);" class="center-btn login-finbtn animal_fill_next_one">下一步</a>
	  </section>
	</div>

	<!--动物诊疗第二步 -->
	<div class="wrap" id="wrap2" style="display:none;">
	  <header>
		<a class="back-btn backButton"></a>
		<h2>动物诊疗</h2>
		<a class="reg-btn help-btn animal_help_info">帮助信息</a>
	  </header>
	  <section class="main-section">
	  	<!--动物类型和下面的一行之间注释-->
<!--         <div class="animal-typebottom-jianxi">
          <div class="typebottom-jianxi-text">
            <p>请填写样品信息，发病情况非必填，其余必填</p>
          </div>
        </div> -->
	    <!--动物类型选择-->
       	<div class="dwzl-typetwo dwzl-typetwo-notop">
       		<div class="dwzl-typetwomain">
	       		<p class="left dwzl-typetwomain-left dwzl-typetwo-xingone">
	       		  <span>动物类型</span>
	       		</p>
            	<!--选择完成后的黑色字体样式使用类typemain-choosecolor-->
				<p class="right animal_type_choose">
					<span>请选择</span>
				</p>
				<div class="clearf"></div>
			</div>
		</div>
<!--动物类型样品信息（多选）-->
        <div class="dwzl-typetwo dwzl-typetwo-notop">
          <div class="dwzl-typetwomain animal-edit-title">
              <p class="left dwzl-typetwomain-left dwzl-typetwo-xingtwo">
                <span>样品信息（多选）</span>
              </p>
              <p class="right">
                <!--<span class="dwzl-typetwomain-color">编辑</span>-->
                <span class="dwzl-typetwomain-color animal-edit-item">编辑</span>
              </p>
            <div class="clearf"></div>
          </div>
          <!--下拉整体-->
          <div class="" style="display:none;">
            <!--展开的内容-->
            <div class="dwzl-typetwolist">
              <div class="dwzl-typetwolist-main">
                <p class="left specimen_type">
                <span>组织</span>
                </p>
                <p class="right dwzl-typetwolist-gou specimen_edit_item" data-type="tissue">
                  <!--选中使用类dwzl-typetwolist-duigou-->
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
        <!--组织下面展开的数量(直接隐藏这一整个就行)-->
            <div class="dwzl-typetwolist dwzl-typetwolist-num" style="display:none;">
              <div class="dwzl-typetwolist-main">
                <p class="left">
                <span>数量</span>
                </p>
                <p class="right">
                  <input id="tissue" max-input="3"><span class="dwzl-typetwolist-fen">份</span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
            <!--展开的内容-->
            <div class="dwzl-typetwolist">
              <div class="dwzl-typetwolist-main">
                <p class="left specimen_type">
                <span>血清</span>
                </p>
                <p class="right specimen_edit_item" data-type="serum">
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>

            <!--组织下面展开的数量(直接隐藏这一整个就行)-->
            <div class="dwzl-typetwolist dwzl-typetwolist-num" style="display:none;">
              <div class="dwzl-typetwolist-main">
                <p class="left">
                <span>数量</span>
                </p>
                <p class="right">
                  <input id="serum" max-input="3"><span class="dwzl-typetwolist-fen">份</span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>

            <!--展开的内容-->
            <div class="dwzl-typetwolist birds_show" style="display:none;">
              <div class="dwzl-typetwolist-main">
                <p class="left specimen_type">
                <span>鸡蛋</span>
                </p>
                <p class="right specimen_edit_item" data-type="egg">
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>

            <!--组织下面展开的数量(直接隐藏这一整个就行)-->
            <div class="dwzl-typetwolist dwzl-typetwolist-num" style="display:none;">
              <div class="dwzl-typetwolist-main">
                <p class="left">
                <span>数量</span>
                </p>
                <p class="right">
                  <input id="egg" max-input="3"><span class="dwzl-typetwolist-fen">份</span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>

            <!--展开的内容-->
            <div class="dwzl-typetwolist">
              <div class="dwzl-typetwolist-main">
                <p class="left specimen_type">
                <span>拭子</span>
                </p>
                <p class="right specimen_edit_item" data-type="swab">
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
        	<!--组织下面展开的数量(直接隐藏这一整个就行)-->
            <div class="dwzl-typetwolist dwzl-typetwolist-num" style="display:none;">
              <div class="dwzl-typetwolist-main">
                <p class="left">
                <span>数量</span>
                </p>
                <p class="right">
                  <input id="swab" max-input="3"><span class="dwzl-typetwolist-fen">份</span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
            <!--展开的内容-->
            <div class="dwzl-typetwolist beasts_show" style="display:none;">
              <div class="dwzl-typetwolist-main">
                <p class="left specimen_type">
                <span>脐带血</span>
                </p>
                <p class="right specimen_edit_item" data-type="cordBlood">
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
	        <!--组织下面展开的数量(直接隐藏这一整个就行)-->
            <div class="dwzl-typetwolist dwzl-typetwolist-num" style="display:none;">
              <div class="dwzl-typetwolist-main">
                <p class="left">
                <span>数量</span>
                </p>
                <p class="right">
                  <input id="cordBlood" max-input="3"><span class="dwzl-typetwolist-fen">份</span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
            <!--展开的内容-->
            <div class="dwzl-typetwolist beasts_show" style="display:none;">
              <div class="dwzl-typetwolist-main">
                <p class="left specimen_type">
                <span>乳汁</span>
                </p>
                <p class="right specimen_edit_item" data-type="milk">
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
	        <!--组织下面展开的数量(直接隐藏这一整个就行)-->
            <div class="dwzl-typetwolist dwzl-typetwolist-num" style="display:none;">
              <div class="dwzl-typetwolist-main">
                <p class="left">
                <span>数量</span>
                </p>
                <p class="right">
                  <input id="milk" max-input="3"><span class="dwzl-typetwolist-fen">份</span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
            <!--展开的内容-->
            <div class="dwzl-typetwolist">
              <div class="dwzl-typetwolist-main">
                <p class="left">
                <span>其他</span>
                </p>
                <p class="right specimen_edit_item" data-type="other">
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
            <!--收起其他弄快直接隐藏这个div-->
            <div class="" style="display:none;">
              <div class="dwzl-typetwolist dwzl-typetwolist-num dwzl-typetwolist-name">
                <div class="dwzl-typetwolist-main">
                  <p class="left">
                  <span>样品名称</span>
                  </p>
                  <p class="right">
                    <input class="dw-ypname-input" id="other_specimen_name" placeholder="请输入1-10字样品名称" max-input="10">
                  </p>
                  <div class="clearf"></div>
                </div>
              </div><div class="dwzl-typetwolist dwzl-typetwolist-num" style="border-top:none;">
                <div class="dwzl-typetwolist-main">
                  <p class="left">
                  <span>数量</span>
                  </p>
                  <p class="right">
                    <input id="other_specimen_num" max-input="3"><span class="dwzl-typetwolist-fen">份</span>
                  </p>
                  <div class="clearf"></div>
                </div>
              </div>
            </div>
          </div>
       </div>
       <div class="dwzl-typetwo dwzl-typetwo-notop">
          <div class="dwzl-typetwomain animal-edit-title">
              <p class="left dwzl-typetwomain-left dwzl-typetwo-xingtwo">
                <span>检测内容（多选）</span>
              </p>
              <p class="right">
                <span class="dwzl-typetwomain-color animal-edit-item">编辑</span>
                <!--<span class="dwzl-typetwomain-color">完成</span>-->
              </p>
            <div class="clearf"></div>
          </div>
          <!--下拉整体-->
          <div class="case_info_body" style="display:none;">
            <!--展开的内容-->
            <div class="dwzl-typetwolist">
              <div class="dwzl-typetwolist-main">
                <p class="left case_type">
                <span>抗体</span>
                </p>
                <p class="right case_edit_item" data-type="antibody">
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
            <!--展开的内容-->
            <div class="dwzl-typetwolist">
              <div class="dwzl-typetwolist-main">
                <p class="left case_type">
                <!-- <span>病原</span> -->
                <span>病毒</span>
                </p>
                <p class="right case_edit_item" data-type="pathogeny">
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
            <!--展开的内容-->
            <div class="dwzl-typetwolist">
              <div class="dwzl-typetwolist-main">
                <p class="left case_type">
                <span>细菌</span>
                </p>
                <p class="right case_edit_item" data-type="bacteria">
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
            <!--展开的内容-->
            <div class="dwzl-typetwolist">
              <div class="dwzl-typetwolist-main">
                <p class="left">
                <span>其他</span>
                </p>
                <p class="right case_edit_item" data-type="other">
                  <span class="dwzl-typetwolist-gou"></span>
                </p>
                <div class="clearf"></div>
              </div>
            </div>
            <!--收起其他弄快直接隐藏这个div-->
            <div class="other_case_body" style="display:none;">
              <div class="dw-jccon-else">
                <div class="dw-jccon-elsetexta">
                  <textarea id="other_case_info" placeholder="请输入其他检测内容"></textarea>
                </div>
                <div class="dw-righttext">
                  <span>0</span><span>/</span><span>50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
           <!--发病情况-->
          <!-- <div class="dw-fabing"> -->
        <div class="dwzl-typetwo dwzl-typetwo-notop">
          <div class="dwzl-typetwomain animal-edit-title">
              <p class="left dwzl-typetwomain-left dwzl-typetwo-xingone">
                <span>发病情况</span>
              </p>
              <p class="right">
                <!--<span class="dwzl-typetwomain-color">编辑</span>-->
                <span class="dwzl-typetwomain-color animal-edit-item">编辑</span>
              </p>
            <div class="clearf"></div>
          </div>
          <!--下拉整体-->
          <div class="" style="display:none;">
            <div class="dw-jccon-else dw-jccon-elseonly" style="border-top:none;">
              <div class="dw-jccon-elsetexta">
                <textarea id="symptoms" placeholder="请输入发病情况，如发病症状..."></textarea>
              </div>
              <div class="dw-righttext">
                <span>0</span><span>/</span><span>100</span>
              </div>
            </div>
          </div>
           
         </div>
		<a href="javascript:void(0);" class="animal-bottombtn dw-nextbtn animal_fill_next_two">下一步</a>

		<!--动物类型选择底部固定-->
		<div id="animal_type" style="display:none">
			<div class="mask"></div>
			<div class="animal-choose-bottom" >
			  <div class="animal-choose-lineone">选择动物类型</div>
			  <div class="animal-choose-linetwo animal_type_item" data-animal_type="birds">禽类（鸡、鸭）</div>
			  <div class="animal-choose-linetwo animal_type_item" data-animal_type="beasts">畜类（猪）</div>
			</div>
		</div>
	  </section>
	</div>

	<!--动物诊疗第三步 -->
	<div class="wrap" id="wrap3" style="display:none;">
	  <header>
		<a class="back-btn backButton"></a>
		<h2>动物诊疗</h2>
		<a class="reg-btn help-btn animal_charge_standard">收费标准</a>
	  </header>
	  <section class="main-section-animal">
		<!--动物类型和下面的一行之间注释-->
<!--         <div class="animal-typebottom-jianxi">
          <div class="typebottom-jianxi-text">
            <p>以下均必填</p>
          </div>
        </div> -->
		<!--动物诊疗地区等模块main-->
		<div class="animal-place-main">
		  <!--地区-->
		  <div class="animal-placemain-lineone">
			<div class="placemain-lineone animal_choose_area">
			  <p class="left dwzl-hongxing-one"><span>地区</span></p>
			  <p class="right animal_area_info" style="color:#1fa8ec;"><span>请选择</span></p>
			  <div class="clearf"></div>
			</div>
		  </div>
		  <!--送检地点-->
		  <div class="animal-placemain-lineone">
			<div class="placemain-lineone">
			  <p class="left dwzl-hongxing-two"><span>送检地点</span></p>
			  <p class="right inspection_place_info" style="display:none;">
				<span class="left placemain-lineone-text">总诊断中心</span><span class="right zhuyi-img"></span>
				<div class="clearf"></div>
			  </p>
			  <div class="clearf"></div>
			</div>
		   </div>
			<!--付费方式-->
<!-- 				<div class="animal-placemain-lineone">
			  <div class="placemain-lineone">
				<p class="left dwzl-hongxing-three"><span>付费方式</span></p>
				<div class="clearf"></div>
			  </div>
			</div> -->
			<!--付费方式下面的2行检测体验卡和自费-->
<!-- 			<div class="animal-jyk-maincon">
			  <div class="animal-jyk-main">
				<div class="jyk-main">
				  <p class="left animal-charge-option"> -->
					<!--当选中时使用类jyk-main-ckecked，jyk-main-unckecked这个类是未选中的必须有的，-->
<!-- 					<span class="jyk-main-unckecked" data-type="card"></span><span>检测体验卡</span>
				  </p>
				  <p class="right">
					<input placeholder="请输入卡号" id="card_nums" maxLength="20" class="disabled-gray" style="padding:0;padding-left:8px;">
				  </p>
				  <div class="clearf"></div>
				</div>
			  </div>
			  <div class="animal-jyk-main">
				<div class="jyk-main">
				  <p class="left animal-charge-option">
					<span class="jyk-main-unckecked jyk-main-ckecked" data-type="expense"></span><span>自费</span>
				  </p>
				  <p class="right">
					<span class="animal-jyk-main-color animal_charge_standard">收费标准</span>
				  </p>
				  <div class="clearf"></div>
				</div>
			  </div>
			
		  </div>
		</div>
		<div class="animal-bottomzs">
		  <p>具体支付金额会在检测中心登记收货后确定并进行支付。</p>
		</div> -->
		<a href="javascript:void(0);" class="btn-base animal_fill_next">提交申请</a>
		<div id="animal_check" style="display:none">
			<!--遮罩-->
			<div class="mask"></div>
			<div class="animal-alert-sjplace">
				<div class="alert-sjplace">
					<p class="alert-sjplace-one">地址：</p>
					<p class="alert-sjplace-two">天津空港经济区东九道1号 动物疫病诊断研究服务中心 300308</p>
					<p class="alert-sjplace-three">电话：</p>
					<!--<p class="alert-sjplace-four">022-88958053/022-88958065</p>-->
					<p class="alert-sjplace-four"><a href="tel:4008005696" style="color:blue;text-decoration:underline;background:none;text-align:left;margin:0;">4008005696</a></p>
          <!-- <a class="alert-sjplace-four" href="tel:4008005696"></a> -->
					<!-- <p class="alert-sjplace-five">联系人：</p>
					<p class="alert-sjplace-six">沈元（禽） 电话 ：15930741082</p>
					<p class="alert-sjplace-seven">崔玉娟（禽） 电话 ：15022327613</p>
					<p class="alert-sjplace-eight">冯敬敬（畜） 电话 ：15822032195</p> -->
				</div>
		   </div>
	   </div>

	   

	  </section>
	</div>	


	<!-- 帮助信息 -->
	<div class="wrap" id="wrap4" style="display:none;">
		<header>
		  <a class="back-btn backButton"></a>
		  <h2>帮助信息</h2>
		</header>
	  <!--<section class="main-section">
		  内容
		  <div class="help-main">
			<div class="help-maincon">
			  <p>送检人联系电话送检人联系电话送检人联系电话送联系电话送检人联系电话送检人联系电话送检人联系电话送检人联联系电话送检人联系电话送检人联系电话送检人联系电话送检人联检人联系电话送检人联系电话送检人联系电话</p>
			</div>
		  </div>
		</section>-->
				<section class="main-section-animal">
		  <!--第一行-->
		  <div class="sfbz-main animal-charge-item-title">
			<div class="sfbz-lineone">
			  <p class="left" >禽类（鸡、鸭）</p>
			  <p class="right sfbz-lineone-color animal-charge-trigger animal-charge-down">展开</p>
			  <div class="clearf"></div>
			</div>
		  </div>
		  <!--第一行下面的内容一小块的开始-->
		  <div class="sfbz-mainconlist" style="display:none;">
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
                  <!--收起时加上类sfbz-lineone-shouqi-->
				  <p class="sfbz-lineone-xiala"><span>鸡传染性支气管炎（IB）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原、4/91型快速鉴定、抗体三类检测，重点送检样品：气管、肺脏、肾脏，还可送检：脾脏、输卵管、盲肠扁桃体、泄殖腔拭子，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<!--结束-->
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>新城疫（ND）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原、病原快速分型、抗体三类检测，重点送检样品：气管拭子或泄殖腔拭子，还可送检：气管、脾脏、肺脏、肝脏、肾脏、脑、肠内容物，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>禽流感H9/H7/H5亚型</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原和抗体检测，重点送检样品：气管、肺脏、泄殖腔拭子，还可送检：气囊、窦的分泌物、脾脏、肝脏，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			 <div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>减蛋综合征（EDS）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原和抗体检测，重点送检样品：输卵管、子宫黏膜、卵巢，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>禽白血病（ALV）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供通用病原、亚型鉴别（A/B/J亚型）、抗体检测，重点送检样品：泄殖腔拭子、新鲜全血或血浆，还可送检：脾脏、新鲜肝脏、肾脏、输卵管膨大部、鸡胚抽提物,常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡网状内皮增生症（REV）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原、抗体检测，重点送检样品：新鲜全血、新鲜脾脏，还可送检：含活细胞的肿瘤组织制备物，常规3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>禽病毒性关节炎（REO）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原、抗体检测，重点送检样品：胫骨关节或胫跗关节的滑液，还可送检：感染初期的脾脏、泄殖腔或气管拭子，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡传染性贫血（CIA）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原、抗体检测，重点送检样品：肝脏，还可送检：脾脏、胸腺、肺、骨髓，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡马立克氏病（MD）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原、抗体检测，重点送检样品：肝脏、肾脏、胸腺、肿瘤，还可送检：脾脏、羽根、全血或其他含有肿瘤的组织，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡传染性法氏囊病（IBD）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原、抗体检测，重点送检样品：法氏囊，还可送检：早期淋巴组织，常规每项3-4个工作日出结果</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡败血支原体（MG）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原、病原培养鉴定、抗体检测，重点送检样品：肺脏、脾脏、气管拭子，还可送检：眶下窦及其分泌物、气囊、泄殖腔拭子，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-xiala"><span>鸡滑液囊支原体（MS）</span></p>
				<p class="sfbz-lineone-text" style="display:none;">提供病原、病原培养鉴定、抗体检测，重点送检样品：关节囊积液，常规3-4个工作日出结果。</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-xiala"><span>鸡脑脊髓炎病毒(AE)</span></p>
				<p class="sfbz-lineone-text" style="display:none;">提供病原、抗体检测，重点送检样品：脑、胰腺，常规每项3-4个工作日出结果。</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡传染性喉气管炎（ILT）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原、抗体检测，重点送检样品：气管拭子、肺脏、脾脏，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸭出血性卵巢炎/鸭黄病毒（DHO/FLV)</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原检测，重点送检样品：输卵管、卵巢、脾脏、肝脏、肾脏，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>包涵体肝炎（IBH）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原检测，重点送检样品：肝脏，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>禽肺病毒（APV）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供病原检测，重点送检样品：气管、脾脏、肺脏、肝脏、肾脏，常规每项3-4个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>寄生虫检测</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">提供绦虫、球虫、线虫检测，重点送检样品：肠道及内容物，其中球虫还可送检：带有粪便的垫料，常规每项2个工作日出结果。</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-xiala"><span>细菌检测</span></p>
				<p class="sfbz-lineone-text" style="display:none;">鸡大肠杆菌（Escherichia coli）重点送检样品：肝脏（雏鸡取肛拭子）；</p>
				<p class="sfbz-lineone-text" style="display:none; padding-top:4px;" >沙门氏菌（Salmonella）重点送检样品：肝脏（雏鸡取肛拭子）；</p>
				<p class="sfbz-lineone-text" style="display:none; padding-top:4px;">葡萄球菌（Staphylococcus）、金黄色葡萄球菌（Staphyloccocus aureus）重点送检样品：腿；</p>
				<p class="sfbz-lineone-text" style="display:none; padding-top:4px;">副鸡嗜血杆菌（Haemophilus gallinarum）重点送检样品：眶下窦；</p>
				<p class="sfbz-lineone-text" style="display:none; padding-top:4px;">禽霍乱/巴氏杆菌(Avian Pasteurella Multocida）、链球菌(Streptococcus)重点送检样品：肝脏；</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>基因测序</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">重点送检样品：组织样品、尿囊液、活疫苗，常规15-30个工作日出结果。</p>
				</div>
			</div>
		  </div>
		  <!--第二行-->
		  <div class="sfbz-main sfbz-main-notopborder animal-charge-item-title">
			<div class="sfbz-lineone">
			  <p class="left">畜类（猪）</p>
			  <p class="right sfbz-lineone-color animal-charge-trigger animal-charge-down">展开</p>
			  <div class="clearf"></div>
			</div>
		  </div>
		  <!--第二行下面的内容一小块的开始-->
		  <div class="sfbz-mainconlist" style="display:none;">
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>猪瘟（CSF/HC）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">抗体检测送检样品：血清；</p>
				  <p class="sfbz-lineone-text" style="display:none;padding-top:4px;">病原检测送检样品：扁桃体、淋巴结、脾、肾</p>
				</div>
			</div>
			<!--结束-->
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>猪繁殖与呼吸综合征（PRRS）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">抗体检测送检样品：血清；</p>
				  <p class="sfbz-lineone-text" style="display:none;padding-top:4px;">病原检测送检样品：（死弱胎、病猪的）肺、扁桃体、脾、淋巴结</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>圆环病毒2型（PCV2）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">抗体检测送检样品：血清；</p>
				  <p class="sfbz-lineone-text" style="display:none; padding-top:4px;">病原检测送检样品：腹股沟淋巴结、肺脏、脾、或病猪抗凝血、仔猪心脏</p>
				</div>
			</div>
			 <div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>伪狂犬病（PR）</span></p>
				<p class="sfbz-lineone-text" style="display:none;">gB抗体、gE鉴别检测送检样品：25元/份；</p>
				<p class="sfbz-lineone-text" style="display:none; padding-top:4px;">病原检测送检样品：脑、扁桃体、肺、淋巴结</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-text" style="padding-top:0px;">细小病毒病（PP)检测送检样品：鼻咽、气管等器官组织、死胎、木乃伊胎、公猪精液、淋巴结</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-text" style="padding-top:0px;">口蹄疫（FMD）检测送检样品：血清</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-text" style="padding-top:0px;">日本乙型脑炎（JE）检测送检样品：脑</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-text" style="padding-top:0px;">传染性胃肠炎（TGE）/流行性腹泻（PED）/轮状病毒（RV）/库博病毒（Kobuvirus）（仔猪腹泻）/博卡病毒（Bocavirus病毒）（仔猪腹泻）检测送检样品：空肠、小肠内容物、粪便</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-text" style="padding-top:0px;">猪流感（SI）检测送检样品：鼻腔分泌物（活体鼻拭子）、气管分泌物、肺</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-text" style="padding-top:0px;">猪链球菌/副猪嗜血杆菌病/猪喘气病/猪传染性胸膜肺炎/多杀性巴氏杆菌（Pm）/沙门氏菌/大肠杆菌（E.coli）检测送检样品：肺脏</p>
			  </div>
			</div>
		  </div>
		</section>
	</div>

	<!-- 收费标准 -->
	<div class="wrap" id="wrap5" style="display:none;">
		<header>
		  <a class="back-btn backButton"></a>
		  <h2>收费标准</h2>
		</header>
		<section class="main-section-animal">
		  <!--第一行-->
		  <div class="sfbz-main animal-charge-item-title">
			<div class="sfbz-lineone">
			  <p class="left">禽类（鸡、鸭）</p>
			  <p class="right sfbz-lineone-color animal-charge-trigger animal-charge-down">展开</p>
			  <div class="clearf"></div>
			</div>
		  </div>
		  <!--第一行下面的内容一小块的开始-->
		  <div class="sfbz-mainconlist" style="display:none;">
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡传染性支气管炎（IB）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：100元/份；4/91型快速鉴定：100元/份；抗体：25元/份</p>
				</div>
			</div>
			<!--结束-->
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>新城疫（ND）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：100元/份；病原快速分型：100元/份；抗体：4元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>禽流感H9/H7/H5亚型</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：180元/份；抗体：6元/份</p>
				</div>
			</div>
			 <div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>减蛋综合症（EDS）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：100元/份；抗体：4元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>禽白血病（ALV）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">通用病原：90元/份；分型鉴别：200元/份；抗体：25元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡网状内皮增生症（REV）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：90元/份；抗体：40元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>禽病毒性关节炎（REO）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：100元/份；抗体：25元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡传染性贫血（CIA）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：90元/份；抗体：40元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡马立克氏病（MD）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：90元/份；抗体：10元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡传染性法氏囊病（IBD）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：100元/份；抗体：25元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡败血支原体（MG）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：90元/份；病原培养鉴定；抗体：40元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-xiala"><span>鸡滑液囊支原体（MS）</span></p>
				<p class="sfbz-lineone-text" style="display:none;">病原：90元/份；病原培养鉴定；抗体：40元/份</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-xiala"><span>鸡脑脊髓炎病毒(AE)</span></p>
				<p class="sfbz-lineone-text" style="display:none;">病原；抗体：90元/份</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>鸡传染性喉气管炎（ILT）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：100元/份；抗体</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p>鸭出血性卵巢炎/鸭黄病毒（DHO/FLV)包涵体肝炎（IBH）/禽肺病毒（APV）</p>
				  <p class="sfbz-lineone-text" style="display:none;">病原：100元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>寄生虫检测</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">绦虫：40元/份</p>
				<p class="sfbz-lineone-text" style="display:none; padding-top:4px;">球虫：140元/份</p>
				<p class="sfbz-lineone-text" style="display:none; padding-top:4px;">线虫：40元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>细菌检测</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">鸡大肠杆菌（Escherichia coli）：100元/份</p>
				<p class="sfbz-lineone-text" style="display:none;padding-top:4px;">沙门氏菌（Salmonella）：155元/份</p>
				<p class="sfbz-lineone-text" style="display:none;padding-top:4px;">葡萄球菌（Staphylococcus）：100元/份</p>
				<p class="sfbz-lineone-text" style="display:none;padding-top:4px;">副鸡嗜血杆菌（Haemophilus gallinarum）：250元/份</p>
				<p class="sfbz-lineone-text" style="display:none;padding-top:4px;">禽霍乱/巴氏杆菌(Avian Pasteurella Multocida）：200元/份</p>
				<p class="sfbz-lineone-text" style="display:none;padding-top:4px;">金黄色葡萄球菌（Staphyloccocus aureus）:100元/份</p>
				<p class="sfbz-lineone-text" style="display:none;padding-top:4px;">链球菌(Streptococcus)：150元/份</p>
				<p class="sfbz-lineone-text" style="display:none;padding-top:4px;">绿脓杆菌(Pseudomonas aeruginosa)：100元/份</p>
                <p class="sfbz-lineone-text" style="display:none;padding-top:4px;">未知菌鉴定：500元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p>根据菌种和待检药物数定价</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>病毒扩增培养</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">鸡胚法：500元/份</p>
                  <p class="sfbz-lineone-text" style="display:none;padding-top:4px;">细胞法：1000元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-xiala"><span>分子生物学检测</span></p>
				<p class="sfbz-lineone-text" style="display:none;">基因测序；基因序列分析：400元/份；</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-xiala"><span>组织病理学检测</span></p>
				<p class="sfbz-lineone-text" style="display:none;">组织切片与镜检：300元/份</p>
			  </div>
			</div>
		  </div>
		  <!--第二行-->
		  <div class="sfbz-main sfbz-main-notopborder animal-charge-item-title">
			<div class="sfbz-lineone">
			  <p class="left">畜类（猪）</p>
			  <p class="right sfbz-lineone-color animal-charge-trigger animal-charge-down">展开</p>
			  <div class="clearf"></div>
			</div>
		  </div>
		  <!--第二行下面的内容一小块的开始-->
		  <div class="sfbz-mainconlist" style="display:none;">
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>猪瘟（CSF/HC）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">抗体：40元/份；病原：100元/份</p>
				</div>
			</div>
			<!--结束-->
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>猪繁殖与呼吸综合征（PRRS）</span></p>
				  <p class="sfbz-lineone-text" style="display:none;">抗体：65元/份；病原：100元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-xiala"><span>圆环病毒2型（PCV2）</span></p>
				<p class="sfbz-lineone-text" style="display:none;">抗体：25元/份；病原：100元/份</p>
			  </div>
			</div>
			 <div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala"><span>伪狂犬病（PR）</span></p>
				<p class="sfbz-lineone-text" style="display:none;">gB抗体：40元/份；gE抗体：40元/份；病原：100元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				  <p class="sfbz-lineone-xiala" style="height: 174px;line-height: 36px;"><span style=" display: inline-block;
  width: 90%;">细小病毒病（PP)/日本乙型脑炎（JE）/传染性胃肠炎（TGE）/流行性腹泻（PED）/轮状病毒（RV）/库博病毒（Kobuvirus）（仔猪腹泻）/博卡病毒（Bocavirus病毒）（仔猪腹泻）/猪流感(SI)</span></p>
				<p class="sfbz-lineone-text" style="display:none;">病原：100元/份</p>
				</div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p class="sfbz-lineone-xiala"><span>病毒基因变异与分子进化分析</span></p>
				<p class="sfbz-lineone-text" style="display:none;">测序、分子进化:500元/份</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p>猪链球菌：265元/份</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p>副猪嗜血杆菌病：300元/份</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p>猪萎缩性鼻炎：265元/份</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p>猪喘气病：425元/份</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p>猪传染性胸膜肺炎：325元/份</p>
			  </div>
			</div>
			<div class="sfbz-maincon">
			  <div class="sfbz-lineone-con">
				<p>多杀性巴氏杆菌（Pm）/沙门氏菌/大肠杆菌（E.coli）：200元/份</p>
			  </div>
			</div>
		  </div>
		</section>
	</div>

	<!-- 地区选择 -->
	<?php include "../common/choose_area.php" ?>
</body>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
data-main="./../../public/js/modules/animal_cure/index.js"></script>

