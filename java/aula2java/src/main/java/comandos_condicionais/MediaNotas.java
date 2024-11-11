package comandos_condicionais;
import java.util.Scanner;

 class MediaNotas {

  static void main(String[] args) {

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

      if (media < 5){
          System.out.println("Você está reprovado !");
      } else if (media > 5) {
          System.out.println("Você Passou");
      }
  }
}
