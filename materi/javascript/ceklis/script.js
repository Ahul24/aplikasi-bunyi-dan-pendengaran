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

let b1 = document.getElementById("b1");
let s1 = document.getElementById("s1");

let b2 = document.getElementById("b2");
let s2 = document.getElementById("s2");

let b3 = document.getElementById("b3");
let s3 = document.getElementById("s3");

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
const cek1 = document.querySelector(".cek1");

function cekB1() {
  s1.checked = false;
  b1.disabled = true;
  s1.disabled = true;
  cek1.innerHTML = benar;
}
function cekS1() {
  b1.checked = false;
  s1.disabled = true;
  b1.disabled = true;
  cek1.innerHTML = salah;
}
const cek2 = document.querySelector(".cek2");

function cekB2() {
  s2.checked = false;
  b2.disabled = true;
  s2.disabled = true;
  cek2.innerHTML = benar;
}
function cekS2() {
  b2.checked = false;
  s2.disabled = true;
  b2.disabled = true;
  cek2.innerHTML = salah;
}
const cek3 = document.querySelector(".cek3");

function cekB3() {
  s3.checked = false;
  b3.disabled = true;
  s3.disabled = true;
  cek3.innerHTML = benar;
}
function cekS3() {
  b3.checked = false;
  s3.disabled = true;
  b3.disabled = true;
  cek3.innerHTML = salah;
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
  b1.disabled = false;
  s1.disabled = false;
  b2.disabled = false;
  s2.disabled = false;
  b3.disabled = false;
  s3.disabled = false;
  b1.checked = false;
  s1.checked = false;
  b2.checked = false;
  s2.checked = false;
  b3.checked = false;
  s3.checked = false;

  cek1.innerHTML = " ";
  cek2.innerHTML = " ";
  cek3.innerHTML = " ";
}

let mouse = 0;

var t = setInterval(tes, 1000);
function mouseTes() {
  t = setInterval(tes, 1000);
}
function tes() {
  if (mouse < 300000) {
    mouse += 1000;
  } else {
    clearInterval(t);
    $("#mouseModal").modal("show");
  }
}

document.addEventListener("mouseout", async function (e) {
  if (!e) {
    console.log("Bergerak");
  } else {
    mouse = 0;
  }
});
