$(function(){
	//初始化swiper
  var swiper = new Swiper('.swiper-container-v', {
      pagination: '.swiper-pagination-v',
      direction: 'vertical',
      slidesPerView: 1,
      paginationClickable: true,
      mousewheelControl: true
  });

  // 横向轮播
  var swiperH = new Swiper('.swiper-container-h', {
      pagination: '.swiper-pagination-h',
      autoplay: 3000,
      paginationClickable: true
  });

  // 广告位横向轮播
  var swiperH2 = new Swiper('.swiper-container-h2', {
      pagination: '.swiper-pagination-h2',
      autoplay: 3000,
      slidesPerView: 2,
      spaceBetween : 10,
      slidesPerGroup:2,
      paginationClickable: true
  });

  // 第二屏图标鼠标划过事件
  $(".icon").hover(function() {
    $(".icon img").each(function(i,item){
        var img_s=$(item).attr("src");
        if(img_s.indexOf("_")>0){
          img_s=img_s.split("_")[0];
          $(item).attr("src",img_s+".png");
          $(item).removeClass("ic-ac");
        }
        $(".data"+i).css("display","none");

          
    });
    $(this).addClass("ic-ac");
    var h_img=$(this).children("img").attr("src").split(".")[0];
    $(this).children("img").attr("src",h_img+"_h.png");
    
    $(".data"+$(this).index()).css("display","block");
    $(".slide-img").attr("src","images/index/phone"+$(this).index()+".png");
  
  }, function() {          
    var img_s=$(this).children("img").attr("src").split("_")[0];
    $(this).children("img").attr("src",img_s+".png");
    $(this).removeClass("ic-ac");
  }
  );


  // 第三屏鼠标划过事件

  $(".sl-img > .slides > .h-quan").each(function(){
    $(this).hover(function(){
      $(this).parent().children(".h-detail").animate({opacity:"1",width:"80%"},500);
    },function(){
      $(this).parent().children(".h-detail").animate({opacity:"0",width:"0"},500);
    });
  });

});
