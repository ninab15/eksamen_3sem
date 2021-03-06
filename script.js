document.addEventListener("DOMContentLoaded", start);

function start() {



    gsap.registerPlugin(ScrollTrigger);


    gsap.from(".stagger", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".stagger",
            start: "top bottom",
            end: "top top",
            markers: false,
        }

    });


    gsap.from(".stagger2", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".stagger2",
            start: "top bottom",
            end: "top top",
            markers: false,
        }

    });

    gsap.from(".stagger3", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".stagger3",
            start: "top bottom",
            end: "top top",
            markers: false,
        }

    });

    gsap.from(".hero-h1", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: 0.5,

    });

    let config = {
        strength: 1
    };

    gsap.set(".ikoner", {
        xPercent: -10,
        x: -1
    });

    gsap.to(".ikoner", {
        repeat: -1,
        yoyo: true,
        x: 1,
        duration: 0.2,
        ease: "power1.inOut",
        modifiers: {
            x: gsap.utils.unitize(value => value * config.strength, "px")
        }
    });

    gsap.to(config, {
        strength: 5,
        ease: "none",
        scrollTrigger: {
            // defaults to using the window as the trigger, starting at the top, ending at the bottom.
            scrub: true
        }
    });

}

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 2000);
