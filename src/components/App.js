import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { store } from '../store';
import { push } from 'react-router-redux';
import  Home from '../components/Home/Home'
import  CategoryList from '../components/Category/CategoryList'

//import logo from './../styles/logo.svg';
//import './../styles/App.css';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }
  render() {
    return (
      <div >
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/category" component={CategoryList}/>
        </Switch>
      </div>
    );
  }
}

export default App;
