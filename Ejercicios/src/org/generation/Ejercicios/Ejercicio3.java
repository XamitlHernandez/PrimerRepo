package org.generation.Ejercicios;
import java.util.Scanner;
public class Ejercicio3 {

	public static void main(String[] args) {
		 int[] n ={20};

		    for (int i = 0; i < n.length; i++) {// falto un +
		      n[i] = (int)(Math.random() * 381) + 20;
		      System.out.println(n[i] + " ");// falto llamar bien a ala funcion 
		    }
		    System.out.println("\n¿Qué números quiere resaltar? "); //faltaba una n
		    System.out.println("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");// Falto ln
		    Scanner myObj= new Scanner(System.in);// Usamos esta herramienta para introducir una opcion
		    int opcion = myObj.nextInt(); // convertimos esa opcion en un numero

		    int multiplo = (opcion == 1) ? 5 :  7; // los simbolos estaban al areves

		    for(int e : n) { // Faltaba una llave
		      if (e % multiplo == 0) {
		        System.out.println("[" + e + "] ");} // Falta un ln
		       else {
		        System.out.println(e + " "); // cambie el in por el out y agregue una ln 
		      }
	}

}
}
