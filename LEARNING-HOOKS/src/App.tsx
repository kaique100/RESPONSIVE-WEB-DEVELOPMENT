import Person from './components/Person'
import { useState, useEffect } from 'react'

function App() {
 
  const [name, setName] = useState('Kaique')



  useEffect(()=> {
    console.log('ok')
  }, [])

  

  function changeName() {
   setName('Marcelo')
  }

  return (
    <>
      <Person name={name} surname="Santos"/>
      <br />
      <button onClick={changeName}>Trocar nome</button>
    </>
  )
}

export default App
