
// 公共配置信息
// var global_path = "http://"+window.location.hostname+":9116/ci/";
var global_path = "http://"+window.location.hostname+"/ringpu-test-1.0/ci/";
var global_path_old = "http://"+window.location.hostname+"/ringpu-test-1.0/ci/";
//正式文件夹
// var global_path = "http://"+window.location.hostname+"/ringpu/ci/";
// var global_path_old = "http://"+window.location.hostname+"/ringpu/ci/";
//测试文件夹
// var global_path = "https://"+window.location.hostname+"/devringpu/ci/";
// var global_path_old = "https://"+window.location.hostname+"/devringpu/ci/";
var hostname_path = "https://"+window.location.hostname;
//获取当前文件所在的完整目录
var pathnameStr = window.location.pathname,
    pathnameArr = pathnameStr.split("/",4);
    pathnameStr = pathnameArr.join("/");
var dir_path = (hostname_path + pathnameStr).replace(/\/\w+\.html$/,"");
dir_path = dir_path.replace(/\/$/,"");


var RP = {} ;


// 商家信息
RP.baseInfo = {
  // 个人中心--订单
  phonenum : '4008005696' ,
  // 个人中心--检测档案电话
  archive_phonenum : '4008005696' ,
  // 公众号appId
  appId : 'wxefcfed6d15fb76e4' ,
  // 获取openId回调地(必须是服务端地址)
  redirect_uri : global_path + 'getOpenIdCallback.php',
  // 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
  scope:'snsapi_base',
  // 微信跳转地址，实际使用时需要拼接上参数
  getopenIdURL : 'https://open.weixin.qq.com/connect/oauth2/authorize'
} ;




// 本地存储
RP.store = {
    // 存储本地数据
    // type : session ,local ,all 默认为all
    setItem : function(key,value,type){
        if(!key || !value){
            return ;
        }
        if(typeof value == "object"){
            value = JSON.stringify(value) ;
        }
        if(!type){
            localStorage.setItem(key,value) ;
            sessionStorage.setItem(key,value) ;
        }
        if(type == "session"){
            sessionStorage.setItem(key,value) ;
        }
        else if(type == "local"){
            localStorage.setItem(key,value) ;
        }
    } ,
    // type : session ,local ,all 默认为all
    getItem : function(key,type) {
        var ret ;
        if(!key){
            return "";
        }

        if(!type){
            ret = localStorage.getItem(key) || sessionStorage.getItem(key);
        }
        if(type == "local"){
            ret = localStorage.getItem(key) ;
        }
        else if(type == "session"){
            ret = sessionStorage.getItem(key) ;
        }
        if(ret){
            try{
              ret = JSON.parse(ret) ;
            }
            catch(e){
              return ret ;
            }
            
        }
        return ret ;
    },
    // type : session ,local ,all 默认为all
    removeItem : function(key,type){
        if(!key){
            return ;
        }
        if(!type){
            localStorage.removeItem(key) ;
            sessionStorage.removeItem(key) ;
        }
        if(type == "local"){
            localStorage.removeItem(key) ;
        }
        else if(type == "session"){
            sessionStorage.removeItem(key) ;
        }
    }
} ;

var jQFree = {
    closest : function(){
        var arg = arguments[0] ,
            selector = arguments[1] ,
            result = null;

        var parent = arg.parentNode ;
        var selectorNode = document.querySelector(selector) ;
        if(!selectorNode) return null ;

        if(parent.nodeName == 'HTML'){
          return null ;
        }
        if(parent.nodeName != 'HTML' && !parent.isEqualNode(selectorNode)){
            result = jQFree.closest(parent,selector) ;
        }
        else if(parent.isEqualNode(selectorNode)){
          result = parent ;
        }
        return result ;
    }
} ; 

// ajax
function commonAjax( url,data,success,error ){
    var user_info = RP.store.getItem('curr_user_info') ;
    // console.info(user_info) ;
    if(user_info && user_info['user_code']&&!data['user_code']){
        data['user_code'] = user_info['user_code'] ;
    }
    var param = {
        url: url,
        data: data,
        type: 'post',
        dataType: 'json',
        timeout : 30000 ,
        success: success
    };
    return $.ajax(param);
}


// 上传二进制信息
function commonAjax_file( url,data,success,error ){
    var user_info = RP.store.getItem('curr_user_info') ;
    var form = new FormData();
    if(user_info && user_info['user_code']){
        form.append('user_code',user_info['user_code']) ;
    }
    for(var k in data){
        form.append(k,data[k]) ;
    }
    var param = {
        url: url,
        data: form,
        type: 'post',
        dataType: 'json',
        timeout : 30000 ,
        processData: false,
        contentType: false,
        success: success
    };
    return $.ajax(param);
}

function getQueryString(name) {
    var search_str = decodeURIComponent(window.location.search);
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = search_str.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

// 判断是否登陆
function check_login_module(){
    var curr_user_info = RP.store.getItem('curr_user_info') ; 
    
    if(!curr_user_info){
        window.location.href = global_path + "../html_php/personal_center/login.php" ;
    }
    else{
        return true ;
    }
}

// 验证手机号是否为当前登录用户的手机号
function check_curr_user_phone(phonenum){
    var curr_user_info = RP.store.getItem('curr_user_info') ; 
    if(curr_user_info && curr_user_info['telephone'] 
        && curr_user_info['telephone'] == phonenum){
        return true ;
    }
    return false ;
}

// 获取异常界面
// type : "network" :  网络不好 ，"system" : 系统出错 ，"load" : 加载失败 "nodata" : "没有数据"
// operType : '1' : 数据加载  '2' : 提交请求   
function getErrorPage(type,operType){
    var ret = '' ;
    if(!type){
        return false ;
    }
    if(type == 'network'){//RP_ERROR_NETWORK

    }
    if(type == 'system'){//RP_ERROR_SYSTEM
        if(operType && operType == '2'){
            ret = '<div class="mask RP_ERROR_PAGE RP_ERROR_SYSTEM_DIALOG">'+
                  '  <div class="ycmask-wangluo">'+
                  '    <img src="../../public/images/zzxitong-img.png">'+
                  '    <p>系统繁忙，请稍候重试</p>'+
                  '    <div class="ycmask-bottom">'+
                  '      <div class="ycmask-backbtn left error_backButton"><p>返回</p></div>'+
                  '      <div class="ycmask-chongshimbtn right error_tryAgain"><p>重试</p></div>'+
                  '      <div class="clearf"></div>'+
                  '    </div>'+
                  '  </div>'+
                  '</div>' ;
        }
        else{
            ret = '  <section class="main-section RP_ERROR_PAGE RP_ERROR_SYSTEM">'+
                  '    <div class="yc-onemain">'+
                  '      <img src="../../public/images/xitong-img.png">'+
                  '      <p>系统繁忙，请稍候重试</p>'+
                  '      <!-- 按钮 -->'+
                  '      <a class="yc-csbtn error_tryAgain" href="javascript:void(0);">重试</a>'+
                  '    </div>'+
                  '  </section>' ;
        }
    }
    if(type == 'load'){//RP_ERROR_LOAD
        if(operType && operType == '2'){
            ret = '<div class="mask RP_ERROR_PAGE RP_ERROR_LOAD_DIALOG">'+
                  '  <div class="ycmask-wangluo">'+
                  '    <img src="../../public/images/zztijiao-img.png">'+
                  '    <p>页面加载失败，请稍候重试</p>'+
                  '    <div class="ycmask-bottom">'+
                  '      <div class="ycmask-backbtn left error_backButton"><p>返回</p></div>'+
                  '      <div class="ycmask-chongshimbtn right error_tryAgain"><p>重试</p></div>'+
                  '      <div class="clearf"></div>'+
                  '    </div>'+
                  '  </div>'+
                  '</div>' ;
        }
        else{
            ret = '<section class="main-section RP_ERROR_PAGE RP_ERROR_LOAD">'+
                  '  <div class="yc-onemain">'+
                  '    <img src="../../public/images/jiazai-img.png">'+
                  '    <p>页面加载失败，请稍候重试</p>'+
                  '    <!-- 按钮 -->'+
                  '    <a class="yc-csbtn error_tryAgain" href="javascript:void(0);">重试</a>'+
                  '  </div>'+
                  '</section>' ;
        }
    }
    if(type == 'nodata'){
        ret = '<section class="main-section RP_ERROR_PAGE RP_ERROR_NODATA">'+
              '    <div class="public-none">'+
              '      暂时没有需要的信息~'+
              '    </div>'+
              '</section>' ;
    }
    return ret ;
}

// $wrap:父容器
// type : "system" : 系统出错 ，"load" : 加载失败 "nodata" : "没有数据"
// operType : '1' : 数据加载  '2' : 提交请求 
function errorPageShow($wrap,type,operType){
    operType = operType || '' ;
    // console.info(operType) ;
    if(!$wrap || !type) return ;
    []['forEach'].call($wrap.childNodes,function(v){
        if(v.nodeType == 1 && v.nodeName !="HEADER"){
            v.style.display = "none" ;
            // console.info(v.nodeName) ;
        }
    }) ;
    var className = '' ;
    if(type == 'system'){
        if(operType && operType == '2'){
            className = 'RP_ERROR_SYSTEM_DIALOG' ;
        }
        else{
            className = "RP_ERROR_SYSTEM" ;
        }
    }
    if(type == 'load'){
        if(operType && operType == '2'){
            className = 'RP_ERROR_LOAD_DIALOG' ;
        }
        else{
            className = "RP_ERROR_LOAD" ;
        }
    }
    if(type == 'nodata'){
        className = 'RP_ERROR_NODATA' ;
    }
    if(!$wrap.querySelector('.'+className)){
        var errorPage_html = getErrorPage(type,operType) ;
        $wrap.insertAdjacentHTML('beforeend',errorPage_html) ;
    }
    console.info($wrap.querySelector('.'+className)) ;
    $wrap.querySelector('.'+className).style.display = "block" ;
    return ;
}
// errorPageShow(document.querySelector('div'),'nodata') ;

function errorPageHide($wrap){
    if(!$wrap) return ;
    var $error_page = $wrap.querySelectorAll('.RP_ERROR_PAGE') ;
    if($error_page && $error_page.length > 0){
        []['forEach'].call($error_page,function(v){
          if(v.nodeType == 1){
              v.style.display = "none" ;
          }
      }) ;
    }
}

// 加载页面
function getLoadHtml(){
    var ret = '  <!--加载模块-->'+
              '  <div class="loading-con RP_LOADING">'+
              '    <table class="loading-tb">'+
              '      <tbody>'+
              '        <tr>'+
              '          <td>'+
              '            <img src="../../public/images/loading.gif">'+
              '          </td>'+
              '        </tr>'+
              '      </tbody>'+
              '    </table>'+
              '  </div>' ;
    return ret ;
}

// $wrap : 父容器 
function loadingShow($wrap){
    if(!$wrap) return ;
    []['forEach'].call($wrap.childNodes,function(v){
        if(v.nodeType == 1){
            v.style.display = "none" ;
        }
    }) ;
    if(!$wrap.querySelector('.RP_LOADING')){
        var loading_html = getLoadHtml() ;
        $wrap.insertAdjacentHTML('beforeend',loading_html) ;
    }
    $wrap.querySelector('.RP_LOADING').style.display = "block" ;
    return ;
}

function loadingHide($wrap){
    $wrap.querySelector('.RP_LOADING').style.display = "none" ;
}
//加载页面
function getPointHtml(text,num,$wrap){
	var ret = '<div class="yzb-tc-body">'+
		'<div class="yzb-tc-img">'+
			'<img src="../../public/images/yzb.png"/>'+
			'<div><h4>+</h4><h2>'+num+'</h2></div>'+
		'</div>'+
	'<div class="yzb-tc-text">'+
		'<p>'+text+'</p>'+
		'<span>获得了'+num+'枚养殖币</span>'+
	'</div>';
	$wrap.insertAdjacentHTML('beforeend',ret) ;
	setTimeout(PointHide,2000);
}
function PointHide(){
    document.querySelector('.yzb-tc-body').remove() ;
}


// 异常页面事件绑定
(function(){
    document.querySelector('body') && document.querySelector('body').addEventListener('click',function(e){
        var target = e.target ;
        var parentNode_e = jQFree.closest(target,'.error_tryAgain') ;
        
        if(target.classList.contains('error_tryAgain') 
          || (parentNode_e && parentNode_e.classList.contains('error_tryAgain'))){
            window.location.href = window.location.href ;
        }
        else{
            var parentNode_b_a = jQFree.closest(target,'a.error_backButton') ;
            var parentNode_b_d = jQFree.closest(target,'div.error_backButton') ;
            if(target.classList.contains('error_backButton') 
              || (parentNode_b_a &&  parentNode_b_a.classList.contains('error_backButton'))
              || (parentNode_b_d &&  parentNode_b_d.classList.contains('error_backButton'))){
                window.history.go(-1) ;
            }
        }
    }) ;
})() ;
//获取指定长度的字符传
function getStrlength(obj,len) {
	var str = obj.val();
	if($.trim(str)!= ""){
	    var charLen = 0;
	    var hanzi_num = 0;
	    var zimu_num = 0;
	    for(var i=0;i<str.length;i++){ 
	        	if(str.charCodeAt(i)>255){  
	        		hanzi_num++ ;
	 	        }else{  
	 	        	zimu_num++ ;
	 	        }
	        	charLen = hanzi_num * 1 + (( zimu_num % 2 == 0 ) ? (zimu_num / 2 ) : (parseInt(zimu_num / 2) + 1));
	        	if(charLen>len){
	        		str=str.substring(0,i);
	        		obj.val(str);
		            break ;
	        	}
	       
	    }	   
	}else{
		charLen = 0;
	}
	console.log(charLen)
	 return charLen;
}
//获取指定长度的字符传
function getStrlen(obj,len) {
	var str = obj.val()+'';
	console.log(str)
    var hanzi_num = 0 ;
    var char_num = 0 ;
    var total_num = 0 ;
    var ret_num = 0 ;
    var ret_str = '' ;
    console.info(str.length) ;
    for(var i=0;i<str.length;i++){ 
        if(str.charCodeAt(i)>255){  
            hanzi_num++ ;
        }else{  
            char_num++ ;
        }
        total_num = hanzi_num * 2 + char_num ;
        console.info('hanzi_num=='+hanzi_num) ;
        console.info('char_num=='+char_num) ;
        ret_num = hanzi_num * 1 + (( char_num % 2 == 0 ) ? (char_num / 2 ) : (parseInt(char_num / 2) + 1));
        if(total_num<=100){
        	ret_str += str.charAt(i);
        }
    }  
    return {
    	str : str ,
    	ret_num : ret_num
    };
}
/*===========================   
         养殖社区
=============================*/
//获取字符串
function gainStrlen(str,len) {
    var hanzi_num = 0 ;
    var char_num = 0 ;
    var total_num = 0 ;
    var ret_num = 0 ;
    var ret_str = '' ;
     console.info(str.length) ;
    for(var i=0;i<str.length;i++){ 
        if(str.charCodeAt(i)>255){  
            hanzi_num++ ;
        }else{  
            char_num++ ;
        }
        total_num = hanzi_num * 2 + char_num ;

        ret_num = hanzi_num * 1 + (( char_num % 2 == 0 ) ? (char_num / 2 ) : (parseInt(char_num / 2) + 1));
        if(ret_num<=len){
            ret_str += str.charAt(i);
           }
           else{
            ret_num=len ;
            break ;
           }
    }  
       
    return {
        ret_str : ret_str ,
        ret_num : ret_num
    };

} ;  
    
    function loading_show($wrap){
        if(!$wrap) return ;
        if(!$wrap.querySelector('.RP_LOADING')){
            var loading_html = getLoadHtml() ;
            $wrap.insertAdjacentHTML('beforeend',loading_html) ;
        }
        $wrap.querySelector('.RP_LOADING').style.display = "block" ;
        return ;
    }

    //剪切照片
    var cutPhoto=function(image){
        var width=image.width ;
        var height=image.height ;
        var sx,sy ;
        var canvas=document.createElement("canvas") ;
        var ctx=canvas.getContext("2d") ;
        var data_url ;
            if(width/height>1){
              height=image.height ;
              width=height ;
              sx=(image.width-image.height)/2 ;
              sy=0 ;
            }
            else{
              width=image.width ;
              height=width ;
              sx=0 ;
              sy=(image.height-image.width)/2 ;
            }
            //alert(11)
           // console.info("height===>"+height) ;
            canvas.width=width ;
            canvas.height=height ;
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image,sx,sy,width,height,0,0,width,height) ;
            data_url=canvas.toDataURL("image/png",0.1) ;
            canvas.width = canvas.height = 0;
           // console.info("data_url====>"+data_url) ;
            return data_url ;
    } ;     
    
    var storeURL=function(data){
      var detail_content=data.data.data_list ;
      var extension ;
      var arrayLength ;
      var urlArray=[] ;

            for(var i=0 in detail_content){

               var picture_list=detail_content[i].picture_list ;
                 if(detail_content[i].picture_num>0){
                   for(var k=0 in picture_list){
                       urlArray.push(picture_list[k].common_pic_url)
                   }
                 } 

            }

           return urlArray ;   
    } ;
    function getImgList(list){
          var pageSize = winSize();
          var liWidth = pageSize['width']-2;
          var liHeight = pageSize['height'] ;
          var head=document.getElementsByTagName('head')[1] ;
          var fragment=document.createDocumentFragment() ;
              if(head) liHeight=liHeight-head.offsetHeight ;
              for(var i = 0 ; i < list.length ; i++){
                  (function(i){
                    var li=document.createElement("li") ;
                    var img=document.createElement("img") ;
                    var div=document.createElement("div") ;
                    var url=list[i]['h_picture_url'] ;
                    var height,width ;
                        li.setAttribute("class","swiper-slide swiper-hide") ;
                        div.setAttribute("class","ylpic-mainlb-div") ;
                        li.style.width=liWidth + "px" ;
                        li.style.height=liHeight + "px" ;
                        div.style.height=liHeight + "px" ;
                        div.style.width=liWidth + "px" ;
                        img.src=list[i]['h_picture_url'] ;
                        if(img.complete){
                          console.info(i+"===>"+img.height) ;
                            height=img.height ;
                            width=img.width ;
                            if(width/height>liWidth/liHeight){
                                img.style.width=liWidth +"px" ;
                                img.style.height=liWidth*height/width +"px" ;
                            } 
                            else{
                                img.style.height=liHeight +"px" ;
                                img.style.width=width*liHeight/height +"px" ;
                            }
                        }
                        else{
                          img.onload=function(){
                            height=img.height ;
                            width=img.width ;
                            if(width/height>liWidth/liHeight){
                                img.style.width=liWidth +"px" ;
                                img.style.height=liWidth*height/width +"px" ;
                            } 
                            else{
                                img.style.height=liHeight +"px" ;
                                img.style.width=width*liHeight/height +"px" ;
                            }
                          }
                        }
                        div.appendChild(img) ;
                        li.appendChild(div) ;
                        fragment.appendChild(li) ;
                        
                    })(i)
                  
              }

              return fragment ;
      } ;

      function getImageList(list){
        var pageSize = winSize();
        var liWidth = pageSize['width']-2;
        var liHeight = pageSize['height'] ;
        var head=document.getElementsByTagName('head')[1] ;
        if(head) liHeight=liHeight-head.offsetHeight ;
        var fragment=document.createDocumentFragment() ;
        
            
            for(var i = 0 ; i < list.length ; i++){
              (function(i){

                var createImg = function(){
                  var li=document.createElement("li") ;
                  var img=document.createElement("img") ;
                  var div=document.createElement("div") ;
                  //var url=list[i]['h_picture_url'] ;
                  var height,width ;
                      li.setAttribute("class","swiper-slide swiper-hide") ;
                      div.setAttribute("class","ylpic-mainlb-div") ;
                      li.style.width=liWidth + "px" ;
                      li.style.height=liHeight + "px" ;
                      div.style.height=liHeight + "px" ;
                      div.style.width=liWidth + "px" ;
                      div.appendChild(img) ;
                      li.appendChild(div) ;
                      fragment.appendChild(li) ;
                  return{
                    setSrc : function(src){
                       img.src = src ;
                       if(img.complete){
                      
                          height=img.height ;
                          console.info(i+"===>"+img.height) ;
                          width=img.width ;
                          if(width/height>liWidth/liHeight){
                              img.style.width=liWidth +"px" ;
                              img.style.height=liWidth*height/width +"px" ;
                          } 
                          else{
                              img.style.height=liHeight +"px" ;
                              img.style.width=width*liHeight/height +"px" ;
                          }
                      }
                      else{
                      img.onload=function(){
                          height=img.height ;
                          width=img.width ;
                          if(width/height>liWidth/liHeight){
                              img.style.width=liWidth +"px" ;
                              img.style.height=liWidth*height/width +"px" ;
                          } 
                          else{
                              img.style.height=liHeight +"px" ;
                              img.style.width=width*liHeight/height +"px" ;
                          }
                        }
                      }
                      /*div.appendChild(img) ;
                      li.appendChild(div) ;
                      fragment.appendChild(li) ;*/
                    } ,

                    setUrl : function(src){
                        img.src = src ;
                    }
                  }
              } ;
              var previewImg = function(){
                var image = createImg() ;
                var newImg = new Image () ;
                    newImg.onload = function(){
                      image.setSrc(this.src) ;
                    }
                    return{
                      setSrc : function(src){
                       
                        image.setUrl("./../../public/images/bigPicLoading.gif") ;
                        newImg.src = src ;
   
                      }
                    }
              }() ;
                 // var newImg = previewImg() ;
                  console.info(list[i]['h_picture_url']) ;
                      previewImg.setSrc(list[i]['h_picture_url']) ;

              })(i) ;
            }
            return fragment ;
      }
      function winSize(){
      //获取可视区域的大小

        var e = window,
            a = 'inner';

        if (!('innerWidth' in window )){
            a = 'client';
            e = document.documentElement || document.body;
        }

        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
        };

        /*=========================================
                          养殖社区  
        ==========================================*/
//日期的格式转化
Date.prototype.format = function(format){ 
    var o = { 
  	    "M+" : this.getMonth()+1, //month 
  	    "d+" : this.getDate(), //day 
  	    "h+" : this.getHours(), //hour 
  	    "m+" : this.getMinutes(), //minute 
  	    "s+" : this.getSeconds(), //second 
  	    "q+" : Math.floor((this.getMonth()+3)/3), //quarter 
  	    "S" : this.getMilliseconds() //millisecond
  	} 

  	if(/(y+)/.test(format)) { 
  	    format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  	} 
  	 
  	for(var k in o) { 
  	    if(new RegExp("("+ k +")").test(format)) { 
  	        format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
  	    } 
    } 
  	return format; 
}

// 图片预览
// file : 图片文件 callback ：回调函数
function readFile(file,callback){
    var reader = new FileReader();
    reader.onload = function(e){
      callback(reader.result) ;
    };
    reader.readAsDataURL(file);
}

//base64转换为二进制对象
function dataURLtoBlob(url) {
    var arr = url.split(','), 
      mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

// 获取指定长度的字符传
function getInStrByLength(str,len) {
    var ret = '' ,
        tmp_len = 0 ;

    for (var i=0; i<str.length; i++) { 
        if(tmp_len>=len){
            break ;
        }
        var c = str.charCodeAt(i); 
        var c_str = str.charAt(i); 
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
            tmp_len++ ; 
            ret += c_str ; 
        } 
        else {
            if((tmp_len + 2) <= len){
                // console.info(c_str) ;
                tmp_len += 2 ; 
                ret += c_str ; 
            }
        } 
    } 
    return {
        ret : ret ,
        length : tmp_len 
    };
}

function getInStrLength(str){
    var ret = '' ,
        tmp_len = 0 ;

    for (var i=0; i<str.length; i++) { 
        var c = str.charCodeAt(i); 
        var c_str = str.charAt(i); 
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
            tmp_len++ ; 
            ret += c_str ; 
        } 
        else {
            tmp_len += 2 ; 
        } 
    } 
    return tmp_len ;
}

function getStrByLength(str, len){
    var ret = '' ,
        tmp_len = 0 ;

    for (var i=0; i<str.length; i++) { 
        if(tmp_len>=len){
            break ;
        }
        tmp_len++ ;
        var c_str = str.charAt(i); 
        ret += c_str ; 
    } 
    return ret; 
}

/*===========================   
         动物诊疗
=============================*/

//判断养殖量不同动物类型下的规则
function setNumbersRule(temp,type){
  if(type == 'birds'){
      var d = temp.indexOf('.');
      // console.info(d);
      if(d<=0){//整数
        var ret = temp.replace(/[^\d]/g,'') ;
        if(temp.length>4){
          ret = ret.substring(0,4);
        }
        return ret;
      }else{//小数
        console.info(d);
        var ret = temp.replace(/[^\d\.]/g,'') ;
        if(temp.length - d - 1 > 1){
          ret = ret.substring(0,d+2);
        }
        return ret;
      }
  }else{
    var ret = temp.replace(/[^\d]/g,'') ;
    if(temp.length>6){
      ret = ret.substring(0,6);        
    }
    return ret;
  }

}

//v1判断发病率和死亡率0<=x<=100.00 %
function setFloatsRule(temp){
      var d = temp.indexOf('.');
      // console.info(d);
      if(Number(temp) == 100 || temp=='100.'){
        return 100;
      }else{
        if(d<=0){//整数
          var ret = temp.replace(/[^\d]/g,'') ;
          if(temp.length>2){
            ret = ret.substring(0,2);
          }
          return ret;
        }else{//小数
          var ret = temp.replace(/[^\d\.]/g,'') ;
          if(temp.length - d - 2 > 1){
            ret = ret.substring(0,d+3);
          }
          return ret;
        }
      }

}



