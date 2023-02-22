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

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

let bb1 = document.getElementById("bb1");
let bb2 = document.getElementById("bb2");
let bb3 = document.getElementById("bb3");

function cek1() {
  if (
    b1.innerText == "memantul" &&
    b2.innerText == "terlihat" &&
    b3.innerText == "dipantulkan"
  ) {
    const jawabcek1 = document.getElementById("jawabcek1");
    jawabcek1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Ketika laser dinyalakan dan diarahkan menuju penggaris, cahaya laser akan terlihat <span class="benar">memantul</span> begitu juga saat kita keluar ruangan dengan membawa cermin yang diarahkan ke tembok, maka cahaya matahari akan <span class="benar">terlihat</span> di tembok. Dari kegiatan tersebut maka dapat disimpulkan bahwa cahaya memiliki sifat dapat <span class="benar">dipantulkan</span>.
                            </div>`;
  } else {
    const jawabcek1 = document.getElementById("jawabcek1");
    jawabcek1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan ulangi dan coba jawab lagi
                            </div>`;
  }
  const kterlihat = document.getElementById("kterlihat");
  const kmemantul = document.getElementById("kmemantul");
  const kdipantulkan = document.getElementById("kdipantulkan");
  const kmembias = document.getElementById("kmembias");
  const kdibiaskan = document.getElementById("kdibiaskan");
  const kcerminan = document.getElementById("kcerminan");
  kterlihat.draggable = false;
  kmemantul.draggable = false;
  kdipantulkan.draggable = false;
  kmembias.draggable = false;
  kcerminan.draggable = false;
  kdibiaskan.draggable = false;
}

function repeatt2() {
  const kterlihat = document.getElementById("kterlihat");
  const kmemantul = document.getElementById("kmemantul");
  const kdipantulkan = document.getElementById("kdipantulkan");
  const kmembias = document.getElementById("kmembias");
  const kdibiaskan = document.getElementById("kdibiaskan");
  const kcerminan = document.getElementById("kcerminan");
  kterlihat.draggable = true;
  kmemantul.draggable = true;
  kdipantulkan.draggable = true;
  kmembias.draggable = true;
  kcerminan.draggable = true;
  kdibiaskan.draggable = true;
  const jawabcek1 = document.getElementById("jawabcek1");
  jawabcek1.innerHTML = "";
  b1.innerText = "";
  b2.innerText = "";
  b3.innerText = "";
  const pilihan1 = document.getElementById("pilihan1");
  pilihan1.innerHTML = `<span id="kterlihat" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">terlihat</span>
    <span id="kdibiaskan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">dibiaskan</span>
    <span id="kmemantul" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">memantul</span>
    <span id="kcerminan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">cerminan</span>
    <span id="kmembias" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">membias</span>
    <span id="kdipantulkan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">dipantulkan</span>`;
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
