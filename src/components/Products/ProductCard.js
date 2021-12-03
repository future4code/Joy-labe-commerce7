import React from 'react'
import styled from 'styled-components';


const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`
export class ProductCard extends React.Component {
  render() {
    
    const Products = this.props.Products

    return <CardContainer>
      <img src={Products.photo}/>
      
      <CardInfo>
        <p>{Products.name}</p>
        <p>R${Products.price},00</p>
      
      </CardInfo>
    </CardContainer>
  }
}
