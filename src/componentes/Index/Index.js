import './Index.css';

const Index = () => {

    return (
        <>
        <header>
        <div className="header_container container-fluid">
            <img src="./img/logo/1.png" alt="Qhipa_Verde_Logo" className="header_img"/>
            <p className="header_slogan">Creamos un futuro diferente, un futuro más verde</p>
        </div>
    </header>
<main>
        <section className="section-main-index">

            <article className="article-container">
                <p className="title-p-somos">¿QUIENES SOMOS?</p>
                <div className="container-p-img-index">
                    <p className="p-main-index-somos">Forestales de profesión dedicadas al
                        manejo de residuos de madera,
                        jardinería y comercio justo.
                        Sé parte de nuestra comunidad. Juntos
                        crearemos un futuro diferente, un
                        futuro más verde.</p>
                </div>
            </article>

            <article className="article-container">

                <div className="container-p-img-mision">
                    <img src="./img/1.png" alt="asesorias" className="img-main-index"/>
                    <div className="title-parraf">
                        <p className="title-p">MISIÓN</p>
                        <p className="p-main-index">Qhipa es una empresa que busca dar vida al planeta para un futuro más
                            verde incentivando a las
                            personas que viven en zonas urbanas a cuidar y valorar las áreas verdes dentro y fuera de su
                            hogar; mediante la adquisición de plantas, asesorías, talleres y consumo de productos hechos
                            a
                            base de residuos.</p>
                    </div>
                </div>
            </article>

            <article className="article-container">
                <div className="container-p-img-vision">
                    <img src="./img/2.png" alt="" className="img-main-index"/>
                    <div className="title-parraf">
                        <p className="title-p">VISIÓN</p>
                        <p className="p-main-index">Ser una marca reconocida a nivel nacional que revalorice los residuos y
                            mejore espacios, mediante paisajismo, jardinería , creando productos y forjando alianzas con
                            otros actores que compartan nuestro propósito de dar vida.</p>
                    </div>
                </div>
            </article>

            <article className="article-img-delivery">
                <img src="./img/delivery/delivery-recojo.png" alt="delivery" className="img-delivery"/>
                <img src="./img/delivery/tarifapordistrito.png" alt="deliverytarifa" className="img-delivery"/>
            </article>
            </section>
    </main>
    </>
    )
}

export default Index