$(document).ready(function () {
    AOS.init();
    // new WOW().init();
})


gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        start: "center center",
        end: "bottom top",
        scrub: 1,
        pin: true
    }
})
    .from(".text1", {
        // x: innerWidth * 1,
        opacity: 0,

    })
    .from(".text2,.text1", {
        // x: innerWidth * 1.8
        opacity: 0,
    })
    .from(".text3,.text1,.text2", {
        // x: innerWidth * 1.5
        opacity: 0,
    })
    .from(".text4,.text2,.text3,.text1", {
        // x: innerWidth * -1
        opacity: 0,
    })
    .from(".text5,.text3", {
        // x: innerWidth * -1.5
        opacity: 0,
    })
    .from(".text6", {
        // y: innerHeight * 1.5
    })
    .from(".angkax", {
        y: innerHeight * 1,
        rotate: 360
    }).from(".angkax1", {
        y: innerHeight * 1,

    })

