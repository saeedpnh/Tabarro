(function() {
  $(window).on("scroll", function() {
    if ($("#main-nav").offset().top > 100) {
      $("#main-nav").addClass("navbar-shrink");
      $("#main-nav img.white").css('display','none');
      $("#main-nav img.gray").css('display','block');
    } else {
      $("#main-nav").removeClass("navbar-shrink");
      $("#main-nav img.white").css('display','block');
      $("#main-nav img.gray").css('display','none');
    }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on("click", "a.js-scroll-trigger", function(e) {
    var anchor = $(this);
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 50
        },
        1200,
        "easeInQuad"
      );
    e.preventDefault();
  });

  // Initialize and Configure Scroll Reveal Animation
  /*
  window.sr = ScrollReveal();
  sr.reveal(
    ".reveal",
    {
      duration: 600,
      scale: 0.3,
      distance: "0"
    },
    200
  );
  */
 
  window.sr = ScrollReveal();
  sr.reveal('.scroll-reveal',{
    delay: 300,
    duration:600
   
    
  });

  // profit calculation
  $('button').on('click', function(e){
    e.preventDefault();
  })
})();
