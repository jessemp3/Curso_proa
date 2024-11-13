package comandos_condicionais;

import java.util.Scanner;

public class Cargos {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Cargos de programador");

        int cod = sc.nextInt();
        String msg;

        switch (cod){
            case 1:
                double estagiario = 1400.00;
                double salarioNovo = estagiario * 0.10 + 1400;
                msg ="Programador Estagiario recebe " + "$" + salarioNovo ;
                break;
            case 2:
                double junior = 3000.00;
                salarioNovo = junior * 0.12 + 3000.00;
                msg = "Programador Junior recebe " + "$" + salarioNovo ;
                break;
            case 3:
                double pleno = 5500.00;
                salarioNovo = pleno * 0.13 + 5500.00;
                msg = "Programador Pleno recebe " + "$" + salarioNovo ;
                break;
            case 4:
                double senior = 8000.00;
                salarioNovo = senior * 0.15 + 8000.00;
                msg = "Programador Senior recebe " + "$" + salarioNovo ;
                break;
            case 5:
                double master = 12.000;
                salarioNovo = master * 0.18 + 12000.00;
                msg = "Programador Master recebe " + "$" + salarioNovo ;
                break;
            default: msg = "valor incorreto";
        }

        System.out.println(msg);


    }
}
