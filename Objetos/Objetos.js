// Programacion Orientada a Objetos
/* Es un paradigma que nos permite trabajar con objetos cuya logica sea lo mas parecida a la vida real */
/* Clases, es una plantilla o molde a partir de la cual se crean objetos, Esto nos va a permitir definir de forma muy generica como debe verse y que debe hacer un objeto (estado y comportamiento), con atributos y metodos. */
/* Objeto - La clase o plantilla por si sola no nos va a servir de nada, solo es un concepto. es una entidad que consta con caracteristicas espesificas 
Cuando creamos un objeto  con atributos y metodos con la ayuda de la clase y el constructor.*/
//Constructo- Es una funcion obligatoria para crear el objeto a taves de caracteristicas o atributos especificos.
// Diferencia entre clase y Objeto- La clase sirve de modelo para crear el objeto y el objeto es una entidad que consta con caracteristicas espesificas 
// Atributo- Caractetisticas que hacen diferentes a los objetos
// Metodo- de que manera se va a comportar el objeto, lo que puede hacer.
// Instanciacion- Se refiere a cuando ya la clase, el construccion y el objeto.
// Pilares - Herencia, Polimorfismo, Encapsulamiento, Abstraccion
/* Herencia- atributos que otros objetos heredan, cuenta con la parabra reservada extends. Permite reutilizar el codigo de la clase padre en la clase hijo.
   Polimorfismo- El comportamiento  de cada  objeto dentro de la misma clase a un metodo.
   Encapsulamiento- Se refiere a encerrar y/o ocultar el codigo.
   Abstraccion- Se refiere a ser muy especificos con los objetos (resuimir)
   Modularidad- Nos permite reutilizar codigo, hacer modificaciones, tener orden, entender y mantener codigo.
   Metodos estaticos: Usan la palabra reservada static, nos permite ejecutar una clase sin instanciar al objeto.
   Metodos accesores : Terminen modificar o extraer un atributo de un objeto usando las palabras reservadas, get y set.
    */
// SOLID- Son principios que nos ayudan a guiarnos para crear un codigo entendible para los demas.
/* Responsabilidad Unica (SRP)- La asignacion de una clase o objeto tienen que ser unicos
   Principio de abierto y cerrado (OCP)- Se refiere a que debemos poder extender el codigo ya existente de ser necesario.
   Principio de sustitucion de Liskov- Se refiere a que podemos tener cualquier tipo de objeto dentro de mi clase y no se ve afectado el comportamiento del mismo.
   Principio de segregacion de interfaces(ISP)- Tener distintas interfaces especifiacas que a una sola con varios elementos.
   Principio de Investigacion de dependencias (DIP)- Trabajar a traves de la abstraccion para que el codigo no dependa de detalles especcificos

   Objetos Json(Javascript Object Notation)
   Se manejan a traves de clave-valor y no tienen metodos.
   */
  class ch47 {// Clase principal o clase padre
      constructor(nombre, apellido, email, edad){// creamos el constructor, nos permite crear el objeto
        this.name = nombre; // this nos permite seleccionar el objeto que voy a crear
        this.lastName= apellido;
        this.correo= email;
        this.age= edad;
        this.info = `Holi soy ${this.name} ${this.lastName} ${this.correo} y mi edad es ${this.age}`
      }
      infoIntegrantes(){// Metodo que funciona simepre este dentro de la clase
        console.log (this.info);
      }
  }
  class instruccion extends ch47{
    constructor(nombre, apellido, email, edad, escolaridad){
    super (nombre, apellido, email, edad);// Super es para definir que datos se heredaran.
    this.grado= escolaridad;
}
     static darSesiones(){
        console.log("Hoy no tienes sesion");
     }
  }
  class mentoria extends ch47 {
    constructor (nombre, apellido, email, edad, telefono){
      super(nombre, apellido, email, edad)
      this.tel = telefono; 
      this.info = `Holi soy ${this.name} ${this.lastName} ${this.correo} y mi edad es ${this.age} y mi telefono ${this.tel}`
    }
    infoIntegrantes(){
        console.log (this.info);
      }
    static darMentoria(){
      console.log("tienes muchos mentees");
    }
  }
  class participantes extends ch47 {
    constructor(nombre, apellido, email, edad, escolaridad,telefono){
        super(nombre, apellido, email, edad)
        this.tel=telefono
        this.grado=escolaridad
        this.info = `Holi soy ${this.name} ${this.lastName} ${this.correo}, mi edad es ${this.age}, mi telefono ${this.tel}, y mi escolaridad es ${this.grado}`
    }
    // Para recibir algo 
    get _nombre(){
      return this.name;
    }
    // Modificar algo
    set _nombre1(_name){
      this.name=_name
    }
  }
  const inte1= new ch47 ("xaxiry","Gonzalez","xaxiry@.com",27);//  Los objetos se deben definir con const
  const inte2 = new instruccion ("Liliana","Aguirre","lili@gmail.com",30,"Liccenciatura");
  const inte3= new mentoria ("Eva","Lagarreta", "eval@gmail.com",29,595959595);
  const int4= new participantes("Xamitl","Hernandez","ollin.h@yahoo.com",29,5610297873,"Ingenieria trunca");
  int4.infoIntegrantes();
   int4._nombre1 = "Juan" 
  console.log (int4._nombre)
