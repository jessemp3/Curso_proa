package comandos_condicionais;
import java.util.Scanner;

public class Switch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Entre com um número: ");
        int farol = sc.nextInt();
        String mensagem;

        switch (farol){
            case 1: mensagem = "Farol verde! Siga!";
                break;
            case 2: mensagem = "Farol amarelo! Atenção, reduza velocidade!";
                break;
            case 3: mensagem = "Farol vermelho! Pare!";
                break;
            default: mensagem = "Numero incorreto/inválido!";
        }

        System.out.println(mensagem);
    }
}
