$(document).ready(function(){

    // navbar sticky script

    $(window).scroll(function() {
        if(this.scrollY > 5) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    // menu navbar active

   $(".menu-btn").click(function() {
        $(".navbar .menu").toggle(".active");
   });

    
    // navbar hiden script

    var lastScrollTop = 0;
        navbar = document.getElementById("navbar");
        window.addEventListener("scroll", function(){
            var scrollTop = window.pageYOffset || document
                .documentElement.scrollTop;
                if (scrollTop > lastScrollTop){
                    navbar.style.top = "-150px";
                } else {
                    navbar.style.top = "0";
                }
                lastScrollTop = scrollTop;
        })

    // typing Animation script

    var typed = new Typed(".typing", {
        strings: ["Web Developer Enthusiast", "UI/UX Enthusiast", "World Politics Enthusiast", "Historical Enthusiast"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

});