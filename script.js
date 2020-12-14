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

gsap.registerPlugin(ScrollTrigger);


window.onscroll = function () {
    scrollIndicator()
};

function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
}



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
