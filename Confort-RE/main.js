$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      600: {
        items: 2,
        loop: true,
      },
      1000: {
        items: 3,
        loop: true,
      },
    },
  });
  $("#next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $("#prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

//COUNTER JS

// Get the why section to check if users have scrolled to it
const why = document.getElementById("why-choose-us");

// Create a function to count the values with three params: The element to change, the number to count to and the duration of the counter
const counter = (element, number, duration) => {
  let num = 0;
  let update = document.getElementById(element);
  let counter = setInterval(() => {
    update.innerText = `${num++}`;
    if (num === number) {
      clearInterval(counter);
    }
  }, duration);
};

// This checks if it has already counted
let hasxecuted = false;

window.onscroll = function () {
  // Get the position and size of the element
  const rect = why.getBoundingClientRect();
  // Check if the top of the element is in the viewport
  if (rect.top <= window.innerHeight && rect.bottom >= 0 && !hasxecuted) {
    // set the has executed to true
    hasxecuted = true;
    counter("customers", 30, 70);
    counter("units", 150, 70);
    counter("units2", 200, 70);
  }
};
