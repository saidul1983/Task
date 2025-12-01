    //scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
	
	
	  // dropdown
	$('.dropdown').on('mouseover',function() {
		var drop_item = $(this).children('.dropdown-menu');
        drop_item.show();
    });
	
	$('.dropdown').on('mouseleave',function() {
		var drop_item = $(this).children('.dropdown-menu');
        drop_item.hide();
    });
	
	// sidebar Nav
	        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        }); // end sidebar Nav
		
		
    // Primary Controls
	$('#category-slider').owlCarousel({
			dots:false,
			autoplay:true,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:3
				}
			}
		});
		
			$('#main-slider').owlCarousel({
			dots:false,
			autoplay:true,
			nav:true,
			responsive:{
				0:{
					items:1
				}
			}
		});
		
		$('#products-slider, #top-sales, #related-products').owlCarousel({
			dots:false,
			autoplay:true,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:4
				},
				1400:{
					items:5
				}
			}
		});
		
		$('#letest-news').owlCarousel({
			dots:false,
			autoplay:true,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:3
				},
				1400:{
					items:4
				}
			}
		});
		
		$(".owl-next").html(" Next <i class='icon-arrow-right'></i> ");
		$(".owl-prev").html(" <i class='icon-arrow-left'></i> Prev ");
		
		$(document).ready(function(){
			if($(window).width() < 992) {
				$('.left-side-bar a[data-toggle="collapse"]').addClass('collapsed');
				$('.left-side-bar .panel-collapse').removeClass('show')
				}
			});
			
//Products-gallery
			
$(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    navText: [
      '<i class="fas fa-angle-right"></i>',
      '<i class="fas fa-angle-left"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});
//Products-gallery

//gallery

	$(document).ready(function() {
	if($(window).width()> 991) {
		$('.zoomple').zoomple({
			blankURL : '',
			bgColor : 'images/loading.gif',
			loaderURL : '',
			offset : {x:-150,y:-150},
			zoomWidth : 300, 
			zoomHeight : 300,
			source : 'data-src', 
			roundedCorners : true
		 });
		}
 
});


//gallery









