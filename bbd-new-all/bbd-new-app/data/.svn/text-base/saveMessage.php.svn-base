<?php

date_default_timezone_set('PRC');
try{
	$file = fopen("message.log","a");
	$arr=array(
		"称呼"=>$_POST["username"],
		"公司"=>$_POST["company"],
		"Email"=>$_POST["email"],
		"电话"=>$_POST["telephone"],
		"需求简述"=>$_POST["need"],
		"发送时间"=>date("Y-m-d H:i:s",time())
	);
    //print_r($arr);
    $str = '';
	foreach($arr as $k=>$v) {
	 $str .= iconv('UTF-8', 'GB2312', $k) . ':' . iconv('UTF-8', 'GB2312', $v) . ',';
	}
	$str=substr($str,0,-1);
 
    //echo $str;
	$content=$str."\r\n"; 
	//echo $content;
	fwrite($file,$content);
	fclose($file);

	$result=array(
		"code"=>1000
		
	);

}catch(Exception $e){

	$result=array(
		"code"=>1001
	);
}

echo json_encode($result);
// function encode_json($str) {  
//     return urldecode(json_encode(url_encode($str)));      
// }  
  
// /** 
//  *  
//  */  
// function url_encode($str) {  
//     if(is_array($str)) {  
//         foreach($str as $key=>$value) {  
//             $str[urlencode($key)] = url_encode($value);  
//         }  
//     } else {  
//         $str = urlencode($str);  
//     }  
      
//     return $str;  
// }  
// function encode_json($str){  
//     $code = json_encode($str);  
//     return preg_replace("#\\\u([0-9a-f]{4})#ie", "iconv('UCS-2', 'gb2312', pack('H4', '\\1'))", $code);  
// }  
 

