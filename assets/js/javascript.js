window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("mooveSlide1").className = "slideInLeft animated";
        document.getElementById("mooveSlide1").style.display = "block";
      } else {
        document.getElementById("mooveSlide1").style.display = "none";
      }

    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        document.getElementById("mooveSlide2").className = "slideInRight animated";
        document.getElementById("mooveSlide2").style.display = "block";
      } else {
        document.getElementById("mooveSlide2").style.display = "none";
      }

    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
        document.getElementById("mooveSlide3").className = "slideInLeft animated";
        document.getElementById("mooveSlide3").style.display = "block";
      } else {
        document.getElementById("mooveSlide3").style.display = "none";
      }

    if (document.body.scrollTop > 3700 || document.documentElement.scrollTop > 3700) {
        document.getElementById("mooveSlide4").className = "slideInRight animated";
        document.getElementById("mooveSlide4").style.display = "block";
      } else {
        document.getElementById("mooveSlide4").style.display = "none";
      }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    }

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
