import './Item.css';

import { Link } from 'react-router-dom'


const Item = ({ id, nombre, img, precio, oferta, ofertaPrecio }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Hice click en item')
    }


    return (
        <article className="CardContainer" onClick={handleClick}>

            <div className="Card">

                <div className="CardContent">
                    <h2 className="title">
                        {nombre}
                    </h2>
                    <div className="img">
                        
                        <img className="productos" src={img} alt={nombre} />

                        <img className="icono" src="/img/logo/hojas_logo2.png" alt="icono" />

                    </div>


                    <p className="CardPrecio">
                        ${precio}
                        <span className="ofertaPrecio">{ofertaPrecio}</span>


                    </p>
                    <p className="oferta">{oferta}</p>


                    <Link to={`/detail/${id}`} className='DetailBtn'>Ver detalle</Link>
                </div>
            </div>
        </article>
    )
}

export default Item


