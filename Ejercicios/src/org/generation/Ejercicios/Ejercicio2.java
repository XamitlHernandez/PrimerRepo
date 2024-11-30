package org.generation.Ejercicios;
import java.util.Scanner; // Importamos herramienta a utilizar
public class Ejercicio2 {
	
	public static void main(String[] args) {
		  Scanner s = new Scanner(System.in);// system in patra introducir dato
		    System.out.print("Introduzca un número: "); // error en la comilla
		    int ni = s.nextInt(); // next in convierte lo introducido en numero
		    int c=ni;
		    int afo = 0;
		    int noAfo = 0;
		    while (ni > 0) {
			  int digito = (int)(ni % 10);
		      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
				afo++;
				ni /= 10;// Se establece un limite tambien para terminar el loop
		      } else {
				noAfo++;
				ni /= 10;
		    }  
		      
		  }
		 if (afo > noAfo) {
		      System.out.println("El " + c + " es un número afortunado.");
		    } else {
		      System.out.println("El " + c + " no es un número afortunado.");
		    }// se sacan fuera de las llaves para evaluar el resultado y que no se repitan 
	}
	
}
