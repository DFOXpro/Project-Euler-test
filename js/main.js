// Se usan workers para el problema 94
var w = new Worker("js/worker.js");

/**
 * 
 * @param {Number} n
 * @param {Array} extras
 */
var p = function(n, extras){
	//console.log("p", n);
	w.postMessage([n,extras]);
	w.onmessage = function (r) {
		console.log("om", r.data);
		if(r.data[0] === "r") $("#p_Respuesta_"+n).html(r.data[1]);
		if(r.data[0] === "p"){
			$("#d_progreso_"+n)
				.attr( "aria-valuenow", r.data[1])
				.css( "width", r.data[1]+"%");
		};
	};
};