import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Imagem = styled.img`
  width: 300px;
`
export default class Card extends React.Component {

  onClickBotao = () => {
    console.log("clicou")
  }

  render() {
    return (
      
        <CardContainer>
          <Imagem src={this.props.imagem} />
          <p>{this.props.nomeProduto}</p>
          <p>{this.props.precoProduto}</p>
          <button onClick={this.onClickBotao}>Adicionar ao carrinho</button>
        </CardContainer>
      
    )
  }
}
