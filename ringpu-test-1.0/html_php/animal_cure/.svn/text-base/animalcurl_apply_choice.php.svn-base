<div id="choiceWrap" class="wrap" style="display: none; background-color: rgb(255, 255, 255);">
  <script type="text/x-jsmart-tmpl" id="animalcurl_apply_choice_tpl">
  <!-- 只能定义一个class -->
  <div class="beasts_breeding" style="display: none;">
  <header>
    <a class="back-btn choice-back-btn" href="javascript:void(0);"></a>
    <h2>饲养品种</h2>
    <a class="reg-btn choice-reg-btn" href="javascript:void(0);">完成</a>
  </header>
  <section class="main-section">
    <div class="animal-treat-choose">
      <div class="choose-title">选择饲养品种</div>
      <div class="choose-li">
        <ul>
        {if $livestockBreeds && $livestockBreeds.length>0}
        {foreach $livestockBreeds as $key=>$value}
          <li>{$value}</li>
        {/foreach}
        {/if}
          <!--添加curr和类名为choose-curr的div为选中状态-->
<!--           <li class="curr">内三元<div class="choose-curr"></div></li>
          <li>外三元</li>
          <li>二元</li> -->
        </ul>
        <div class="clearf"></div>
      </div>
    </div>
  </section>
</div>
<div class="pigs_category" style="display: none;">
  <header>
    <a class="back-btn choice-back-btn" href="javascript:void(0);"></a>
    <h2>送检猪类别</h2>
    <a class="reg-btn choice-reg-btn" href="javascript:void(0);">完成</a>
  </header>
  <section class="main-section">
    <div class="animal-treat-choose">
      <div class="choose-title">选择送检猪类别</div>
      <div class="choose-li">
        <ul>
          {if $livestockGenders && $livestockGenders.length>0}
          {foreach $livestockGenders as $key=>$value}
            <li>{$value}</li>
          {/foreach}
          {/if}
        </ul>
        <div class="clearf"></div>
      </div>
    </div>
  </section>
</div>
<div class="birds_breeding" style="display: none;">
  <header>
    <a class="back-btn choice-back-btn" href="javascript:void(0);"></a>
    <h2>饲养品种</h2>
    <a class="reg-btn choice-reg-btn" href="javascript:void(0);">完成</a>
  </header>
  <section class="main-section">
    <div class="animal-treat-choose">
      <div class="choose-title">选择饲养品种</div>
      <div class="choose-li">
        <ul>
          {if $poultryBreeds && $poultryBreeds.length>0}
          {foreach $poultryBreeds as $key=>$value}
            <li>{$value}</li>
          {/foreach}
          {/if}
        </ul>
        <div class="clearf"></div>
      </div>
    </div>
  </section>
</div>
<!-- 检测项目 -->
<div class="sampling_detail" style="display: none;">
  <header>
    <a class="back-btn choice-back-btn" href="javascript:void(0);"></a>
    <h2>检测项目</h2>
    <a class="reg-btn choice-reg-btn" href="javascript:void(0);">完成</a>
  </header>
  <section class="main-section">
    <div class="animal-treat-choose">
      <div class="choose-title">选择检测项目</div>
      <div class="choose-li">
        <ul>
        </ul>
        <div class="clearf"></div>
      </div>
    </div>
  </section>
</div>
<!-- 检测部位及样品 -->
<div class="birds_type_names" style="display: none;">
  <header>
    <a class="back-btn choice-back-btn" href="javascript:void(0);"></a>
    <h2>检测部位或样品</h2>
    <a class="reg-btn choice-reg-btn" href="javascript:void(0);">完成</a>
  </header>
  <section class="main-section">
    <div class="animal-treat-choose">
      <div class="choose-title">选择检测部位或样品</div>
      <div class="choose-li">
        <ul>
        </ul>
        <div class="clearf"></div>
      </div>
    </div>
  </section>
</div>
</script>

</div>
<!-- 检测项目模板 -->
<script type="text/x-jsmart-tmpl" id="sampling_itmes_tpl">
            <div class="con-sample" sample-index="{$index}" sample-price="0">
              <!--添加curr为前面有删除按钮，向下箭头变成向上的样式-->
              <div class="sample-title">
                <div class="title-del left" style="display: none;"></div>
                <div class="left">检测样品<span>{$index}</span></div>
                <div class="clearf"></div>
              </div>
              <ul>
                <li>
                  <div>
                    <div class="left conli-left"><span>检测大类</span></div>
                    <div class="left conli-right">
                      <!-- <input placeholder="请选择（单选）" type="" name=""> -->
                      <div class="div-input curr" ids="birds_sampling">请选择（单选）</div>
                    </div>
                    <div class="clearf"></div>
                  </div>
                  {if $poultrySamplingSystemNo && $poultrySamplingSystemNo.length>0}
                  <div class="hzz_Capacity select_down birds_sampling" data-type="birds_sampling" s-index="{$index}" style="display:none;">
                    <div class="hzz_j_xz">
                      <p>请选择检测大类</p>
                      <ul>
                        {foreach $poultrySamplingSystemNo as $key=>$value}
                        <li animal-type="{$value.animalType}">{$value.typeName}</li>
                        {/foreach}
                      </ul>
                    </div>
                  </div>
                  {/if}
                 {if $livestockSamplingSystemNo && $livestockSamplingSystemNo.length>0}
                  <div class="hzz_Capacity select_down beasts_sampling" data-type="beasts_sampling" style="display:none;">
                    <div class="hzz_j_xz">
                      <p>请选择检测大类</p>
                      <ul>
                          {foreach $livestockSamplingSystemNo as $key=>$value}
                          <li animal-type="{$value.animalType}">{$value.typeName}</li>
                          {/foreach}
                      </ul>
                    </div>
                  </div>
                  {/if}
                </li>
                <li>
                  <div>
                    <div class="left conli-left"><span>检测项目</span></div>
                    <div class="left conli-right">
                      <!-- <input placeholder="请选择（多选）" type="" name=""> -->
                      <div class="div-input curr" ids="sampling_detail">请选择（可多选）</div>
                    </div>
                    <div class="clearf"></div>
                  </div>

                </li>
                <li>
                  <div>
                    <div class="left conli-left"><span>检测部位或样品</span></div>
                    <div class="left conli-right">
                      <!-- <input placeholder="请选择（多选）" type="" name=""> -->
                      <div class="div-input curr" ids="birds_type_names">请选择（可多选）</div>
                    </div>
                    <div class="clearf"></div>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="left conli-left">栋舍/场名</div>
                    <div class="left conli-right">
                      <input placeholder="请输入栋舍/场名" ids="farmName"  max-input="30" type="" name="">
                    </div>
                    <div class="clearf"></div>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="left conli-left">送检日龄</div>
                    <div class="left grey-input">
                      <input placeholder="请输入数字" ids="sendAge" max-input="8" type="" name=""><span>日龄</span>
                    </div>
                    <div class="clearf"></div>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="left conli-left">发病日龄</div>
                    <div class="left grey-input">
                      <input placeholder="请输入数字" ids="morbidityAge" max-input="8" type="" name=""><span>日龄</span>
                    </div>
                    <div class="clearf"></div>
                  </div>
                </li>
                <li>
                  <div>
                        <div class="left conli-left"><span>样品数量</span></div>
                    <div class="left grey-input">
                      <input placeholder="请输入数字" ids="sendSamplingCount" max-input="8" type="" name=""><!-- <span>只</span> -->
                    </div>
                    <div class="clearf"></div>
                  </div>
                </li>
              </ul>
            </div>
</script>




