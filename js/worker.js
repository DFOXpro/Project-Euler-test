var p = {};

onmessage = function (mensaje) {
	console.log("worker.om", mensaje.data);
	if(! p["f"+mensaje.data[0]])
		importScripts(mensaje.data[0]+".js");
	p["f"+mensaje.data[0]](mensaje.data[1]);
};