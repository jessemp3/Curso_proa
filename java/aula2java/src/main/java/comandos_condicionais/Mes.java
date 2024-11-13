package comandos_condicionais;
import java.util.Scanner;

public class Mes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Entre com um número do mês");

        int num = sc.nextInt();
        String mensagem;

        switch (num) {
            case 1: mensagem = "Janeiro!";
                break;
            case 2: mensagem = "Fevereiro!";
                break;
            case 3: mensagem = "Marco!";
                break;
            case 4: mensagem = "Abril!";
                break;
            case 5: mensagem = "Maio!";
                break;
            case 6: mensagem = "Junho!";
                break;
            case 7: mensagem = "Julho!";
                break;
            case 8: mensagem = "Agosto!";
                break;
            case 9: mensagem = "Setembro!";
                break;
            case 10: mensagem = "Outubro!";
                break;
            case 11: mensagem = "Novembro!";
                break;
            case 12: mensagem = "Dezembro!";
                break;
            default: mensagem = "Os números são de 1 a 12! ";
        }

        System.out.println(mensagem);
    }
}
