function lat1(){
   var V=document.getElementById('V').value;
   var V2=document.getElementById('V2').value;
   var R=document.getElementById('R').value;
   var R2=document.getElementById('R2').value;
   var t=document.getElementById('t').value;
   var sekon =document.getElementById('sekon').value;
   var sekon2 =document.getElementById('sekon2').value;
   var W=document.getElementById('W').value;
   var W2=document.getElementById('W2').value;
   var Wresult=(((V2*V2)/R2)*sekon2);
   console.log(Wresult);
   if (V!=220) {
      document.getElementById('V').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('V').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (V2!=220) {
      document.getElementById('V2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('V2').style="border:3px solid green; font-size:15px; text-align:center; "
   }
   
   if (R!=1000) {
      document.getElementById('R').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('R').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (R2!=1000) {
      document.getElementById('R2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('R2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (t!=2) {
      document.getElementById('t').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('t').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (sekon!=120) {
      document.getElementById('sekon').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('sekon').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (sekon2!=120) {
      document.getElementById('sekon2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('sekon2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (W!=Wresult&&W2!=Wresult) {
      document.getElementById('W').style="border:3px solid red; font-size:15px; text-align:center; "
      document.getElementById('W2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('W').style="border:3px solid green; font-size:15px; text-align:center; "
      document.getElementById('W2').style="border:3px solid green; font-size:15px; text-align:center; "
   }
}

function lat2(){
   var V3=document.getElementById('V3').value;
   var I=document.getElementById('I').value;
   var t2=document.getElementById('t2').value;
   var W3=document.getElementById('W3').value;
   var a1=document.getElementById('a1').value;
   var a2=document.getElementById('a2').value;
   var a3=document.getElementById('a3').value;
   var b1=document.getElementById('b1').value;
   var b2=document.getElementById('b2').value;
   var b3=document.getElementById('b3').value;

   var Wresult2=(V3*I*t2);
   console.log(Wresult2);

   if (V3!=12) {
      document.getElementById('V3').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('V3').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (I!=0.75) {
      document.getElementById('I').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('I').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (t2!=60) {
      document.getElementById('t2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('t2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (a1!='V') {
      document.getElementById('a1').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('a1').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (a2!='I') {
      document.getElementById('a2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('a2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (a3!='t') {
      document.getElementById('a3').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('a3').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (b1!=12) {
      document.getElementById('b1').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('b1').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (b2!=0.75) {
      document.getElementById('b2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('b2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (b3!=60) {
      document.getElementById('b3').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('b3').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (W3!=Wresult2) {
      document.getElementById('W3').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('W3').style="border:3px solid green; font-size:15px; text-align:center; "
   }
}

function lat3(){
   var P=document.getElementById('P').value;
   var P2=document.getElementById('P2').value;
   var I2=document.getElementById('I2').value;
   var I3=document.getElementById('I3').value;
   var V4=document.getElementById('V4').value;

   var Vresult=(P2/I3);
   console.log(Vresult);

   if (P!=25) {
      document.getElementById('P').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('P').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (P2!=25) {
      document.getElementById('P2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('P2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (I2!=0.2) {
      document.getElementById('I2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('I2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (I3!=0.2) {
      document.getElementById('I3').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('I3').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (V4!=Vresult) {
      document.getElementById('V4').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('V4').style="border:3px solid green; font-size:15px; text-align:center; "
   }
}

function lat4(){
   var V5=document.getElementById('V5').value;
   var P3=document.getElementById('P3').value;
   var t3=document.getElementById('t3').value;
   var I4=document.getElementById('I4').value;
   var c1=document.getElementById('c1').value;
   var c2=document.getElementById('c2').value;
   var d1=document.getElementById('d1').value;
   var d2=document.getElementById('d2').value;

   var Iresult=(P3/V5);
   console.log(Iresult);

   if (V5!=220) {
      document.getElementById('V5').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('V5').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (P3!=300) {
      document.getElementById('P3').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('P3').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (t3!=300) {
      document.getElementById('t3').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('t3').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (c1!='V') {
      document.getElementById('c1').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('c1').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (c2!='I') {
      document.getElementById('c2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('c2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if ((d1!='P')&&(d1!='p')) {
      document.getElementById('d1').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('d1').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if ((d2!='V')&&(d2!='v')) {
      document.getElementById('d2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('d2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (I4!=1.36) {
      document.getElementById('I4').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('I4').style="border:3px solid green; font-size:15px; text-align:center; "
   }
}

function lat5(){
   var V6=document.getElementById('V6').value;
   var P4=document.getElementById('P4').value;
   var t4=document.getElementById('t4').value;
   var H=document.getElementById('H').value;
   var jam=document.getElementById('jam').value;
   var jam2=document.getElementById('jam2').value;
   var K=document.getElementById('K').value;
   var K2=document.getElementById('K2').value;
   var K3=document.getElementById('K3').value;
   
   var W5=document.getElementById('W5').value;
   var W6=document.getElementById('W6').value;
   
   var B2=document.getElementById('B2').value;
   

   var Bresult=(W6*K3);
   console.log(Bresult);

   if (V6!=220) {
      document.getElementById('V6').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('V6').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (P4!=1) {
      document.getElementById('P4').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('P4').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (t4!=10) {
      document.getElementById('t4').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('t4').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (H!=30) {
      document.getElementById('H').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('H').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (V6!=220) {
      document.getElementById('V6').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('V6').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (jam!=300) {
      document.getElementById('jam').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('jam').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (jam2!=300) {
      document.getElementById('jam2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('jam2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (K!=200) {
      document.getElementById('K').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('K').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (K2!=1) {
      document.getElementById('K2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('K2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (K3!=200) {
      document.getElementById('K3').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('K3').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (W5!=300) {
      document.getElementById('W5').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('W5').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (W6!=300) {
      document.getElementById('W6').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('W6').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (B2!=Bresult) {
      document.getElementById('B2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('B2').style="border:3px solid green; font-size:15px; text-align:center; "
   }
}

function lat6(){
   var P5=document.getElementById('P5').value;
   var t5=document.getElementById('t5').value;
   var W7=document.getElementById('W7').value;
   var W8=document.getElementById('W8').value;
   var L=document.getElementById('L').value;
   var L2=document.getElementById('L2').value;
   var e1=document.getElementById('e1').value;
   var e2=document.getElementById('e2').value;
   var f1=document.getElementById('f1').value;
   var f2=document.getElementById('f2').value;
   
   if (P5!=25) {
      document.getElementById('P5').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('P5').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (L!=5) {
      document.getElementById('L').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('L').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (L2!=125) {
      document.getElementById('L2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('L2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if ((e1!='P')&&(e1!='p')) {
      document.getElementById('e1').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('e1').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (e2!='t') {
      document.getElementById('e2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('e2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (f1!=125) {
      document.getElementById('f1').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('f1').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (f2!=10) {
      document.getElementById('f2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('f2').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (t5!=10) {
      document.getElementById('t5').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('t5').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (W7!=1250) {
      document.getElementById('W7').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('W7').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (W8!=1.25) {
      document.getElementById('W8').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('W8').style="border:3px solid green; font-size:15px; text-align:center; "
   }
}

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

let bsetrika = document.getElementById('bsetrika');
let ssetrika = document.getElementById('ssetrika');

let bkipas = document.getElementById('bkipas');
let skipas = document.getElementById('skipas');

let bneon = document.getElementById('bneon');
let sneon = document.getElementById('sneon');

let bpijar = document.getElementById('bpijar');
let spijar = document.getElementById('spijar');

let bsolder = document.getElementById('bsolder');
let ssolder = document.getElementById('ssolder');

let bpemanas = document.getElementById('bpemanas');
let spemanas = document.getElementById('spemanas');


// $(function(){
//     setInterval(cek, 1000);
// });
const benar = '<span style="color : white;">Benar</span>'
const salah = '<span style="color : white;">Salah</span>'




let tarik = document.getElementById('tarik');


function cekKel(){
    if ((tarik.innerText == 'Lampu neonLampu pijar')||(tarik.innerText == 'Lampu pijarLampu neon')) {
        const jawabKel = document.getElementById('jawabKel');
        jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:blue;color:white;">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Dari video tersebut kita dapat mengetahui bahwa : Lampu neon dan lampu pijar merupakan contoh dari perubahan energi listrik menjadi energi cahaya
                            </div>`;  
    } else {
        const jawabKel = document.getElementById('jawabKel');
        jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            
                            </div>
                            Silahkan coba lagi
                            </div>`; 
    }
}

window.onload = function awalMateri(){
   document.getElementById("satu").hidden = false;
   document.getElementById("dua").hidden = true;
   document.getElementById("tiga").hidden = true; 
   document.getElementById("empat").hidden = true; 
};

function satu2(){
   document.getElementById("btnprev").classList.add('disabled');
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("next").setAttribute( "onClick", "javascript: dua2();" ); 
}

function dua2(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('active');
   document.getElementById("prev").setAttribute( "onClick", "javascript: satu2();" );
   document.getElementById("mnext").hidden = false;  
}

function satu3(){
   document.getElementById("btnprev").classList.add('disabled');
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active');
   document.getElementById("next").setAttribute( "onClick", "javascript: dua3();" ); 
}

function dua3(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active');
   document.getElementById("next").setAttribute( "onClick", "javascript: tiga3();" );
   document.getElementById("prev").setAttribute( "onClick", "javascript: satu3();" );
    
}

function tiga3(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = false;
   document.getElementById("btntiga").classList.add('active');
   document.getElementById("prev").setAttribute( "onClick", "javascript: dua3();" );
   document.getElementById("mnext").hidden = false;  
}

function satu(){
   document.getElementById("btnprev").classList.add('disabled'); 
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active');
   document.getElementById("next").setAttribute( "onClick", "javascript: dua();" ); 
}

function dua(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active');
   document.getElementById("next").setAttribute( "onClick", "javascript: tiga();" );
   document.getElementById("prev").setAttribute( "onClick", "javascript: satu();" );
  
   
}
function tiga(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = false;
   document.getElementById("btntiga").classList.add('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active'); 
   document.getElementById("next").setAttribute( "onClick", "javascript: empat();" );
   document.getElementById("prev").setAttribute( "onClick", "javascript: dua();" );
   
}

function empat(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = false;
   document.getElementById("btnempat").classList.add('active'); 
   document.getElementById("btnnext").classList.add('disabled'); 
   document.getElementById("prev").setAttribute( "onClick", "javascript: tiga();" );
   document.getElementById("mnext").hidden = false;
   
}