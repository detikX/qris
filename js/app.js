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
        pin: true,
        // markers: true
    }
})
    .from(".text1", {
        x: innerWidth * 1,
        //opacity: 0,

    })


    .from(".text2", {
        x: innerWidth * -1.8
        //opacity: 0,
    })

    .from(".text3", {
        x: innerWidth * 1.5
        //opacity: 0,
    })
    .from(".text4", {
        x: innerWidth * -1
        //opacity: 0,
    })
    .from(".text5", {
        x: innerWidth * 1.5
        //opacity: 0,
    })
    .from(".text6", {
        x: innerWidth * -2
        //opacity: 0,
    })
    .from(".text7", {
        x: innerWidth * 2
        //opacity: 0,
    })




gsap.timeline({
    scrollTrigger: {
        trigger: ".box2",
        start: "center center",
        end: "bottom top",
        scrub: 1,
        pin: true,
        // markers: true
    }
})
    .from(".text-title1", {
        x: innerWidth * 1,
        //opacity: 0,

    })


    .from(".text-title2", {
        x: innerWidth * -1.8
        //opacity: 0,
    })
    .from(".gb-1", {
        x: innerWidth * 1,
        //opacity: 0,

    })


    .from(".gb-2", {
        x: innerWidth * -1.8
        //opacity: 0,
    })