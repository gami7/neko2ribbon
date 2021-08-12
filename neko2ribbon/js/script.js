 //Swiper用のクラス指定
 var mySwiper = new Swiper('.swiper-container', {
   // カスタマイズ用、追加オプション
   //direction: 'vertical',//←スライド方向のオプション
   loop: true,//←ループオプション
   // ページネーション用のクラス指定
   pagination: {
     el: '.swiper-pagination',
   },
   //ナビゲーション用のクラス指定
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   //スクロールバー用のクラス指定
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });

 // スクロールトップボタン
scrollTop('js-scroll-top', 150); // 遅すぎるとガクガクになるので注意

function scrollTop(el, duration) {
  const target = document.getElementById(el);
  target.addEventListener('click', function() {
    let currentY = window.pageYOffset; // 現在のスクロール位置を取得
    let step = duration/currentY > 1 ? 10 : 100; // 三項演算子
    let timeStep = duration/currentY * step; // スクロール時間
    let intervalId = setInterval(scrollUp, timeStep);
    // timeStepの間隔でscrollUpを繰り返す。
    // clearItervalのために返り値intervalIDを定義する。

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalId); // ページ最上部に来たら終了
      } else {
          scrollBy( 0, -step ); // step分上へスクロール
      }
    }
  });
}