$(document).ready(function () {
  $(".kolom").hide();
  $(".deret").hide();

  // document.getElementById('videoo').addEventListener('ended',myHandler,false);

  // function myHandler(e) {
  //   $('.kolom').show(100);
  //   $('.deret').show(1000);
  //   $('.first2').hide(100);
  // }
});

//halaman 1
function sal() {
  document.getElementById("a1").style.display = "none";
  document.getElementById("s1").style.display = "block";
}
function ben() {
  document.getElementById("a1").style.display = "block";
  document.getElementById("s1").style.display = "none";
  document.getElementsByClassName("kes1")[0].style.display = "block";
}

function sal2() {
  document.getElementById("a2").style.display = "none";
  document.getElementById("s2").style.display = "block";
}

function ben2() {
  document.getElementById("a2").style.display = "block";
  document.getElementById("s2").style.display = "none";
  document.getElementsByClassName("hil2")[0].style.display = "block";
}

function sal3() {
  document.getElementById("a3").style.display = "none";
  document.getElementById("s3").style.display = "block";
}

function ben3() {
  document.getElementById("a3").style.display = "block";
  document.getElementById("s3").style.display = "none";
  document.getElementsByClassName("hil")[0].style.display = "block";
}

//Halaman 2 atas
var vid = document.getElementById("videoo");
var val = document.getElementById("speed");

// function slow() {
//     vid.playbackRate = 0.5;
// }

// function normal() {
//     vid.playbackRate = 1;
// }

// function fast() {
//     vid.playbackRate = 2;
// }

function salah() {
  document.getElementById("a1").style.display = "none";
  document.getElementById("s1").style.display = "block";
}
function benar() {
  document.getElementById("a1").style.display = "block";
  document.getElementById("s1").style.display = "none";
  // document.getElementById('nomor2').style.display = 'block';
  document.getElementById("false").style.display = "none";
  document.getElementById("false1").style.display = "none";
  document.getElementById("false2").style.display = "none";
}

function salah2() {
  document.getElementById("a2").style.display = "none";
  document.getElementById("s2").style.display = "block";
}

function benar2() {
  document.getElementById("a2").style.display = "block";
  document.getElementById("s2").style.display = "none";
  // document.getElementById('nomor3').style.display = 'block';
  document.getElementById("false3").style.display = "none";
  document.getElementById("false4").style.display = "none";
  document.getElementById("false5").style.display = "none";
}

function salah3() {
  document.getElementById("a3").style.display = "none";
  document.getElementById("s3").style.display = "block";
}

function benar3() {
  document.getElementById("a3").style.display = "block";
  document.getElementById("s3").style.display = "none";
  document.getElementById("false6").style.display = "none";
  document.getElementById("false7").style.display = "none";
  document.getElementById("false8").style.display = "none";
  // document.getElementById('nomor4').style.display = 'block';
}

//Halaman 2 bawah
function negatif() {
  cek1.src = "../../img/benar.png";
  document.getElementById("aa1").style.display = "none";
  document.getElementById("aa3").style.display = "none";
}

function positif() {
  cek1.src = "../../img/salah.png";
  // document.getElementById('aa2').style.display = 'none';
  // document.getElementById('aa3').style.display = 'inline-block';
  document.getElementById("aa3").style.display = "block";
}

function negatif2() {
  cek2.src = "../../img/benar.png";
  document.getElementById("ab1").style.display = "none";
  document.getElementById("ab3").style.display = "none";
}

function positif2() {
  cek2.src = "../../img/salah.png";
  document.getElementById("ab3").style.display = "block";
}

function negatif3() {
  cek3.src = "../../img/salah.png";
  document.getElementById("ac3").style.display = "block";
}

function positif3() {
  cek3.src = "../../img/benar.png";
  document.getElementById("ac2").style.display = "none";
  document.getElementById("ac3").style.display = "none";
}

function negatif4() {
  cek4.src = "../../img/benar.png";
  document.getElementById("ad1").style.display = "none";
  document.getElementById("ad3").style.display = "none";
}

function positif4() {
  cek4.src = "../../img/salah.png";
  document.getElementById("ad3").style.display = "block";
}

function negatif5() {
  cek5.src = "../../img/salah.png";
  document.getElementById("ae3").style.display = "block";
}

function positif5() {
  cek5.src = "../../img/benar.png";
  document.getElementById("ae2").style.display = "none";
  document.getElementById("ae3").style.display = "none";
}

function negatif0() {
  cekk.src = "../../img/salah.png";
  document.getElementById("ac0").style.display = "block";
}

function positif0() {
  cekk.src = "../../img/benar.png";
  document.getElementById("ab0").style.display = "none";
  document.getElementById("ac0").style.display = "none";
}

$(".inputan").bind("keyup blur", function () {
  var node = $(this);
  node.val(node.val().replace(/[^a-zA-Z\s]/g, ""));
});

// slide

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("soalnya");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeuy", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeuy";
}
