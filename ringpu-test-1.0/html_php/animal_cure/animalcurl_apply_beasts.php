<?php include "../common/header_culture.php";?>
<body>
  <div class="wrap" id="mainWrap">
    <header>
      <a class="back-btn main-back-btn" href="javascript:void(0);"></a>
      <h2>填写检测申请</h2>
      <a class="reg-btn main-reg-btn" href="javascript:void(0);">取消</a>
    </header>
    <section class="main-section">
     <!--进度条-->
      <div class="animal-exam-apply">
        <div class="apply-box">
          <ul>
            <!--给li加类curr，并给cirle-line所在div加curr，为当前进度的样式。当给cirle-line加curr时上一个li中的cirle-line应去掉curr。如不明白请咨询然酱。-->
            <li class="section1 curr">
              <div class="apply-cirle">
                <div class="cirle-just">1</div>
                <div class="cirle-line curr"></div>
              </div>
              <div class="apply-title">通用</div>
            </li>
            <li class="section2">
              <div class="apply-cirle">
                <div class="cirle-just">2</div>
                <div class="cirle-line"></div>
              </div>
              <div class="apply-title">饲养信息</div>
            </li>
            <li class="section3">
              <div class="apply-cirle">
                <div class="cirle-just">3</div>
                <div class="cirle-line"></div>
              </div>
              <div class="apply-title">样品及检测项目</div>
            </li>
            <li class="section4">
              <div class="apply-cirle">
                <div class="cirle-just">4</div>
                <div class="cirle-line"></div>
              </div>
              <div class="apply-title">猪场血清学调查</div>
            </li>
            <li class="section5">
              <div class="apply-cirle">
                <div class="cirle-just">5</div>
                <div class="cirle-line"></div>
              </div>
              <div class="apply-title">疫情及治疗询问</div>
            </li>
            <li class="section6">
              <div class="apply-cirle">
                <div class="cirle-just">6</div>
              </div>
              <div class="apply-title">审批信息</div>
            </li>
          </ul>
          <div class="clearf"></div>
        </div>
      </div>
      <!---->
      <div id="section1" class="sub-section">
        <div class="animal-apply-con">
          <ul>
            <li>
              <div>
                <div class="left conli-left"><span>手机号</span></div>
                <div class="left conli-right">
                  <input placeholder="请输入手机号" max-input="11" id="phoneNo" type="tel" name="">
                </div>
                <div class="clearf"></div>
              </div>
            </li>
            <li>
              <div>
                <div class="left conli-left"><span>养殖场名称</span></div>
                <div class="left conli-right right-btn">
                  <!-- <input placeholder="请输入名称" id="farmName" max-input="40" type="" name=""> -->
                  <div class="div-input curr" id="farmNames">请选择养殖场名称</div>
                </div>
                <div class="clearf"></div>
              </div>
            </li>
            <li>
              <div>
                <div class="left conli-left"><span>是否药物检测</span></div>
                <div class="left conli-right" id="drugTesting">
                  <!--添加curr为选中状态-->
                  <div class="left con-check">是</div>
                  <div class="left con-check curr">否</div>
                  <div class="clearf"></div>
                </div>
                <div class="clearf"></div>
              </div>
            </li>
          </ul>
        </div>
        <!--广告-->
        <div class="animal-exam-next" data-type="beasts">
          <a class="exam-next check-next-btn" href="javascript:void(0);">下一步</a>
        </div>
      </div>
      <div id="section2" class="sub-section" style="display:none;">
        <div class="animal-apply-con">
          <ul>
            <li>
              <div>
                <div class="left conli-left"><span>母猪存栏数</span></div>
                <div class="left grey-input">
                  <input placeholder="请输入" id="livestockTotalCount" max-input="8" type="" name=""><span>头</span>
                </div>
                <div class="clearf"></div>
              </div>
            </li>
            <li>
              <div>
                <div class="left conli-left"><span>年出栏肥猪数</span></div>
                <div class="left grey-input">
                  <input placeholder="请输入" id="livestockYearCount" max-input="8" type="" name=""><span>头</span>
                </div>
                <div class="clearf"></div>
              </div>
            </li>
            <li>
              <div>
                <div class="left conli-left"><span>饲养品种</span></div>
                <div class="left conli-right">
                <!--当点击选择后 删除curr这个类-->
                <div class="div-input curr" id="beasts_breeding">请选择（可多选）</div>
                </div>
                <div class="clearf"></div>
              </div>
            </li>
            <li>
              <div>
                <div class="left conli-left"><span>送检猪类别</span></div>
                <div class="left conli-right">
                <!--当点击选择后 删除curr这个类-->
                <div class="div-input curr" id="pigs_category">请选择（可多选）</div>
                </div>
                <div class="clearf"></div>
              </div>
            </li>
<!--             <li>
              <div>
                <div class="left conli-left">母猪胎次</div>
                <div class="left conli-right">
                  <input placeholder="请填写（非必填）" max-input="8" id="livestockParity" type="" name="">
                </div>
                <div class="clearf"></div>
              </div>
            </li> -->
          </ul>
        </div>
        <!--广告-->
        <div class="animal-exam-next" data-type="beasts">
          <a class="exam-next" href="javascript:void(0);">下一步</a>
        </div>
      </div>
      <div id="section3" class="sub-section" style="display:none;">
        <!---->
        <div class="animal-apply-con">
          <!--添加检测样品-->
          <div class="con-addsample">
            <div class="left">检测样品</div>
            <div class="right sample-add"></div>
            <div class="clearf"></div>
          </div>
        </div>
        <div class="animal-apply-fee" id="sampleFee">
          费用预估：<span>0</span>元
        </div>
        <div class="clearf">
        </div>
        <!--广告-->
        <div class="animal-exam-next"  data-type="beasts">
          <a class="exam-next" href="javascript:void(0);">下一步</a>
        </div>
      </div>
      <div id="section4" class="sub-section" style="display:none;">
        <!---->
        <div class="animal-apply-con">
          <!--添加检测样品-->
          <div class="con-addsample">
            <div class="left">猪场血清学调查</div>
            <div class="right sample-add"></div>
            <div class="clearf"></div>
          </div>

        </div>
        <!--广告-->
        <div class="animal-exam-next" data-type="beasts">
          <a class="exam-next" href="javascript:void(0);">下一步</a>
        </div>
      </div>
      <div id="section5" class="sub-section" style="display:none;">
        <!---->
          <div class="animal-apply-con">
            <ul>
              <li>
                <div>
                  <div class="left conli-left"><span>发病率</span></div>
                  <div class="left grey-input">
                    <input placeholder="请输入数字" id="morbidity"  max-input="3" type="" name=""><span>％</span>
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left"><span>死亡率</span></div>
                  <div class="left grey-input">
                    <input placeholder="请输入数字" id="mortality" max-input="3" type="" name=""><span>％</span>
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
<!--               <li>
                <div class="con-step5">
                  <div class="left conli-left">临床症状描述</div>
                  <div class="left conli-right">
                    <a class="right-edit right" href="javascript:void(0)">编辑</a>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
                      <div class="text-area" style="display:none;">
                        <textarea placeholder="请输入临床症状描述" max-input="100" id="clinicalSymptoms"></textarea>
                        <div class="text-no">0/100</div>
                      </div>
              </li> -->
              <li>
                <div class="con-step5">
                  <div class="left conli-left"><span>免疫信息-疫苗名称及厂家</span></div>
                  <div class="left conli-right">
                    <a class="right-edit right" href="javascript:void(0)">编辑</a>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
                      <div class="text-area" style="display:none;">
                        <textarea placeholder="请输入疫苗名称及厂家" max-input="50" id="vaccineName"></textarea>
                        <div class="text-no">0/50</div>
                      </div>
              </li>
              <li>
                <div class="con-step5">
                  <div class="left conli-left"><span>免疫信息-免疫程序描述</span></div>
                  <div class="left conli-right">
                    <a class="right-edit right" href="javascript:void(0)">编辑</a>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
                      <div class="text-area" style="display:none;">
                        <textarea placeholder="请输入免疫程序描述" max-input="100" id="immuneProcedure"></textarea>
                        <div class="text-no">0/100</div>
                      </div>
              </li>
              <li>
                <div class="con-step5">
                  <div class="left conli-left">用药方案、产品描述、效果</div>
                  <div class="left conli-right">
                    <a class="right-edit right" href="javascript:void(0)">编辑</a>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
                      <div class="text-area" style="display:none;">
                        <textarea placeholder="请输入用药方案、产品描述、效果" max-input="100" id="dosageSchedule"></textarea>
                        <div class="text-no">0/100</div>
                      </div>
              </li>
              <li>
                <div class="con-step5">
                  <div class="left conli-left">消毒方案及产品描述</div>
                  <div class="left conli-right">
                    <a class="right-edit right" href="javascript:void(0)">编辑</a>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
                      <div class="text-area" style="display:none;">
                        <textarea placeholder="请输入消毒方案及产品描述" max-input="100" id="disinfectingPlan"></textarea>
                        <div class="text-no">0/100</div>
                      </div>
              </li>
              <li>
                <div class="con-step5">
                  <div class="left conli-left">剖检病变</div>
                  <div class="left conli-right">
                    <a class="right-edit right" href="javascript:void(0)">编辑</a>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
                      <div class="text-area" style="display:none;">
                        <textarea placeholder="请输入剖检病变" max-input="100" id="dissectingLesion"></textarea>
                        <div class="text-no">0/100</div>
                      </div>
              </li>
              <li>
                <div class="con-step5">
                  <div class="left conli-left"><span>初步诊断</span></div>
                  <div class="left conli-right">
                    <a class="right-edit right" href="javascript:void(0)">编辑</a>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
                      <div class="text-area" style="display:none;">
                        <textarea placeholder="请输入初步诊断" max-input="100" id="preliminaryDiagnosis"></textarea>
                        <div class="text-no">0/100</div>
                      </div>
              </li>
              <li>
                <div class="con-step5">
                  <div class="left conli-left">灭鼠灭蝇措施</div>
                  <div class="left conli-right">
                    <a class="right-edit right" href="javascript:void(0)">编辑</a>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
                      <div class="text-area" style="display:none;">
                        <textarea placeholder="请输入灭鼠灭蝇措施" max-input="100" id="derattingPlan"></textarea>
                        <div class="text-no">0/100</div>
                      </div>
              </li>
            </ul>
          </div>
        <!--广告-->
        <div class="animal-exam-next" data-type="beasts">
          <a class="exam-next" href="javascript:void(0);">下一步</a>
        </div>
      </div>
      <div id="section6" class="sub-section" style="display:none;">
        <!---->
        <div class="animal-apply-con">
          <ul>
            <li>
              <div>
                <div class="left conli-left"><span>健康咨询顾问</span></div>
                <div class="left conli-right">
                  <!-- <input placeholder="请选择（单选）" type="" name=""> -->
                  <div class="div-input curr" id="consultant_phone">请选择（单选）</div>
                </div>
                <div class="clearf"></div>
              </div>
            </li>
            <li>
              <div>
                <div class="left conli-left"><span>销售审批人</span></div>
                <div class="left conli-right">
                  <!-- <input placeholder="请选择（单选）" type="" name=""> -->
                  <div class="div-input curr" id="sales_phone">请选择（单选）</div>
                </div>
                <div class="clearf"></div>
              </div>
            </li>
          </ul>
        </div>
        <!--广告-->
        <div class="animal-exam-next" data-type="beasts">
          <a class="complete-btn" href="javascript:void(0);">填写完成</a>
        </div>
      </div>
    </section>

  <!--  <div class="hzz_Capacity select_down beasts_sampling_item sampling_item" data-type="beasts_sampling_item" style="display:none;">
      <div class="hzz_j_xz">
        <p>请选择检测项目</p>
        <ul>
        </ul>
      </div>
    </div>  -->
    <script type="text/x-jsmart-tmpl" id="animalcurl_apply_tpl">
      {if $farmNames && $farmNames.length>0}
      <div class="hzz_Capacity select_down farmNames" data-type="farmNames" style="display:none;">
        <div class="hzz_j_xz">
          <p>请选择养殖场名称</p>
          <ul>
            {foreach $farmNames as $key=>$value}
            <li>{$value}</li>
            {/foreach}
          </ul>
        </div>
      </div>
      {/if}
    </script>
      <script type="text/x-jsmart-tmpl" id="animalcurl_apply_sales_tpl">
      {if $consultantPhoneNo && $consultantPhoneNo.length>0}
      <div class="hzz_Capacity select_down consultant_phone" data-type="consultant_phone" style="display:none;">
        <div class="hzz_j_xz">
          <p>请选择健康咨询顾问</p>
          <ul>
            {foreach $consultantPhoneNo as $key=>$value}
            <li phone-no="{$value.consultantPhoneNo}">{$value.consultantName}</li>
            {/foreach}
          </ul>
        </div>
      </div>
      {/if}

      {if $salesPhoneNo && $salesPhoneNo.length>0}
      <div class="hzz_Capacity select_down sales_phone" data-type="sales_phone" style="display:none;">
        <div class="hzz_j_xz">
          <p>请选择销售审批人</p>
          <ul>
            {foreach $salesPhoneNo as $key=>$value}
            <li phone-no="{$value.salesPhoneNo}">{$value.salseName}</li>
            {/foreach}
          </ul>
        </div>
      </div>
      {/if}
    </script>
    <script type="text/x-jsmart-tmpl" id="animalcurl_beasts_pig_tpl">
          <div class="con-sample" sample-index="{$index}">
            <!--添加curr为前面有删除按钮，向下箭头变成向上的样式-->
            <div class="sample-title">
              <div class="title-del left" style="display: none;"></div>
              <div class="left">猪场血清学调查<span>{$index}</span></div>
              <div class="clearf"></div>
            </div>
            <ul>
              <li>
                <div>
                  <div class="left conli-left"><span>编号</span></div>
                  <div class="left conli-right">
                    <input placeholder="请输入编号" ids="no" max-input="15" type="" name="">
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left">耳号</div>
                  <div class="left conli-right">
                    <input placeholder="请输入耳号" ids="earNo" max-input="30" type="" name="">
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left"><span>猪阶段</span></div>
                  <div class="left conli-right">
                    <!-- <input placeholder="请选择（单选）" ids="pigStage" type="" name=""> -->
                    <div class="div-input curr" ids="pigStage">请选择（单选）</div>
                  </div>
                  <div class="clearf"></div>
                </div>
                {if $pigStage && $pigStage.length>0}
                <div class="hzz_Capacity select_down pigStage" data-type="pigStage" s-index="{$index}" style="display:none;">
                  <div class="hzz_j_xz">
                    <p>请选择猪阶段</p>
                    <ul>
                      {foreach $pigStage as $key=>$value}
                      <li pig-stage="{$value}">{$value}</li>
                      {/foreach}
                    </ul>
                  </div>
                </div>
              {/if}
              </li>
<!--               <li>
                <div>
                  <div class="left conli-left">疫苗及用药</div>
                  <div class="left conli-right">
                    <input placeholder="请输入疫苗及用药" ids="vaccine" max-input="40" type="" name="">
                  </div>
                  <div class="clearf"></div>
                </div>
              </li> -->
              <li>
                <div>
                  <div class="left conli-left"><span>死产</span></div>
                  <div class="left conli-right" ids="stillbirth">
                    <!--添加curr为选中状态-->
                    <div class="left con-check">有</div>
                    <div class="left con-check curr">无</div>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left"><span>流产</span></div>
                  <div class="left conli-right" ids="abortion">
                    <!--添加curr为选中状态-->
                    <div class="left con-check">有</div>
                    <div class="left con-check curr">无</div>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left"><span>干尸</span></div>
                  <div class="left conli-right" ids="mummy">
                    <!--添加curr为选中状态-->
                    <div class="left con-check">有</div>
                    <div class="left con-check curr">无</div>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left"><span>空杯</span></div>
                  <div class="left conli-right" ids="nonpregnant">
                    <!--添加curr为选中状态-->
                    <div class="left con-check">有</div>
                    <div class="left con-check curr">无</div>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left"><span>高烧</span></div>
                  <div class="left conli-right" ids="highfever">
                    <!--添加curr为选中状态-->
                    <div class="left con-check">有</div>
                    <div class="left con-check curr">无</div>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left"><span>呼吸道疾病</span></div>
                  <div class="left conli-right" ids="respiratoryDisease">
                    <!--添加curr为选中状态-->
                    <div class="left con-check">有</div>
                    <div class="left con-check curr">无</div>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left"><span>神经症状</span></div>
                  <div class="left conli-right" ids="nervous">
                    <!--添加curr为选中状态-->
                    <div class="left con-check">有</div>
                    <div class="left con-check curr">无</div>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left"><span>刻板行为</span></div>
                  <div class="left conli-right" ids="mechanical">
                    <!--添加curr为选中状态-->
                    <div class="left con-check">有</div>
                    <div class="left con-check curr">无</div>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left conli-left"><span>其他症状</span></div>
                  <div class="left conli-right">
                    <a class="right-edit right" href="javascript:void(0)">编辑</a>
                    <div class="clearf"></div>
                  </div>
                  <div class="clearf"></div>
                </div>
                <div class="text-area" style="display:none;">
                  <textarea placeholder="请输入其他症状" ids="othersymptom" max-input="100"></textarea>
                  <div class="text-no">0/100</div>
                </div>
              </li>
            </ul>
          </div>
    </script>
  </div>
<!--   <div class="hzz_Capacity cancel_tips" style="display:none;">
    <div class="hzz_Capacity_conter">
      <span id="_xs" style="background:none"></span>
      <div class="hzz_ja_tp">
        <p>是否取消当前检测申请单？</p>
      </div>
      <a href="javascript:void(0);" class="confirm">是</a><a href="javascript:void(0);" class="hzz_right">否</a>
    </div>
  </div>
  <div class="hzz_Capacity delete_tips" style="display:none;">
    <div class="hzz_Capacity_conter">
      <span id="_xs" style="background:none"></span>
      <div class="hzz_ja_tp">
        <p>是否删除此样品信息？</p>
      </div>
      <a href="javascript:void(0);" class="confirm">确认</a><a href="javascript:void(0);" class="hzz_right">取消</a>
    </div>
  </div> -->
    <!-- 多选页面 -->
  <?php include "animalcurl_apply_choice.php" ?>
    <!-- 养殖场信息页面 -->
  <?php include "animalcurl_apply_choosefarm.php" ?>
  	<!-- 新建养殖场信息页面 -->
  <?php include "animalcurl_apply_addfarm.php" ?>
  	<!--城市列表页信息-->
  <?php include "animalcurl_apply_wherecity.php"?>
</body>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/animal_cure/animalcurl_apply.js"></script>