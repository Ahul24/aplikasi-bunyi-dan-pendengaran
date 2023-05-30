function setCurTime(X) {
  if (X == 1) {
    video.currentTime = 5;
  } else if (X == 2) {
    video.currentTime = 12;
  } else if (X == 3) {
    video.currentTime = 29;
  } else if (X == 4) {
    video.currentTime = 45;
  } else if (X == 5) {
    video.currentTime = 65;
  } else if (X == 6) {
    video.currentTime = 121;
  }
}
$(function () {
  $('[data-toggle="popover"]').popover("show");
});

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

let btv = document.getElementById("bTV");
let stv = document.getElementById("sTV");

let bbel = document.getElementById("bbel");
let sbel = document.getElementById("sbel");

let bradio = document.getElementById("bradio");
let sradio = document.getElementById("sradio");

let bHP = document.getElementById("bHP");
let sHP = document.getElementById("sHP");

let bsenter = document.getElementById("bsenter");
let ssenter = document.getElementById("ssenter");

let bsatu = document.getElementById("bsatu");
let ssatu = document.getElementById("ssatu");

let bdua = document.getElementById("bdua");
let sdua = document.getElementById("sdua");

let btiga = document.getElementById("btiga");
let stiga = document.getElementById("stiga");

const benar = '<span style="color : green;">Benar</span>';
const salah = '<span style="color : red;">Salah</span>';

const cektv = document.querySelector(".cekTV");

function cekBTV() {
  stv.checked = false;
  btv.disabled = true;
  stv.disabled = true;
  cektv.innerHTML = benar;
}
function cekSTV() {
  btv.checked = false;
  stv.disabled = true;
  btv.disabled = true;
  cektv.innerHTML = salah;
}
const cekbel = document.querySelector(".cekbel");

function cekBbel() {
  sbel.checked = false;
  bbel.disabled = true;
  sbel.disabled = true;
  cekbel.innerHTML = benar;
}
function cekSbel() {
  bbel.checked = false;
  sbel.disabled = true;
  bbel.disabled = true;
  cekbel.innerHTML = salah;
}
const cekradio = document.querySelector(".cekradio");

function cekBradio() {
  sradio.checked = false;
  bradio.disabled = true;
  sradio.disabled = true;
  cekradio.innerHTML = benar;
}
function cekSradio() {
  bradio.checked = false;
  sradio.disabled = true;
  bradio.disabled = true;
  cekradio.innerHTML = salah;
}
const cekHP = document.querySelector(".cekHP");

function cekBHP() {
  sHP.checked = false;
  bHP.disabled = true;
  sHP.disabled = true;
  cekHP.innerHTML = benar;
}
function cekSHP() {
  bHP.checked = false;
  sHP.disabled = true;
  bHP.disabled = true;
  cekHP.innerHTML = salah;
}
const ceksenter = document.querySelector(".ceksenter");

function cekBsenter() {
  ssenter.checked = false;
  bsenter.disabled = true;
  ssenter.disabled = true;
  ceksenter.innerHTML = benar;
}
function cekSsenter() {
  bsenter.checked = false;
  ssenter.disabled = true;
  bsenter.disabled = true;
  ceksenter.innerHTML = salah;
}
const ceksatu = document.querySelector(".ceksatu");

function cekBsatu() {
  ssatu.checked = false;
  bsatu.disabled = true;
  ssatu.disabled = true;
  ceksatu.innerHTML = benar;
}
function cekSsatu() {
  bsatu.checked = false;
  ssatu.disabled = true;
  bsatu.disabled = true;
  ceksatu.innerHTML = salah;
}
const cekdua = document.querySelector(".cekdua");

function cekBdua() {
  sdua.checked = false;
  bdua.disabled = true;
  sdua.disabled = true;
  cekdua.innerHTML = benar;
}
function cekSdua() {
  bdua.checked = false;
  sdua.disabled = true;
  bdua.disabled = true;
  cekdua.innerHTML = salah;
}
const cektiga = document.querySelector(".cektiga");

function cekBtiga() {
  stiga.checked = false;
  btiga.disabled = true;
  stiga.disabled = true;
  cektiga.innerHTML = benar;
}
function cekStiga() {
  btiga.checked = false;
  stiga.disabled = true;
  btiga.disabled = true;
  cektiga.innerHTML = salah;
}
function repeat1() {
  btv.disabled = false;
  stv.disabled = false;
  bbel.disabled = false;
  sbel.disabled = false;
  bradio.disabled = false;
  sradio.disabled = false;
  bHP.disabled = false;
  sHP.disabled = false;
  bsenter.disabled = false;
  ssenter.disabled = false;

  btv.checked = false;
  stv.checked = false;
  bbel.checked = false;
  sbel.checked = false;
  bradio.checked = false;
  sradio.checked = false;
  bHP.checked = false;
  sHP.checked = false;
  bsenter.checked = false;
  ssenter.checked = false;

  cektv.innerHTML = " ";
  cekbel.innerHTML = " ";
  cekradio.innerHTML = " ";
  cekHP.innerHTML = " ";
  ceksenter.innerHTML = " ";
}
function repeat2() {
  bsatu.disabled = false;
  ssatu.disabled = false;
  bdua.disabled = false;
  sdua.disabled = false;
  btiga.disabled = false;
  stiga.disabled = false;

  bsatu.checked = false;
  ssatu.checked = false;
  bdua.checked = false;
  sdua.checked = false;
  btiga.checked = false;
  stiga.checked = false;

  ceksatu.innerHTML = " ";
  cekdua.innerHTML = " ";
  cektiga.innerHTML = " ";
}
