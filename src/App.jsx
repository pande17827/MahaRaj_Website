import { useState } from 'react'



// importing screens
import Home_Screen from './screens/Home/Home_Screen'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home_Screen></Home_Screen>
    </>
  )
}

export default App
