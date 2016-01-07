/* global p, BigNumber */
/*
 * Project Eluler: Factorial digit sum - Problem 20
 */

p.f20 = function(cache){
	if(typeof BigNumber === "undefined") importScripts("vendor/bignumber.js");
	var
		f = [new BigNumber("1"), new BigNumber("1")],
		i = 2;
	var factorial = function (n){
		if (!!f[n])
			return f[n];
		var result = f[i - 1];
		for (; i <= n; i++)
			f[i] = result = result.multiply(i.toString());
		return result;
	};
	if(!cache) cache = 100;
	var
		resultado = factorial(cache)._d,
		r = 0;

	console.log(resultado);
	while(resultado.length > 0)
		r += resultado.pop();
	postMessage(["r", r]);//648
};