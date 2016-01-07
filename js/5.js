/* global p */
/*
 * Project Eluler: Smallest multiple - Problem 5
 */


p.f5 = function(extras){
	// las funciones hcf y lcm fueron escritas por Seamus Yim:
	// http://www.javascriptsource.com/math-related/gcd-lcm-calculator.html
	function hcf(text1, text2) {
		var gcd = 1;
		if (text1 > text2) {
			text1 = text1 + text2;
			text2 = text1 - text2;
			text1 = text1 - text2;
		}
		if ((text2 === (Math.round(text2 / text1)) * text1)) {
			gcd = text1;
		} else {
			for (var i = Math.round(text1 / 2); i > 1; i = i - 1) {
				if ((text1 === (Math.round(text1 / i)) * i))
					if ((text2 === (Math.round(text2 / i)) * i)) {
						gcd = i;
						i = -1;
					}
			}
		}
		return gcd;
	}

	function lcm(t1, t2) {
		var cm = 1;
		var f = hcf(t1, t2);
		cm = t1 * t2 / f;
		return cm;
	}

	/**
	 * Minimo comun multiplo array
	 * 
	 * @param numeros Array
	 */
	var mcma = function (numeros) {
		var resultado = numeros.pop();
		while (numeros.length > 0) {
			resultado = lcm(resultado, numeros.pop());
			console.log(resultado);
		}
		return resultado;
	};
	var arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	postMessage(["r", mcma(arrayTest)]);//232792560
};