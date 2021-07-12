
$(document).ready(function(){
    // Show hide popover
    $("#booking-menu").click(function(){
        $(this).find("#booking-dropdown-menu").slideToggle("fast");
    });
});
$(document).on("click", function(event){
    var $trigger = $("#booking-menu");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $("#booking-dropdown-menu").slideUp("fast");
    }            
});


$(document).ready(function(){
    // Show hide popover
    $(".user-menu-section").click(function(){
        $(this).find("#user-menu-dropdown-section").slideToggle("fast");
    });
});
$(document).on("click", function(event){
    var $trigger = $(".user-menu-section");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $("#user-menu-dropdown-section").slideUp("fast");
    }            
});


// second code

// $(document).ready(function(){
//     // Show hide popover
//     $(".dropdown").click(function(){
//         $(this).find(".dropdown-menu").slideToggle("fast");
//     });
// });
// $(document).on("click", function(event){
//     var $trigger = $(".dropdown");
//     if($trigger !== event.target && !$trigger.has(event.target).length){
//         $(".dropdown-menu").slideUp("fast");
//     }            
// });