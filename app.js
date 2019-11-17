    function registrar() {
        var email = document.getElementById('email').value;
        var pass = document.getElementById('pass').value;

        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(function () {
                verificar();

            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(errorCode);
                console.log(errorMessage);
            });


    }

    function Ingreso() {
        var email2 = document.getElementById('email2').value;
        var pass2 = document.getElementById('pass2').value;

        firebase.auth().signInWithEmailAndPassword(email2, pass2).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...

            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    function Observador() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                estado(user);
                console.log('Existe');
                console.log(user.emailVerified);


                // ...
            } else {
                // User is signed out.
                console.log('No existe');
                // ...
            }
        });

    }
    Observador();

    function estado(user) {
        var user = user;
        var contenido = document.getElementById('contenido');

        if (user.emailVerified) {
            contenido.innerHTML = `

    <button onclick="cerrarSesion()" id="salir">LogOut</button>

    `;
        }

    }

    function cerrarSesion() {
        firebase.auth().signOut()
            .then(function () {
                console.log('saliendo');
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    function verificar() {

        var user = firebase.auth().currentUser;

        user.sendEmailVerification()
            .then(function () {
                console.log('Se esta enviando msj confirmacion...');
            })
            .catch(function (error) {
                console.log('ERROR');
                // An error happened.
            });

    }

