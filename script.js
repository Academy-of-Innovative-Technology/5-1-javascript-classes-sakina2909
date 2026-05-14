class MathFunctions {

    constructor(a , b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b  
    }

       subtract() {
            return this.a - this.b 
       }

   multiply() {
        return this.a * this.b 
   }

      divide () {
            return this.a  / this.b 
      }



}

let mathStuff = new MathFunctions(10 , 2)

console.log(mathStuff.add())
console.log(mathStuff.subtract())
console.log(mathStuff.multiply())
console.log(mathStuff.divide())

class greetings {
    constructor(name) {
    this.name = name;
    }
    english() {
        return "Hello" + this.name;
    }
    spanish() {
        return "Hola" + this.name;
    }
    french() {
        return "Bonjour" + this.name;
    }
    arabic() {
        return "Ahlaan " + this.name;
    
    }
    creole() {
        return "bonjou" + this.name;
    }

}
let greet = new greetings("Mr. Pelzer")
console.log(greet.english());