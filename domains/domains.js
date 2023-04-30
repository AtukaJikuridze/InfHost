$(".menu-bar").click(function (e) { 
    e.preventDefault();
    
$(this).toggleClass("fa-x")
$("nav").toggleClass("after__nav")


});

