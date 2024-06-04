import { useEffect, useState } from 'react'
import './App.css'
import { Icons } from '../components/Icons'

function App() {
  const [search, setSearch] =  useState('Queretaro')
  const [values, setValues] =  useState('')
  const [icon, setIcon] =  useState('')
  const REACT_APP_API_KEY = 'a8912a10114c8143921521d0e1d34e8d'

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${REACT_APP_API_KEY}`

  const getData = async () => {
    await fetch(URL)
      .then( response => { return response.json() })
      .then( data => {
        if(data.cod >= 400){
          setValues(false)
        }else {
          setValues(data)
          setIcon(data.weather[0].main)
          console.log(data)
        }
      } )
      .catch( error => {
        console.log( error )
      })
    }

  useEffect(() => {
    getData()
  }, [search])
  
  const handleSearch = (e) => {
    if( e.key === 'Enter'){
      setSearch(e.target.value)
    }
  } 


  return (
    <>
    
    
    <div className='container'>
      <h2>React Weather App</h2>
      <div className='row'>
        <input 
        onKeyDown={handleSearch}
        type="text"
        autoFocus />
      </div>
    </div>
    
    <div className='card'>
      { (values) ? (
        <div className='card-container'>
          <h1 className='city-name'> {values.name} </h1>
          <p className='temp'> {values.main.temp.toFixed(0)}&deg;</p>
          <img className='icon' src={Icons(icon)} alt="icon-weather" />
          

          <div className='card-footer'>
            <p className='temp-max-min'> {values.main.temp_min.toFixed(0)}&deg; | {values.main.temp_max.toFixed(0)}&deg; </p>
          </div>
        </div>
      ) : (
        <h1></h1>
      )
      }
    </div>
    
    </>
  )
}

export default App
