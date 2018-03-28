$(document).ready(function(){
	var ret ='<div class="alert1-input" style="display:none;z-index:1002;">'+
  '<form action="saveMessage.php" method="post">'+
    '<a href="javascript:void(0);" id="alert-close"></a>'+
    '<h2>请留下您的需求</h2>'+
    '<p>稍后会有相关领域咨询专家与您联系！</p>'+
    '<input placeholder="称呼" id="username"/>'+
    '<input placeholder="公司" id="company"/>'+
    '<input placeholder="Email" id="email"/>'+
    '<input placeholder="电话" id="telephone" maxlength=11/>'+
    '<textarea placeholder="需求简述" id="need"></textarea>'+
    '<h3>佰邦达不会将您在本页留下的信息转交给第三方作为销售推广之用</h3>'+
    '<div class="alert1-contact">'+
      '<a href="javascript:void(0);" id="formsubmit">与我联系</a>'+
    '</div>'+
  '</form>'+
  '</div>'+
  '<div class="alert2-body" style="display:none;z-index:1002;">'+
			'<a href="javascript:void(0);" id="close2"></a>'+
			'<ul>'+
				'<li>'+
					'<img src="../images/Telephonelocation.png"/>'+
					'<p>022-65837100</p>'+
				'</li>'+
				'<li>'+
					'<img src="../images/Simpleenvelope.png" />'+
					'<p>service@bbdtek.com</p>'+
				'</li>'+
				'<li>'+
					'<img src="../images/Locationpointer.png" />'+
					'<p class="app-alert-one"><span>天津地址:</span><span>天津经济技术开发区二大街57号泰达MSD-G1座11层</span></p>'+
                    '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天津市滨海新区中新天津生态城国家动漫园B1座2层</p>'+
					'<p>北京地址:北京市海淀区西直门外高粱桥斜街19号院6号楼110室</p>'+
					'<p>上海地址:上海市静安区延平路425号1号楼5层</p>'+
					'<p>苏州地址:苏州工业园区星湖街328号创意产业园10-402</p>'+
				'</li>'+
			'</ul>'+
		'</div>'
    var height = $(window).height();
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.body.clientHeight;
      // alert(document.body.clientHeight);
    console.info(height);
    // alert(height);
    if($('#oDialog')){
      $('#oDialog').append(ret);
    };
       
		$('#yuyue').click(function(){
        // $('.alert1-input').hide();
        // $('.alert1-input').css('top',0);
        $(".alert1-input").slideDown(100);
        $('#oDialog').siblings().hide();
    });
    
    $("#alert-close").click(function(e){
      $('#oDialog').siblings().show();
      // $(".alert1-input").animate({top: +(height*2)}, 100);
      $(".alert1-input").slideUp(100);
      window.scrollTo( clientWidth, clientHeight );
    });

    $('#huoqu').click(function(){
        // $('.alert2-body').hide();
        // $('.alert2-body').css('top',0);
        $(".alert2-body").slideDown(100);
    	  $('#oDialog').siblings().hide();
    });
    $('#close2').click(function(){
      $('#oDialog').siblings().show();
      // $(".alert1-input").animate({top: +(height*2)}, 100);
      $(".alert2-body").slideUp(100);
      window.scrollTo( clientWidth, clientHeight );
      // $('.alert2-body').animate({top: +(height*2)}, 100);
    });
    
    // $('.alert1-input').on('focus','#need',function(){
    //        alert(1);
         
    //   });

    $('#formsubmit').click(function(){
      if($('#username').val()==""){
        $('#username').focus();
      }
      else if($('#need').val()==""){
        $('#need').focus();
      }
      else SendMessage();
    });

      $('#formsubmit').click(function(){
        if($("#username").val()==""){
          // alert(1);
          $("#username").css('border','1px solid red');
          $("#username").attr('placeholder','请输入姓名');
        }
      });
      
     $('#formsubmit').click(function(){
      if($("#need").val()==""){
        $("#need").css('border','1px solid red');
        $("#need").attr('placeholder','请输入需求描述');
      }

      $('.alert1-input').on('keydown keyup blur','#username,#need',function(){
        $("#username").css('border','1px solid #9be3ff');
        $("#need").css('border','1px solid #9be3ff');
      });
      
      
       // $('#need').focus(function(){
       //  alert(1);
       // })


    });

    var SendMessage = function(){
      var username = $('#username').val();
      var company = $('#company').val();
      var email = $('#email').val();
      var telephone = $('#telephone').val();
      var need = $('#need').val();
      var param = {
        username:username,
        company:company,
        email:email,
        telephone:telephone,
        need:need
      }
      console.info(param);
      $.ajax({
        url:"../data/saveMessage.php",
        data:param,
        type:"post",
        dataType:"json",
        success:function(data){
          if(data.code==1000){
            $('#username').val('');
            $('#company').val('');
            $('#email').val('');
            $('#telephone').val('');
            $('#need').val('');
            // alert('提交成功');
            $('.alert1-input').animate({top: +height}, 100);
          }
        }
      })
    }

});