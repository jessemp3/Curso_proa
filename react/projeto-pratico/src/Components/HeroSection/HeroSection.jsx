import style from "../../styles/HeroSection.module.css"

export default function HeroSection(){
    return(
        <section  className={style.container}>
            <div className={style.bag_img}>

            </div>

            <div className={style.text}>
                <h1>Encontre aqui a viagem do seus sonhos !</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero expedita quaerat accusantium culpa velit molestiae quis voluptatum ratione omnis dicta.</p>
            </div>
        </section>
    )
}