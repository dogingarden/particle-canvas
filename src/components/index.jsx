
import React, {  Component } from 'react';
import ReactDOM from 'react-dom';

import Preloader from '../utils/Preloader';
import Header from './Header';

class App extends Component {

    componentDidMount() {
        
        // loadAllData(data => store.dispatch(loadData(data)));
    }

    render() {
        if (this.props.isFetching) {
            return (
                <Preloader />
            );
        }

        return (
          <div>
              <Header/>

              <div>
                <svg width="1100" height="1000" >
                  
                </svg> 
              </div>
          </div>
        );
    }
}


export default App;