const video = document.getElementById('#my-video');

window.addEventListener('load', function() {
  video.currentTime = 0;
  video.play();
});

video.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

        function showPopupGambar() {
          document.getElementById("popup-container").style.display = "block";
        }
        function hidePopupGambar() {
          document.getElementById("popup-container").style.display = "none";
        }