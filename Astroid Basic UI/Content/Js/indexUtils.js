const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const orta = document.querySelector(".ortaDirek");

left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});

left.addEventListener("mouseenter", () => {
    orta.classList.add("ortaLeft");
});

left.addEventListener("mouseleave", () => {
    orta.classList.remove("ortaLeft");
});

right.addEventListener("mouseenter", () => {
    orta.classList.add("ortaRight");
});

right.addEventListener("mouseleave", () => {
    orta.classList.remove("ortaRight");
});

right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});
