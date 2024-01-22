$(document).ready(function(){

    $(".door").click(function(){
        $(".prolog").addClass("scene-closed");
        $(".cockpit-bg").addClass("show");
        setTimeout(function(){
            $(".prolog").hide();
        }, 4000);
    });

}); 