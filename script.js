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

    $('a').click(function () {
        var roomName = $('input').val();

        if (roomName === "") {
            alert("Please do not enter a blank name");
        } else {
            $('a').css('visibility', 'hidden');
            $('form').css('visibility', 'hidden');
            $('#firepad').css('visibility', 'visible');
            setup(roomName);
            $("h2").append("Your Room Topic Is:" + " " + '<span>'+roomName+'</span>');
        }
    });

/*$(document).dblclick(function () {
 location.reload(true);
 });*/