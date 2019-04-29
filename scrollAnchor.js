$( document ).ready()
{
  var menu = $('.nav-list');
  var menuBtn = $('.show-menu-btn');
  var menuBtnBox = $('#menu-btn');
  var banner1 = $('.banner-1');
  var banner2 = $('.banner-2');
  menu.hide();
$(function(){
  /**
  * slider
  **/
  setInterval(function() {
    banner2.toggle();
    banner1.toggle();
  },4000);
});

  menuBtn.on('click', function(){
    menu.fadeIn();
    menuBtn.hide();
  });

  menu.on('click', function(){
    menu.hide();
    menuBtn.fadeIn();
  });

  $(function() {
      /**
      * Smooth scrolling to page anchor on click
      **/
      $("a[href*='#']:not([href='#'])").click(function() {
          if (
              location.hostname == this.hostname
              && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
          ) {
              var anchor = $(this.hash);
              anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
              if ( anchor.length ) {
                  $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
              }
          }
      });
  });

}
