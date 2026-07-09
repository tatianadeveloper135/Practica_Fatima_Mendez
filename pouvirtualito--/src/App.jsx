import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TamagotchiPou from './TamagotchiPou'
import Contador from './Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Contador/>

     <TamagotchiPou/>
    </>
  )
}

export default App
