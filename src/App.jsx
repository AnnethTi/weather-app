import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] =  useState('')
  const [values, setValues] =  useState('')
  const [icon, setIcon] =  useState('')

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=queretaro&lang=es&unit=metric&appid=a8912a10114c8143921521d0e1d34e8d`

  const getData = async () => {
    await fetch(URL)
      .then( response => { return response.json() })
      .then( data => {
        console.log(data)
      } )
      .catch( error => {
        console.log( error )
      })
    }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
      <h2>React Weather App</h2>
    </>
  )
}

export default App
