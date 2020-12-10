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