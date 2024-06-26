//Ajax links
$( ".ajax-link" ).on( "click", function(event) {
  event.preventDefault();
  
  $( ".ajax-wrapper" ).scrollTop(0);
  
  $('.homeContentWrap').fadeOut();
  
  $('.homeContentWrap .content p').addClass("hidden");
  $(".ajax-link").removeClass("active");
  $(this).addClass("active");  
    
  var href = $(this).attr("href");
  var hrefShort = href.replace('.html','');
  var href = href+'.html'

  
  window.history.pushState("", "", hrefShort);

  
  $.get(href, function(html){
     $(".ajax-wrapper").load(href + " .loadme", function(){
       if ( typeof window.instgrm !== 'undefined' ) {
           window.instgrm.Embeds.process();
           twttr.widgets.load();
       }
       
       if ( typeof DISQUS !== 'undefined' ) {
            DISQUS.reset({
              reload: true
            });
        }
       
       $(".ajax-wrapper").fadeIn(500);
       $(".intro").addClass("selected");
     });
  });
  
});


// Hover links

$(document).on("mouseenter", ".intro:not(.selected) .ajax-link", function() {
    $('.homeContentWrap .content p').addClass("hidden");
	$('.contact').addClass("hidden");
    $('.button').removeClass("highlight");
	$(this).addClass("highlight");
});

$(document).on("mouseleave", ".intro:not(.selected) .ajax-link", function() {
    $('.homeContentWrap .content p').removeClass("hidden"); 
    $('.contact').removeClass("hidden");
	$('.button').addClass("highlight");
});


//Close links

$(document).on("click", '.close', function(event) { 
  
  if ($(window).width() >= 1024) {
    event.preventDefault();
    $(".ajax-wrapper").fadeOut();
    $('.homeContentWrap .content p').removeClass("hidden");
    $(".intro").removeClass("selected");
	$('.contact').removeClass("hidden");
  }

});


//sidebar

function openNav() {
  document.getElementById("mySidenav").style.transform = "translate(0)"
  document.getElementById("menu").style.textAlign = "left";
  document.getElementById("closebtn").style.transform = "rotate(0deg)";
}

function closeNav() {
  document.getElementById("mySidenav").style.transform = "translate(21.9vw)"
  document.getElementById("menu").style.textAlign = "right";
  document.getElementById("closebtn").style.transform = "rotate(45deg)";
}


//cursor

$(document).ready(function() {
    var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $("a").hover(
        function() {
            cursor.css("background-color", "#ddd");
        },
        function() {
            cursor.css("background-color", "");
        }
    );
});
