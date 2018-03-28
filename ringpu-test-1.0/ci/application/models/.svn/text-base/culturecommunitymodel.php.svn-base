<?php  defined('BASEPATH') OR exit('No direct script access allowed');
class CultureCommunitymodel extends CI_Model {
	public function __construct(){
		parent::__construct() ;
		$this->load->helper("http") ;
	}

//养殖社区  获取用户昵称、头像
    public function getPhoto(){
    	$ret=null ;
    	try{
           
           $url="ask/user" ;
           $params=Array() ;
           $ret = getPostData($url,$params) ;
           //$ret=$ret=getPostData_test($url,$params) ;
    	}catch(Exception $e){
           
           echo $e ;
           $ret=false ;
    	}
    	return $ret ;
    }

//获取养殖社区动态页
    public function getStatus(){
    	$ret=null ;
    	try{
    		$url="ask/communitelistpage" ;
        $type=$this->input->post("up_or_down") ;
        if(!$type){
          $params=array(
                   "page_size"=>$this->input->post("page_size")
          ) ;
        }
        elseif($type=="down"){
          $params=array(
                  "page_size"=>$this->input->post("page_size") ,
                  "up_or_down"=>$type ,
                  "ask_code"=>$this->input->post("ask_code")
            ) ;
        }
        elseif($type=="up"){
          $params=array(
                  "page_size"=>$this->input->post("page_size") ,
                  "up_or_down"=>$type,
                  "ask_code"=>$this->input->post("ask_code")
            ) ;
        }
    		
    		$ret=getPostData($url,$params) ;
    		//$ret = getPostData_test($url,$params) ;
    	}catch(Exception $e){
    		echo $e ;
    		$ret = false ;
    	}
    	return $ret ;
    }

    //删除动态
    public function deleteStatus(){
      $ret=null ;
      try{
        $url="ask/deleteask" ;
        $ask_code=$this->input->post("ask_code") ;
        $params=array("ask_code"=>$ask_code) ;
        $ret=getPostData($url,$params) ;
      }catch(Exception $e){
        echo $e ;
        $ret=false ;
      }
      return $ret ;
    }
    //处理照片
    public function detachPhoto(){
      $ret=array() ;
      $url=$this->input->post("url") ;
      foreach ($url as $key => $value) {
        $size = getimagesize($value); 
        $new_url = "data:{$size['mime']};base64," . base64_encode(file_get_contents($value)) ;
        $ret[]=$new_url ;
      }
      return json_encode($ret) ;
    }

    //点赞标识
    public function getZan(){
    	$ret=null ;
    	try{
    		$url="ask/dovote" ;
    		$params=array(
                   "comment_code"=>$this->input->post("comment_code"),
                   "do_vote"=>$this->input->post("do_vote")
    			) ;
    		$ret = getPostData($url,$params) ;
        //$ret= getPostData_test($url,$params) ;
    	}catch(Exception $e){
    		echo $e ;
    		$ret = false ;
    	}
    	return $ret ;
    }


    //个人主页动态
    public function getPageStatus(){
      $ret=null ;
     // print_r($_REQUEST) ;exit ;
      try{
        $url="ask/personalpage" ;
        $type=$this->input->post("up_or_down") ;
        if($type){
          $params=array(
                  "user_code"=>$this->input->post("user_code") ,
                  "ask_code"=>$this->input->post("ask_code") ,
                  "up_or_down"=>$type ,
                  "page_size"=>$this->input->post("page_size")
            ) ;
        }else{
          $params=array(
               "user_code"=>$this->input->post("user_code") ,
               "page_size"=>$this->input->post("page_size")
          ) ;
        }
        
        $ret = getPostData($url,$params) ;
       // $ret=getPostData_test($url,$params) ;
      }catch(Exception $e){
        echo $e ;
        $ret=false ;
      }
      return $ret ;
    }

    //动态详情页
    public function getDetailStatus(){
     // print_r($_REQUEST) ;exit ;
      $ret=null ;
      try{
        $url="ask/commentdetail" ;
        $type=$this->input->post("up_or_down") ;
        if($type){
            $params=array(
            "ask_code"=>$this->input->post("ask_code") ,
           // "user_code"=>$this->input->post("user_code"),
            "up_or_down"=>$type ,
            "comment_code"=>$this->input->post("comment_code")
          ) ;
        }
        else{
            $params=array(
            "ask_code"=>$this->input->post("ask_code") ,
           // "user_code"=>$this->input->post("user_code")
          ) ;
        }
      
        $ret=getPostData($url,$params) ;
      //  $ret=getPostData_test($url,$params) ;
      }catch(Exception $e){
        echo $e ;
        $ret=false ;
      }
      return $ret ;
    }

    //动态详情页获取评论内容
    public function getComment(){
      $ret=null ;
      try{
        $url="ask/makecommentforask" ;
        $params=array(
            "comment_content"=>$this->input->post("comment_content") ,
            "ask_code"   =>$this->input->post("ask_code")
          ) ;
        $ret=getPostData($url,$params) ;
       // $ret=getPostData_test($url,$params) ;
      }catch(Exception $e){
        echo $e ;
        $ret=false ;
      }
      return $ret ;
    }

    //动态详情页发布评论
    public function getAnswerComment(){
      $ret=null ;
      try{
        $url="ask/makecommentforcomment" ;
        $params=array(
             "to_user_code"=>$this->input->post("to_user_code") ,
             "comment_content"=>$this->input->post("comment_content") ,
             "ask_code"=>$this->input->post("ask_code") ,
             "to_comment_code"=>$this->input->post("to_comment_code")
          ) ;
        $ret=getPostData($url,$params) ;
      }catch(Exception $e){
        echo $e ;
        $ret=false ;
      }
      return $ret ;
    }

    //上传图片
    public function sendDynamicsStatus(){
      try{
        $url="ask/makecomment" ;
       // print_r($_REQUEST) ;exit ;
        $params=array(
             "ask_content"=>$this->input->post("ask_content") ,
             "format"  => $this->input->post("format") ,
             "image_list" => $this->input->post("image_list"),
             "type" => $this->input->post("type")
          ) ;
        if($params["format"]=="T") unset($params["image_list"]) ;
        $ret=getPostData($url,$params) ;
        //$ret= getPostData_test($url,$params) ;
      }catch(Exception $e){
        echo $e ;
        $ret=false ;
      }
      return $ret ;
    }

        //上传图片,加了禁言
    public function sendDynamicsStatusNew(){
      try{
        $url="ask/makecommentnew" ;
       // print_r($_REQUEST) ;exit ;
        $params=array(
             "ask_content"=>$this->input->post("ask_content") ,
             "format"  => $this->input->post("format") ,
             "image_list" => $this->input->post("image_list"),
             "type" => $this->input->post("type")
          ) ;
        if($params["format"]=="T") unset($params["image_list"]) ;
        $ret=getPostData($url,$params) ;
        //$ret= getPostData_test($url,$params) ;
      }catch(Exception $e){
        echo $e ;
        $ret=false ;
      }
      return $ret ;
    }


    //消息详情
    public function getDetailNews(){
      $ret=null ;
     // print_r($_REQUEST)  ;exit ;
      try{
        $url="ask/noticedetail" ;
        $params=array(
           "page_no"=>$this->input->post("page_no")  ,
           "page_size"=>$this->input->post("page_size")
        ) ;
        $ret=getPostData($url,$params) ;
        //$ret=getPostData_test($url,$params) ;
      }catch(Exception $e){
        echo $e ;
        $ret=false ;
      }
      return $ret ;

    }

    //获取消息提醒
    public function getNewsTip(){
      $ret=null ;
      try{
        $url="ask/messagenotice" ;
        $params=array() ;
        $ret=getPostData($url,$params) ;
        //$ret=getPostData_test($url,$params) ;
      }catch(Exception $e){
        echo $e ;
        $ret=false ;
      }
      return $ret ;
    }

    //update all notice
    public function updateNotice(){
      $ret = null ;
      try{
        $url = "ask/updateallnotice" ;
        $params = array() ;
        $ret = getPostData($url , $params) ;
      }catch(Exception $e){
        echo $e ;
        $ret = false ;
      }
      return $ret ;
    }

    //发布举报
    public function sendAccusation(){
      $ret=null ;
      try{
        $url="ask/doreport" ;
        $params=array(
                "comment_code"=>$this->input->post("comment_code"),
                "reports"=>$this->input->post("reports")
          );
        $ret=getPostData($url,$params) ;
       // $ret=getPostData_test($url,$params) ;
      }catch(Exception $e){
        echo $e ;
        $ret=false ;
      }
      return $ret ;
    }

    public function getImageData(){
      $arrayUrl = $this->input->post("url") ;
      $user_agent = "User-agent:".$_SERVER['HTTP_USER_AGENT'] ;
      $ret = array() ;
      $mh = curl_multi_init() ;                        
      foreach ( $arrayUrl as $k => $url ){
         $conn[$k] = curl_init($url) ;

         curl_setopt($conn[$k], CURLOPT_TIMEOUT, 30) ;
         curl_setopt($conn[$k], CURLOPT_SSL_VERIFYPEER, FALSE);
         curl_setopt($conn[$k], CURLOPT_SSL_VERIFYHOST, FALSE);
         curl_setopt($conn[$k], CURLOPT_HTTPHEADER, array("Expect:",$user_agent));
         curl_setopt($conn[$k], CURLOPT_MAXREDIRS, 7);//HTTp定向级别 ，7最高
         curl_setopt($conn[$k], CURLOPT_HEADER, false);//这里不要header，加块效率
         curl_setopt($conn[$k], CURLOPT_FOLLOWLOCATION, 1); // 302 redirect
         curl_setopt($conn[$k], CURLOPT_RETURNTRANSFER,1);//要求结果为字符串且输出到屏幕上         
         curl_setopt($conn[$k], CURLOPT_HTTPGET, true);

         curl_multi_add_handle ($mh,$conn[$k]);
      }
       do {
              $mrc = curl_multi_exec($mh,$active);//当无数据，active=true
          } while ($mrc == CURLM_CALL_MULTI_PERFORM);//当正在接受数据时
          while ($active and $mrc == CURLM_OK) {//当无数据时或请求暂停时，active=true
              if (curl_multi_select($mh) != -1) {
                  do {
                      $mrc = curl_multi_exec($mh, $active);
                  } while ($mrc == CURLM_CALL_MULTI_PERFORM);
              }
          }
        
        foreach ($arrayUrl as $k => $url) {
            if(!curl_errno($conn[$k])){
             $data[$k]=curl_multi_getcontent($conn[$k]);//数据转换为array
           //  $header[$k]=curl_getinfo($conn[$k]);//返回http头信息
             curl_close($conn[$k]);//关闭语柄
             curl_multi_remove_handle($mh  , $conn[$k]);   //释放资源

             $size = getimagesize($url); 

             $new_url = "data:{$size['mime']};base64," . base64_encode($data[$k]) ;
             $ret[]=$new_url ;             

            }else{
             unset($k,$url);
            }
          }

          curl_multi_close($mh);
          
          return json_encode($ret);

   }
    
    //获取养殖社区背景图片
    public function getCommunityBg(){
    	$ret=null ;
    	try{
    		$url="homepage/adv" ;
    		$params=array(
                "type"=>$this->input->post("type")
    			) ;
    		$ret = getPostData($url,$params) ;
        //$ret= getPostDatac($url,$params) ;
    	}catch(Exception $e){
    		echo $e ;
    		$ret = false ;
    	}
    	return $ret ;
    }





}

?>