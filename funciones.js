//A continuación está la función de saludo
//Observa la línea 7
//Podemos unir strings usando el signo de más +
//Para saber más, consulta la sugerencia

var saludo = function (nombre) {
    console.log("Qué bueno verte," + " " + nombre);
};

//¡En la línea 11, llama a la función de saludo!
saludo ("alejandro");


//ok ya encontre como llamar la funcion jajajaja
//lo que ocurre es que no entiendo bien aun lo de las funciones
//o como llamarlas!!! Pero igual seria fino que si tienen ejercicios
//o problemas finos con que pueda ir dandole genial...


//AJA AQUI CONSEGUI OTRO PROBLEMITA FIEJNSE EN LAS LINEAS 30 EN ADELANTE
//ESTOY INTENTANDO QUE AL LLAMAR A LA FUNCION SALUDO ME DIGA "HOLA ALEJANDRO"
//PERO EN CAMBIO ME IMPRIME EN PANTALLA "HOLA NOMBRE"...
//Función bien escrita
var calcular = function (numero) 
    {
    var val = numero * 10;
    console.log(val);
};

//Función mal escrita con errores de sintaxis

var saludo = function (nombre)
    {
        console.log("Hola" + " " + "nombre"); //en esta linea quitale las comillas a nombre
};
saludo ("alejandro");

//AQUI TENGO OTRO ERROR
//PUES SE SUPONE QUE CADA NARANJA CUESTA 5 Y QUIERO HACER UNA MULTIPLICACION DE
//CUANTO ME CUESTA EL TOTAL DE LAS 5 MANZANAS Y PUES ME SALE ERROR EN LA PANTALLA t_t
var costoNaranjas = function (precio)
    {
         var valor = numero * 5;
        console.log(valor + " " + "cuestan" + " " + "5");
}
costoNaranjas ("5");

/* var costoNaranjas = function (precio)
    {
        var valor = precio * 5;
        console-log("5 naranjas cuestan " + valor);
        }
   
   costoNaranjas(5);
   */
/*El propblema que tienes en la funcion del saludo es que en el console.log pusiste el parametro nombre entre comillas..
por eso no te lo reconoce como variable sino como la cadena de texto nombre literalmente.

En la funcion de las naranjas definiste la funcion con el parametro "precio" pero dentro de la funcion utilizas
un parametro "numero" que salio de la nada*/

//Si es que eso es el resultante de hacer intentos diferentes jajajajajaja

