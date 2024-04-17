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