import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import ShoppingCart from './components/ShoppingCart.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
       <Route path='/'  element={<ShoppingCart />}/>
     </Routes>
    </div>  
    </BrowserRouter>
  )
}

export default App
