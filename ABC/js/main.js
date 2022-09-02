const carouselElems = {
    scroller: document.querySelector("#carousel"),
    buttonPrev: carousel.querySelector(".button-prev"),
    buttonNext: carousel.querySelector(".button-next"),
};

carouselElems.buttonPrev.addEventListener("click", () => {
    console.log("prev");
    carouselElems.scroller.scrollBy({ left: -440, top: 0, behavior: "smooth" });
});

carouselElems.buttonNext.addEventListener("click", () => {
    console.log('next')
    carouselElems.scroller.scrollBy({ left: 440, top: 0, behavior: "smooth" });
});

