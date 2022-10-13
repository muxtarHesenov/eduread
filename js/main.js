const next = document.getElementById('next');
const prev = document.getElementById('prev');
const sliderBox = document.getElementById('slider-box');

let left = 0

next.addEventListener("click", () => {
    if (left === 0) {
        sliderBox.style.left = left - 360 + "px";
        left = left - 360;
    } else if (left === -360) {
        sliderBox.style.left = left - 360 + "px";
        left = left - 360;
    } else if (left === -720) {
        sliderBox.style.left = left + 720 + "px";
        left = 0
    }
});

prev.addEventListener("click", () => {
    if (left < 0) {
        sliderBox.style.left = left + 360 + "px"
        left = left + 360
    } else if (left === 0) {
        sliderBox.style.left = left - 720 + "px"
        left = left - 720
    }
});
