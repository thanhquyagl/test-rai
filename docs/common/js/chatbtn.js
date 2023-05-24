
 $(function () {
    var display = function () {
    if ($(this).scrollTop() > 100) { //scroll量
            $('.js-chatbtn').addClass('is-active');
            var scrollHeight = $(document).height(); //ドキュメントの高さ
            var scrollPosition = $(window).height() + $(window).scrollTop(); //現在地
            var footHeight = $('.l-footer-wrap').innerHeight() - 40; //footerの高さ（＝止めたい位置）
            if (scrollHeight - scrollPosition <= footHeight) {
              //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
              $('.js-chatbtn').css({
                "position": "absolute", //positionをabsolute（親：wrapperからの絶対値）に変更
                //納品時は必要↓
                //"bottom": footHeight + 75 //下からfooterの高さ + 20px上げた位置に配置
                "bottom": 75 //下からfooterの高さ + 20px上げた位置に配置
              });
            } else {
              //それ以外の場合は
              $('.js-chatbtn').css({
                "display": "block",
                "position": "fixed",
                "bottom": "75px"
              });
            }
        } else {
            $('.js-chatbtn').removeClass('is-active');
        }
    }    
    $(window).on('scroll', display);
    //閉じるを押したときの動作
    $('.js-chat_close').click(function(){
      $(this).parent('.js-chatbtn').removeClass('is-active').fadeOut('slow');
      $(window).off('scroll', display);
    });
});