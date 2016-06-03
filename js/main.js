window.onload = init();
function init() {

  // TRANSITION BETWEEN PANELS
  var lBtn = document.getElementById('left-panel-btn');
      rBtn = document.getElementById('right-panel-btn');
      mainWrapper = document.getElementById('wrapper');


//  ABOUT PAGE
  lBtn.onclick = function leftPanel() {
    document.getElementById('left-panel').setAttribute(
      'style', 'transform: translateX(0); opacity: 1');

    $('#wrapper').css({
      'transform': 'translateX(100%)',
      'opacity': '0'
    });
  };

//  PORTFOLIO PAGEt
  rBtn.onclick = function rightPanel() {
    document.getElementById('right-panel').setAttribute(
      'style', 'transform: translateX(0); opacity: 1');

    $('#wrapper').css({
      'transform': 'translateX(-100%)',
      'opacity': '0'
    });
  };

// MAIN PAGE
  document.getElementById('return-left').onclick = function(){
    document.getElementById('left-panel').setAttribute(
      'style', 'transform: translateX(-100%); opacity: 0'
    );
    $('#wrapper').css({
      'transform': 'translateX(0)',
      'opacity': '1'
    });
  };

  document.getElementById('return-right').onclick = function(){
    document.getElementById('right-panel').setAttribute(
      'style', 'transform: translateX(100%); opacity: 0'
    );
    $('#wrapper').css({
      'transform': 'translateX(0)',
      'opacity': '1'
    });
  };

  // GALLERY HOVER OVERLAY
  $(function hover(){
    $('.thumb').on('mouseover', function(){
      $(this).children('.overlay').css({
        'transform': 'translateX(0)',
        'opacity': 1
      });
    });
    $('.thumb').on('mouseleave', function(){
      $(this).children('.overlay').css({
        'transform': 'translateX(100%)',
        'opacity': 0
      });
    });
  });

}
