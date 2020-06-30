

$('#carouselExampleControls').on('slide.bs.carousel', function(e) {
    if(e.relatedTarget.id == 'secondSlide'){
        setTimeout(function () {
        $("#project").css('background-color', '#3E4894').delay("slow");
        $(".aldelia").toggleClass("d-none");
        $(".mobile").toggleClass("d-none");
        $(".projects").toggleClass("customcolor");
        $(".btncarousel").toggleClass("customcolor");
    }, 600);
    } else if(e.relatedTarget.id == 'firstSlide'){
        setTimeout(function () {
            $("#project").css('background-color', 'antiquewhite').delay("slow");
            $(".aldelia").toggleClass("d-none");
        $(".mobile").toggleClass("d-none");
        $(".projects").toggleClass("customcolor");
        $(".btncarousel").toggleClass("customcolor");
        }, 600);
    }
})
