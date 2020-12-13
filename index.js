window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#nav').classList.toggle('is-active')
  })

  document.querySelector('#search').addEventListener('click', function(){
    document.querySelector('#input').classList.toggle('active')
  })

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  $( function() {
    $( "#accordion" ).accordion();
  });

  $( ".selector" ).accordion({
    collapsible: true
  });

  var collapsible = $( ".selector" ).accordion( "option", "collapsible" );

  // Setter
  $( ".selector" ).accordion( "option", "collapsible", true );

  $( ".selector" ).accordion({
    animate: 50
  });

  // Getter
  var animate = $( ".selector" ).accordion( "option", "animate" );

  // Setter
  $( ".selector" ).accordion( "option", "animate", 50 );

})
