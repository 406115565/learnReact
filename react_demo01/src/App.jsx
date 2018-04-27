import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import List from './list.jsx';
// import Form from './form.jsx';
// import Calculator from './temperature.jsx';
// import Props from './props.jsx';
import FilterableProductTable from './ProductTable.jsx';


class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'huchuan',
      list: [1, 2, 3, 4, 5, 6],
      person: {
        name: 'huchuan',
        age: 23
      }
    }
  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h2>list</h2>
          {/* <List listData={this.state.list} user={this.state.person}></List> */}
        </div>

        {/* <Form /> */}
        {/* <Calculator /> */}
        {/* <Props/> */}
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
