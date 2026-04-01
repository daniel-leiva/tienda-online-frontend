function infocliente() {
	var ncliente = document.getElementById("ncliente").value;
	var apcliente = document.getElementById("apcliente").value;
	var cecliente = document.getElementById("cecliente").value;
	var tcliente = document.getElementById("tcliente").value;
	alert(
		"Bienvenido, gracias por su confiar en nosotros! Tus datos han sido guardados exitosamente."
	);
	console.log(
		"Nuevo cliente! Sus datos son: " +
			"Nombre/s: " +
			ncliente +
			" → Apellido/s: " +
			apcliente +
			" → Correo electrónico: " +
			cecliente +
			" → Teléfono: " +
			tcliente +
			"."
	);
}
