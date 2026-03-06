function Card({ imagen, nombre, descripcion }) {

    return (
  
      <div className="card">
  
        <img src={imagen} alt={nombre} />
  
        <h3>{nombre}</h3>
  
        <p>{descripcion}</p>
  
      </div>
  
    );
  
  }
  
  
  export default Card;