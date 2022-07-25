$(document).ready(function() {

    // Start Header  Section 
        // Start  navbar 

    $(".navbarButtons").click("click", function() {
        $(this).toggleClass("crossxs");
    });

    $(window).scroll(function() {
        var positionTop = $(this).scrollTop();

        console.log(positionTop);

        if(positionTop >= 400) {
            $("nav").slideUp(500);
        } else {
            $("nav").slideDown(500);
        }
    });

        // End navbar
    // End Header Section 
});