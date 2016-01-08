/* global p */
/*
 * Project Eluler: Almost equilateral triangles - Problem 94
 */

/**
 * Triangulos casi iguales
 *
 * @param limite Number
 */
p.f94 = function(limite){
	if(!limite) limite = 1000000000;
	var x = 2;
	var y = 1;
	var resultado = 0;

	while(true){
		// b = a+1
		var Ax3 = 2 * x - 1;
		var AreaX3 = y * (x - 2);
		if (Ax3 > limite) break;

		if (
			Ax3 > 0 &&
			AreaX3 > 0 &&
			Ax3 % 3 === 0 &&
			AreaX3 % 3 === 0
		) {
			var a = Ax3 / 3;
			var area = AreaX3 / 3;
			resultado += 3 * a + 1;
		}

		//b = a-1
		Ax3 = 2 * x + 1;
		AreaX3 = y * (x + 2);

		if (
			Ax3 > 0 &&
			AreaX3 > 0 &&
			Ax3 % 3 === 0 &&
			AreaX3 % 3 === 0
		) {
			var a = Ax3 / 3;
			var area = AreaX3 / 3;
			resultado += 3 * a - 1;
		}
		var nextx = 2 * x + y * 3;
		var nexty = y * 2 + x;
		x = nextx;
		y = nexty;
	}
	console.log("X, Y", x, y, resultado);
	postMessage(["r", resultado]);//518408346
};
