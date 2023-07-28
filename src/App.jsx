import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
const BASE_URL = 'http://localhost:8000'
function App() {
const [cities ,setCities ] = useState([])
const [isLoading, setIsLoading] = useState(false)

useEffect(()=>{
async function fetchCities(){
  try{
    setIsLoading(true)
    const res = await fetch(`${BASE_URL}/cities`)
    const data = await res.json()
    setCities(data);
  }catch{
    alert('There was an error while loading data')
  }finally{
    setIsLoading(false)
  }
}
fetchCities()
},[])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login"  element={<Login />}/>
      <Route path="app" element={<AppLayout />}>
<Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
<Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
<Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
<Route path="cities/:id" element={<City />} />
<Route path="form" element={<p>Form</p>} />
      </Route>
      <Route path="pricing" element={<Pricing />}/>
      <Route path="product" element={<Product />}/>
    </Routes>
 
    </BrowserRouter>
  )
}

export default App