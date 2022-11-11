import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import { SingleHotel } from './pages/hotel/SingleHotel.jsx'
import List from './pages/list/List'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotels/:id' element={<SingleHotel/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
