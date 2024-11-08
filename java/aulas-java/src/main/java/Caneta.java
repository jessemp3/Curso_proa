public class Caneta {

    //    se começa uma classe criando seus atributos
    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;

    //semelhante a uma função do javaScript
    public void rabiscar(){
        //validação
        if(tampada == false){
            System.out.println("Rabiscar");
        }else{
            System.out.println("No Rabiscar");
        }
    }

    public void tampar(){
        tampada = true;
    }

    public void destampar(){
        tampada = false;
    }

    public void estado(){
        System.out.println("Modelo: " + modelo);
    }

    public void cor(){
        cor = "Azul";
        System.out.println("Cor: " + cor);
    }

    public void ponta(){
        ponta = (float) 0.5;
        System.out.println("Ponta: " + ponta);
    }

    public void carga(){
        carga = (int)(carga * 100);
        System.out.println("Carga: " + carga);
    }

    public static void main(String[] args) {
        System.out.println("hello world");
        new Caneta().rabiscar();
        new Caneta().tampar();
        new Caneta().cor();
        new Caneta().ponta();
        new Caneta().carga();

    }
}