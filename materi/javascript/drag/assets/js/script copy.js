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
let b4 = document.getElementById("b4");

let bb1 = document.getElementById("bb1");
let bb2 = document.getElementById("bb2");
let bb3 = document.getElementById("bb3");
let bb4 = document.getElementById("bb4");

function cek1() {
  if (
    b1.innerText == "nada" &&
    b2.innerText == "dentum" &&
    b3.innerText == "timbre" &&
    b4.innerText == "membias"
  ) {
    const jawabcek1 = document.getElementById("jawabcek1");
    jawabcek1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3" >
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Ketika dua kaleng atau gelas di hubungkan pada benang maka di sebut media pengantar melalui <span class="benar">nada</span>Satu gelas di hubungkan pada selang kecil maka di sebut media pengantar melalui<span class="benar">dentum</span> satu buah wadah besar berisi air dan di masukan corong sebagian ujungnya pada wadah besar yang berisi air dan dengarkan saat kita pukul bagian wadah tersebut maka bisa di  sebut media pengantar melalui <span class="benar">timbre</span>.Ketika dua kaleng atau gelas di hubungkan pada benang maka di sebut media pengantar melalui <span class="benar">membias/span>
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
  const knada = document.getElementById("knada");
  const kdentum = document.getElementById("kdentum");
  const ktimbre = document.getElementById("ktimbre");
  const kmembias = document.getElementById("kmembias");
  const kdibiaskan = document.getElementById("kdibiaskan");
  const kcerminan = document.getElementById("kcerminan");
  knada.draggable = false;
  kdentum.draggable = false;
  ktimbre.draggable = false;
  kmembias.draggable = false;
  kcerminan.draggable = false;
  kdibiaskan.draggable = false;
}

function repeatt2() {
  const knada = document.getElementById("knada");
  const kdentum = document.getElementById("kdentum");
  const ktimbre = document.getElementById("ktimbre");
  const kmembias = document.getElementById("kmembias");
  const kdibiaskan = document.getElementById("kdibiaskan");
  const kcerminan = document.getElementById("kcerminan");
  knada.draggable = true;
  kdentum.draggable = true;
  ktimbre.draggable = true;
  kmembias.draggable = true;
  kcerminan.draggable = true;
  kdibiaskan.draggable = true;
  const jawabcek1 = document.getElementById("jawabcek1");
  jawabcek1.innerHTML = "";
  b1.innerText = "";
  b2.innerText = "";
  b3.innerText = "";
  b4.innerText = "";
  const pilihan1 = document.getElementById("pilihan1");
  pilihan1.innerHTML = `<span id="knada" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">nada</span>
    <span id="kdentum" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">dentum</span>
    <span id="ktimbre" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">timbre</span>
    <span id="kcerminan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">cerminan</span>
    <span id="kmembias" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">membias</span>
    <span id="kdibiaskan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">dipantulkan</span>`;
}
