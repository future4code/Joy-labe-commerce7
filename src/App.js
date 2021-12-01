import React from "react";
import Card from "./Components/Card";
import Carrinho from "./Components/Carrinho";

class App extends React.Component {
  state = {
    cards: [
      {
        id: Date.now(),
        tituloProduto: "testes",
        valor: 10000,
        img: "https://picsum.photos/400/400?a=1",
      },
      {
        id: Date.now(),
        tituloProduto: "testes2",
        valor: 20,
        img: "https://picsum.photos/400/400?a=2",
      },
      {
        id: Date.now(),
        tituloProduto: "testes3",
        valor: 300,
        img: "https://picsum.photos/400/400?a=3",
      },
    ],
    filtro: "",
  };

  mudaFiltro = (e) => {
    this.setState({ filtro: e.target.value });
  };

  render() {
    const listaCards = this.state.cards.map((card, index) => {
      console.log(card);
      return (
        <Card
          key={index}
          imagem={card.img}
          nomeProduto={card.tituloProduto}
          precoProduto={"R$" + card.valor}
        />
      );
    });

    const cardsFiltrados = this.state.cards.sort((a, b) => {
      switch (this.state.filtro) {
        case "Crescente":
          console.log('crescente')
          return a.valor > b.valor;
          case "Decrescente":
            console.log('decrescente')
          return a.valor < b.valor;
        default:
          return 0;
      }
    });
    return (
      <div className="App">
        <label>Filtro:</label>
        <select value={this.state.filtro} onChange={this.mudaFiltro}>
          <option value="">Nenhum</option>
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
        </select>
        <div className="card">{listaCards}</div>
        <div className="carrinho">
          <Carrinho />
        </div>
      </div>
    );
  }
}

export default App;
