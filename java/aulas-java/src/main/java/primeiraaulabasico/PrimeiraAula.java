package primeiraaulabasico;
//biblioteca que permite a entrada de dados !
import java.util.Scanner;

public class PrimeiraAula {
   public static void main(String[] args) {

      Scanner input = new Scanner(System.in);//entrada de dados
      System.out.println("Insira o primeiro valor");
      int numero = input.nextInt();
      System.out.println("Insira o segundo valor");
      int numero2 = input.nextInt();

      int soma = numero + numero2;

      System.out.println("A soma dos valores é " + soma);
//      System.out.println("O valor do primeiero número é " +  numero2);


     }
}
