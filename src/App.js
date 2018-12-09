import React, { Component } from 'react';
import Content from './Component/Content/index'
import {test2} from './Component/Content/index'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        word:'',
       
    };
    this.deleteSearch = this.deleteSearch.bind(this)
    
  }
  deleteSearch(){

    let txt = document.getElementById('search').value;
    this.setState({word:txt})
  }

  render() {
    
    return (
     <div className="wrap">
        <div className="header-bg">
          <div className="header">
              <h1>高雄旅遊景點</h1>
              <div className="search-bar">
                <img src={require('./image/search.png')}  alt="search"/>
                <input id="search" type="text" placeholder="search..." onChange={this.onChange.bind(this)}  />
              </div>
          </div>
        </div>
        <Content searchWord={this.state.word} deleteSearch={this.deleteSearch}/>
     </div>
    );
  }
  onChange(){
    let txt = document.getElementById('search').value;
    this.setState({word:txt},function(){
      //console.log(this.state.word)
    });
   
    
  }
 
}

export default App;
