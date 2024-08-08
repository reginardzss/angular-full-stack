import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Regina',
        lastname: 'Rodriguez',
        address: {
            country: 'Mexico',
            city: 'Monterrey',
            street: 'Eugenio Garza Sada',
            number: 32,
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 29472,
    },
    items: [
        {
            id: 1,
            product: 'CPU intel i9',
            price: 599,
            quantity: 1,
        }, 
        {
            id: 2,
            product: 'Corsair Teclado Mecanico',
            price: 399,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 899,
            quantity: 2
        }
    ]
}