	<div class="wrap" id="addfarmWrap" style="display:none;">
			<header>
				<a class="back-btn farm-back-btn" href="javascript:void(0);"></a>
				<h2>养殖场信息</h2>
			</header>
			<section class="main-section">
				<!--新建养殖厂信息-->
				<div id="addfarmSection" style="padding-top:20px;">
					<!---->
					<div class="animal-apply-con">
						<ul>
							<li>
								<div>
									<div class="left conli-left"><span>养殖场名称</span></div>
									<div class="left conli-right">
										<input placeholder="请输入" type="text" id="newFarmName">
									</div>
									<div class="clearf"></div>
								</div>
							</li>
							<li>
								<div>
									<div class="left conli-left"><span>养殖场联系人</span></div>
									<div class="left conli-right">
										<input placeholder="请输入"  type="text" id="newContact">
									</div>
									<div class="clearf"></div>
								</div>
							</li>
							<li>
								<div>
									<div class="left conli-left"><span>联系方式</span></div>
									<div class="left conli-right">
										<input placeholder="请输入" max-input="11" id="newContactPhone" max-input="11" type="tel" name="" maxlength="11">
									</div>
									<div class="clearf"></div>
								</div>
							</li>
							<li>
								<div>
									<div class="left conli-left">邮箱</div>
									<div class="left conli-right">
										<input placeholder="请输入"  type="email" id="newEmail">
									</div>
									<div class="clearf"></div>
								</div>
							</li>
							<li>
								<div>
									<div class="left conli-left"><span>所在省市</span></div>
									<div class="left conli-right">
										<input placeholder="请选择地区" id="hzz-incity" type="text" name="">
										<input style="display:none;" id="newProvince" />
										<input style="display:none;" id="newCity" />
									</div>
									<div class="clearf"></div>
								</div>
							</li>
							<li>
								<div>
									<div class="left conli-left"><span>养殖场地址</span></div>
									<div class="left conli-right">
										<input placeholder="请输入" type="text" id="newFarmAddress">
									</div>
									<div class="clearf"></div>
								</div>
							</li>
							<li>
								<div>
									<div class="left conli-left"><span>销售</span></div>
									<div class="left conli-right">
										<input id = "hzz-sales" placeholder="请选择销售" type="text" id="newSaleName">
										<input style="display:none;" id="newSalePhone" />
										<input style="display:none;" id="newSaleId" />
									</div>
									<div class="clearf"></div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="addfarm-btn" style="width:80%;margin-left:10%;height:44px;background:#1fa8ec;color:#fff;text-align: center;line-height:44px;border-radius: 5px;font-size:18px;">确定</div>
			</section>
	</div>
