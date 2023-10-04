import supra1 from './img/car-supra-faf.jpg'
import celica from './img/car-celica.jpg'
import hilux from './img/Car-hilux.jpg'
import rav4 from './img/car-Trav4.jpg'
import land from './img/car-landcruiser.jpg'
import supra from './img/car-supra.jpg'
import corolla from './img/car-corolla.jpg'
import yaris from './img/car-yarisgrsport.jpg'

const products = [
    {
        id: '1',
        name: 'Toyota Supra |Fast and Furious',
        price: 550000,
        category:'Deportivo',
        img: supra1,
        stock: 1,
        description:'Vehiculo de 2 puertas'
    },
    {id: '2',name: 'Toyota Celica', price: 22000, category:'Deportivo', img: celica,stock: 10, description: 'Vehiculo de 2 puertas'},
    {id: '3',name: 'Toyota Hilux', price: 23500, category:'Todoterreno', img: hilux,stock: 7, description: 'Vehiculo de 4 puertas'},
    {id: '4',name: 'Toyota Rav4', price: 29500, category:'Todoterreno', img: rav4,stock: 5, description: 'Vehiculo de 4 puertas'},
    {id: '5',name: 'Toyota Land Cruiser', price: 32000, category:'Casual', img: land,stock: 4, description: 'Vehiculo de 4 puertas'},
    {id: '6',name: 'Toyota Supra', price: 60000, category:'Deportivo', img: supra,stock: 2, description: 'Vehiculo de 2 puertas'},
    {id: '7',name: 'Toyota Corolla', price: 10000, category:'Casual', img: corolla,stock: 15, description: 'Vehiculo de 4 puertas'},
    {id: '8',name: 'Toyota Yaris GR Sport', price: 25000, category:'Deportivo', img: yaris,stock: 11, description: 'Vehiculo de 4 puertas'},
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

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
