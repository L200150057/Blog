$(window).scroll(function() {
    if ($(this).scrollTop() == 102){        
        $("#navbar-main").addClass("bg-gunmetal");
        $("#navbar-main").removeClass("bg-jindigo");
    } else if($(this).scrollTop() == 0){
        $("#navbar-main").addClass("bg-jindigo");
        $("#navbar-main").removeClass("bg-gunmetal");
    }
});