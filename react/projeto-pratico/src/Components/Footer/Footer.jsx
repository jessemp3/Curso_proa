import style from "../../styles/footer.module.css"
import face from "../../assets/face.jpg"
import inta from "../../assets/insta.jpg"
import tiktok from "../../assets/tiktok.png"
import whats from "../../assets/whats.png"




export default function Footer(){
    return(
        <footer className={style.footer}>
            <h3>siga-nós nas redes sociais</h3>
            <div className={style.icons}>
                <img src={inta} alt="" />
                <img src={face} alt="" />
                <img src={tiktok} alt="" />
                <img src={whats} alt="" />


            </div>
            <h3>Telefone para contato - (11)9 1105-4439</h3>
        </footer>
    )
}