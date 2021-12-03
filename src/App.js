import React from 'react';
import './App.css';
import styled from 'styled-components';
import { ProductCard } from './components/Products/ProductCard';
import { Planetas } from './components/img/Planetas.jpg'
import { Jupter } from './components/img/Jupter.jpg'
import { Plutão } from './components/img/Plutão.jpg'
import { Saturno } from './components/img/Saturno.jpg'
import { Terra } from './components/img/Terra.jpg'
import { Venus } from './components/img/Venus.jpg'

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const Products = [
    {
    id: 1,
    name: 'Planetas_Balões',
    price: 100,
    photo: <img src = {Planetas} alt="Planetas" />
  },
  {
    id: 2,
    name: 'Jupter',
    price: 150,
    photo: <img src = {Jupter} alt="Jupter" />
  },
  {
    id: 3,
    name: 'Plutão',
    price: 200,
    photo: <img src = {Plutão} alt="Plutão" />
  },
  {
    id: 4,
    name: 'Saturno',
    price: 250,
    photo: <img src = {Saturno} alt="Saturno" />
  },
  {
    id: 5,
    name: 'Terra',
    price: 300,
    photo: <img src = {Terra} alt="Terra" />
  },
  {
    id: 6,
    name: 'Venus',
    price: 350,
    photo: <img src = {Venus} alt="Venus" />
  },
]
class App extends React.Component {
  state = {
    minFilter: 0,
    maxFilter: 1000,
    nameFilter: 'Produto',
    productsInCart: [
    ]
  }
}

function loja() {
  return (
    <div className="AppContainer">
      
      <h1> Lojinha!</h1>
      <ProductCard
      Products={Products} />
      
    </div>
  );
}

export default loja;

