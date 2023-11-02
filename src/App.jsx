import React from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import "./Components/common.css"
import Page from './Components/Page'
const App = () => {
  return (
<BrowserRouter>
    <Nav/>
    <Routes>
      <Route element={<Page data="https://fakestoreapi.com/products"/>} path='/' />
      <Route element={<Page data="https://fakestoreapi.com/products/category/men's%20clothing"/>} path='/men'/>
      <Route element={<Page data="https://fakestoreapi.com/products/category/women's%20clothing"/>} path='/women'/>
      <Route element={<Page data="https://fakestoreapi.com/products/category/jewelery"/>} path='/jewelery'/>
      <Route element={<Page data="https://fakestoreapi.com/products/category/electronics"/>} path='/electronics'/>
    </Routes>
    {/* <Footer/> */}
</BrowserRouter>
  )
}

export default App