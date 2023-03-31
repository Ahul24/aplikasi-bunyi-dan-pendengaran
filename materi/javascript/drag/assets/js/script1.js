const video = document.querySelector("video");

video.onended = function () {
  document.getElementById("latihanhide").hidden = false;
};

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

let bsuling = document.getElementById("bsuling");
let ssuling = document.getElementById("ssuling");

let bgitar = document.getElementById("bgitar");
let sgitar = document.getElementById("sgitar");

let bbass = document.getElementById("bbass");
let sbass = document.getElementById("sbass");

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
    tarik.innerText == "SulingGitarPerkusi" ||
    tarik.innerText == "PerkusiGitarSuling" ||
    tarik.innerText == "GitarPerkusiSuling"
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
