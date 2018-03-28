<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<title></title>
<link type="text/css" rel="stylesheet" href="../../public/css/main_rp.css">

</head>
<body>
  <div class="wrap" id="wrap1">
  	<script type="text/x-jsmart-tmpl" id="report_detail_pl">
    <header>
      <a class="back-btn backButton" href=""></a>
      <h2>检测报告文件</h2>
    </header>
    <section class="main-section">
   
   	{foreach $data as $key=>$value}
      <div class="center-report-file">
        <div class="file-each">
          <div class="each-title" lj="{$value.fileUrl}">检测报告名称:{$value.fileName}</div>
        </div>
      </div>
     {/foreach}

    </section>
    </script>
  </div>
</body>
</html>
<script type="text/javascript" src="../../public/js/common/require.min.js"
	data-main="../../public/js/modules/personal_center/query_report_detail.js"></script>
