$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      responsive:{
          0:{
              items:1,
              loop:true,
          },
          600:{
              items:2,
              loop:true,
          },
          1000:{
              items:3,
              loop:true,
          }
      }
    });
    $('#next').click(function() {
        owl.trigger('next.owl.carousel');
      });
    
      $('#prev').click(function() {
        owl.trigger('prev.owl.carousel');
      });
  });
  
//COUNTER JS
let ourCustomer = document.querySelector('#customers');
let ourUnits = document.querySelector('#units');
let ourUnitsTwo = document.querySelector('#units2');

let count = 0;

// window.addEventListener("onload", maincounter())

function maincounter() {
   let counterOne = setInterval(() => {
        if (count == 100) {
            clearInterval(counterOne)
        }else{
            ourCustomer.textContent = `${count++}k`;
        }
    }, 100);

    let counterTwo =setInterval(() => {
        if (count == 30) {
            clearInterval(counterTwo)
        }else{
            ourUnits.textContent = `${count++}k`;
        }
    }, 100);
    let counterThree =setInterval(() => {
        if (count == 20) {
            clearInterval(counterThree)
        }else{
            ourUnitsTwo.textContent = `${count++}k`;
        }
    }, 100);
}