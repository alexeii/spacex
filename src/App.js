import React, { Component } from 'react';
import { BrowserRouter, Route }  from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import FetchData from './service/FetchData';

export default class App extends Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    links: null,
  };

  componentDidMount() {
    this.updateCompanyInfo();
    this.updateRocket();
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState( { rockets: data.map(item => item.name) } )
        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({ rocketFeatures }, () => console.log(this.state))) // вторым параметром в setState - callback-функция
  }

  updateCompanyInfo() {
    this.fetchData.getCompany()
      .then(company => {
        this.setState( { company } );
      })
  }

  changeRocket = (rocket) => {
    this.setState({
      rocket
    }, this.updateRocket)
  }

  render() {
    return (
      <BrowserRouter>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Route exact path='/' render={() => this.state.company && <Home company = {this.state.company}/>} />
        <Route path='/rocket' render={() => this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/details/:id' component={Details} />
        {this.state.company && <Footer {...this.state.company} />}
      </BrowserRouter>
    )
  }
}