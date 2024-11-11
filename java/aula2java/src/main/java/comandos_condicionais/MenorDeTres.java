package comandos_condicionais;
import java.util.Scanner;

public class MenorDeTres {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Menor de três");

        System.out.print("Entre com o primeiro número: ");
        int valor1 = input.nextInt();


        System.out.print("Entre com o segundo número: ");
        int valor2 = input.nextInt();

        System.out.print("Entre com o terceiro número: ");
        int valor3 = input.nextInt();


        if(valor1 > valor2 && valor1 > valor3){
            System.out.print(" O Valor 1 é o maior");
        } else if (valor2 > valor1 && valor2 > valor3) {
            System.out.print(" O valor 2 é maior");
        }else{
            System.out.print(" O valor 3 é maior");
        }

    }
}
