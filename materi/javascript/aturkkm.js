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

let idnya = [];

const db = firebase.database();
const dbkkm = db.ref("kkm").on("value", handleSuccess, handleError);

let getKKM;
function handleSuccess(items) {
  getKKM = items.val();

  let kkm1 = getKKM[0]["kkm"];
  let kkm2 = getKKM[1]["kkm"];
  let kkm3 = getKKM[2]["kkm"];
  let kkm4 = getKKM[3]["kkm"];
  let kkm5 = getKKM[4]["kkm"];
  let kkm6 = getKKM[5]["kkm"];

  var kkm1html = document.querySelector(".kkm1");
  kkm1html.innerHTML = kkm1;

  var editkkm1 = document.querySelector(".editKKM1");
  editkkm1.value = kkm1;

  var kkm2html = document.querySelector(".kkm2");
  kkm2html.innerHTML = kkm2;

  var editkkm2 = document.querySelector(".editKKM2");
  editkkm2.value = kkm2;

  var kkm3html = document.querySelector(".kkm3");
  kkm3html.innerHTML = kkm3;

  var editkkm3 = document.querySelector(".editKKM3");
  editkkm3.value = kkm3;

  var kkm4html = document.querySelector(".kkm4");
  kkm4html.innerHTML = kkm4;

  var editkkm4 = document.querySelector(".editKKM4");
  editkkm4.value = kkm4;

  var kkm5html = document.querySelector(".kkm5");
  kkm5html.innerHTML = kkm5;

  var editkkm5 = document.querySelector(".editKKM5");
  editkkm5.value = kkm5;

  var kkm6html = document.querySelector(".kkm6");
  kkm6html.innerHTML = kkm6;

  var editkkm6 = document.querySelector(".editKKM6");
  editkkm6.value = kkm6;
}

function handleError(err) {
  console.log(err);
}

function setKKM1() {
  const kkminput = document.getElementById("kkm1").value;

  var task = {
    id: 0,
    kkm: kkminput,
  };

  let database = firebase.database().ref("kkm/" + 0);
  database.set(task);
}

function setKKM2() {
  const kkminput = document.getElementById("kkm2").value;

  var task = {
    id: 1,
    kkm: kkminput,
  };

  let database = firebase.database().ref("kkm/" + 1);
  database.set(task);
}

function setKKM3() {
  const kkminput = document.getElementById("kkm3").value;

  var task = {
    id: 2,
    kkm: kkminput,
  };

  let database = firebase.database().ref("kkm/" + 2);
  database.set(task);
}
function setKKM4() {
  const kkminput = document.getElementById("kkm4").value;

  var task = {
    id: 3,
    kkm: kkminput,
  };

  let database = firebase.database().ref("kkm/" + 3);
  database.set(task);
}
function setKKM5() {
  const kkminput = document.getElementById("kkm5").value;

  var task = {
    id: 4,
    kkm: kkminput,
  };

  let database = firebase.database().ref("kkm/" + 4);
  database.set(task);
}
function setKKM6() {
  const kkminput = document.getElementById("kkm6").value;

  var task = {
    id: 5,
    kkm: kkminput,
  };

  let database = firebase.database().ref("kkm/" + 5);
  database.set(task);
}
