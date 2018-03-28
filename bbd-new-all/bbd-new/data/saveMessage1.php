<?php
function encode_json($str) {  
    return urldecode(json_encode(url_encode($str)));      
}  
function url_encode($str) {  
    if(is_array($str)) {  
        foreach($str as $key=>$value) {  
            $str[urlencode($key)] = url_encode($value);  
        }  
    } else {  
        $str = urlencode($str);  
    }  
      
    return $str;  
} 
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
	
	$content=",".encode_json($arr);
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

echo encode_json($result);
 


