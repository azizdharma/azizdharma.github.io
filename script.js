$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 

  var swiper1 = new Swiper('.swiper1', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  pagination:  {
      el: '.swiper-pagination1',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  debugger: true,
  });

  var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  pagination:  {
      el: '.swiper-pagination2',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  debugger: true,
  });
