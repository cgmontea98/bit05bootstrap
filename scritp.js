/* //checkbox de Marca
let check2 = document.getElementById("sprite");
let check3 = document.getElementById("quatro");
let check4 = document.getElementById("del_Valle");
let check5 = document.getElementById("powerade");
let check6 = document.getElementById("snacks");

//eventos de los checks
check2.addEventListener('change', filtro1, false)
check3.addEventListener('change', filtro1, false)
check4.addEventListener('change', filtro1, false)
check5.addEventListener('change', filtro1, false)
check6.addEventListener('change', filtro1, false) 
*/

let check1 = document.getElementById("coca");
check1.addEventListener("clcik", filtro1, false);
function filtro1() {
  const checked = check1.checked;
  if (checked) {
    const prueba = document.getElementsByClassName('cocaCola')
  }
}