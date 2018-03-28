/*******
 * create by zm 20160908
 * 中秋摇月饼活动
*******/
//全局变量

// 中秋摇月饼--显示养殖币和月饼
var userlotterytimes = global_path + 'index.php/activitycenter/userlotterytimes';
// // 中秋摇月饼--增加抽奖机会
// var addlotterytimes = global_path + 'index.php/activitycenter/addlotterytimes';
// 中秋摇月饼--摇奖中月饼
var midautumnlucky = global_path + 'index.php/activitycenter/midautumnlucky';
// 中秋摇月饼--月饼Top20
var toplist = global_path + 'index.php/activitycenter/toplist';
// 微信分享
var urlshareinit = global_path + "wx_share.php";
var user_code = getQueryString('code')||(RP.store.getItem('curr_user_info')?RP.store.getItem('curr_user_info').user_code:"");
var activity_from = getQueryString('activity_from');
var platform = getQueryString('platform');
var ua = navigator.userAgent.toLowerCase();
var hasshakeflag = "false";//请求接口锁

var date=new Date();
var enddate="2016/9/19 23:59:59";//活动结束时间
var activity_code='A16090001';
var page_size = 50;
var	params = {
    user_code:user_code,
    activity_code:activity_code
} ;
var	listparams = {
    user_code:user_code,
    activity_code:activity_code,
    page_size:page_size
} ;
var total_score = 0,
    prize_amount = 0,
    total_times = 0;
//页面渲染
(function(){
    console.log(user_code);
    if(new Date(enddate).getTime()<=date.getTime()){
        $('#tips-mask .nochance-text').html('<p>活动已结束</p>');
        $('#tips-mask').show();//活动已结束
        $('body').bind("touchmove",function(event){ event.preventDefault(); });
        hasshakeflag = "true";
    }else{
        if(activity_from == 'app'){//app
            if(!user_code){//usercode为空
                $('#tips-mask .nochance-text').html('<p>您还未登录。</p><p>请到 [个人中心] 登录后参加活动。</p>');
                $('#tips-mask').show();
                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                hasshakeflag = "true";
            }else{
                commonAjax(userlotterytimes, params, function (data) {
                    if (data.status && data.data) {
                        if(data.status == '2000' || data.status == '80011' || data.status == '80009' ||data.status == '80010'){
                            total_score = data.data.total_score;
                            prize_amount = data.data.prize_amount;
                            total_times = data.data.total_times;
                            $('.score').text(total_score + '枚');
                            $('.amount').text(prize_amount + '枚');
                            $('.total_times').text(total_times);
                        }

                    }
                });
            }
        }else{//静态页面
            $('.weixin-tc').show();//显示下载页
            $('#tips-mask .nochance-text').html('<p>请点击上方 [立即下载] 按钮,下载养殖宝APP参加活动。</p>');
            $('#tips-mask').show();
            $('body').bind("touchmove",function(event){ event.preventDefault(); });
            hasshakeflag = "true";
        }
    }
    // window.onload = function() {
    //         var myShakeEvent = new Shake({
    //             threshold : 10
    //         });
    //         myShakeEvent.start();
    //
    //         window.addEventListener('shake', shakeEventDidOccur, false);
        // shakeEventDidOccur();
        $('.moon-tree-yyy').on('click',function () {
            shakeEventDidOccur();
        });
        function shakeEventDidOccur() {
            if (hasshakeflag == "false") {
                setTimeout(function() {
                    document.getElementById('myaudio').play();
                }, 0);
                $('.moon-tree-shake').addClass('yaoyiyao-dongh');
                $('.ringlight').addClass('none');
                commonAjax(midautumnlucky,params,function(data){
                    if(data){
                        if(data.status == "80000"){
                                var amount = Number(data.data.amount);
                                total_times = total_times-1;
                                total_score = total_score-15;
                                prize_amount =prize_amount+amount;
                                $('#app-prize-mask .money-tree-num').text(amount);//月饼数
                                $('#app-prize-mask .money-tree-times').text(total_times);//剩余次数
                                $('.score').text((total_score).toString() + '枚');//一次消耗5个养殖币
                                $('.amount').text((prize_amount).toString() + '枚');
                                $('.total_times').text(total_times);
                                setTimeout(function(){$('#app-prize-mask').show();},2000);
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                            hasshakeflag = "true";
                        }else if(data.status == "80011"){//积分和抽奖机会都不足
                                $('#tips-mask .nochance-text').html('<p>今天的机会用光啦！</p><p>明天再来吧！</p>');
                                setTimeout(function(){$('#tips-mask').show();},2000);
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                            hasshakeflag = "true";
                        }else if(data.status == "80009"){//积分充足，抽奖次数不足
                                $('#tips-mask .nochance-text').html('<p>今天的机会用光啦！</p><p>明天再来吧！</p>');
                                setTimeout(function(){$('#tips-mask').show();},2000);
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                            hasshakeflag = "true";
                        }else if(data.status == "80010"){//积分不足，抽奖次数充足
                                $('#tips-mask .nochance-text').html('<p>养殖币不足！</p><p>快去“个人中心”—“养殖币”—“赚养殖币”，赚取养殖币吧~</p>');
                                setTimeout(function(){$('#tips-mask').show();},2000);
                                $('body').bind("touchmove",function(event){ event.preventDefault(); });
                            hasshakeflag = "true";
                        }else if(data.status == "80003"){
                            $('#tips-mask .nochance-text').html('<p>活动未开始！</p>');
                            setTimeout(function(){$('#tips-mask').show();},2000);
                            $('body').bind("touchmove",function(event){ event.preventDefault(); });
                            hasshakeflag = "true";
                        }else if(data.status == "80005"){
                            $('#tips-mask .nochance-text').html('<p>活动已结束！</p>');
                            setTimeout(function(){$('#tips-mask').show();},2000);
                            $('body').bind("touchmove",function(event){ event.preventDefault(); });
                            hasshakeflag = "true";
                        }
                    }

                });

                setTimeout(function(){
                    $('.moon-tree-shake').removeClass('yaoyiyao-dongh');
                    $('.ringlight').removeClass('none');
                },2000);
            }

        }
    // }
    // setInterval(function(){
    //     $('.light1').toggleClass('shine1');
    // },3000);
    // setInterval(function(){
    //     $('.light2').toggleClass('shine2');
    // },3000);
    // setInterval(function(){
    //     $('.light3').toggleClass('shine3');
    // },2000);
    // setInterval(function(){
    //     $('.light4').toggleClass('shine4');
    // },1000);
    setInterval(function(){
        $('.ringstar').toggleClass('starshine');
    },3000);
    setInterval(function(){
        $('.money-tree-centerdate img').toggleClass('yyy-button');
    },5000);
    wxshare();
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
            commonAjax(toplist, listparams, function (data) {
                if (data.status && data.status == '2000') {
                    console.info(data.data);
                    var rankList = data.data.rankList;
                    var userRank = data.data.userRank;
                    var html = '<h3>我的排名：</h3>';
                    if(userRank){
                        var u = '<p><span>'+userRank.ranking+'</span><span>'+userRank.nickname+'</span>&nbsp;&nbsp;&nbsp;月饼总数<span class="font-zd">'+userRank.amount+'</span></p>';
                        html += u;
                    }else{
                        html += '<p>暂无排名</p>';
                    }
                    html +="<h3>牛人TOP榜：</h3>";
                    if(rankList && rankList.length!=0){
                        for (n = 0; n < rankList.length; n++) {
                            var p = '<p><span>'+rankList[n].ranking+'</span><span>'+rankList[n].nickname+'</span>&nbsp;&nbsp;&nbsp;月饼总数<span class="font-zd">'+rankList[n].amount+'</span></p>';
                            html += p;
                        }
                    }else{
                        html += '<p>暂无排名</p>';
                    }

                    $('.bottomnotice-listniu').html(html);
                }
                // <h3>牛人TOP榜：</h3>
            });
        }
    });
    //提示弹窗关闭按钮
    $('.mask').on('click','.close-btn',function(){
        if(activity_from == 'app'){//app可摇奖
            hasshakeflag = "false";
        }else{
            hasshakeflag = "true";//页面不可以摇奖
        }
        $('.mask').hide();
        $('body').unbind("touchmove");
    });
    $('.weixin-tc').on('click','.weixin-tc-close',function(){
        $('.weixin-tc').hide();
        $('body').unbind("touchmove");
        hasshakeflag = "true";
    });
    $('#app-prize-mask').on('click','.app-close-btn',function(){
        commonAjax(toplist, listparams, function (data) {
            if (data.status && data.status == '2000') {
                console.info(data.data);
                var rankList = data.data.rankList;
                var userRank = data.data.userRank;
                var html = '<h3>我的排名：</h3>';
                if(userRank){
                    var u = '<p><span>'+userRank.ranking+'</span><span>'+userRank.nickname+'</span>&nbsp;&nbsp;&nbsp;月饼总数<span class="font-zd">'+userRank.amount+'</span></p>';
                    html += u;
                }else{
                    html += '<p>暂无排名</p>';
                }
                html +="<h3>牛人TOP榜：</h3>";
                if(rankList && rankList.length!=0){
                    for (n = 0; n < rankList.length; n++) {
                        var p = '<p><span>'+rankList[n].ranking+'</span><span>'+rankList[n].nickname+'</span>&nbsp;&nbsp;&nbsp;月饼总数<span class="font-zd">'+rankList[n].amount+'</span></p>';
                        html += p;
                    }
                }else{
                    html += '<p>暂无排名</p>';
                }

                $('.bottomnotice-listniu').html(html);
            }
            // <h3>牛人TOP榜：</h3>
        });
        if(activity_from == 'app'){//app可摇奖
            hasshakeflag = "false";
        }else{
            hasshakeflag = "true";//页面不可以摇奖
        }
        $('#app-prize-mask').hide();
        $('body').unbind("touchmove");
    });
    //下载按钮
    $('#download').on('click',function(e){
        e.stopPropagation()
        e.preventDefault();
        $('.mask').hide();
        if(platform == "jxs"){
            window.location.href="../download/downloadApp_jxs.php";
        }else if(platform == "ptd"){
            if (ua.indexOf('ipad') > -1||ua.indexOf('iphone') > -1){
                window.location.href="https://itunes.apple.com/us/app/yang-zhi-bao/id1112414634?l=zh&ls=1&mt=8";
            }else{
                window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.consumer#opened";
            }
        }else{
            if (ua.indexOf('ipad') > -1||ua.indexOf('iphone') > -1){
                window.location.href="https://itunes.apple.com/us/app/yang-zhi-bao/id1112414634?l=zh&ls=1&mt=8";
            }else{
                window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ringpubio.consumer#opened";
            }
        }

    });
    // //炫耀一下
    // $('#prize-mask').on('click','.share',function () {
    //     hasshakeflag = "false";
    //     $('#prize-mask').hide();
    //     $('#showdownload').show();
    // });
    // //再玩一次
    // $('#prize-mask').on('click','.again',function () {
    //     hasshakeflag = "false";
    //     $('#prize-mask').hide();
    // });
    // //分享提示关闭
    // $('#showdownload').on('click','.mask',function(){
    //    $('#showdownload').hide();
    // });
})();
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
                title: "摇月饼赢大奖",
                desc: '快下载养殖宝APP参与活动,就有机会赢得大奖哦!',
                link: window.location.href+"&share=share",
                imgUrl: shareimg,
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
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
                title: "摇月饼赢大奖",
                desc: '快下载养殖宝APP参与活动,就有机会赢得大奖哦!',
                link: window.location.href+"&share=share",
                imgUrl: shareimg,
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
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
                title: "摇月饼赢大奖",
                desc: '快下载养殖宝APP参与活动,就有机会赢得大奖哦!',
                link: window.location.href+"&share=share",
                imgUrl: shareimg,
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
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
                title: "摇月饼赢大奖",
                desc: '快下载养殖宝APP参与活动,就有机会赢得大奖哦!',
                link: window.location.href+"&share=share",
                imgUrl: shareimg,
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
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
                title: "摇月饼赢大奖",
                desc: '快下载养殖宝APP参与活动,就有机会赢得大奖哦!',
                link: window.location.href+"&share=share",
                imgUrl: shareimg,
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
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