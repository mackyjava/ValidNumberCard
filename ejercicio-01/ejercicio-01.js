var result=0;


function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(typeof(creditCardNumber)=="undefined")
	{
		 return "Ingresa un numero";
	}
     else if(typeof(creditCardNumber)!="number")
     {
	  return "Error de dato";
     }
	 else if(typeof(creditCardNumber)=="number"){
		 result = creditCardNumber;
	     var result1=Array.from(result);
		     return result1;
	     }
     }

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
