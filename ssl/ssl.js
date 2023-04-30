$(".menu-bar").click(function (e) { 
    e.preventDefault();
    
$(this).toggleClass("fa-x")
$("nav").toggleClass("after__nav")


});

$(".tab").click(function(e){
  if($(this).children(".open_text").hasClass("fa-chevron-right")){
    $(this).children(".tab-information").show();
    $(this).children(".open_text").removeClass("fa-chevron-right")
    $(this).children(".open_text").addClass("fa-chevron-down")
    $(this).css("height","unset")
  }
  else{
    $(this).children(".tab-information").hide();
    $(this).children(".open_text").addClass("fa-chevron-right")
    $(this).children(".open_text").removeClass("fa-chevron-down")
    $(this).css("height","130px")
  }
 
})