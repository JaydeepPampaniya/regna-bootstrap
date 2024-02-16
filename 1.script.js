document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("header");
  
    window.addEventListener("scroll", function () {
      var scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        navbar.style.backgroundColor = "black"; 
        navbar.style.opacity="0.6"
        navbar.style.transition="background-color 1s ease";
        navbar.style.position="stickey";

      }
      else{
        navbar.style.backgroundColor = "transparent"; 
        navbar.style.opacity="1";
      }
    });
  });

  var counters = [
    { id: 'counter1', stopValue: 509 },
    { id: 'counter2', stopValue: 1244 },
    { id: 'counter3', stopValue: 2011 },
    { id: 'counter4', stopValue: 57 }
];

function incrementNumber(counterObj) {
    counterObj.value++;
    document.getElementById(counterObj.id).innerHTML = counterObj.value;

 
    if (counterObj.value === counterObj.stopValue) {
        clearInterval(counterObj.intervalId);
    }
}


counters.forEach(function(counterObj) {
    counterObj.value = 0;
    counterObj.intervalId = setInterval(function() {
        incrementNumber(counterObj);
    }, 5);
});
