import './Index.css';

const Index = () => {

    return (
        <>
        <header>
        <div class="header_container container-fluid">
            <img src="./img/logo/1.png" alt="Qhipa_Verde_Logo" class="header_img"/>
            <p class="header_slogan">Creamos un futuro diferente, un futuro más verde</p>
        </div>
    </header>
<main>
        <section class="section-main-index">

            <article class="article-container">
                <p class="title-p-somos">¿QUIENES SOMOS?</p>
                <div class="container-p-img-index">
                    <p class="p-main-index-somos">Forestales de profesión dedicadas al
                        manejo de residuos de madera,
                        jardinería y comercio justo.
                        Sé parte de nuestra comunidad. Juntos
                        crearemos un futuro diferente, un
                        futuro más verde.</p>
                </div>
            </article>

            <article class="article-container">

                <div class="container-p-img-mision">
                    <img src="./img/1.png" alt="asesorias" class="img-main-index"/>
                    <div class="title-parraf">
                        <p class="title-p">MISIÓN</p>
                        <p class="p-main-index">Qhipa es una empresa que busca dar vida al planeta para un futuro más
                            verde incentivando a las
                            personas que viven en zonas urbanas a cuidar y valorar las áreas verdes dentro y fuera de su
                            hogar; mediante la adquisición de plantas, asesorías, talleres y consumo de productos hechos
                            a
                            base de residuos.</p>
                    </div>
                </div>
            </article>

            <article class="article-container">
                <div class="container-p-img-vision">
                    <img src="./img/2.png" alt="" class="img-main-index"/>
                    <div class="title-parraf">
                        <p class="title-p">VISIÓN</p>
                        <p class="p-main-index">Ser una marca reconocida a nivel nacional que revalorice los residuos y
                            mejore espacios, mediante paisajismo, jardinería , creando productos y forjando alianzas con
                            otros actores que compartan nuestro propósito de dar vida.</p>
                    </div>
                </div>
            </article>

            <article class="article-img-delivery">
                <img src="./img/delivery/delivery-recojo.png" alt="delivery" class="img-delivery"/>
                <img src="./img/delivery/tarifapordistrito.png" alt="deliverytarifa" class="img-delivery"/>
            </article>
            </section>
    </main>
    </>
    )
}

export default Index