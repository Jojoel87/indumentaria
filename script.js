document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    
    fetch('https://script.google.com/macros/s/AKfycbxlhqt7PTsLWHLWUHzm2jcOura083n8nqnxNzw7947cavCEhwXgmoDl48BJ1ymok7-5/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("¡Pedido enviado con éxito!");
        document.getElementById('formulario').reset();
    })
    .catch(error => {
        alert("Hubo un error al enviar el formulario. Por favor, intenta nuevamente.");
        console.error('Error:', error);
    });
});
