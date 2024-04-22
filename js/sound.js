//sound.js
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


document.getElementById('myImage').addEventListener('click', function() {
    if (this.src.includes('image/ear.jpg')) {
      this.src = 'image/eardark.jpg'; // The new image that will be displayed after click
    } else {
      this.src = 'image/ear.jpg'; // This will set it back to the original image if clicked again
    }
  });


  /*
  function playAudio() {
    var myAudio = document.getElementById("mySong");
    if (myAudio.paused) {
      myAudio.play();
    } else {
      myAudio.pause();
      myAudio.currentTime = 0;  // Optionally reset the song to the start
    }
  }
  */


  function playAudio(audioId) {
    var myAudio = document.getElementById(audioId);
    if (myAudio.paused) {
        myAudio.play();
    } else {
        myAudio.pause();
        myAudio.currentTime = 0; // Optionally reset the song to the start
    }

/*
    function playAudio(audioId) {
      var myAudio = document.getElementById(audioId);
      var playPauseButton = document.querySelector('.song-details button');

      if (myAudio.paused) {
          myAudio.play();
          playPauseButton.textContent = 'Pause';
      } else {
          myAudio.pause();
          playPauseButton.textContent = 'Play';
      }
  }
  */
}

