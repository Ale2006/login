Plantilla para login que se usara en la pagina de las mascotas. Funciona bien en chrome, pero en firefox da un error al recargar la 
pagina, le conflicto lo tengo si cargo los script de boostrap. Si comento estos 2 script y recargo la pagino no hay problema.
El conflicto que genera, hace que no funcione el script con el archivo app.js que es el encargado del registro y logueo del usuario. El error que carga la consola es  "TypeError: jh.Promise is undefined"

EDIT: Solucionado por el momento cambiando la version de firebase.auth a la version 6.2



 <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->

    <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-auth.js"></script>
