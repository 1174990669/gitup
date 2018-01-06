$(function(){
    // 头部导航菜单点击效果
    $(".father>li").hover(function() {
        $(".father>li").each(function(i,item){
          $(item).removeClass("active");
        })
        $(this).addClass("active");
        $(this).children('.children').css('display', 'block');

      }, function() {
          $(this).children('.children').css('display', 'none');
    });

  // 百度分享插件
  window._bd_share_config={
    "common":{
      "bdSnsKey":{},
      "bdText":"",
      "bdMini":"2",
      "bdPic":"",
      "bdStyle":"0",
      "bdSize":"16"
    },
    "share":{
      "bdSize" : 24
    }
  };with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

});