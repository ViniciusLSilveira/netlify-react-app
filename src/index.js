import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Products } from './Products'
import modeloNegra from './images/modeloNegra.svg'
import brahmaLight from './images/brahmaLight.svg'
import presidenteLight from './images/presienteLight.svg'
import budweiser from './images/budweiser.svg'

const itemList = [
    {
        "id": 1,
        "img": modeloNegra,
        "name": "Modelo Negra",
        "description": "12 Unit : 33oz Bottle",
        "price": 32.00,
        "promotion": "Buy 3, get 1 free.",
        "numberItems": 0,
    },
    {
        "id": 2,
        "img": presidenteLight,
        "name": "Presidente Light",
        "description": "16 Unit : 330ml Bottle",
        "price": 43.00,
        "promotion": "Buy 3, get 1 free Red Bull or 2 Pepsi Black.",
        "numberItems": 0,
    },
    {
        "id": 3,
        "img": brahmaLight,
        "name": "Brahma Light very very light 33 Onz - Caja [12 Botellas]",
        "description": "16 Unit : 330ml Bottle",
        "price": 43.00,
        "promotion": "For every 5 you buy, get up to 2 free",
        "numberItems": 0,
    },
    {
        "id": 4,
        "img": budweiser,
        "name": "Budweiser",
        "description": "16 Unit : 330ml Bottle",
        "price": 26.00,
        "promotion": "For every 5 you buy, get up to 3 free Red Bull or 2 free Pepsi Black",
        "numberItems": 0,
    },
];

ReactDOM.render(
    <Products items={itemList} />,
    document.getElementById('root')
);