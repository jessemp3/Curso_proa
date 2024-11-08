public class TesteCaneta {
    //metodo principal
    public static void main(String[] args) {
        Caneta c1 = new Caneta();

        c1.modelo = "bic";

        c1.carga();
        c1.cor();
        c1.estado();
        c1.rabiscar();
    }
}