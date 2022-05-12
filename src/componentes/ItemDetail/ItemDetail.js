



import './ItemDetail.css'


const ItemDetail = ({ id, nombre, img, category, descripcion, precio }) => {

    return (

        <article className="CardItem">
            <div className="BgDetail">

                <header>
                    <h2 className="ItemHeaderDetail">
                        {nombre}
                    </h2>
                </header>

                <main className="MainDetail">
                    <img src={img} alt={nombre} className="ItemImgDetail" />
                    <div className="InfoDetailContainer">
                        <p className="InfoDetail">
                          {category}: {nombre}
                        </p>
                        <p className="InfoDetail">
                             {descripcion}
                        </p>
                        <p className="InfoDetail" id="Precio" >
                            Precio: ${precio}
                        </p>
                    </div>
                </main>
            </div>
        </article>
    )
}

export default ItemDetail