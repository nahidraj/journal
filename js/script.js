$(function () {
  "use strict";

  // sticky menu js
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-lg').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-lg').css('top', '-100px');
    }
  });

  // $("#datepicker").datepicker({
  //   changeMonth: true,
  //   changeYear: true,
  //   numberOfMonths: 1,
  // });

  // $("#departDatepicker").datepicker({
  //   changeMonth: true,
  //   changeYear: true,
  //   numberOfMonths: 1,
  // });

  // $("#returnDatepicker").datepicker({
  //   changeMonth: true,
  //   changeYear: true,
  //   numberOfMonths: 1,
  // });


  // // client slider js
  // $(".client_slider").slick({
  //   dots: false,
  //   infinite: true,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   slidesToShow: 5,
  //   fade: false,
  //   autoplay: true,
  //   arrows: false,
  //   slidesToScroll: 1,
  //   prevArrow: '<i class="fas fa-arrow-left left icon"></i>',
  //   nextArrow: '<i class="fas fa-arrow-right right icon"></i>',
  //   responsive: [{
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // })


  // countdown js
  // Set the date we're counting down to
  // function startCountdown(elementId) {
  //   var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  //   // Update the count down every 1 second
  //   var x = setInterval(function () {
  //     // Get today's date and time
  //     var now = new Date().getTime();
  //     // Find the distance between now and the count down date
  //     var distance = countDownDate - now;
  //     // Time calculations for days, hours, minutes and seconds
  //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //     // Output the result in the specified element
  //     var timerElement = document.getElementById(elementId);
  //     if (timerElement) {
  //       timerElement.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds + "";
  //     }
  //     // If the count down is over, write some text 
  //     if (distance < 0) {
  //       clearInterval(x);
  //       if (timerElement) {
  //         timerElement.innerHTML = "EXPIRED";
  //       }
  //     }
  //   }, 1000);
  // }

  // // Start countdown for each timer element
  // startCountdown("demo-1");
  // startCountdown("demo-2");
  // startCountdown("demo-3");
  // startCountdown("demo-4");
  // startCountdown("demo-5");
  // Add more calls to startCountdown for additional timers

  $(".js-select2").select2({
    closeOnSelect: true
  });

  // back to top js
  var btn = $("#button");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });


  // mobile menu js
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-main').addClass('show-mobile-menu')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })

  $('.sub-menu ul').hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });
});