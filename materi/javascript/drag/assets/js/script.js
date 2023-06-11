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
const benar = '<span style="color : green;">Benar</span>';
const salah = '<span style="color : red;">Salah</span>';
// $(function(){
//     setInterval(cek, 1000);
// });

//marimencoba1
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

let bb1 = document.getElementById("bb1");
let bb2 = document.getElementById("bb2");
let bb3 = document.getElementById("bb3");

function cek1() {
  if (
    b1.innerText == "zat padat" &&
    b2.innerText == "zat cair" &&
    b3.innerText == "zat gas"
  ) {
    const jawabcek1 = document.getElementById("jawabcek1");
    jawabcek1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3" >
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Ketika dua kaleng atau gelas di hubungkan pada benang maka di sebut media pengantar melalui <span class="benar">zat padat</span>Satu gelas di hubungkan pada selang kecil maka di sebut media pengantar melalui<span class="benar">zat cair</span> satu buah wadah besar berisi air dan di masukan corong sebagian ujungnya pada wadah besar yang berisi air dan dengarkan saat kita pukul bagian wadah tersebut maka bisa di  sebut media pengantar melalui <span class="benar">zat gas</span>.
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
  const kzatpadat = document.getElementById("kzatpadat");
  const kzatcair = document.getElementById("kzatcair");
  const kzatgas = document.getElementById("kzatgas");
  const kmembias = document.getElementById("kmembias");
  const kdibiaskan = document.getElementById("kdibiaskan");
  const kcerminan = document.getElementById("kcerminan");
  kzatpadat.draggable = false;
  kzatcair.draggable = false;
  kzatgas.draggable = false;
  kmembias.draggable = false;
  kcerminan.draggable = false;
  kdibiaskan.draggable = false;
}

function repeatt2() {
  const kzatpadat = document.getElementById("kzatpadat");
  const kzatcair = document.getElementById("kzatcair");
  const kzatgas = document.getElementById("kzatgas");
  const kmembias = document.getElementById("kmembias");
  const kdibiaskan = document.getElementById("kdibiaskan");
  const kcerminan = document.getElementById("kcerminan");
  kzatpadat.draggable = true;
  kzatcair.draggable = true;
  kzatgas.draggable = true;
  kmembias.draggable = true;
  kcerminan.draggable = true;
  kdibiaskan.draggable = true;
  const jawabcek1 = document.getElementById("jawabcek1");
  jawabcek1.innerHTML = "";
  b1.innerText = "";
  b2.innerText = "";
  b3.innerText = "";
  const pilihan1 = document.getElementById("pilihan1");
  pilihan1.innerHTML = `<span id="kzatpadat" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">zat padat</span>
    <span id="kzatcair" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">zat cair</span>
    <span id="kzatgas" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">zat gas</span>
    <span id="kcerminan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">di bakar</span>
    <span id="kmembias" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">di siram</span>
    <span id="kdibiaskan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">dipantulkan</span>`;
}
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");

let ba1 = document.getElementById("ba1");
let ba2 = document.getElementById("ba2");
let ba3 = document.getElementById("ba3");
let ba4 = document.getElementById("ba3");
function cek2() {
  if (
    b1.innerText == "NADA" &&
    b2.innerText == "DESAH" &&
    b3.innerText == "TIMBRE" &&
    b4.innerText == "DENTUM"
  ) {
    const jawabcek2 = document.getElementById("jawabcek2");
    jawabcek2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3" >
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Ketika dua kaleng atau gelas di hubungkan pada benang maka di sebut media pengantar melalui <span class="benar">NADA</span>Satu gelas di hubungkan pada selang kecil maka di sebut media pengantar melalui<span class="benar">DESAH</span> satu buah wadah besar berisi air dan di masukan corong sebagian ujungnya pada wadah besar yang berisi air dan dengarkan saat kita pukul bagian wadah tersebut maka bisa di  sebut media pengantar melalui <span class="benar">TIMBRE</span>. Ketika dua kaleng atau gelas di hubungkan pada benang maka di sebut media pengantar melalui <span class="benar">DENTUM</span>
                            </div>`;
  } else {
    const jawabcek2 = document.getElementById("jawabcek2");
    jawabcek2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan ulangi dan coba jawab lagi
                            </div>`;
  }
  const knada = document.getElementById("knada");
  const kdesah = document.getElementById("kdesah");
  const ktimbre = document.getElementById("ktimbre");
  const kdentum = document.getElementById("kdentum");

  knada.draggable = false;
  kdesah.draggable = false;
  ktimbre.draggable = false;
  kdentum.draggable = false;
}

function repeatt3() {
  const knada = document.getElementById("knada");
  const kdesah = document.getElementById("kdesah");
  const ktimbre = document.getElementById("ktimbre");
  const kdentum = document.getElementById("kdentum");

  knada.draggable = true;
  kdesah.draggable = true;
  ktimbre.draggable = true;
  kdentum.draggable = true;

  const jawabcek2 = document.getElementById("jawabcek2");
  jawabcek2.innerHTML = "";
  a1.innerText = "";
  a2.innerText = "";
  a3.innerText = "";
  a4.innerText = "";
  const pilihan2 = document.getElementById("pilihan2");
  pilihan2.innerHTML = `<span id="knada" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">NADA</span>
    <span id="kdesah" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">DESAH</span>
    <span id="ktimbre" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">TIMBRE</span>
    <span id="kdentum" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">DENTUM</span>
    <span id="kmembias" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">membias</span>
    <span id="kdibiaskan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">dipantulkan</span>`;
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
