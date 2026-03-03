// NEWS：スライダー
$(function() {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

//FAQ：開閉
$(".faq-head").on("click", function() {
  $(this).toggleClass("is-open");     // アイコンを切り替えるためにクラスをトグル
  $(this).next().slideToggle();
});

//#menu-buttonをクリックした時
$('#menu-button').on('click',function(){
  $('.gnav-sp-wrap').fadeToggle(500);
});

//メニュー内のリンククリックしたとき
$(".gnav-sp a").on("click", function() {
  $('.gnav-sp-wrap').fadeToggle(500);
});

//スクロールするとふわっと表示
ScrollReveal().reveal('.fadein', {
  duration: 600,
  viewFactor: 0.2,
});
