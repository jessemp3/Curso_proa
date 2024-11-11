package comandos_condicionais;
import java.util.Scanner;
public class Maior {
    public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

        System.out.println("-----MAIOR-----");
        System.out.println("Digite o primeiro número:");
        int valor1 = input.nextInt();

        System.out.println("Digite o segundo valor");
        int valor2 = input.nextInt();

        if (valor1 > valor2){
            System.out.println("o valor 1 é maior");
        }else{
            System.out.println("O valor 2 é maior");
        }
    }
}

.
