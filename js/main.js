window.onload = init();
function init() {
  $(function(){
    $('#gallery').css('display', 'none');
  });

  var leftBtn = document.getElementById('about-btn'),
      rightBtn = document.getElementById('portfolio-btn'),
      returnLeft = document.getElementById('return-about'),
      returnRight = document.getElementById('return-portfolio');

  //  Add class animate for About page & hide other
  function fadeInLeft(){
    var currentAttrValue = $(this).attr('href');

    // Remove added class after animation is finished
    $('.tabs ' + currentAttrValue).css({
      display: 'block'
    }).addClass('animate fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animate fadeInLeft');
    });

    $('.tabs ' + currentAttrValue).siblings().hide(1);
  }

    //  Add class animate for Portfolio page & hide other
  function fadeInRight(){
    var currentAttrValue = $(this).attr('href');

    // Remove added class after animation is finished
    $('.tabs ' + currentAttrValue).css({
      display: 'block'
    }).addClass('animate fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animate fadeInRight');
    });

    $('.tabs ' + currentAttrValue).siblings().hide(1);
  }

  leftBtn.addEventListener('click', fadeInLeft, false);
  rightBtn.addEventListener('click', fadeInRight, false);
  returnLeft.addEventListener('click', fadeInRight, false);
  returnRight.addEventListener('click', fadeInLeft, false);

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

  // Toggle information panels for about page & portfolio
  $('.accordion-btn').on('click', function(){
    $('.accordion').slideToggle(500);
    $('.toggle-arrow').toggleClass('toggle-arrow-down');
    $('#about .back-to-top').toggleClass('BTT-visible');
  });

  $('.gallery-btn').on('click', function(){
    $('#gallery').slideToggle(500);
    $('.toggle-arrow').toggleClass('toggle-arrow-down');
    $('#portfolio .back-to-top').toggleClass('BTT-visible');
  });

}
