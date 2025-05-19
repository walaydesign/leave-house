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

$(".map_pic_img").click(function() {
    $(".map-popup").fadeIn(300).css("display","flex");
})

$(".map-popup").click(function (event) {
    var img = $(".map-popup_img");
    if (!img.is(event.target) && img.has(event.target).length === 0) {
        $(".map-popup").fadeOut(300);
    }
});





function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        // To : "zhulixdesign@gmail.com, zhuli705098@gmail.com, a3202443aa@yahoo.com.tw, dtweryd@gmail.com",
        To : "yl301114@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "青禾居預約賞屋",
        Body : "姓名:" + document.getElementById("name").value
            + "<br>聯絡電話:" + document.getElementById("phone").value
            + "<br>LINE ID:" + document.getElementById("line").value
            + "<br>居住地區:" + document.getElementById("area").value
            + "<br>留言:" + document.getElementById("message").value
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