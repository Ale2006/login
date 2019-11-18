Plantilla para login que se usara en la pagina de las mascotas. Funciona bien en chrome, pero en firefox da un error al recargar la 
pagina, le conflicto lo tengo si cargo los script de boostrap. Si comento estos 2 script y recargo la pagino no hay problema.
El conflicto que genera, hace que no funcione el script con el archivo app.js que es el encargado del registro y logueo del usuario. El error que carga la consola es  "TypeError: jh.Promise is undefined"

EDIT: Solucionado por el momento cambiando la version de firebase.auth a la version 6.2
