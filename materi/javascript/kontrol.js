//----------------------------konfigurasi----------------------------------

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCZzSfPM6aeqowupsbmO3zYEzzgpLgQMRQ",
  authDomain: "aplikasi-sifat-bunyi.firebaseapp.com",
  databaseURL: "https://aplikasi-sifat-bunyi-default-rtdb.firebaseio.com",
  projectId: "aplikasi-sifat-bunyi",
  storageBucket: "aplikasi-sifat-bunyi.appspot.com",
  messagingSenderId: "230089203760",
  appId: "1:230089203760:web:b4c27544e131802cc98df5",
  measurementId: "G-20Q2DGB89F",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var on = 1;
var off = 0;

//--------------------------------------Kuis 1--------------------------------
function on_kuis1() {
  on1.style.background = "green";
  off1.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ kuis1: on });
}
function off_kuis1() {
  off1.style.background = "red";
  on1.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ kuis1: off });
}

//--------------------------------------Kuis 2 --------------------------------
function on_kuis2() {
  on2.style.background = "green";
  off2.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ kuis2: on });
}
function off_kuis2() {
  off2.style.background = "red";
  on2.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ kuis2: off });
}

//--------------------------------------Kuis 3--------------------------------
function on_kuis3() {
  on3.style.background = "green";
  off3.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ kuis3: on });
}
function off_kuis3() {
  off3.style.background = "red";
  on3.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ kuis3: off });
}
//--------------------------------------Kuis 4--------------------------------
function on_kuis4() {
  on5.style.background = "green";
  off5.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ kuis4: on });
}
function off_kuis4() {
  off5.style.background = "red";
  on5.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ kuis4: off });
}

//--------------------------------------Kuis 5--------------------------------
function on_kuis5() {
  on6.style.background = "green";
  off6.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ kuis5: on });
}
function off_kuis5() {
  off6.style.background = "red";
  on6.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ kuis5: off });
}
//--------------------------------------evaluasi --------------------------------
function on_kuis4() {
  on4.style.background = "green";
  off4.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ evaluasi: on });
}
function off_kuis4() {
  off4.style.background = "red";
  on4.style.background = "#0a3546";
  firebase.database().ref("kontrol/1/").update({ evaluasi: off });
}
window.onload = function () {
  dataKkm();
  dataKuis1();
};
//--------------------------Ambil semua data nilai kontrol
function dataKuis1() {
  firebase
    .database()
    .ref("kontrol/")
    .once("value", function (AllRecords1) {
      AllRecords1.forEach(function (CurrentRecord) {
        var kuis1 = CurrentRecord.val().kuis1;
        var kuis2 = CurrentRecord.val().kuis2;
        var kuis3 = CurrentRecord.val().kuis3;
        var kuis4 = CurrentRecord.val().kuis4;
        var kuis5 = CurrentRecord.val().kuis5;
        var evaluasi = CurrentRecord.val().evaluasi;

        KuisToTable1(kuis1, kuis2, kuis3, kuis4, kuis5, evaluasi);
      });
    });
}

//---------------------------------mengisi tabel-----------------------------
function KuisToTable1(kuis1, kuis2, kuis3, kuis4, kuis5, evaluasi) {
  if (kuis1 == 1) {
    on1.style.background = "green";
  } else {
    off1.style.background = "red";
  }

  if (kuis2 == 1) {
    on2.style.background = "green";
  } else {
    off2.style.background = "red";
  }
  if (kuis3 == 1) {
    on3.style.background = "green";
  } else {
    off3.style.background = "red";
  }
  if (kuis4 == 1) {
    on5.style.background = "green";
  } else {
    off5.style.background = "red";
  }
  if (kuis5 == 1) {
    on6.style.background = "green";
  } else {
    off6.style.background = "red";
  }
  if (evaluasi == 1) {
    on4.style.background = "green";
  } else {
    off4.style.background = "red";
  }
}

//----------------------------------batas-------------------------------

//==================================menambahkan KKM=====================

//----------------------------------------------------------------------
kkm1 = document.getElementById("kkm1");
kkm2 = document.getElementById("kkm2");
kkm3 = document.getElementById("kkm3");
kkm5 = document.getElementById("kkm5");
kkm6 = document.getElementById("kkm6");
kkm4 = document.getElementById("kkm4");

function km1() {
  firebase.database().ref("KKM/1/").update({ kuis1: kkm1.value });
  alert("KKM Kuis 1 berhasil diperbaharui");
  location.reload();
}
function km2() {
  firebase.database().ref("KKM/1/").update({ kuis2: kkm2.value });
  alert("KKM Kuis 2 berhasil diperbaharui");
  location.reload();
}
function km3() {
  firebase.database().ref("KKM/1/").update({ kuis3: kkm3.value });
  alert("KKM Kuis 3 berhasil diperbaharui");
  location.reload();
}
function km5() {
  firebase.database().ref("KKM/1/").update({ kuis4: kkm5.value });
  alert("KKM Kuis 3 berhasil diperbaharui");
  location.reload();
}
function km6() {
  firebase.database().ref("KKM/1/").update({ kuis5: kkm6.value });
  alert("KKM Kuis 3 berhasil diperbaharui");
  location.reload();
}
function km4() {
  firebase.database().ref("KKM/1/").update({ evaluasi: kkm4.value });
  alert("KKM Evaluasi berhasil diperbaharui");
  location.reload();
}

//mengambil data KKM di firebase

//--------------------------Ambil semua data KKM
function dataKkm() {
  firebase
    .database()
    .ref("KKM/")
    .once("value", function (AllRecords1) {
      AllRecords1.forEach(function (CurrentRecord) {
        var kuis1 = CurrentRecord.val().kuis1;
        var kuis2 = CurrentRecord.val().kuis2;
        var kuis3 = CurrentRecord.val().kuis3;
        var kuis4 = CurrentRecord.val().kuis4;
        var kuis5 = CurrentRecord.val().kuis5;
        var evaluasi = CurrentRecord.val().evaluasi;

        datak(kuis1, kuis2, kuis3, kuis4, kuis5, evaluasi);
      });
    });
}
function datak(kuis1, kuis2, kuis3, kuis4, kuis5, evaluasi) {
  if (kuis1 != "") {
    isi1 = document.getElementById("isi1");
    isi1.innerText = kuis1;
  }
  if (kuis2 != "") {
    isi2 = document.getElementById("isi2");
    isi2.innerText = kuis2;
  }
  if (kuis3 != "") {
    isi3 = document.getElementById("isi3");
    isi3.innerText = kuis3;
  }
  if (kuis4 != "") {
    isi5 = document.getElementById("isi5");
    isi5.innerText = kuis4;
  }
  if (kuis5 != "") {
    isi6 = document.getElementById("isi6");
    isi6.innerText = kuis5;
  }
  if (evaluasi != "") {
    isi4 = document.getElementById("isi4");
    isi4.innerText = evaluasi;
  }
}
