function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    switch(typeof(creditCardNumber)){
		case "undefined":
			return "Ingresa un numero";
		break;
		case "string":
        	return "Error de dato";
		break;
		case "array":
			return "Error de dato";
		break;
	    case "boolean":
			return "Error de dato";
		break;
	 }
  
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
