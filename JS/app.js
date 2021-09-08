var der = document.getElementById('derecha');
var izq = document.getElementById('izquierda');
var foto =  document.getElementById("covers");
var contador = 0;
var paseder = 0;


/*var tiempo = function(){
    contador++;
    console.log(contador);
    
    if(contador === 1){
        foto.src="../IMG/portada1.jpg"  
    }
    if(contador === 2){
        foto.src="../IMG/portada2.jpg"  
    }
    if(contador === 3){
        foto.src="../IMG/portada3.jpg"   
    }
    if (contador === 4){
        foto.src="../IMG/baño1.jpg"
        clearInterval(contador = 0);
    }
};
var intervalo = setInterval(tiempo, 8000);
*/

function cambioder(){
        paseder++;
        console.log(paseder);
    if(paseder === 0){
        foto.src="./IMG/portada1.jpg";
    }
    if(paseder === 1){
        foto.src="./IMG/portada2.jpg";
    }
    if(paseder === 2){
        foto.src="./IMG/baño1.jpg";
    }
    if(paseder === 3){
        foto.src="./IMG/baño2.jpg";
    }
    if(paseder >=4){
        foto.src="./IMG/portada1.jpg";
        (paseder = 0);
        
    }
}
function cambioizq(){
    paseder--;
    console.log(paseder);
if(paseder === 0){
    foto.src="./IMG/portada1.jpg";
    
}
if(paseder === -1){
    foto.src="./IMG/baño2.jpg";
}
if(paseder === -2){
    foto.src="./IMG/baño1.jpg";
}
if(paseder === -3){
    foto.src="./IMG/portada2.jpg";
}
if(paseder <= -4 ){
    foto.src="./IMG/portada1.jpg";
    (paseder = 0);
}
}
der.addEventListener('click',cambioder);
izq.addEventListener('click',cambioizq);

 
var activar = document.getElementById('ham');
var menu = document.getElementById('menu');
var cerrarMenu = document.getElementById('cerrar');



function cambio(){
   menu.style.top = '0';
}
activar.addEventListener('click',cambio);

function cierro(){
    menu.style.top ='-100%';
}
cerrarMenu.addEventListener('click',cierro);