
class Equipo {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  

  class Jugador {
    constructor(nombre, equipo) {
      this.nombre = nombre;
      this.equipo = equipo;
    }
  
    mostrarDetalles() {
      return " el jugador "+this.nombre+" hace parte del equipo "+this.equipo.nombre;
    }
  }
  
  document.querySelector("#btn").addEventListener("click", () => {
   let nombreEquipo = document.querySelector('#nombreEquipo').value;
    let nombreJugador = document.querySelector('#nombreJugador').value;
    let equipo = new Equipo(nombreEquipo);
    let jugador = new Jugador(nombreJugador, equipo);
    document.querySelector('#resultado').innerText = jugador.mostrarDetalles();
  });