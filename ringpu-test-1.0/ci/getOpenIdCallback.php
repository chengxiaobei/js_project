<?php 
	require_once "./wx_config.php" ;

	$appId = $wx_config['appId'] ;
	$appKey = $wx_config['appKey'] ;
	$grant_type = $wx_config['grant_type'] ;
	$code = $_GET["code"]; 
	$openId = '' ;

	if($code){
		$getToken_url = $wx_config['getToken_url'].'?appid='.$appId.'&secret='.$appKey.'&code='.$code.'&grant_type='.$grant_type;
		$ch = curl_init();
		curl_setopt($ch,CURLOPT_URL,$getToken_url); 
		curl_setopt($ch,CURLOPT_HEADER,0); 
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 ); 
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10); 
		$res = curl_exec($ch); 
		curl_close($ch); 
		$json_obj = json_decode($res,true); 
		$openId = $json_obj['openid'] ;
	}
	
	header('location:../html_php/shopping_store/pay_options.php?openId='.$openId );