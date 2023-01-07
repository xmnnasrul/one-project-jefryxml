const video = document.getElementById('#my-video');

window.addEventListener('load', function() {
  video.currentTime = 0;
  video.play();
});

video.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
