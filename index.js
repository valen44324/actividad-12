function saludo() {
    var nombre = prompt('Por favor, ingresa tu nombre:');
  
    if (nombre) {
      alert('¡Bienvenido/a, ' + nombre + '!');
    } else {
      alert('Por favor, ingresa tu nombre.');
    }
  }
  
  saludo();
  

