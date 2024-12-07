import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './assets/pages/home/Home'
import Contact from './assets/pages/contact/Contact'
import About from './assets/pages/about/About'
import Signup from './assets/pages/signup/Signup'
import Shop from './assets/pages/popuppage/shop/Shop'

function App() {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App
