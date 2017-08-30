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
        console.log("Hola" + " " + "nombre");
};
saludo ("alejandro");
