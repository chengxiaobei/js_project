<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="../css/style.css" rel="stylesheet"/>
    <link href="../css/public.css" rel="stylesheet" />
    <script type="text/javascript" src="../js/jquery-1.11.0.min.js"></script>
    <script type="text/javascript">
      window.onload=function(){
        $("#close").click(function(){
          window.history.go(-1);
        })

      }
    </script>
  </head>
  <body>
  <div class="mask">
    <div class="form-body">
    <div class="form-wrap">
      <div class="form-input">
        <form action="saveMessage.php" method="post">
          <p>请留下您的需求</p>
          <span>稍后会有相关领域咨询与专家与您联系！</span>
          <ul>
            <li><input type="text" placeholder="称呼" id="username"/><p><a></a>请输入姓名</p></li>
            <li><input type="text" placeholder="公司" id="company"/></li>
            <li><input type="text" placeholder="Email" id="email"/></li>
            <li><input type="text" placeholder="电话" id="telephone"/></li>
            <textarea id="need">需求简述</textarea><p><a></a>请输入需求描述</p>
          </ul>
        </form>
        <div class="form-contact"><a href="#" id="formsubmit">与我联系</a></div>
        <div class="form-footer">
          <p>佰邦达不会将您在本网页留下的信息交转给第三方作为销售推广只用。<a href="#">隐私条款</a>和<a href="#">安全声明</a>。</p>
        </div>
      </div>
      <div class="form-ad">
        <span>佰邦达科技</span>
        <p>专业的互联网+转型升级解决方案提供商协助您的企业无痛升级</p>
        <p>服务热线：400-8888-8888</p>
      </div>
      <a href="#" id="close"></a>
    </div>
    </div>
  </div>
  <script type="text/javascript">
    $('#formsubmit').bind("click",function(){
      if($("#username").val()==""){
        $("#username").focus();
      }else if ($("#company").val()=="") {
        $("#company").focus();
      }else if($("#email").val()==""){
        $("#email").focus();
      }else if($("#telephone").val()==""){
        $("#telephone").focus();
      }else if($("#need").val()==""){
        $("#need").focus();
      }
      else SendMessage();
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
        url:"../data/saveMessage.php",
        data:param,
        type:"post",
        dataType:"json",
        success:function(){
          if(data.code==1000){
            $("#username").val("");
            $("#company").val("");
            $("#email").val("");
            $("#telephone").val("");
            $("#need").val("");   
          }

        }
      })
      // window.history.go(-1);
    }

  </script>
  </body>
</html>
