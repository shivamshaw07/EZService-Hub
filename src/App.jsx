import { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import LogIn from './components/LogIn/LogIn'
import SignIn from './components/SignIn/SignIn'
import ServiceProviderProfile from './components/ServiceProviderProfile/ServiceProviderProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/service/:serviceProvider' element={<ServiceProviderProfile/>}/>
    </Routes>
  )
}

export default App
