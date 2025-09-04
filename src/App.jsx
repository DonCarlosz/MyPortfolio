
import Notfound from './Components/Notfound'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




const App = () => {
  return (
    <Routes>
      <Route index='/' element={<Home/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  )
}

export default App
