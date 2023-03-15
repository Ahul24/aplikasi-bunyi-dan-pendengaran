function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

let bsetrika = document.getElementById("bsetrika");
let ssetrika = document.getElementById("ssetrika");

let bkipas = document.getElementById("bkipas");
let skipas = document.getElementById("skipas");

let bneon = document.getElementById("bneon");
let sneon = document.getElementById("sneon");

let bpijar = document.getElementById("bpijar");
let spijar = document.getElementById("spijar");

let bsolder = document.getElementById("bsolder");
let ssolder = document.getElementById("ssolder");

let bpemanas = document.getElementById("bpemanas");
let spemanas = document.getElementById("spemanas");

// $(function(){
//     setInterval(cek, 1000);
// });
const benar = '<span style="color : white;">Benar</span>';
const salah = '<span style="color : white;">Salah</span>';

let tarik = document.getElementById("tarik");

function cekKel() {
  if (
    tarik.innerText == "sulinggitarbass" ||
    tarik.innerText == "bassgitarsuling" ||
    tarik.innerText == "gitarbasssuling"
  ) {
    const jawabKel = document.getElementById("jawabKel");
    jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:blue;color:white;">
                          Jawaban Anda ${benar}<br>
                          <div class="pembahasan2">
                          <u>Pembahasan :</u>
                          </div>
                          Dari video tersebut kita dapat mengetahui bahwa : Lampu neon dan lampu pijar merupakan contoh dari perubahan energi listrik menjadi energi cahaya
                          </div>`;
  } else {
    const jawabKel = document.getElementById("jawabKel");
    jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                          Jawaban Anda ${salah}<br>
                          <div class="pembahasan2">
                          
                          </div>
                          Silahkan coba lagi
                          </div>`;
  }
}
