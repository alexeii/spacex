import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import './style.css'
import Calendar from './components/Calendar/Calendar';

import FetchData from './service/FetchData';


class App extends Component {

  fetchData = new FetchData();


  state = {
    rocket: "Falcon 1",
    rocketFeatures: null,
    rocketNames : [],
    company: null,
  }

  updateRocket(){

    this.fetchData.getRocket()
    .then(data => {
      this.setState({rocketNames: data.map(item => item.name)})
      return data
    })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {this.setState({rocketFeatures})});
    
  }

  changeRocket = (rocket) => {
    this.setState({rocket}, this.updateRocket)
  }
  
  getCompanyInfo(){
    this.fetchData.getCompany()
    .then(company => this.setState({company}))
    
  }

  componentDidMount(){
    this.updateRocket();
    this.getCompanyInfo();
  }

  render() {
    
    return (
      <BrowserRouter>
      <Header
      changeRocket={this.changeRocket}
      rocketNames={this.state.rocketNames} />
      <Route exact path='/'>
        {this.state.company && <Home company ={this.state.company}
      />}
      </Route>
      <Route path='/rocket'>
        <Main rocket={this.state.rocket}/>
        <Features
        rocketFeatures={this.state.rocketFeatures}
      />
      </Route>

      <Route path='/calendar'>
      <Calendar />
      </Route>

      <Route path='/details'>
      <Details/>
      </Route>

      <Footer 
      company={this.state.company}
      />
      </BrowserRouter>
    );
  }
}

export default App;