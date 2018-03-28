<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

//post
if ( ! function_exists('signature'))
{
	function signature($param)
	{
		$param =json_encode($param);
		$key = 'FvNMhdkN5eTsgAfU2YHGJ2RfpKVi3omn';
 		$signature = base64_encode(base64_encode(hash_hmac("sha1", $param, $key, true)));
 		//echo $signature;
        return $signature;
	}
}
function getPostData($url,$params){

	$url = GLOBAL_PATH.$url ; 

	$params['shop_code'] = $_REQUEST['shop_code'];
	if(array_key_exists('user_code', $_REQUEST)){
		$params['user_code'] = $_REQUEST['user_code'] ;
	}
	else{
		$params['user_code'] = "" ;
	}
	$params['role_code'] = $_REQUEST['role_code'] ;
	$params['platform'] = $_REQUEST['platform'] ;
	$params['app_code'] = $_REQUEST['app_code'] ;
	$params['version_name'] = $_REQUEST['version_name'] ;
	if(!isset($params['user_channel'])){
		$params['user_channel'] = $_REQUEST['user_channel'] ;
	}	
	$params['language'] = $_REQUEST['language'] ;
	

	$post_params = array(
		'content'=>json_encode($params),
		'clientip'=>getIP(),
		'sign'=>signature($params)	
	) ;
	$user_agent = "User-agent:".$_SERVER['HTTP_USER_AGENT'] ;
    // echo $url.'?'.http_build_query($post_params) ;
	$ch = curl_init();
	curl_setopt($ch,CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array("Expect:",$user_agent));
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_params));
	$result=curl_exec($ch);
	if(curl_errno($ch))
	{
		return curl_error($ch);
		exit;
	}
	curl_close($ch);
	echo $result;
	// var_dump($result);
	return ;
}


// 文件转换为base64
function Img2base64($files){
	if(!$files || count($files) <=0){
		return null ;
	}
	$ret = array() ;
	// print_r($files) ;exit ;
	foreach ($files as $key => $file) {
		$tmp = array() ;
		$filepath = $file['tmp_name'] ;
		$filename = $file['name'] ;
		$exname = pathinfo($filename,PATHINFO_EXTENSION) ;
		$avatar = base64_encode(file_get_contents($filepath));

		$tmp['filename'] = $filename ;
		$tmp['exname'] = $exname ;
		$tmp['avatar'] = $avatar ;
		$ret[] = $tmp ;
	}
	return $ret ;
}


function getPostData_test($url,$params){

	$url = GLOBAL_PATH.$url ;

	$params['shop_code'] = $_REQUEST['shop_code'] ;
	if(array_key_exists('user_code', $_REQUEST)){
		$params['user_code'] = $_REQUEST['user_code'] ;
	}
	else{
		$params['user_code'] = "" ;
	}
	$params['role_code'] = $_REQUEST['role_code'] ;
	$params['version_name'] = $_REQUEST['version_name'] ;
	$params['platform'] = $_REQUEST['platform'] ;
	$params['app_code'] = $_REQUEST['app_code'] ;
	$params['user_channel'] = $_REQUEST['user_channel'] ;
	$params['language'] = $_REQUEST['language'] ;

	$post_params = array(
		'content'=>json_encode($params),
		'clientip'=>getIP(),
		'sign'=>signature($params)	
	) ;
	// $url = $url.'?'.http_build_query($post_params) ; 
	echo $url.'?'.http_build_query($post_params) ;
	exit ;
	$ch = curl_init();
	curl_setopt($ch,CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array("Expect:"));
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
	$result=curl_exec($ch);
	if(curl_errno($ch))
	{
		return curl_error($ch);
		exit;
	}
	curl_close($ch);
	return $result;
}


function getGetData($url,$params){

	$url = GLOBAL_PATH.$url ;

	$params['shop_code'] = $_REQUEST['shop_code'] ;
	if(array_key_exists('user_code', $_REQUEST)){
		$params['user_code'] = $_REQUEST['user_code'] ;
	}
	else{
		$params['user_code'] = "" ;
	}
	$params['role_code'] = $_REQUEST['role_code'] ;
	$params['version_name'] = $_REQUEST['version_name'] ;
	$params['user_channel'] = $_REQUEST['user_channel'] ;
	$params['language'] = $_REQUEST['language'] ;
	
	$post_params = array(
		'content'=>json_encode($params) 
	) ;
	$urlAndparams = $url.'?'.http_build_query($post_params) ; 

	$ch = curl_init();
	curl_setopt($ch,CURLOPT_URL,$urlAndparams);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	//curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	$result=curl_exec($ch);
	if(curl_errno($ch))
	{
		return curl_error($ch);
		exit;
	}
	curl_close($ch);
	return $result;
}

function getIP() { 
    if (getenv('HTTP_CLIENT_IP')) {
        $ip = getenv('HTTP_CLIENT_IP');
    } elseif (getenv('HTTP_X_FORWARDED_FOR')) {
        $ip = getenv('HTTP_X_FORWARDED_FOR');
    } elseif (getenv('HTTP_X_FORWARDED')) {
        $ip = getenv('HTTP_X_FORWARDED');
    } elseif (getenv('HTTP_FORWARDED_FOR')) {
        $ip = getenv('HTTP_FORWARDED_FOR');
    } elseif (getenv('HTTP_FORWARDED')) {
        $ip = getenv('HTTP_FORWARDED');
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
} 





