//checkbox de Marca
let check1 = document.getElementById("coca");
/* let check2 = document.getElementById("sprite");
let check3 = document.getElementById("quatro");
let check4 = document.getElementById("del_Valle");
let check5 = document.getElementById("powerade");
let check6 = document.getElementById("snacks"); */
//eventos de los checks
check1.addEventListener("change", filtro1, false);
/* check2.addEventListener('change', filtro2, false)
check3.addEventListener('change', filtro3, false)
check4.addEventListener('change', filtro4, false)
check5.addEventListener('change', filtro5, false)
check6.addEventListener('change', filtro6, false) */

function filtro1() {
  var checked = check1.checked;
  if (checked) {
    alert('dio click')
  }
}


let cads = document.getElementById('productos')
let prb = document.getElementById('prueba')

let arreglocads = [].slice.call(cads);
prb = arreglocads instanceof Array
console.log(prb)

