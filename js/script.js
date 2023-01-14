const video = document.getElementById("#my-video");
window.addEventListener("load", function () {
  video.currentTime = 0;
  video.play();
});

video.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);

var trigger = document.getElementById("#trigger");
var popup = document.getElementsByClassName(".popupt");

trigger.addEventListener("mouseover", function () {
  popup.style.display = "block";
  popup.style.mouse = "pointer";
});
trigger.addEventListener("mouseout", function () {
  popup.style.display = "none";
});
