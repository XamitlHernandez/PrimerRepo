package org.generation.Ejercicios;
import java.util.Scanner; // se importa la libreria para ocupa la herramienta escaner
public class Ejercicio {

	public static void main(String[] args) {// se agrega la funcion main

	    Scanner s = new Scanner(System.in);// se agrega system.in para que ingrsen los datos
	    
	    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    String j1 = s.nextLine();
	    
	    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
	    Scanner s2 = new Scanner(System.in);
	    String j2 = s2.nextLine();// se nombra la variable s2
	    int g = 1;
	    if (j1 == j2){//tenia parentesis de mas
	      System.out.println("Empate");
	    } else {
	      switch(j1) {
	        case "piedra":
	          if (j2 == "tijeras") {
	            g = 1;
	          }

	        case "papel":
	          if (j2 == "piedra") {
	            g = 1;
	          }
	        case "tijera":
	          if (j2.equals("papel")) {
	            g = 1;
	          }
	          break;
	        default:
	        	g=2;
	      }
	    }
	    System.out.println("Gana el jugador " + g);
	}

}
