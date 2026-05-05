function calculadora (num1, num2, operacion) {
    switch(operacion){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if(num2 === 0){
                return "Error: No se puede dividir por cero";
            } else {
                return num1 / num2;
            }
        default:
            return "Operación no válida";
    }

}

console.log(calculadora(10, 4, '-'))

