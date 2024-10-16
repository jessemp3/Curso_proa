import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Informations from "./Components/Informations/Informations";
import Instrumentos from "./Components/Instrumentos/Instrumentos";
import OurShop from "./Components/OurShop/OurShop";
import Video from "./Components/Video/Video";

export default function App() {

  // const imageUrl = 

  return (
    <>
      <Header/>
      <OurShop/>
      <div style={{minHeight:'150px', width:'90%' , display:"flex" , flexDirection:"row",justifyContent:"space-around" , margin: '90px auto' }}>
      <Instrumentos img="src/assets/guitar.png" name='Fender' text='R$ 299.99'/>
      <Instrumentos img="src/assets/guitar.png" name='Fender' text='R$ 299.99'/>
      <Instrumentos img="src/assets/guitar.png" name='Fender' text='R$ 299.99'/>
      <Instrumentos img="src/assets/guitar.png" name='Fender' text='R$ 299.99'/>
      <Instrumentos img="src/assets/guitar.png" name='Fender' text='R$ 299.99'/>
      </div>
      <Video/>
      <Informations/>
      <Footer/>


    </>
  )
}


