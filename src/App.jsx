// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.module.css'
import {Btn} from './components/btn'
import {Menu} from './components/menu'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <Menu s1='UM' s2='DOIS' s3='TRES'/>
   <main>
    <section id='s1'>primeira
      <br />
      <Btn text='Pra braxo' func='#s2'/>
    </section>
    <section id='s2'>segunda
      <br />
   <Btn  text='Mais Pra braxo' func='#s3'/>
    </section>
    <section id='s3'>terceira
      <br />
    <Btn text='Voltar lindo' func='s1'/>
    </section>
   </main>
      
    
    </>
  )
}

export default App
