$('.slider1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.slider2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dotsEach:true,
    autoplaySpeed:500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.slider3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoplaySpeed:500,
    dotsSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.indexEvent-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// faetured Project Slider

$('.aboutus-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// Township Slider1

$('.township-slider1').owlCarousel({
    loop:true,
    autoplaySpeed:300,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Township Slider1


// Township Slider1

$('.township-slider2').owlCarousel({
    loop:true,
    autoplaySpeed:300,
    margin:10,
    nav:true,
    autoplay:false,
    slideBy:1,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

// Township Slider1
$('.demo1').owlCarousel({
    loop:true,
    autoplaySpeed:300,
    margin:10,
    nav:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// Township Slider1


// Township Slider2
$('.demo1').owlCarousel({
    loop:true,
    autoplaySpeed:300,
    margin:10,
    nav:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// Township Slider2


// Township Slider3
$('.township-slider3').owlCarousel({
    loop:true,
    autoplaySpeed:300,
    margin:10,
    nav:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// Township Slider3

// Js of Township construction Tabs
// Show the first tab and hide the rest
$('.c-Gallery ul li:first-child').addClass('activetab');
$('.c-Gallery .tab-content').hide();
$('.c-Gallery .tab-content:first').show();

// Click function
$('.c-Gallery ul li').click(function(){
    $('.c-Gallery ul li').removeClass('activetab');
    $(this).addClass('activetab');
    $('.c-Gallery .tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});
// Js of Township construction Tabs




// Js of Township Gallery Tabs
// Show the first tab and hide the rest
$('.tGallery ul li:first-child').addClass('activetab');
$('.tGallery .tab-content').hide();
$('.tGallery .tab-content:first').show();

// Click function
$('.tGallery ul li').click(function(){
    $('.tGallery ul li').removeClass('activetab');
    $(this).addClass('activetab');
    $('.tGallery .tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});
// Js of Township Gallery Tabs


// Custome Sidebtn Logix
function myBtn(){
    var enqBtn=document.getElementById('sideEnq');
    var height=window.scrollY;
    
    if(height>200){
        enqBtn.classList.add('toggleSidebtn');
    }
    else{
        enqBtn.classList.remove('toggleSidebtn');
        
    }
}

// Custome Sidebtn Logix

