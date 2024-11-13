package comandos_condicionais;
import java.util.Scanner;

public class Combo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Bem vindo ao Mc!");
        System.out.print("Escolha um Combo(1-5):");

        int comboNumber = sc.nextInt();

        String comboDescription;
        switch (comboNumber) {
            case 1:
                comboDescription = "Big Mac Combo: Big Mac sandwich, medium fries, and medium soft drink.";
                break;
            case 2:
                comboDescription = "Quarter Pounder with Cheese Combo: Quarter Pounder with Cheese sandwich, medium fries, and medium soft drink.";
                break;
            case 3:
                comboDescription = "McNuggets Combo: 10-piece Chicken McNuggets, medium fries, and medium soft drink.";
                break;
            case 4:
                comboDescription = "Filet-O-Fish Combo: Filet-O-Fish sandwich, medium fries, and medium soft drink.";
                break;
            case 5:
                comboDescription = "McDouble Combo: McDouble sandwich, medium fries, and medium soft drink.";
                break;
            default:
                comboDescription = "Invalid choice. Please select a number between 1 and 5.";
        }

        System.out.println(comboDescription);
    }
}
