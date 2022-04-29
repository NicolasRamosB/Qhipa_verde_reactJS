import './Item.css';
import { Link } from 'react-router-dom'

 const Item = ({id, nombre, precio}) => {

    const handleClick = (e) => {
        e.stopPropagation()
    }
    return (
        
        <div onClick={handleClick}>
            <div>

                <div className="card">
                    <div className="img">
                        {/* <img className="icon" src="../img/grapes.PNG"/> */}
                        {/* <img className="wine" width="150" height="250" src={img} alt={nombre}/> */}
                    </div>
                    <h2>{nombre}</h2>
                    <p>${precio}</p>
                    <Link to={`detail/${id}`} className="DetailBtn">Ver detalle</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Item;