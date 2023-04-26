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