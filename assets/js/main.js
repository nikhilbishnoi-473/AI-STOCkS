function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross")
}



$('.responsive_2').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: true,
  cssEase: 'linear',
});


$('.responsive1').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: true,
  cssEase: 'linear',
  
});
$('.responsive').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: true,
  cssEase: 'linear',
  rtl: true,
   
});