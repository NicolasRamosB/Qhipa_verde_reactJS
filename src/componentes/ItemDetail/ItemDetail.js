



import './ItemDetail.css'


const ItemDetail = ({ id, nombre, img, category, description, precio}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {precio}
                </p>
            </section>
        </article>
    )
}

export default ItemDetail