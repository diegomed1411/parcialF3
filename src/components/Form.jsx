import { useState } from "react"
import FormMessage from "./FormMessage"
import FormError from "./FormError"
import '../styles/form.css'

export const Form = ({peliculas, setPeliculas}) => {
  const [pelicula, setPelicula] = useState({
    nombre:"",
    genero:""
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(pelicula.nombre.trim().length > 2 && 
    !pelicula.nombre.startsWith(" ") && 
    pelicula.genero.trim().length>5){
        setShowSuccess(true)
        setShowError(false)
        setPeliculas([...peliculas, pelicula])
        setTimeout(() => {
            setShowSuccess(false)
            setPelicula({nombre:"", genero:""})
          }, 3000)
    }else{
        setShowError(true)
        setShowSuccess(false)
    }
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Pelicula</label>
        <input 
        type="text" 
        placeholder="Ingresa nombre de Pelicula"
        value={pelicula.nombre}
        onChange={(e)=>setPelicula({...pelicula, nombre: e.target.value})}/>
        <label>Genero</label>
        <input 
        type="text" 
        placeholder="Genero de la pelicula"
        value={pelicula.genero}
        onChange={(e)=>setPelicula({...pelicula, genero: e.target.value})}/>
        <button>Cargar Pelicula</button>
        {showSuccess && <FormMessage pelicula={pelicula} />}
        {showError && <FormError />}  
        
    </form>
    </>
  )
}
