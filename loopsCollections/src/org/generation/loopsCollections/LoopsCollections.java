package org.generation.loopsCollections;
import java.util.Scanner;
public class LoopsCollections {
  
	public static void main(String[] args) {
		//Loops:While
		 int contador= 1;//contador
		  while (contador <= 5) {// condicion
			  System.out.println("Iteracion" + contador);
			  contador++; // codigo a ejecutar
			  
		  }
		  // Do..While
		  int contadorDoWhile= 1; //contador
		  do { //Codigo a ejecutar
			  System.out.println("IteracionDOwhile"+ contadorDoWhile);
			  contadorDoWhile++;

	} while(contadorDoWhile <=5 );// Condicion a ejecutarse
		  //for
		  for(int i=0; i<=5;i++) {
			  System.out.println("Contador For: "+ i);
		  }
		  
		  // ForEach
		  String[] names= {"Xamitl","Maggy","Alex"};
		  String misCompañerosFavs = "";
		  for(String name : names) {
			  misCompañerosFavs += name;
		  }
		  System.out.println(misCompañerosFavs);
		  System.out.println("Ingresa tu nombre");
		Scanner myObject= new Scanner (System.in);
	    String nombre = myObject.nextLine();
	    for (int i = 0; i<nombre.length();i++) {
	    	System.out.println(nombre.charAt(i));
	    }
	    
	    System.out.println("Ingresa un numero");
	    Scanner myNumber= new Scanner (System.in);
	    int numero = myNumber.nextInt();
	    int a=0;
	    int b=1;
	    int c=0 ;
	    System.out.println(a);
	    int i=2;
	    	do {
	    		c= a+b;
		    	a=b;
		    	b=c;
		    	System.out.println(a);
		    	i++;
	    	}	
	   while (i<=numero);
	    
	    
		
	}
	
}
