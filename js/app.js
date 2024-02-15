$(document).ready(function(){
  $(window).on('scroll', function(){
    var scroll = $(this).scrollTop();
    if(scroll > 40) {
      $('.header').addClass('header-bg');
    }else{
      $('.header').removeClass('header-bg');
    }
  })
})
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-bar');

window.onscroll = () =>{
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
}

menuBtn.onclick = () =>{
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

$(document).ready(function(){
  $(window).on('scroll', function(){
    var scroll = $(this).scrollTop();
    if(scroll > 100) {
      $('.to-top').addClass('active');
    }else{
      $('.to-top').removeClass('active');
    }
  })
})