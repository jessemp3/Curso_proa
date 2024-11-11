package comandos_condicionais;
import  java.util.Scanner;

public class Votar {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);//entrada de dados

        System.out.println("------Votação-------");
        System.out.print("Insira a sua idade:");

        int numero = input.nextInt();

        if (numero < 16){
            System.out.println("Não precisa Votar");
        } else if (numero == 16 || numero >= 69) {
            System.out.println("O seu voto é facultativo , pórem não obrigatorio");
        }else {
            System.out.println("Seu voto é obrigatorio");
        }
    }
}
