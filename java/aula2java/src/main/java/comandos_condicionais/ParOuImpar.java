package comandos_condicionais;
import  java.util.Scanner;
public class ParOuImpar {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);


        System.out.println("---Par ou Impar---");

        System.out.println("Digite O valor: ");
        int valor = input.nextInt();

        if (valor % 2 == 0){
            System.out.println(" O valor " + valor +  " é par ");
        }else{
            System.out.println(" O valor " + valor +  " é impar ");

        }
    }
}

