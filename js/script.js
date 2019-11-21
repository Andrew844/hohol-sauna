jQuery(document).ready(function($) {


    $('.popup-content').magnificPopup({
        type: 'image',
        gallery : {
        	enabled: true
        }
    });


    $('.abs').on('click', function () {
    	$('.abs').css('display', 'none');
    });




});

