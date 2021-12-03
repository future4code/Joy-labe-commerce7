import React from "react";
import Card from "./Components/Card";
import Carrinho from "./Components/Carrinho";

class App extends React.Component {
  state = {
    cards: [
      {
        id: Date.now(),
        tituloProduto: "arroz",
        valor: 10000,
        img: "https://picsum.photos/400/400?a=1",
      },
      {
        id: Date.now(),
        tituloProduto: "macarrao",
        valor: 20,
        img: "https://picsum.photos/400/400?a=2",
      },
      {
        id: Date.now(),
        tituloProduto: "brócolis",
        valor: 210,
        img: "https://picsum.photos/400/400?a=4",
      },
      {
        id: Date.now(),
        tituloProduto: "pera",
        valor: 300,
        img: "https://picsum.photos/400/400?a=3",
      },
    ],
    selectOrdenado: "Nenhum",
    inputNome: "",
    inputMinimo: "",
    inputMaximo: "",
  };

  atualizaInputNome = (e) => {
    this.setState({ inputNome: e.target.value });
  };

  atualizaInputMinimo = (e) => {
    this.setState({ inputMinimo: e.target.value });
  };

  atualizaInputMaximo = (e) => {
    this.setState({ inputMaximo: e.target.value });
  };

  selectOrdenado = (e) => {
    this.setState({ selectOrdenado: e.target.value });
  };

  render() {
    const listaCards = this.state.cards
      .filter((produto) => {
        //filtra o array seguindo escolha do usuario
        return produto.tituloProduto
          .toLocaleLowerCase()
          .includes(this.state.inputNome.toLocaleLowerCase());
      })
      .filter(produto => {//fitro usando valor min
        return this.state.inputMinimo ==='' || produto.valor >= this.state.inputMinimo
      })
      .filter(produto => {//fitro usando valor max
        return this.state.inputMaximo ==='' || produto.valor <= this.state.inputMaximo
      })
      .sort((produtoDaVez,produtoSeguinte) => {//filtro do select
        switch (this.state.selectOrdenado) {
          case "Crescente":
            return produtoDaVez.valor - produtoSeguinte.valor
          case "Decrescente":
            return produtoSeguinte.valor - produtoDaVez.valor
          case "Titulo":
            return produtoDaVez.tituloProduto.localeCompare(produtoSeguinte.tituloProduto) //ordenação por titulo
          default:
            return 0;
        }
      })
      .map((card, index) => {
        //após filtra a busca, há renderização dos elementos do array
        return (
          <Card
            key={index}
            imagem={card.img}
            nomeProduto={card.tituloProduto}
            precoProduto={"R$" + card.valor}
          />
        );
      });

    return (
      <div className="App">
        <div>
          <label for='ordemSelect'>Ordenar por:</label>
          <select name='ordemSelect' value={this.state.selectOrdenado} onChange={this.selectOrdenado} value={this.state.selectOrdenado}>
            <option value="">Nenhum</option>
            <option value="Crescente">Preço crescente</option>
            <option value="Decrescente">Preço decrescente</option>
            <option value="Titulo">Título do produto</option>
          </select>
        </div>
        <div>
          <input
            placeholder="Busque pelo produto"
            value={this.state.inputNome}
            onChange={this.atualizaInputNome}
          />
          <input
            type='number'
            placeholder="Valor mínimo do produto"
            value={this.state.inputMinimo}
            onChange={this.atualizaInputMinimo}
            />
          <input
            type='number'
            placeholder="Valor máximo do produto"
            value={this.state.inputMaximo}
            onChange={this.atualizaInputMaximo}
          />
        </div>
        <div className="card">{listaCards}</div>
        <div className="carrinho">
          <Carrinho />
        </div>
      </div>
    );
  }
}

export default App;
