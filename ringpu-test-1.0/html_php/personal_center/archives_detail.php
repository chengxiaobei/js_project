<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>诊疗详情</title>
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style2.css">
<link type="text/css" rel="stylesheet" href="../../public/css/rp_style3.css">

</head>

<!-- 个人中心--检测档案--档案详情 -->
<body>
  <div class="wrap" id="wrap1">
    <script type="text/x-jsmart-tmpl" id="archives_detail_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>诊疗详情</h2>
        <a class="phone-btn" href="tel:{$baseInfo_phonenum}"></a>
      </header>
      <section class="main-section">
        <div class="dajc-audit-box center-mt">
          <!--审核中-->
          <div class="dajc-shz">
            <div class="dajc-con right-btn">
              {if $send.testing_status=='50002'}
                <div class="left">已取消</div>
              {elseif $send.testing_status=='50001'}
                <div class="left">待发货</div>
              {elseif $send.testing_status=='50003'}
                <div class="left">待收货</div>
              {elseif $send.testing_status=='50004'}
                <div class="left">待支付</div>
              {elseif $send.testing_status=='50005'}
                <div class="left">检测中</div>
              {elseif $send.testing_status=='50006'}//已去掉
                <div class="left">待写方案</div>
              {elseif $send.testing_status=='50007'}
                <div class="left">待评价</div>
              {else}
                <div class="left">已完成</div>
              {/if}
              {if $send.test_id}
              <div class="dajc-xuhao left">序号：{$send.test_id}</div>
              {/if}
              <div class="center-blue right archive_status_list" data-code="">查看详细</div>
              <div class="clearf"></div>
            </div>
          </div>
          {if $send.testing_status=='50005'||$send.testing_status=='50006'||$send.testing_status=='50007'||$send.testing_status=='50008'}
            <!--诊断结果-->
            <div class="dajc-shz">
              {if $conclusion && $conclusion.conclusion_option && $conclusion.conclusion_option.length!=0}
                <div class="dajc-con right-btn">
                  <div class="left">诊断结果</div>
                  <div class="center-blue right archive_diagnosis_result" data-code="">查看详细</div>
                  <div class="clearf"></div>
                </div>
              {elseif $conclusion}
                <div class="dajc-con">
                  <div class="left">诊断结果</div>
                  <div class="clearf"></div>
                </div>
              {else}
                <div class="dajc-con">
                  <div class="left">诊断结果</div>
                  <div class="center-blue right" data-code="">请耐心等待</div>
                  <div class="clearf"></div>
                </div>
              {/if}
              {if $send.testing_status=='50005' || $send.testing_status=='50006'||$send.testing_status=='50007'||$send.testing_status=='50008'}
                {if $conclusion.conclusion && $conclusion.conclusion.length!=0}
                  <ul>
                    <li class="jcxq-writing" style="padding:0;">
                      {$conclusion.conclusion}
                    <!--
                      <div>猪瘟（CSF）</div>
                      <div>
                        <p>1.1保育猪：ELISA抗体检测结果表明，送检保育猪CSF抗体平均阻断率为38.7，抗体阳性率为66.7%（4/6）,提示猪群CSF抗体值一般；可能与免疫日龄和采样时机有关，建议二免4-6周后送样检测；</p>
                        <p>1.2母猪：ELISA抗体检测结果表明，送检1-2胎母猪CSF抗体阳性率为100%（6/6），提示猪群CSF抗体值良好，未见异常；3-4和5-6胎母猪CSF抗体阳性率分别为83.3%（5/6）和80.0%（4/5），提示猪群CSF抗体值均一般，应加强免疫；</p>
                        <p>1.3公猪：ELISA抗体检测结果表明，送检公猪CSF抗体平均阻断率为65.0，抗体阳性率为50.0%（1/2），提示猪群CSF抗体值一般；</p>
                      </div>
                     -->
                    </li>
                  </ul>
                {/if}
              {/if}
            </div>
          {/if}
          {if $send.testing_status=='50007'||$send.testing_status=='50008'}
            <!--诊断方案-->
            <!--<div class="dajc-shz">
              <div class="dajc-con-nohover">
                <div>诊断方案</div>
              </div>
              <ul>
                <li>
                  <div>{$send.treatment}</div>
                </li>
              </ul>
            </div>-->
          {/if}
          <!--采样单编号：H20150312-->
          <div class="dajc-shz">
            <div class="dajc-con right-btn">
              <div class="left">采样单</div>
              <div class="center-blue right archive_sample_list" data-code="">查看详细</div>
              <div class="clearf"></div>
            </div>
            <ul>
              <!--样品信息-->
              <li>
                <div class="dajc-tlt left">样品信息</div>
                <div class="left dajc-rightcon dajc-rightcon-njjb">
                  {if $simple_num && $simple_num.length>0}
                    {foreach $simple_num as $key=>$value}
                      {$value.name}：
                      {$value.num}份<br/> 
                    {/foreach}
                  {/if}
                </div>
                <div class="clearf"></div>
              </li>
              <!--拟检疾病-->
              <li>
                <div class="dajc-tlt left">拟检疾病</div>
                <div class="left dajc-rightcon dajc-rightcon-njjb">
                  {if $simple && $simple.sample_loimias}
                    {foreach $simple.sample_loimias as $key=>$value}
                        <!--// {if $value.sample_name=="antibody"}
                        //     抗体检测
                        // {elseif $value.sample_name=="virus"}
                        //     病毒检测
                        // {elseif $value.sample_name=="separation"}
                        //     病毒分离
                        // {elseif $value.sample_name=="bacteria"}
                        //     细菌检测及药敏
                        // {elseif $value.sample_name=="gene"}
                        //     基因测序
                        // {elseif $value.sample_name=="pathological"}
                        //     病理切片
                        // {elseif $value.sample_name=="other"}
                        //     其他
                        // {else}
                        // {/if}
                        -->
                        {$value.sample_name}：
                        {$value.detail}
                        <br/>
                    {/foreach}
                  {/if}
                </div>
                <div class="clearf"></div>
              </li>
              <!--送检地点-->
              <li>
                <div class="dajc-tlt left">送检地点</div>
                <div class="left dajc-sjdd">{$send.station.station_name}</div>
                <a class="dajc-tanhao right inspection_place_info" href="javascript:void(0)"></a>
                <div class="clearf"></div>
              </li>
              <!--送检目的-->
              <!--<li>
                <div class="dajc-tlt left">送检目的</div>
                <div class="left dajc-rightcon dajc-rightcon-njjb">
                  {if $basic && $basic.options}
                    {foreach $basic.options as $key=>$value}
                      {if $value.option_name=='健康检测'}
                        健康检测
                      {elseif $value.option_name=='免疫效果评估'}
                        免疫效果评估
                      {elseif $value.option_name=='临床诊断'}
                        临床诊断
                      {elseif $value.option_name=='垂直评估'}
                        垂直评估
                      {elseif $value.option_name=='对比试验'}
                        对比试验
                      {else}
                        其他：{$value.option_name}
                      {/if}
                      {$value.option_name}
                      {if $key==($basic.options.length-1)}{else}、{/if}
                    {/foreach}
                  {/if}
                </div>
                <div class="clearf"></div>
              </li>-->

            </ul>
          </div>


          <!-- 送料、物流信息 -->
          {if $send.testing_status=='50003'||$send.testing_status=='50004'||$send.testing_status=='50005'||$send.testing_status=='50006'||$send.testing_status=='50007'||$send.testing_status=='50008'}
            <!--送料信息-->
            {if $send.send_type!='0'}
              <div class="dajc-shz center-below-mt">
                <div class="dajc-con-nohover">
                  <div class="left">送料信息</div>
                  <div class="clearf"></div>
                </div>
                <ul>
               <!-- send_type 0未填写 1企业送料 2个人送料 -->
                {if $send.send_type=='2'}
                <!-- delivery_type 0未填写 1快递 2车送 -->
                  {if $send.delivery_type=='1'}
                    <li>
                      <div class="jcxq-fin-slxx left">快递</div>
                      <div class="clearf"></div>
                    </li>
                    <li>
                        <div class="jcxq-fin-slxx left">快递单号：{$send.track_code}</div>
                        <div class="clearf"></div>
                    </li>
                  {else}
                    <li>
                      <div class="jcxq-fin-slxx left">车送</div>
                      <div class="clearf"></div>
                    </li>
                    <li>
                      <div class="jcxq-fin-slxx left">车牌号：{$send.vehicle_code}</div>
                      <div class="clearf"></div>
                    </li>
                    <li>
                      <div class="jcxq-fin-slxx left">联系电话：{$send.vehicle_tel}</div>
                      <div class="clearf"></div>
                    </li>
                  {/if}
                {else}
                  <li>
                    <div class="dajc-tlt left">企业取料</div>
                    <div class="clearf"></div>
                  </li>
                {/if}
                </ul>
              </div>
              <!--物流信息-->
              {if $send.delivery_type=='1'}
              <div class="dajc-shz center-below-mt" id="logistics_info">
                <div class="dajc-con right-btn">
                  <div class="left">物流信息</div>
                  <div class="center-blue right archive_logistics" data-code="">查看详细</div>
                  <div class="clearf"></div>
                </div>
                <ul>
                <!--显示最新物流状态-->
                  <li>
                    <div class="dajc-tlt left" style="width:100%;">{$logistics_newest_context}</div>
                    <div class="clearf"></div>
                  </li>
                </ul>
              </div>
              {/if}
            {/if}
          {else}
          {/if}
          
            <div class="dajc-shz center-below-mt">
              <div class="dajc-con-nohover">付费方式</div>
              <!--{if $send.payment_type=='1'}
                <ul>
                  <li>
                    <div class="left">检测体检卡</div>
                    <div class="right">卡号：{$send.verif_code||''}</div>
                    <div class="clearf"></div>
                  </li>
                </ul>
              {else}-->
                  <ul>
                    <li>
                      <div class="left">自费</div>
                      <div class="right">
                          {if $send.testing_status=='50004'}
                            <a class="center-agreement" href="javascript:void(0);" style="color:#000;">待付款：{$send.total_price}元</a>
                          {elseif $send.testing_status=='50005' || $send.testing_status=='50007' || $send.testing_status=='50008'}
                            <a class="center-agreement" href="javascript:void(0);" style="color:#000;">实付款：{$send.pay_amount}元</a>
                          {else}
                            <a class="center-agreement" href="javascript:void(0);">等待诊断中心报价</a>
                          {/if}
                      </div>
                      <div class="clearf"></div>
                    </li>
                    {if $send.testing_status=='50004'}
                    <li>
                      <div class="left">优惠券</div>
                      <div class="person-right-jtbtn right">
                      {if $coupon}
                      <a class="center-agreement" id="goto_coupon_list" href="javascript:void(0);" style="color:#000;"><span class="right">{$coupon.name}</span></a>
                      {else}
                        <a class="center-agreement" id="goto_coupon_list" href="javascript:void(0);" style="color:#000;"><span class="right"></span></a>                      
                      {/if}
                      </div>
                      <div class="clearf"></div>
                    </li>
                    {/if}
                    {if $send.testing_status=='50005'|| $send.testing_status=='50007'||$send.testing_status=='50008'}
                    <li>
                      <div class="left">优惠券</div>
                      <div class="right">
                      {if $send.coupons}{$send.coupons}
                      {else}
                      未选择
                      {/if}
                      </div>
                      <div class="clearf"></div>
                    </li>
                    {/if}
                  </ul>
              <!--{/if}-->
            </div>

        </div>
        {if $send.testing_status=='50001'}
          <!-- 待发货 -->
          {if $is_show=='2'}
          <div><a class="center-btn dajc-btn-fahuo animal_list_edit" href="javascript:void(0);">完善采样单</a></div>
          {/if}
          <div><a class="center-btn dajc-btn-fahuo archive_feed_go" href="javascript:void(0);">填写送料信息</a></div>
          <!--<div><a class="center-btn-grey dajc-btn-quxiao archive_cancel" href="javascript:void(0);">取消</a></div>-->
        {elseif $send.testing_status=='50003' && $is_show=='2'}
          <div><a class="center-btn dajc-btn-fahuo animal_list_edit" href="javascript:void(0);">完善采样单</a></div>
        {elseif $send.testing_status=='50004'}
          <div>
            <a id="go_pay" data-order_code="{$send.order_code||''}" class="center-btn jczq-btn-mb" href="javascript:void(0);">支付（{$send.pay_amount||0}元）</a>
          </div>
        {elseif $send.testing_status=='50007'}
          <div><a class="center-btn jcxq-btn-blue" data-code="" id="archive_evaluation" href="javascript:void(0);">评价</a></div>
          <!--{if $feedback_status==0}
          <div><a class="center-btn-grey jcxq-btn-grey archive_feedback" href="javascript:void(0);">诊断方案反馈</a></div>
          {/if}-->
        {elseif $send.testing_status=='50008' && $feedback_status==0}
           <!--<div><a class="center-btn-grey jczq-btn-mb archive_feedback" href="javascript:void(0);">诊断方案反馈</a></div>-->
        {else}
        {/if}
        <div id="animal_check" style="display:none">
          <!--遮罩-->
          <div class="mask"></div>
          <div class="animal-alert-sjplace">
            <div class="alert-sjplace">
              <p class="alert-sjplace-one">地址：</p>
              <p class="alert-sjplace-two">天津空港经济区东九道1号 动物疫病诊断研究服务中心 300308</p>
              <p class="alert-sjplace-three">电话：</p>
              <!--<p class="alert-sjplace-four">022-88958053/022-88958065</p>-->
              <p class="alert-sjplace-four"><a href="tel:4008005696" style="color:blue;text-decoration:underline;">4008005696</a></p>
              <!-- <p class="alert-sjplace-five">联系人：</p>
              <p class="alert-sjplace-six">沈元（禽） 电话 ：15930741082</p>
              <p class="alert-sjplace-seven">崔玉娟（禽） 电话 ：15022327613</p>
              <p class="alert-sjplace-eight">冯敬敬（畜） 电话 ：15822032195</p> -->
            </div>
           </div>
         </div>
      </section>
    </script>
  </div>





  <!-- 采样单详情 -->
  <div class="wrap" id="wrap2" style="display:none;">
    <script type="text/x-jsmart-tmpl" id="archives_sample_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>采样单详情</h2>
      </header>
      <section class="main-section">
        <!--基本信息-->
        <div class="cjdxq-part">
          <div class="cjdxq-tit">基本信息</div>
          <ul>
            <!--送检人-->
            <li>
              <div class="cjdxq-le left">送检人</div>
              <div class="cjdxq-ri left">{$basic.provider}</div>
              <div class="clearf"></div>
            </li>
            <!--联系电话-->
            <li>
              <div class="cjdxq-le left">联系电话</div>
              <div class="cjdxq-ri left">{$basic.telephone}</div>
              <div class="clearf"></div>
            </li>
            <!--送检单位-->
            <li>
              <div class="cjdxq-le left">送检单位</div>
              <div class="cjdxq-ri left">{$simple.company}</div>
              <div class="clearf"></div>
            </li>
             <!--通讯地址-->
            <li>
              <div class="cjdxq-le left">地区</div>
              <div class="cjdxq-ri left">{$simple.province}{$simple.city}{$simple.area||''}</div>
              <div class="clearf"></div>
            </li>
            <!--送检目的-->
            <!--<li>
              <div class="cjdxq-le left">送检目的</div>
              <div class="cjdxq-ri left">
                {if $basic && $basic.options}
                  {foreach $basic.options as $key=>$value}
                    {if $value.option_name=='health'}
                      健康检测
                    {elseif $value.option_name=='immune'}
                      免疫效果评估
                    {elseif $value.option_name=='clinical'}
                      临床诊断
                    {elseif $value.option_name=='vertical'}
                      垂直评估
                    {elseif $value.option_name=='comparison'}
                      对比试验
                    {else}
                      其他：{$value.option_name}
                    {/if}
                    {$value.option_name}
                    {if $key==($basic.options.length-1)}{else}、{/if}
                  {/foreach}
                {/if}
              </div>
              <div class="clearf"></div>
            </li>-->
            <!--送检地点-->
            <li>
              <div class="cjdxq-le left">送检地点</div>
              <div class="cjdxq-ri left">{$send.station.station_name}</div>
              <div class="clearf"></div>
            </li>
            <!--所属事业部-->
            {if $basic.section}
            <li>
              <div class="cjdxq-le left">所属事业部</div>
              <div class="cjdxq-ri left">{$basic.section}</div>
              <div class="clearf"></div>
            </li>
            {/if}
            <!--区域经理-->
            {if $basic.manager}
            <li>
              <div class="cjdxq-le left">区域经理</div>
              <div class="cjdxq-ri left">{$basic.manager}</div>
              <div class="clearf"></div>
            </li>
            {/if}
            <!--技术总监-->
            {if $basic.director}
            <li>
              <div class="cjdxq-le left">技术总监</div>
              <div class="cjdxq-ri left">{$basic.director}</div>
              <div class="clearf"></div>
            </li>
            {/if}
            <!--技术经理-->
            {if $basic.manage_username}
              {if $send.testing_status=='50007' || $send.testing_status=='50008'}
                <!--<li>
                  <div class="cjdxq-le left">技术经理</div>
                  <div class="cjdxq-ri left">{$basic.manage_username}</div>
                  <a class="cjdxq-phone right" href="tel:{$basic.manage_telephone}"></a>
                  <div class="clearf"></div>
                </li>-->
              {/if}
            {/if}
          </ul>
        </div>
        <!--送检样品信息-->
        <div class="cjdxq-part">
          <div class="cjdxq-tit">样品信息</div>
          <ul>
            <!--动物类型-->
            <li>
              <div class="cjdxq-le left">动物类型</div>
              {if $simple.animal_type=='1'}
              <div class="cjdxq-ri left">禽类（鸡、鸭）</div>
              {else $simple.animal_type=='2'}
              <div class="cjdxq-ri left">畜类（猪）</div>
              {/if}
              
              <div class="clearf"></div>
            </li>
            <!--样品信息-->
            <li>
              <div class="cjdxq-le left">样品信息</div>
              <div class="cjdxq-ri left">
                {if $simple_num && $simple_num.length>0}
                  {foreach $simple_num as $key=>$value}
                    <!--// {if $value.name=="serum"}
                    //     血清
                    // {elseif $value.name=="tissue"}
                    //     组织
                    // {elseif $value.name=="cordBlood"}
                    //     脐带血
                    // {elseif $value.name=="semen"}
                    //     精液
                    // {elseif $value.name=="milk"}
                    //     乳汁
                    // {else}
                    //     {$value.name}
                    // {/if}-->
                    {$value.name}：
                    {$value.num}份<br/>
                  {/foreach}
                {/if}
              </div>
              <div class="clearf"></div>
            </li>
            <!--拟检疾病-->
            <li>
              <div class="cjdxq-le left">拟检疾病</div>
              <div class="cjdxq-ri left">
                {if $simple && $simple.sample_loimias}
                  {foreach $simple.sample_loimias as $key=>$value}
                    <!--// {if $value.sample_name=="antibody"}
                    //     抗体检测：
                    // {elseif $value.sample_name=="virus"}
                    //     病毒检测：
                    // {elseif $value.sample_name=="separation"}
                    //     病毒分离：
                    // {elseif $value.sample_name=="bacteria"}
                    //     细菌检测及药敏：
                    // {elseif $value.sample_name=="gene"}
                    //     基因测序：
                    // {elseif $value.sample_name=="pathological"}
                    //     病例切片：
                    // {elseif $value.sample_name=="other"}
                    //     其他：
                    // {else}
                    // {/if}-->
                    {$value.sample_name}：
                    {$value.detail}
                    <br/>
                  {/foreach}
                {/if}
              </div>
              <div class="clearf"></div>
            </li>
            <!--发病情况-->
            <li>
              <div class="cjdxq-le left">发病情况</div>
              <div class="cjdxq-ri left">{$simple.symptoms}</div>
              <div class="clearf"></div>
            </li>
            <!--单场养殖量-->
             {if $simple.unit_quantity}
            <li>
              <div class="cjdxq-le left">单场养殖量</div>
              <div class="cjdxq-ri left">{$simple.unit_quantity}
              {if $simple.unit_quantity && $simple.animal_type=='1'}
              <span id="wanyu">万羽</span>
              {elseif $simple.unit_quantity && $simple.animal_type=='2'}
              <span id="tou">头</span>
              {else}
              {/if}
              </div>
              <div class="clearf"></div>
            </li>
            {/if}
            <!--全场养殖量-->
            <li>
              <div class="cjdxq-le left">全场养殖量</div>
              <div class="cjdxq-ri left">{$simple.quantity}
              {if $simple.quantity && $simple.animal_type=='1'}
              <span id="wanyu">万羽</span>
              {elseif $simple.quantity && $simple.animal_type=='2'}
              <span id="tou">头</span>
              {else}
              {/if}
              </div>
              <div class="clearf"></div>
            </li>
            <!--联系人-->
            <!--<li>
              <div class="cjdxq-le left">联系人</div>
              <div class="cjdxq-ri left">{$simple.user_name}</div>
              <div class="clearf"></div>
            </li>-->
            <!--电话-->
            <!--<li>
              <div class="cjdxq-le left">电话</div>
              <div class="cjdxq-ri left">{$simple.telephone}</div>
              <div class="clearf"></div>
            </li>-->
            <!--品种-->
            <li>
              <div class="cjdxq-le left">品种</div>
              <div class="cjdxq-ri left">{$simple.variety}</div>
              <div class="clearf"></div>
            </li>
            <!--品种详细-->
            <!--<li>
              <div class="cjdxq-le left">品种详细</div>
              <div class="cjdxq-ri left">817</div>
              <div class="clearf"></div>
            </li>-->
            
            <!--级别-->
            <li>
              <div class="cjdxq-le left">级别</div>
              <div class="cjdxq-ri left">{$simple.generation}</div>
              <div class="clearf"></div>
            </li>
           
            {if $simple.address}
            <!--<li>
              <div class="cjdxq-le left">详细地址</div>
              <div class="cjdxq-ri left">{$simple.address||''}</div>
              <div class="clearf"></div>
            </li>-->
            {/if}
            
            <!--开始发病日龄-->
            {if $simple.sick_age}
            <li>
              <div class="cjdxq-le left">开始发病日龄</div>
              <div class="cjdxq-ri left">{$simple.sick_age}<span>周</span></div>
              <div class="clearf"></div>
            </li>
            {/if}
            <!--送检日龄-->
            {if $simple.send_age}
            <li>
              <div class="cjdxq-le left">送检日龄</div>
              <div class="cjdxq-ri left">{$simple.send_age}<span>周</span></div>
              <div class="clearf"></div>
            </li>
            {/if}
            <!--发病率-->
            {if $simple.incidence}
            <li>
              <div class="cjdxq-le left">发病率</div>
              <div class="cjdxq-ri left">{$simple.incidence}%</div>
              <div class="clearf"></div>
            </li>
            {/if}
            <!--死亡率-->
            {if $simple.mortality}
            <li>
              <div class="cjdxq-le left">死亡率</div>
              <div class="cjdxq-ri left">{$simple.mortality}%</div>
              <div class="clearf"></div>
            </li>
            {/if}
            
          </ul>
        </div>
        <!--临床表现-->
        {if $basic.manifest}
        <div class="cjdxq-part">
          <div class="cjdxq-tit">临床表现</div>
          <ul>
            <li>
              <div class="">{$basic.manifest}</div>
            </li>
          </ul>
        </div>
        {/if}
        <!--剖检病变-->
        {if $basic.necropsy}
        <div class="cjdxq-part">
          <div class="cjdxq-tit">剖检病变</div>
          <ul>
            <li>
              <div class="">{$basic.necropsy}</div>
            </li>
          </ul>
        </div>
        {/if}
        <!--初步诊断-->
        {if $basic.tentative}
        <div class="cjdxq-part">
          <div class="cjdxq-tit">初步诊断</div>
          <ul>
            <li>
              <div class="">
                {$basic.tentative}
              </div>
            </li>
          </ul>
        </div>
        {/if}
        <!--用药方案与疗效-->
        {if $basic.therapy}
        <!--<div class="cjdxq-part">
          <div class="cjdxq-tit">用药方案与疗效</div>
          <ul>
            <li>
              <div class="">{$basic.therapy}</div>
            </li>
          </ul>
        </div>-->
        {/if}
        <!--免疫信息-->
        {if $basic.vaccine || $basic.immunity}
        <div class="cjdxq-part">
          <div class="cjdxq-tit">免疫信息</div>
          <ul>
            <!--疫苗信息-->
            {if $basic.vaccine}
            <li>
              <div class="">疫苗信息</div>
              <div class="">{$basic.vaccine || ''}</div>
            </li>
            {/if}
            <!--疫苗信息-->
            {if $basic.immunity}
            <li>
              <div class="">免疫情况</div>
              <div class="">{$basic.immunity || ''}</div>
            </li>
            {/if}
          </ul>
        </div>
        {/if}
        
        
        
        {if $send.classify=='1' && $basic.memo}
          <!--建议检查的项目-->
          <!--<div class="cjdxq-part">
            <div class="cjdxq-tit">建议检查的项目</div>
            <ul>
              <li>
                <div class="">
                  {$basic.memo}
                </div>
              </li>
            </ul>
          </div>-->
        {/if}
      </section>
    </script>
  </div>


  <!-- 诊断详情 -->
  <div class="wrap" id="wrap3" style="display:none;">
    <script type="text/x-jsmart-tmpl" id="archives_conclusion_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>诊断结果</h2>
      </header>
      <section class="main-section">
        <div class="zdjg-result center-mt">
          {if $conclusion}
              <ul>
                  {foreach $conclusion.conclusion_option as $k=>$v}
                      <li class="">
                        <!--向下的箭头是 zdjg-xia ，向上的箭头 zdjg-shang -->
                        <div class="zdjg-tit zdjg-shang result_item">{$v.title}</div>
                        <div class="zdjg-jieguo">
                          <div class="zdjg-para">
                              {$v.detail}
                          </div>

                          <!--
                            <div class="zdjg-para">
                              <span class="zdjg-font">2、体外药敏试验表明：</span>分离出的大肠杆菌对克利优+优力锋敏感，对恩诺沙星、环丙沙星（杆克能）以及硫酸粘菌素（克利优）中敏；分离出的沙门氏菌对头孢喹肟（倍诺林）敏感，对新霉素（新利宁）、硫酸粘菌素（克利优）以及克利优+优力锋中敏；分离出的B型副鸡嗜血杆菌对磺胺嘧啶（速可能）、\头孢喹肟（倍诺林）、恩诺沙星、环丙沙星（杆克能）、新霉素（新利宁）、硫酸粘菌素（克利优）、克利优+优力锋以及优力锋+亚易林敏感，建议使用上述药物进行预防和治疗。
                            </div>
                          -->
                          <!--下载-->
                          <div class="zdjg-look"> 
                            <div class="left">查看详情，请</div>
                            <div class="zdjg-down left"><a href="{$v.attachment}">下载PDF</a></div>
                            <div class="clearf"></div>
                          </div>
                        </div>
                      </li>
                  {/foreach}
              </ul>
          {/if}
        </div>
      </section>
    </script>
  </div>
  

  <!-- 状态信息 -->
  <div class="wrap" id="wrap4" style="display:none;">
    <script type="text/x-jsmart-tmpl" id="archives_status_tpl">
      <header>
        <a class="back-btn backButton" href="javascript:void(0);"></a>
        <h2>状态详情</h2>
      </header>
      <section class="main-section">
        <div class="jc-ztxq-box">
          {if $time_list && $time_list.length >0}
              {foreach $time_list as $k=>$v}
              {if $v.title != '方案完成时间'}
                {if $v.title == '检测完成时间'}
                  <p>完成时间：{$v.time}</p>
                {else}
                  <p>{$v.title}：{$v.time}</p>
                {/if}
              {/if}
                  {if $v.title == "收货时间" && $simple_num && $simple_num.length >0}
                    {foreach $simple_num as $key=>$value}
                      {if $value.received == true}
                        <p>收货备注: {$value.name}：{$value.memo}</p>
                      {/if}
                    {/foreach}
                  {/if}
              {/foreach}
          {/if}
          
        </div>
      </section>
    </script>
  </div>

 

</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js" 
    data-main="../../public/js/modules/personal_center/archives_detail.js"></script>




