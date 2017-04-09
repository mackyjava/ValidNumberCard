function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(typeof(creditCardNumber)=="undefined")
	{
		 return "Ingresa un numero";
	}
     else if(typeof(creditCardNumber)!="undefined")
     {
	  return "Error de dato";
     }
	
}


// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
