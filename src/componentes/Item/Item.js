import './Item.css';

import { Link } from 'react-router-dom'


const Item = ({id, nombre, img, precio }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Hice click en item')
    }


    return (
        <article className="CardContainer" onClick={handleClick}>
            <div className="Card">
                <div className="CardContent">
                <div className="img">
                   <img className="icon" src="../img/grapes.PNG" alt="" /> 
                    <img className="productos"  src={img} alt={nombre}/>  
               </div> 
                <h2 className="title">
                    {nombre}
                </h2>
               
                <p className="CardTitle">
                    Precio: ${precio}
                </p>
                <Link to={`/detail/${id}`} className='DetailBtn'>Ver detalle</Link>
                </div>
                </div>
        </article>
    )
}

export default Item

//    <div className="CardContainer" onClick={handleClick}>
//         <div className="Card">
//             <div className="CardContent">
//                 <div className="img">
//                     {/* <img className="icon" src="../img/grapes.PNG"/> */}
//                     {/* <img className="wine" width="150" height="250" src={img} alt={nombre}/> */}
//                 </div>
//                 <h4 className="CardTitle">{nombre}</h4>
//                 <p>${precio}</p>
//                 <Link to={`detail/${id}`} className="DetailBtn">Ver detalle</Link>
//             </div>
//         </div>
//     </div>
        