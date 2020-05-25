// RESPONSIVE MENU

document.getElementById('onpenMenu').addEventListener('click', () => {
    mySidepanel.style.transform = 'translatex(0)';
});

document.getElementById('closeMenu').addEventListener('click', () => {
    mySidepanel.style.transform = 'translatex(-100%)';
});


document.getElementById('search').addEventListener('click', () => {
    searchResponsive.style.transform = 'translatex(0%)';
});

document.getElementById('closebtn').addEventListener('click', () => {
    searchResponsive.style.transform = 'translatex(100%)';
});




// DROP-CATEGORY-RESPONSIVE
function dropCategory() {
    document.getElementById("sub-menu").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("sub-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('.sidepanel .show')) {
                openDropdown.classList.remove('.sidepanel .show');
            }
        }
    }
}

// ROTATE-ICON
$(".rotate-icon").click(function() {
    $(".rotate").toggleClass("down");
})

// TRADEMARK
// SLIDER
$('.owl-trademark').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 7
        }
    }
})
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})


// BACK TO TOP
window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

$('#back-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 300);
});

// NIVO SLIDER
$(window).load(function() {
    return $("#slider").nivoSlider({
        pauseTime: 2500,
        directionNav: true
    });
});

// ANIMATION-PRODUCT
// Column-1
$(window).scroll(function() {
    $(".list-product .col-md-4:nth-child(1)").each(function() {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 500) {
            $(this).addClass("slide-product-column-1");
        }
    });
});

// Column-2
$(window).scroll(function() {
    $(".list-product .col-md-4:nth-child(2)").each(function() {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 500) {
            $(this).addClass("slide-product-column-2");
        }
    });
});

// Column-3
$(window).scroll(function() {
    $(".list-product .col-md-4:nth-child(3)").each(function() {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 500) {
            $(this).addClass("slide-product-column-3");
        }
    });
});