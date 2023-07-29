import { useContext } from "react";
import {  createContext, useEffect, useState } from "react";

const BASE_URL = 'http://localhost:8000'
const CityContext = createContext();

function CityProvider({children}){
    const [cities ,setCities ] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentCity,setCurrentCity] = useState({})
    
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
    async function getCity(id){
        try{
          setIsLoading(true)
          const res = await fetch(`${BASE_URL}/cities/${id}`)
          const data = await res.json()
          setCurrentCity(data);
        }catch{
          alert('There was an error while loading data')
        }finally{
          setIsLoading(false)
        }
      }
    
    return <CityContext.Provider value={{
        isLoading,
        cities,
        currentCity,
        getCity,
    }}>
        {children}
    </CityContext.Provider>
}
const useCities = ()=>{
    const citiesContext = useContext(CityContext);
    if(citiesContext === undefined) throw new Error ("Hook used out side where it not to be")
    return citiesContext
}

export {CityProvider, useCities}