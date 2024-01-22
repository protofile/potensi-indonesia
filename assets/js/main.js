$(document).ready(function(){

    $(".prolog .text a").click(function(pa){
        pa.preventDefault();
        $(".prolog .text").hide();
        $(".prolog").addClass("scene-closed");
        $(".scene.cokcpit").addClass("active");
        $(".cockpit-bg").addClass("show");
        setTimeout(function(){
            $(".prolog").hide();
        }, 4000);
        setTimeout(function(){
            $("#dialog-1").addClass("show");
        }, 4000);
    });

    $(".dialog-box .next").click(function(nx){
        nx.preventDefault();
        $(this).parent().parent().removeClass("show");
        $($(this).attr("href")).addClass("show");
        
    });

}); 