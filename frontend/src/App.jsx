import { useState } from 'react'
import './App.css'
import Signup from './components/pages/Signup'
import Signin from './components/pages/Signin'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Signup/>}
          ></Route>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
