AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})

var swiperAesthetics = new Swiper(".aesthetics_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 800,
    pagination: {
        el: "#aesthetics_pagination",
        clickable: true,
    },
})

var swiperLife = new Swiper(".life_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: "#life-next",
        prevEl: "#life-prev",
    },
    speed: 800,
    pagination: {
        el: "#life_pagination",
        clickable: true,
    },
})

var swiperArtchitecture = new Swiper(".architecture_swiper", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
})

$(".architecture_btn button").click(function(){
    $(this).addClass("active").parents(".architecture_btn").siblings(".architecture_btn").find("button").removeClass("active");
    let li_index = $(this).parents(".architecture_btn").index();
    swiperArtchitecture.slideTo(li_index, 1000, true);
})





var swiperSweetlife = new Swiper(".sweetlife_swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".core_swiper-next",
        prevEl: ".core_swiper-prev",
    },
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    allowTouchMove: false,
    breakpoints: {
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    }
})

var swiperSchoolText = new Swiper(".school_swiper-text", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#school_swiper-next",
        prevEl: "#school_swiper-prev",
    },
    pagination: {
        el: "#school_swiper-pagination",
        clickable: true,
    },
})

var swiperSchoolPic = new Swiper(".school_swiper-pic", {
    slidesPerView: 1,
    speed: 800,
    navigation: {
        nextEl: "#school_swiper-next",
        prevEl: "#school_swiper-prev",
    },
    pagination: {
        el: "#school_swiper-pagination",
        clickable: true,
    },
})

$(".school_tab_item").click(function(){
    $(this).addClass("active").siblings(".school_tab_item").removeClass("active");
    let li_index = $(this).index();
    swiperSchoolPic.slideTo(li_index, 1000, true);
    swiperSchoolText.slideTo(li_index, 1000, true);
})

var swiperGreen = new Swiper(".green_swiper", {
    slidesPerView: 1,
    speed: 800,
    navigation: {
        nextEl: "#green_swiper-next",
        prevEl: "#green_swiper-prev",
    },
    pagination: {
        el: "#green_swiper-pagination",
        clickable: true,
    },
})

$(".green_tab_item").click(function(){
    $(this).addClass("active").siblings(".green_tab_item").removeClass("active");
    let li_index = $(this).index();
    swiperGreen.slideTo(li_index, 1000, true);
})

var swiperBuildingPic = new Swiper(".building_swiper-pic", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#building_swiper_next",
        prevEl: "#building_swiper_prev",
    },
    pagination: {
        el: "#building_swiper_pagination",
        clickable: true,
    },
})

var swiperBuildingText = new Swiper(".building_swiper-text", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#building_swiper_next",
        prevEl: "#building_swiper_prev",
    },
    pagination: {
        el: "#building_swiper_pagination",
        clickable: true,
    },
})

var swiperArrangePic = new Swiper(".arrange_swiper-pic", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#arrange_swiper_next",
        prevEl: "#arrange_swiper_prev",
    },
    pagination: {
        el: "#arrange_swiper_pagination",
        clickable: true,
    },
})

var swiperArrangeText = new Swiper(".arrange_swiper-text", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#arrange_swiper_next",
        prevEl: "#arrange_swiper_prev",
    },
    pagination: {
        el: "#arrange_swiper_pagination",
        clickable: true,
    },
})

function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        To : "zhulixdesign@gmail.com, zhuli705098@gmail.com, a3202443aa@yahoo.com.tw, dtweryd@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "航綻甜心預約賞屋",
        Body : "姓名:" + document.getElementById("name").value
                + "<br>電話:" + document.getElementById("phone").value
                + "<br>需求房型:" + document.getElementById("type").value
                + "<br>聯繫內容:" + document.getElementById("content").value
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}

$(window).on("resize", function() {
    mapResize();
})
mapResize();

function mapResize() {
    if($(window).width() <= 991) {
        let mapWidth = $(".map_wrap_pic").height() * 1.79;
        let windowWidth = $(window).width();
        let mapX = (mapWidth - windowWidth ) / 2;
        $(".map_wrap").animate({scrollLeft: mapX});
    }
}