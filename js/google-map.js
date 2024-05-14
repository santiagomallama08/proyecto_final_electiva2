// Función para obtener las coordenadas de Pasto, Nariño usando la API de Google Maps
function obtenerCoordenadasPasto() {
    // Crear una instancia del geocodificador de Google Maps
    const geocoder = new google.maps.Geocoder();
    
    // Objeto con la dirección de Pasto, Nariño
    const direccion = 'Pasto, Nariño, Colombia';
  
    // Realizar la búsqueda de la dirección
    geocoder.geocode({ 'address': direccion }, function(results, status) {
      if (status === 'OK') {
        // Obtener las coordenadas de la primera coincidencia
        const latitud = results[0].geometry.location.lat();
        const longitud = results[0].geometry.location.lng();
        
        // Imprimir las coordenadas en la consola
        console.log('Coordenadas de Pasto, Nariño:', latitud, longitud);
      } else {
        // En caso de error, imprimir el mensaje de error en la consola
        console.error('Error al obtener las coordenadas:', status);
      }
    });
  }
  
  // Llamar a la función para obtener las coordenadas de Pasto, Nariño
  obtenerCoordenadasPasto();
  