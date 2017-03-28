// Initialize Firebase.
var config = {
    apiKey: "AIzaSyC-UmzZh1QBe61yc9cdAoEITJfN3v_P0ZQ",
    authDomain: "fir-firsttest-5635d.firebaseapp.com",
    databaseURL: "https://fir-firsttest-5635d.firebaseio.com",
    storageBucket: "fir-firsttest-5635d.appspot.com",
    messagingSenderId: "931278023084"
};

firebase.initializeApp(config);
var firebaseDb = firebase.database();

function setup(roomName) {
    // Set Firebase Database reference.
    var fireOb = firebaseDb.ref(roomName);
    firepadInit('firepad', fireOb);
}

function firepadInit(ACEdom, fireOb) {
    // Create Ace editor.
    var editor = ace.edit(ACEdom);

// Create Firepad.
    Firepad.fromACE(fireOb, editor);
 }

 /*function createRoom(roomName) {
     new firepadInit(roomName, 'firepad');
 }*/

 $('button').click(function(event) {
     var clicks = event;
     console.log(clicks);
     var roomName = $(this).text();
     setup(roomName);
 });

/*$('button').dblclick(function () {
    location.reload(true);
});*/