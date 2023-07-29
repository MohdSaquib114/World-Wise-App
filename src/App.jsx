import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import { CityProvider} from "./contexts/CitiesContext";
// import Form from './components/Form'

function App() {

  return (
    <CityProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login"  element={<Login />}/>
      <Route path="app" element={<AppLayout />}>
<Route index element={<Navigate to="cities"/>} />
<Route path="cities" element={<CityList />} />
<Route path="countries" element={<CountryList />} />
<Route path="cities/:id" element={<City />} />
<Route path="form" element={<p>form</p>} />
      </Route>
      <Route path="pricing" element={<Pricing />}/>
      <Route path="product" element={<Product />}/>
    </Routes>
 
    </BrowserRouter>
    </CityProvider>
  )
}

export default App
