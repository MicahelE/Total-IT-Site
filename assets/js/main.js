

$('#carouselExampleControls').on('slide.bs.carousel', function(e) {
    
    if (e.relatedTarget.id == 'secondSlide'){
        setTimeout(function () {
        $("#project").css('background-color', '#3E4894').delay("slow");
        $(".aldelia").removeClass("d-none");
        $(".mobile").addClass("d-none");
        $(".baker").addClass("d-none");
        
        // $(".projects").addClass("customcolor");
        // $(".btncarousel").addClass("customcolor");
    }, 600);
    } 
    
    
    
    
    else if(e.relatedTarget.id == 'thirdSlide'){
        setTimeout(function () {
        $("#project").css('background-color', 'black').delay("slow");
        $(".baker").removeClass("d-none");
        $(".aldelia").addClass("d-none");
        $(".nimasa").addClass("d-none");
        // $(".projects").toggleClass("customcolor");
        // $(".btncarousel").toggleClass("customcolor");
    }, 600);
    }
      
    // else if(e.relatedTarget.id == 'fourthSlide'){
    //     setTimeout(function () {
    //     $("#project").css('background-color', '#5d4022').delay("slow");
    //     $(".egfm").removeClass("d-none");
    //     $(".baker").addClass("d-none");
    //     $(".nimasa").addClass("d-none");
        // $(".projects").toggleClass("customcolor");
        // $(".btncarousel").toggleClass("customcolor");
    // }, 600);
    // }  
    
    else if(e.relatedTarget.id == 'fifthSlide'){
        setTimeout(function () {
        $("#project").css('background-color', '#60584f').delay("slow");
        $(".nimasa").removeClass("d-none");
        $(".baker").addClass("d-none");
        $(".diamond").addClass("d-none");
        // $(".projects").toggleClass("customcolor");
        // $(".btncarousel").toggleClass("customcolor");
    }, 600);
    }  
    
    else if(e.relatedTarget.id == 'sixthSlide'){
        setTimeout(function () {
        $("#project").css('background-color', '#472d4f').delay("slow");
        $(".diamond").removeClass("d-none");
        $(".nimasa").addClass("d-none");
        $(".mobile").addClass("d-none");
        // $(".projects").toggleClass("customcolor");
        // $(".btncarousel").toggleClass("customcolor");
    }, 600);
    }
    else if(e.relatedTarget.id == 'firstSlide'){
        setTimeout(function () {
            $("#project").css('background-color', '#65abfb').delay("slow");
            $(".diamond").addClass("d-none");
            $(".aldelia").addClass("d-none");
        $(".mobile").removeClass("d-none");
        // $(".projects").toggleClass("customcolor");
        // $(".btncarousel").toggleClass("customcolor");
        }, 600);
    }
})



$("#contact-form").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var phoneno = $("#phoneno").val();
    var projecttype = $("#projecttype").val();
    var description = $("#description").val();
    // var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "assets/php/process.php",
        data: "name=" + name + "&email=" + email + "&phoneno=" + phoneno + "&projecttype=" + projecttype + "&description=" + description,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}

function submitMSG(valid, msg){
    var msgClasses;
if(valid){
    msgClasses = "h3 text-center animated tada text-success";
} else {
    msgClasses = "h3 text-center text-danger";
}
$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function formSuccess(){
    submitMSG(true, "Message Submitted!")
}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
