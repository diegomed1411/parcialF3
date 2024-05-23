import '../styles/card.css'

export const Card = ({movie}) => {
  return (
    <div className="cardContainer">
    <h4>{movie.nombre}</h4>
    <h4>{movie.genero}</h4>
  </div>
  )
}
