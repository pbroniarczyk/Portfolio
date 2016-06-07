window.onload = init();
function init() {

  var leftBtn = document.getElementById('about-btn'),
      rightBtn = document.getElementById('portfolio-btn'),
      returnLeft = document.getElementById('return-about'),
      returnRight = document.getElementById('return-portfolio');

  leftBtn.addEventListener('click', fadeInLeft, false);
  rightBtn.addEventListener('click', fadeInRight, false);
  returnLeft.addEventListener('click', fadeInRight, false);
  returnRight.addEventListener('click', fadeInLeft, false);

  function fadeInLeft(){
    var currentAttrValue = $(this).attr('href');

    $('.tabs ' + currentAttrValue).css({
      display: 'block'
    }).addClass('animate fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animate fadeInLeft');
    });

    $('.tabs ' + currentAttrValue).siblings().hide(1);
  }

  function fadeInRight(){
    var currentAttrValue = $(this).attr('href');

    $('.tabs ' + currentAttrValue).css({
      display: 'block'
    }).addClass('animate fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animate fadeInRight');
    });

    $('.tabs ' + currentAttrValue).siblings().hide(1);
  }

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
