function cargarReloj() {
  let timenow = new Date();
  let hora = timenow.getHours();
  let min = timenow.getMinutes();
  let sec = timenow.getSeconds();

  let meridiano = "AM";

  if (hora == 0) {
    hora = 12;
  }

  if (hora > 12) {
    hora = hora - 12;
    meridiano = "PM";
  }

  //condicionales ternarios//

  hora = hora < 10 ? "0" + hora : hora;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let tiempocompleto = hora + ":" + min + ":" + sec + " " + meridiano;

  document.getElementById("Reloj").innerText = tiempocompleto;
  document.getElementById("Reloj").textContent = tiempocompleto;
  setTimeout(cargarReloj, 500);

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado",
    
  ]

  let diasdesemana = dias[timenow.getDay()]
  let diadehoy = timenow.getDate()
  let mesactual = meses[timenow.getMonth()]
  let anoactual = timenow.getFullYear()
  let fecha = diasdesemana + " " + diadehoy + " " + mesactual + "  " + anoactual
  

  document.getElementById("fecha").innerText = fecha

 
}

function frasesdeldia() {
    const frases = [
        "Regla numero 1: No rendirse,Regla numero 2: No olvides la numero 1",
        "Dios aprieta pero no ahorca",
        "Mucho que aprender todavia tienes",
      ]
      
      const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sabado",
        
      ]

    //   for(let i = 0 ; i < frases.length ; i++ ){
    //     console.log(frases[i])
    
    //   }
    if(dias[0] == frases) {

    }
    
    
    
    
      document.getElementById("frase").innerText = frases[0]
      
}

cargarReloj();

frasesdeldia();
