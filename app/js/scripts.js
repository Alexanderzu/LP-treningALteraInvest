	//= parts/jquery.v2.1.1.js
	//= parts/owl.carousel.min.js
	//= parts/jquery.maskedinput.min.js
	//= parts/jquery-editable-select.min.js
	//= parts/bootstrap.min.js
	//= parts/masonry.pkgd.min.js
	//= parts/jquery.imagesloaded.min.js
	$(document).ready(function () {
	    $('.owl-carousel').owlCarousel({
	        items: 1
	        , loop: false
	        , nav: true
	        , center: true
	        , margin: 10
	        , URLhashListener: true
	        , autoplayHoverPause: true
	        , startPosition: 'URLHash'
	    });
        
           $('#editable-select').editableSelect({
	        effects: 'slide'
	    });

//	    $('#editable-select')
//	        .editableSelect()
//	        .on('select.editable-select', function (e) {
//	            $('.submit_select').attr('href', $('.es-visible').attr("value"));
//	        });

        
//	    var tab = $('#myTab');
//	    var num = tab.find('.nav-tabs li').length - 1;
//	    $('.next').click(function () {
//	        var cur = tab.find('li.active');
//	        var index = cur.index();
//	        if (index == num) {
//	            var next = tab.find('.nav-tabs').find('li').eq(0);
//	        }
//	        else {
//	            var next = cur.next('li');
//	        }
//	        next.find('a').tab('show');
//	    });
//	    $('.prev').click(function () {
//	        var cur = tab.find('li.active');
//	        var index = cur.index();
//	        if (index == 0) {
//	            var next = tab.find('.nav-tabs').find('li').eq(num);
//	        }
//	        else {
//	            var next = cur.prev('li');
//	        }
//	        next.find('a').tab('show');
//	    });
        
	    var $container = $('.section-reviews-text__container');
	    $container.imagesLoaded(function () {
	        $container.masonry({
	            itemSelector: '.item-grid'
	            , columnWidth: '.grid-sizer'
	            , gutter: 10
	        });
	    });
	}); //document