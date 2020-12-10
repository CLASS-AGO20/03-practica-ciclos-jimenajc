export default class App {

    factorial(numero){

        let resultado = 1;

        for(let i = 2; i<=numero; i++){

            resultado = resultado * i;

        }
        return resultado;
    }
    convertirAString(numero){

        let i= 0;
        let resultado = "";

        while(i < numero){
            resultado = resultado + "*";
            i++;
        }
        return resultado;
    }

    obtenerDivisibles(numero){

        let divisores = 0 ;
        let i = 1
        do{

            if((numero %  i == 0)){
                divisores++;
            }

            i++
        } while (i <= numero);

        return divisores;
    }

    elevar(numero, potencia){
       
        let resultado = 1;

        for (let i= 1; i <= potencia; i++){
           
            resultado = resultado * numero;
        }
        return resultado

    }
}

let app = new App();

console.log(app.factorial(1));
console.log(app.factorial(2));
console.log(app.factorial(3));
console.log(app.factorial(4));
console.log(app.factorial(5));
console.log(app.factorial(6));


console.log(app.convertirAString(1));
console.log(app.convertirAString(2));
console.log(app.convertirAString(3));
console.log(app.convertirAString(4));

console.log(app.obtenerDivisibles(1));
console.log(app.obtenerDivisibles(2));
console.log(app.obtenerDivisibles(3));
console.log(app.obtenerDivisibles(4));
console.log(app.obtenerDivisibles(5));
console.log(app.obtenerDivisibles(6));

console.log(app.elevar(1, 3));
console.log(app.elevar(2, 10));
console.log(app.elevar(5, 3));
console.log(app.elevar(2, 5));
