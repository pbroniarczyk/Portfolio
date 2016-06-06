window.onload = init();
function init() {

  // PAGE TRANSITION
  var leftBtn = document.getElementById('about-btn'),
      rightBtn = document.getElementById('portfolio-btn'),
      returnLeft = document.getElementById('return-about'),
      returnRight = document.getElementById('return-portfolio');

  function fadeIn(){
    var currentAttrValue = $(this).attr('href');

    $('.tabs ' + currentAttrValue).css({
      display: 'block'
    }).addClass('animate fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animate fadeInDown');
    });

    $('.tabs ' + currentAttrValue).siblings().hide(1);
  }

  leftBtn.addEventListener('click', fadeIn, false);
  rightBtn.addEventListener('click', fadeIn, false);
  returnLeft.addEventListener('click', fadeIn, false);
  returnRight.addEventListener('click', fadeIn, false);


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
