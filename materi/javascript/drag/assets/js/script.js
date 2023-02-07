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
  if (tarik.innerText == "GitarSuling" || tarik.innerText == "SulingGitar") {
    const jawabKel = document.getElementById("jawabKel");
    jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:blue;color:white;">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            KESIMPULAN
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

// window.onload = function awalMateri() {
//   document.getElementById("satu").hidden = false;
//   document.getElementById("dua").hidden = true;
//   document.getElementById("tiga").hidden = true;
//   document.getElementById("empat").hidden = true;
// };

// function satu2() {
//   document.getElementById("btnprev").classList.add("disabled");
//   document.getElementById("satu").hidden = false;
//   document.getElementById("btnsatu").classList.add("active");
//   document.getElementById("dua").hidden = true;
//   document.getElementById("btndua").classList.remove("active");
//   document
//     .getElementById("next")
//     .setAttribute("onClick", "javascript: dua2();");
// }

// function dua2() {
//   document.getElementById("btnprev").classList.remove("disabled");
//   document.getElementById("satu").hidden = true;
//   document.getElementById("btnsatu").classList.remove("active");
//   document.getElementById("dua").hidden = false;
//   document.getElementById("btndua").classList.add("active");
//   document
//     .getElementById("prev")
//     .setAttribute("onClick", "javascript: satu2();");
//   document.getElementById("mnext").hidden = false;
// }

// function satu3() {
//   document.getElementById("btnprev").classList.add("disabled");
//   document.getElementById("satu").hidden = false;
//   document.getElementById("btnsatu").classList.add("active");
//   document.getElementById("dua").hidden = true;
//   document.getElementById("btndua").classList.remove("active");
//   document.getElementById("tiga").hidden = true;
//   document.getElementById("btntiga").classList.remove("active");
//   document
//     .getElementById("next")
//     .setAttribute("onClick", "javascript: dua3();");
// }

// function dua3() {
//   document.getElementById("btnprev").classList.remove("disabled");
//   document.getElementById("satu").hidden = true;
//   document.getElementById("btnsatu").classList.remove("active");
//   document.getElementById("dua").hidden = false;
//   document.getElementById("btndua").classList.add("active");
//   document.getElementById("tiga").hidden = true;
//   document.getElementById("btntiga").classList.remove("active");
//   document
//     .getElementById("next")
//     .setAttribute("onClick", "javascript: tiga3();");
//   document
//     .getElementById("prev")
//     .setAttribute("onClick", "javascript: satu3();");
// }

// function tiga3() {
//   document.getElementById("btnprev").classList.remove("disabled");
//   document.getElementById("satu").hidden = true;
//   document.getElementById("btnsatu").classList.remove("active");
//   document.getElementById("dua").hidden = true;
//   document.getElementById("btndua").classList.remove("active");
//   document.getElementById("tiga").hidden = false;
//   document.getElementById("btntiga").classList.add("active");
//   document
//     .getElementById("prev")
//     .setAttribute("onClick", "javascript: dua3();");
//   document.getElementById("mnext").hidden = false;
// }

// function satu() {
//   document.getElementById("btnprev").classList.add("disabled");
//   document.getElementById("satu").hidden = false;
//   document.getElementById("btnsatu").classList.add("active");
//   document.getElementById("dua").hidden = true;
//   document.getElementById("btndua").classList.remove("active");
//   document.getElementById("tiga").hidden = true;
//   document.getElementById("btntiga").classList.remove("active");
//   document.getElementById("empat").hidden = true;
//   document.getElementById("btnempat").classList.remove("active");
//   document.getElementById("next").setAttribute("onClick", "javascript: dua();");
// }

// function dua() {
//   document.getElementById("btnprev").classList.remove("disabled");
//   document.getElementById("satu").hidden = true;
//   document.getElementById("btnsatu").classList.remove("active");
//   document.getElementById("dua").hidden = false;
//   document.getElementById("btndua").classList.add("active");
//   document.getElementById("tiga").hidden = true;
//   document.getElementById("btntiga").classList.remove("active");
//   document.getElementById("empat").hidden = true;
//   document.getElementById("btnempat").classList.remove("active");
//   document
//     .getElementById("next")
//     .setAttribute("onClick", "javascript: tiga();");
//   document
//     .getElementById("prev")
//     .setAttribute("onClick", "javascript: satu();");
// }
// function tiga() {
//   document.getElementById("btnprev").classList.remove("disabled");
//   document.getElementById("satu").hidden = true;
//   document.getElementById("btnsatu").classList.remove("active");
//   document.getElementById("dua").hidden = true;
//   document.getElementById("btndua").classList.remove("active");
//   document.getElementById("tiga").hidden = false;
//   document.getElementById("btntiga").classList.add("active");
//   document.getElementById("empat").hidden = true;
//   document.getElementById("btnempat").classList.remove("active");
//   document
//     .getElementById("next")
//     .setAttribute("onClick", "javascript: empat();");
//   document.getElementById("prev").setAttribute("onClick", "javascript: dua();");
// }

// function empat() {
//   document.getElementById("btnprev").classList.remove("disabled");
//   document.getElementById("satu").hidden = true;
//   document.getElementById("btnsatu").classList.remove("active");
//   document.getElementById("dua").hidden = true;
//   document.getElementById("btndua").classList.remove("active");
//   document.getElementById("tiga").hidden = true;
//   document.getElementById("btntiga").classList.remove("active");
//   document.getElementById("empat").hidden = false;
//   document.getElementById("btnempat").classList.add("active");
//   document.getElementById("btnnext").classList.add("disabled");
//   document
//     .getElementById("prev")
//     .setAttribute("onClick", "javascript: tiga();");
//   document.getElementById("mnext").hidden = false;
// }
