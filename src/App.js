import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store'
import Home from './Screen/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{

  render(){
    return(
      <Provider store={store}>
      
        <Home />
      
      </Provider>
    )
  }
}

export default App;