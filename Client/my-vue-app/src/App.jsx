import './App.css'

import Home from './pages/Home'


import Navsection from './components/navsection'
import Footer from './components/footer'
import Thethread from './components/Thethread'
import Networthyslider from './components/networthyslider'
import BannerSlider from './components/bannerSlider'
import ProdductSlider from './components/productSlider'



function App() {
  

  return (

   <>
   <Home/>
   </>
    <div style={{width:"100%"}}>
     <Navsection/>
    <br />
    <br />
    <br />
    <br />

<BannerSlider/>    
       
<ProdductSlider/>
       
      
<Networthyslider/>
 <Thethread/>
    <br />
    <br />
    <br />
    <Footer/>
    </div>

  )
}

export default App
