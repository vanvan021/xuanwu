//xuanwu.js
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



document.getElementById('myImage').addEventListener('click', function() {
    if (this.src.includes('image/vanvan.jpg')) {
      this.src = 'image/vanvan1dark.jpg'; // The new image that will be displayed after click
    } else {
      this.src = 'image/vanvan.jpg'; // This will set it back to the original image if clicked again
    }
  });


document.getElementById('myImage2').addEventListener('click', function() {
    if (this.src.includes('image/flower1.jpg')) {
    this.src = 'image/flower.jpg'; // The new image that will be displayed after click
    } else {
    this.src = 'image/flower1.jpg'; // This will set it back to the original image if clicked again
    }
});




const tags = document.querySelectorAll('.tag');

// Add a click event listener to each tag
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        alert(`You clicked on the ${tag.textContent} tag!`);
    });
});




/*document.querySelector('.scrolling-wrapper').addEventListener('mouseover', function() {
  this.style.animationPlayState = 'paused';
});
*/


document.querySelector('.scrolling-wrapper').addEventListener('mouseout', function() {
  this.style.animationPlayState = 'running';
});







document.addEventListener('DOMContentLoaded', (event) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust if needed, determines how much of the item must be visible
  });

  // Target all images with the class 'fade-in-scroll'
  const targets = document.querySelectorAll('.list');
  targets.forEach((target) => {
    observer.observe(target);
  });
});