// Booking Menu Dropdown
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

// User Menu DropDown
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

// Language Dropdown
$(document).ready(function(){
    // Show hide popover
    $(".lang-btn").click(function(){
        $(this).find(".lang-dropdown").toggle(500);
    });
});
$(document).on("click", function(event){
    var $trigger = $(".lang-btn");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".lang-dropdown").slideUp();
    }            
});
