document.getElementById('miFormulario').addEventListener('submit', miFuncionValidadora);

function miFuncionValidadora(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    console.log("Formulario interceptado, no se enviará por defecto.");

    const inputAsunto = document.getElementById('asunto');
    const inputNombre = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');
    const inputTelefono = document.getElementById('telefono');
    const textAreaMensaje = document.getElementById('mensaje');
    // Para el array de validación, guardamos el valor, el nombre y el elemento
    const camposParaValidar = [
        { valor: inputAsunto.value.trim(), nombre: 'Asunto', elemento: inputAsunto },
        { valor: inputNombre.value.trim(), nombre: 'Nombre', elemento: inputNombre },
        { valor: inputEmail.value.trim(), nombre: 'Email', elemento: inputEmail },
        { valor: inputTelefono.value.trim(), nombre: 'Teléfono', elemento: inputTelefono }, 
        { valor: textAreaMensaje.value.trim(), nombre: 'Mensaje', elemento: textAreaMensaje }
    ];

    // 1. Validación de campos vacíos
    for (const campo of camposParaValidar) {
        if (campo.valor === '') {
            alert('El campo ' + campo.nombre + ' no puede estar vacío.');
            campo.elemento.focus(); // Hacemos focus en el campo vacío
            return; // Detiene la ejecución si hay un campo vacío
        }
    }

    // 2. Validación específica para Teléfono (10 dígitos numéricos)
    const telefonoValor = inputTelefono.value.trim(); // Obtenemos el valor actual
    const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefonoValor)) {
        alert('El número de Teléfono debe tener 10 dígitos y ser solo números.');
        inputTelefono.focus(); // Focus en el campo teléfono
        return;
    }

    // 3. Validación específica para Email
    const emailValor = inputEmail.value.trim(); // Obtenemos el valor actual
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValor)) {
        alert('El Email ingresado no es válido.');
        inputEmail.focus(); // Focus en el campo email
        return;
    }

    // Si todas las validaciones anteriores pasaron, llegamos aquí:
    console.log("¡Todas las validaciones superadas!");
    alert("¡Formulario validado y listo para enviar!");
}   