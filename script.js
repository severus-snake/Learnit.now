 function firepadInit(roomName, ACEdom) {
    // Initialize Firebase.
    this.config = {
        apiKey: "AIzaSyC-UmzZh1QBe61yc9cdAoEITJfN3v_P0ZQ",
        authDomain: "fir-firsttest-5635d.firebaseapp.com",
        databaseURL: "https://fir-firsttest-5635d.firebaseio.com",
        storageBucket: "fir-firsttest-5635d.appspot.com",
        messagingSenderId: "931278023084"
    };
    firebase.initializeApp(this.config);

    // Get Firebase Database reference.
    this.firepadRef = firebase.database().ref(roomName);

    // Create Ace editor.
    this.editor = ace.edit(ACEdom);

    // Create Firepad.
    this.ACEdom = Firepad.fromACE(this.firepadRef, this.editor);
 }

 function createRoom(roomName) {
     new firepadInit(roomName, 'firepad');
 }

 $('button').click(function(event) {
     var roomName = $(this).text();
     createRoom(roomName);
 });

$('button').dblclick(function () {
    location.reload(true);
});