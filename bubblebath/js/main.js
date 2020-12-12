
$(document).ready(function(){

  
  if($(window).width() < 769){

    $("#navigation-list, .icons").hide();

    $(".menuBtn").click(function() {
  
      $("#navigation-list, .icons").slideToggle(300);
  });
 
 $("li a").click(function(){
     $("#navigation-list, .icons").hide();
 });

  }


})
  



$('a[href*=#]:not([href=#])').click(function() {

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

    var target = $(this.hash);

    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

    if (target.length) {

    $('html,body').animate({

      scrollTop: target.offset().top 

    },500);

    return false;

  }

}

});
