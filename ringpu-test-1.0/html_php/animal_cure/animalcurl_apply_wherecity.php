<div class="wrap" id="whereCity" style="display:none;">
			<header>
				<a class="back-btn farm-back-btn" href="javascript:void(0);"></a>
				<h2>选择城市</h2>
			</header>
			<section class="main-section">
				<!--城市列表-->
				<div id="provinceList">
					<script type="text/x-jsmart-tmpl" id="animalcurl_apply_city_tpl">
					<div class="animal-apply-con">
							<ul>
							{if $provinces && $provinces.length>0}
							 {foreach $provinces as $key=>$value}
							   <li city-no={$value.index} city-name={$value.p}>
									<div>
										<div class="left conli-left"><span style="background:none">{$value.p}</span></div>
										<div class="clearf"></div>
									</div>
								</li>
							 {/foreach}
							 {/if}
						  </ul>
					</div>
					</script>
				</div>
			</section>
	</div>
	<div class="wrap" id="whereCityx" style="display:none;">
			<header>
				<a class="back-btn farm-back-btn" href="javascript:void(0);"></a>
				<h2>选择城市</h2>
			</header>
			<section class="main-section">
				<!--城市列表-->
				<div id="cityList">
					<div class="animal-apply-con">
							<ul>
							   
						    </ul>
					</div>
				</div>
			</section>
	</div>
	<div class="wrap" id="salesWrap" style="display:none;">
			<header>
				<a class="back-btn farm-back-btn" href="javascript:void(0);"></a>
				<h2>选择销售</h2>
			</header>
			<section class="main-section">
				<!--城市列表-->
				<div id="salesList">
					<script type="text/x-jsmart-tmpl" id="animalcurl_apply_sallist_tpl">
					<div class="animal-apply-con">
							<ul>
							{if $sales && $sales.length>0}
							 {foreach $sales as $key=>$value}
							   <li realName={$value.realName} sales-id={$value.id} userPhone={$value.userPhone}>
									<div>
										<div class="left conli-left"><span style="background:none">{$value.realName}</span></div>
										<div class="clearf"></div>
									</div>
								</li>
							 {/foreach}
							 {/if}
						  </ul>
					</div>
					</script>
				</div>
			</section>
	</div>