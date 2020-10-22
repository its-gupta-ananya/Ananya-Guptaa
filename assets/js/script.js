$(document).ready(function(){
    $(window).scroll(function () {
    if(this.scrollY > 20){
        $('.navbar').addClass('sticky');
    }else{
        $('.navbar').removeClass('sticky');
    }
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
    if($('#About').is(':visible'))
    {
        $('.col .right').addClass('animate__animated animate__bounceInUp');
    }
    });
    

   $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
    });
    
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // $('.About').activeElement(function()
    // {
    //     $('.col .right').addClass('animate__animated animate__bounceInUp');
    // })
    
    $('Project-content .card .box').hover(function(){
        $('.deets').css("height","auto");
    })


    var typed = new Typed(".typing ",{
        strings:["Programmer.", "Web Developer.", "Debator."],
        typeSpeed: 100,
        backspeed: 60,
        loop: true
    });



    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
})