const products = [
    {
        id: 'libro1',
        name: 'Coaching CoActivo',
        img: "../asset/img/coactivo.jpg",
        category: 'coaching',
        price: 3000,
        stock: 11
    },
    
    {
        id: 'libro2',
        name: 'Coaching Equipos en la Practica',
        img: '../asset/img/equipos.jpg',
        category: 'coaching',
        price: 5800,
        stock: 12
    },
    {
        id: 'libro3',
        name: 'Coaching para Transformacion Personal',
        img: '../asset/img/transformacion.jpg',
        category: 'coaching',
        price: 8100,
        stock: 10
    },
    {
        id: 'libro4',
        name: 'Neurociencia aplicada al Coaching',
        img: '../asset/img/neurociencia.jpg',
        category: 'pnl',
        price: 10000,
        stock: 16
    },
    {
        id: 'libro5',
        name: 'Coaching John Withmore',
        img: '../asset/img/whitmore.jpg',
        category: 'ejecutivo',
        price: 16000,
        stock: 10
    },
    {
        id: 'libro6',
        name: 'Estrategias Coaching Ejecutivo',
        img: '../asset/img/bicondoa.jpg',
        category: 'ejecutivo',
        price: 3800,
        stock: 16
    },
    {
        id: 'libro7',
        name: 'Libro Coaching para Lideres',
        img: '../asset/img/evans.jpg',
        category: 'ejecutivo',
        price: 3800,
        stock: 10
    },
    {
        id: 'libro8',
        name: 'Un Mundo de Posibilidades',
        img: '../asset/img/perel.jpg',
        category: 'coaching',
        price: 4500,
        stock: 12
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
    resolve(products)
},1500)})
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })}