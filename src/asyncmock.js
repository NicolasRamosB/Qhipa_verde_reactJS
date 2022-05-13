const products = [
    {
        "id": 1,
        "nombre": "Sustrato premium 3L",
        "precio": 10,
        "img": '../img/productos/Jardinería/SustratoPremium3L/Sustratojfd.jpg',
        "category": "Productos",
        "descripcion": "El sustrato ideal para que tu planta crezca en un ambiente adecuado, húmedo pero con buen drenaje. Elaborado con perlita, vermiculita, arcilla expandida, fibra de coco y humus."
    },
    {
        "id": 2,
        "nombre": "Biol 400ml",
        "img": '../img/productos/Jardinería/Biol/Presentacionde1L.jpg',
        "precio": 15,
        "category": "Productos",
        "descripcion": "Tu planta no crece como debería hacerlo, se enferma muy rápido. Tenemos la solución perfecta. BIOL: Fertilizante natural elaborado con residuos orgánicos. Incluye indicaciones de uso. Presentación desde 400ml, 1L a más."
    },
    {
        "id": 3,
        "nombre": "Detergente agrícola 400ml",
        "img": '../img/productos/Jardinería/DetergenteAgrícola/Detergenteagrícola.jpg',
        "precio": 12,
        "ofertaPrecio": "/ $10",
        "category": "Productos",
        "descripcion": "Tu planta presenta insectos que no permite que nuevas hojas crezcan porque se la comen. No te preocupes que tenemos la solución ideal. DETERGENTE AGRICOLA: Previene y elimina los insectos. No es tóxico, hecho con almidón. Incluye indicaciones de uso."
    },
    {
        "id": 4,
        "nombre": "Fungicida 400ml",
        "img": '../img/productos/Jardinería/Fungicida/IMG_9648.jpg',
        "precio": 12,
        "ofertaPrecio": "/ $10",
        "category": "Productos",
        "descripcion": "Tus plantas tienen manchas en las hojas, marrones o puntos. Posiblemente tenga hongos. Utiliza nuestro FUNGICIDA que los previene y elimina hongos. ",
        "extra": "No estás segura si tiene hongos, escríbenos envianos una foto a nuestro whatsapp."
    },
    {
        "id": 5,
        "nombre": "Control pack",
        "img": '../img/productos/Jardinería/ControlPack/ControlPack.jpg',
        "precio": 36,
        "ofertaPrecio": "/ $30",
        "category": "Productos",
        "descripcion": "¡El pack que tus plantas estaban esperando! BIOL: Fertilizante natural elaborado con residuos orgánicos. DETERGENTE AGRICOLA: Previene y elimina los insectos. No es tóxico, hecho con almidón. FUNGICIDA: Previene y elimina hongos. Presentación en botellas de 400ml. Incluye una asesoría virtual. "
    },
    {
        "id": 6,
        "nombre": "Herramientas jardinería",
        "img": '../img/productos/Jardinería/HerramientaJardinería/Herramientas.jpg',
        "precio": 20,
        "category": "Productos",
        "descripcion": "Si bien podemos utilizar lo que tenemos en casa para nuestras plantas, es mejor utilizar las herramientas que están creadas para ellas. Palita, trinche y rastrillo con mango de madera. "
    },
    {
        "id": 7,
        "nombre": "Pack jardinería",
        "img": '../img/productos/Jardinería/PackJardinería/packjardinería.jpg',
        "precio": 56,
        "category": "Productos",
        "descripcion": "Te gustaría empezar a cuidar tus plantas, este es el pack que no sabías que estabas buscando. Incluye: 3L de sustrato premium, maceta, planta aromática (la que tengamos en stock), palita, trinche y rastrillo."
    },
    {
        "id": 8,
        "nombre": "Semilla",
        "img": '../img/productos/Jardinería/Semilla/19.png',
        "precio": 9,
        "category": "Productos",
        "descripcion": "No hay mayor satisfacción que ver tus plantas crecer de forma orgánica y cosecharlas. Aprende junto con nosotras a cultivarlas, tenemos a tu disposición las siguientes semillas:",
        "variedad": {
            "rabanito": "Rabanito",
            "huacatay": "Huacatay",
            "espinaca": "Espinaca",
            "acelga": "Acelga",
            "tomate": "Tomate",
            "albahaca": "Albahaca",
            "beterraga": "Beterraga",
            "lechuga": "Lechuga",
            "colmorada": "Col morada",
            "cilantro": "Cilantro",
            "Perejil": "Perejil",
            "Apio": "Apio"
        },
        "promo": "Por la compra de 3 semillas a más, llévate GRATIS CALENDARIO DE SIEMBRA y ASESORÍA VIRTUAL para que puedas tener éxito desde tu primera siembra."
    },
    {
        "id": 9,
        "nombre": "Hortalizas",
        "img": '../img/productos/Jardinería/Hortalizas/plantadas.jpg',
        "precio": 9,
        "category": "Productos",
        "descripcion": "Aromatiza o cultiva tus propios alimentos en casa. Nada mejor que verlas crecer para luego cosecharlas, fruto de tu tiempo y dedicación. Come sano, come orgánico al mismo tiempo que ahorras unos cuantos soles. Elige la planta:",
        "variedad":
        {
            "manzanilla": "Manzanilla",
            "lavanda": "Lavanda",
            "huacatay": "Huacatay",
            "oregano": "Orégano",
            "muña": "Muña",
            "hierbabuena": "Hierba Buena",
            "menta": "Menta",
            "romero": "Romero"
        },
        "promo": "Por la compra de 3 plantas, llévate GRATIS ASESORÍA VIRTUAL para que puedas ubicarlas, regarlas y mantenerlas de forma adecuada."
    },
    {
        "id": 10,
        "nombre": "Katari S (25CM)",
        "img": '../img/productos/Jardinería/Katari/25.jpg',
        "precio": 42,
        "category": "Productos",
        "descripcion": "Te gustaría adornar tu casa con plantas colgantes. Elaboradas con macramé, color único blanco. Se pueden colocar macetas de diámetros de 15cm a 25cm. Las tallas son de acuerdo al largo.",
        "talle": "S (25CM)",
        "extra": "¿Deseas instalación de tu KATARI? Podemos ayudarte, continuemos conversando por whatsapp."
    },
    {
        "id": 11,
        "nombre": "Katari M (30CM)",
        "img": '../img/productos/Jardinería/Katari/katari.jpg',
        "precio": 54,
        "category": "Productos",
        "descripcion": "Te gustaría adornar tu casa con plantas colgantes. Elaboradas con macramé, color único blanco. Se pueden colocar macetas de diámetros de 15cm a 25cm. Las tallas son de acuerdo al largo.",
        "talle": "M (30CM)",
        "extra": "¿Deseas instalación de tu KATARI? Podemos ayudarte, continuemos conversando por whatsapp."
    },
    {
        "id": 12,
        "nombre": "Katari L (35CM)",
        "img": '../img/productos/Jardinería/Katari/35.jpeg',
        "precio": 65,
        "category": "Productos",
        "descripcion": "Te gustaría adornar tu casa con plantas colgantes. Elaboradas con macramé, color único blanco. Se pueden colocar macetas de diámetros de 15cm a 25cm. Las tallas son de acuerdo al largo.",
        "talle": "L (35CM)",
        "extra": "¿Deseas instalación de tu KATARI? Podemos ayudarte, continuemos conversando por whatsapp."
    },
    {
        "id": 13,
        "nombre": "Rubic",
        "img": '../img/productos/Jardinería/Rubic/IMG-6963.jpg',
        "precio": 48,
        "ofertaPrecio": "/ $45",
        "category": "Productos",
        "descripcion": "Maceta de 10x10x10cm preservada con aceite de linaza. Ideal para tu mesa de centro, comedor, escritorio o ventana. Incluye suculenta echeveria spp.",
        "extra": "Si lo deseas como regalo corporativo o recuerdo, continuemos conversando para brindarte nuestros precios especiales acorde a la cantidad que necesitas."
    },
    {
        "id": 14,
        "nombre": "Rubic con pirograbado",
        "img": '../img/productos/Jardinería/Rubicconpirograbado/IMG-8096.jpg',
        "precio": 54,
        "ofertaPrecio": "/ $50",
        "category": "Productos",
        "descripcion": "Maceta de 10x10x10cm preservada con aceite de linaza. Ideal para tu mesa de centro, comedor, escritorio o ventana. Incluye suculenta echeveria spp. y pirograbado con el nombre que nos indiques.",
        "extra": "Si lo deseas como regalo corporativo o recuerdo, continuemos conversando para brindarte nuestros precios especiales acorde a la cantidad que necesitas."
    },
    {
        "id": 15,
        "nombre": "Florero de madera",
        "img": '../img/productos/Jardinería/Florero/florero.jpg',
        "precio": 62,
        "ofertaPrecio": "/ $52",
        "category": "Productos",
        "descripcion": "Florero de 5x5x15cm preservada con aceite de linaza. Ideal para tu mesa de centro, comedor, escritorio o ventana. Incluye florero + pipeta de vidrio + clavel y lluvia (duración flores 10 días aprox.).",
        "extra": "Si lo deseas como regalo corporativo o recuerdo, continuemos conversando para brindarte nuestros precios especiales acorde a la cantidad que necesitas."
    },
    {
        "id": 16,
        "nombre": "Maceta de cemento circular/cubo",
        "img": '../img/productos/Jardinería/MacetaDeCemento/IMG_5736.JPG',
        "precio": 20,
        "category": "Productos",
        "descripcion": "Macetas de cemento de diversos colores elaboradas de forma artesanal. Tamaño: 10x10x10cm",
        "oferta": "Por compras mayores o iguales a 5 unidades, precio especial."
    },
    {
        "id": 17,
        "nombre": "Maceta de cemento circular/cubo + planta",
        "img": '../img/productos/Jardinería/MacetaDeCementoPlanta/macetasucuplanta.jpeg',
        "precio": 77,
        "category": "Productos",
        "descripcion": "Macetas de cemento de diversos colores elaboradas de forma artesanal + planta suculenta (echeveria spp. u otra disponible de acuerdo a stock). Tamaño: 10x10x10cm",
        "oferta": "Por compras mayores o iguales a 5 unidades, precio especial."
    },
    {
        "id": 18,
        "nombre": "Maceta Saturno + planta",
        "img": '../img/productos/Jardinería/MacetaSaturnoPlanta/saturno.jpg',
        "precio": 77,
        "category": "Productos",
        "descripcion": "Macetas de arcilla modelo saturno + planta suculenta (echeveria spp. u otra disponible de acuerdo a stock) Tamaño: 10x10x10cm",
        "oferta": "Por compras mayores o iguales a 5 unidades, precio especial."
    },
    {
        "id": 19,
        "nombre": "Porta accesorios",
        "img": '../img/productos/Manejo de residuos/PortaAccesorios/porta.jpg',
        "precio": 35,
        "category": "Productos",
        "descripcion": "Porta accesorios de 4 niveles de 30cm de altura. Cuelga tu mascarillas, lentes, audífonos, collares, pulseras, bandanas, etc."
    },
    {
        "id": 20,
        "nombre": "Vermicompostera",
        "img": '../img/productos/Manejo de residuos/Vermicompostera/vermi.jpg',
        "precio": 420,
        "category": "Productos",
        "oferta": "Por la compra llévate GRATIS asesoría virtual + manual de uso + garantía de 1 mes del pack de lombrices.",
        "descripcion": "Reutiliza los desperdicios de tus alimentos y genera tu propio fertilizante utilizando nuestra vermicompostera. Incluye: vermicompostera de 3 niveles + pack de lombrices."
    },
    {
        "id": 21,
        "nombre": "Juego de muebles",
        "img": '../img/productos/Muebles/21.jpg',
        "precio": 720,
        "category": "Productos",
        "descripcion": "Mueble de dos asientos con respadar (espesor: 45cm ancho: 100cm alto asiento: 50cm alto total 90cm) Mueble de dos asientos sin respaldar (espesor: 45cm ancho: 100cm alto asiento: 50cm) Incluye cojines de espuma zebra- Color: Natural preservado con aceite de linaza.",
        "extra": "Estás buscando un mueble similar o mayor cantidad, continuemos conversando por whatsapp."
    },

    {
        "id": 22,
        "nombre": "Asesoría virtual en áreas verdes",
        "img": '../img/servicios/AsesoríaVirtualEnAreasVerdes/AsesoriaVirtual.jpg',
        "precio": 20,
        "category": "Servicios",
        "descripcion": "Agenda tu asesoría con Gladys o Rosa y aprende junto con ellas o como mantener y/o cultivar sus plantas."
    },
    {
        "id": 23,
        "nombre": "Asesoría presencial en áreas verdes",
        "img": '../img/servicios/AsesoriaPresencialAreas/Gladys.jpeg',
        "precio": 59,
        "category": "Servicios",
        "descripcion": "Agenda tu asesoría con Gladys o Rosa y aprende junto con ellas o como mantener y/o cultivar sus plantas. Precio válido por persona. En caso requiera asesoría para grupo de personas, podemos hacerlo. Escríbenos."
    },
    {
        "id": 24,
        "nombre": "Diseño de áreas verdes",
        "img": '../img/servicios/DiseñoAreasVerdes/diseño.jpg',
        "precio": 50,
        "category": "Servicios",
        "descripcion": "Tienes un espacio donde te gustaría tener plantas pero no sabes cómo ordenar tus ideas, te ayudamos a diseñarlos. Visita sin costo. Costo del diseño desde 50 soles, acorde al metraje."
    },
    {
        "id": 25,
        "nombre": "Mantenimiento o instalación de áreas verdes",
        "img": '../img/servicios/Mantenimientos/mantenimiento.jpg',
        "precio": 270,
        "category": "Servicios",
        "descripcion": "Cotiza con nosotras el mantenimiento o instalación de tu área verde. Visita sin costo, dentro de las zonas de reparto. Costo variable según el proyecto."
    }

]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 100)
    })
}

export const getProducts = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 100)
    })
}

export const getProductsById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 100)
    })
}

const categories = [
    { id: 'Productos', description: 'Productos' },
    { id: 'Servicios', description: 'Servicios' },
]