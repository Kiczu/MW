import { Product } from '@/types';


export const PRODUCTS: Product[] = [
{ id: 1, title: 'Czarka Terra', price: 89, image: '/assets/products/patera-jablko-2.jpeg', tag: 'Nowość', description: 'Mała czarka wypalana w 1240°C, satynowe szkliwo terakota.', variants: [{ id: 's', name: 'S' }, { id: 'm', name: 'M' }] },
{ id: 2, title: 'Miska Gaia', price: 129, image: '/assets/products/patera-biala.jpeg', description: 'Miska do zup i ramenów; matowa oliwka.' },
{ id: 3, title: 'Wazon Kreda', price: 219, image: '/assets/products/patera-list-ziel.jpeg', description: 'Wazon kamionkowy o porowatej fakturze.' },
{ id: 4, title: 'Talerz Runo', price: 149, image: '/assets/products/patera-lisc-braz.jpeg', description: 'Talerz obiadowy 26 cm, szkliwo kość słoniowa.' },
{ id: 5, title: 'Kubek Dolina', price: 99, image: '/assets/products/patera-niebieska.jpeg', description: 'Kubek 300 ml, wygodne ucho, szkliwo reactive.' },
{ id: 6, title: 'Zestaw Patera+Miski', price: 349, image: '/assets/products/patera-jablko.jpeg', description: 'Zestaw na stół: patera i dwie miski.' },
{ id: 7, title: 'Czajniczek Szkliwiony', price: 279, image: '/assets/products/patera-biala.jpeg', description: 'Czajniczek do herbat liściastych, 500 ml.' },
{ id: 8, title: 'Miska Piaskowiec', price: 119, image: '/assets/products/patera-biala.jpeg', description: 'Miska śniadaniowa z drobną szamotą.' },
];


export const getProductById = (id: number) => PRODUCTS.find((p) => p.id === id);