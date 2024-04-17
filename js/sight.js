//sight.js
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

document.getElementById('myImage').addEventListener('click', function() {
    if (this.src.includes('image/eye.jpg')) {
      this.src = 'image/eyedark.jpg'; // The new image that will be displayed after click
    } else {
      this.src = 'image/eye.jpg'; // This will set it back to the original image if clicked again
    }
  });