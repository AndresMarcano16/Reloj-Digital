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
        "un dia mas",
        "juas juas",
        "alv",
        "aiuda",
        

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

      const  fraseAleatoria = frases[Math.floor(Math.random( ) * dias.length) ] 
   
    
    
    
    
      document.getElementById("frase").innerText = fraseAleatoria
      
}

cargarReloj();

frasesdeldia();
