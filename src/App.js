import './style.css';
import {useState} from 'react'
import Navbar from './components/Navbar'
import Cover from './components/Cover'
import HomeContainer from './components/HomeContainer';
import About from './components/About'
import Footer from './components/Footer';


function App() {

  const [kaleochat, setKaleoChat] = useState(false)
  const handleKClick = () => {
    setKaleoChat('true')
  }

const [imgstate, setImgState ] = useState('')

  

  return (
<div style={{backgroundColor:"#f9f7ec"}}>
  <Navbar handleClick={handleKClick} />
  <Cover kaleostate={kaleochat} imgstate={imgstate}/>
  <HomeContainer/>
  <About/>
  <Footer/>
</div>
    
  );
}

export default App;
