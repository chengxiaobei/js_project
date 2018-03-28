/*******
 * create by zm 20160908
 * 中秋摇月饼活动
 *******/
//全局变量

// 中秋摇月饼--显示养殖币和月饼
var userlotterytimes = global_path + 'index.php/activitycenter/userlotterytimes';
// 中秋摇月饼--增加抽奖机会
var addlotterytimes = global_path + 'index.php/activitycenter/addlotterytimes';
// 中秋摇月饼--摇奖中月饼
var midautumnlucky = global_path + 'index.php/activitycenter/midautumnlucky';
// 中秋摇月饼--月饼Top20
var toplist = global_path + 'index.php/activitycenter/toplist';
// 微信分享
var urlshareinit = global_path + "wx_share.php";
var user_code = getQueryString('code')||(RP.store.getItem('curr_user_info')?RP.store.getItem('curr_user_info').user_code:"");
var activity_from = getQueryString('activity_from');
var hasshakeflag = "false";//请求接口锁

var date=new Date();
var enddate="2016/9/18 23:59:59";//活动结束时间
var activity_code='A16090001';
var	params = {
    user_code:user_code,
    activity_code:activity_code
} ;
//页面渲染
(function(){
    console.log(user_code);
    if(new Date(enddate).getTime()<=date.getTime()){
        $('#tips-mask .nochance-text').html('<p>活动已结束</p>');
        $('#tips-mask').show();//活动已结束
        hasshakeflag = "true";
    }else{
        if(activity_from == 'share'){//分享页面
            $('.weixin-tc').show();//显示下载页
            $('#tips-mask .nochance-text').html('<p>请点击上方下载养殖宝APP参与游戏</p>');
            $('#tips-mask').show();
            $('body').bind("touchmove",function(event){ event.preventDefault(); });
            hasshakeflag = "true";
        }else if(activity_from == 'app'){//app
            if(!user_code){//usercode为空
                $('#tips-mask .nochance-text').html('<p>您未登录</p><p>请到"个人中心"登录后参加活动</p>');
                $('#tips-mask').show();
                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                hasshakeflag = "true";
            }else{
                commonAjax(userlotterytimes, params, function (data) {
                    if (data.status && data.status == '2000' && data.data) {
                        $('.score').text(data.data.total_score + '枚');
                        $('.amount').text(data.data.prize_amount + '枚');
                    }
                });
            }
        }else{//公共号
            check_login_module() ;//是否登录检测
            commonAjax(userlotterytimes, params, function (data) {
                if (data.status && data.status == '2000' && data.data) {
                    $('.score').text(data.data.total_score + '枚');
                    $('.amount').text(data.data.prize_amount + '枚');
                }
            });
        }
    }
    window.onload = function() {
        var myShakeEvent = new Shake({
            threshold : 7
        });
        myShakeEvent.start();

        window.addEventListener('shake', shakeEventDidOccur, false);
        //shakeEventDidOccur();
        function shakeEventDidOccur() {
            if (hasshakeflag == "false") {
                commonAjax(midautumnlucky,params,function(data){
                    if(data){
                        if(data.status == "2000"){
                            if(activity_from == 'app'){
                                $('#app-prize-mask').show();
                                $('#app-prize-mask .money-tree-num').text(data.data.amount);
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                                hasshakeflag = "true";
                            }else{
                                $('#prize-mask').show();
                                $('#prize-mask .money-tree-num').text(data.data.amount);
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                                hasshakeflag = "true";
                            }

                        }else if(data.status == "80005"){//积分和抽奖机会都不足
                            if(activity_from == 'app'){
                                $('#tips-mask .nochance-text').html('<p>今天的机会用光啦！</p><p>关注［养殖宝］微信公众号，分享得机会，快去关注吧！</p>');
                                $('#tips-mask').show();
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                                hasshakeflag = "true";
                            }else{
                                $('#nochance-mask .nochance-text').html('<p>今天的机会用光啦！</p><p>分享给朋友增加摇奖机会！</p>');
                                $('#nochance-mask').show();
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                                hasshakeflag = "true";
                            }
                        }else if(data.status == "80009"){//积分充足，抽奖次数不足
                            if(activity_from == 'app'){
                                $('#tips-mask .nochance-text').html('<p>今天的机会用光啦！</p><p>关注［养殖宝］微信公众号，分享得机会，快去关注吧！</p>');
                                $('#tips-mask').show();
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                                hasshakeflag = "true";
                            }else{
                                $('#nochance-mask .nochance-text').html('<p>今天的机会用光啦！</p><p>分享给朋友增加摇奖机会！</p>');
                                $('#nochance-mask').show();
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                                hasshakeflag = "true";
                            }

                        }else if(data.status == "80010"){//积分不足，抽奖次数充足
                            if(activity_from == 'app'){
                                $('#tips-mask .nochance-text').html('<p>养殖币不足！</p><p>快去做任务得养殖币吧！</p>');
                                $('#tips-mask').show();
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                                hasshakeflag = "true";
                            }else{
                                $('#nochance-mask .nochance-text').html('<p>养殖币不足！</p><p>快下载App去做任务得养殖币吧！</p>');
                                $('#nochance-mask').show();
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                                hasshakeflag = "true";
                            }
                        }
                    }

                });
            }

        }
    }

})();
//监听事件
(function(){
    //tap切换
    $('.wrap').on('click','.money-tree-bottomnotice ul li',function(e){
        $(this).siblings('li').removeClass('tab-checked');
        $(this).addClass('tab-checked');
        var index = $('.money-tree-bottomnotice ul li').index($(this));
        $('.tree-bottomnotice-list').hide();
        $('.tree-bottomnotice-list').eq(index).show();
        if($('.bottomnotice-listniu').css('display') != 'none'){
            commonAjax(toplist, params, function (data) {
                if (data.status && data.status == '2000') {
                    console.info(data.data);
                    var rankList = data.data.rankList;
                    var userRank = data.data.userRank
                    var html = '<h3>牛人TOP榜：</h3>';
                    for (n = 0; n < rankList.length; n++) {
                        var p = '<p><span>'+rankList[n].ranking+'</span><span>'+rankList[n].nickname+'</span><span>月饼总数'+rankList[n].amount+'</span></p>';
                        html += p;
                    }
                    if(userRank){
                        var u = '<p><span>'+userRank.ranking+'</span><span>'+userRank.nickname+'</span><span>月饼总数'+userRank.amount+'</span></p>';
                        html += u;
                    }else{
                        html += '<h3>我的排名：</h3><p>暂无排名</p>';
                    }
                    $('.bottomnotice-listniu').html(html);
                }
                // <h3>牛人TOP榜：</h3>
            });
        }
    });
    //提示弹窗关闭按钮
    $('.mask').on('click','.close-btn',function(){
        if(activity_from == 'share'){//分享页面不可以摇奖
            hasshakeflag = "true";
        }else{
            hasshakeflag = "false";
        }
        $('.mask').hide();
    });
    //炫耀一下
    $('#prize-mask').on('click','.share',function () {
        hasshakeflag = "false";
        $('#prize-mask').hide();
        $('#showdownload').show();
    });
    //再玩一次
    $('#prize-mask').on('click','.again',function () {
        hasshakeflag = "false";
        $('#prize-mask').hide();
    });
    //分享提示关闭
    $('#showdownload').on('click','.mask',function(){
        $('#showdownload').hide();
    });
})();

function sharesuccess(){
    commonAjax(addlotterytimes , params ).then(function(data){
        if(data&&data.status=="2000") {
            $('#tips-mask .nochance-text').text('<p>分享成功!已增加摇奖机会!</p>');
            $('#tips-mask').show();
            $('body').bind("touchmove",function(event){ event.preventDefault(); });
            hasshakeflag = "true";
        }
    })
}
function wxshare(){
    commonAjax(urlshareinit , {url:window.location.href}).then(function(data){

        var opts = {
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature:data.signature,// 必填，签名，见附录1
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        } ;
        wx.config(opts);
        wx.ready(function () {
            // 2. 分享接口
            // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareAppMessage({
                title: sharetitle,
                desc: sharedes,
                link: window.location.href+"&activity_from=share",
                imgUrl: shareimg,
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
                    sharesuccess();
                },
                cancel: function (res) {
                    // alert('已取消');
                },
                fail: function (res) {
                    //alert(JSON.stringify(res));
                }
            });
            // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareTimeline({
                title: sharetitle,
                desc: sharedes,
                link: window.location.href+"&activity_from=share",
                imgUrl: shareimg,
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
                    sharesuccess();
                },
                cancel: function (res) {
                    // alert('已取消');
                },
                fail: function (res) {
                    //alert(JSON.stringify(res));
                }
            });

            // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareQQ({
                title: sharetitle,
                desc: sharedes,
                link: window.location.href+"&activity_from=share",
                imgUrl: shareimg,
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
                    sharesuccess();
                },
                cancel: function (res) {
                    // alert('已取消');
                },
                fail: function (res) {
                    //alert(JSON.stringify(res));
                }
            });

            // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareWeibo({
                title: sharetitle,
                desc: sharedes,
                link: window.location.href+"&activity_from=share",
                imgUrl: shareimg,
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
                    sharesuccess();
                },
                cancel: function (res) {
                    // alert('已取消');
                },
                fail: function (res) {
                    //alert(JSON.stringify(res));
                }
            });

            // 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
            wx.onMenuShareQZone({
                title: sharetitle,
                desc: sharedes,
                link: window.location.href+"&activity_from=share",
                imgUrl: shareimg,
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
                    sharesuccess();
                },
                cancel: function (res) {
                    // alert('已取消');
                },
                fail: function (res) {
                    //alert(JSON.stringify(res));
                }
            });
        });
        wx.error(function (res) {
            //alert(res.errMsg);
        });
    })

}