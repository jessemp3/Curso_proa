package primeiraaulabasico;
import java.util.Scanner;


public class Atividade2 {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);//entrada de dados
        System.out.println("Insira o primeiro valor");
        int numero = input.nextInt();
        System.out.println("Insira o segundo valor");
        int numero2 = input.nextInt();
        System.out.println("Insira o terceiro valor");
        int numero3 = input.nextInt();
        System.out.println("Insira o quarto valor");
        int numero4 = input.nextInt();


        int media = ((numero + numero2 + numero3 + numero4) / 4);

        System.out.println("A média é " + media);
    }
}
