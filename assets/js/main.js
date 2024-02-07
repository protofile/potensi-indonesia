$(document).ready(function(){

    /*CURSOR*/
   $(document).mousemove(function(e) {
        $('.space-cursor').eq(0).css({left: e.pageX,top: e.pageY});
        setTimeout(function() {
            $('.space-cursor-2').eq(0).css({left: e.pageX,top: e.pageY});
        }, 100);
    })
    $("a").mousemove(function(e) {
        $('.space-cursor').eq(0).css({'transform': 'scale(1.5)'});
    })
    $("a").mouseleave(function(e) {
        $('.space-cursor').eq(0).css({'transform': 'scale(1)'});
    })

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
    $(".potensi-box .next").click(function(nx){
        nx.preventDefault();
        $(this).parent().parent().removeClass("show");
        $($(this).attr("href")).addClass("show");
    });

    $(".id-link").click(function(il){
        il.preventDefault();
        $(".popup-detail").removeClass("show");
        $($(this).attr("href")).addClass("show");
    });

    $(".go-to-category").click(function(cng){
        cng.preventDefault();
        $(".detail-preloader").toggleClass("closed open");
        setTimeout(function(){
            window.location.href = "../kategori.html";
        });
    });

    $(".open-frame").click(function(of){
        of.preventDefault();
        $(".potensi-box").removeClass("show");
        $(".detail-box iframe").remove();
        $(".detail-box").append("<iframe src=" + $(this).attr("href") + ">")
        setTimeout(function() {
            $(".detail-box").addClass("show");
        }, 800);
    });
    $(".detail-box").click(function(){
        $(".detail-box").removeClass("show");
        setTimeout(function() {
            $(".potensi-box").addClass("show");
        }, 800);
    });

    /*TAB*/
    $(".tab-nav li a").click(function(tla){
        tla.preventDefault();
        $(".tab-nav li a").removeClass("active");
        $(this).addClass("active");
        $(".tab-ct").removeClass("show")
        $($(this).attr("href")).addClass("show");
    });
    $(".tab-nav-2 li a").click(function(tla){
        tla.preventDefault();
        $(".tab-nav-2 li a").removeClass("active");
        $(this).addClass("active");
        $(".tab-ct-2").removeClass("show")
        $($(this).attr("href")).addClass("show");
    });
    $(".tab-nav-3 li a").click(function(tla){
        tla.preventDefault();
        $(".tab-nav-3 li a").removeClass("active");
        $(this).addClass("active");
        $(".tab-ct-3").removeClass("show")
        $($(this).attr("href")).addClass("show");
    });

    /*ACCORDION*/
    $(".accordion .item h3").click(function(){
        $(".accordion .item").removeClass("active");
        $($(this).parent()).addClass("active");
    });

    /*CLOSING SCENE*/
    $(".goToClosingScene").click(function(cs){
        cs.preventDefault();
        $($(this).attr("href")).addClass("show");
    });
    $(".restart-bt").click(function(rb){
        rb.preventDefault();
        $($(this).parent().parent().parent()).removeClass("show");
        $(".prolog").removeClass("scene-closed");
        $(".prolog").show();
        $(".prolog .text").show();
        $(".cockpit").addClass("active");
    });
}); 