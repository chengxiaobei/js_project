<?php
	require_once "./wx_api/jssdk.php";
	require_once "wx_config.php";

	$url = $_REQUEST['url'] ;

	$appId = $wx_config['appId'] ;
	$appKey = $wx_config['appKey'] ;
	$jssdk = new JSSDK($appId, $appKey,$url);
	$signPackage = $jssdk->GetSignPackage();
	echo json_encode($signPackage) ;