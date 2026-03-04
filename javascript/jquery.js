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
  duration: 400,
  viewFactor: 0.2,
});

//ヘッダーメニューのフォントを、AB-yuruminに変更
(function(d) {
  var config = {
    kitId: 'mbj1dif',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

//クリック押下時にアラートを表示
$('.alert-btn').on('click', function(e) {
  alert('架空のカフェなので、アクセスできません。ごめんなさいね 🙇‍♀️');
  e.preventDefault();
});
