const products = [
    {
        id: '1',
        name: 'Remera Venum UFC',
        price: 20000,
        category: 'remera',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_647327-MLA50195919897_062022-F.webp',
        stock: 10,
        description: 'La remera Walkout UFC Venum Fight Night es una remera de rendimiento diseñada específicamente para satisfacer las altas expectativas de los atletas en el evento de MMA más grande del mundo. Su tejido es flexible y duradero, ofreciendo mucha movilidad y comodidad, incluso en los entrenamientos más intensos.'
    },
    {
        id: '2',
        name: 'Buzo Venum UFC',
        price: 30000,
        category: 'buzo',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_955014-MLA52511369115_112022-F.webp',
        stock: 15,
        description: 'Hecha de algodón, es muy cómoda e increíblemente suave. La mezcla perfecta de ropa de calle y ropa de lucha, esta sudadera con capucha cuenta con los colores de la UFC y estará a tu lado a través de tus calentamientos, así como en la vida cotidiana.'
    },
    {
        id: '3',
        name: 'Short Venum MMA',
        price: 15000,
        category: 'short',
        img: 'https://http2.mlstatic.com/D_NQ_NP_982432-MLA45765943516_042021-O.webp',
        stock: 20,
        description: 'Este lanzamiento tiene un modelado más corto de shorts cortos para que tengas total libertad a la hora de moverte. El Nuevo Short Venum LOBO está fabricado con la mejor microfibra de poliéster premium del mercado. Tu Fightshort te garantizará durabilidad, ligereza y suavidad con esta materia prima Top. Esta pieza tiene un sistema de cierre extra seguro, doble solapa y cordón interno para un mejor ajuste.'
    },
    {
        id: '4',
        name: 'Remera Venum UFC Fight',
        price: 28000,
        category: 'remera',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_878887-MLA52595493584_112022-F.webp',
        stock: 15,
        description: 'La remera de manga corta UFC VENUM FIGHT WEEK MENS PERFORMANCE SHORT SLEEVE 2.0 es una pieza de rendimiento diseñada específicamente para satisfacer las altas expectativas de los atletas en el evento de MMA más grande del mundo. Su tejido es flexible y duradero, ofreciendo mucha movilidad y comodidad, incluso en los entrenamientos más intensos. '
    },
    {
        id: '5',
        name: 'Buzo Jiu Jitsu',
        price: 25500,
        category: 'buzo',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_882461-MLA50835756328_072022-F.webp',
        stock: 12,
        description: 'Gracias a la perfecta combinación de algodón y poliéster, el buzo Tribo Jiu Jitsu & Surf es un producto imprescindible para ayudarte a enfrentar el frío este invierno con mucho estilo. ¡Los amantes de la moda se llevarán con este buzo de cuello redondo y el moderno estampado, debido a su aspecto atemporal y casual!'
    },
    {
        id: '6',
        name: 'Short Venum Muay Tai',
        price: 28000,
        category: 'short',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_960565-MLA53899665422_022023-F.webp',
        stock: 20,
        description: 'Esta versión es extremadamente ligera y maleable. Realizarás los ejercicios y brazadas más duros sin sentirte atascado. El nuevo Short Muay Thai Venum Elite está fabricado con una microfibra de alta calidad, 100% Poliéster Premium. Tejido de alta tecnología que asegura comodidad y gran durabilidad.'
    },
    {
        id: '7',
        name: 'Remera Térmica Venum MMA',
        price: 28000,
        category: 'remera',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_958561-MLA46614368952_072021-F.webp',
        stock: 8,
        description: 'Es un producto que te hará entrenar con más intensidad y seguridad. La Nueva "Remera" RASHGUARD VENUM LION FIRE hace que tus músculos se mantengan calientes durante toda la práctica deportiva, además de controlar la sudoración excesiva.'
    },
    {
        id: '8',
        name: 'Buzo Canguro UFC',
        price: 14000,
        category: 'buzo',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_616037-MLA45658063926_042021-F.webp',
        stock: 7,
        description: 'IMPORTANTE buzos canguro. Frisa calidad premium. Capucha forrada. Con cordon ajustable y costuras reforzadas. Chequea tu talle con la tabla de medidas publicada en la última foto. Comparala con uno de tus buzos favoritos. Local a la calle.'
    },
    {
        id: '9',
        name: 'Short Venum Galatic',
        price: 19000,
        category: 'short',
        img: 'https://http2.mlstatic.com/D_NQ_NP_982432-MLA45765943516_042021-O.webp',
        stock: 20,
        description: 'Esta línea fue construida con un enfoque total en la libertad de movimiento y la ligereza. Este es el corto más dinámico en la historia de nuestra marca. Tiene una cintura en forma de cinturón, dejando la prenda segura y tus piernas completamente libres. Esta prenda está confeccionada con un tejido Premium que garantiza un secado rápido y mucha durabilidad.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}