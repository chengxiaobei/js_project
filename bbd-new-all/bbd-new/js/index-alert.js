	window.onload = function(){
		var ret = '<div class="mask" id="biaodan">'+
    '<div class="form-body">'+
    '<div class="form-wrap">'+
      '<div class="form-input">'+
        '<form action="saveMessage.php" method="post">'+
          '<p>请留下您的需求</p>'+
          '<span>稍后会有相关领域咨询专家与您联系！</span>'+
          '<ul>'+
            '<li><input type="text" placeholder="称呼" id="username"/><div class="alert-formoneyz" style="display:none;" id="namets"><img src="images/alertwarn.png" />请输入姓名</div></li>'+
            '<li><input type="text" placeholder="公司" id="company"/></li>'+
            '<li><input type="text" placeholder="Email" id="email"/></li>'+
            '<li><input type="text" placeholder="电话" id="telephone"/></li>'+
            '<textarea id="need" placeholder="需求简述"></textarea><div class="alert-formtwoyz" style="display:none;" id="needts"><img src="images/alertwarn.png" / >请输入需求描述</div>'+
          '</ul>'+
        '</form>'+
        '<div class="form-contact" id="formsubmit"><a>与我联系</a></div>'+
        '<div class="form-footer">'+
          '<p>佰邦达不会将您在本网页留下的信息转交给第三方作为销售推广之用。<a id="yinsitiaokuan" href="javascript:void(0);">隐私条款</a>和<a id="anquan" href="javascript:void(0);">安全声明</a>。</p>'+
        '</div>'+
      '</div>'+
      '<div class="form-ad">'+
        '<span>佰邦达科技</span>'+
        '<p>致力于传统企业的互联网+转型,</p>'+'<p>行业移动应用及云服务专业提供商</p>'+
        '<h6>服务热线：022-65837100</h6>'+
      '</div>'+
      '<a class="close" id="close5"></a>'+
    '</div>'+
    '</div>'+
  '</div>'+
	'<div class="mask" id="yinsibody">'+
	 '<div class="form-body">'+
		'<div class="secret-wrap">'+
			'<a class="close" id="yinsiclose"></a>'+
			'<div class="secret-text">'+
				'<h1>隐私声明</h1>'+
				'<div class="secret-left">'+
				'<h2>我们收集哪些信息</h2>'+
				'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您能在匿名的状态下访问佰邦达科技网站并获取信息。在您主动留下个人信息以便得到所需咨询时，我们收集这些信息：称呼，公司名称，Email和电话号码，并征求您的确认。</p>'+
				'<h2>关于您的个人信息</h2>'+
				'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;佰邦达科技严格保护您个人信息的安全。我们使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄露。佰邦达科技不会未经您的允许将收集的信息与第三方共享，或者有充分理由相信必须这样做才能：(a) 满足法律或行政法规的明文规定；（b）符合佰邦达科技相关服务条款、软件许可使用协议的约定；(c)保护佰邦达科技的权利或财产，以及 (d) 在紧急情况下保护佰邦达科技员工、佰邦达科技产品或服务的用户或大众的个人安全。</p>'+
				'</div>'+
			'</div>'+
			'<div class="secret-pic">'+
				'<img src="images/alert05img.png" />'+
			'</div>'+
		'</div>'+
      '</div>'+
	 '</div>'+
	 '<div class="mask" id="wangzhanbody">'+
	'<div class="form-body">'+
		'<div class="map-wrap">'+
		'<div class="map-body">'+
			'<a  class="close" id="wangzhanclose"></a>'+
			'<h2>核心产品</h2>'+
			'<div class="map-list">'+
				'<ul>'+
					'<li><a href="html/hx-pro.html">> C2B移动云平台</a></li>'+
					'<li><a href="html/hx-pro.html?p=B2Bdiv">> B2B移动云平台</a></li>'+
					'<li><a href="html/hx-pro.html?p=DSJdiv">> 大数据平台</a></li>'+
					'<li><a href="html/hx-pro.html?p=JXCdiv">> 移动进销存平台</a></li>'+
					'<li><a href="html/hx-pro.html?p=QJDdiv">> 经销商旗舰店</a></li>'+
				'</ul>'+
			'</div>'+
			'<h2>商品案例</h2>'+
			'<div class="map-list">'+
				'<ul>'+
					'<li><a href="html/shangyeanli.html#sy-linefour">> 互联网+航空</a></li>'+
					'<li><a href="html/shangyeanli.html?p=yiliaoli">> 互联网+医疗</a></li>'+
					'<li><a href="html/shangyeanli.html?p=yangzyli">> 互联网+养殖业</a></li>'+
					'<li><a href="html/shangyeanli.html?p=meizli">> 互联网+美妆</a></li>'+
					'<li><a href="html/shangyeanli.html?p=bangli">> 互联网+办公</a></li>'+
					'<li><a href="html/shangyeanli.html?p=zhengfli">> 互联网+政府</a></li>'+
				'</ul>'+
			'</div>'+
			'<div class="map-left">'+
			'<h2>关于佰邦达</h2>'+
			'<div class="map-list">'+
				'<ul>'+	
					'<li><a href="html/bbd-one.html">> 公司文化</a></li>'+
					'<li><a href="html/bbd-one.html?p=fzlc">> 发展历程</a></li>'+
					'<li><a href="html/bbd-one.html?p=hydw">> 行业地位</a></li>'+
					'<li><a href="html/bbd-one.html?p=bfkh">> 部分客户</a></li>'+
				'</ul>'+
			'</div>'+
			'</div>'+
		  '</div>'+
		'</div>'+
      '</div>'+
	'</div>'+
	'<div class="mask" id="zhaopinbody">'+
      '<div class="form-body">'+
		'<div class="information-wrap">'+
			'<a class="close" id="zhaopinclose"></a>'+
			'<ul class="information-list">'+
				'<li>'+
					'<span>电商运营主管[天津]</span>'+
					'<p>经验1-3年/学历不限/全职</p>'+
				'</li>'+
				'<li>'+
					'<span>JAVA开发工程师[北京]</span>'+
					'<p>经验1-3年/学历不限/全职</p>'+
				'</li>'+
				'<li>'+
					'<span>高级UI设计师[天津]</span>'+
					'<p>经验1-3年/大专/全职</p>'+
				'</li>'+
				'<li>'+
					'<span>JAVA开发工程师[深圳]</span>'+
					'<p>经验1-3年/本科/全职</p>'+
				'</li>'+
				'<li>'+
					'<span>JAVA[天津]</span>'+
					'<p>经验1-3年/大专/全职</p>'+
				'</li>'+
			'</ul>'+
			'<ul class="information-list">'+
				'<li>'+
					'<span>产品经理[天津]</span>'+
					'<p>经验1-3年/学历不限/全职</p>'+
				'</li>'+
				'<li>'+
					'<span>会计[北京]</span>'+
					'<p>经验3-5年/本科/全职</p>'+
				'</li>'+
				'<li>'+
					'<span>HTML5[天津]</span>'+
					'<p>经验1-3年/本科/全职</p>'+
				'</li>'+
				'<li>'+
					'<span>测试工程师[北京]</span>'+
					'<p>经验1-3年/大专/全职</p>'+
				'</li>'+
			'</ul>'+
			'<p class="information-text">请将简历发送至公司邮箱：<a href="mailto:service@bbdtek.com">service@bbdtek.com</a></p><p class="information-text">或登录各大招聘网站联系面试</p>'+
		'</div>'+
      '</div>'+
	'</div>'+
 '<div class="mask" id="lianxibody">'+
          '<div class="form-body">'+
			'<div class="contact-wrap">'+
				'<ul class="left contact-list">'+
					'<li>'+
						'<img src="images/alerttelephone.png"/ style="display: inline-block;padding-left: 5px;">'+
						'<p style="padding-top:3px; margin-left: 25px;">&nbsp;&nbsp;022-65837100</p>'+
                        '<div class="clearf"></div>'+
					'</li>'+
					'<li>'+
						'<img src="images/alertsimple.png"/ style="margin:3px 0 0 5px;">'+
						'<p>service@bbdtek.com</p>'+
                        '<div class="clearf"></div>'+
					'</li>'+
					'<li>'+
						'<img src="images/alertlocation.png"/style="padding-left: 7px;">'+
                        '<div class="clearf"></div>'+
						'<ul>'+
							'<li>天津地址:天津经济技术开发区第二大街57号泰达MSD-G1座11层</li>'+
							'<li style="margin-left:68px;">天津市滨海新区中新天津生态城国家动漫园B1座2层</li>'+
							'<li>北京地址:北京市海淀区西直门外高粱桥斜街19号院6号楼110室</li>'+
							'<li>上海地址:上海市静安区延平路425号1号楼5层</li>'+
							'<li>苏州地址:苏州工业园区星湖街328号创意产业园10-402</li>'+
						'</ul>'+
                        '<div class="clearf"></div>'+
					'</li>'+
				'</ul>'+
                '<div class="left contact-list-dayin">'+
                  '<a onclick="javascript:window.print();" href="javascript:void(0);">'+
					'<img src="images/alertdayin.png"/></a>'+'<a class="dayin">打印本页</a>'+
                '</div>'+
                '<div class="clearf"></div>'+
				'<a class="close" id="lianxiclose"></a>'+
			  '</div>'+
            '</div>'+
		'</div>'
		if($('#oDialog')){
			$('#oDialog').append(ret);
		}
		if($('#zhaopin')){
			$('#zhaopin').click(function(){
			$('#zhaopinbody').attr("style","display:block;");	
			});
		}
		//关闭弹窗
		$('#zhaopinclose').click(function(){
			$('#zhaopinbody').attr("style","display:none;");				
		});

		if($('#lianxi')){
			$('#lianxi').click(function(){
			$('#lianxibody').attr("style","display:block;");					
			});
		}
		if($('#lianxi1')){
			$('#lianxi1').click(function(){
			$('#lianxibody').attr("style","display:block;");					
			});
		}
		if($('#lianxi2')){
			$('#lianxi2').click(function(){
			$('#lianxibody').attr("style","display:block;");					
			});
		}
		if($('#yvyue1')){
			$('#yvyue1').click(function(){
			$('#biaodan').attr("style","display:block;");					
			});
		}
		if($('#yvyue2')){
			$('#yvyue2').click(function(){
			$('#biaodan').attr("style","display:block;");					
			});
		}
		//关闭弹窗
		$('#close5').click(function(){
			$('#biaodan').attr("style","display:none;");				
		});

		if($('#wangzhan')){
			$('#wangzhan').click(function(){
				$('#wangzhanbody').attr("style","display:block;");
			});
		}
		//关闭弹窗
		$('#wangzhanclose').click(function(){
			$('#wangzhanbody').attr("style","display:none;");				
		});

		if($('#yinsi')){
			$('#yinsi').click(function(){
				$('#yinsibody').attr("style","display:block;");
			});
		}
		//关闭弹窗
		$('#yinsiclose').click(function(){
			$('#yinsibody').attr("style","display:none;");				
		});

		if($('#xiangxi')){
			$('#xiangxi').click(function(){
				$('#lianxibody').attr("style","display:block;")
			});
		}
		//关闭弹窗
		$('#lianxiclose').click(function(){
			$('#lianxibody').attr("style","display:none;");				
		});

		$("#yinsitiaokuan,#anquan").click(function(){
			$('#biaodan').css('display','none');
			$('#yinsibody').css('display','block');
		})
    $('#formsubmit').bind("click",function(){
      if($("#username").val()==""){
        $("#username").focus();
      // }else if ($("#company").val()=="") {
      //   $("#company").focus();
      // }else if($("#email").val()==""){
      //   $("#email").focus();
      // }else if($("#telephone").val()==""){
      //   $("#telephone").focus();
      }else if($("#need").val()==""){
        $("#need").focus();
      }
      else SendMessage();
      
    });
    $('#formsubmit').click(function(){
    	if($("#username").val()==""){
    		$("#namets").show();
    	}
    });
     $('#formsubmit').click(function(){
    	if($("#need").val()==""){
    		$("#needts").show();
    	}
    });
    var SendMessage = function(){
      var username = $("#username").val();
      var company = $("#company").val();
      var email = $("#email").val();
      var telephone = $("#telephone").val();
      var need = $("#need").val();
      var param={
        username:username,
        company:company,
        email:email,
        telephone:telephone,
        need:need
      }
      console.info(param);
      $.ajax({
        url:"data/saveMessage.php",
        data:param,
        type:"post",
        dataType:"json",
        success:function(data){
          if(data.code==1000){
            $("#username").val("");
            $("#company").val("");
            $("#email").val("");
            $("#telephone").val("");
            $("#need").val("");
            alert('提交成功');
      		$("#biaodan").hide();   
          }

        }
      })
      
    }
    
    var oYl = document.getElementById('yiliaoli');
	var oYz = document.getElementById('yangzyli');
	var oMz = document.getElementById('meizli');
	var oBg = document.getElementById('bangli');
	var oZf = document.getElementById('zhengfli');
	var oHk = document.getElementById('hangkli');
	var oImgyl = oYl.getElementsByTagName('img')[0];
	var oImgyz = oYz.getElementsByTagName('img')[0];
	var oImgmz = oMz.getElementsByTagName('img')[0];
	var oImgbg = oBg.getElementsByTagName('img')[0];
	var oImgzf = oZf.getElementsByTagName('img')[0];
	var oImghk = oHk.getElementsByTagName('img')[0];
	var oDivyl = oYl.getElementsByTagName('div')[0];
	var oDivyz = oYz.getElementsByTagName('div')[0];
	var oDivmz = oMz.getElementsByTagName('div')[0];
	var oDivbg = oBg.getElementsByTagName('div')[0];
	var oDivzf = oZf.getElementsByTagName('div')[0];
	var oDivhk = oHk.getElementsByTagName('div')[0];
	var oAyl = oYl.getElementsByTagName('a')[0];
	var oAyz = oYz.getElementsByTagName('a')[0];
	var oAmz = oMz.getElementsByTagName('a')[0];
	var oAbg = oBg.getElementsByTagName('a')[0];
	var oAzf = oZf.getElementsByTagName('a')[0];
	var oAhk = oHk.getElementsByTagName('a')[0];
	oDivyl.onmouseover = function(){
		oImgyl.src = '../images/sy-yiliao1.png'
		oImgyl.style.opacity = '0.5';
		oAyl.style.color = '#666';
	};
	oDivyl.onmouseout = function(){
		oImgyl.src = '../images/sy-yiliao.png'
		oImgyl.style.opacity = '1';
		oAyl.style.color = '#999';
	};
	
	oDivyz.onmouseover = function(){
		oImgyz.src = '../images/sy-zhu1.png'
		oImgyz.style.opacity = '0.5';
		oAyz.style.color = '#666'
	};
	oDivyz.onmouseout = function(){
		oImgyz.src = '../images/sy-zhu.png'
		oImgyz.style.opacity = '1';
		oAyz.style.color = '#999';
	};
	oDivmz.onmouseover = function(){
		oImgmz.src = '../images/sy-yanjing1.png'
		oImgmz.style.opacity = '0.5';
		oAmz.style.color = '#666';
	};
	oDivmz.onmouseout = function(){
		oImgmz.src = '../images/sy-yanjing.png'
		oImgmz.style.opacity = '1';
		oAmz.style.color = '#999';
	};
	oDivbg.onmouseover = function(){
		oImgbg.src = '../images/sy-bi1.png'
		oImgbg.style.opacity = '0.5';
		oAbg.style.color = '#666';
	};
	oDivbg.onmouseout = function(){
		oImgbg.src = '../images/sy-bi.png'
		oImgbg.style.opacity = '1';
		oAbg.style.color = '#999';
	};
	oDivhk.onmouseover = function(){
		oImghk.src = '../images/sy-feiji1.png'
		oImghk.style.opacity = '0.5';
		oAhk.style.color = '#666';
	};
	oDivhk.onmouseout = function(){
		oImghk.src = '../images/sy-feiji.png'
		oImghk.style.opacity = '1';
		oAhk.style.color = '#999';
	};
	oDivzf.onmouseover = function(){
		oImgzf.src = '../images/sy-qi1.png'
		oImgzf.style.opacity = '0.5';
		oAzf.style.color = '#666'
	};
	oDivzf.onmouseout = function(){
		oImgzf.src = '../images/sy-qi.png'
		oImgzf.style.opacity = '1';
		oAzf.style.color = '#999';
	};

};
