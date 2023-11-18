
$(document).ready(function(){
    // JQuery date picker
    $( "#input-check-in" ).datepicker();
    $( "#input-check-out" ).datepicker();
    // slider

    $('.slider').slick(({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        adaptiveHeight: true
    }));

    function VideoPlay(){
        video = $('.video-container video').get(0)
        if(video.paused){
            video.play();
            $(".fa-play-circle").hide();
            $(".fa-pause-circle").show();
        }else{
            video.pause();
            $(".fa-play-circle").show();
            $(".fa-pause-circle").hide();
        }
    }

    $(".fa-play-circle").click(function(){
        VideoPlay();
    })
    $(".fa-pause-circle").click(function(){
        VideoPlay();
    })
})