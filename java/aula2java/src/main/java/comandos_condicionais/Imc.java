package comandos_condicionais;
import java.util.Scanner;

public class Imc {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("------IMC-----");
        System.out.print("Digite o seu peso (em kg): ");
        int peso = input.nextInt();

        System.out.print("Digite a sua altura (em cm): ");
        float altura = input.nextFloat();
//        float alturaEmMetros = alturaEmCm / 100.0f;

        float imc = peso / (altura * altura);

        System.out.printf("Seu IMC é: %.2f%n", imc);

        if (imc <= 18.5) {
            System.out.println("Você está abaixo do peso");
        } else if (imc >= 18.6 && imc <= 24.9) {
            System.out.println("Você está no peso ideal");
        } else if (imc >= 25 && imc <= 29.9) {
            System.out.println("Você está com sobrepeso");
        } else {
            System.out.println("Você está obeso");
        }
    }
}