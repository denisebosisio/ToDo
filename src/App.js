import React, { Component } from "react";

export default class App extends Component {
  state = {
    tarefa: "",
    lista: []
  };

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    });
  };

  add = () => {
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Date.now()
      }),
      tarefa: ""
    });
  };

  enter = (event) => {
    if (this.state.tarefa.length > 0 && event.key === "Enter") {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };

  remove = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => item.id !== id)
    });
  };

  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <input
          onChange={this.handleChange}
          value={this.state.tarefa}
          onKeyPress={this.enter}
        />
        <button onClick={this.add}>Adicionar</button>
        {this.state.lista.map((item) => (
          <div>
            <ul>
              <li>{item.tarefa}</li>
            </ul>
            <button onClick={() => this.remove(item.id)}>x</button>
          </div>
        ))}
      </div>
    );
  }
}
